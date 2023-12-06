import data from "../util/questions";

export default function TopicColumn(props: any): JSX.Element {
    return (
        <div className="flex gap-2">
            <div className="w-20 h-20 flex justify-center items-center">{data[1].name}</div>
            <div className="w-20 h-20 flex justify-center items-center">Topic 2</div>
            <div className="w-20 h-20 flex justify-center items-center">Topic 3</div>
            <div className="w-20 h-20 flex justify-center items-center">Topic 4</div>
            <div className="w-20 h-20 flex justify-center items-center">Topic 5</div>
        </div>
    );
}