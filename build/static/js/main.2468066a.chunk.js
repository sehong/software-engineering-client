(this.webpackJsonpsoftware_project=this.webpackJsonpsoftware_project||[]).push([[0],{181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=n(13),l=n(27),u=n(6),s=n(16),m=n(14),p=n(212),d=n(207),f=n(211),b=n(51);var g="http://www.m-ssi.com:8000/"+"api/",h=n(52),E=n.n(h),x=n(53),v=n.n(x),j=Object(b.create)({baseURL:g,withCredentials:!0});Object(b.create)({baseURL:g});j.addResponseTransform((function(e){if(console.log(e),e.status&&e.status>=500)throw"Server Error";if(!e.status)throw"API Error";e.data instanceof Object&&(e.data=E()(e.data,{deep:!0})),e.data&&e.data.message instanceof Object&&(e.data.message=E()(e.data.message,{deep:!0}),e.errors=e.data.message)})),j.addRequestTransform((function(e){e.params instanceof Object&&(e.params=v()(e.params,{deep:!0})),e.data instanceof Object&&"Object"===e.data.constructor.name&&(e.data=v()(e.data,{deep:!0}))}));var O=j;function y(){var e=Object(i.a)(["\n    display: flex;\n    height: 80vh;\n    padding: 4% 4% 4% 4%;\n    @media (max-width: 800px) {\n        padding: 0 0 0 0;\n    }\n"]);return y=function(){return e},e}function w(){var e=Object(i.a)(["\n    width: 50%;\n    background-size: cover;\n    background-position: center center;\n\n    height: 80vh;\n    background-image: url(",");\n    @media (max-width: 800px) {\n        display: none;\n    }\n    @media all and (max-device-height: 800px) {\n        display: none;\n    }\n"]);return w=function(){return e},e}function k(){var e=Object(i.a)(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    opacity: 0.8;\n"]);return k=function(){return e},e}function S(){var e=Object(i.a)(["\n    font-style: normal;\n    font-weight: bold;\n    font-size: 30px;\n    line-height: 35px;\n"]);return S=function(){return e},e}function N(){var e=Object(i.a)(["\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 19px;\n    color: #2d3748;\n    margin-bottom: -3%;\n"]);return N=function(){return e},e}var C=m.b.p(N()),F=m.b.p(S()),z=m.b.p(k()),B=m.b.div(w(),(function(e){return e.bg})),T=m.b.div(y()),W=Object(d.a)({textFiled:{border:" 1px solid #E8E8E8",boxSizing:"border-box",borderRadius:"5px",height:"50px",width:"100%",underline:!1,maxWidth:450,marginBottom:10},loginBtn:{background:"#04C45C",borderRadius:"5px",width:"100%",maxWidth:400,height:50,marginTop:25,fontWeight:"bold",fontSize:"16px",lineHeight:"19px",color:"#FFFFFF","&:hover":{background:"#34558b"}}});var R=function(e){var t=Object(u.f)(),n=W(),o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],l=c[1],m=Object(a.useState)(""),d=Object(s.a)(m,2),b=d[0],g=d[1];Object(a.useEffect)((function(){}),[]);var h=function(t){t.preventDefault(),""!==i&&""!==b||alert("\uc774\uba54\uc77c \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694"),O.post("v1/users/sign-in/",{email:i,password:b}).then((function(t){"NotLogin"!==t.data.code?(alert("\ub85c\uadf8\uc778\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.history.replace("/")):alert(t.data.msg)}))};return r.a.createElement(T,null,r.a.createElement(B,{bg:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}),r.a.createElement("div",{style:{paddingLeft:"10%",textAlign:"left",width:"40%",margin:"auto"}},r.a.createElement("form",{onSubmit:h},r.a.createElement(C,null,"WelcomBack"),r.a.createElement(F,null,"Login to your account"),r.a.createElement(z,null,"Email"),r.a.createElement(p.a,{className:n.textFiled,type:"email",value:i,onChange:function(e){return l(e.currentTarget.value)}}),r.a.createElement(z,null,"password"),r.a.createElement(p.a,{className:n.textFiled,type:"password",value:b,onChange:function(e){return g(e.currentTarget.value)}}),r.a.createElement("p",{style:{textAlign:"right",maxWidth:450,marginTop:-5,color:"red",cursor:"pointer",fontSize:13},onClick:function(){t.push("/register")}},"\ud68c\uc6d0\uac00\uc785 \ud558\ub7ec\uac00\uae30"),r.a.createElement(f.a,{type:"submit",onClick:h,className:n.loginBtn},"Login now"))))},A=n(86),L=n(26),I=n.n(L),P=n(45),D=Object(a.createContext)(),M=D.Provider,U={email:"",phoneNumber:"",nickname:"",profileImage:""},H=function(e){var t=Object(a.useState)(U),n=Object(s.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1],p=function(){var e=Object(P.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object.assign({},o,t));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={user:o,isAuthenticated:u},f={fetchProfile:function(){var e=Object(P.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("v1/me/profile/");case 2:if((t=e.sent).ok){e.next=7;break}return c(U),m(!1),e.abrupt("return",!1);case 7:return c(t.data),m(!0),e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),patchProfile:function(){var e=Object(P.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.patch("v1/me/info/",t);case 2:if((n=e.sent).ok){e.next=5;break}return e.abrupt("return",!1);case 5:return c(n.data),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addUserInfo:p};return r.a.createElement(M,{value:Object(A.a)({},d,{},f)},e.children)};function J(){var e=Object(i.a)(["\n    display: flex;\n    height: 80vh;\n    padding: 4% 4% 4% 4%;\n    @media (max-width: 800px) {\n        padding: 0 0 0 0;\n    }\n"]);return J=function(){return e},e}var q=m.b.div(J()),Q=Object(d.a)({textFiled:{border:" 1px solid #E8E8E8",boxSizing:"border-box",borderRadius:"5px",height:"50px",width:"100%",underline:!1,maxWidth:450,marginBottom:10,"& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":{display:"none"}},loginBtn:{background:"#04C45C",borderRadius:"5px",width:"100%",maxWidth:400,height:50,marginTop:25,fontWeight:"bold",fontSize:"16px",lineHeight:"19px",color:"#FFFFFF","&:hover":{background:"#34558b"}}});var _,G=(_=function(e){var t=Object(u.f)(),n=Q(),o=Object(a.useState)(""),c=Object(s.a)(o,2),i=c[0],l=c[1],m=Object(a.useState)(""),d=Object(s.a)(m,2),b=d[0],g=d[1],h=Object(a.useState)(""),E=Object(s.a)(h,2),x=E[0],v=E[1],j=Object(a.useState)(""),y=Object(s.a)(j,2),w=y[0],k=y[1],S=Object(a.useState)(""),N=Object(s.a)(S,2),T=N[0],W=N[1];Object(a.useEffect)((function(){console.log(e.auth.user)}),[]);var R=function(t){t.preventDefault(),""===i||""===b||""===x||""===w||""===T?alert("\uc815\ubcf4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."):b!==x&&alert("Password and CheckPassword are different"),O.post("v1/users/sign-up/",{email:i,password:b,phoneNumber:T,nickname:w}).then((function(t){t.ok?(alert("\ud68c\uc6d0\uac00\uc785\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),e.history.replace("/")):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.")}))};return r.a.createElement(q,null,r.a.createElement("div",{style:{paddingLeft:"15%",textAlign:"left",width:"40%",margin:"auto"}},r.a.createElement("form",{onSubmit:R},r.a.createElement(C,null,"WelcomBack"),r.a.createElement(F,null,"Sign up to your account"),r.a.createElement(z,null,"Email"),r.a.createElement(p.a,{className:n.textFiled,type:"email",value:i,onChange:function(e){return l(e.currentTarget.value)}}),r.a.createElement(z,null,"password"),r.a.createElement(p.a,{className:n.textFiled,type:"password",value:b,onChange:function(e){return g(e.currentTarget.value)}}),r.a.createElement(z,null,"password check"),r.a.createElement(p.a,{className:n.textFiled,type:"password",value:x,onChange:function(e){return v(e.currentTarget.value)}}),r.a.createElement(z,null,"Phone Number"),r.a.createElement(p.a,{className:n.textFiled,type:"number",value:T,onChange:function(e){W(e.currentTarget.value)}}),r.a.createElement(z,null,"NickName"),r.a.createElement(p.a,{className:n.textFiled,type:"text",value:w,onChange:function(e){k(e.currentTarget.value)}}),r.a.createElement("p",{style:{textAlign:"right",maxWidth:450,marginTop:-5,color:"red",cursor:"pointer",fontSize:13},onClick:function(){t.push("/login")}},"\ub85c\uadf8\uc778 \ud558\ub7ec\uac00\uae30"),r.a.createElement(f.a,{type:"submit",onClick:R,className:n.loginBtn},"Sign Up now"))),r.a.createElement(B,{bg:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}))},function(e){return r.a.createElement(D.Consumer,null,(function(t){return r.a.createElement(_,Object.assign({},e,{auth:t}))}))}),K=n(210),V=n(82),X=n.n(V);function Y(){var e=Object(i.a)(["\n    margin-left: 20px;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n        color: #34558b;\n    }\n    @media (max-width: 800px) {\n        display: inline-block !important;\n    }\n"]);return Y=function(){return e},e}function Z(){var e=Object(i.a)(["\n    height: 55px;\n    color: blue;\n    background: none;\n    border: none;\n    visible: false;\n    display: none;\n    text-decoration: none;\n    @media (max-width: 800px) {\n        display: inline-block !important;\n    }\n"]);return Z=function(){return e},e}function $(){var e=Object(i.a)(["\n    text-decoration: none;\n    cursor: pointer;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 21px;\n    line-height: 120%;\n    letter-spacing: -0.03em;\n    padding: 15px 20px;\n    float: right;\n    &:hover {\n        color: #34558b;\n        border-bottom: 1px solid #34558b;\n    }\n    color: #181717;\n    @media (max-width: 800px) {\n        display: none;\n    }\n"]);return $=function(){return e},e}var ee=Object(m.b)(l.b)($()),te=m.b.button(Z()),ne=m.b.p(Y());var ae=function(e){var t=Object(u.f)(),n=Object(a.useState)(!1),o=Object(s.a)(n,2),c=o[0],i=o[1];return r.a.createElement("div",{style:{display:"flex",borderBottom:"solid 1px #e8e8e8"}},r.a.createElement(l.b,{to:"/"},"Logo"),r.a.createElement("div",{style:{width:"100%",paddingRight:"4%"}},r.a.createElement(ee,{to:"/register"},"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(ee,{to:"/introduce"},"\uc18c\uac1c"),r.a.createElement(ee,{to:"/post"},"\uac8c\uc2dc\ud310"),r.a.createElement(ee,{to:"/login"},"\ub85c\uadf8\uc778")),r.a.createElement(te,null,r.a.createElement(X.a,{style:{fontSize:"30px"},onClick:function(){i(!0)}})),r.a.createElement("div",null,r.a.createElement(K.a,{anchor:"right",open:c,onClose:function(e){i(!1)}},r.a.createElement("p",{style:{padding:"10px 140px 10px 30px ",borderBottom:"solid 1px #e8e8e8"}},"Basic Drawer"),r.a.createElement(ne,{onClick:function(){i(!1),t.push("/introduce")}},"\uc18c\uac1c"),r.a.createElement(ne,{onClick:function(){i(!1),t.push("/post")}},"\uac8c\uc2dc\ud310"),r.a.createElement(ne,{onClick:function(){i(!1),t.push("/login")}},"\ub85c\uadf8\uc778"))))};var re=function(e){return r.a.createElement("div",null,"\uac8c\uc2dc\ud310\ud398\uc774\uc9c0")},oe=(n(181),n(83)),ce=n.n(oe),ie=n(84),le=n.n(ie),ue=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:ce.a,className:"App-logo",alt:"logo",style:{marginLeft:50,marginRight:50,backgroundColor:"#34558b"}}),r.a.createElement("div",null,r.a.createElement("b",null,r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement("p",{className:"a"},"M"),r.a.createElement("p",{className:"fonts"},"an\u2002"),r.a.createElement("p",{className:"a"},"S"),r.a.createElement("p",{className:"fonts"},"haring\u2002"),r.a.createElement("p",{className:"a"},"S"),r.a.createElement("p",{className:"fonts"},"tart-up\u2002"),r.a.createElement("p",{className:"a"},"I"),r.a.createElement("p",{className:"fonts"},"nformation\u2002"))),r.a.createElement("div",{className:"fonts"},r.a.createElement("b",null,r.a.createElement("p",{style:{fontSize:20}},"\ucc3d\uc5c5 \uc815\ubcf4\ub294 Where?")),r.a.createElement("p",null,"\ucc3d\uc5c5\uc744 \uc900\ube44\ud558\ub294 \uc0ac\ub78c\ub4e4\uc774 \uc190\uc27d\uac8c"),r.a.createElement("p",null,"\uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc788\ub3c4\ub85d \ucc3d\uc5c5 \uc815\ubcf4\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4."),r.a.createElement("b",null,r.a.createElement("p",{style:{fontSize:32,color:"#34558b"}},"I can do it! Start-up")),r.a.createElement("hr",null))),r.a.createElement("img",{src:le.a,className:"App-logo",alt:"logo",style:{marginLeft:50,marginRight:50,backgroundColor:"#34558b"}}))))},se=n(85),me=n.n(se);n(182);var pe=function(e){return r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement("img",{src:me.a,className:"App-logo"}),r.a.createElement("hr",null))};var de=function(e){return r.a.createElement("div",null,"Uploadpage")};function fe(){var e=Object(i.a)(["\n  body {\n    color: #000000;\n     font-family: DM Sans;\n  }\n"]);return fe=function(){return e},e}var be=Object(m.a)(fe());var ge=function(){return r.a.createElement(H,null,r.a.createElement(l.a,null,r.a.createElement(be,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/login",component:R}),r.a.createElement(u.a,{exact:!0,path:"/register",component:G}),r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(u.a,{exact:!0,path:"/post",component:re}),r.a.createElement(u.a,{exact:!0,path:"/Introduction",component:ue}),r.a.createElement(u.a,{exact:!0,path:"/",component:pe}),r.a.createElement(u.a,{exact:!0,path:"/uploadpage",component:de})))))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root"))},83:function(e,t,n){e.exports=n.p+"static/media/start-up1.494dd88a.png"},84:function(e,t,n){e.exports=n.p+"static/media/start-up2.131654bd.png"},85:function(e,t,n){e.exports=n.p+"static/media/Mypagebanner.d86c2441.png"},92:function(e,t,n){e.exports=n(183)}},[[92,1,2]]]);
//# sourceMappingURL=main.2468066a.chunk.js.map