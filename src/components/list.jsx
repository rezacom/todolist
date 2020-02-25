import React, { Component } from 'react'
import {DatePicker} from "react-advance-jalaali-datepicker";
import Todo from './Todo'

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: 1,
            text: "",
            textDate: "",
            todoList: []
        }
    }

    handleInputChange = (e) => {

        this.setState({
            text: e.target.value
        })
    }

    // handleDateChange = (e) => {

       
    // }

    handleSubmit = () => {
        const value = document.getElementById('datePicker').value;

        this.setState({
            textDate: value
        })  

        this.setState({
            id: this.state.id + 1,
            todoList: [
                ...this.state.todoList,
                {
                    title: this.state.text,
                    date: this.state.textDate,
                    id: this.state.id
                }
                
            ]
        })    
    }

    render() {
        console.log(this.state);
        return (
            <>
            <div className="container">
              
                <form className="form-inline">
                    <label className="sr-only" for="inlineFormInputName2">Title</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" onChange={this.handleInputChange} id="inlineFormInputName2" placeholder="عنوان" required/>

                    <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                    <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Time</div>
                            <DatePicker
                                inputComponent={this.DatePickerInput}
                                placeholder="انتخاب تاریخ"
                                format="jYYYY/jMM/jDD"
                                // onChange={this.handleDateChange}
                                id="datePicker"
                                required
                            />
                            <input type="hidden"/>
                        </div>
                    
                    </div>


                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary mb-2">Submit</button>
                </form>
                
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.todoList.map(item => <Todo title={item.title} date={item.date} id={item.id} key={item.id}/>)}
                        
                        
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}
