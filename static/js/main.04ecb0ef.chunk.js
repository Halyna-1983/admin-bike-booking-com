(this["webpackJsonpadmin-bike-booking-com"]=this["webpackJsonpadmin-bike-booking-com"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(10),r=n.n(i),c=(n(16),n(11)),s=n(4),l=n(5),d=n(7),o=n(6),h=(n(17),n(0)),u=function(e){var t=e.children;return Object(h.jsx)("div",{className:"Container",children:t})},p=function(e){var t=e.children;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(u,{children:t})})},b=(n(19),function(e){var t=e.title;return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"Header-title",children:t})})}),m=(n(20),function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:"Section",children:[Object(h.jsx)("h2",{children:t}),n]})}),j=n(9),O=n(2),x=n.n(O),I=(n(29),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={name:"",type:""},e.nameInputId=x.a.generate(),e.typeInputId=x.a.generate(),e.colorInputId=x.a.generate(),e.wheelSizeInputId=x.a.generate(),e.priceInputId=x.a.generate(),e.idInputId=x.a.generate(),e.descriptionInputId=x.a.generate(),e.handleChange=function(t){var n,a=t.currentTarget,i=a.name,r=a.value;e.setState((n={},Object(j.a)(n,i,r),Object(j.a)(n,"id",x.a.generate()),n))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"input-form",onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{className:"input",htmlFor:this.nameInputId,children:Object(h.jsx)("input",{type:"text",name:"name",className:"label",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId,placeholder:"Name"})}),Object(h.jsx)("label",{className:"input",htmlFor:this.typeInputId,children:Object(h.jsx)("input",{type:"text",name:"type",className:"label",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.type,onChange:this.handleChange,id:this.typeInputId,placeholder:"Type"})}),Object(h.jsx)("label",{className:"input",htmlFor:this.colorInputId,children:Object(h.jsx)("input",{type:"text",name:"color",className:"label",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.color,onChange:this.handleChange,id:this.colorInputId,placeholder:"Color"})}),Object(h.jsx)("label",{className:"input",htmlFor:this.wheelSizeInputId,children:Object(h.jsx)("input",{type:"num",name:"wheelSize",className:"label",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.wheelSize,onChange:this.handleChange,id:this.wheelSizeInputId,placeholder:"WheelSize"})}),Object(h.jsx)("label",{className:"input",htmlFor:this.priceInputId,children:Object(h.jsx)("input",{type:"num",name:"price",className:"label",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.price,onChange:this.handleChange,id:this.priceInputId,placeholder:"Price"})}),Object(h.jsx)("label",{className:"input",htmlFor:this.idInputId,children:Object(h.jsx)("input",{type:"num",name:"id",className:"label",required:!0,value:this.state.id,onChange:this.handleChange,id:this.idInputId,placeholder:"ID"})}),Object(h.jsx)("label",{className:"input-description",htmlFor:this.descriptionInputId,children:Object(h.jsx)("input",{type:"text",name:"description",className:"label-description",required:!0,value:this.state.description,onChange:this.handleChange,id:this.descriptionInputId,placeholder:"Description"})}),Object(h.jsx)("button",{type:"submit",className:"button",children:"SAVE"}),Object(h.jsx)("button",{type:"submit",className:"button",children:"CLEAR"})]})}}]),n}(a.Component)),f=(n(30),function(e){var t=e.bikes,n=e.deleteBike;return Object(h.jsx)("ul",{className:"bike-list",children:t.map((function(e){return Object(h.jsxs)("li",{className:"bike-list-item",children:[Object(h.jsxs)("p",{className:"bike",children:[" ",e.name]}),Object(h.jsxs)("p",{className:"bike",children:[" ",e.type]}),Object(h.jsxs)("p",{className:"bike",children:[" ",e.color]}),Object(h.jsxs)("p",{className:"bike",children:[" ",e.wheelSize]}),Object(h.jsxs)("p",{className:"bike",children:[" ",e.price]}),Object(h.jsxs)("p",{className:"bike",children:[" ",e.id]}),Object(h.jsx)("button",{type:"button",className:"delete-btn",onClick:function(){return n(e.id)},children:"Delete"})]})}))})}),g=(n(31),function(e){var t=e.title;return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"Footer-title",children:t})})}),y=(n(32),function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={bikes:[{id:"id-1",name:"Jack",type:"road",color:"grey",wheelSize:"26",price:"300"},{id:"id-2",name:"Nill",type:"mountain",color:"blue",wheelSize:"24",price:"400"},{id:"id-3",name:"Bob",type:"hybrid",color:"dark-red",wheelSize:"26",price:"500"},{id:"id-4",name:"Herman",type:"electric",color:"green",wheelSize:"28",price:"600"}],name:"",type:"",color:"",wheelSize:"",price:"",id:""},e.formSubmitHandler=function(t){var n=t.name,a=t.type,i=t.color,r=t.wheelSize,s=t.price;t.id;if(e.state.bikes.some((function(e){return e.name===n})))alert("".concat(n," is already in contacts."));else{var l={id:x.a.generate(),name:n,type:a,color:i,wheelSize:r,price:s};e.setState((function(e){return{bikes:[l].concat(Object(c.a)(e.bikes))}}))}},e.deleteBike=function(t){e.setState((function(e){return{bikes:e.bikes.filter((function(e){return t!==e.id}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.name.toLowerCase(),t=this.state.bikes.filter((function(t){return t.name.toLowerCase().includes(e)}));return Object(h.jsxs)(p,{children:[Object(h.jsx)(b,{title:"ADMIN.BIKE-BOOKING.COM"}),Object(h.jsx)(m,{children:Object(h.jsx)(f,{bikes:t,deleteBike:this.deleteBike})}),Object(h.jsx)(m,{children:Object(h.jsx)(I,{onSubmit:this.formSubmitHandler})}),Object(h.jsx)(g,{title:"Developer: Halyna Kolpakova"})]})}}]),n}(a.Component));r.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.04ecb0ef.chunk.js.map