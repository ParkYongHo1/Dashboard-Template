type ButtonProps = {
  name: string;
  variant?: "default" | "add" | "delete" | "edit";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  name,
  variant = "default",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) => {
  const variantStyles = {
    default: "bg-blue-500 hover:bg-blue-600 text-white text-sm",
    add: "bg-green-500 hover:bg-green-600 text-white",
    delete: "bg-red-500 hover:bg-red-600 text-white",
    edit: "bg-blue-500 hover:bg-blue-600 text-white",
  };

  const buttonClasses = `
    px-6 py-2 rounded-[5px] font-medium transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    ${variantStyles[variant]}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
