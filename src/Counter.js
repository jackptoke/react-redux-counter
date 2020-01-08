import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './Button';
import "./Counter.css";

function mapStateToProps(state){
    return { count: state.count};
}

class Counter extends Component{

    increment = () => {
        const newCount = this.props.count + 1;
        this.props.dispatch({type: "UPDATE_COUNT", newCount: newCount});
    }

    incrementTen = () => {
        const newCount = this.props.count + 10;
        this.props.dispatch({type: "UPDATE_COUNT", newCount: newCount});
    }
    decrement = () => {
        if(this.props.count > 0){
            const newCount = this.props.count - 1;
            this.props.dispatch({type: "UPDATE_COUNT", newCount: newCount});
        }
    }

    renderCounter(){
       
        const {count} = this.props;
        return <div className="Counter">
            <h1 className="counterDisplay">{count}</h1>
            <div className="ButtonContainer">
                <Button className="minusButton" text="-" onClick={this.decrement} />
                <Button className="plusButton" text="+" onClick={this.increment} />
                <Button className="plusButton" text="+10" onClick={this.incrementTen} />
            </div>
            
        </div>
    }

    render(){
        return this.renderCounter();
    }
}

export default connect(mapStateToProps)(Counter);