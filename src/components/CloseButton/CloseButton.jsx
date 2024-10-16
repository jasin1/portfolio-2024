import "./CloseButton.css";

function CloseButton({ onClick }) {
  return (
    <button className="close-button" onClick={onClick} aria-label="Close Menu">
      <div className="circle-background">
        <svg
          width="23"
          height="24"
          viewBox="0 0 23 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2.10049L1.41421 0.686279L22.6274 21.8995L21.2132 23.3137L0 2.10049Z"
            fill="white"
          />
          <path
            d="M22.6274 2.10049L21.2132 0.686279L2.47955e-05 21.8995L1.41424 23.3137L22.6274 2.10049Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
}

export default CloseButton;
