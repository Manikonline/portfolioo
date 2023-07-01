
import { useState } from 'react';
import './About.css'
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
const About = () => {
    const [aboutfilter, setAboutfilter]=useState('ABOUT')
    return (
        <div className='py-8'>
            <h1 className="text-center text-3xl py-12 font-extrabold italic skill-text-color">--About--</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 about-info">
                <div className='btn-section ms-12'>
                    <div className="about-btns">
                        <button onClick={()=>setAboutfilter('ABOUT')} className={`btn  btn-edit  btn-outline  border-0 border-b-4 border-color btn-sm ms-2 ${aboutfilter== 'ABOUT'? 'about-btn-active':''} `}>About Me</button><br/>
                        <button onClick={()=>setAboutfilter('EDU')} className={`btn  btn-edit btn-outline  border-0 border-b-4 border-color btn-sm ms-2 ${aboutfilter== 'EDU'? 'about-btn-active':''}`}>Education</button><br/>
                        <button onClick={()=>setAboutfilter('SKILL')} className={`btn  btn-edit btn-outline  border-0 border-b-4 border-color btn-sm ms-2 ${aboutfilter== 'SKILL'? 'about-btn-active':''}`}>Skills</button>
                    </div>
                  
                </div>
                 {
                    aboutfilter == 'ABOUT' &&   <div className=''>
                    <div className='about-me-img mt-5'>
                         <img className='w-52 edit-img img-fluid' src="https://i.ibb.co/Hx5ps08/Pics-Art-02-02-11-03-53-removebg-preview-1-fotor-20230629183723.png'" alt="" />  
                         <div className='about-details '>
                            <h2>I'm Md Tofazzol Hossain Manik</h2>
                            <p>I'm a junior web developer. Currently, I am pursuing BBA in Govt.Titumir Collge , University of Dhaka.</p>
                        </div>        
                    </div>
                    
                </div>
                 }
                 {
                    aboutfilter == 'EDU' && <Education></Education>
                 }
                 {
                    aboutfilter =='SKILL'&& <Skills></Skills>
                 }
            </div>
        </div>
    );
};

export default About;