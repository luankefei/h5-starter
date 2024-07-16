import { Container } from './about.style'
import { PageTitle } from "../Seminar/seminar.style";

function About() {
 return (
   <Container>
     <PageTitle>ABOUT　US</PageTitle>

     <section>
        <b>ミッション（果たすべき使命）</b>
        <p>多くの国民の投資リテラシーと、</p>
        <p>ビジネスリテラシーを向上させることで</p>
        <p>経済の活性化を行う。</p>
     </section>

     <section>
        <b>ビジョン（目指す世界）</b>
        <p>目指すのはFinancial　Free。</p>
        <p>経済的な「⾃⽴」と「⾃由」を⼿に⼊れる学びの場を提供。</p>
     </section>
   </Container>
 )
}

export default About