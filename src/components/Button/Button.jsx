import "./Button.css";
import { Link } from "react-router-dom";

function Button({ children, onClick, type, variant, hasArrow, href,download, icon}) {

  const isExternal = href && href.startsWith("http");
  const Component = isExternal ? "a" : href ? Link : "button";

  return (
    <Component className={`btn btn-${variant}`} 
    onClick={onClick} 
    to={!isExternal ? href : undefined}
    href={isExternal ? href : undefined} 
    type={!isExternal ? type :undefined} 
    target={isExternal ? '_blank': undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    download={download}
    icon={icon}   
    >
      {children}
      {hasArrow && (
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 8L23 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 1L23 8L16 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Component>
  );
}

export default Button;
