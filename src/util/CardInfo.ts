export default class CardInfo {
    category: string;
    question: string;
    answer: string;

    constructor(category: string, question: string, answer: string) {
        this.category = category;
        this.question = question;
        this.answer = answer;
    }
}