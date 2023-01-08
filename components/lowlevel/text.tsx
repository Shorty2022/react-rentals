import clsx from "clsx";
import { ElementType, HTMLAttributes } from "react";

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: "h1" | "h2" | "h5" | "p" | "span" | "small",
  color?: "default" | "grey" | "white" | "primary" | "red";
  transformation?: "normalcase" | "uppercase",
  weight?: "normal" | "bold",
};

export default function Text({
  as: Component = "p", variant = "p",
  color = "default", transformation = "normalcase",
  weight="normal", children, 
  className, ...rest
}: TextProps) {
  return (
    <Component
      className={clsx(
        className,
        {
          h1: "text-3xl",
          h2: "text-xl",
          h5: "text-lg",
          p: "text-base",
          span: "text-base",
          small: "text-sm",
        }[variant],
        {
          default: "text-gray-900",
          grey: "text-gray-500",
          primary: "text-cyan-600",
          white: "text-white",
          red: "text-rose-500"
        }[color],
        {
          normalcase: "normal-case",
          uppercase: "uppercase",
        }[transformation],
        {
          normal: "font-normal",
          bold: "font-bold",
        }[weight],
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}