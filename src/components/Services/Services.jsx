import Typical from 'react-typical';
import './Services.css'
import { FaCode, FaCodeBranch, FaPaintBrush } from "react-icons/fa";

const Services = () => {
    return (
        <div className='background-color pt-32 pb-5 '>
            <div>
                <img className='w-[100%] -mt-32' src="https://i.ibb.co/dKxd3QZ/shape-bg.png" alt="" />
            </div>
            <div className='text-start text-white ms-5'>
                <h3 className='text-3xl'>Features</h3>
                {/* <p className='text-2xl'>What services i provide</p> */}
                <h1>
                    <Typical loop={Infinity} steps={[
                        "What's for you.", 500,
                        "What's for you..", 500,
                        "What's for you...", 500,
                    ]}>
                    </Typical>
                </h1>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 my-5 py-5 gap-5'>
            <div className="single_service mx-5">
               <div className='service-icon'>
                <FaCode className='m-auto mb-5 '></FaCode>
               </div>
               <h2 className='text-2xl font-bold mb-3'>Web Development</h2>
               <p className='p-color'> Unlocking the Magic of Seamless Design and Development for Your Website</p>
            </div>
            <div className="single_service mx-5">
               <div className='service-icon'>
                <FaPaintBrush className='m-auto mb-5  '></FaPaintBrush>
               </div>
               <h2 className='text-2xl font-bold mb-3'>Responsive Web Design</h2>
               <p className='p-color'>Creating Stunning Websites with Responsive Web Design for an Optimal User Experience on Any Device.</p>
            </div>
            <div className="single_service mx-5">
               <div className='service-icon '>
                <FaCodeBranch className='m-auto mb-5 '></FaCodeBranch>
               </div>
               <h2 className='text-2xl font-bold mb-3'>Back-end Development</h2>
               <p className='p-color mt-3'>Powering Your Website with MongoDB Back-end Development for Seamless Functionality and Data Management.</p>
            </div>
            </div>
            
        </div>
    );
};

export default Services;