import { Link } from "react-router-dom";

export const LinkButton = ({
  name,
  path,
  type,
  isActive = false,
  onClick,
}: {
  name: string;
  path: string;
  type: "default" | "button" | "icon";
  isActive: boolean;
  onClick?: () => void;
}) => {
  const typeStyles = {
    default: "flex items-center gap-2 cursor-pointer hover:text-gray-800",
    button:
      "px-4 py-1.5 bg-blue-500 text-white rounded-[5px] hover:bg-blue-600 hover:cursor-pointer transition-colors ",
    icon: "",
  };
  const linkClasses = `
   ${typeStyles[type]}
   ${isActive ? "text-black font-medium" : "font-medium text-gray-400"}
  `;
  return (
    <Link to={path} className={linkClasses} onClick={onClick}>
      <span>{name}</span>
    </Link>
  );
};
