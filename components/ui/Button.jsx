import React from "react";
import { clsx } from "clsx";
import { Loader2 } from "lucide-react";

const buttonVariants = {
  default: "bg-blue-500 text-white hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "underline-offset-4 hover:underline text-primary",
  destructive: "bg-destructive text-white hover:bg-destructive/90",
};

const sizeVariants = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3 rounded-md",
  lg: "h-11 px-8 rounded-md",
  icon: "h-10 w-10",
};

export default function Button({
  children,
  variant = "default",
  size = "default",
  isLoading = false,
  asChild = false,
  className,
  disabled,
  ...props
}) {
  const Component = asChild ? "span" : "button";

  return (
    <Component
      className={clsx(
        "inline-flex items-center justify-center rounded-md text-sm cursor-pointer font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Component>
  );
}
