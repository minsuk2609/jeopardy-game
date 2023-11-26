import { useState } from "react";
import Card from "./Card";
import CellColumn from "./CellColumn";
import CardInfo from "../util/CardInfo";

export default function Board(props: any): JSX.Element {
    const [trigger, setTrigger] = useState<boolean>(false);
    const [cardInfo, setCardInfo] = useState<CardInfo>(new CardInfo("", ""));
    
    return (
        <div className="relative grid grid-cols-5 gap-2">
            <CellColumn topic={"Topic 1"} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={"Topic 2"} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={"Topic 3"} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={"Topic 4"} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <CellColumn topic={"Topic 5"} setTrigger={setTrigger} cardInfo={cardInfo} setCardInfo={setCardInfo}/>
            <Card trigger={trigger} setTrigger={setTrigger} cardInfo={cardInfo}/>
        </div>
    );
}