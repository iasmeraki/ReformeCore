import React from 'react'
import style from './footer.module.css'

 

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.contatos}>
      <h3>Contatos</h3> 
      <p>Telefone: (11) 99999-9999</p>
      <p>Email: atelier@reformecore.com.br</p>
      <p>Endereço: Rua 123, 1234, São Paulo, SP</p>
      </div>

      
    <div className={style.Newsletter}>
      <section className={style.newsletter}>
        <div className={style.newsletterInfo}>
        <h1>NewsLetter</h1>
        <p>assine e fique por dentro das novidades</p>
        </div>
        <form className={style.newsletterForm}>
      <input type="email" placeholder="Digite seu e-mail"></input>
      <button className={style.button} >Enviar</button>
        </form>
      </section>
    </div>
      
      <div className={style.apoio}>
      <h3>Apoio</h3>
      <p>Responsáveis: Letícia Brito, Iasmim Barbosa</p>
      </div>

    </div>
  )
}
