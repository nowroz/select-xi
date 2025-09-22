import { useState } from "react";

const ToggleBar = () => {
  const [isAvailableToggled, setIsAvailableToggled] = useState(true);

  return (
    <section className="container mx-auto my-10 px-4 flex justify-between items-center">
      <h3 className="text-2xl font-bold text-[#131313]">
        {isAvailableToggled ? "Available Players" : "Selected Players"}
      </h3>
      <div>
        <button
          onClick={() => setIsAvailableToggled(true)}
          className={`border border-[#1313131a] border-r-0 rounded-l-xl px-8 py-2 text-base ${isAvailableToggled ? "font-bold text-[#131313] bg-[#E7FE29] shadow-md" : "font-normal text-[#13131399] "} cursor-pointer active:scale-95 active:translate-y-0.5 `}
        >
          Available
        </button>
        <button
          onClick={() => setIsAvailableToggled(false)}
          className={`border border-[#1313131a] border-l-0 rounded-r-xl px-8 py-2 text-base ${isAvailableToggled === false ? "font-bold text-[#131313] bg-[#E7FE29] shadow-md" : "font-normal text-[#13131399]"} cursor-pointer active:scale-95 active:translate-y-0.5`}
        >
          Selected (<span>0</span>)
        </button>
      </div>
    </section>
  );
};

export default ToggleBar;
