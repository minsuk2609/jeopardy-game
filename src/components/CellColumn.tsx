import Cell from "./Cell";

export default function CellColumn(props: any): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Cell value={100} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell value={200} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell value={300} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell value={400} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
            <Cell value={500} setTrigger={props.setTrigger} setCardInfo={props.setCardInfo}/>
        </div>
    );
}