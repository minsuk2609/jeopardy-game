export default function Card(props: any): JSX.Element {
    return (props.trigger) ? (
        <div className="flex items-center justify-center absolute top-0 left-0 z-40 w-full h-full rounded-lg bg-slate-200">
            <button className="absolute right-0 top-0 p-3" onClick={() => props.setTrigger(false)}>
                <img className="w-6 h-6 opacity-50 hover:opacity-100" src="close.png"/>
            </button>
            <div className="flex flex-col gap-2">
                <h1>{props.cardInfo.question}</h1>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white">Answer 1</button>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white">Answer 2</button>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white">Answer 3</button>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white">Answer 4</button>
            </div>
        </div>
    ) : (
        <div className="hidden"></div>
    );
}