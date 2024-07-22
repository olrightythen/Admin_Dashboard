import { useState, useRef, useEffect } from "react";

const Dropdown = ({ icon: Icon, label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative text-xl" ref={dropdownRef}>
      <button
        className="data-[active]:text-zinc-800"
        aria-label={label}
        onClick={handleToggle}
      >
        <Icon className="text-4xl" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 animate-in duration-200 slide-in-from-top">
          <div className="text-gray-800 px-4 py-2 font-semibold">{label}</div>
          <div className="border-t border-gray-200"></div>
          {items.map(({ content, href, Icon: ItemIcon }, index) => (
            <a
              key={index}
              href={href || "#"}
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              {ItemIcon && <ItemIcon className="mr-2" />}
              {content}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
