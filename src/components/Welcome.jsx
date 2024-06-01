import noProjectImg from "../assets/no-projects.png";

export default function Welcome ({onAddClick}) {
    return(
        <div className="flex flex-col gap-1 items-center w-2/3 mt-16">
            <img src={noProjectImg} alt="" className="w-16 h-16"/>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-500">Select a project or get started with a new one.</p>
            <button onClick={onAddClick} className="mt-4 rounded-md bg-stone-600 p-2 text-slate-100 hover:bg-stone-800 hover:text-slate-50">Create new project</button>
        </div>
    )
}