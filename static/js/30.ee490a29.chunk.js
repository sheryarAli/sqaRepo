(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{318:function(e,a,t){"use strict";var l=t(50),n=t(10),r=t(3),o=t.n(r),c=t(1),m=t.n(c),i=(t(26),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var a,t=e.tag,r=e.className,c=e.type,u=Object(n.a)(e,["tag","className","type"]),s=o()(Object(l.a)({},c,!!c),r);return a=t||(!t&&i[c]?i[c]:"p"),m.a.createElement(a,Object.assign({},u,{className:s}))};u.defaultProps={type:"p"},a.a=u},319:function(e,a,t){"use strict";var l=t(10),n=t(1),r=t.n(n),o=(t(26),t(36)),c=t(323),m=t(324),i=t(318),u=o.a.create("page"),s=function(e){var a=e.title,t=e.breadcrumbs,n=e.tag,o=e.className,s=e.children,E=Object(l.a)(e,["title","breadcrumbs","tag","className","children"]),q=u.b("px-3",o);return r.a.createElement(n,Object.assign({className:q},E),r.a.createElement("div",{className:u.e("header")},a&&"string"===typeof a?r.a.createElement(i.a,{type:"h1",className:u.e("title")},a):a,t&&r.a.createElement(c.a,{className:u.e("breadcrumb")},r.a.createElement(m.a,null,"Home"),t.length&&t.map(function(e,a){var t=e.name,l=e.active;return r.a.createElement(m.a,{key:a,active:l},t)}))),s)};s.defaultProps={tag:"div",title:""},a.a=s},336:function(e,a,t){"use strict";function l(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],l=!0,n=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(l=(o=c.next()).done)&&(t.push(o.value),!a||t.length!==a);l=!0);}catch(m){n=!0,r=m}finally{try{l||null==c.return||c.return()}finally{if(n)throw r}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.d(a,"a",function(){return l})},908:function(e,a,t){"use strict";t.r(a);var l=t(50),n=t(38),r=t(336),o=t(319),c=t(1),m=t.n(c),i=t(363),u=t.n(i),s=t(29);var E=function(e,a){var t=m.a.useState(e),o=Object(r.a)(t,2),c=o[0],i=o[1],E=m.a.useState({}),q=Object(r.a)(E,2),h=q[0],p=q[1],_=m.a.useState(!1),v=Object(r.a)(_,2),N=v[0],d=v[1],S=(s.Session.get(),s.Session.get().payload),y=m.a.useState(!1),b=Object(r.a)(y,2),f=b[0],O=b[1];m.a.useEffect(function(){if(console.log("useEffect Called!"),N){var e=0===Object.keys(h).length;if(console.log("errors",e),e){var a;console.log("authenticated!",c.hoLocation,c.hostName);var t=(a={branchLocation:S.branchName,hostName:S.username,security_q1:c.security_q1,security_q2:c.security_q2,securtiy_q3:c.securtiy_q3,exterior_q1:c.exterior_q1,exterior_q2:c.exterior_q2,exterior_q3:c.exterior_q3,exterior_q4:c.exterior_q4,exterior_q5:c.exterior_q5,hall_q1:c.hall_q1,hall_q2:c.hall_q2,hall_q3:c.hall_q3,hall_q4:c.hall_q4,hall_q5:c.hall_q5,hall_q6:c.hall_q6,hall_q7:c.hall_q7,hall_q8:c.hall_q8,hall_q9:c.hall_q9,hall_q10:c.hall_q10,hall_q11:c.hall_q11,hall_q12:c.hall_q12,hall_q13:c.hall_q13},Object(l.a)(a,"hall_q13",c.hall_q13),Object(l.a)(a,"branch_q1",c.branch_q1),Object(l.a)(a,"branch_q2",c.branch_q2),Object(l.a)(a,"branch_q3",c.branch_q3),Object(l.a)(a,"branch_q4",c.branch_q4),Object(l.a)(a,"branch_q5",c.branch_q5),Object(l.a)(a,"branch_q6",c.branch_q6),Object(l.a)(a,"atm_q1",c.atm_q1),Object(l.a)(a,"atm_q2",c.atm_q2),Object(l.a)(a,"atm_q3",c.atm_q3),Object(l.a)(a,"atm_q4",c.atm_q4),Object(l.a)(a,"atm_q5",c.atm_q5),Object(l.a)(a,"atm_q6",c.atm_q6),Object(l.a)(a,"atm_q8",c.atm_q8),Object(l.a)(a,"atm_q9",c.atm_q9),Object(l.a)(a,"atm_q10",c.atm_q10),Object(l.a)(a,"atm_q11",c.atm_q11),Object(l.a)(a,"systems_q1",c.systems_q1),Object(l.a)(a,"systems_q2",c.systems_q2),a);u.a.post("http://localhost:5000/add/ScdBranch",t).then(function(e){console.log(e.data),d(!1),g()}).catch(function(e){console.log(e.response)})}else alert("Kindly fill complete form"),d(!1)}console.log("isSubmitting",c)},[h]);var g=function(){O(!0)};return{handleSubmit:function(e){e.preventDefault(),console.log("handle Submit Called",c);var t=a(c);p(t),d(!0)},handleInputChange:function(e){console.log("handle input change",e.target.value),i(Object(n.a)({},c,Object(l.a)({},e.target.name,e.target.value)))},inputs:c,errors:h,isSubmitting:N,redirectTo:f}};function q(e){console.log("validateAuthentication called");var a={};return""==e.security_q1&&(a.security_q1="Required Host Name"),""==e.security_q2&&(a.hostName="Required Host Name"),""==e.security_q3&&(a.hostName="Required Host Name"),""==e.exterior_q1&&(a.hostName="Required Host Name"),""==e.exterior_q2&&(a.hostName="Required Host Name"),""==e.exterior_q3&&(a.hostName="Required Host Name"),""==e.exterior_q4&&(a.hostName="Required Host Name"),""==e.exterior_q5&&(a.hostName="Required Host Name"),""==e.hall_q1&&(a.hostName="Required Host Name"),""==e.hall_q2&&(a.hostName="Required Host Name"),""==e.hall_q3&&(a.hostName="Required Host Name"),""==e.hall_q4&&(a.hostName="Required Host Name"),""==e.hall_q5&&(a.hostName="Required Host Name"),""==e.hall_q6&&(a.hostName="Required Host Name"),""==e.hall_q7&&(a.hostName="Required Host Name"),""==e.hall_q8&&(a.hostName="Required Host Name"),""==e.hall_q9&&(a.hostName="Required Host Name"),""==e.hall_q10&&(a.hostName="Required Host Name"),""==e.hall_q11&&(a.hostName="Required Host Name"),""==e.hall_q12&&(a.hostName="Required Host Name"),""==e.hall_q13&&(a.hostName="Required Host Name"),""==e.branch_q1&&(a.hostName="Required Host Name"),""==e.branch_q2&&(a.hostName="Required Host Name"),""==e.branch_q3&&(a.hostName="Required Host Name"),""==e.branch_q4&&(a.hostName="Required Host Name"),""==e.branch_q5&&(a.hostName="Required Host Name"),""==e.branch_q6&&(a.hostName="Required Host Name"),""==e.atm_q1&&(a.hostName="Required Host Name"),""==e.atm_q2&&(a.hostName="Required Host Name"),""==e.atm_q3&&(a.hostName="Required Host Name"),""==e.atm_q4&&(a.hostName="Required Host Name"),""==e.atm_q5&&(a.hostName="Required Host Name"),""==e.atm_q6&&(a.hostName="Required Host Name"),""==e.atm_q7&&(a.hostName="Required Host Name"),""==e.atm_q8&&(a.hostName="Required Host Name"),""==e.atm_q9&&(a.hostName="Required Host Name"),""==e.atm_q10&&(a.hostName="Required Host Name"),""==e.atm_q11&&(a.hostName="Required Host Name"),""==e.systems_q1&&(a.hostName="Required Host Name"),""==e.systems_q2&&(a.hostName="Required Host Name"),a}var h=t(298),p=t(302),_=t(290),v=t(156),N=t(58),d=t(59),S=t(85),y=t(154),b=t(390),f=t(391),O=t(289),g={branchLocation:"",hostName:"",security_q1:"",security_q2:"",securtiy_q3:"",exterior_q1:"",exterior_q2:"",exterior_q3:"",exterior_q4:"",exterior_q5:"",hall_q1:"",hall_q2:"",hall_q3:"",hall_q4:"",hall_q5:"",hall_q6:"",hall_q7:"",hall_q8:"",hall_q9:"",hall_q10:"",hall_q11:"",hall_q12:"",hall_q13:"",hall_q14:"",display_q1:"",display_q2:"",display_q3:"",display_q4:"",display_q5:"",branch_q1:"",branch_q2:"",branch_q3:"",branch_q4:"",branch_q5:"",branch_q6:"",atm_q1:"",atm_q2:"",atm_q3:"",atm_q4:"",atm_q5:"",atm_q6:"",atm_q7:"",atm_q8:"",atm_q9:"",atm_q10:"",atm_q11:"",systems_q1:"",systems_q2:""};a.default=function(){var e=Object(c.useState)(1),a=Object(r.a)(e,2),t=a[0],i=a[1],u=Object(c.useState)(1),s=Object(r.a)(u,2),Y=s[0],C=s[1],H=Object(c.useState)("Next"),R=Object(r.a)(H,2),j=(R[0],R[1],m.a.useState({})),x=Object(r.a)(j,2),w=(x[0],x[1],E(g,q)),A=w.inputs,k=w.handleInputChange,L=w.handleSubmit,T=w.errors,M=w.isSubmitting,B=w.redirectTo,K=(Y[t],7===t),D=1===t;return m.a.createElement(c.Fragment,null,function(){if(B)return console.log("Redirect To Called"),m.a.createElement(O.a,{to:"/"})}(),m.a.createElement(f.a,{id:"controlled-tab-example",activeKey:t,onSelect:{handleChange:function(e){var a=e.target.value;C(Object(n.a)({},Y,Object(l.a)({},t,Object(n.a)({},Y[t],{value:a}))))}}},m.a.createElement(b.a,{eventKey:1,title:"Security Guard"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"Security Guard "),m.a.createElement(_.a,null,m.a.createElement(v.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q1"},"Security Guard are available and vigilent?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.security_q1,name:"security_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q2"},"Security Guard dress code is satisfactory?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.security_q2,name:"security_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q3"},"Security guard have the scanner in hand and using it properly?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.securtiy_q3,name:"securtiy_q3"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO")))))))),m.a.createElement(b.a,{eventKey:2,title:"Branch Exterior"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"Branch Exterior"),m.a.createElement(_.a,null,m.a.createElement(v.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q1"},"Branch Signage Clean in Order ?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.exterior_q1,name:"exterior_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q2"},"Branch main door and glass walls clean and spotless"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.exterior_q2,name:"exterior_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q2"},"Branch outdoor marketing skins in good condition (if applicable )"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.exterior_q3,name:"exterior_q3"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q2"},"Branch main door and glass walls clean and spotless"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.exterior_q4,name:"exterior_q4"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q2"},"Front Entrance , Windows , Parking area is clean"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.exterior_q5,name:"exterior_q5"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO")))))))),m.a.createElement(b.a,{eventKey:3,title:"Banking Hall /Customer Area"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"Banking Hall /Customer Area"),m.a.createElement(_.a,null,m.a.createElement(v.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q4"},"All Indoor Lights switched on "),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q1,name:"hall_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q5"},"Main Floor Dusted/Mopped/Vaccummed?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q2,name:"hall_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q6"},"Air Conditioners / Heaters turned on (if required)"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q3,name:"hall_q3"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"Customer waiting area is cleaned and organized"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q4,name:"hall_q4"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q8"},"checque writing desk(s) any  alternate furniture used for same purpsoe is clean  and Organized(All Transaction Slips / Forms Available)(If Applicable)?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q5,name:"hall_q5"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q9"},"Branch Walls and Ceiling Clean?"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q6,name:"hall_q6"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q10"},"Branch Walls are neat (no loose Electric Cables/ wires)"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q7,name:"hall_q7"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q12"},"Branch furniture polished/ingood condition (no torn or worn out)"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q8,name:"hall_q8"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q12"},"Availiblity of clean water in dispenser"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q9,name:"hall_q9"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q13"},"Teller area is clean fromn inside/outside"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q10,name:"hall_q10"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q14"},"Fax Machine / Telephone exchange /Photocopier/Main printer Working"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q11,name:"hall_q11"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q15"},"All documentation ,files, registers, neatly stored safely"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q12,name:"hall_q12"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q16"},"Toilets(Washed/ Mopped / Tissue  and Soap available / washinh material removed)"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q13,name:"hall_q13"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q1"},"Kitchen (clean cabinets/ sink ocen / rerigerator / floor mopped)"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.hall_q14,name:"hall_q14"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO")))))))),m.a.createElement(b.a,{eventKey:4,title:"Display - Notices"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"Display-Notices"),m.a.createElement(_.a,null,m.a.createElement(v.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q4"},"Important notices displayed neatly on the Cash Counter / Notice Board and currency posters visibility displayed. "),m.a.createElement(S.a,{type:"select",onChange:k,value:A.display_q1,name:"display_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q5"},"Availiblity and variety of material/ Marketing Collateral nealty and visibility displayed(Brochures /wall and ceiling hangings / standees etc.)"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.display_q2,name:"display_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q5"},"Availiblity of all printed stationary neatly and visibly displayed in sufficient quantity"),m.a.createElement(S.a,{type:"select",onChange:k,value:A.display_q3,name:"display_q3"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q6"},"Complaint Placard placed at customer area"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.display_q4,name:"display_q4"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"Product LED screen is on and Marketing material vedio is displayed"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.display_q5,name:"display_q5"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO")))))))),m.a.createElement(b.a,{eventKey:5,title:"Branch Staff"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"Barnch Staff"),m.a.createElement(_.a,null,m.a.createElement(v.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q4"},"All Stafff reach office at 08:45AM and ready for all banking services at 09:00AM  "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.branch_q1,name:"branch_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q5"},"Branch staff well groomed and professionaly dressed as per Guidelines"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.branch_q2,name:"branch_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q6"},"All branch staff wearing Bank Id Card during banking hours"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.branch_q3,name:"branch_q3"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"Clean desk policy true implementation is observed  on all staff desk "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.branch_q4,name:"branch_q4"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"Support staff (Tea boy , driver , Cleaning Staff) wearing  proper uniform "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.branch_q5,name:"branch_q5"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"No staff was found with in the premises / at entrance"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.branch_q6,name:"branch_q6"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO")))))))),m.a.createElement(b.a,{eventKey:6,title:"ATM (if applicable)"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"ATM (if applicable)"),m.a.createElement(_.a,null,m.a.createElement(v.a,null,m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q4"},"ATM Signage cleaned "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q1,name:"atm_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q5"},"ATM door cleaned and spotless"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q2,name:"atm_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q6"},"ATM Vestibule area cleaned/mopped "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q3,name:"atm_q3"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"ATM air conditioner  is working  "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q4,name:"atm_q4"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"ATM hotline working"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q5,name:"atm_q5"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"ATM verstibule lights switched on "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q6,name:"atm_q6"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"ATM cables/wires are properly cliped "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q7,name:"atm_q7"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"ATM area Dustbin cleaned  "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q8,name:"atm_q8"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"ATM functioning / Camera functioning "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q9,name:"atm_q9"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"Drop box is placed "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q10,name:"atm_q10"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q7"},"Ensure ATM Cash/ Ticket Roll Replenishment  "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.atm_q11,name:"atm_q11"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO")))))))),m.a.createElement(b.a,{eventKey:7,title:"Sytems"},m.a.createElement(o.a,null,m.a.createElement(h.a,null,m.a.createElement(p.a,null,"Sytems"),m.a.createElement(_.a,null,m.a.createElement(v.a,{onSubmit:L},m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q4"},"Sytem/ Network availibility. "),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.systems_q1,name:"systems_q1"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(N.a,null,m.a.createElement(d.a,{for:"q5"},"Branch Power availiblity (Wapda , Generator)"),m.a.createElement(S.a,{className:T.hoLocation&&"mb-2",type:"select",onChange:k,value:A.systems_q2,name:"systems_q2"},m.a.createElement("option",{value:""},"Select"),m.a.createElement("option",{value:"YES"},"YES"),m.a.createElement("option",{value:"NO"},"NO"))),m.a.createElement(y.a,{disabled:M,type:"submit"}," Submit"))))))),!D&&m.a.createElement(y.a,{onClick:function(e){e.preventDefault(),i(function(e){return e-1})}},"< Back"),!K&&m.a.createElement(y.a,{onClick:function(e){e.preventDefault(),i(function(e){return e+1})}},"Next >"))}}}]);
//# sourceMappingURL=30.ee490a29.chunk.js.map