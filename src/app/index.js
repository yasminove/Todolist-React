var React = require('react');
var ReactDOM = require('react-dom');

var TodoItem = require('./todoItem')

var AddItem = require('./addItem');

require('../css/index.css')

var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos : ['Hold A Meeting', 'Go Food Shopping', 'Go For A Walk']
    }
  },
  render: function(){
    var todos = this.state.todos;
     todos = todos.map(function(item, index){
      return <TodoItem item={item} key={index} onDelete={this.onDelete} />
    }.bind(this));
    return (
      <div id="todo-list">
          <p>Productivity is never an accident. It is always the result of a
          commitment to excellence, intelligent planning, and focused effort. </p>
          <ul>{todos}</ul>
          <AddItem onAdd={this.onAdd}/>
      </div>
    )
  },
  onDelete: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos = updatedTodos.filter(function(val, index){
      return item !== val;
    })
    this.setState({
      todos: updatedTodos
    })
  },
  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item)
    this.setState({
      todos: updatedTodos
    })
  }

});



ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'))
