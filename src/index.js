import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const emojis = { //lbs
	"tomato": 	{emoji: "🍅", weight: 0.4, 		title: "Tomato", 	plural: "tomatoes"},
	"eggplant": {emoji: "🍆", weight: 1.21254, 	title: "Eggplant", 	plural: "eggplants"},
	"potato": 	{emoji: "🥔", weight: 0.383604, title: "Potato", 	plural: "potatoes"},
	"avocado":	{emoji: "🥑", weight: 0.330693, title: "Avocado", 	plural: "avocados"},
	"egg": 		{emoji: "🥚", weight: 0.108125, 	title: "Egg", 		plural: "eggs"}
};

class App extends Component {
	render() {
		return(
			<div>
				<h1 className="title">How Much Ya Lift?</h1>
				<div className="appContainer">
					<Bucket label="Bench" item="tomato"  />
					<Bucket label="Squat" item="avocado" />
					<Bucket label="Deadlift" item="eggplant" />
				</div>
			</div>
		);
	}
}

class EmojiSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	
	render() {
		let aEmojis = [];
		
		let i = 0;
		for(let e in emojis) {
			aEmojis.push(<option key={i} value={emojis[e].title.toLowerCase()}>{emojis[e].plural}</option>)
			i++;
		}
		
		return (
			<select className="emojiSelect" onChange={this.props.handler} defaultValue={this.state.value}>
				{aEmojis}
			</select>
		);
	}
}

class Bucket extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 135,
			emoji: emojis[this.props.item].emoji
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleEmojiChange = this.handleEmojiChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: +event.target.value});
	}
	
	handleEmojiChange(event) {
		this.setState({emoji: emojis[event.target.value].emoji});
	}
	
	render() {
		let items = "";
		let quantity = Math.floor(this.state.value / emojis[this.props.item].weight);
		for(let i = 0; i < quantity; i++) {
			items += this.state.emoji;
		}
	
		return (
			<div className="bucketContainer">
				<div className="formContainer">
					<label>{this.props.label}</label> 
					<input type="number" 
						value={this.state.value} 
						min="1"
						onChange={this.handleChange} />
				</div>
				
				<div className="results">
					{quantity > 0 && <h2>{quantity}
					
					<EmojiSelect handler={this.handleEmojiChange} value={this.props.item}/></h2>}
					
					<div className="bucket">{items}</div>
				</div>
				
			</div>
		);
	}
};

// ========================================

export default App;

ReactDOM.render(
	<App />,
    document.getElementById('root')
);
