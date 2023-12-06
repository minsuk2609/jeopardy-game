export default class CardInfo {
    category: string;
    question: string;
    answer: string;
    answerList: any;

    constructor(category: string, question: string, answer: string, answerList: any) {
        this.category = category;
        this.question = question;
        this.answer = answer;
        this.answerList = answerList;
    }
}