import projects from "../assets/projects.json";
import Project from './Project';

function Projects() {
    console.log(projects)
    return (
        <div className='page'>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;h1&gt;
            </div>
            <div className='flex whitespace-nowrap text-4xl mini:text-2xl pl-32 small:pl-14 py-3 text-cyan h'>My Projects <p className='dot text-cyan'>...</p></div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/h1&gt;
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;div&gt;
            </div>
            <div className='grid grid-cols-card mini:grid-cols-card-mini gap-2 pl-32 pr-4 small:pl-14'>
            {
                projects.map((p, i)=>{
                    return <Project key={i} project={p} />
                })
            }
            </div>
            <div className='text-gray-600 pl-20 small:pl-10 web'>
                &lt;/div&gt;
            </div>
        </div>
    )
}

export default Projects