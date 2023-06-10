import {
  AiFillHome,
  AiFillProfile,
  AiFillContacts,
  AiFillProject,
} from "react-icons/ai";

const _sidebar_item = [
  {
    link: "/",
    name: "Home",
    icon: (
      <AiFillHome className="text-blue-400 group-hover:text-white" size={30} />
    ),
  },
  {
    link: "/about",
    name: "About Me",
    icon: (
      <AiFillProfile
        className="text-blue-400 group-hover:text-white"
        size={30}
      />
    ),
  },
  {
    link: "/contacs",
    name: "Contac Me",
    icon: (
      <AiFillContacts
        className="text-blue-400 group-hover:text-white"
        size={30}
      />
    ),
  },
  {
    link: "/projects",
    name: "My Project's",
    icon: (
      <AiFillProject
        className="text-blue-400 group-hover:text-white"
        size={30}
      />
    ),
  },
];

export const Sidebar = () => (
  <aside className="fixed flex cursor-pointer flex-col items-center py-4 gap-y-3 left-4 bottom-[calc(100% - 200px)] h-auto bg-gray-200 w-[60px] rounded-lg">
    {_sidebar_item.map((item, key) => (
      <span
        key={key}
        className="bg-white relative group hover:bg-blue-400 ease-in-out duration-100 transition-all rounded-full group hover:rounded-lg p-2"
      >
        {item.icon}
        <span className="absolute hidden group-hover:block top-[10%] font-semibold bg-gray-100 rounded-lg text-gray-600 p-2 left-16 w-auto">
          {item.name}
        </span>
      </span>
    ))}
  </aside>
);
