import { use } from "react";
import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const result = use(playersPromise);
  const availablePlayers = result.players;

  return (
    <section className="container mx-auto my-10 px-4">
      <div className="grid grid-cols-3 gap-6 p-4">
        {availablePlayers.map((player) => (
          <PlayerCard
            key={player.uuid}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></PlayerCard>
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;
