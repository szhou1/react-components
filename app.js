class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hovered: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  };  

  onHover() {
    this.setState({
      hovered: !this.state.hovered
    });
  };  

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hovered ? 'bold' : 'normal'
    };
  
    return (
      <li style={style} 
          onClick={this.onListItemClick.bind(this)} 
          onMouseOver={this.onHover.bind(this)}
          onMouseOut={this.onHover.bind(this)}
          >{this.props.item}
      </li>
    );
  }
};

var GroceryList = (props) => {


  return (
    <ul>
      {props.groceryList.map( (item, i) => 
        <GroceryListItem key={i} 
                        item={item} />)}
    </ul>
  );
};

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryList={['milk', 'fruit', 'walnuts']}/>
  </div>
);

ReactDOM.render(<App/>, document.getElementById("app"));