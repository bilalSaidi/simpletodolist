import React  , {Component} from 'react';
import './App.css';

import ListItems from './components/listItems';
import AddItem from './components/addItem';

class App extends Component{

   state = ({
      items : [
        {id : 1 , name : 'bilal' , lastName : 'saidi' , age : 23 } ,
        {id : 2 , name : 'ahmed' , lastName : 'mohammed' , age : 19 } ,
        {id : 3 , name : 'ali' , lastName : 'ramzi' , age : 13 } 
      ]
    });


    hendleDeleteItem = (id) =>{
          let items = this.state.items;
          let itemsList = items.filter(item => {
              return item.id !== id;
          });
          this.setState({ items : itemsList });
    }

    handleAddItem = (item) => {
      item.id = Math.random();
      let items = this.state.items ; 
      items.push(item);
      this.setState({items})
    }

  render(){
    
    return(

      <div className="App">
        <h1>React Simple App To Do List </h1>
        <AddItem  addItem = {this.handleAddItem}/>
        <ListItems  datas ={this.state.items} deleteItem ={this.hendleDeleteItem} />
        
    </div>

    )
  }
}

export default App;
