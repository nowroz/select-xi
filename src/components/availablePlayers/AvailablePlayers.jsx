import { use } from "react";
import PlayerCard from "../playerCard/PlayerCard";

const AvailablePlayers = ({
  playersPromise,
  selectedPlayers,
  setSelectedPlayers,
  availableCoins,
  setAvailableCoins,
}) => {
  const result = use(playersPromise);
  const availablePlayers = result.players;

  return (
    <section className="container mx-auto my-10 px-4">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
        {availablePlayers.map((player) => (
          <PlayerCard
            key={player.uuid}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            availableCoins={availableCoins}
            setAvailableCoins={setAvailableCoins}
          ></PlayerCard>
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;
