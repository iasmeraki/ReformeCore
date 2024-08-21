import React from 'react'
import style from './principal.module.css'
export default function Principal() {
  return (
    <div>
      <div className={style.Principal}>
      <div className={style.início}>
        <div>
        <img className={style.png} src="https://cdn-icons-png.flaticon.com/512/2148/2148378.png" alt="" />
        <p className={style.txt}>Nesse site você encontrará as melhores dicas de decoração para sua casa, paletas de cores
        e sugestões de móveis que combinam estilo e conforto.</p>
        </div>
       <div>
        <img className={style.png} src="https://cdn-icons-png.flaticon.com/512/663/663257.png" alt="" />
        <p className={style.txt}> Além disso, oferecemos sugestões para projetos DIY (faça você mesmo) que vão transformar qualquer ambiente,
          desde a sala de estar até o jardim. Com nossas dicas, você poderá criar espaços acolhedores e únicos, refletindo a sua personalidade e gosto pessoal.</p>
        </div>
        <div>
          <img className={style.png} src="https://static.vecteezy.com/system/resources/previews/018/931/360/original/black-camera-icon-png.png" alt="" />
        <p className={style.txt}>Navegue pelas nossas seções de inspiração, onde você encontrará galerias de fotos, vídeos e artigos escritos por especialistas em design de interiores. Atualizamos nosso conteúdo regularmente para garantir que você esteja sempre por dentro das últimas tendências e novidades do mundo da decoração. Seja você um iniciante ou um entusiasta experiente, temos algo para todos.</p>
        </div>
        <div>
          <img className={style.png} src="https://cdn-icons-png.flaticon.com/512/4898/4898707.png" alt="" />
        <p className={style.txt}>Não perca a oportunidade de participar da nossa comunidade online, onde você pode compartilhar suas próprias criações, tirar dúvidas e trocar ideias com outros apaixonados por decoração. Juntos, vamos transformar cada canto da sua casa em um lugar especial e cheio de charme.</p>
        </div>
      </div>
      </div>

      <section id="subscription" className={style.subscription}>
        <div className={style.container}>
          <h2 className={style.title}>
            Conheça nossos planos e economize na assinatura mensal ou bimestral
            com o pagamento antecipado. Para  ter atendimento on-line com nossos especialistas.
          </h2>
          <div className={style.subscriptionPlans}>
            <div className={style.subscriptionCard}>
              <div>
                <div className={style.subscriptionPlan}>
                  <h3>Mensal</h3>
                  <p className={style.subscriptionPrice}>
                    R$ 19,90 <span className={style.textsmall}>/mês</span>
                  </p>
                </div>
                <ul className={style.subscriptionGoals}>
                  <li className={style.subscriptionDescription}>
                    Aproveite e consiga dicas primeiro que todo mundo.
                  </li>
                  <li className={style.subscriptionDescription}>
                    Logue em 1 tela por vez.
                  </li>
                  <li className={style.subscriptionDescription}>
                    Tenha conteúdo em primeira mão.
                  </li>
                  
                </ul>
              </div>
              <button className={style.button}>
                Escolher Mensal
              </button>
            </div>

            <div className={style.subscriptionCard}>
              <div>
                <div className={style.subscriptionPlan}>
                  <h3>Bimestral</h3>
                    <p className={style.subscriptionPrice}>
                      R$ 27,90 <span className={style.textsmall}>/mês</span>
                    </p>
                </div>
                <ul>
                    <li className={style.subscriptionDescription}>
                    Aproveite em todos os seus dispositivos.
                  </li>
                    <li className={style.subscriptionDescription}>
                    Logue em até 3 telas ao mesmo tempo.
                  </li>
                    <li className={style.subscriptionDescription}>
                    Tenha conteúdo a qualquer momento.
                  </li>
                    <li className={style.subscriptionDescription}>
                    Tenha especialistas te respondendo a todo momento
                  </li>
                    <li className={style.subscriptionDescription}>
                    Crie até 5 perfis diferentes.
                  </li>
                </ul>
              </div>
              <button className={style.button}>
                Escolher Bimestral
              </button>
            </div>
          </div>
        </div>
      </section>



      <div className={style.title}>Ideias para Quartos</div>

      <p className={style.abertura}>Quer deixar seu quarto com um ar aconchegante e de classe? Siga os exemplos abaixo:</p>

      <div className={style.quartos}>

        <img className={style.quarto1} src="https://i.pinimg.com/736x/ae/bb/61/aebb61fae8923a688c417b802120a0e2.jpg" alt="" />
        <div className={style.qp}>
          <div>
            <img className={style.quarto2} src="https://i.pinimg.com/736x/1f/a9/25/1fa92559a699e33fd694c135cdec8537.jpg" alt="" />
          </div>
          <div >
            <img className={style.paleta} src="https://i.pinimg.com/736x/3c/69/fc/3c69fc8b15ab012ea938b3d4ea0a3508.jpg" alt="" />
          </div>


        </div>
        <div className={style.dica}>
          <p>Para pessoas que gostam de tons neutros e terrosos, o marrom e bege é uma ótima opção.</p>

          <p>Para criar um ambiente acolhedor e sofisticado.</p> <p>Esses tons trazem uma sensação de calma e conforto, tornando qualquer espaço mais convidativo.</p><p> Além disso, são extremamente versáteis e podem ser combinados</p> <p>com uma variedade de outras cores e texturas.</p> <p> Um toque de verde ou azul pode acrescentar frescor,</p> <p>enquanto detalhes em dourado ou cobre podem adicionar um toque de elegância.</p> <p>A decoração com esses tons pode incluir móveis de madeira,</p> <p>tecidos naturais como linho e algodão, e acessórios artesanais</p> <p> que trazem um charme especial ao ambiente.</p>
        </div>



      </div>

      <div className={style.quartos}>

        <img className={style.quarto1} src="https://i.pinimg.com/564x/5a/d6/52/5ad652ebd4d21efc5ec7f83131886de7.jpg" alt="" />
        <div className={style.qp}>
          <div>
            <img className={style.quarto2} src="https://i.pinimg.com/564x/cf/bb/30/cfbb308e03803652d4389ad0526a7c8e.jpg" alt="" />
          </div>
          <div >
            <img className={style.paleta} src="https://i.pinimg.com/736x/cd/40/d8/cd40d825b51acdcfaba8297013c8046b.jpg" alt="" />
          </div>


        </div>
        <div className={style.dica2}>
          <p>Para os amantes da natureza, os tons de verde são uma ótima opção de classe e estilo. </p>

          <p>Além disso, o verde é uma cor versátil que pode ser incorporada tanto em ambientes internos, quanto externos.</p> <p>Plantas e jardins trazem vida e frescor para qualquer espaço, </p><p> enquanto a decoração em tons de verde pode criar uma atmosfera de serenidade e equilíbrio. </p> <p> Seja em um pequeno vaso no escritório ou em um grande parque urbano.
          </p>
        </div>



      </div>


      <div className={style.quartos}>

        <img className={style.quarto1} src="https://i.pinimg.com/564x/36/de/a7/36dea7bac8514e8460c4f10d1991f3f8.jpg" alt="" />
        <div className={style.qp}>
          <div>
            <img className={style.quarto2} src="https://i.pinimg.com/564x/07/74/ab/0774abb0986113933ab1a8494b70349f.jpg" alt="" />
          </div>
          <div >
            <img className={style.paleta} src="https://i.pinimg.com/564x/72/57/da/7257daaeea92b6534507890dc95808ed.jpg" alt="" />
          </div>


        </div>
        <div className={style.dica3}>
          <p>Um dos queridinhos das mulheres o rosa, que combina muito com detalhes em dourado.</p>

          <p>Essa combinação não só exala feminilidade como também elegância e sofisticação. </p> <p>O rosa, em suas diversas tonalidades, desde o mais suave ao mais vibrante, pode ser usado em roupas,</p><p> acessórios e até na decoração de ambientes. Quando combinado com detalhes dourados,</p> <p> o resultado é um visual glamoroso e cheio de charme. </p> <p>Imagine um vestido rosa claro com bordados dourados, ou uma sala de estar com almofadas rosa </p><p>e detalhes em dourado nas molduras dos quadros. </p><p>As possibilidades são infinitas, e o efeito é sempre encantador.</p>
        </div>


      </div>

      <div className={style.quartos}>

        <img className={style.quarto1} src="https://i.pinimg.com/564x/b0/1f/95/b01f95ca03dc02b2b62c61cc4e20ba8f.jpg" alt="" />
        <div className={style.qp}>
          <div>
            <img className={style.quarto2} src="https://i.pinimg.com/564x/b3/65/e1/b365e13f616704b36baee943644528d5.jpg" alt="" />
          </div>
          <div >
            <img className={style.paleta} src="https://i.pinimg.com/564x/c3/50/60/c35060357c24314037a5ae6c32fa80fe.jpg" alt="" />
          </div>


        </div>
        <div className={style.dica4}>
          <p>Para deixar o quarto com cara de riqueza o azul escuro costuma sempre estar nas opções.</p>

          <p>Essa tonalidade, além de elegante, traz uma sensação de profundidade e sofisticação ao ambiente. </p> <p>Combinar o azul escuro com detalhes dourados ou </p><p>prateados pode elevar ainda mais o nível de requinte. </p> <p>Adicionar texturas, como veludo em almofadas e cortinas,</p> <p>ou um tapete felpudo, contribui para um espaço aconchegante e luxuoso. </p>
        </div>



      </div>
    </div>
  )
}


