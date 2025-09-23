import SelectedPlayerCard from "../selectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <section className="container mx-auto my-10 px-4">
      <div className="px-4 flex flex-col gap-4">
        {selectedPlayers.map((player) => (
          <SelectedPlayerCard
            key={player.uuid}
            player={player}
          ></SelectedPlayerCard>
        ))}
      </div>
    </section>
  );
};

export default SelectedPlayers;
