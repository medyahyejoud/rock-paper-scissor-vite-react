import { IconsComponentProps } from "../../types/interfaces";

const CloseIcon: React.FC<IconsComponentProps> = ({
  width = 20,
  color,
  className,
}) => {
  return (
    <div
      style={{ width, color }}
      className={
        className ? className : "text-header-outline hover:text-dark-500"
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width="100%"
        height="100%">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z"
          opacity=".25"
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
