import Board from "./Board";
import Header from "./Header";
import TopicRow from "./TopicRow";

export default function Main(props: any): JSX.Element {
    return (
        <div className="flex flex-col justify-center w-full h-screen">
            <Header
                status={props.status}
                players={props.players}
            />
            <div className="flex flex-1 flex-col items-center">
                <TopicRow />
                <Board
                    players={props.players}
                    setPlayer={props.setPlayer}
                />
            </div>
        </div>
    );
}