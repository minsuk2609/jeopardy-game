import Board from "./Board";
import Header from "./Header";

export default function Main(props: any): JSX.Element {
    return (
        <div className="flex flex-col justify-center w-full h-screen">
            <Header
                status={props.status}
            />
            <div className="flex justify-center">
                <Board />
            </div>
        </div>
    );
}