(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{318:function(e,a,t){"use strict";var n=t(50),l=t(10),o=t(3),r=t.n(o),s=t(1),c=t.n(s),_=(t(26),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),m=function(e){var a,t=e.tag,o=e.className,s=e.type,m=Object(l.a)(e,["tag","className","type"]),p=r()(Object(n.a)({},s,!!s),o);return a=t||(!t&&_[s]?_[s]:"p"),c.a.createElement(a,Object.assign({},m,{className:p}))};m.defaultProps={type:"p"},a.a=m},319:function(e,a,t){"use strict";var n=t(10),l=t(1),o=t.n(l),r=(t(26),t(36)),s=t(323),c=t(324),_=t(318),m=r.a.create("page"),p=function(e){var a=e.title,t=e.breadcrumbs,l=e.tag,r=e.className,p=e.children,i=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),q=m.b("px-3",r);return o.a.createElement(l,Object.assign({className:q},i),o.a.createElement("div",{className:m.e("header")},a&&"string"===typeof a?o.a.createElement(_.a,{type:"h1",className:m.e("title")},a):a,t&&o.a.createElement(s.a,{className:m.e("breadcrumb")},o.a.createElement(c.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,n=e.active;return o.a.createElement(c.a,{key:a,active:n},t)}))),p)};p.defaultProps={tag:"div",title:""},a.a=p},336:function(e,a,t){"use strict";function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,l=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done)&&(t.push(r.value),!a||t.length!==a);n=!0);}catch(c){l=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(l)throw o}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return n})},381:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(l.apply(this,n));else if("object"===o)for(var r in n)t.call(n,r)&&n[r]&&e.push(this&&this[r]||r)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(a,[]))||(e.exports=n)}()},388:function(e,a,t){},910:function(e,a,t){"use strict";t.r(a);var n=t(50),l=t(38),o=t(336),r=t(319),s=t(1),c=t.n(s),_=t(363),m=t.n(_),p=t(29);var i=function(e,a){var t=c.a.useState(e),r=Object(o.a)(t,2),s=r[0],_=r[1],i=c.a.useState({}),q=Object(o.a)(i,2),g=q[0],u=q[1],d=c.a.useState(!1),h=Object(o.a)(d,2),E=h[0],b=h[1],w=(p.Session.get(),p.Session.get().payload),v=c.a.useState(!1),y=Object(o.a)(v,2),N=y[0],O=y[1];c.a.useEffect(function(){if(console.log("useEffect Called!"),E){var e=0===Object.keys(g).length;if(console.log("errors",e),e){var a;console.log("authenticated!",s.location);var t=(a={location:w.branchName,hostName:w.username,cash_q1:s.cash_q1,cash_q2:s.cash_q2,cash_q3:s.cash_q3,cash_q4:s.cash_q4,remittance_q1:s.remittance_q1,remittance_q2:s.remittance_q2,clearing_q1:s.clearing_q1},Object(n.a)(a,"clearing_q1",s.clearing_q2),Object(n.a)(a,"clearing_q1",s.clearing_q3),Object(n.a)(a,"clearing_q1",s.clearing_q4),Object(n.a)(a,"clearing_q1",s.clearing_q5),Object(n.a)(a,"miscellaneous_q1",s.miscellaneous_q1),Object(n.a)(a,"miscellaneous_q2",s.miscellaneous_q2),Object(n.a)(a,"miscellaneous_q3",s.miscellaneous_q3),Object(n.a)(a,"miscellaneous_q4",s.miscellaneous_q4),Object(n.a)(a,"miscellaneous_q5",s.miscellaneous_q5),Object(n.a)(a,"miscellaneous_q6",s.miscellaneous_q6),Object(n.a)(a,"miscellaneous_q7",s.miscellaneous_q7),Object(n.a)(a,"miscellaneous_q8",s.miscellaneous_q8),Object(n.a)(a,"deposit_q1",s.deposit_q1),Object(n.a)(a,"deposit_q2",s.deposit_q2),Object(n.a)(a,"deposit_q3",s.deposit_q3),Object(n.a)(a,"deposit_q4",s.deposit_q4),Object(n.a)(a,"gold_loan_processing_new_q1",s.gold_loan_processing_new_q1),Object(n.a)(a,"gold_loan_processing_new_q2",s.gold_loan_processing_new_q2),Object(n.a)(a,"gold_loan_processing_new_q3",s.gold_loan_processing_new_q3),Object(n.a)(a,"gold_loan_processing_new_q4",s.gold_loan_processing_new_q4),Object(n.a)(a,"gold_loan_processing_new_q5",s.gold_loan_processing_new_q5),Object(n.a)(a,"gold_loan_processing_new_q6",s.gold_loan_processing_new_q6),Object(n.a)(a,"passbook_new_q1",s.passbook_new_q1),Object(n.a)(a,"passbook_new_q2",s.passbook_new_q2),Object(n.a)(a,"passbook_new_q3",s.passbook_new_q3),Object(n.a)(a,"passbook_new_q4",s.passbook_new_q4),Object(n.a)(a,"passbook_new_q5",s.passbook_new_q5),Object(n.a)(a,"passbook_new_q6",s.passbook_new_q6),Object(n.a)(a,"mortgage_new_q1",s.mortgage_new_q1),Object(n.a)(a,"mortgage_new_q2",s.mortgage_new_q2),Object(n.a)(a,"mortgage_new_q3",s.mortgage_new_q3),Object(n.a)(a,"mortgage_new_q4",s.mortgage_new_q4),Object(n.a)(a,"mortgage_new_q5",s.mortgage_new_q5),Object(n.a)(a,"mortgage_new_q6",s.mortgage_new_q6),Object(n.a)(a,"personal_new_q1",s.personal_new_q1),Object(n.a)(a,"personal_new_q2",s.personal_new_q2),Object(n.a)(a,"personal_new_q3",s.personal_new_q3),Object(n.a)(a,"personal_new_q4",s.personal_new_q4),Object(n.a)(a,"personal_new_q5",s.personal_new_q5),Object(n.a)(a,"personal_new_q6",s.personal_new_q6),Object(n.a)(a,"loan_new_q1",s.loan_new_q1),Object(n.a)(a,"loan_new_q2",s.loan_new_q2),Object(n.a)(a,"loan_new_q3",s.loan_new_q3),Object(n.a)(a,"loan_new_q4",s.loan_new_q4),Object(n.a)(a,"loan_new_q5",s.loan_new_q5),Object(n.a)(a,"loan_new_q6",s.loan_new_q6),Object(n.a)(a,"gold_loan_processing_repeat_q1",s.gold_loan_processing_repeat_q1),Object(n.a)(a,"gold_loan_processing_repeat_q2",s.gold_loan_processing_repeat_q2),Object(n.a)(a,"gold_loan_processing_repeat_q3",s.gold_loan_processing_repeat_q3),Object(n.a)(a,"gold_loan_processing_repeat_q4",s.gold_loan_processing_repeat_q4),Object(n.a)(a,"gold_loan_processing_repeat_q5",s.gold_loan_processing_repeat_q5),Object(n.a)(a,"gold_loan_processing_repeat_q6",s.gold_loan_processing_repeat_q6),Object(n.a)(a,"passbook_repeat_q1",s.passbook_repeat_q1),Object(n.a)(a,"passbook_repeat_q2",s.passbook_repeat_q2),Object(n.a)(a,"passbook_repeat_q3",s.passbook_repeat_q3),Object(n.a)(a,"passbook_repeat_q4",s.passbook_repeat_q4),Object(n.a)(a,"passbook_repeat_q5",s.passbook_repeat_q5),Object(n.a)(a,"passbook_repeat_q6",s.passbook_repeat_q6),Object(n.a)(a,"mortgage_repeat_q1",s.mortgage_repeat_q1),Object(n.a)(a,"mortgage_repeat_q2",s.mortgage_repeat_q2),Object(n.a)(a,"mortgage_repeat_q3",s.mortgage_repeat_q3),Object(n.a)(a,"mortgage_repeat_q4",s.mortgage_repeat_q4),Object(n.a)(a,"mortgage_repeat_q5",s.mortgage_repeat_q5),Object(n.a)(a,"mortgage_repeat_q6",s.mortgage_repeat_q6),Object(n.a)(a,"personal_repeat_q1",s.personal_repeat_q1),Object(n.a)(a,"personal_repeat_q2",s.personal_repeat_q2),Object(n.a)(a,"personal_repeat_q3",s.personal_repeat_q3),Object(n.a)(a,"personal_repeat_q4",s.personal_repeat_q4),Object(n.a)(a,"personal_repeat_q5",s.personal_repeat_q5),Object(n.a)(a,"personal_repeat_q6",s.personal_repeat_q6),Object(n.a)(a,"loan_repeat_q1",s.loan_repeat_q1),Object(n.a)(a,"loan_repeat_q2",s.loan_repeat_q2),Object(n.a)(a,"loan_repeat_q3",s.loan_repeat_q3),Object(n.a)(a,"loan_repeat_q4",s.loan_repeat_q4),Object(n.a)(a,"loan_repeat_q5",s.loan_repeat_q5),Object(n.a)(a,"loan_repeat_q6",s.loan_repeat_q6),a);m.a.post("http://localhost:5000/add/ServiceQualityAnexC",t).then(function(e){console.log("form submit data"+e.data),console.log("form submitted"),b(!1),x()}).catch(function(e){console.log(e.response)})}else console.log("not authenticated!",s),alert("Kindly fill complete form"),b(!1)}console.log("isSubmitting",s)},[g]);var x=function(){O(!0)};return{handleSubmit:function(e){e.preventDefault(),console.log("handle Submit Called",s);var t=a(s);u(t),b(!0)},handleInputChange:function(e){console.log("handle input change",e.target.value),_(Object(l.a)({},s,Object(n.a)({},e.target.name,e.target.value)))},inputs:s,errors:g,isSubmitting:E,redirectTo:N}};function q(e){console.log("validateServiceQuality called");var a={};return e.cash_q1||(a.cash_q1="Required HO Location"),e.cash_q2||(a.cash_q2="Required Host Department"),e.cash_q3||(a.cash_q3="Required HO Location"),e.cash_q4||(a.cash_q4="Required Host Department"),e.remittance_q1||(a.remittance_q1="Required HO Location"),e.remittance_q2||(a.remittance_q2="Required Host Department"),e.clearing_q1||(a.clearing_q1="Required HO Location"),e.clearing_q2||(a.clearing_q2="Required Host Department"),e.clearing_q3||(a.clearing_q3="Required HO Location"),e.clearing_q4||(a.clearing_q4="Required Host Department"),e.clearing_q5||(a.clearing_q5="Required Host Department"),e.miscellaneous_q1||(a.miscellaneous_q1="Required HO Location"),e.miscellaneous_q2||(a.miscellaneous_q2="Required Host Department"),e.miscellaneous_q3||(a.miscellaneous_q3="Required HO Location"),e.miscellaneous_q4||(a.miscellaneous_q4="Required Host Department"),e.miscellaneous_q5||(a.miscellaneous_q5="Required HO Location"),e.miscellaneous_q6||(a.miscellaneous_q6="Required Host Department"),e.miscellaneous_q7||(a.miscellaneous_q7="Required Host Department"),e.miscellaneous_q8||(a.miscellaneous_q8="Required Host Department"),e.deposit_q1||(a.deposit_q1="Required HO Location"),e.deposit_q2||(a.deposit_q2="Required Host Department"),e.deposit_q3||(a.deposit_q3="Required HO Location"),e.deposit_q4||(a.deposit_q4="Required Host Department"),e.gold_loan_processing_new_q1||(a.gold_loan_processing_new_q1="Required HO Location"),e.gold_loan_processing_new_q2||(a.gold_loan_processing_new_q2="Required Host Department"),e.gold_loan_processing_new_q3||(a.gold_loan_processing_new_q3="Required HO Location"),e.gold_loan_processing_new_q4||(a.gold_loan_processing_new_q4="Required Host Department"),e.gold_loan_processing_new_q5||(a.gold_loan_processing_new_q5="Required Host Department"),e.gold_loan_processing_new_q6||(a.gold_loan_processing_new_q6="Required Host Department"),e.passbook_new_q1||(a.passbook_new_q1="Required HO Location"),e.passbook_new_q2||(a.passbook_new_q2="Required Host Department"),e.passbook_new_q3||(a.passbook_new_q3="Required HO Location"),e.passbook_new_q4||(a.passbook_new_q4="Required Host Department"),e.passbook_new_q5||(a.passbook_new_q5="Required Host Department"),e.passbook_new_q6||(a.passbook_new_q6="Required Host Department"),e.mortgage_new_q1||(a.mortgage_new_q1="Required HO Location"),e.mortgage_new_q2||(a.mortgage_new_q2="Required Host Department"),e.mortgage_new_q3||(a.mortgage_new_q3="Required HO Location"),e.mortgage_new_q4||(a.mortgage_new_q4="Required Host Department"),e.mortgage_new_q5||(a.mortgage_new_q5="Required Host Department"),e.mortgage_new_q6||(a.mortgage_new_q6="Required Host Department"),e.personal_new_q1||(a.personal_new_q1="Required HO Location"),e.personal_new_q2||(a.personal_new_q2="Required Host Department"),e.personal_new_q3||(a.personal_new_q3="Required HO Location"),e.personal_new_q4||(a.personal_new_q4="Required Host Department"),e.personal_new_q5||(a.personal_new_q5="Required Host Department"),e.personal_new_q6||(a.personal_new_q6="Required Host Department"),e.loan_new_q1||(a.loan_new_q1="Required HO Location"),e.loan_new_q2||(a.loan_new_q2="Required Host Department"),e.loan_new_q3||(a.loan_new_q3="Required HO Location"),e.loan_new_q4||(a.loan_new_q4="Required Host Department"),e.loan_new_q5||(a.loan_new_q5="Required Host Department"),e.loan_new_q6||(a.loan_new_q6="Required Host Department"),e.gold_loan_processing_repeat_q1||(a.gold_loan_processing_repeat_q1="Required HO Location"),e.gold_loan_processing_repeat_q2||(a.gold_loan_processing_repeat_q2="Required Host Department"),e.gold_loan_processing_repeat_q3||(a.gold_loan_processing_repeat_q3="Required HO Location"),e.gold_loan_processing_repeat_q4||(a.gold_loan_processing_repeat_q4="Required Host Department"),e.gold_loan_processing_repeat_q5||(a.gold_loan_processing_repeat_q5="Required Host Department"),e.gold_loan_processing_repeat_q6||(a.gold_loan_processing_repeat_q6="Required Host Department"),e.passbook_repeat_q1||(a.passbook_repeat_q1="Required HO Location"),e.passbook_repeat_q2||(a.passbook_repeat_q2="Required Host Department"),e.passbook_repeat_q3||(a.passbook_repeat_q3="Required HO Location"),e.passbook_repeat_q4||(a.passbook_repeat_q4="Required Host Department"),e.passbook_repeat_q5||(a.passbook_repeat_q5="Required Host Department"),e.passbook_repeat_q6||(a.passbook_repeat_q6="Required Host Department"),e.mortgage_repeat_q1||(a.mortgage_repeat_q1="Required HO Location"),e.mortgage_repeat_q2||(a.mortgage_repeat_q2="Required Host Department"),e.mortgage_repeat_q3||(a.mortgage_repeat_q3="Required HO Location"),e.mortgage_repeat_q4||(a.mortgage_repeat_q4="Required Host Department"),e.mortgage_repeat_q5||(a.mortgage_repeat_q5="Required Host Department"),e.mortgage_repeat_q6||(a.mortgage_repeat_q6="Required Host Department"),e.loan_repeat_q1||(a.loan_repeat_q1="Required HO Location"),e.loan_repeat_q2||(a.loan_repeat_q2="Required Host Department"),e.loan_repeat_q3||(a.loan_repeat_q3="Required HO Location"),e.loan_repeat_q4||(a.loan_repeat_q4="Required Host Department"),e.loan_repeat_q5||(a.loan_repeat_q5="Required Host Department"),e.loan_repeat_q6||(a.loan_repeat_q6="Required Host Department"),a}t(381);var g=t(289),u=t(298),d=t(302),h=t(290),E=t(156),b=t(58),w=t(59),v=t(85),y=t(154),N=t(390),O=t(391),x=(t(388),{location:"",hostName:"",cash_q1:"",cash_q2:"",cash_q3:"",cash_q4:"",remittance_q1:"",remittance_q2:"",clearing_q1:"",clearing_q2:"",clearing_q3:"",clearing_q4:"",clearing_q5:"",miscellaneous_q1:"",miscellaneous_q2:"",miscellaneous_q3:"",miscellaneous_q4:"",miscellaneous_q5:"",miscellaneous_q6:"",miscellaneous_q7:"",miscellaneous_q8:"",deposit_q1:"",deposit_q2:"",deposit_q3:"",deposit_q4:"",gold_loan_processing_new_q1:"",gold_loan_processing_new_q2:"",gold_loan_processing_new_q3:"",gold_loan_processing_new_q4:"",gold_loan_processing_new_q5:"",gold_loan_processing_new_q6:"",passbook_new_q1:"",passbook_new_q2:"",passbook_new_q3:"",passbook_new_q4:"",passbook_new_q5:"",passbook_new_q6:"",mortgage_new_q1:"",mortgage_new_q2:"",mortgage_new_q3:"",mortgage_new_q4:"",mortgage_new_q5:"",mortgage_new_q6:"",personal_new_q1:"",personal_new_q2:"",personal_new_q3:"",personal_new_q4:"",personal_new_q5:"",personal_new_q6:"",loan_new_q1:"",loan_new_q2:"",loan_new_q3:"",loan_new_q4:"",loan_new_q5:"",loan_new_q6:"",gold_loan_processing_repeat_q1:"",gold_loan_processing_repeat_q2:"",gold_loan_processing_repeat_q3:"",gold_loan_processing_repeat_q4:"",gold_loan_processing_repeat_q5:"",gold_loan_processing_repeat_q6:"",passbook_repeat_q1:"",passbook_repeat_q2:"",passbook_repeat_q3:"",passbook_repeat_q4:"",passbook_repeat_q5:"",passbook_repeat_q6:"",mortgage_repeat_q1:"",mortgage_repeat_q2:"",mortgage_repeat_q3:"",mortgage_repeat_q4:"",mortgage_repeat_q5:"",mortgage_repeat_q6:"",personal_repeat_q1:"",personal_repeat_q2:"",personal_repeat_q3:"",personal_repeat_q4:"",personal_repeat_q5:"",personal_repeat_q6:"",loan_repeat_q1:"",loan_repeat_q2:"",loan_repeat_q3:"",loan_repeat_q4:"",loan_repeat_q5:"",loan_repeat_q6:""});a.default=function(){var e=Object(s.useState)(1),a=Object(o.a)(e,2),t=a[0],_=a[1],m=Object(s.useState)(1),p=Object(o.a)(m,2),C=p[0],k=p[1],f=Object(s.useState)("Next"),j=Object(o.a)(f,2),S=(j[0],j[1],i(x,q)),R=S.inputs,H=S.handleInputChange,D=S.handleSubmit,z=(S.errors,S.isSubmitting),L=S.redirectTo,T=(C[t],7===t),A=1===t;return c.a.createElement(s.Fragment,null,function(){if(L)return console.log("Redirect To Called"),c.a.createElement(g.a,{to:"/"})}(),c.a.createElement(O.a,{id:"controlled-tab-example",activeKey:t,onSelect:{handleChange:function(e){var a=e.target.value;k(Object(l.a)({},C,Object(n.a)({},t,Object(l.a)({},C[t],{value:a}))))}}},c.a.createElement(N.a,{eventKey:1,title:"Cash"},c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,"Cash / Online Transactions"),c.a.createElement(h.a,null,c.a.createElement(E.a,null,c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"cash_q1"},"Cash Withdrawl"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.cash_q1,name:"cash_q1"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"cash_q2"},"Cash Deposit"),c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.cash_q2,name:"cash_q2"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"cash_q3"},"Online Deposit And Withdrawl"),c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.cash_q3,name:"cash_q3"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"cash_q4"},"Checque Deposits - Inter Accounts Transfer"),c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.cash_q4,name:"cash_q4"}))))))),c.a.createElement(N.a,{eventKey:2,title:"Remittance"},c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,"Remittances And Banker's Cheque"),c.a.createElement(h.a,null,c.a.createElement(E.a,{onSubmit:D},c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"remittance_q1"},"Issuance Of Banker's Cheque"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.remittance_q1,name:"remittance_q1"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"remittance_q2"},"Payment Of Banker's Cheque"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.remittance_q2,name:"remittance_q2"}))))))),c.a.createElement(N.a,{eventKey:3,title:"Clearing"},c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,"Clearing/Collections"),c.a.createElement(h.a,null,c.a.createElement(E.a,{onSubmit:D},c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"clearing_q1"},"Local Clearing with No NIFT Arrangements"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.clearing_q1,name:"clearing_q1"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"clearing_q2"},"NIFT Local Clearing"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.clearing_q2,name:"clearing_q2"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"clearing_q3"},"NIFT InterCity Clearing"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.clearing_q3,name:"clearing_q3"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"clearing_q4"},"Outward Collection"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.clearing_q4,name:"clearing_q4"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"clearing_q5"},"Collection through Correspondent Bank"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.clearing_q5,name:"clearing_q5"}))))))),c.a.createElement(N.a,{eventKey:4,title:"Miscellaneous"},c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,"Miscellaneous"),c.a.createElement(h.a,null,c.a.createElement(E.a,{onSubmit:D},c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q1"},"On request Statement of Accounts/Duplicate Statement"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q1,name:"miscellaneous_q1"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q2"},"Balance Inquiry"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q2,name:"miscellaneous_q2"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q3"},"Account Opening"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q3,name:"miscellaneous_q3"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q4"},"Cheque Book Issuance"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q4,name:"miscellaneous_q4"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q5"},"Delivery of Cheque Book to Client(once received in branch)"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q5,name:"miscellaneous_q5"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q6"},"Stop payment Requests for cheques"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q6,name:"miscellaneous_q6"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q7"},"Standing Instructions"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q7,name:"miscellaneous_q7"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"miscellaneous_q8"},"Status Update/account maintenance/deceased Marking"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.miscellaneous_q8,name:"miscellaneous_q8"}))))))),c.a.createElement(N.a,{eventKey:5,title:"Deposit"},c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(d.a,null,"Term Deposit"),c.a.createElement(h.a,null,c.a.createElement(E.a,{onSubmit:D},c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"deposit_q1"},"Term Deposit Issuance"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.deposit_q1,name:"deposit_q1"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"deposit_q2"},"Term Deposit Auto Renewal / Roll Over"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.deposit_q2,name:"deposit_q2"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"deposit_q3"},"Term Deposit Special Rate Renewal/ Roll Over"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.deposit_q3,name:"deposit_q3"})),c.a.createElement(b.a,null,c.a.createElement(w.a,{for:"deposit_q4"},"Term Deposit Pre mature Encashment"),c.a.createElement(v.a,{type:"text",onChange:H,value:R.deposit_q4,name:"deposit_q4"}))))))),c.a.createElement(N.a,{eventKey:6,title:"Tentative TATs for Lending/Advances"},c.a.createElement(r.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null,c.a.createElement(E.a,{onSubmit:D},c.a.createElement("div",{className:"row",style:{marginTop:20}},c.a.createElement("div",{className:"col-sm-1"}),c.a.createElement("div",{className:"col-xs-12 col-md-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header text-center"},"Tentative TATs for Lending/Advances"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",null,c.a.createElement("table",{className:"table table-bordered"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle text-info",colspan:"3"},"For New Client"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},"Branch Credit Committee",c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1",width:"10%"},"Verification/Appraisal/Approval"),c.a.createElement("th",{className:"column-middle",colspan:"1",width:"10%"},"Disbursment(including account opening)"),c.a.createElement("th",{className:"column-middle",colspan:"1",width:"10%"},"Total TAT"))),c.a.createElement("th",{className:"card-header text-center",colspan:"1"},"Area Credit Committee(Inclusive Of BCC Time)",c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1",width:"10%"},"Verification/Appraisal/Approval"),c.a.createElement("th",{className:"column-middle",colspan:"1",width:"10%"},"Disbursment(including account opening)"),c.a.createElement("th",{className:"column-middle",colspan:"1",width:"10%"},"Total TAT"))),c.a.createElement("th",{className:"column-middle",colspan:"1"})),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Individual Loans / RoshanZar Loan:")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Gold Loan Processing"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_new_q1,name:"gold_loan_processing_new_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_new_q2,name:"gold_loan_processing_new_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_new_q3,name:"gold_loan_processing_new_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_new_q4,name:"gold_loan_processing_new_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_new_q5,name:"gold_loan_processing_new_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_new_q6,name:"gold_loan_processing_new_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Agri Passbook loan processing"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_new_q1,name:"passbook_new_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_new_q2,name:"passbook_new_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_new_q3,name:"passbook_new_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_new_q4,name:"passbook_new_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_new_q5,name:"passbook_new_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_new_q6,name:"passbook_new_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Mortgage/Property loan Porcessing"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_new_q1,name:"mortgage_new_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_new_q2,name:"mortgage_new_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_new_q3,name:"mortgage_new_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_new_q4,name:"mortgage_new_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_new_q5,name:"mortgage_new_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_new_q6,name:"mortgage_new_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Personal/ Third party Guarantee"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_new_q1,name:"personal_new_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_new_q2,name:"personal_new_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_new_q3,name:"personal_new_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_new_q4,name:"personal_new_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_new_q5,name:"personal_new_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_new_q6,name:"personal_new_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"text-center",colspan:"3"},"Group Loans"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_new_q1,name:"loan_new_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_new_q2,name:"loan_new_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_new_q3,name:"loan_new_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_new_q4,name:"loan_new_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_new_q5,name:"loan_new_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_new_q6,name:"loan_new_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle text-info",colspan:"3"},"For Repeat Client")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Individual Loans / RoshanZar Loan:")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Gold Loan Processing"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_repeat_q1,name:"gold_loan_processing_repeat_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_repeat_q2,name:"gold_loan_processing_repeat_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_repeat_q3,name:"gold_loan_processing_repeat_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_repeat_q4,name:"gold_loan_processing_repeat_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_repeat_q5,name:"gold_loan_processing_repeat_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.gold_loan_processing_repeat_q6,name:"gold_loan_processing_repeat_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Agri Passbook loan processing"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_repeat_q1,name:"passbook_repeat_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_repeat_q2,name:"passbook_repeat_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_repeat_q3,name:"passbook_repeat_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_repeat_q4,name:"passbook_repeat_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_repeat_q5,name:"passbook_repeat_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.passbook_repeat_q6,name:"passbook_repeat_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Mortgage/Property loan Porcessing"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_repeat_q1,name:"mortgage_repeat_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_repeat_q2,name:"mortgage_repeat_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_repeat_q3,name:"mortgage_repeat_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_repeat_q4,name:"mortgage_repeat_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_repeat_q5,name:"mortgage_repeat_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.mortgage_repeat_q6,name:"mortgage_repeat_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"card-header text-center",colspan:"3"},"Personal/ Third party Guarantee"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_repeat_q1,name:"personal_repeat_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_repeat_q2,name:"personal_repeat_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_repeat_q3,name:"personal_repeat_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_repeat_q4,name:"personal_repeat_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_repeat_q5,name:"personal_repeat_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.personal_repeat_q6,name:"personal_repeat_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")),c.a.createElement("tr",null,c.a.createElement("th",{className:"text-center",colspan:"3"},"Group Loans"),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_repeat_q1,name:"loan_repeat_q1"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_repeat_q2,name:"loan_repeat_q2"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_repeat_q3,name:"loan_repeat_q3"})))),c.a.createElement("th",{className:"card-header text-center",colspan:"1",width:"10%"},c.a.createElement("tr",null,c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_repeat_q4,name:"loan_repeat_q4"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_repeat_q5,name:"loan_repeat_q5"})),c.a.createElement("th",{className:"column-middle",colspan:"1"},c.a.createElement(v.a,{bsSize:"lg",type:"text",onChange:H,value:R.loan_repeat_q6,name:"loan_repeat_q6"})))),c.a.createElement("th",{className:"column-middle",colspan:"1"},"Days")))))))))),c.a.createElement(y.a,{disabled:z,type:"submit"},"Submit"))))))),!A&&c.a.createElement(y.a,{onClick:function(e){e.preventDefault(),_(function(e){return e-1})}},"< Back"),!T&&c.a.createElement(y.a,{onClick:function(e){e.preventDefault(),_(function(e){return e+1})}},"Next >"))}}}]);
//# sourceMappingURL=20.b656c6e6.chunk.js.map