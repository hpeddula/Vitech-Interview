import React from 'react';
import Counter from './Counter';
import TotalCounter  from './TotalCounter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data : [
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
      ],
      total:0
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.togglePlusMinus = this.togglePlusMinus.bind(this);
  }
  handleIncrement(id) {
    const { data } = this.state;
    var total = 0;
    var newData = data.map((dt)=>{
        if(dt.id === id) dt.value++;
        total += dt.value;
        return dt;
    });
    this.setState({newData,total});
  }
  handleDecrement(id) {
    const { data, total } = this.state;
    var newtotal = total;
    var newData = data.map((dt)=>{
        if(dt.id === id) 
        
        return dt;
    });
    this.setState({newData,total:newtotal});
  }
  onChangeHandler(id,val) {
    const { data, total } = this.state;
    var subtotal = total;
    var addTotal = 0;
    var newData = data.map((dt)=>{
        if(!val)
        {
          if(dt.id === id) 
          {
            dt.value--;
            subtotal -= 1;
          }
          return dt;
        } else {
          if(dt.id === id) dt.value++;
          addTotal += dt.value;
          return dt;
        }
    });
    this.setState({data:newData,total:!val?subtotal:addTotal});
  }
  togglePlusMinus(val) {
    console.log("Value is",val);
    this.setState({isIncrement:Boolean(val)});
  }
  render() {
    const { data,total,isIncrement } = this.state;
    // const expr = data.map((obj)=> {
    //   <Counter key={obj.id}
    //   id={obj.id}
    //   value={obj.value}
    //   // onIncrement={()=>this.handleIncrement(obj.id,isIncrement)}
    //   // onDecrement={()=>this.handleDecrement(obj.id,!isIncrement)}
    //   onChangeHandler={()=>this.onChangeHandler(obj.id,isIncrement)}
    //   togglePlusMinus={()=>this.togglePlusMinus(isIncrement)}
    //   isIncrement={isIncrement}
    //   />
    // :
    //   expr =
    //   <Counter key={obj.id}
    //   id={obj.id}
    //   value={obj.value}
    //   // onIncrement={()=>this.handleIncrement(obj.id,isIncrement)}
    //   // onDecrement={()=>this.handleDecrement(obj.id,!isIncrement)}
    //   onChangeHandler={()=>this.onChangeHandler(obj.id)}
    //   // togglePlusMinus={()=>this.togglePlusMinus(isIncrement)}
    //   // isIncrement={isIncrement}
    //   />;
    //});
    return (
      <div >
        {data.map(obj => 
          <Counter key={obj.id}
          id={obj.id}
          value={obj.value}
          // onIncrement={()=>this.handleIncrement(obj.id)}
          // onDecrement={()=>this.handleDecrement(obj.id)}
          //togglePlusMinus={(val)=>this.togglePlusMinus(val)}
          onChangeHandler={(id,val)=>this.onChangeHandler(obj.id,val)}
          isIncrement={isIncrement}
          />
      )}
        <hr />
        <TotalCounter total={total}/>
      </div>
    );
  }
}

export default App;
