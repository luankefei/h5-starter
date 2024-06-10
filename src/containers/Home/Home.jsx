import { Element, Link, animateScroll as scroll } from 'react-scroll'

import Navigation from '../../components/Nav/index'
import About from '../../components/About/About'
import Infromation from '../../components/Information/Information'
import Introduce from '../../components/Introduce/Introduce'

import { Container } from './home.style'
import sortUpIcon from '../../assets/image/sort-up.png'
import image1 from '../../assets/image/image1.png'
import image2 from '../../assets/image/image2.png'
import image3 from '../../assets/image/image3.png'
import image4 from '../../assets/image/image4.png'

const Home = () => {
  const scrollToTop = () => {
    console.log(111)
    scroll.scrollToTop()
  }

  return (
    <Container>
      <Navigation></Navigation>
        
      <main className='main'>
        <div className='home'>
          <section className='banner'>
            <div className='text-content'>
              <p>お金から自由な人生を</p>
              <p>コンサルティングする</p>
            </div>
          </section>

          <section className='banner-text'>
            <p>わたしでもできた。</p>
            <p>そして勝てる理由がわかった。</p>
            <p>Parkway金融研究センターで。</p>
          </section>

          <section className='section'>
            <ul className='image-list'>
              <li>
                <Link to='about' smooth={true} offset={-66} duration={500}><img src={image1}/></Link>
              </li>
              <li>
                <Link to='about' smooth={true} offset={-66} duration={500}><img src={image2}/></Link>
              </li>
              <li>
                <Link to='about' smooth={true} offset={-66} duration={500}><img src={image3}/></Link>
              </li>
              <li>
                <Link to='about' smooth={true} offset={-66} duration={500}><img src={image4}/></Link>
              </li>
            </ul>
          </section>
        </div>

        <Element name="about"><About/></Element>
        <Element name="information"><Infromation/></Element>
        <Element name="introduce"><Introduce/></Element>
        <Element name="seminar">
          <div style={{ height: '300px'}}>Section 4</div>
        </Element>
        <Element name="reason">
          <div style={{ height: '300px'}}>Section 5</div>
        </Element>
        <Element name="voice">
          <div style={{ height: '300px'}}>Section 6</div>
        </Element>
      </main>

      <div className='to-top'>
        <button onClick={scrollToTop}>
          <img src={sortUpIcon}/>
        </button>
      </div>
    </Container>
  )
}

export default Home