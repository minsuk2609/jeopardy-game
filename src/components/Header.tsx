import Player from "../util/Player";

export default function Header(props: any): JSX.Element {
    return (
        <div className={`flex h-12 shadow-sm items-center justify-end`}>
            <div className="flex gap-2 items-center p-3">
                <h1>Active Player:</h1>
                <h1 className="animate-pulse text-purple-80">{props.players.filter((player: Player) => player.active).map((player: Player) => player.name)}</h1>
            </div>
        </div>
    );
}