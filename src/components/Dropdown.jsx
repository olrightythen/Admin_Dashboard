import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Dropdown = ({ icon: Icon, label, items }) => (
  <Menu as="div" className="relative text-xl">
    <MenuButton className="data-[active]:text-zinc-800" aria-label={label}>
      <Icon className="text-4xl" />
    </MenuButton>
    <MenuItems className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 animate-in duration-200 slide-in-from-top">
      <div className="text-gray-800 px-4 py-2 font-semibold">{label}</div>
      <div className="border-t border-gray-200"></div>
      {items.map(({ content, href, Icon: ItemIcon }, index) => (
        <MenuItem key={index}>
          {({ focus }) => (
            <a
              href={href || "#"}
              className={`flex items-center px-4 py-2 text-gray-800 ${
                focus ? "bg-gray-100" : ""
              }`}
            >
              {ItemIcon && <ItemIcon className="mr-2" />}
              {content}
            </a>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  </Menu>
);

export default Dropdown;
