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
			<main>
				<header className="title"><h1>How Much Ya Lift?</h1></header>
				<div className="appContainer">
					<Bucket label="Bench" defaultItem="tomato"  />
					<Bucket label="Squat" defaultItem="avocado" />
					<Bucket label="Deadlift" defaultItem="eggplant" />
				</div>
			</main>
		);
	}
}

class EmojiSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
	}
	
	render() {
		let aEmojis = [];
		
		let i = 0;
		for(let e in emojis) {
			aEmojis.push(<option key={i} value={emojis[e].title.toLowerCase()}>{emojis[e].emoji}</option>)
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
			emoji: emojis[this.props.defaultItem].emoji,
			item: this.props.defaultItem
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleEmojiChange = this.handleEmojiChange.bind(this);
	}
	
	handleChange(event) {
		this.setState({value: +event.target.value});
	}
	
	handleEmojiChange(event) {
		this.setState({
			emoji: emojis[event.target.value].emoji,
			item: event.target.value
		});
	}
	
	render() {
		let items = "";
		let quantity = Math.floor(this.state.value / emojis[this.state.item].weight);
		
		if(quantity === 0) items = "💩";
		
		for(let i = 0; i < quantity; i++) {
			items += this.state.emoji;
		}
	
		return (
			<section className="bucketContainer">
				<div className="formContainer">
					<label>{this.props.label}</label> 
					<input type="tel" 
						value={this.state.value} 
						maxLength="4"
						pattern="[0-9]*"
						onChange={this.handleChange} />
				</div>
				
				<div className="results">
					<div className="numbers">
						<div><label className="quantity">{quantity}</label></div>
						<div><EmojiSelect handler={this.handleEmojiChange} value={this.props.defaultItem}/></div>
					</div>
					<div className={quantity === 0 ? 'bucket weakShit' : 'bucket'}>{items}</div>
				</div>
				
			</section>
		);
	}
};

// ========================================

export default App;

ReactDOM.render(
	<App />,
    document.getElementById('root')
);
