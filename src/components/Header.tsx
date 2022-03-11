const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between bg-opacity-0 border-[3px] border-header-outline rounded-2xl py-4 px-6 max-w-2xl mx-auto">
        <div>
          <img src="/images/logo.svg" alt="Application logo" />
        </div>
        <div className="flex flex-col items-center justify-between rounded-lg bg-white px-12 py-4">
          <h4 className="text-score-text uppercase font-semibold text-lg tracking-widest">
            Score
          </h4>
          <p className="text-dark-500 text-6xl font-bold">12</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
