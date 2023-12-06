export default class Player {
    name: string;
    score: number;
    active: boolean;

    constructor(some_name: string) {
        this.name = some_name;
        this.score = 0;
        this.active = false;
    }
}