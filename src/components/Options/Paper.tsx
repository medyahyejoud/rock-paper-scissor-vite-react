import GameButton from "../Common/GameButton";
import PaperIcon from "../Icons/PaperIcon";
import { GameOptionsProps } from "../../types/interfaces";

const Paper: React.FC<GameOptionsProps> = ({
  size = "md",
  active,
  notClickable,
  hidden,
  onClick,
}) => (
  <GameButton
    color="blue"
    size={size}
    active={active}
    notClickable={notClickable}
    hidden={hidden}
    onClick={onClick}>
    <PaperIcon />
  </GameButton>
);

export default Paper;
