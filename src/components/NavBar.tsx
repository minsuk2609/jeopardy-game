import "/styles.css";

export default function NavBar({players, setPlayer, status, setStatus}: any): JSX.Element {
    return (
        <div>
            <button className={`absolute top-3 left-3 z-50 ${status ? "" : "hidden"}`} onClick={() => {
                setStatus(!status);
            }}>
                <img className="w-6 transition opacity-50 hover:opacity-100" src={"dashboard.png"}/>
            </button>
            <div className={`flex ${status ? "md:hidden nav--class--mode-1" : "md:flex nav--class--mode-2"} flex-col flex-grow shadow-xl w-48 min-h-screen bg-[#fff]`}>
                <div className="flex justify-between items-center p-3">
                    <h1 className="text-purple-80">Project Name</h1>
                    <button onClick={() => {
                        setStatus(!status);
                    }}>
                        <img className="w-6 transition opacity-50 hover:opacity-100" src="dashboard.png"/>
                    </button>
                </div>
                <div className="flex flex-col flex-grow space-y-4 p-3 justify-center">
                    <h1>Score:</h1>
                    <ul className="flex flex-col gap-2">
                        <li className="flex justify-between"><input className="w-1/2" type="text" placeholder={players[0].name} onBlur={(event) => {event.target.value !== "" ? setPlayer(0, event.target.value): props.setPlayer(0, "Player 1")}}/><h1 className="pr-6">0</h1></li>
                        <li className="flex justify-between"><input className="w-1/2" type="text" placeholder={players[1].name}/><h1 className="pr-6">0</h1></li>
                        <li className="flex justify-between"><input className="w-1/2" type="text" placeholder={players[2].name}/><h1 className="pr-6">0</h1></li>
                        <li className="flex justify-between"><input className="w-1/2" type="text" placeholder={players[3].name}/><h1 className="pr-6">0</h1></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}