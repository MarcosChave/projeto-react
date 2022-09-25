import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import { Container, BoxList, Input,  Button, ListItem, Check, Trash, NoItem, Sad } from './style.js';
 // importa o arquivo de css



//Codigo JavaScript
function App() {
const [list, setList] = useState([]) //Este guarda a lista completa
const [task, setTask] = useState('') //esse guarda o que foi escrito no input

  //const list = [{ id: uuidv4(), task: "Lavar vasilhas"}, 
  //{ id: uuidv4(), task: "Estudar"}]


function InputMudou(event){
 setTask(event.target.value) //evento dentro do input pego no console
  
}

function cliqueiNoBotão () {
  if(task){
    setList([ ...list, {id:uuidv4(), task, finished: false }])  
  } 

}

function finalizarTarefa(id){

const newList = list.map( item => ( 
  item.id == id ? {...item, finished: !item.finished } : item
))
setList(newList)
}

function deletarItem(id){
  const newList = list.filter(item => item.id !== id ) /* filter só coloca no novo array o que é true */
  setList (newList)
}
//Retorna código HTML
  return (
    // Aqui posso usar JS mas dentro dos {}
    <>
      <Container>
        <BoxList>
      <Input onChange ={InputMudou} placeholder="O que tenho para fazer ?"></Input> 
      <Button onClick={cliqueiNoBotão}>Adicionar</Button>

      <ul>
      {
      list.length > 0 ? (
      list.map(item => (
        <ListItem  key ={item.id}  isFinished={item.finished}>
          <Check onClick={() => finalizarTarefa(item.id)}/>   
           <li>{item.task}</li>
           <Trash onClick={()=> deletarItem(item.id) }/>
        </ListItem>
         //Toda vez que utilizar um MAP tem que ter uma identificação própria (key {})
      ))
      ) : (
        <NoItem><div><Sad/></div> Não há ítens na lista</NoItem>
      )}
      </ul>
      </BoxList>
      </Container>
    </>
  )
}

export default App 
/* 
toda div pai tem que ter uma key
-sempre exportar o componente, se não estará visível em outros arquivos
- Componentes devem ser sempre escrito por letra maiúscula 
- React só retorna apenas um componente HTML, ou seja, criar tudo dentro de uma unica div pai.
- fragment <> </>, serve para retornar o HTML mas sem a div.
- Captar eventos, TAG de abertura (on)
- bliblioteca para sempre gerar um id -> npm i uuid
- Sempre que eu quiser alterar uma variavel e essa mudança reflita na tela é necessario utilizar o React Hook, com o derivado useState 
- Spread operator(... variavel) Esparrama as informações de varios arrays criando um unico
- Toda variávem em um novo arvivo de exportação deve ter letra maiúscula.*/
