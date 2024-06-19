import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal(
  { children, buttonCaps, ...props },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));
  return createPortal(
    <dialog {...props} ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaps}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

// const useModal = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return { isOpen, openModal, closeModal };
// };

// const ModalComponent = ({ children, isOpen, onClose }) => {
//   const handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 flex items-center justify-center z-50" onClick={handleOverlayClick}>
//         <dialog className="bg-white p-8 rounded-lg" onClick={(event) => event.stopPropagation()}>
//           {children}
//           <button className="absolute top-0 right-0 p-2" onClick={onClose}>
//             Close
//           </button>
//         </dialog>
//       </div>
//     )
//   );
// };

// const Modal = ({ children, ...props }) => {
//   const { isOpen, openModal, closeModal } = useModal();

//   return (
//     <>
//       <button onClick={openModal}>Open Modal</button>
//       <ModalComponent isOpen={isOpen} onClose={closeModal}>
//         {children}
//       </ModalComponent>
//     </>
//   );
// };
