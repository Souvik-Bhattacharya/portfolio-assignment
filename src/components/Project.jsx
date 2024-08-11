import { Link } from 'react-router-dom';

const Project = ({project}) => {
    return(
<div className='flex flex-col justify-between hover:-translate-y-2 hover:shadow-lg hover:shadow-black rounded-3xl bg-sec'>
                    <img src={project.image} alt="" className='overflow-hidden rounded-t-3xl'/>
                    <div className='text-gray-600 web p-3'>
                        &lt;project&gt;
                    </div>
                    <div className='flex flex-col p-6'>
                        <div className='flex justify-between py-2'>
                            <p className='text-cyan text-lg small:text-base pr-1 at'>{project.title}</p>
                            <div className='flex gap-3'>
                                <Link to={project.github} target='blank'><i className="fa-brands fa-github fa-xl at text-cyan"></i></Link>
                                <Link to={project.deploy} target='blank'><i className="fa-solid fa-link fa-xl at text-cyan"></i></Link>
                            </div>
                        </div>
                        <p className='py-2 small:text-sm'>
                            {project.desc}
                        </p>
                        <div className='flex flex-wrap items-center gap-3 py-5'>
                            {
                                project.techstack.map((ts, ind)=>{
                                    return <i className={`${ts} text-cyan fa-xl at`}></i>
                                })
                            }
                        </div>
                    </div>
                    <div className='text-gray-600 web p-3'>
                        &lt;/project&gt;
                    </div>
                </div>
    )
};

export default Project;