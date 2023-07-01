import { FaInstagram, FaLinkedin,FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import resume from '../../../public/MERN Stack Developer Resume of Md Tofazzol Hossain Manik.pdf'
import './Banner.css'
const Banner = () => {
    return (
     <div>
           <div className="background-color py-20 grid md:grid-cols-2 sm:grid-cols-1   ">
          
          <div className="md:ms-20 ms-8">
          <div className='Home-container'>
              <div className='Home-parent'>
                  <div className='Home-details'>
                      <div className='colz'>
                         <div className="colz-icon flex pt-10 gap-3 py-5 ">
                         <Link>
                             <FaFacebookSquare></FaFacebookSquare>
                            </Link>
                            <Link>
                             <FaTwitter></FaTwitter>
                            </Link>
                            <Link>
                             <FaInstagram></FaInstagram>
                            </Link>
                            <Link>
                             <FaLinkedin></FaLinkedin>
                            </Link>
                         </div>
                      </div>
  
                      <div className="profile-details-name">
                        <span className="text-xl">
                          Hello, I'M <br/><span className="highlighted-text"><span className="text-color text-3xl">Md Tofazzol Hossain Manik</span></span>
                        </span> 
                      </div>
                      <div className="profile-details-role text-xl ">
                          <span className="primary-text ">
                            <h1>
                              <Typical loop={Infinity} steps={[
                                  "Web Developer",500, 
                                  "Front End Developer",500,
                                  "Full Stack Developer",500,
                                  "React.JS Developer",500,
                                  "MERN Stack Developer",500,
                              ]}>
  
                              </Typical>
                            </h1>
                          </span>
                      </div>
                      <div className="my-10">
                         <button className="btn text-white btn-outline  border-0 border-b-4 border-color btn-sm">Hire Me</button>
                         <a href={resume} download={resume}>
                           <button className="btn text-white btn-outline  border-0 border-b-4 border-color btn-sm ms-2">Get Resume</button>
                         </a>
                      </div>
                  </div>
              
              </div>
              
          </div>
          </div>
          <div className=" md:ms-32 md:mt-10">
                  <div className="avatar ">
                      <div className="w-52 ">
                          <img className="edit-image  " src='https://i.ibb.co/Hx5ps08/Pics-Art-02-02-11-03-53-removebg-preview-1-fotor-20230629183723.png' />
                        
                      </div>
                  </div>
          </div>
           
          </div>
          <div>
            <img className="w-full -mt-14 ms:-mt-4 " src="https://i.ibb.co/qnZY24n/shape-bg.png" alt="" />
          </div>
     </div>
    );
};

export default Banner;