const Button: React.FC = ({ children }) => {
  return (
    <button className="w-full px-10 py-3 font-semibold bg-white text-dark-600 hover:text-red-500 rounded-lg tracking-widest text-lg uppercase focus-visible:outline-none focus-visible:text-red-500 focus-visible:opacity-90 active:outline-none active:text-red-500 active:opacity-90">
      {children}
    </button>
  );
};

export default Button;
