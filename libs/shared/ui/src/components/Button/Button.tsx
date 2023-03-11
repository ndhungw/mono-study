import { HTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
}

const variantClassName = {
  primary: "bg-red-300",
  secondary: "bg-blue-300",
} satisfies Record<ButtonVariant, string>;

export function Button(props: ButtonProps) {
  const { variant = "primary", children, ...restProps } = props;

  return (
    <button
      className={variantClassName[variant]}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default Button;
