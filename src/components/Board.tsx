import { useState } from "react";
import Card from "./Card";
import CellColumn from "./CellColumn";

export default function Board(props: any): JSX.Element {
    const [trigger, setTrigger] = useState<boolean>(true);
    
    return (
        <div className="relative grid grid-cols-5 gap-2">
            <CellColumn setTrigger={setTrigger}/>
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <Card trigger={trigger} setTrigger={setTrigger}/>
        </div>
    );
}