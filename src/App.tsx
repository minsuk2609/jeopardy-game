import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

import Player from "./util/Player";

export default function App(): JSX.Element {
  const [players, setPlayers] = useState<Player[]>([new Player("Player 1", true), new Player("Player 2", false), new Player("Player 3", false), new Player("Player 4", false)]);
  const [status, setStatus] = useState<boolean>(false);

  function setPlayersHelper(index: number, value: string, status: boolean) {
    const temp = players.slice();
    if (temp.length > 0) {
      temp[index].name = value;
      temp[index].active = status;
      setPlayers(temp);
      console.log(players);
    }
  }

  return (
    <div className="flex w-full h-screen">
      <NavBar
        players={players}
        setPlayer={setPlayersHelper}
        status={status}
        setStatus={setStatus}
      />
      <Main
        status={status}
        players={players}
        setPlayer={setPlayersHelper}
      />
    </div>
  );
}