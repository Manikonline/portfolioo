import './Portfolio.css'
import img1 from '../../../public/Screenshot_1.png'
import img2 from '../../../public/Screenshot_2.png'
import img3 from '../../../public/Screenshot_3.png'
import { FaEye } from 'react-icons/fa';
const Portfolio = () => {
    return ( 
        <div className='portfolio py-14'>
            <div className='text-white text-center'>
            <h2 className='text-3xl font-bold'>Portfolio</h2>
                <h5 className=''>Explore my work and give me feedback</h5>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 m-auto gap-5'>
                <div className='portfolio_card p-5'>
                  <div className='portfolio_image'>
                    <img className='imagee' src={img1} alt="" />
                  </div>
                  <div className='portfolio_content  pt-28 pr-5 text-center'>
                    <h5 className='text-2xl'>React Langing Page</h5>
                      <div className='content_top'>
                        <a className='text-sm' href="https://mil-school-c89cf.web.app/">View Live Demo </a>
                      </div>
                  </div>
                </div>
                <div className='portfolio_card p-5'>
                  <div className='portfolio_image'>
                    <img className='imagee' src={img2} alt="" />
                  </div>
                  <div className='portfolio_content pt-28 pr-5 text-center'>
                    <h5 className='text-2xl'>React Langing Page</h5>
                      <div className='content_top'>
                        <a className='text-sm' href="https://toy-box-8d4dc.web.app/">View Live Demo </a>
                      </div>
                  </div>
                </div>
                <div className='portfolio_card p-5'>
                  <div className='portfolio_image'>
                    <img className='imagee' src={img3} alt="" />
                  </div>
                  <div className='portfolio_content   pt-28 pr-5 text-center'>
                  <h5 className='text-2xl'>React Langing Page</h5>
                      <div className='content_top'>
                        <a className='text-sm' href="https://bd-food-frenzy.web.app/">View Live Demo </a>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;