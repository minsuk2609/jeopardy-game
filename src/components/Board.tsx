import { useState } from "react";
import Card from "./Card";
import CellColumn from "./CellColumn";

export default function Board(props: any): JSX.Element {
    const [trigger, setTrigger] = useState<boolean>(false);
    
    return (
        <div className="relative grid grid-cols-5 gap-2">
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <Card trigger={true} setTrigger={setTrigger}/>
        </div>
    );
}