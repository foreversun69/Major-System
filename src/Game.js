import React, {Component} from 'react';
import {randomWord, data} from './data.js';
import Form from './Form.js';
import Cell from './Cell.js';
import './Game.css';

class Game extends Component{
  static defaultProps = {
    maxTries: 5,
    maxTurns: data.length - 1,
    nrows: 10,
    ncols: 10,
  } 
  
  constructor(props){
        super(props);
        this.state = {
          answer: "",
          solutionZahl: "00",
          solutionWord: "See", 
          wrongAnswerCount: 0,
          turns: 0,
          answerBoolean: true,
          answerList: [],
          zeitList: [],
          startBoolean: false,          
          startZeit: null,
          zwischenZeit: null,
          board: this.createBoard(),
          cellanswer: "",
          
        }
        this.formValue = this.formValue.bind(this);
        this.onRestart = this.onRestart.bind(this);
        this.onStart = this.onStart.bind(this);
        this.zwischenZeit = this.zwischenZeit.bind(this);
        this.createTable = this.createTable.bind(this);
        this.createBoard = this.createBoard.bind(this);
        this.flipCellsAround = this.flipCellsAround.bind(this);
        this.gesamtZeit = this.gesamtZeit.bind(this);
        
    }

    onRestart(){
      console.log(this);
      this.setState({
        answer: "",
        solutionZahl: "00",
        solutionWord: "See", 
        wrongAnswerCount: 0,
        turns: 0,
        answerBoolean: true,
        answerList: [],
        zeitList: [],
        startZeit: null,
        zwischenZeit: null,
        board: this.createBoard(),
        cellanswer: "",
        startBoolean: false    
      })
  }

  createBoard() {
      let board = [];
      for (let y = 0; y < this.props.nrows; y++) {
        let row = [];
        for (let x = 0; x < this.props.ncols; x++) {
          
        }
        board.push(row);      
      }    
      return board
    }

    flipCellsAround(coord, answer) {
      let board = this.state.board;
      let [y, x] = coord.split("").map(Number);
      let zeit = this.zwischenZeit();
      board[y][x] = `${zeit} ${answer}=${this.state.solutionZahl}`;
      this.setState({board: board, cellanswer: board[y][x] });
    }

    createTable(){
      let tbl = []
      for (let y = 0; y < this.props.nrows; y++) {
        let row = [];
        for (let x = 0; x < this.props.ncols; x++) {
          let coord = `${y}-${x}`;
          row.push(
            <Cell 
            key={coord}
            cellanswer={this.state.board[y][x]}
            zeit={this.state.cellZeit}
            />)
        }
      tbl.push(<tr key={y}>{row}</tr>)        
      }
      return tbl;
  }

    onStart(){
      let currentdate = new Date(); 
      let datetime = currentdate.getTime();
      this.setState({
        startZeit: datetime,
        zwischenZeit: datetime,
        startBoolean: true
      })
    }

    gesamtZeit(){
      let x = 0;
      this.state.zeitList.forEach(element => {
        x += element; 
      });
      return(x);
    }

    zwischenZeit(){
      let currentdate = new Date(); 
      let datetime = currentdate.getTime();
      let zwischenzeit = (datetime - this.state.zwischenZeit) / 1000;
                    //  + currentdate.getHours() + ":"  
                    //  + currentdate.getMinutes() + ":" 
                    //  + currentdate.getSeconds();
      

      this.setState({
        zwischenZeit: datetime
      })
      return(
          zwischenzeit
      );      
    }

    formValue(answer){
      let newValue;
      if (answer === this.state.solutionWord){
        let zwischenzeit = this.zwischenZeit();
        this.setState( st => { 
          return {
             turns: st.turns + 1, 
             solutionZahl: newValue.zahl,
             solutionWord: newValue.value, 
             answerBoolean:true,
             answerList: [...st.answerList, answer],
             zwischenZeit: zwischenzeit,
             zeitList: [...st.zeitList, zwischenzeit]
             
        }});
        do{
          //Erstellen neues Wort
          newValue = randomWord();
          //Prüfen 1. Bedingung: Ob neues Wort sich in der answerList befindet;
          //       2. Bedingung: Ob neues Wort gleich mit this.state.solutionWord ist ( 2x das selbe Wort hintereinander)
          //       3. Bedingung: maxTurns > als turns (weil ansonsten gibt es entweder Dauerschleife oder Wort-Wiederholungen)           
          
        }while((this.state.answerList.indexOf(newValue.value) !== -1 || this.state.solutionWord === newValue.value) && this.props.maxTurns > this.state.turns );
        this.flipCellsAround(this.state.solutionZahl, answer);
      }else{
        this.setState( st => {
          return {wrongAnswerCount: st.wrongAnswerCount + 1, answerBoolean: false}
        });
      }  
    }
    
    render(){
        let result = "";
        if (this.state.startBoolean){
          result = (
            <div>
            <p>Welcher Begriff versteckt sich hinter dieser Zahl?</p>
            <h1>{this.state.solutionZahl}</h1>
              <Form formValue={this.formValue} />
              <button className="button" onClick={this.onRestart}>Reset</button>
              {(!this.state.answerBoolean) && <p>Antwort falsch</p>}
            <p>{this.state.wrongAnswerCount} / {this.props.maxTries} Fehler</p>
            </div>
          );
        }else{
          result = (
            <button className="button" onClick={this.onStart}>Start</button>
          );
        }

        return(
          (this.props.maxTries >= this.state.wrongAnswerCount && this.props.maxTurns >= this.state.turns)
          ?
            <div>            
              <h1>Major-System</h1>
              <h2>{this.state.answerList.length} / {data.length}</h2>
              {result}
              <table className="Board"><tbody>
              {this.createTable()}
              </tbody></table>
            </div>
          :
            <div>
            <h1>Game Over</h1>
            <table className="Board"><tbody>
              {this.createTable()}
            </tbody></table>
            <p>Ich habe dafür {this.gesamtZeit()} Sekunden gebraucht!</p>
            <button className="button" onClick={this.onRestart}>Reset</button>
            </div>
        )
    }
}

export default Game;