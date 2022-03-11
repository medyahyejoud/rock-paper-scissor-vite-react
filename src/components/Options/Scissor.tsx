import GameButton from "../Common/GameButton";
import ScissorIcon from "../Icons/ScissorIcon";
import { GameOptionsProps } from "../../types/interfaces";

const Scissor: React.FC<GameOptionsProps> = ({
  size = "md",
  active,
  notClickable,
  hidden,
  onClick,
}) => (
  <GameButton
    color="yellow"
    size={size}
    active={active}
    notClickable={notClickable}
    hidden={hidden}
    onClick={onClick}>
    <ScissorIcon />
  </GameButton>
);

export default Scissor;
