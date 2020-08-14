import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button className="btnstyle" onClick={this.props.delTodo.bind(this, id)} >x</button>
                </p>
            </div>
        )
    }
}

// const btnStyle = {
//     background: '#d22b55',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right'
// } 

//PropTypes
TodoItem.proptype = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
