import Player from "../util/Player";

export default function Card(props: any): JSX.Element {
    function setNextPlayer() {
        let index : number = 0;
        for (let i=0; i<props.players.length; i++) {
            if (props.players[i].active) {
                props.players[i].active = false;
                index = i;
                break;
            }
        }
        let new_active_index : number = (index+1)%4;
        props.setPlayer(new_active_index, props.players[new_active_index].name, true);
    }

    function handleAnswerClick(index: number) {
        if (props.cardInfo.answerList[index] === props.cardInfo.answer) {
            props.players.filter((player: Player) => player.active).forEach((player: Player) => player.score += props.cardInfo.score);
            setNextPlayer();
        }
    }

    return (props.trigger) ? (
        <div className="flex items-center justify-center absolute top-0 left-0 z-40 w-full h-full rounded-lg bg-slate-200">
            <button className="absolute right-0 top-0 p-3" onClick={() => props.setTrigger(false)}>
                <img className="w-6 h-6 opacity-50 hover:opacity-100" src="close.png"/>
            </button>
            <div className="relative flex flex-col gap-2 items-center m-6">
                <h1>{props.cardInfo.category}</h1>
                <h1 className="break-words">{props.cardInfo.question}</h1>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white w-[75%] py-1" onClick={() => {
                    handleAnswerClick(1);
                }}>{props.cardInfo.answerList[1]}</button>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white w-[75%] py-1">{props.cardInfo.answerList[2]}</button>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white w-[75%] py-1">{props.cardInfo.answerList[3]}</button>
                <button className="border border-purple-80 rounded-md transition hover:bg-purple-80 hover:text-white w-[75%] py-1">{props.cardInfo.answerList[4]}</button>
            </div>
        </div>
    ) : (
        <div className="hidden"></div>
    );
}