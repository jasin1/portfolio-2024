import './Button.css';

function Button({children, onClick, type, variant, hasArrow}){
  return(
      <button className={`btn btn-${variant}`} onClick={onClick} type={type}>
          {children}
          {hasArrow && (
            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8L23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 1L23 8L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            

          )}
      </button>
  )
}

export default Button;