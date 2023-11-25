export default class Player {
    name: string;
    score: number;

    constructor(some_name: string) {
        this.name = some_name;
        this.score = 0;
    }
}