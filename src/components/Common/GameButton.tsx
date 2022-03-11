import ButtonRipple from "./ButtonRipple";
import { GameOptionsProps } from "../../types/interfaces";

interface GameButtonProps extends GameOptionsProps {
  color: "red" | "blue" | "yellow";
}

const GameButton: React.FC<GameButtonProps> = ({
  children,
  size = "md",
  color = "red",
  active,
  onClick,
  notClickable,
  hidden,
}) => {
  const btnSm = "w-32 h-32 border-[14px] p-[14px] after:-m-[14px]";
  const btnMd = "w-44 h-44 border-[20px] p-[20px] after:-m-[20px]";
  const btnLg = "w-[275px] h-[275px] border-[32px] p-[32px] after:-m-[32px]";

  const btnBlue = "after:from-blue-400 after:to-blue-500";
  const btnRed = "after:from-red-400 after:to-red-500";
  const btnYellow = "after:from-yellow-400 after:to-yellow-500";

  const btnSize = size === "sm" ? btnSm : size === "lg" ? btnLg : btnMd;

  const btnColor =
    color === "blue" ? btnBlue : color === "yellow" ? btnYellow : btnRed;

  return (
    <div className="relative">
      {active && <ButtonRipple />}

      {hidden && (
        <div className="absolute top-1/2 left-1/2 -ml-[40%] -mt-[40%] -z-10 rounded-full bg-dark-900 bg-opacity-50 w-[80%] h-[80%]" />
      )}

      <div className={notClickable ? "" : "active:translate-y-1"}>
        <button
          className={`${btnColor} ${btnSize} relative flex items-center justify-center border-solid border-transparent bg-clip-padding rounded-full bg-white text-black shadow-${color}-${size} after:absolute after:inset-0 after:z-[-1] after:rounded-[inherit] after:bg-gradient-to-b focus:outline-none ${
            notClickable
              ? "cursor-default"
              : "active:shadow-none focus-visible:outline-none focus-visible:shadow-none"
          } ${hidden ? "invisible" : ""}`}
          onClick={notClickable ? () => {} : onClick}>
          <div className="w-7/12">{children}</div>
        </button>
      </div>
    </div>
  );
};

export default GameButton;
