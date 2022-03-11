import { useState } from "react";
import FooterButton from "./Common/FooterButton";
import Modal from "./Common/Modal";
import CloseIcon from "./Icons/CloseIcon";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="flex justify-end">
      <FooterButton onClick={() => setIsOpen(!isOpen)}>Rules</FooterButton>
      <Modal isOpen={isOpen} open={setIsOpen}>
        <div className="flex flex-col space-y-10">
          <div className="flex items-center justify-between space-x-4">
            <h3 className="uppercase text-3xl font-bold text-dark-500">
              Rules
            </h3>
            <button onClick={() => setIsOpen(!isOpen)}>
              <CloseIcon />
            </button>
          </div>
          <div>
            <img src="/images/image-rules.svg" alt="Game rules" />
          </div>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
