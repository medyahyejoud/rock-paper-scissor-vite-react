import GameButton from "../Common/GameButton";
import RockIcon from "../Icons/RockIcon";
import { GameOptionsProps } from "../../types/interfaces";

const Rock: React.FC<GameOptionsProps> = ({
  size = "md",
  active,
  notClickable,
  hidden,
  onClick,
}) => (
  <GameButton
    color="red"
    size={size}
    active={active}
    notClickable={notClickable}
    hidden={hidden}
    onClick={onClick}>
    <RockIcon />
  </GameButton>
);

export default Rock;
