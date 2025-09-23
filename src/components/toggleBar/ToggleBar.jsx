const ToggleBar = ({
  isAvailablePlayersToggled,
  setIsAvailablePlayersToggled,
  selectedPlayersUUID,
}) => {
  return (
    <section className="container mx-auto my-4 sm:my-10 px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#131313]">
        {isAvailablePlayersToggled
          ? "Available Players"
          : `Selected Players (${selectedPlayersUUID.length}/6)`}
      </h3>
      <div className="flex">
        <button
          onClick={() => setIsAvailablePlayersToggled(true)}
          className={`border border-[#1313131a] border-r-0 rounded-l-xl px-8 py-2 text-sm sm:text-base ${isAvailablePlayersToggled ? "font-bold text-[#131313] bg-[#E7FE29] shadow-md" : "font-normal text-[#13131399] "} cursor-pointer active:scale-95 active:translate-y-0.5 `}
        >
          Available
        </button>
        <button
          onClick={() => setIsAvailablePlayersToggled(false)}
          className={`border border-[#1313131a] border-l-0 rounded-r-xl px-8 py-2 text-sm sm:text-base ${isAvailablePlayersToggled === false ? "font-bold text-[#131313] bg-[#E7FE29] shadow-md" : "font-normal text-[#13131399]"} cursor-pointer active:scale-95 active:translate-y-0.5`}
        >
          Selected (<span>{selectedPlayersUUID.length}</span>)
        </button>
      </div>
    </section>
  );
};

export default ToggleBar;
