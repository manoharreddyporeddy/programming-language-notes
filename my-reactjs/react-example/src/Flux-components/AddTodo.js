import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {

    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>Add</button>
            </div >
        )
    }

    handleClick(e) {
        const inputNode = this.refs.input

        this.props.onAddClick(inputNode.value.trim())

        inputNode.value = ''
    }

}
