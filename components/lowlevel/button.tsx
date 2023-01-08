import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import Text from "./text";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "thirdly";
};

export default function Button({
  children,  className,
  variant = "primary",  ...rest
}: ButtonProps) {

  function colorRenderer(){
    switch(variant) {
      case "primary": return "default";
      case "secondary": return "white";
      case "thirdly": return "default";

    }
  }

  return (
    <button
      className={clsx(
        className,
        "px-2 py-1 rounded-md",
        {
          primary: "ml-auto",
          secondary: "bg-cyan-600",
          thirdly: "bg-slate-200"
        }[variant]
      )}
      {...rest}>


      <Text color={colorRenderer()}
        className="px-2 py-1 rounded-md"
        weight="bold"> 
        {children}
      </Text>

    </button>
  );
}