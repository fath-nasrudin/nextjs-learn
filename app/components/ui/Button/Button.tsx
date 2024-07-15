import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva("px-4 py-0.5 text-sm rounded cursor-pointer", {
  variants: {
    intent: {
      default: "border border-gray-400",
      primary: "bg-brand text-white",
      secondary: "bg-gray-700 text-white",
    },
    block: {
      true: "block",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

type buttonProps = ComponentProps<"button"> & ComponentProps<"a">;

export interface Props extends VariantProps<typeof buttonStyles>, buttonProps {}

function Button({ intent, block, children, ...props }: Props) {
  return (
    <a className={buttonStyles({ intent, block })} {...props}>
      {children}
    </a>
  );
}

export default Button;
