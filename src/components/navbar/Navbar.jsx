import logo from "../../assets/logo.png";
import coinIcon from "../../assets/coin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ availableCoins }) => {
  return (
    <nav className="container mx-auto px-4 py-10 flex justify-between items-center">
      <div className="sm:hidden dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn m-1">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Home </a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams </a>
          </li>
          <li>
            <a>Schedules </a>
          </li>
        </ul>
      </div>
      <img className="max-w-[75px] h-auto" src={logo} alt="" />
      <div className="flex gap-6">
        <ul className="hidden sm:flex gap-6 items-center">
          <li>
            <a className="text-base font-normal text-[#131313b3]" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-base font-normal text-[#131313b3]" href="">
              Fixture
            </a>
          </li>
          <li>
            <a className="text-base font-normal text-[#131313b3]" href="">
              Teams
            </a>
          </li>
          <li>
            <a className="text-base font-normal text-[#131313b3]" href="">
              Schedules
            </a>
          </li>
        </ul>

        <button className="flex items-center gap-2 border border-[#1313131a] rounded-xl px-4 py-2">
          <div className="text-base font-semibold text-[#131313]">
            <span>{availableCoins}</span>{" "}
            <span className="hidden sm:inline-block">Coin</span>
          </div>
          <img className="w-6" src={coinIcon} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
