import React  from 'react';
import './Counter.scss';

export default class Counter extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
    return(
        <div className="counter">
            <b>{this.props.value}</b>
            <div className="counter-controls">
                {/* <button onClick={()=>this.props.onDecrement(this.props.id,false)} className="button is-danger is-small">-</button>
                <button onClick={()=>this.props.onIncrement(this.props.id,true)} className="button is-success is-small">+</button> */}
                <button onClick={()=>{
                    //this.props.togglePlusMinus(false);
                    this.props.onChangeHandler(this.props.id,false);
                }} 
                    className="button is-danger is-small">-</button>
                <button onClick={()=>{ 
                    //this.props.togglePlusMinus(true);
                    this.props.onChangeHandler(this.props.id,true);
                }} className="button is-success is-small">+</button>
            </div>
        </div>
    );
    }

}