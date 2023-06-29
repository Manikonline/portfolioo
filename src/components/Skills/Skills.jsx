import './Skills.css'

const Skills = () => {
    const frontendSkill=[
        {
            title:'HTML',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'CSS',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'Tailwind',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'Bootstrap',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'Javascript',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'React.js',
            width:'95%',
            parcentage:'95%'
        }
    ]
    const backendSkill=[
        {
            title:'Node.js',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'Express.js',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'MongoDB',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'Firebase',
            width:'95%',
            parcentage:'95%'
        },
        {
            title:'Javascript',
            width:'95%',
            parcentage:'95%'
        },
     
    ]
    return (
        <div className='grid md:grid-cols-2 sm:grid-cols-1 skill_wraper'>
            <div className='frontend_skils'>
                {
                    frontendSkill.map((item,index)=><div key={item.id}>
                        <div className='skill_data'>
                          <div className='skill_title'>
                            <h6>{item.title}</h6>
                            <span>{item.parcentage}</span>
                          </div>
                          <div className='skill_bar'>
                            <span className='skil_bar-percentage'></span>
                          </div>
                        </div>
                    </div>)
                }
            </div>
            <div className='backend_skills'></div>
        </div>
    );
};

export default Skills;