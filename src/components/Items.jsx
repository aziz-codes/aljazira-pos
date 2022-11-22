import { ItemContext } from "../context/ItemsContext";
const Items = ({ products, handleClickItem }) => {
  const { darkMode } = ItemContext();
  return (
    <div className="flex flex-col">
      <div className="ml-4"></div>
      <div
        className={`flex flex-wrap items-center justify-center ${
          darkMode ? "bg-slate-800 text-slate-400" : "bg-white text-black"
        }`}
      >
        {products.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col shadow-lg ${
              darkMode ? "bg-slate-700  text-slate-400" : "bg-white text-black"
            } hover:scale-95 transition-all 
     duration-100 ease-in-out w-36 sm h-36 md:w-44 md:h-44  rounded-xl cursor-pointer m-2`}
            onClick={() => {
              handleClickItem(item);
            }}
          >
            <img
              src={item.image}
              className="md:h-28 h-24 max-h-28 rounded-lg "
              alt={item.name}
            />
            <div className="text-center pt-2">
              <h4 className="font-medium text-sm md:text-lg overflow-hidden whitespace-nowrap text-ellipsis">
                {item.name}
              </h4>
              <span className="text-sm md:font-bold font-medium tracking-tight">
                {item.price} PKR
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
