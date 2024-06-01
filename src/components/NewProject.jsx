import ProjectInput from "./ProjectInput"
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject ({onAdd, onCancel}) {
    const title = useRef();
    const description = useRef()
    const dueDate = useRef()
    const dialog = useRef();
    function handleSaveClick() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        if (enteredTitle.trim() === "" || enteredDescription.trim() === "" || enteredDueDate.trim() === ""){
            dialog.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
        })
    }

    return (
        <>
            <Modal ref={dialog} buttonCaption="Close">
                <h2 className="text-3xl font-bold mb-2">Wrong Credentials!</h2>
                <p className="mt-2 text-stone-600 mb-2">Oops... looks like you have forgotten to enter a value.</p>
                <p className=" text-stone-600 mb-2">Please make sure that you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4"> 
                    <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950 ">Cancel</button></li>
                    <li><button onClick={handleSaveClick} className="px-6 py-2 text-stone-50 hover:bg-stone-950 bg-stone-800 rounded-md">Save</button></li>
                </menu>
                <div className="flex flex-col">
                    <ProjectInput type="text" ref={title} label={"Title"}/>
                    <ProjectInput ref={description} label={"Description"}/>
                    <ProjectInput type="date" ref={dueDate}label={"Due Date"}/>
                </div>
            </div>
        </>
    )
}