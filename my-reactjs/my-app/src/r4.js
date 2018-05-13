// bit.ly/psreact4

const Card = (props) => {
    return (
    <div style={{margin: '1em'}}>
	    <img width="75" src={props.avatar_url} />
      <div style={{display:'inline-block', marginLeft: 10 }}  >
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
    );
}

const CardList = (props) => {
	return (
  	<div>
    {props.cards_data.map(card_data => <Card key={card_data.id} {...
card_data} />)}
  	</div>
  ); 
}


class Form extends React.Component {

  state = {
  userName: ""
  }
  // zpao
  // jordwalke
  // manoharreddyporeddy
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    axios
    .get(`https://api.github.com/users/${this.state.userName}`)
    .then(resp => {
    this.props.onSubmit1(resp.data);
    this.setState({userName: ""});
    });
  };

	render() {
	  return (
    <form onSubmit={this.handleSubmit} >
    <input type="text"
    value={this.state.userName}
    onChange={(event) => this.setState({userName: event.target.value})}
    placeholder="Github username" required />
    <button type="submit">Add card</button>

    </form>
    )
  };
}

class App extends React.Component {

	state = {
    cards_data : [
    ]
	}


  addNewCard = (card_data1) => {
    this.setState(prevState => ({
      cards_data: prevState.cards_data.concat(card_data1)
    }));

};
  
  
	render() {
  	return (
    <div>
      <Form onSubmit1={this.addNewCard} />
      <CardList cards_data={this.state.cards_data} />
    </div>
    );
  }
}

ReactDOM.render(<App cards_data= "" />, mountNode);









