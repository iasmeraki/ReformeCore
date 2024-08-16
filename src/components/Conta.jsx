import React from 'react'
import style from './conta.module.css'


export default function Conta() {
  return (
    <div className={style.cat}>
      <div className={style.boxC}>
        <div className={style.caixa}>
        <h2>Acessar minha conta</h2>
        <input type="email" placeholder="E-mail" />
        <button className={style.buttonC}>Acessar</button>
        
        <h2>Criar Conta </h2>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button className={style.buttonC}>Criar Conta</button>
      </div>
      </div>
      <script src="//code.jivosite.com/widget/O5S1ORjs0w" async></script>
    </div>
  )
}


