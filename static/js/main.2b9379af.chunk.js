(this["webpackJsonpziggy-visits-all"]=this["webpackJsonpziggy-visits-all"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),s=(n(15),n(5)),l=n(6),c=n(2),u=n(8),m=n(9),g=(n(16),n(7)),d=n.n(g),f=n(1),b=n.n(f),h=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).goToLink=function(){e.link.click()},e.previous=function(){e.state.counter>0&&e.setState((function(e,t){return{counter:e.counter-1}}),e.updateLocalStorageCounter)},e.next=function(){console.log(e.state.counter+1,e.state.websites.length),e.state.counter+1<e.state.websites.length&&e.setState((function(e,t){return{counter:e.counter+1}}),e.updateLocalStorageCounter)},e.updateLocalStorageCounter=function(){window.localStorage.setItem(e.COUNTER,e.state.counter)},e.handleUpload=function(t){var n=new FileReader;n.onload=e.handleFileRead;var a=t.target.files[0];n.readAsText(a)},e.handleFileRead=function(t){var n=JSON.parse(t.target.result);if(!n||!n.websites)return alert("Whoeps, er lijkt iets mis met de json file."),!1;window.localStorage.setItem(e.FILE_KEY,JSON.stringify(n));var a=n.websites;e.setState({websites:a})},e.state={counter:0,websites:[]},e.goToLink=e.goToLink.bind(Object(c.a)(e)),b.a.config({left:function(){e.previous()},right:function(){e.next()},up:function(){e.goToLink()}}),e.FILE_KEY="file.json",e.COUNTER="counter",e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem(this.FILE_KEY));if(!e||!e.websites)return!1;this.setState({websites:e.websites});var t=localStorage.getItem("counter");if(!t||!Number(t))return!1;this.setState({counter:Number(localStorage.getItem(this.COUNTER))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.websites,a=t.counter,o=n[a];return i.a.createElement("div",{className:"App"},0===n.length?i.a.createElement("main",null,i.a.createElement("h1",null,"Stay ahead of the competition!"),i.a.createElement("img",{src:d.a,width:"648",height:"455",alt:""}),i.a.createElement("label",{className:"btn"},"Upload je bestand",i.a.createElement("input",{id:"input",name:"input",type:"file",onChange:this.handleUpload}))):i.a.createElement("main",null,i.a.createElement("iframe",{title:"website-frame",src:o,id:"websiteFrame"}),i.a.createElement("div",{className:"actions"},i.a.createElement("button",Object.assign({},b.a.events,{autoFocus:!0,className:"btn",disabled:0===a,onClick:this.previous}),"Vorige"),i.a.createElement("a",Object.assign({},b.a.events,{autoFocus:!0,id:"link",onClick:this.goToLink.bind(this),href:o,ref:function(t){e.link=t},target:"_blank",rel:"noopener noreferrer"}),i.a.createElement("h3",null,"Bezoek ",o)),i.a.createElement("button",Object.assign({},b.a.events,{autoFocus:!0,className:"btn",disabled:a+1===n.length,onClick:this.next}),"Volgende"))))}}]),n}(i.a.Component);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n.p+"static/media/rampageslayer2000.c07d5e69.jpeg"}},[[10,1,2]]]);
//# sourceMappingURL=main.2b9379af.chunk.js.map