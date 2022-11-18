import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import ListaDeRemovidos from "../ListaDeRemovidos/ListaDeRemovidos";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const [listaDeRemovidos, setListaDeRemovidos] = useState([])

  const removeTarefa = (tarefa) => {
    // const listaFiltrada = lista.filter((item) => item !== tarefa);
    // setLista(listaFiltrada);
    
    const itemClicado = lista.filter((item) => {
      return tarefa === item;
    });

    const arrayDosRemovidos = [...listaDeRemovidos, itemClicado[0]]
    setListaDeRemovidos(arrayDosRemovidos)

    lista.splice(lista.indexOf(itemClicado[0]), 1);
    setLista([...lista]);
  };


  function keyEnter(){
    window.addEventListener("keypress", (e) => {
      if(novaTarefa !== "" && e.key === "Enter"){
        adicionaTarefa()
      }
    })
  }


  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={() => keyEnter()}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <ListaDeRemovidos listaDeRemovidos={listaDeRemovidos}/>
    </ListaTarefasContainer>
  );
}
