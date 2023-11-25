import { useState } from "react";

export default function NavBar(props: any): JSX.Element {
    const [status, setStatus] = useState<string>("");
    return (
        <div className={`flex transition-transform ${status} flex-col shadow-xl w-48 min-h-screen`}>
            <div className="flex justify-between items-center p-3">
                <h1 className="text-purple-80">Project Name</h1>
                <button onClick={() => status === "" ? setStatus("") : setStatus("")}>button</button>
            </div>
            <div className="flex flex-col flex-grow space-y-4 p-3 justify-center">
                <h1>Score:</h1>
                <ul>
                    {/* <li><input type="text" placeholder={props.players[0]}/></li>
                    <li><input type="text" placeholder={props.players[1]}/></li>
                    <li><input type="text" placeholder={props.players[2]}/></li>
                    <li><input type="text" placeholder={props.players[3]}/></li> */}
                    <li><input type="text" placeholder="Player 1"/></li>
                    <li><input type="text" placeholder="Player 2"/></li>
                    <li><input type="text" placeholder="Player 3"/></li>
                    <li><input type="text" placeholder="Player 4"/></li>
                </ul>
            </div>
            
        </div>
    );
}