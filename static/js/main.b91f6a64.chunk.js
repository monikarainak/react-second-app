(this["webpackJsonpcrown-clothing"]=this["webpackJsonpcrown-clothing"]||[]).push([[0],{68:function(e,t,n){},70:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),c=n(43),r=n.n(c),s=n(30),o=n(18),l=(n(68),n(0)),d=n.n(l),u=n(14),p=n(2),m=n(1),h=n(3),j=n(11),b=n(12),g=(n(70),n(17)),O=n(39);n(99),n(72);O.a.initializeApp({apiKey:"AIzaSyAHnfxFFitysoKykeCjxKI1vOSqQ-WPTs0",authDomain:"crwn-db-35938.firebaseapp.com",projectId:"crwn-db-35938",storageBucket:"crwn-db-35938-appspot.com",messagingSenderId:"760688308733",appId:"1:760688308733:web:2de48065b6dfbbae716994"});var f=function(){var e=Object(p.a)(d.a.mark((function e(t,n){var a,i,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=v.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return i=t.displayName,c=t.email,r=new Date,e.prev=9,e.next=12,a.set(Object(u.a)({displayName:i,email:c,createdAt:r},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}(),x=O.a.auth(),v=O.a.firestore(),w=new O.a.auth.GoogleAuthProvider;w.setCustomParameters({prompt:"select_account"});var y=function(){return x.signInWithPopup(w)},k=(O.a,n(34)),C=n(24),N=(n(74),Object(C.a)([function(e){return e.shop}],(function(e){return e.collection}))),U=Object(C.a)([N],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),I=(n(75),n(76),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}),T=function(e){return{type:I.ADD_ITEM,payload:e}},z=(n(77),n(5)),E=["children","isGoogleSignIn","inverted"],_=function(e){var t=e.children,n=e.isGoogleSignIn,a=e.inverted,i=Object(k.a)(e,E);return Object(z.jsx)("button",Object(u.a)(Object(u.a)({className:"".concat(a?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},i),{},{children:t}))},A=Object(o.b)(null,(function(e){return{addItem:function(t){return e(T(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,i=t.price,c=t.imageUrl;return Object(z.jsxs)("div",{className:"collection-item",children:[Object(z.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),Object(z.jsxs)("div",{className:"collection-footer",children:[Object(z.jsx)("span",{className:"collection-name",children:a}),Object(z.jsx)("span",{className:"collection-price",children:i})]}),Object(z.jsx)(_,{onClick:function(){return n(t)},inverted:!0,children:"Add to cart"})]})}));var P=function(e){var t=e.title,n=e.items;return Object(z.jsxs)("div",{className:"collection-preview",children:[Object(z.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(z.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(z.jsx)(A,{item:e},e.id)}))})]})},S=["id"],R=Object(C.b)({collections:U}),D=Object(o.b)(R)((function(e){var t=e.collections;return Object(z.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(k.a)(e,S);return Object(z.jsx)(P,Object(u.a)({},n),t)}))})})),M=(n(79),Object(o.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(C.a)([N],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return Object(z.jsxs)("div",{className:"collection-page",children:[Object(z.jsx)("h2",{className:"title",children:n}),Object(z.jsx)("div",{className:"items",children:a.map((function(e){return Object(z.jsx)(A,{item:e},e.id)}))})]})}))),V=function(e){var t=e.match;return Object(z.jsxs)("div",{className:"shop-page",children:[Object(z.jsx)(g.b,{exact:!0,path:"".concat(t.path),component:D}),Object(z.jsx)(g.b,{path:"".concat(t.path,"/:collectionId"),component:M})]})},G=(n(83),Object(o.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:I.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(T(t))},removeItem:function(t){return e(function(e){return{type:I.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,i=e.removeItem,c=t.name,r=t.imageUrl,s=t.price,o=t.quantity;return Object(z.jsxs)("div",{className:"checkout-item",children:[Object(z.jsx)("div",{className:"image-container",children:Object(z.jsx)("img",{src:r,alt:"item",className:"checkout-image"})}),Object(z.jsx)("span",{className:"checkout-name",children:c}),Object(z.jsxs)("span",{className:"checkout-quantity",children:[Object(z.jsx)("div",{className:"arrow",onClick:function(){return i(t)},children:"\u276e"}),Object(z.jsx)("span",{className:"value",children:o}),Object(z.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276f"})]}),Object(z.jsx)("span",{className:"checkout-price",children:s}),Object(z.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:" \u2715"})]})}))),H=n(55),B=n.n(H),q=function(e){var t=e.price,n=100*t;return Object(z.jsx)(B.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://i.pinimg.com/originals/de/7c/e4/de7ce48f483468ed4cc8a5b92742cad5.jpg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_51K7CHHSJflnhiVp3NpQUEZar50DN7erdnj6X0hecldkFvVGfJ63CfCDWGZfgCedxfaxHO1mKZwB06fZYJ8J55scR008wq7uORU"})},F=Object(C.a)([function(e){return e.cart}],(function(e){return e.cartItems})),L=Object(C.a)([F],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),K=Object(C.a)([F],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),J=(n(84),Object(C.b)({cartItems:F,total:K})),W=Object(o.b)(J)((function(e){var t=e.cartItems,n=e.total;return Object(z.jsxs)("div",{className:"checkout-page",children:[Object(z.jsxs)("div",{className:"checkout-header",children:[Object(z.jsx)("div",{className:"header-block",children:Object(z.jsx)("span",{children:"Product"})}),Object(z.jsx)("div",{className:"header-block",children:Object(z.jsx)("span",{children:"Description"})}),Object(z.jsx)("div",{className:"header-block",children:Object(z.jsx)("span",{children:"Quantity"})}),Object(z.jsx)("div",{className:"header-block",children:Object(z.jsx)("span",{children:"Price"})}),Object(z.jsx)("div",{className:"header-block",children:Object(z.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(z.jsx)(G,{cartItem:e},e.id)})),Object(z.jsxs)("div",{className:"total",children:["TOTAL: $",n]}),Object(z.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(z.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"]}),Object(z.jsx)(q,{price:n})]})})),Y=(n(85),n(86),Object(C.a)([function(e){return e.directory}],(function(e){return e.sections})));n(87);var Q=Object(g.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,i=e.history,c=e.linkUrl,r=e.match;return Object(z.jsxs)("div",{className:"".concat(a," menu-item"),onClick:function(){return i.push("".concat(r.url).concat(c))},children:[Object(z.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(z.jsxs)("div",{className:"content",children:[Object(z.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(z.jsx)("span",{className:"subtitle",children:"ORDER NOW"})]})]})})),Z=["id"],$=Object(C.b)({sections:Y}),X=Object(o.b)($)((function(e){var t=e.sections;return Object(z.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(k.a)(e,Z);return Object(z.jsx)(Q,Object(u.a)({},n),t)}))})}));var ee=function(){return Object(z.jsx)("div",{className:"homepage",children:Object(z.jsx)(X,{})})};n(88);var te=function(){return Object(z.jsx)("div",{children:Object(z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:Object(z.jsxs)("g",{children:[Object(z.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(z.jsx)("path",{d:"M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z"})]})})})},ne=(n(89),Object(o.b)((function(e){return{itemCount:L(e)}}),(function(e){return{toggleCartHidden:function(){return e({type:I.TOGGLE_CART_HIDDEN})}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return Object(z.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(z.jsx)(te,{className:"shopping-icon"}),Object(z.jsx)("span",{className:"item-count",children:n})]})}))),ae=(n(90),n(91),function(e){var t=e.item,n=t.imageUrl,a=t.price,i=t.name,c=t.quantity;return Object(z.jsxs)("div",{className:"cart-item",children:[Object(z.jsx)("img",{src:n,alt:"item"}),Object(z.jsxs)("div",{className:"item-details",children:[Object(z.jsx)("span",{className:"cart-name",children:i}),Object(z.jsxs)("span",{className:"cart-price",children:[c," x $",a]})]})]})}),ie=Object(g.g)(Object(o.b)((function(e){return{cartItems:F(e)}}))((function(e){var t=e.cartItems,n=e.history;return Object(z.jsxs)("div",{className:"cart-dropdown",children:[Object(z.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(z.jsx)(ae,{item:e},e.id)})):Object(z.jsx)("span",{className:"empty-message",children:" Your cart is Empty"})}),Object(z.jsx)(_,{id:"cart-dropdown-button",onClick:function(){return n.push("/checkout")},children:"GO TO CHECKOUT"})]})}))),ce=Object(o.b)((function(e){return{currentUser:e.user.currentUser,hidden:e.cart.hidden}}))((function(e){var t=e.currentUser,n=e.hidden;return Object(z.jsxs)("div",{className:"header",children:[Object(z.jsx)(s.b,{className:"logo-container",to:"/",children:Object(z.jsx)("img",{src:"https://i.pinimg.com/originals/de/7c/e4/de7ce48f483468ed4cc8a5b92742cad5.jpg",className:"logo",style:{width:"200px",height:"107px"}})}),Object(z.jsxs)("div",{className:"options",children:[Object(z.jsx)(s.b,{className:"option",to:"/shop",children:"SHOP"}),Object(z.jsx)(s.b,{className:"option",to:"/contact",children:"CONTACT"}),t?Object(z.jsx)("div",{className:"option",onClick:function(){return x.signOut()},children:" SIGN OUT"}):Object(z.jsx)(s.b,{className:"option",to:"/signin",children:"SIGN IN"}),Object(z.jsx)(ne,{})]}),n?null:Object(z.jsx)(ie,{})]})})),re=(n(92),n(4)),se=(n(93),["handleChange","label"]),oe=function(e){var t=e.handleChange,n=e.label,a=Object(k.a)(e,se);return Object(z.jsxs)("div",{className:"group",children:[Object(z.jsx)("input",Object(u.a)({className:"form-input",onChange:t},a)),n?Object(z.jsx)("label",{className:"".concat(a.value.length?"shrink":" ","form-input-label"),children:n}):null]})},le=(n(94),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,i,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,i=n.email,c=n.password,e.prev=2,e.next=5,x.signInWithEmailAndPassword(i,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(re.a)({},i,n))},a.state={email:"",password:""},a}return Object(h.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{className:"sign-in",children:[Object(z.jsx)("h1",{children:"I already have an account"}),Object(z.jsx)("span",{children:"Sign in with your email and password"}),Object(z.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(z.jsx)(oe,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"Email",required:!0}),Object(z.jsx)(oe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"Password",required:!0}),Object(z.jsxs)("div",{className:"buttons",children:[Object(z.jsx)(_,{id:"custombutton-signin",type:"submit",children:"Sign in"}),Object(z.jsx)(_,{onClick:y,isGoogleSignIn:!0,children:"Sign in with Google"})]})]})]})}}]),n}(i.a.Component)),de=le,ue=(n(95),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(p.a)(d.a.mark((function t(n){var a,i,c,r,s,o,l;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,i=a.displayName,c=a.email,r=a.password,s=a.confirmPassword,r!==s&&alert("password don't match"),t.prev=3,t.next=6,x.createUserWithEmailAndPassword(c,r);case 6:return o=t.sent,l=o.user,t.next=10,f(l,{displayName:i});case 10:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(3),console.error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,i=n.value;e.setState(Object(re.a)({},a,i))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,i=e.confirmPassword;return Object(z.jsxs)("div",{className:"sign-up",children:[Object(z.jsx)("h2",{className:"title",children:"I do not have account"}),Object(z.jsx)("span",{children:"Sign in with your email and password"}),Object(z.jsxs)("form",{className:"sign-up-form",onSubmit:this.handleSubmit,children:[Object(z.jsx)(oe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),Object(z.jsx)(oe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),Object(z.jsx)(oe,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),Object(z.jsx)(oe,{type:"password",name:"confirmPassword",value:i,onChange:this.handleChange,label:"Confirm Password",required:!0}),Object(z.jsx)(_,{id:"custombutton-signup",type:"submit",children:"SIGN UP"})]})]})}}]),n}(i.a.Component)),pe=ue,me=function(){return Object(z.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(z.jsx)(de,{}),Object(z.jsx)(pe,{})]})},he=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).unsubscribeFromAuth=null,e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=x.onAuthStateChanged(function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,f(n);case 3:t.sent.onSnapshot((function(t){e(Object(u.a)({id:t.id},t.data()))}));case 5:e(n);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return Object(z.jsx)("div",{children:Object(z.jsxs)(s.a,{children:[Object(z.jsx)(ce,{}),Object(z.jsxs)(g.d,{children:[Object(z.jsx)(g.b,{exact:!0,path:"/",component:ee}),Object(z.jsx)(g.b,{path:"/shop",component:V}),Object(z.jsx)(g.b,{path:"/checkout",component:W}),Object(z.jsx)(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?Object(z.jsx)(g.a,{to:"/"}):Object(z.jsx)(me,{})}})]})]})})}}]),n}(i.a.Component),je=Object(o.b)((function(e){return{currentUser:e.user.currentUser}}),(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:"SET_CURRENT_USER",payload:e}}(t))}}}))(he),be=n(56),ge=n(31),Oe=n(48),fe=n(57),xe=n.n(fe),ve=n(58),we=n.n(ve),ye="SET_CURRENT_USER",ke={currentUser:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;return t.type===ye?Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload}):e},Ne=n(22),Ue=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Ne.a)(e),[Object(u.a)(Object(u.a)({},t),{},{quantity:1})])},Ie=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}))},Te={hidden:!0,cartItems:[]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.TOGGLE_CART_HIDDEN:return Object(u.a)(Object(u.a)({},e),{},{hidden:!e.hidden});case I.ADD_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:Ue(e.cartItems,t.payload)});case I.REMOVE_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:Ie(e.cartItems,t.payload)});case I.CLEAR_ITEM_FROM_CART:return Object(u.a)(Object(u.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},Ee={sections:[{title:"Biryani",imageUrl:"https://www.mistay.in/travel-blog/content/images/2020/07/hyderbadi-biriyani-1.jpg",id:1,linkUrl:"shop/biryani"},{title:"Pizza",imageUrl:"https://wallpapersdsc.net/wp-content/uploads/2015/11/Pizza_HD3.jpg",id:2,linkUrl:"shop/pizza"},{title:"Chicken",imageUrl:"https://i.ytimg.com/vi/nK_DkMYYDfU/maxresdefault.jpg",id:3,linkUrl:"shop/chicken"},{title:"Healthy",imageUrl:"https://www.thrivenaija.com/wp-content/uploads/2019/12/eating-healthy-food.jpg",id:4,size:"large",linkUrl:"shop/healthy"},{title:"Thali",imageUrl:"https://s3.scoopwhoop.com/son/thali/gujju.jpg",id:5,size:"large",linkUrl:"shop/thali"}]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Ae={collection:{biryani:{id:1,title:"Biryani",routeName:"biryanis",items:[{id:1,name:"Chicken Hyderabadi Dum Biryani",imageUrl:"https://www.crazymasalafood.com/wp-content/images/Chicken-Dum-Biryani-with-Jeera-Rice.png",price:460},{id:2,name:"Tandoori Chicken Biryani",imageUrl:"https://i.pinimg.com/originals/0f/2b/bd/0f2bbdaf08f853bc8a72206297d2b2de.jpg",price:475},{id:3,name:"Chicken Tikka Biryani",imageUrl:"http://www.bradshawtandoori.com/images/IMG_0397.JPG",price:485},{id:4,name:"Kolkata Chicken Biryani",imageUrl:"https://img.starbiz.com/resize/750x-/2020/02/11/best-chicken-biryani-in-kolkata-487a.jpg",price:760},{id:5,name:"Lucknowi chicken Biryani",imageUrl:"https://www.thillaismasala.com/wp-content/uploads/2020/12/Lucknowi-Chicken-Biryani-768x432.jpg",price:510},{id:6,name:"Afghani Mutton Biryani",imageUrl:"https://hamariweb.com/recipes/images/recipeimages/183.jpg",price:399},{id:7,name:"Veg Dum Biryani",imageUrl:"https://recipebook.io/recipe/wp-content/uploads/2019/11/xhdpi-1.jpg",price:250},{id:8,name:"Special Colaba Chicken Biryani",imageUrl:"https://i.ytimg.com/vi/cHgh6eAOgPY/maxresdefault.jpg",price:349},{id:9,name:"Special Egg Biryani",imageUrl:"https://i.ytimg.com/vi/OTYxcRnv9Qo/maxresdefault.jpg",price:16}]},pizza:{id:2,title:"Pizza",routeName:"pizzas",items:[{id:10,name:"Chicken Cheese Pizza",imageUrl:"https://i.pinimg.com/736x/e9/e5/5a/e9e55ae9da568dd6f5dff89cdd94f1d9.jpg",price:170},{id:11,name:"Chicken Corn Pizza",imageUrl:"https://www.cookawesome.com/wp-content/uploads/2016/02/74-Awesome-Barbecue-Chicken-and-Corn-Pizza-Recipe.jpg",price:210},{id:12,name:"Chicken Tikka Pizza",imageUrl:"https://theovenist.com/wp-content/uploads/2020/06/IMG_20200610_203927-2-scaled.jpg",price:210},{id:13,name:"Paneer Tikka Pizza",imageUrl:"https://mybarindia.com/wp-content/uploads/2019/06/Paneer-Tikka-Pizza.jpg",price:188},{id:14,name:"Simply Veggie Pizza",imageUrl:"https://thebestblogrecipes.com/wp-content/uploads/2017/06/Garden-Veggie-Pizza.jpg",price:160},{id:15,name:"Veg Exotica Pizza",imageUrl:"https://vegplatter.in/files/public/images/partner/menu/4/veg%20deluxe%20pizza.png",price:230},{id:16,name:"Maggi Pizza",imageUrl:"https://foodtasted.org/wp-content/uploads/2019/05/maggie_pizza-recipe.jpg",price:190},{id:17,name:"Margherita Cheese Pizza",imageUrl:"https://www.pngjoy.com/pngm/384/7099757_cheese-pizza-slice-double-cheese-margherita-pizza-hd.png",price:125}]},chicken:{id:3,title:"Chicken",routeName:"chickens",items:[{id:18,name:"Chicken 65",imageUrl:"https://www.foodscorners.com/wp-content/uploads/2017/04/chicken-65.jpg",price:325},{id:19,name:"Tandoori Chicken",imageUrl:"https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken.jpg",price:290},{id:20,name:"Chicken Handi",imageUrl:"https://i.pinimg.com/originals/38/eb/e0/38ebe07d99b675a79df6f37dd3da5a0c.jpg",price:390},{id:21,name:"Butter Chicken",imageUrl:"http://dailynewsgazette.com/wp-content/uploads/2019/01/indian-butter-chicken-recipe-simplyrecipes-com.jpg",price:165},{id:22,name:"Chicken Chilli",imageUrl:"https://hintofhelen.com/wp-content/uploads/2020/03/Chilli-Chicken-Recipe-Hint-of-Helen-30-1.jpg",price:185}]},healthy:{id:4,title:"Healthy",routeName:"healthys",items:[{id:23,name:"Dal Khichdi",imageUrl:"https://www.cookwithmanali.com/wp-content/uploads/2016/04/Moong-Dal-Khichdi.jpg",price:125},{id:24,name:"Fruit Salad",imageUrl:"https://www.chelseasmessyapron.com/wp-content/uploads/2014/04/The-BEST-EVER-Fruit-Salad.jpg",price:100},{id:25,name:"Palak Khichdi",imageUrl:"https://i.pinimg.com/originals/34/b6/85/34b685b7d78a42462b0db7bded7f1a2f.jpg",price:199},{id:26,name:"Pineapple Juice",imageUrl:"https://3.bp.blogspot.com/-T6UUfH6AxMQ/VVL_2it1NGI/AAAAAAAA2DY/uimHcVCSwOU/s1600/pure%2Bpineapple%2Bjuice.jpg",price:120},{id:27,name:"Veg Clear Soup",imageUrl:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Veg_Clear_Soup_Recipe.jpg",price:145},{id:28,name:"Tomato Soup",imageUrl:"https://www.cookingclassy.com/wp-content/uploads/2020/10/tomato-soup-7.jpg",price:135},{id:29,name:"Tomato Uttapam",imageUrl:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Tomato_Uttapam.jpg",price:120}]},thali:{id:5,title:"Thali",routeName:"thalis",items:[{id:30,name:"Veg Regular Thali",imageUrl:"https://www.watscooking.com/images/dish/large/Veg_Thali1.png",price:199},{id:31,name:"Non Veg Regular Thali",imageUrl:"http://www.iagtok.com/wp-content/uploads/2018/01/chicken-thali.jpg",price:320},{id:32,name:"Chicken Thali",imageUrl:"https://imgmedia.lbb.in/media/2019/11/5de0bda5c39984002b723e43_1575009701861.jpg",price:325},{id:33,name:"Gujarati Thali",imageUrl:"https://curlytales.com/wp-content/uploads/2017/07/gujarati-thali.jpg",price:225},{id:34,name:"Rajasthani Thali",imageUrl:"https://www.foodreviewonline.com/new/wp-content/uploads/2019/02/Rajdhani-Mumbai-05-min.jpg",price:240},{id:35,name:"Maharashtrian Thali",imageUrl:"https://vanitascorner.com/wp-content/uploads/2020/03/Maharashtrian-festive-thali.jpg",price:300}]}}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Se={key:"root",storage:we.a,whitelist:["cart"]},Re=Object(ge.b)({user:Ce,cart:ze,directory:_e,shop:Pe}),De=Object(Oe.a)(Se,Re),Me=[xe.a],Ve=Object(ge.c)(De,ge.a.apply(void 0,Me)),Ge=Object(Oe.b)(Ve),He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(z.jsx)(o.a,{store:Ve,children:Object(z.jsx)(s.a,{children:Object(z.jsx)(be.a,{persistor:Ge,children:Object(z.jsx)(je,{})})})}),document.getElementById("root")),He()}},[[98,1,2]]]);
//# sourceMappingURL=main.b91f6a64.chunk.js.map