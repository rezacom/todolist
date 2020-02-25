import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.id}</th>
                <td>{this.props.title}</td>
                <td>{this.props.date}</td>
                <td>rezashoja1880@gmail.com</td>
            </tr>
        )
    }
}
