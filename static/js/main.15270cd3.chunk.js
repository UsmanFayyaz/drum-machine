(window["webpackJsonpdrum-machine"]=window["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Tamborine2.76bb0918.wav"},function(e,t,a){e.exports=a.p+"static/media/almost-the-doors.37442c17.wav"},function(e,t,a){e.exports=a.p+"static/media/christmas_rhodes.0924284d.wav"},function(e,t,a){e.exports=a.p+"static/media/Drop Effect 3.ba2e05f4.wav"},function(e,t,a){e.exports=a.p+"static/media/epiano-two-chords.f139f2ea.wav"},function(e,t,a){e.exports=a.p+"static/media/Flexi up 1.520de029.wav"},function(e,t,a){e.exports=a.p+"static/media/GunCock01.cba1eb4d.wav"},function(e,t,a){e.exports=a.p+"static/media/RAIN.fabf7d01.wav"},function(e,t,a){e.exports=a.p+"static/media/Startup Effect.301d901e.wav"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),o=a.n(s),c=(a(23),a(2)),r=a(3),l=a(5),u=a(4),d=a(1),p=a(6),h=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("button",{className:"drum-pad",onClick:this.props.sound,id:this.props.value},this.props.value)}}]),t}(i.a.Component),m=a(9),b=a.n(m),w=a(10),f=a.n(w),y=a(11),v=a.n(y),E=a(12),S=a.n(E),k=a(13),O=a.n(k),j=a(14),A=a.n(j),x=a(15),C=a.n(x),g=a(16),D=a.n(g),T=a(17),K=a.n(T),W=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={title:"",isOn:!0},a.playSound=a.playSound.bind(Object(d.a)(a)),a.handleKeys=a.handleKeys.bind(Object(d.a)(a)),a.sound=a.sound.bind(Object(d.a)(a)),a.power=a.power.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"power",value:function(){this.state.isOn?this.setState({isOn:!1,title:""}):this.setState({isOn:!0})}},{key:"sound",value:function(e){switch(e){case"q":case"Q":new Audio(b.a).play(),this.setState({title:"Tamborine"});break;case"w":case"W":new Audio(f.a).play(),this.setState({title:"Almost The Doors"});break;case"e":case"E":new Audio(v.a).play(),this.setState({title:"Christmas Rhodes"});break;case"a":case"A":new Audio(S.a).play(),this.setState({title:"Drop Effect"});break;case"s":case"S":new Audio(O.a).play(),this.setState({title:"Epiano Two chords"});break;case"d":case"D":new Audio(A.a).play(),this.setState({title:"Flexi Up"});break;case"z":case"Z":new Audio(C.a).play(),this.setState({title:"Gun Cock"});break;case"x":case"X":new Audio(D.a).play(),this.setState({title:"Rain"});break;case"c":case"C":new Audio(K.a).play(),this.setState({title:"Startup Effect"})}}},{key:"playSound",value:function(e){this.state.isOn&&this.sound(e.currentTarget.id)}},{key:"handleKeys",value:function(e){this.state.isOn&&this.sound(e.key)}},{key:"render",value:function(){var e=this.state.title,t=this.state.isOn;return onkeypress=this.handleKeys,i.a.createElement("div",{id:"drum-machine"},i.a.createElement("div",{id:"display-container"},i.a.createElement("h2",{id:"display"},e?this.state.title:i.a.createElement("br",null))),i.a.createElement(h,{value:"Q",sound:this.playSound}),i.a.createElement(h,{value:"W",sound:this.playSound}),i.a.createElement(h,{value:"E",sound:this.playSound}),i.a.createElement("br",null),i.a.createElement(h,{value:"A",sound:this.playSound}),i.a.createElement(h,{value:"S",sound:this.playSound}),i.a.createElement(h,{value:"D",sound:this.playSound}),i.a.createElement("br",null),i.a.createElement(h,{value:"Z",sound:this.playSound}),i.a.createElement(h,{value:"X",sound:this.playSound}),i.a.createElement(h,{value:"C",sound:this.playSound}),i.a.createElement("h3",null,t?"Power On":"Power Off"),i.a.createElement("div",{id:"toggleButton",onClick:this.power,style:t?{backgroundColor:"red"}:{backgroundColor:"white"}}))}}]),t}(i.a.Component));var B=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.15270cd3.chunk.js.map