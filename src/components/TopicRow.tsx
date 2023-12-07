import data from "../util/questions";

export default function TopicColumn(props: any): JSX.Element {
    return (
        <div className="flex gap-2">
            <div className="text-sm sm:text-base w-12 h-20 xsm:h-20 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0">{data[1].name}</div>
            <div className="text-sm sm:text-base w-12 h-20 xsm:h-20 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0">Topic 2</div>
            <div className="text-sm sm:text-base w-12 h-20 xsm:h-20 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0">Topic 3</div>
            <div className="text-sm sm:text-base w-12 h-20 xsm:h-20 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0">Topic 4</div>
            <div className="text-sm sm:text-base w-12 h-20 xsm:h-20 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0">Topic 5</div>
        </div>
    );
}