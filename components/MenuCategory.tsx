import { Dispatch, SetStateAction } from "react";

interface MenuCategoryProps {
  title: string;
  icon: any;
  selected: string | undefined;
  tableId: string | undefined;
  id: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const MenuCategory = ({
  title,
  icon,
  selected,
  tableId,
  id,
  setSelected,
}: MenuCategoryProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-md p-4 ${
        selected === id
          ? "font-bold bg-white shadow-lg"
          : "bg-gray-50 shadow-sm text-gray-500 border border-gray-100"
      } min-w-[8.5rem] mx-2`}
      onClick={() => setSelected(id)}
    >
      <p className="mb-4">{title}</p>
      {icon}
    </div>
  );
};

export default MenuCategory;
