export interface Question {
    readonly caption: string;
    readonly answers: string[];
    readonly correctAnswerIndex: number;
}
export interface Answer {
    readonly userAnswer: number;
    readonly isCorrect: boolean;
}