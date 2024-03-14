import React, {useImperativeHandle, forwardRef, useRef} from 'react'
import { createPortal } from 'react-dom'

 const Modal = forwardRef(
  function Modal({children}, ref) {
    const dialog = useRef(null)


    useImperativeHandle(ref, ()=>{
      return{
        open(){
          dialog.current.showModal()
        }
      }
      }
    )
    
    
    
      return createPortal(
        <dialog ref={dialog}>
        {children}
        <form method='dialog'>
          <button>
            Close
          </button>
        </form>
        </dialog>, document.getElementById('modal-root')
      )
    }
 )  
export default Modal
