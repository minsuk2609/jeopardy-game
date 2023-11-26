import Cell from "./Cell";

export default function CellColumn(props: any): JSX.Element {
    return (
        <div className="flex flex-col gap-2">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
    );
}