var React = require('react');

require('../css/todoItem.css')

var TodoItem = React.createClass({
  render: function(){
    return(
      <li className="todo-item">
      <span className="item-name">{this.props.item}</span>
      <span className="item-remove" onClick={this.handleDelete}> x </span>
      </li>
    )
  },
  handleDelete:function(){
    this.props.onDelete(this.props.item)
  }


})

module.exports = TodoItem;
