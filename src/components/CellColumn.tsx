import Cell from "./Cell";

export default function CellColumn(props: any): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Cell topic={props.topic} value={100} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell topic={props.topic} value={200} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell topic={props.topic} value={300} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell topic={props.topic} value={400} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell topic={props.topic} value={500} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
        </div>
    );
}