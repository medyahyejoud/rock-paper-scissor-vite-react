import { useEffect, useRef } from "react";
import { useOnClickOutside } from "../../hooks/useClickOutside";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

interface Props {
  isOpen: boolean;
  open: (isOpen: boolean) => void;
}

const Modal: React.FC<Props> = ({ open, isOpen, children }) => {
  const ref = useRef(null);

  useLockBodyScroll();

  useOnClickOutside(ref, () => open(!isOpen));

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 w-screen h-screen flex items-center justify-center bg-black/50">
      <div ref={ref} className="max-w-lg bg-white rounded-md p-8">
        {children}
      </div>
    </div>
  );
};

export default Modal;
