import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../../services/api'
import { useValorTotal } from '../../../Uteis'
import { ButtonPerfil } from '../ButtonPerfil/styled'
import { close, clear } from '../../../store/reducer/cart'
import { Prato } from '../../../types/Restaurante'

import {
  Ajuste,
  Buttondiv,
  ContainerRec,
  ContentFormulario,
  Subtitulo,
  Visivel
} from './styles'

type PratoSimples = Pick<Prato, 'id' | 'preco'>

type CampoFormulario =
  | 'receiver'
  | 'description'
  | 'city'
  | 'zipCode'
  | 'number'
  | 'complement'
  | 'cardName'
  | 'cardNumber'
  | 'code'
  | 'month'
  | 'year'

interface FormProps {
  avancaParaCarrinho: () => void
  setMostrarImagemFechar: (mostar: boolean) => void
  pratos: PratoSimples[]
}

const Formulario = ({
  avancaParaCarrinho,
  setMostrarImagemFechar,
  pratos
}: FormProps) => {
  const [purchase, { isError, isLoading, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      code: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.number().required('O campo é obrigatório'),
      code: Yup.number().required('O campo é obrigatório'),
      month: Yup.number()
        .required('O campo é obrigatório')
        .min(1, '')
        .max(12, ''),
      year: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.code),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: pratos.map((prato) => ({
          id: prato.id,
          price: prato.preco
        }))
      }).then(() => {
        setMostrarImagemFechar(false)
      })
    }
  })

  const Total = useValorTotal()

  const [formularioAtivo, setFormularioAtivo] = useState('entrega')

  const avancaParaPagamento = () => {
    const camposObrigatorios: CampoFormulario[] = [
      'receiver',
      'description',
      'city',
      'zipCode',
      'number'
    ]

    const todosCamposValidos = camposObrigatorios.every((campo) => {
      const campoFoiTocado = form.touched[campo] // Agora o TypeScript sabe que `campo` é um CampoFormulario
      const campoNaoPossuiErro = !form.errors[campo] // Mesmo aqui
      return campoFoiTocado && campoNaoPossuiErro
    })

    if (todosCamposValidos) {
      setFormularioAtivo('pagamento')
    } else {
      form.validateForm().then(() => {
        const touchedFields = camposObrigatorios.reduce((acc, campo) => {
          acc[campo] = true // O TypeScript entende que `acc` e `campo` são compatíveis
          return acc
        }, {} as { [key in CampoFormulario]?: boolean }) // Isso assegura que `acc` é tratado como um objeto com chaves do tipo CampoFormulario
        form.setTouched(touchedFields)
      })
    }
  }

  const RetornaParaEntrega = () => {
    setFormularioAtivo('entrega')
  }

  const Recibo = () => {
    setFormularioAtivo('recibo')
  }

  const dispatch = useDispatch()

  const CloseCart = () => {
    dispatch(close())
  }

  const ClearCart = () => {
    dispatch(clear())
  }

  useEffect(() => {
    if (!isLoading && data && !isError) {
      console.log('Dados da Resposta:', data)
      Recibo()
    }
  }, [isLoading, data, isError])

  const checkInputError = (fildName: string) => {
    const estaAlterado = fildName in form.touched
    const estaInvalido = fildName in form.errors
    const hasError = estaAlterado && estaInvalido

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      <Visivel className={formularioAtivo === 'entrega' ? 'is-open' : ''}>
        <ContentFormulario>
          <label htmlFor="receiver">Quem ira receber</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            value={form.values.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('receiver') ? 'error' : ''}
          />
          <label htmlFor="description">Endereço</label>
          <input
            type="text"
            id="description"
            name="description"
            value={form.values.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('description') ? 'error' : ''}
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('city') ? 'error' : ''}
          />
          <Ajuste>
            <div>
              <label htmlFor="zipCode">CEP</label>
              <InputMask
                type="text"
                id="zipCode"
                name="zipCode"
                value={form.values.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                mask="99999-999"
                className={checkInputError('zipCode') ? 'error' : ''}
              />
            </div>
            <div>
              <label htmlFor="number">Numero</label>
              <input
                type="number"
                id="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputError('number') ? 'error' : ''}
              />
            </div>
          </Ajuste>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <Buttondiv>
            <ButtonPerfil type="button" onClick={avancaParaPagamento}>
              Continuar com o pagamento
            </ButtonPerfil>
            <ButtonPerfil type="button" onClick={avancaParaCarrinho}>
              voltar para o carrinho
            </ButtonPerfil>
          </Buttondiv>
        </ContentFormulario>
      </Visivel>
      <Visivel className={formularioAtivo === 'pagamento' ? 'is-open' : ''}>
        <ContentFormulario>
          <Subtitulo>Pagamento - Valor a pagar R$ {Total}</Subtitulo>
          <label htmlFor="cardName">Nome do cartão</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={form.values.cardName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={checkInputError('cardName') ? 'error' : ''}
          />
          <Ajuste>
            <div>
              <label className="numberw" htmlFor="cardNumber">
                Numero do cartão
              </label>
              <InputMask
                type="text"
                id="cardNumber"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="cardNumber"
                value={form.values.cardNumber}
                className={checkInputError('cardNumber') ? 'error' : ''}
                mask="9999 9999 9999 9999"
              />
            </div>
            <div>
              <label htmlFor="code">CVV</label>
              <InputMask
                type="text"
                id="code"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="code"
                className={checkInputError('code') ? 'error' : ''}
                mask="999"
              />
            </div>
          </Ajuste>
          <Ajuste>
            <div>
              <label htmlFor="month">Mês de vencimento</label>
              <InputMask
                type="text"
                id="month"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="month"
                className={checkInputError('month') ? 'error' : ''}
                mask="99"
              />
            </div>
            <div>
              <label htmlFor="year">ano de vencimento</label>
              <InputMask
                type="text"
                id="year"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                name="year"
                className={checkInputError('year') ? 'error' : ''}
                mask="9999"
              />
            </div>
          </Ajuste>
          <Buttondiv>
            <ButtonPerfil type="submit">Finalizar pagamento</ButtonPerfil>
            <ButtonPerfil type="button" onClick={RetornaParaEntrega}>
              voltar para edição de endereço
            </ButtonPerfil>
          </Buttondiv>
        </ContentFormulario>
      </Visivel>
      <Visivel className={formularioAtivo === 'recibo' ? 'is-open' : ''}>
        <ContainerRec>
          <h3>Pedido realizado - {data?.orderId}</h3>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
        </ContainerRec>
        <ButtonPerfil
          onClick={() => {
            avancaParaCarrinho()
            CloseCart()
            ClearCart()
          }}
        >
          Concluido
        </ButtonPerfil>
      </Visivel>
    </form>
  )
}

export default Formulario
