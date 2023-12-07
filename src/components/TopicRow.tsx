import data from "../util/questions";

export default function TopicColumn(props: any): JSX.Element {
    return (
        <div className="flex gap-2 sm:gap-4">
            <div className="text-sm sm:text-base w-12 h-24 xsm:h-24 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0 text-center">{data[1].name}</div>
            <div className="text-sm sm:text-base w-12 h-24 xsm:h-24 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0 text-center">{data[2].name}</div>
            <div className="text-sm sm:text-base w-12 h-24 xsm:h-24 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0 text-center">{data[3].name}</div>
            <div className="text-sm sm:text-base w-12 h-24 xsm:h-24 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0 text-center">{data[4].name}</div>
            <div className="text-sm sm:text-base w-12 h-24 xsm:h-24 xsm:w-16 sm:w-20 sm:h-20 flex justify-center items-center rotate-90 py-2 sm:rotate-0 text-center">{data[5].name}</div>
        </div>
    );
}