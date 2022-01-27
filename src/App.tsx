import React, { useState } from "react";
import Button from "./components/Common/Button";
import Heading3 from "./components/Common/Heading3";
import Paper from "./components/Options/Paper";
import Rock from "./components/Options/Rock";
import Scissor from "./components/Options/Scissor";

function App() {
  const [steper, setSteper] = useState(0);

  const toggle = () => {
    switch (steper) {
      case 0:
        setSteper(1);
        break;
      case 1:
        setSteper(2);
        break;
      case 2:
        setSteper(3);
        break;

      default:
        setSteper(0);
        break;
    }
  };

  if (steper === 0) return <Start next={toggle} />;

  return <Selected next={toggle} steper={steper} />;
}

interface SelectedProps {
  next: () => void;
  steper: number;
}

export const Selected: React.FC<SelectedProps> = ({ next, steper }) => {
  return (
    <div className="flex space-x-24 items-center justify-center text-center">
      <SelectedOption
        title="You picked"
        option={<Paper notClickable active={steper === 3} size="lg" />}
        next={next}
      />
      {steper === 3 && (
        <div className="space-y-6 relative z-50">
          <h2 className="uppercase text-white font-bold text-6xl">You win</h2>
          <Button>Play again</Button>
        </div>
      )}
      <SelectedOption
        title="The house picked"
        option={<Rock notClickable hidden={steper === 1} size="lg" />}
        next={next}
      />
    </div>
  );
};

interface SelectedOptionProps {
  next: () => void;
  option: React.ReactNode;
  title: string;
}

const SelectedOption: React.FC<SelectedOptionProps> = ({
  title,
  option,
  next,
}) => {
  return (
    <div className="space-y-16">
      <div onClick={next}>
        <Heading3>{title}</Heading3>
      </div>
      <div className="relative z-10">{option}</div>
    </div>
  );
};

interface StartProps {
  next: () => void;
}

export const Start: React.FC<StartProps> = ({ next }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex justify-center">
        <img
          src="/images/bg-triangle.svg"
          alt="Triangle background"
          className="w-64"
        />
        <div className="absolute z-10 -top-[35%] -left-[35%]">
          <Paper onClick={next} />
        </div>
        <div className="absolute z-10 -top-[35%] -right-[35%]">
          <Scissor onClick={next} />
        </div>
        <div className="absolute z-10 -bottom-[30%]">
          <Rock onClick={next} />
        </div>
      </div>
    </div>
  );
};

export default App;
