import React, {Component} from 'react'
import "./Cell.css"


class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    if(this.props.cellanswer){
      console.log(alert(this.props.cellanswer.split(":")[0]));
    }else{
      alert("Feld ist leer");
    }
    
  }

  render() {
    let classes = "Cell" + (this.props.isLit ? " Cell-lit" : "");

    return (
        <td className={classes} onClick={this.handleClick}>
        <p>{this.props.cellanswer}</p>
        
        </td>
    )
  }
}


export default Cell