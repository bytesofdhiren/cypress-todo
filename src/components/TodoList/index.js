import React, {Component} from 'react';
import TodoItems from '../ToDoItems';
import './style.css';

class TodoList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      items: [],
      visible:false,
    };
    this.addItem = this.addItem.bind (this);
    this.deleteItem = this.deleteItem.bind (this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
          this.setState({
            visible:true
          });
        })
        .then((myJson) => {
          console.log(myJson);
        });
      })
      .then((myJson) => {
        console.log(myJson);
      });      
    })
    .then((myJson) => {
      console.log(myJson);
    });
    // setInterval(() => {
    //   this.setState({
    //         visible:true
    //       });
    // }, 4000);    
  }

  addItem (e) {
    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now (),
      };

      this.setState (prevState => {
        return {
          items: prevState.items.concat (newItem),
        };
      });

      this._inputElement.value = '';
    }

    console.log (this.state.items);

    e.preventDefault ();
  }
  deleteItem (key) {
    var filteredItems = this.state.items.filter (function (item) {
      return item.key !== key;
    });
    this.setState ({
      items: filteredItems,
    });
  }
  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            {this.state.visible && <input
              autoFocus
              className="new task"
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />}
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
