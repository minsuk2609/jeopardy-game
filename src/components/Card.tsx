export default function Card(props: any): JSX.Element {
    return (props.trigger) ? (
        <div className="absolute top-0 left-0 z-50 w-full h-full rounded-lg bg-slate-200">
            <button className="absolute right-0 top-0 p-3" onClick={() => props.setTrigger(false)}>
                <img className="w-6 h-6 opacity-50 hover:opacity-100" src="/public/close.png"/>
            </button>
        </div>
    ) : (
        <div className="hidden"></div>
    );
}