import React, { useState } from 'react'
import { Container } from './information.style'
import lace1 from "../../assets/image/lace1.png";
import img14 from '../../assets/image/image14.png'

function Information() {
  const [isShow, setStatus] = useState(false)

  const handleChange = () => {
    setStatus(true)
  }
  return(
    <Container>
      <div className='img-box'>
        <img src={lace1} className="lace-img"/>
        <img src={img14} className="men-img"/>
      </div>

      <div className='letter'>
        <h4>センター長からのメッセージ</h4>

        {isShow ? (
          <div className='content long-content'>
            <p>世の中には、自分が変わることなくお金だけが欲しいという人が多い。お金を増やしたかったのに失ってしまうというカラクリは、知識のないまま無茶な取引をしてしまうことだけでなく、「簡単に儲かる」と謳って高額キックバックのある商材に誘導するというマネー業界の悪しき習慣も関係する。 </p>
            <p>退職金などまとまったお金を持った人を狙った詐欺も多い。でもそんなことをしていては、信用は築けない。</p>
            <p>私たちの目的は、お金をもらうことではなく、豊かな人生を築くことです。</p>
            <p>それでもこの事業を続けているのは、生きるチカラをつける教育が行われていないことへの危機感からきている。学校で教えてもらったものは実社会で使えないことも多いし、社会現象の変化や災害が起こるだけで生活が脅かされる。After コロナでデフレも加速する。</p>
            <p>自分たちの子供の世代、孫の世代まで不安なく生きていけるようにするには、きちんとしたノウハウ・お金を生み出す能力をみんなが持ち、伝承していくことが当たり前にならなければならない。人々が不安モチベーションで行動することなく、幸せのための選択をしていける時代にするために。</p>
            <p>そのためには、「投資しながら働く」ということはとても合理的。移り変わりの激しい現代では、今のお金は自分の体で稼いで、投資で将来のお金をつくっていくのが、いい相乗効果になる。</p>

            <div className='bottom'>
              <p>Parkway金融研究センター</p>
              <p>KING</p>
            </div>
          </div>
        ): (
          <div className='content'>
            <p>世の中には、自分が変わることなくお金だけが欲しいという人が多い。お金を増やしたかったのに失ってしまうというカラクリは、知識のないまま無茶な取引をしてしまうことだけでなく、「簡単に儲かる」と謳って高額キックバックのある商材に誘導するというマネー業界の悪しき習慣も関係する。</p>
            <p>退職金などまとまったお金を持った人を狙った詐欺も多い。でもそんなことをしていては、信用は築けない。</p>
            <a className='show-more' onClick={handleChange}>show more</a>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Information