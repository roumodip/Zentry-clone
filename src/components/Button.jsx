const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, target = "_blank" }) => {
  return (
    <a
      id={id}
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </a>
  );
};

export default Button;
