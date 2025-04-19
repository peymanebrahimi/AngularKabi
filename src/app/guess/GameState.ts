export type GameState = 'playing' | 'won' | 'lost';

export type GuessResult = 'exact' | 'too-high' | 'too-low';

export interface Guess {
    readonly value: number;
    readonly result: GuessResult;
}

export function calcGameState(userGuesses: Guess[]): GameState {
    const lastGuess = getLatestGuess(userGuesses);

    if (lastGuess === null) {
        return 'playing';
    }


    if (lastGuess.result === 'exact') {
        return 'won';
    }

    if (userGuesses.length >= 7) {
        return 'lost';
    }

    return 'playing';
}

export function getLatestGuess(userGuesses: Guess[]): Guess | null {
    if (userGuesses.length === 0) {
        return null;
    }

    return userGuesses[userGuesses.length - 1];
}

export function addGuess(correctGuess: number, userGuesses: Guess[], value: number): Guess[] {
    return [
        ...userGuesses, 
        {
            value, 
            result: guessResult(correctGuess, value)
        }
    ]
}

export function guessResult(currectGuess: number, userGuess: number): GuessResult {
    if (currectGuess === userGuess) {
        return 'exact';
    }

    if (currectGuess < userGuess) {
        return 'too-high';
    }   

    return 'too-low';
}