function LogoMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="6" />
      <circle
        cx="60"
        cy="60"
        r="38"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.35"
      />
      <path
        d="M45 40v20c0 10 6 16 15 16s15-6 15-16V40"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M72 78l10 10"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="38" cy="38" r="4" fill="currentColor" />
    </svg>
  );
}

export default LogoMark;

