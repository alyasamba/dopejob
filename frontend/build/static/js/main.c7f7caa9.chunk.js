(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{104:function(e,t,n){e.exports=n(138)},135:function(e,t,n){e.exports=n.p+"static/media/student.c5caaceb.jpg"},136:function(e,t,n){e.exports=n.p+"static/media/employee.b402fe4a.jpg"},137:function(e,t,n){e.exports=n.p+"static/media/enterprise.9c0f865e.jpg"},138:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadSearchResultsFail",(function(){return qe})),n.d(a,"loadSearchResultsSuccess",(function(){return Ye})),n.d(a,"clearSearch",(function(){return Xe})),n.d(a,"showMobileSearch",(function(){return Qe})),n.d(a,"onChangeSearch",(function(){return Ke})),n.d(a,"searchTextChange",(function(){return Ze})),n.d(a,"loadSearchResults",(function(){return et}));var r=n(0),o=n.n(r),c=n(6),i=n.n(c),l=(n(109),n(8)),u=n(9),s=n(15),m=n(16),p=n(18),h=n(17),d=n(23),f=n(44),g=n(20),b=n(97),E=n(67),v=Object(b.a)({palette:{type:"light",primary:{main:"#5E68ED"},secondary:{light:E.a[700],main:"#FDB915"}},typography:{fontFamily:"sans-serif"},props:{MuiButtonBase:{disableRipple:!0},MuiDialog:{transitionDuration:100}},overrides:{MuiButton:{root:{"&:hover":{transition:"none"}}}}}),O=v.zIndex.modal+100+100+100,y=n(21),x=n(169),j=n(71),w=n(74),A=n(180),k=n(98),S=n(181),T=n(182),_=n(183),C=n(24);function N(){var e=Object(u.a)(["\n  h1 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 28px;\n    margin: 0 0 12px;\n  }\n  h2 {\n    font-size: 20px;\n    line-height: 24px;\n    margin: 16px 0 8px;\n  }\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 600;\n    margin: 0 0 8px;\n  }\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 16px;\n    line-height: 20px;\n  }\n  ol,\n  ul {\n    margin: 8px 0;\n    padding: 0;\n    margin-block-start: 0.25em;\n    margin-block-end: 0.25em;\n    padding-inline-start: 16px;\n  }\n  li {\n    margin-bottom: 0;\n  }\n  p {\n    margin: 0;\n    margin-bottom: 10px;\n    line-height: 20px;\n  }\n  pre {\n    padding: 10px 16px;\n    line-height: 16px;\n  }\n  code {\n    font-size: 12px;\n  }\n  blockquote p {\n    margin: 0;\n  }\n"]);return N=function(){return e},e}function D(){var e=Object(u.a)(["\n  height: 2rem;\n  width: 2rem;\n  font-size: 12px;\n  margin-left: -4px;\n"]);return D=function(){return e},e}function I(){var e=Object(u.a)(["\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  margin: 1px;\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.9;\n  &:hover {\n    opacity: 1;\n    background: rgba(220, 220, 220, 1);\n  }\n"]);return I=function(){return e},e}Object(C.c)(I());var R=Object(C.c)(D()),U=(Object(C.c)(N()),n(36)),M=n.n(U);n(47);function H(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}M.a.create({baseUrl:"/",withCredentials:"true",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},xsrfCookieName:"csrftoken",xsrfHeaderName:"X-CSRFToken"}).interceptors.request.use((function(e){return e.headers={Accept:"application/json","Content-Type":"application/json",Authorization:"Token ".concat(localStorage.getItem("token"))},e}),(function(e){return Promise.reject(e)}));var z=n(7);function P(e){console.log(e),localStorage.setItem("token",e);var t=new Date((new Date).getTime()+36e5);return localStorage.setItem("expirationDate",t),{type:z.c,payload:{token:e}}}var B=function(e){return function(t){setTimeout((function(){t(V())}),1e3*e)}};function L(){return{type:z.e}}function F(e,t){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:z.a,payload:{status:e,statusText:t}}}function W(){return{type:z.b}}function V(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),{type:z.d}}var G=function(e,t,n,a,r,o,c,i,l,u,s,m){return function(p){p(W()),M.a.post("/api-authentication/employee-registration",{username:e,email:t,password1:n,password2:a,last_name:r,first_name:o,birth_date:c,home_phone_number:i,mobile_phone_number:l,office:u,job:m,faculty:s}).then((function(e){p(P(e.data.key)),p(B(3600))})).catch((function(e){p(F(401,e))}))}},J=function(e,t,n,a,r,o,c,i,l,u,s,m){return function(p){p(W()),M.a.post("/api-authentication/student-registration",{username:e,email:t,password1:n,password2:a,last_name:r,first_name:o,birth_date:c,home_phone_number:i,mobile_phone_number:l,year:u,cursus:s,faculty:m}).then((function(e){p(P(e.data.key)),p(B(3600))})).catch((function(e){p(F(401,e))}))}},$=function(e,t,n,a,r,o,c,i,l,u,s,m,p,h){return function(d){d(W()),M.a.post("/api-authentication/enterprise-registration",{username:e,email:t,password1:n,password2:a,last_name:r,first_name:o,birth_date:c,home_phone_number:i,mobile_phone_number:l,logo:u,office:s,company_url:m,address:p,description:h}).then((function(e){d(P(e.data.key)),d(B(3600))})).catch((function(e){d(F(401,e))}))}};function q(){var e=Object(u.a)(["\n                    min-height: 1.5rem;\n                    padding: 0;\n                    border-radius: 50%:\n                    &:hover {\n                        background-color: initital;\n                    }\n                "]);return q=function(){return e},e}function Y(){var e=Object(u.a)(["\n  color: #333;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 0.5rem;\n  max-width: 200px;\n  word-break: break-all;\n  padding: 0.25rem 1rem 0.5rem 1rem;\n  &:focus {\n    outline: none;\n  }\n"]);return Y=function(){return e},e}var X=g.a.div(Y()),Q=function(){var e=o.a.useState(null),t=Object(k.a)(e,2),n=t[0],a=t[1],r=Object(l.c)(),c=Object(f.g)();return o.a.createElement("div",null,o.a.createElement(x.a,{"aria-controls":"user-menu","aria-haspopup":"true",onClick:function(e){a(e.currentTarget)},css:Object(C.c)(q())},o.a.createElement(S.a,{css:R,src:"",alt:"user-avatar"},"user")),o.a.createElement(T.a,{anchorEl:n,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(n),onClose:function(){a(null)},transitionDuration:0,keepMounted:!0},o.a.createElement(X,null,"user"),o.a.createElement(_.a,{onClick:function(){a(null),r(V()),c.push("/")}},"Logout")))};function K(e){return{type:z.f,payload:{isOpen:e}}}var Z=function(e){return e.responsive.mobileDrawerOpen.isOpen};function ee(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  a {\n    color: #888;\n    &:hover {\n      color: #333;\n    }\n  }\n  .active {\n    color: #333;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(u.a)(["\n  font-size: 1rem;\n  color: #333;\n"]);return te=function(){return e},e}function ne(){var e=Object(u.a)(["\n  min-height: ","px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  border-bottom: 1px solid #999;\n"]);return ne=function(){return e},e}var ae=g.a.div(ne(),50),re=g.a.div(te()),oe=g.a.div(ee()),ce=function(){var e=Object(l.c)();return o.a.createElement(ae,null,o.a.createElement(re,null,o.a.createElement(oe,null,o.a.createElement(A.a,{smUp:!0,implementation:"css"},o.a.createElement(j.a,{icon:w.a,onClick:function(){return e(K(!0))}})),o.a.createElement(A.a,{xsDown:!0,implementation:"css"},o.a.createElement(j.a,{icon:w.b})))),o.a.createElement(re,null,"DopeJob"),o.a.createElement(re,null,o.a.createElement(Q,null)))},ie=n(184),le=n(172);function ue(){var e=Object(u.a)(["\n  position: absolute;\n  left: 0px;\n  bottom: 2rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]);return ue=function(){return e},e}function se(){var e=Object(u.a)(["\n  display: 'block',\n  color: '#8e97d8',\n  fontWeight: 'bold',\n  padding: '6px 20px',\n  textDecoration: 'none'\n  &:hover {\n    color: #fff;\n    cursor: pointer;\n  }\n  &.active {\n    color: #fff;\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n"]);return me=function(){return e},e}function pe(){var e=Object(u.a)(["\n  height: 100%;\n  background-color: #666eee;\n"]);return pe=function(){return e},e}var he=g.a.div(pe()),de=g.a.div(me()),fe=g.a.div(se()),ge=g.a.div(ue()),be=function(){return o.a.createElement(he,null,o.a.createElement(de,null,"Logo"),o.a.createElement(le.a,{css:"\n          width: ".concat(120,"px;\n          margin-top: 40px;\n        ")},o.a.createElement(fe,null,o.a.createElement(d.c,{to:"/",exact:!0},"Consulter les annonces")),o.a.createElement(fe,null,o.a.createElement(d.c,{to:"/mon-compte/profil",exact:!0},"Profil")),o.a.createElement(fe,null,o.a.createElement(d.c,{to:"/mon-compte/vos-annonces",exact:!0},"Vos annonces")),o.a.createElement(fe,null,o.a.createElement(d.c,{to:"/mon-compte/notifications",exact:!0},"Notifications"))),o.a.createElement(ge,null))},Ee=function(){var e=Object(l.c)(),t=Boolean(Object(l.d)(Z));return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{smUp:!0,implementation:"css"},o.a.createElement(ie.a,{variant:"temporary",anchor:"left",open:t,onClose:function(){e(K(!1))},ModalProps:{keepMounted:!0}},o.a.createElement(be,null))),o.a.createElement(A.a,{xsDown:!0,implementation:"css"},o.a.createElement(ie.a,{anchor:"left",variant:"permanent"},o.a.createElement(be,null))))};function ve(){var e=Object(u.a)(["\n  position: absolute;\n  padding-bottom: 1rem;\n  width: 100%;\n  bottom: 0;\n  text-align: center;\n"]);return ve=function(){return e},e}function Oe(){var e=Object(u.a)(["\n  "," {\n    margin-left: ","px;\n  }\n"]);return Oe=function(){return e},e}function ye(){var e=Object(u.a)(["\n  font-size: 1rem;\n  color: #333;\n"]);return ye=function(){return e},e}function xe(){var e=Object(u.a)(["\n  margin-top: 0;\n  margin-bottom: 0.75rem;\n"]);return xe=function(){return e},e}function je(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return je=function(){return e},e}var we=g.a.div(je()),Ae=g.a.h1(xe()),ke=g.a.div(ye()),Se=g.a.div(Oe(),(function(e){return e.theme.breakpoints.up("sm")}),128),Te=g.a.div(ve()),_e=function(){var e=(new Date).getFullYear(),t={__html:"&copy; ".concat(e," DopeJob")};return o.a.createElement(Te,{dangerouslySetInnerHTML:t})},Ce=function(e){var t=e.children,n=Object(y.a)();return o.a.createElement(we,{theme:n},o.a.createElement(ke,null,o.a.createElement(Ae,null,"DopeJob")),o.a.createElement(ke,null,o.a.createElement(x.a,{component:d.b,to:"/signup",color:"inherit"},"Signup")),o.a.createElement(ke,null,o.a.createElement(x.a,{component:d.b,to:"/login",color:"inherit"},"Login")),o.a.createElement("div",null,t),o.a.createElement(_e,null))},Ne=function(e){var t=e.children,n=Object(y.a)();return o.a.createElement("div",null,o.a.createElement(Ee,null),o.a.createElement(Se,{theme:n},o.a.createElement(ce,null),t),o.a.createElement(_e,null))},De=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.children;return o.a.createElement("div",{id:"app"},t?o.a.createElement(Ne,null,n):o.a.createElement(Ce,null,n))}}]),n}(r.Component),Ie=Object(f.h)(Object(l.b)((function(e){return{isAuthenticated:!!e.auth.isAuthenticated}}))(De)),Re=n(27),Ue=n(22),Me=n.n(Ue),He=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.handleChange=function(t){e.setState(Object(Re.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.username,r=n.password;e.props.login(a,r)},e}return Object(m.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.props.isAuthenticated||this.props.reset()}},{key:"render",value:function(){var e=this.props,t=e.loading,n=e.isAuthenticated,a=this.state,r=a.username,c=a.password,i=null;if(this.props.statusText){var l=Me()({alert:!0,"alert-danger":0===this.props.statusText.indexOf("Authentication Error"),"alert-success":0!==this.props.statusText.indexOf("Authentication Error")});if(n)return o.a.createElement(f.a,{to:"/"});i=o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:l},this.props.statusText)))}return o.a.createElement("div",{className:"container login"},o.a.createElement("h1",null,"Connexion"),o.a.createElement("div",null,i,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"email",onChange:this.handleChange,value:r,name:"username",placeholder:"E-mail"}),o.a.createElement("input",{type:"password",onChange:this.handleChange,value:c,placeholder:"Mot de passe",name:"password"}),o.a.createElement("button",{type:"submit",loading:t.toString(),disabled:t||n},"Connexion")),o.a.createElement("div",null,"Vous n\u2019\xeates pas encore membre ? ",o.a.createElement(d.b,{className:"link",to:"/signup"},"Cr\xe9ez un compte gratuitement"))))}}]),n}(r.Component),ze=Object(l.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{login:function(t,n){return e(function(e,t){return function(n){n(W()),M.a.post("/rest-auth/login/",{email:e,password:t}).then(H).then((function(e){n(P(e.data.key)),n(B(3600))})).catch((function(e){return e&&"undefined"!==typeof e.response&&401===e.response.status?e.response.json().then((function(e){n(F(401,e.non_field_errors[0]))})):(e&&"undefined"!==typeof e.response&&e.response.status>=500?n(F(500,"A server error occurred while sending your data!")):n(F("Connection Error","An error occurred while sending your data!")),Promise.resolve())}))}}(t,n))},reset:function(){return e(L())}}}))(He),Pe=n(174),Be=n(141),Le=n(175),Fe=[{url:n(135),title:"Student",width:"100%",link:"/s/student"},{url:n(136),title:"Employee",width:"100%",link:"/s/employee"},{url:n(137),title:"Enterprise",width:"100%",link:"/s/enterprise"}],We=Object(Pe.a)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},image:(t={position:"relative",height:200},Object(Re.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(Re.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px ").concat(e.spacing(1)+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}})),Ve=function(){var e=We();return o.a.createElement("div",{className:"container signup"+e.root},o.a.createElement("h1",null,"Cr\xe9er un compte gratuitement"),Fe.map((function(t){return o.a.createElement(d.b,{to:t.link},o.a.createElement(Be.a,{focusRipple:!0,key:t.title,className:e.image,focusVisibleClassName:e.focusVisible,style:{width:t.width}},o.a.createElement("span",{className:e.imageSrc,style:{backgroundImage:"url(".concat(t.url,")")}}),o.a.createElement("span",{className:e.imageBackdrop}),o.a.createElement("span",{className:e.imageButton},o.a.createElement(Le.a,{component:"span",variant:"subtitle1",color:"inherit",className:e.imageTitle},t.title,o.a.createElement("span",{className:e.imageMarked})))))})))},Ge=n(32),Je=function(e){var t=e.type,n=e.placeHolder,a=e.autoComplete,r=e.leftIcon,c=e.rightIcon,i=e.onChange,l=e.value,u=e.onRightIconClick;return o.a.createElement("span",{className:"input"},o.a.createElement("i",{className:r,"aria-hidden":"true"}),o.a.createElement("input",{autoFocus:!0,type:t,name:n,autoComplete:a,placeholder:n,onChange:i,value:l}),o.a.createElement("i",{className:c,"aria-hidden":"true",onClick:u}))};Je.defaultProps={type:"text",placeHolder:"Input",autoComplete:"on"};var $e=Je;function qe(e){return{type:z.h,error:e}}function Ye(e){return{type:z.k,payload:{data:e}}}function Xe(e){return e.preventDefault(),{type:z.j,input_value:""}}function Qe(e){return e.stopPropagation(),e.preventDefault(),{type:z.i}}function Ke(e){return console.log(e),{type:z.l,payload:{input_value:e}}}function Ze(e,t){return function(n){n(Ke(e)),t&&e.length>2&&M.a.get("/api-job/annonce/?q=".concat(e)).then((function(e){n(Ye(e.data))})).catch((function(e){n(qe(e))}))}}function et(e){return function(t){t(Ke(e)),e.length>2&&M.a.get("/api-job/annonce/?q=".concat(e)).then((function(e){t(Ye(e.data))})).catch((function(e){t(qe(e))}))}}var tt=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSearchTextChange=function(t){var n=t.target.value,a=e.props.Search;e.searchDebounceTimer&&window.clearTimeout(e.searchDebounceTimer),a.searchTextChange(n,!1),e.searchDebounceTimer=window.setTimeout((function(){a.searchTextChange(n,!0)}),500)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.search,n=e.Search,a=t.input_value.length>0?"fa fa-times-thin":"";return o.a.createElement("div",null,o.a.createElement($e,{leftIcon:"fa fa-search",type:"text",placeHolder:"Search",rightIcon:a,onChange:this.onSearchTextChange,onRightIconClick:n.clearSearch,value:t.input_value||""}))}}]),n}(r.Component),nt=Object(l.b)((function(e){return{search:e.search}}),(function(e){return{Search:Object(Ge.b)(a,e)}}))(tt),at=n(173),rt=n(176);function ot(){var e=Object(u.a)(["\n        padding: 0.5rem;\n      "]);return ot=function(){return e},e}var ct=function(){return o.a.createElement(at.a,{unmountOnExit:!0,css:Object(C.c)(ot())},o.a.createElement(rt.a,null))},it=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.search,n=e.show,a=e.Search,r=t.data.map((function(e,t){return o.a.createElement("li",null,"item.name")}));return n?o.a.createElement("div",null,o.a.createElement("div",{className:"overlay-bg",onClick:a.clearSearch}),o.a.createElement("div",{className:"search-wrapper"},o.a.createElement("div",{className:"search-results"},r.length>0?r:t.loading?o.a.createElement(ct,null):o.a.createElement("div",null,"Pas de r\xe9sultats.")))):null}}]),n}(r.Component),lt=Object(l.b)((function(e){return{search:e.search}}),(function(e){return{Search:Object(Ge.b)(a,e)}}))(it),ut=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.search;return o.a.createElement("div",null,o.a.createElement("h2",null,"Search"),o.a.createElement("div",null,o.a.createElement(nt,null)),o.a.createElement(lt,{show:e.input_value.length>2}))}}]),n}(r.Component),st=Object(l.b)((function(e){return{search:e.search}}),(function(e){return{}}))(ut);var mt=function(){return o.a.createElement("div",null,"NoMatchPage")},pt=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Profile"))},ht=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Notifications"))},dt=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Vos Annonces"))},ft=n(10),gt=(n(69),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password1:"",password2:""},e.handleChange=function(t){e.setState(Object(Re.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e}return Object(m.a)(n,[{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=null;this.props.statusText&&(e=Me()({alert:!0,"alert-danger":0===this.props.statusText.indexOf("Authentication Error"),"alert-success":0!==this.props.statusText.indexOf("Authentication Error")}));var t=o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:e},this.props.statusText)));return o.a.createElement("div",{className:"container signup"},o.a.createElement("h1",null,"Cr\xe9er un compte gratuitement"),o.a.createElement(ft.d,null,o.a.createElement(ft.b,null,o.a.createElement(ft.a,null,"Etudiant"),o.a.createElement(ft.a,null,"Employ\xe9"),o.a.createElement(ft.a,null,"Entreprise")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 1")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 2")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 3"))),t)}}]),n}(r.Component)),bt=Object(l.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{signupStudent:function(t,n,a,r,o,c,i,l,u,s,m,p){return e(J(t,n,a,r,o,c,i,l,u,s,m,p))},signupEmployee:function(t,n,a,r,o,c,i,l,u,s,m,p){return e(G(t,n,a,r,o,c,i,l,u,s,m,p))},signupEnterprise:function(t,n,a,r,o,c,i,l,u,s,m,p,h,d){return e($(t,n,a,r,o,c,i,l,u,s,m,p,h,d))},reset:function(){return e(L())}}}))(gt),Et=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password1:"",password2:""},e.handleChange=function(t){e.setState(Object(Re.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e}return Object(m.a)(n,[{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=null;this.props.statusText&&(e=Me()({alert:!0,"alert-danger":0===this.props.statusText.indexOf("Authentication Error"),"alert-success":0!==this.props.statusText.indexOf("Authentication Error")}));var t=o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:e},this.props.statusText)));return o.a.createElement("div",{className:"container signup"},o.a.createElement("h1",null,"Cr\xe9er un compte gratuitement"),o.a.createElement(ft.d,null,o.a.createElement(ft.b,null,o.a.createElement(ft.a,null,"Etudiant"),o.a.createElement(ft.a,null,"Employ\xe9"),o.a.createElement(ft.a,null,"Entreprise")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 1")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 2")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 3"))),t)}}]),n}(r.Component),vt=Object(l.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{signupStudent:function(t,n,a,r,o,c,i,l,u,s,m,p){return e(J(t,n,a,r,o,c,i,l,u,s,m,p))},signupEmployee:function(t,n,a,r,o,c,i,l,u,s,m,p){return e(G(t,n,a,r,o,c,i,l,u,s,m,p))},signupEnterprise:function(t,n,a,r,o,c,i,l,u,s,m,p,h,d){return e($(t,n,a,r,o,c,i,l,u,s,m,p,h,d))},reset:function(){return e(L())}}}))(Et),Ot=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password1:"",password2:""},e.handleChange=function(t){e.setState(Object(Re.a)({},t.target.name,t.target.value))},e.handleSubmit=function(e){e.preventDefault()},e}return Object(m.a)(n,[{key:"componentWillUnmount",value:function(){this.props.reset()}},{key:"render",value:function(){var e=null;this.props.statusText&&(e=Me()({alert:!0,"alert-danger":0===this.props.statusText.indexOf("Authentication Error"),"alert-success":0!==this.props.statusText.indexOf("Authentication Error")}));var t=o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("div",{className:e},this.props.statusText)));return o.a.createElement("div",{className:"container signup"},o.a.createElement("h1",null,"Cr\xe9er un compte gratuitement"),o.a.createElement(ft.d,null,o.a.createElement(ft.b,null,o.a.createElement(ft.a,null,"Etudiant"),o.a.createElement(ft.a,null,"Employ\xe9"),o.a.createElement(ft.a,null,"Entreprise")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 1")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 2")),o.a.createElement(ft.c,null,o.a.createElement("h2",null,"Any content 3"))),t)}}]),n}(r.Component),yt=Object(l.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{signupStudent:function(t,n,a,r,o,c,i,l,u,s,m,p){return e(J(t,n,a,r,o,c,i,l,u,s,m,p))},signupEmployee:function(t,n,a,r,o,c,i,l,u,s,m,p){return e(G(t,n,a,r,o,c,i,l,u,s,m,p))},signupEnterprise:function(t,n,a,r,o,c,i,l,u,s,m,p,h,d){return e($(t,n,a,r,o,c,i,l,u,s,m,p,h,d))},reset:function(){return e(L())}}}))(Ot),xt=function(){return o.a.createElement(f.d,null,o.a.createElement(f.b,{exact:!0,path:"/login",component:ze}),o.a.createElement(f.b,{exact:!0,path:"/signup",component:Ve}),o.a.createElement(f.b,{exact:!0,path:"/s/enterprise",component:yt}),o.a.createElement(f.b,{exact:!0,path:"/s/employee",component:bt}),o.a.createElement(f.b,{exact:!0,path:"/s/student",component:vt}),o.a.createElement(f.b,{path:"/mon-compte"},o.a.createElement(f.b,{path:"/mon-compte/profil",component:pt}),o.a.createElement(f.b,{path:"/mon-compte/notifications",component:ht}),o.a.createElement(f.b,{path:"/mon-compte/vos-annonces",component:dt})),o.a.createElement(f.b,{exact:!0,path:"/",component:st}),o.a.createElement(f.b,{path:"*",component:mt}))},jt=n(177),wt=n(178);function At(){var e=Object(u.a)(["\n              .Mui-focusVisible {\n                box-shadow: 0 0 3px 2px ",";\n              }\n              textarea {\n                font-family: inherit;\n              }\n              .MuiAutocomplete-popper {\n                z-index: "," !important;\n              }\n            "]);return At=function(){return e},e}var kt=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(jt.a,{theme:v},o.a.createElement(wt.a,null),o.a.createElement(C.a,{styles:Object(C.c)(At(),"#98a2de",O)}),o.a.createElement(Ie,this.props,o.a.createElement(xt,null))))}}]),n}(r.Component),St=Object(l.b)((function(e){return{isAuthenticated:!!e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(localStorage.getItem("user"),void 0===t)e(V());else{var n=new Date(localStorage.getItem("expirationDate"));n<=new Date?e(V()):(e(P(t)),e(B((n.getTime()-(new Date).getTime())/1e3)))}}))}}}))(kt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Tt=n(95),_t=n.n(Tt)()(),Ct=o.a.createElement(l.a,{store:_t},o.a.createElement(St,null));i.a.render(Ct,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},139:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(96),r=n(32),o=n(47),c=n(7),i=n(45),l={token:null,isAuthenticated:!1,isAuthenticating:!1,statusText:null,loading:!1};var u={mobileDrawerOpen:!1};var s={loading:!0,input_value:"",is_load_more_visible:!1,show_mobile_search:!1,data:[]};var m=Object(r.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:return Object.assign({},e,{isAuthenticating:!0,statusText:null,loading:!0});case c.c:return Object.assign({},e,{isAuthenticating:!1,isAuthenticated:!0,token:t.payload.token,statusText:"You have been successfully logged in.",loading:!1});case c.a:return Object.assign({},e,{isAuthenticating:!1,isAuthenticated:!1,token:null,statusText:"Authentication Error: ".concat(t.payload.status," - ").concat(t.payload.statusText),loading:!1});case c.e:return Object.assign({},e,{isAuthenticated:!1,token:null,statusText:null});case c.d:return Object.assign({},e,{isAuthenticated:!1,token:null,statusText:"You have been successfully logged out."});default:return e}},responsive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.f:return Object.assign({},e,{mobileDrawerOpen:t.payload});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case c.l:return Object.assign({},e,{loading:!0,input_value:t.payload.input_value});case c.k:return Object.assign({},e,{data:t.payload.data,loading:!1});case c.g:return Object.assign({},e,{data:e.data.concat(t.payload.data),loading:!1});case c.h:return Object.assign({},e,{loading:!0});case c.j:return Object.assign({},e,Object(i.a)(Object(i.a)({},s),{},{show_mobile_search:!1,input_value:t.payload.input_value}));case c.i:return Object.assign({},e,{show_mobile_search:!0});case"@@router/LOCATION_CHANGE":return Object(i.a)({},s);default:return e}},routing:o.routerReducer});function p(e,t){var n=Object(o.routerMiddleware)(t),c=Object(r.a)(a.a,n);return Object(r.d)(m,e,c)}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return l})),n.d(t,"i",(function(){return u})),n.d(t,"l",(function(){return s})),n.d(t,"k",(function(){return m})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return h})),n.d(t,"j",(function(){return d}));var a="AUTH_LOGIN_USER_REQUEST",r="AUTH_LOGIN_USER_FAILURE",o="AUTH_LOGIN_USER_SUCCESS",c="AUTH_LOGOUT_USER",i="RESET_AUTH_LOGIN_USER_FAILURE",l="RESPONSIVE_DRAWER_OPEN",u="SEARCH_MOBILE_OPEN",s="SEARCH_TEXT_CHANGE",m="SEARCH_SET",p="SEARCH_APPEND",h="SEARCH_LOADER_STATE",d="SEARCH_RESET"},95:function(e,t,n){e.exports=n(139)}},[[104,1,2]]]);
//# sourceMappingURL=main.c7f7caa9.chunk.js.map