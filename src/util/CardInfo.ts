export default class CardInfo {
    score: number;
    category: string;
    question: string;
    answer: string;
    answerList: any;

    constructor(score: number, category: string, question: string, answer: string, answerList: any) {
        this.score = score;
        this.category = category;
        this.question = question;
        this.answer = answer;
        this.answerList = answerList;
    }
}