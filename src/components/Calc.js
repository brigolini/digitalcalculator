import React, {Component} from 'react';
import Display from "./Display";
import Button from "./Button";

class Calc extends Component {
    initialState = {firstValue:0,secondValue:0,operator:1,isSum:false};
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }
    putValue = (value) =>{
        if (this.state.operator===1){
            this.setState({firstValue:(this.state.firstValue*10) + value})
        } else {
            this.setState({secondValue:(this.state.secondValue*10) + value})
        }
    }

    pickOperation = (isSum) =>{
        this.setState({operator:2,isSum});
    }

    clear = () =>{
        this.setState(this.initialState)
    }

    execOperation = () => {
        this.setState({operator:3})
    }

    getValue = () => {
        switch (this.state.operator){
            case 1: return this.state.firstValue;
            case 2: return this.state.secondValue;
            case 3: return this.state.isSum?this.state.firstValue + this.state.secondValue:this.state.firstValue + this.state.secondValue;
            default: return 0;
        }
    }


    render() {
        return (
            <div className={"calculadora"}>
                <Display value={this.getValue()}/>
                <Button display={"1"} onclick={()=>this.putValue(1)}/>
                <Button display={"2"}  onclick={()=>this.putValue(2)}/>
                <Button display={"3"}  onclick={()=>this.putValue(3)}/>
                <Button display={"4"}  onclick={()=>this.putValue(4)}/>
                <Button display={"5"}  onclick={()=>this.putValue(5)}/>
                <Button display={"6"}  onclick={()=>this.putValue(6)}/>
                <Button display={"7"}  onclick={()=>this.putValue(7)}/>
                <Button display={"8"}  onclick={()=>this.putValue(8)}/>
                <Button display={"9"}  onclick={()=>this.putValue(9)}/>
                <Button display={"0"}  onclick={()=>this.putValue(0)}/>
                <Button display={"+"}  onclick={()=>this.pickOperation(true)}/>
                <Button display={"-"}  onclick={()=>this.pickOperation(false)}/>
                <Button display={"="}  onclick={()=>this.execOperation()}/>
                <Button display={"C"}  onclick={()=>this.clear()}/>
            </div>

        );
    }
}

export default Calc;