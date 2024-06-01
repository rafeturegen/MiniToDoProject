import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";

const Modal =  forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog} className="p-6 rounded-md backdrop:bg-stone-900/90 ">
            {children}
            <form method="dialog">
                <button className="ml-[26rem] w-16 mt-2 rounded-md bg-stone-600 p-1 text-stone-300 hover:bg-stone-800 hover:text-stone-100 ">
                    {buttonCaption}
                </button>
            </form>
        </dialog>
        , document.getElementById("modal-root"))
    
})
export default Modal;