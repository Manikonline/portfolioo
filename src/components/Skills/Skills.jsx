import './Skills.css'

const Skills = () => {
    const frontendSkill=[
        {
            title:'HTML',
            parcentage:'90%'
        },
        {
            title:'CSS',
            parcentage:'85%'
        },
        {
            title:'Tailwind',
            parcentage:'75%'
        },
        {
            title:'Bootstrap',
            parcentage:'85%'
        },
        {
            title:'Javascript',
            parcentage:'70%'
        },
        {
            title:'React.js',
            parcentage:'75%'
        }
    ]
    const backendSkill=[
        {
            title:'Node.js',
            parcentage:'60%'
        },
        {
            title:'Express.js',
            parcentage:'60%'
        },
        {
            title:'MongoDB',
            parcentage:'65%'
        },
        {
            title:'Firebase',
            parcentage:'70%'
        },
       
     
    ]
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 skill_wraper gap-5 p-5'>
            <div className='frontend_skils w-[50]'>
                {
                    frontendSkill.map((item,index)=><div key={index}>
                        <div className='skill_data'>
                          <div className='skill_title flex items-center justify-between'>
                            <h6 className='skill-text-color'>{item.title}</h6>
                            <span>{item.parcentage}</span>
                          </div>
                          <div className='skill_bar'>
                            <span className='skil_bar-percentage'style={{width:`${item.parcentage}`}}></span>
                          </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='backend_skills w-[100%]'>
            {
                    backendSkill.map((item,index)=><div key={index}>
                        <div className='skill_data'>
                          <div className='skill_title flex items-center justify-between'>
                            <h6 className='skill-text-color'>{item.title}</h6>
                            <span>{item.parcentage}</span>
                          </div>
                          <div className='skill_bar'>
                            <span className='skil_bar-percentage'style={{width:`${item.parcentage}`}}></span>
                          </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};



export default Skills;