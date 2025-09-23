import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/navbar/Navbar";
import ToggleBar from "./components/toggleBar/ToggleBar";
import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import { Suspense, useState } from "react";
import Loading from "./components/loading/Loading";
import SelectedPlayers from "./components/selectedPlayers/SelectedPlayers";

library.add(fas, far, fab);

const playersPromise = fetch("./players.json").then((response) =>
  response.json(),
);

function App() {
  const [isAvailablePlayersToggled, setIsAvailablePlayersToggled] =
    useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  console.log(selectedPlayers);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <ToggleBar
          isAvailablePlayersToggled={isAvailablePlayersToggled}
          setIsAvailablePlayersToggled={setIsAvailablePlayersToggled}
          selectedPlayersUUID={selectedPlayers}
        ></ToggleBar>
        {isAvailablePlayersToggled && (
          <Suspense fallback={<Loading></Loading>}>
            <AvailablePlayers
              playersPromise={playersPromise}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            ></AvailablePlayers>
          </Suspense>
        )}
        {isAvailablePlayersToggled || <SelectedPlayers></SelectedPlayers>}
      </main>
    </>
  );
}

export default App;
