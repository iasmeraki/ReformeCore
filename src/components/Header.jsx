import React from 'react'
import style from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className={style.Nav}>
        <div ><a href="https://www.canva.com/design/DAGOCyU6MQE/kdJ4f1tJE-sTq7jPFRqVeA/view?utm_content=DAGOCyU6MQE&utm_campaign=designshare&utm_medium=link&utm_source=viewer"><img className={style.logo} src="https://i.pinimg.com/736x/70/4e/ba/704ebad79435be8a32c432304a348128.jpg" alt="" /></a></div>
        <ul className={style.menu}>
           <Link to="./"><button className={style.button}>Principal</button></Link>
           <Link to="./Paletas"><button className={style.button}>Paletas</button></Link>
           <Link to="./Decorações"><button className={style.button}>Decorações</button></Link>
           <div className={style.contaH}>
           <Link to="./Conta"><img  className={style.c}  src="https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png" alt="" /></Link>
           </div>
        </ul>
      </div>
    </div>

    
  )
}


