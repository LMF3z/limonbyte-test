const ButtonBase = ({ type = 'submit', label, icon, classes, handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`w-full h-10 bg-red_base center_flex space-x-1 text-white ${classes}`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonBase;
