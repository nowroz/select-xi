import SelectedPlayerCard from "../selectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers }) => {
  return (
    <section className="container mx-auto my-10 px-4">
      <div className="px-4 flex flex-col gap-4">
        {selectedPlayers.map((player) => (
          <SelectedPlayerCard
            key={player.uuid}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SelectedPlayerCard>
        ))}
      </div>
    </section>
  );
};

export default SelectedPlayers;
