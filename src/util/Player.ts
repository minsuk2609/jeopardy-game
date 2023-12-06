export default class Player {
    name: string;
    score: number;
    active: boolean;

    constructor(some_name: string, status: boolean) {
        this.name = some_name;
        this.score = 0;
        this.active = status;
    }
}