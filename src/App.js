import React, { Component } from 'react';
import './App.css';

import TOP from './Components/TOP';
import ADD from './Components/ADD';
import ContainerClearfix from './Components/CONTAINER_CLEARFIX';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      idInc: 0,
      idExp: 0,

      type: "inc",
      description: "",
      value:0,

      allInc:0,
      allExp:0,
      //avaliable:0

      listIncome: [],
      listExpense: []
    }
  }
  
  handleChange = (prop, val) => {
    this.setState({[prop]: val})
  }
  
  handlerSubmit = () => {
    this.setState((prevState) => {
      console.log(this.state);
      let idInc;
      let idExp;

      if(this.state.listIncome.length === 0){
        idInc = 1;
      }else{
        idInc = this.state.listIncome[this.state.listIncome.length-1]["idInc"]+1;
      }

      if(this.state.listExpense.length === 0){
        idExp = 1;
      }else{
        idExp = this.state.listExpense[this.state.listExpense.length-1]["idExp"]+1;
      }


      let obj = {
        idInc: idInc,
        idExp: idExp,
        description: this.state.description,
        value: parseFloat(this.state.value),
      }

      //this.state.description = "";

      if(this.state.type === "inc"){
        this.state.listIncome.push(obj);
        console.log(this.state.listIncome);
        return prevState.allInc += parseFloat(this.state.value)
      }else{
        this.state.listExpense.push(obj);
        console.log(this.state.listExpense);
        return prevState.allExp += parseFloat(this.state.value)
      }
         
    })

  } 

  handleClickDelete = (id, type) => {
    console.log(`vou remover ${id} e ${type}`)
    
    this.setState(prevState=>{
      let index = 0;
      for(let list of prevState.listIncome){
        if(list.idInc === id){
          let a =(prevState.listIncome.splice(index,1));
          console.log(a)
        }
        
        index++;
      }
      return prevState;
    })
    this.update();
  }

  handleClickDeleteExp = (id, type) => {
    console.log(`vou remover ${id} e ${type}`)
    
    this.setState(prevState=>{
      let index = 0;
      for(let list of prevState.listExpense){
        if(list.idExp === id){
          prevState.listExpense.splice(index,1);
        }
        index++;
      }
      return prevState;
    })
    this.update();
  }

  update(){
    this.setState((prevState) => {
      console.log("entrou")
      console.log(prevState);
      prevState.allInc = 0;
      prevState.allExp = 0;


      for(let item of prevState.listIncome){
        prevState.allInc += parseFloat(item.value);
      }

      for(let item of prevState.listExpense){
        prevState.allExp += parseFloat(item.value);
      }

      return prevState;
    })
    
  }

  render() {
    return (
     <div className='App'>
       <TOP allInc={this.state.allInc}
            allExp={this.state.allExp}
            />
       <ADD type={this.state.type}
            description={this.state.description}
            value={this.state.value}
            
            onChange={this.handleChange}
            onSubmitForm={this.handlerSubmit}
            />
       <ContainerClearfix listIncome={this.state.listIncome}
                           listExpense={this.state.listExpense}
                           
                           handleClickDelete={this.handleClickDelete}
                           handleClickDeleteExp={this.handleClickDeleteExp}/>
     </div>
    );
  }
}

export default App;
