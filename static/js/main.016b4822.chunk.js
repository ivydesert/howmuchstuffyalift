(this["webpackJsonphow-many-tomatoes"]=this["webpackJsonphow-many-tomatoes"]||[]).push([[0],{15:function(e,t,a){},9:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),l=a(3),s=a(4),o=a(6),c=a(5),r=a(1),h=a(8),j=a.n(h),u=(a(15),{tomato:{emoji:"\ud83c\udf45",weight:.4,title:"Tomato",plural:"tomatoes"},eggplant:{emoji:"\ud83c\udf46",weight:1.21254,title:"Eggplant",plural:"eggplants"},potato:{emoji:"\ud83e\udd54",weight:.383604,title:"Potato",plural:"potatoes"},avocado:{emoji:"\ud83e\udd51",weight:.330693,title:"Avocado",plural:"avocados"},egg:{emoji:"\ud83e\udd5a",weight:.108125,title:"Egg",plural:"eggs"}}),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"title",children:"How Much Ya Lift?"}),Object(i.jsxs)("div",{className:"appContainer",children:[Object(i.jsx)(m,{label:"Bench",item:"tomato"}),Object(i.jsx)(m,{label:"Squat",item:"avocado"}),Object(i.jsx)(m,{label:"Deadlift",item:"eggplant"})]})]})}}]),a}(r.Component),b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={value:i.props.value},i.handleChange=i.handleChange.bind(Object(n.a)(i)),i}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=[],t=0;for(var a in u)e.push(Object(i.jsx)("option",{value:u[a].title.toLowerCase(),children:u[a].plural},t)),t++;return Object(i.jsx)("select",{className:"emojiSelect",onChange:this.props.handler,defaultValue:this.state.value,children:e})}}]),a}(r.Component),m=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={value:135,emoji:u[i.props.item].emoji},i.handleChange=i.handleChange.bind(Object(n.a)(i)),i.handleEmojiChange=i.handleEmojiChange.bind(Object(n.a)(i)),i}return Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({value:+e.target.value})}},{key:"handleEmojiChange",value:function(e){this.setState({emoji:u[e.target.value].emoji})}},{key:"render",value:function(){for(var e="",t=Math.floor(this.state.value/u[this.props.item].weight),a=0;a<t;a++)e+=this.state.emoji;return Object(i.jsxs)("div",{className:"bucketContainer",children:[Object(i.jsxs)("div",{className:"formContainer",children:[Object(i.jsx)("label",{children:this.props.label}),Object(i.jsx)("input",{type:"number",value:this.state.value,min:"1",onChange:this.handleChange})]}),Object(i.jsxs)("div",{className:"results",children:[t>0&&Object(i.jsxs)("h2",{children:[t,Object(i.jsx)(b,{handler:this.handleEmojiChange,value:this.props.item})]}),Object(i.jsx)("div",{className:"bucket",children:e})]})]})}}]),a}(r.Component);t.default=d,j.a.render(Object(i.jsx)(d,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.016b4822.chunk.js.map