export interface Post {
    readonly id: number,
    readonly content: string,
    readonly title: string,
    readonly date: number,
}

export const POSTS: Post[] = [
    {
        id: 12312312312,
        title: 'Post 1',
        content: 'This is the first post.',
        date: Date.parse('2021-01-01')
    },
    {
        id: 12312312313,
        title: 'Post 2',
        content: 'This is the second post.',
        date: Date.parse('2021-01-02')
    },
    {
        id: 12312312314,
        title: 'Post 3',
        content: 'This is the third post.',
        date: Date.parse('2021-01-03')
    }
];

export function generateId(): number {
    return Math.ceil(Math.random() * 100000000) + 1000000;
}
