import Cell from "./Cell";

export default function CellColumn(props: any): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Cell value={100}/>
            <Cell value={200}/>
            <Cell value={300}/>
            <Cell value={400}/>
            <Cell value={500}/>
        </div>
    );
}