import React from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type CircleProgressProps = {
  value: number;
  text?: string;
};

const CircleProgress: React.FC<CircleProgressProps> = ({ value, text }) => {
  return (
    <div className="w-16 h-16">
      <CircularProgressbar
        value={value}
        text={text || `${value}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#3b82f6", 
          trailColor: "#1f2937", 
        })}
      />
    </div>
  );
};

export default CircleProgress;
