import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed top-0 z-40 grid h-full w-full place-items-center backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] max-w-[80%] rounded-lg bg-secondary bg-opacity-80 p-2">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-xl"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
