import CellColumn from "./CellColumn";

export default function Board(props: any): JSX.Element {
    return (
        <div className="grid grid-cols-5 gap-2">
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <CellColumn />
            <CellColumn />
        </div>
    );
}