import React, { Component } from 'react'

import { connect } from 'react-redux'

import { addTodoAction } from './Flux-actions/actions'
import AddTodo from './Flux-components/AddTodo.js'
import TodoList from './Flux-components/TodoList.js'

class FluxApp extends Component {

    render() {
        const { dispatch, current_todotexts } = this.props
        return (
            <div>
                <AddTodo onAddClick={new_todotext => dispatch(addTodoAction(new_todotext))} />
                <TodoList todos={current_todotexts} />
            </div>
        )
    }
}

function select(state) {
    return {
        current_todotexts: state.todos
    }
}

export default connect(select)(FluxApp);
