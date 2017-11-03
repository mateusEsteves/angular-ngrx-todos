export interface AppStoreInteface{
    todos: Object;
}

export const initialState = (): AppStoreInteface => {
    return {
        todos: {
            data: [],
            pending: true,
            error: false
        }
    };
};
