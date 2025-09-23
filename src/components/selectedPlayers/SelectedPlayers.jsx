import SelectedPlayerCard from "../selectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({
  setIsAvailablePlayersToggled,
  selectedPlayers,
  setSelectedPlayers,
  availableCoins,
  setAvailableCoins,
}) => {
  const handleAddMorePlayersButton = () => {
    setIsAvailablePlayersToggled(true);
  };

  return (
    <section className="container mx-auto my-10 px-4">
      <div className="px-4 flex flex-col gap-4">
        {selectedPlayers.map((player) => (
          <SelectedPlayerCard
            key={player.uuid}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            availableCoins={availableCoins}
            setAvailableCoins={setAvailableCoins}
          ></SelectedPlayerCard>
        ))}
      </div>
      <div
        onClick={handleAddMorePlayersButton}
        className="flex justify-end mx-4"
      >
        <button className="my-10 bg-[#E7FE29] rounded-xl outline-1 outline-offset-6 outline-[#131313] shadow-md px-5 py-3 text-base font-bold text-[#131313] cursor-pointer active:scale-95 active:shadow-none active:outline-none">
          {selectedPlayers.length ? "Add More Players" : "Add Players"}
        </button>
      </div>
    </section>
  );
};

export default SelectedPlayers;
