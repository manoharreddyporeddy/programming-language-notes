// bit.ly/psreact3

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

let data = [
{
name:"Manohar Reddy Poreddy",
avatar_url:"https://avatars0.githubusercontent.com/u/8236389?v=4",
company: "comp1"
},
{
name:"Manohar Reddy Poreddy",
avatar_url:"https://avatars0.githubusercontent.com/u/8236389?v=4",
company: "comp2"
}

];

const CardList = (props) => {
	return (
  	<div>
    {props.cards_data.map(card_data => <Card {...
card_data} />)}
  	</div>
  ); 
}

ReactDOM.render(<CardList cards_data= {data} />, mountNode);

