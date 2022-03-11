export interface GameOptionsProps {
  size?: "sm" | "md" | "lg";
  active?: boolean;
  notClickable?: boolean;
  hidden?: boolean;
  onClick?: () => void;
}

export interface IconsComponentProps {
  width?: number;
  color?: string;
  className?: string;
}
