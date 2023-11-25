import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

import Player from "./util/Player";

export default function App(): JSX.Element {
  const [players, setPlayers] = useState<Player[]>([new Player("Player 1"), new Player("Player 2"), new Player("Player 3"), new Player("Player 4")]);

  function setPlayersHelper(index: number, value: string) {
    const temp = players.slice();
    temp[index].name = value;
    setPlayers(temp);
    console.log(players);
  }

  return (
    <div className="flex w-screen">
      <NavBar
        players={players}
        setPlayer={setPlayersHelper}
      />
      <Main />
    </div>
  );
}