import { useState } from "react";
import Card from "./Card";
import CellColumn from "./CellColumn";
import CardInfo from "../util/CardInfo";

export default function Board(props: any): JSX.Element {
    const [trigger, setTrigger] = useState<boolean>(false);
    const [cardInfo, setCardInfo] = useState<CardInfo>(new CardInfo(0, "","" ,"", {}));
    
    return (
        <div className="relative grid grid-cols-5 gap-2 sm:gap-4">
            <CellColumn topic={1} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={2} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={3} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={4} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={5} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <Card trigger={trigger} setTrigger={setTrigger} cardInfo={cardInfo} players={props.players} setPlayer={props.setPlayer}/>
        </div>
    );
}