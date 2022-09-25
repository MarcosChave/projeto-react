import styled from 'styled-components' //importa o css
import { FcCheckmark, FcEmptyTrash } from 'react-icons/fc'
import { FaRegFrown } from 'react-icons/fa'

import Imagem from './img/tarefaIMG.jpg'
/*linear-gradient(#52afd1, #07b4f2, #55b5d9, #3584a1, #418ba6);*/

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),
    url(${Imagem});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxList = styled.div`
  background: #858585;
  padding: 40px 20px;
  border-radius: 20px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`
export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-right: 40px;
  width: 340px;
`
export const Button = styled.button`
  background: #418ba6;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  height: 40px;
  border: none;
  color: white;
  width: 130px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
export const NoItem = styled.p`
  text-align: center;
  font-weight: bold;
  opacity: 0.3;
`
export const ListItem = styled.div`
  background: ${props => (props.isFinished ? '#E8FF8B' : '#E4E4E4')};
  height: 60px;
  width: 500px;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;

  li {
    list-style: none;
  }
`
export const Check = styled(FcCheckmark)`
  cursor: pointer;
`
export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`
export const Sad = styled(FaRegFrown)`
  display: flex;
  margin-bottom: -20px;
  padding-left: 160px;
  font-size: 20px;
`
