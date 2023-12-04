import { Container } from './styles'

export function Button({ title, loading = false, ...rest }) {
    // Se loading recebe true, fica carregando
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    //   .... rest Operation é qualquer outra propriedade que tenha passado 
    //   com o ...rest não precisa definir todas as propriedades
    >
        {/* 
            if ternário 
            - Se true, recebe carregando
            - Se false, recebe o valor
        */}
      { loading ? 'Carregando...' : title } 
    </Container >
  )
}