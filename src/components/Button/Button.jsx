import "./Button.css";

function Button({ children, onClick, type, variant, hasArrow, href, linkType }) {
  console.log('button href: ', href);
  const Component = href ? "a" : "button";

  return (
    <Component className={`btn btn-${variant}`} onClick={onClick} href={href} type={href ? undefined : type} // only apply `type` to buttons
    target={href ? '_blank': undefined}
    linkType={linkType}
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
