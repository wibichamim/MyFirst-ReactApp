(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,function(e,n,a){e.exports=a(16)},,,,,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),s=a(5),r=a.n(s),c=(a(13),a(3)),i=a(7),l=a(6),u=(a(14),a(15),function(e){return o.a.createElement("div",{className:"Person"},o.a.createElement("p",{onClick:e.click},"my name is ",e.name," and I'm ",e.age," years old"),o.a.createElement("input",{type:"text",onChange:e.change,value:e.name}))}),m=function(e){var n=Object(t.useState)({persons:[{id:"1",name:"Wibi",age:22},{id:"2",name:"Jaka",age:23}],showPersons:!1}),a=Object(l.a)(n,2),s=a[0],r=a[1];console.log(s);var m=null;return s.showPersons&&(m=o.a.createElement("div",null,s.persons.map((function(e,n){return o.a.createElement(u,{name:e.name,age:e.age,click:function(){return function(e){var n=Object(c.a)(s.persons);n.splice(e,1),r({persons:n,showPersons:!0})}(n)},key:e.id,change:function(n){return function(e,n){var a=s.persons.findIndex((function(e){return e.id===n})),t=Object(i.a)({},s.persons[a]);t.name=e.target.value;var o=Object(c.a)(s.persons);o[a]=t,r({persons:o,showPersons:!0})}(n,e.id)}})})))),s.persons?o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"My First React App"),o.a.createElement("button",{className:"btn btn-switch",onClick:function(){r({persons:[{id:"2",name:"Nana",age:1},{id:"3",name:"Nina",age:2}],showPersons:!0})}},"Switch Name"),o.a.createElement("button",{className:"btn btn-toogle",onClick:function(){var e=s.persons,n=s.showPersons;r({persons:e,showPersons:!n})}},"Toogle Name"),m):o.a.createElement("span",null,"Loading...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.db86f9a4.chunk.js.map