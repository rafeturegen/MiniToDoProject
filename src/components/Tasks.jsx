import NewTask from "./NewTask.jsx"

export default function Tasks ({tasks, onAdd, onDelete}) {
    return (
        <section>
            <h2 className="font-bold text-xl text-stone-700 mb-4">Tasks</h2>
            <NewTask onAdd={onAdd}/>
            {tasks.length === 0 ? <p className="text-stone-800 my-4 ">This project does not have any tasks yet.</p> :
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => <li key={task.id} className="flex justify-between my-4">
                        <span className="p-2">{task.text}</span>
                        <button onClick={() => onDelete(task.id)} className="text-stone-200 bg-stone-500 px-2 py-1 rounded-md hover:text-red-500 hover:bg-stone-900">Clear</button>
                    </li>
                )}</ul>
            }
        </section>
    )
}