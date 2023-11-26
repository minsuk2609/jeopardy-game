import { useState } from "react";
import Card from "./Card";
import CellColumn from "./CellColumn";
import CardInfo from "../util/CardInfo";

export default function Board(props: any): JSX.Element {
    const [trigger, setTrigger] = useState<boolean>(true);
    const [cardInfo, setCardInfo] = useState<CardInfo>(new CardInfo("", ""));
    
    return (
        <div className="relative grid grid-cols-5 gap-2">
            <CellColumn setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <Card trigger={trigger} setTrigger={setTrigger} cardInfo={cardInfo}/>
        </div>
    );
}