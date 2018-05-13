var React = require('react');

require('../css/addItem.css')

var AddItem = React.createClass({
  render : function(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit}>
          <input type="text" ref="newItem" />
          <input type="submit" value="add a new one!" />
      </form>
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value)
    console.log(this.refs.newItem.value);
  }
})

module.exports = AddItem;
