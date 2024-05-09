import React, { FC } from "react";
import { RotatingLines } from "react-loader-spinner";
const Loader: FC = () => {

  const props={
    visible: true,
    height: 96,
    width:"96",
    color:"green",
    strokeWidth:"5",
    animationDuration:"0.75",
    ariaLabel:"rotating-lines-loading",
  }

  return (
    <div>
      <RotatingLines
      {...props}
      />
    </div>
  );
};
export default Loader;