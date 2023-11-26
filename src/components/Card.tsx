export default function Card(props: any): JSX.Element {
    return (props.trigger) ? (
        <div className="absolute top-0 left-0 z-50 w-full h-full rounded-lg bg-slate-200">
            
        </div>
    ) : (
        <div className="hidden"></div>
    );
}