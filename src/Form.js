import React, {Component} from 'react';
import './Form.css';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            answer: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    
    handleSubmit(evt){
        evt.preventDefault();
        this.props.formValue(this.state.answer);
        this.setState({answer: ""});
    }
    
    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
            <button>Prüfen</button>
            <input
            id="answer"
            name="answer"
            onChange={this.handleChange}
            value={this.state.answer}
            />
            </form>
        )
    }
}

export default Form;