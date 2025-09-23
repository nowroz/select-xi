import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerCard = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  availableCoins,
  setAvailableCoins,
}) => {
  const {
    name,
    role,
    battingStyle,
    ballingStyle,
    estimatedNetWorthUSD,
    image,
    rating,
  } = player;

  const handleChoosePlayer = (player) => {
    setAvailableCoins(availableCoins - player.estimatedNetWorthUSD);
    setSelectedPlayers([...selectedPlayers, player]);
  };

  return (
    <div className="border border-[#1313131a] rounded-2xl p-4">
      <img className="w-full object-cover rounded-xl mb-6" src={image} alt="" />
      <div className="flex gap-2 items-center mb-3">
        <FontAwesomeIcon className="text-xl" icon="fa-solid fa-circle-user" />
        <h4 className="text-xl font-semibold text-[#131313]">{name}</h4>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-2 items-center">
          <FontAwesomeIcon
            className="text-base text-[#131313] opacity-50"
            icon="fa-solid fa-flag"
          />
          <h5 className="text-base text-[#131313] opacity-50">Bangladesh</h5>
        </div>
        <button className="text-sm font-normal text-[#131313] bg-[#1313130d] px-4 py-2 rounded-lg">
          {role}
        </button>
      </div>
      <hr className="border-[#1313131a] mb-3" />
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-base font-semibold text-[#131313]">Rating</h5>
        <h5 className="text-base font-normal text-[#131313b3]">{rating}</h5>
      </div>
      <div className="flex justify-between items-center mb-3">
        <h5 className="text-base font-semibold text-[#131313]">
          {battingStyle}
        </h5>
        <h5 className="text-base font-normal text-[#131313b3]">
          {ballingStyle}
        </h5>
      </div>
      <div className="flex justify-between items-center">
        <h5 className="text-base font-semibold text-[#131313]">
          Price: ${estimatedNetWorthUSD}
        </h5>
        <button
          onClick={() => handleChoosePlayer(player)}
          disabled={selectedPlayers.includes(player)}
          className="text-sm font-normal text-[#131313] px-4 py-2 border border-[#1313131a] rounded-lg cursor-pointer shadow-sm active:shadow-none active:scale-95 disabled:cursor-default disabled:scale-100 disabled:text-gray-400 disabled:border-gray-300 disabled:shadow-none"
        >
          {selectedPlayers.includes(player) ? "Selected" : "Choose Player"}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
