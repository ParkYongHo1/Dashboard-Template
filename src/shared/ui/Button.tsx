export const Button = ({
  name,
  type = "default",
  onClick,
  disabled = false,
  className = "",
}: {
  name: string;
  type: "default" | "add" | "delete" | "edit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}) => {
  const typeStyles = {
    default:
      "px-4 py-1.5 bg-blue-500 text-white rounded-[5px] hover:bg-blue-600 hover:cursor-pointer transition-colors ",
    add: "bg-green-500 hover:bg-green-600 text-white",
    delete: "bg-red-500 hover:bg-red-600 text-white",
    edit: "bg-blue-500 hover:bg-blue-600 text-white",
  };

  const buttonClasses = `
      px-4 py-2 rounded-md font-medium transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-opacity-50
      ${typeStyles[type]}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      ${className}
    `;

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};
