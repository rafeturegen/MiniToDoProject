import { useRef, useImperativeHandle, forwardRef } from "react";

const ProjectInput = forwardRef(function ProjectInput ({label, onProjectSave,  ...props}, ref) {

    let input = <input ref={ref} className="w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props}/>;
    if (label === "Description") {
        input = <textarea ref={ref} className="w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" {...props}/>;
    }
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500" {...props}>{label}</label>
            {input}
        </p>
    )
})
export default ProjectInput;