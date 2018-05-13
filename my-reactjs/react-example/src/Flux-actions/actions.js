export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}
