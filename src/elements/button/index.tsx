import React from "react";

export interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return (
    <button className="w-40 transition-shadow ease-linear duration-200 bg-cyan-500 p-2 hover:bg-striped-red-600 focus:shadow-inner-custom focus:shadow-red-600">
      {text}
    </button>
  );
};

export default Button;
