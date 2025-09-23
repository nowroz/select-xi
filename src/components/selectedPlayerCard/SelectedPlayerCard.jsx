import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedPlayerCard = ({
  player: { uuid, name, image, battingStyle },
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const handleRemoveSelectedPlayer = (uuid) => {
    const filterdSelectedPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.uuid !== uuid,
    );

    setSelectedPlayers(filterdSelectedPlayers);
  };

  return (
    <div className="flex justify-between items-center border border-[#1313131a] rounded-2xl p-6">
      <div className="flex gap-4 items-center">
        <img
          className="max-w-20 h-auto object-cover rounded-2xl"
          src={image}
          alt=""
        />
        <div>
          <h4 className="text-xl font-semibold text-[#131313]">{name}</h4>
          <h5 className="text-sm font-normal text-[#13131399]">
            {battingStyle}
          </h5>
        </div>
      </div>
      <button
        onClick={() => handleRemoveSelectedPlayer(uuid)}
        className="text-base text-red-600 cursor-pointer active:scale-95"
      >
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </button>
    </div>
  );
};

export default SelectedPlayerCard;
