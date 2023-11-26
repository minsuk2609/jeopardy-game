export default function Header(props: any): JSX.Element {
    return (
        <div className={`fixed top-0 flex ${props.status ? "w-full left-0" : "w-[calc(100%-12rem)] left-48"} h-12 shadow-sm items-center justify-end`}>
            <div className="flex gap-2 items-center p-3">
                <h1>Active Player:</h1>
                <h1 className="animate-pulse text-purple-80">Player 1</h1>
            </div>
        </div>
    );
}