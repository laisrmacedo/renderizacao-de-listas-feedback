import styled from "styled-components";

export const Tarefa = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 1rem;
border: 1px solid gray;
border-radius: 10px;
padding: 6px 8px;
color: gray;
text-decoration: line-through;
/* transition: background-color 0.3s;
&:hover {
  background-color: rgb(206, 206, 206);
} */
`;

export const ListaContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;