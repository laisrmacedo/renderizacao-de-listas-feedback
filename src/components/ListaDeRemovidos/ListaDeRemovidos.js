import { Tarefa, ListaContainer } from "./styled"

export default function ListaDeRemovidos(props) {
  return(
    <>
      {props.listaDeRemovidos.map((item, index) => {
        return(
          <ListaContainer key={index}>
            <Tarefa >
              <p>{item}</p>
            </Tarefa>
          </ListaContainer>
        )
      })}
    </>
  )
}