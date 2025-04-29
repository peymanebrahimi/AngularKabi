import { Answer, Question } from "./model";

export function getAnswerEntities(questions: Question[], userAnswers: number[]): Answer[] {
    // return userAnswers.map<Answer>((ans, index) => ({
    //     userAnswer: ans, 
    //     isCorrect: questions[index].correctAnswerIndex === ans
    // }))  

    return userAnswers.map((ans, index) => {
        const isCorrect = questions[index].correctAnswerIndex === ans;
        return { userAnswer: ans, isCorrect };
    });
}

export function getRatio(value: number, total: number): number {
    if (value <= 0) return 0;
    if (value >= total) return 1;

    if (total <= 0) return 0;
    return value / total;
}