webpackJsonp([1,2],[,,,,,,function(t,e,n){"use strict";var o=n(1),s=n(133),a=n(118),c=n.n(a),i=n(121),r=n.n(i),u=n(123),l=n.n(u),p=n(122),f=n.n(p);o.default.use(s.a),e.a=new s.a({routes:[{path:"/",component:c.a},{path:"/sign_in",name:"Users.sign_in",component:c.a},{path:"/posts",name:"Posts.index",component:r.a},{path:"/posts/new",name:"Posts.new",component:f.a},{path:"/posts/:id",name:"Posts.show",component:l.a}]})},,,,,,function(t,e,n){"use strict";var o=n(1);e.a={getPosts:function(t,e){o.default.$http.get("/posts.json").then(function(e){t(e.data)}).catch(function(t){e(t)})},getPost:function(t,e,n){o.default.$http.get("/posts/"+t+".json").then(function(t){e(t.data)}).catch(function(t){n(t)})},createPost:function(t,e,n){var s={post:t};o.default.$http.post("/posts.json",s).then(function(t){e(t.data)}).catch(function(t){n(t)})}}},,,,,,,function(t,e,n){"use strict";var o=n(1),s=n(135),a=n(6);o.default.use(s.a);var c={auth:!1},i={login:function(t){console.log("mutations login"),t.auth=!0,a.a.push({name:"Posts.index"})},logout:function(t){console.log("mutations logout"),t.auth=!1,a.a.push({name:"Users.sign_in"})}},r={login:function(t){return(0,t.commit)("login")},logout:function(t){return(0,t.commit)("logout")}},u={loggedIn:function(t){return t.auth}};e.a=new s.a.Store({state:c,getters:u,actions:r,mutations:i})},,,,,,,function(t,e,n){"use strict";var o=n(1);e.a={getComments:function(t,e,n){o.default.$http.get("/posts/"+t+"/comments.json").then(function(t){e(t.data)}).catch(function(t){console.log(t)})},createComment:function(t,e,n,s){var a={comment:{content:e}};o.default.$http.post("/posts/"+t+"/comments.json",a).then(function(t){n(t.data)}).catch(function(t){console.log(t)})}}},function(t,e,n){"use strict";var o=n(1),s=n(19);e.a={login:function(t,e,n){console.log(s.a);var a={user:{email:t,password:e}};o.default.$http.post("/users/api_sign_in.json",a).then(function(t){s.a.dispatch("login"),n(t.data)}).catch(function(t){s.a.dispatch("logout")})},logout:function(t){console.log(s.a),o.default.$http.delete("/users/api_sign_out.json").then(function(e){s.a.dispatch("logout"),t(e.data)}).catch(function(t){s.a.dispatch("logout")})},checkLoggedIn:function(){o.default.$http.get("/users/check_signed_in.json").then(function(t){s.a.dispatch("login")}).catch(function(t){s.a.dispatch("logout")})}}},,,,,,,,function(t,e,n){n(107);var o=n(4)(n(88),n(124),null,null);t.exports=o.exports},,,function(t,e){},function(t,e){},function(t,e,n){n(112);var o=n(4)(n(81),n(129),null,null);t.exports=o.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",components:{Iccs340LeftSidenav:n(117)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(6),s=n(27);e.default={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t,e){console.log(t,e)},index:function(){o.a.push({name:"Posts.index"})},newPost:function(){o.a.push({name:"Posts.new"})},logout:function(){s.a.logout(),o.a.push({name:"Users.sign_in"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),s=n(6);e.default={name:"sign-in",data:function(){return{email:"",password:""}},methods:{login:function(){console.log("methods.login"),o.a.login(this.email,this.password,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:{comment:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),s=n(6);e.default={name:"new-comment",data:function(){return{comment:{content:""}}},props:{post:{type:Object,required:!1,default:{}}},methods:{createComment:function(){var t=this.post.id,e=this.comment.content;this.comment.content="",o.a.createComment(t,e,function(e){console.log(e),s.a.push({name:"Posts.show",params:{post_id:t},query:{t:new Date}})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12);e.default={name:"posts",components:{Iccs340Post:n(35)},data:function(){return{posts:null,error:null}},beforeRouteEnter:function(t,e,n){o.a.getPosts(function(t){n(function(e){e.posts=t})})},watch:{$route:function(){var t=this;o.a.getPosts(function(e){t.posts=e})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),s=n(6);e.default={name:"new-post",data:function(){return{post:{name:"",content:""}}},methods:{createPost:function(){o.a.createPost(this.post,function(t){s.a.push({name:"Posts.index"})})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"post",props:{post:{type:Object,required:!1,default:{}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(12),s=n(26);e.default={name:"post",components:{Iccs340Post:n(35),Iccs340Comment:n(119),Iccs340NewComment:n(120)},data:function(){return{post:{},comments:[],error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;o.a.getPost(this.$route.params.id,function(e){t.post=e,s.a.getComments(e.id,function(e){t.comments=e})})}}}},,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(111);var o=n(4)(n(82),n(128),null,null);t.exports=o.exports},function(t,e,n){n(108);var o=n(4)(n(83),n(125),"data-v-5cb97a65",null);t.exports=o.exports},function(t,e,n){n(115);var o=n(4)(n(84),n(132),"data-v-f2859632",null);t.exports=o.exports},function(t,e,n){n(110);var o=n(4)(n(85),n(127),"data-v-7122c0b0",null);t.exports=o.exports},function(t,e,n){n(114);var o=n(4)(n(86),n(131),null,null);t.exports=o.exports},function(t,e,n){n(113);var o=n(4)(n(87),n(130),null,null);t.exports=o.exports},function(t,e,n){n(109);var o=n(4)(n(89),n(126),null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("span",[t._v(t._s(t.post.name))]),t._v(" "),n("p",[t._v(t._s(t.post.content))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-in"},[n("h1",[t._v("Sign In")]),t._v(" "),n("label",[t._v("Email")]),t._v(" "),n("el-input",{attrs:{placeholder:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("label",[t._v("Password")]),t._v(" "),n("el-input",{attrs:{placeholder:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.login(e)}}},[t._v("Login")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("h2",[t._v("Post Content")]),t._v(" "),n("iccs340-post",{attrs:{post:t.post}}),t._v(" "),n("h2",[t._v("Comment Section")]),t._v(" "),t._l(t.comments,function(t){return n("div",[n("el-card",{staticClass:"box-card"},[n("iccs340-comment",{attrs:{comment:t}})],1)],1)}),t._v(" "),n("iccs340-new-comment",{attrs:{post:t.post}})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-post"},[n("br"),n("br"),t._v(" "),n("h1",[t._v("Add Comment")]),t._v(" "),n("el-input",{attrs:{placeholder:""},model:{value:t.comment.content,callback:function(e){t.comment.content=e},expression:"comment.content"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.createComment(e)}}},[t._v("Save")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[n("el-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[t._v("Menu")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"},nativeOn:{click:function(e){t.index(e)}}},[t._v("Index")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"},nativeOn:{click:function(e){t.newPost(e)}}},[t._v("New Post")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"},nativeOn:{click:function(e){t.logout(e)}}},[t._v("Logout")])],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("iccs340-left-sidenav"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-post"},[n("h1",[t._v("New Post")]),t._v(" "),n("label",[t._v("Name")]),t._v(" "),n("el-input",{attrs:{placeholder:""},model:{value:t.post.name,callback:function(e){t.post.name=e},expression:"post.name"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("label",[t._v("Content")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:2,placeholder:""},model:{value:t.post.content,callback:function(e){t.post.content=e},expression:"post.content"}}),t._v(" "),n("br"),n("br"),t._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.createPost(e)}}},[t._v("Save")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-col",{attrs:{spam:3,offset:3}},t._l(t.posts,function(t){return n("div",{key:t.id,attrs:{id:"card"}},[n("el-card",[n("router-link",{attrs:{to:{name:"Posts.show",params:{id:t.id}}}},[n("iccs340-post",{attrs:{post:t}})],1)],1)],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[n("md-list-item",[n("md-avatar",[n("md-icon",[t._v("account_circle")])],1),t._v(" "),n("div",{staticClass:"md-list-text-container"},[n("span",[t._v(t._s(t.comment.user.email))]),t._v(" "),n("span",[t._v(t._s(t.comment.content))])])],1)],1)},staticRenderFns:[]}},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),s=n(40),a=n.n(s),c=n(6),i=n(19),r=n(41),u=n.n(r),l=n(39),p=(n.n(l),n(37)),f=n.n(p),d=n(38),m=(n.n(d),n(36)),v=n.n(m);o.default.use(f.a),o.default.use(u.a),o.default.$http=v.a,v.a.defaults.baseURL="https://arcane-hollows-91270.herokuapp.com/",v.a.defaults.headers.common.Accept="application/json",v.a.defaults.withCredentials=!0,o.default.config.productionTip=!1,new o.default({el:"#app",router:c.a,store:i.a,template:"<App/>",components:{App:a.a}})}],[137]);
//# sourceMappingURL=app.116a8c3e5c6ed723317a.js.map