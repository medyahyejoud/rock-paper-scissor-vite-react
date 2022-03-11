interface Props {
  onClick: () => void;
}

const FooterButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className="px-10 py-2 bg-white bg-opacity-0 hover:bg-opacity-10 text-white border border-white rounded-lg tracking-widest text-lg uppercase focus:outline-none focus:bg-opacity-10 focus:ring focus:ring-black focus:ring-offset-1"
      onClick={onClick}>
      {children ? children : "Button"}
    </button>
  );
};

export default FooterButton;
