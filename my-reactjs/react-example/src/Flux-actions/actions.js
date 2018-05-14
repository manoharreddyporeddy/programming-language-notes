export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;

export function addTodo(new_todotext) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        new_todotext
    };
}
