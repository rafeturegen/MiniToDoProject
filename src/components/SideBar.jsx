export default function SideBar({onAddClick, projects, onProjectClick, selectedProjectId}) {
    return ( 
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72 my-8">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
            <div>
                <button onClick={onAddClick} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-600 text-stone-400 hover:bg-stone-400 hover:text-stone-100">+ Add Project</button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {
                    let buttonClasses = "w-full text-left p-2 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200 ";
                    if (selectedProjectId === project.id) {
                        buttonClasses += "text-stone-200 bg-stone-800"
                    }else {
                        buttonClasses += "text-stone-400"
                    }
                    return(
                    <li key={project.id}>
                        <button onClick={() => {
                            onProjectClick(project.id)
                        }}
                         className={buttonClasses}>
                        {project.title}
                        </button>
                    </li>
                    )
            })}
            </ul>
        </aside>
    )
}