(this["webpackJsonpbook-it"]=this["webpackJsonpbook-it"]||[]).push([[0],{43:function(e,t,n){e.exports=n(80)},48:function(e,t,n){},69:function(e,t,n){},75:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),i=(n(48),n(40)),l=n(3),s=n(16),u=n(17),h=n(20),m=n(18),d=n(15),f=n.n(d);n(66).config();var v=function(e,t){return f.a.get("https://www.googleapis.com/books/v1/volumes?q=$"+e+"&"+t)},g=function(){return f.a.get("/api/books")},k=function(e){return f.a.delete("/api/books/"+e)},p=function(e){return f.a.post("/api/books",e)};n(69);var E=function(e){return o.a.createElement("div",{className:"card",key:e.id},o.a.createElement("h4",null,e.title),o.a.createElement("p",null,o.a.createElement("strong",null,"By ",e.author)),o.a.createElement("img",{alt:e.title,className:"book-image",src:e.image}),o.a.createElement("p",null,e.description),o.a.createElement("a",{href:e.link}," Buy Book "))},b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={savedBooks:[]},e.deleteBook=function(t){k(t).then(console.log("book deleted")).catch((function(e){return console.log(e)})),g().then((function(t){e.setState({savedBooks:t.data}),console.log(t),console.log(e.state.savedBooks)})).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){e.setState({savedBooks:t.data}),console.log(t),console.log(e.state.savedBooks)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"hero"},o.a.createElement("h1",null,"All Books From Mongo DB")),o.a.createElement("div",{className:"cardDeck"},this.state.savedBooks.map((function(t){return o.a.createElement("div",{key:t._id},o.a.createElement(E,{id:t._id,title:t.title,author:t.author,description:t.description,image:t.image,link:t.link}),o.a.createElement("button",{onClick:function(){return e.deleteBook(t._id)}},"Remove"))})))))}}]),n}(a.Component),w=n(37);var B=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},"Search:"),o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a Gif",id:"search"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))},y=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={searchResults:[],search:""},e.searchForBooks=function(t){v(t).then((function(t){e.setState({searchResults:t.data.items}),console.log(t),console.log(e.state.searchResults)})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(w.a)({},n,a))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchForBooks(e.state.search)},e.saveThisBook=function(){var t={title:e.title,author:e.authors,description:e.description,image:e.image,link:e.link};p(t).then(console.log(t)).catch((function(e){return console.log(e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.searchForBooks("zebras")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(B,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),this.state.searchResults.map((function(t){return o.a.createElement("div",{key:t.id},o.a.createElement(E,{id:t.id,title:t.volumeInfo.title,author:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,link:t.saleInfo.buyLink}),o.a.createElement("button",{onClick:function(){return e.saveThisBook()}},"Save Book"))})))}}]),n}(a.Component),S=n(82),N=n(83);var j=function(){return o.a.createElement(S.a,{bg:"dark",variant:"dark"},o.a.createElement(S.a.Brand,{href:"/"},"Book IT"),o.a.createElement(N.a,{className:"mr-auto"},o.a.createElement(N.a.Link,{href:"/"},"Home/Search"),o.a.createElement(N.a.Link,{href:"/saved"},"Saved")))};n(75);var C=function(){return o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(j,null),o.a.createElement(l.c,null,o.a.createElement(l.a,{exact:!0,path:["/","/search"]},o.a.createElement(y,null)),o.a.createElement(l.a,{exact:!0,path:"/saved"},o.a.createElement(b,null)))))},I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(79);c.a.render(o.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.ce50134c.chunk.js.map