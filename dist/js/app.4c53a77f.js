(function(e){function t(t){for(var n,i,o=t[0],l=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0228":function(e,t,a){"use strict";var n=a("4ffd"),r=a.n(n);r.a},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0442":function(e,t,a){"use strict";var n=a("26dd"),r=a.n(n);r.a},"0acb":function(e,t,a){},"11be":function(e,t,a){},"12d7":function(e,t,a){"use strict";var n=a("c486"),r=a.n(n);r.a},"14ef":function(e,t,a){"use strict";var n=a("b2f3"),r=a.n(n);r.a},"208c":function(e,t,a){},"25fe":function(e,t,a){},"26dd":function(e,t,a){},"4ffd":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i=(a("0acb"),a("b84c"),a("f60b"),{name:"app",components:{}}),o=i,l=(a("034f"),a("2877")),u=Object(l["a"])(o,r,s,!1,null,null,null),c=u.exports,d=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"loginWrapper"},[a("h1",[e._v("登录管理系统")]),a("div",{staticClass:"formBox"},[a("el-input",{staticClass:"inputBox",attrs:{placeholder:"用户名"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),a("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("el-button",{staticClass:"loginBtn",attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)])])},p=[],m=(a("96cf"),a("3b8d")),h=a("bc3a"),v=a.n(h),g="119.27.174.34",b=v.a.create({baseURL:"http://".concat(g,":").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).PORT||3e3),timeout:2e4,withCredentials:!0,transformResponse:function(e){return e=JSON.parse(e),0===e.code?e.data:{code:-1,msg:e.msg}}}),y=b,_={url:"/users/Mlogin"},x={getUserList:"/manage/user/getUserList",searchUser:"/manage/user/searchUser",getUserStudyList:"/userStudy/userStudyList"},w={getCourseList:"/manage/course/courseList",getCourseDetail:"/course/courseDetail",getCourseVideo:"/course/courseVideoList"},I={addCourse:"/manage/course/addCourse",updateCourse:"/manage/course/updateCourse",delCourse:"/manage/course/delCourse"},C={addCourseVideo:"/manage/course/addCourseVideo",updateCourseVideo:"/manage/course/updateCourseVideo"},k={name:"login",components:{},data:function(){return{user:"",password:""}},computed:{},methods:{login:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t={},t.user=this.user,t.password=this.password,e.next=5,y.post(_.url,t);case 5:a=e.sent,a=a.data,0===a.code?this.$router.push({path:"/manage"}):this.$message.error("错误：".concat(a.msg));case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},$=k,S=(a("7b78"),Object(l["a"])($,f,p,!1,null,"2d41dafe",null)),D=S.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"manage"},[n("el-container",[n("el-header",[n("img",{staticClass:"logo",attrs:{src:a("9b19"),alt:""}}),n("h3",[e._v("数字媒体在线学习平台-后台管理系统")])]),n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("Layout")],1),n("el-main",[n("router-view")],1)],1)],1)],1)},V=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout"},[a("el-menu",[a("el-menu-item",{attrs:{index:"1"},on:{click:function(t){e.routerChange("user")}}},[a("i",{staticClass:"el-icon-tickets"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("用户信息")])]),a("el-menu-item",{attrs:{index:"2"},on:{click:function(t){e.routerChange("courses")}}},[a("i",{staticClass:"el-icon-edit-outline"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("课程信息")])])],1)],1)},L=[],R={name:"layout",methods:{routerChange:function(e){this.$router.push({path:"/manage/".concat(e)})}}},T=R,P=(a("fe24"),Object(l["a"])(T,j,L,!1,null,"203a0298",null)),q=P.exports,N={name:"manage",components:{Layout:q},data:function(){return{}},computed:{},methods:{}},E=N,B=(a("68c9"),Object(l["a"])(E,O,V,!1,null,"58d10956",null)),U=B.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("欢迎登录后台管理系统")])},F=[],A={name:"home"},J=A,M=(a("d67d"),Object(l["a"])(J,z,F,!1,null,"20d74122",null)),W=M.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("h2",[e._v("用户信息")]),a("div",{staticClass:"searchArea"},[a("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{prop:"searchType",rules:[{required:!0,message:"请选择一个搜索类型"}]}},[a("el-select",{staticClass:"searchType",attrs:{placeholder:"搜索类型"},model:{value:e.formInline.searchType,callback:function(t){e.$set(e.formInline,"searchType",t)},expression:"formInline.searchType"}},[a("el-option",{attrs:{label:"id",value:"_id"}}),a("el-option",{attrs:{label:"姓名",value:"name"}}),a("el-option",{attrs:{label:"邮箱",value:"email"}})],1)],1),a("el-form-item",{attrs:{prop:"searchVal",rules:[{required:!0,message:"搜索值不能为空"}]}},[a("el-input",{staticClass:"searchInput",attrs:{placeholder:"搜索值"},model:{value:e.formInline.searchVal,callback:function(t){e.$set(e.formInline,"searchVal",t)},expression:"formInline.searchVal"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSearch("formInline")}}},[e._v("搜索")]),a("el-button",{on:{click:function(t){e.resetForm("formInline")}}},[e._v("重置")])],1)],1)],1),a("div",{staticClass:"tableArea"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"_id",label:"id"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{fixed:"right",label:"已学课程",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.lookStudyList(t.row)}}},[e._v("查看")])]}}])})],1)],1),a("el-dialog",{attrs:{title:"学习目录",visible:e.showStudyListDialog},on:{"update:visible":function(t){e.showStudyListDialog=t},closed:e.handleClose}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.studyList}},[a("el-table-column",{attrs:{property:"courseId",label:"课程id"}}),a("el-table-column",{attrs:{property:"name",label:"课程名"}}),a("el-table-column",{attrs:{label:"当前学习章节"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.progress[0])+"-"+e._s(t.row.progress[1])+". "+e._s(t.row.progressName))])]}}])})],1)],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:e.totalPage},on:{"current-change":e.changePage}})],1)],1)},H=[],K=(a("6b54"),a("cebc")),Q={name:"user",data:function(){return{pageInfo:{page:1,pageItem:20},totalPage:10,tableData:[],studyList:[],loading:!0,showStudyListDialog:!1,formInline:{searchVal:"",searchType:""}}},methods:{getUserList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.get(x.getUserList,{params:Object(K["a"])({},t)});case 2:a=e.sent,a=a.data,0===a.code&&(this.totalPage=10*a.data.totalPage,this.tableData=a.data.list);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),lookStudyList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.showStudyListDialog=!0,e.next=3,y.get(x.getUserStudyList,{params:{userId:t._id}});case 3:a=e.sent,a=a.data,0===a.code&&(this.studyList=a.data,this.loading=!1);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),handleClose:function(){this.loading=!0,this.studyList=[]},handleSearch:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(a){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=10;break}return e.next=3,y.get(x.searchUser,{params:Object(K["a"])({},t.pageInfo,t.formInline)});case 3:n=e.sent,n=n.data.data,t.totalPage=10*n.totalPage,r="[object Array]"===Object.prototype.toString.call(n.result)?n.result:n.result?[n.result]:null,t.tableData=r,e.next=11;break;case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()},changePage:function(e){this.pageInfo.page=e,""!==this.formInline.searchVal&&""!==this.formInline.searchType?this.handleSearch("formInline"):this.getUserList(this.pageInfo)}},mounted:function(){this.getUserList(this.pageInfo)}},X=Q,Y=(a("14ef"),Object(l["a"])(X,G,H,!1,null,"0b90c7a1",null)),Z=Y.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"courses"},[a("h2",[e._v("课程信息")]),a("div",{staticClass:"searchArea"},[a("search-form",{on:{beforeSearch:e.beforeSearch}})],1),a("div",{staticClass:"addNewCourseArea"},[a("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){e.toStudyList()}}},[e._v("添加新课程")])],1),a("div",{staticClass:"tableArea"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"_id",label:"id"}}),a("el-table-column",{attrs:{prop:"name",label:"课程名"}}),a("el-table-column",{attrs:{prop:"type",label:"课程类型"}}),a("el-table-column",{attrs:{prop:"level",label:"课程难度"}}),a("el-table-column",{attrs:{prop:"time",label:"学习时间 /小时"}}),a("el-table-column",{attrs:{fixed:"right",label:"是否添加课程视频",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.videos?"是":"否"))])]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"详情",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.toStudyList(t.row)}}},[e._v("查看")])]}}])})],1)],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:e.totalPage},on:{"current-change":e.changePage}})],1)])},te=[],ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"searchForm"},[a("el-form",{ref:"formInline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"id",prop:"id"}},[a("el-input",{model:{value:e.formInline.id,callback:function(t){e.$set(e.formInline,"id",t)},expression:"formInline.id"}})],1),a("el-form-item",{attrs:{label:"课程名",prop:"name"}},[a("el-input",{model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),a("el-form-item",{attrs:{label:"课程类型",prop:"type"}},[a("el-select",{staticClass:"searchSelect",model:{value:e.formInline.type,callback:function(t){e.$set(e.formInline,"type",t)},expression:"formInline.type"}},[a("el-option",{attrs:{label:"图像处理",value:"图像处理"}}),a("el-option",{attrs:{label:"音频处理",value:"音频处理"}})],1)],1),a("el-form-item",{attrs:{label:"课程难度",prop:"level"}},[a("el-select",{staticClass:"searchSelect",model:{value:e.formInline.level,callback:function(t){e.$set(e.formInline,"level",t)},expression:"formInline.level"}},[a("el-option",{attrs:{label:"入门",value:"入门"}}),a("el-option",{attrs:{label:"初级",value:"初级"}}),a("el-option",{attrs:{label:"中级",value:"中级"}}),a("el-option",{attrs:{label:"高级",value:"高级"}})],1)],1),a("el-form-item",{attrs:{label:"是否添加课程视频",prop:"videos"}},[a("el-select",{staticClass:"searchSelect",model:{value:e.formInline.videos,callback:function(t){e.$set(e.formInline,"videos",t)},expression:"formInline.videos"}},[a("el-option",{attrs:{label:"是",value:!0}}),a("el-option",{attrs:{label:"否",value:!1}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSearch("formInline")}}},[e._v("搜索")]),a("el-button",{on:{click:function(t){e.resetForm("formInline")}}},[e._v("重置")])],1)],1)],1)},ne=[],re={name:"searchForm",data:function(){return{formInline:{id:"",name:"",type:"",level:"",videos:null}}},methods:{switchSearchParams:function(){var e={};for(var t in this.formInline)""!==this.formInline[t]&&null!==this.formInline[t]&&(e[t]=this.formInline[t]);return e},handleSearch:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(a){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}n=t.switchSearchParams(),t.$emit("beforeSearch",n),e.next=6;break;case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},resetForm:function(e){this.$refs[e].resetFields()}}},se=re,ie=(a("0442"),Object(l["a"])(se,ae,ne,!1,null,"0cbd85e0",null)),oe=ie.exports,le={name:"courses",components:{SearchForm:oe},data:function(){return{pageInfo:{page:1,pageItem:20},totalPage:10,tableData:[],loading:!0,formInline:{searchVal:"",searchType:""}}},methods:{beforeSearch:function(e){this.pageInfo=Object(K["a"])({page:1,pageItem:20},e),this.getCourseList(this.pageInfo)},getCourseList:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.get(w.getCourseList,{params:Object(K["a"])({},t)});case 2:a=e.sent,a=a.data,0===a.code&&(this.totalPage=10*a.data.totalPage,this.tableData=a.data.list,this.loading=!1);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),toStudyList:function(e){var t={};e&&(t={_id:e._id}),this.$router.push({path:"/manage/courseDetail",query:t})},changePage:function(e){this.pageInfo.page=e,this.getCourseList(this.pageInfo)}},mounted:function(){this.getCourseList(this.pageInfo)}},ue=le,ce=(a("12d7"),Object(l["a"])(ue,ee,te,!1,null,"322af096",null)),de=ce.exports,fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"courseDetail"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-arrow-left"},on:{click:e.turnBack}},[e._v("返回")]),a("div",{staticClass:"courseDetailWrapper"},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"formInline",attrs:{rules:e.rules,"label-position":"right","label-width":"140px",model:e.formInline}},[this.$route.query._id?a("el-form-item",{attrs:{label:"课程id：",prop:"_id"}},[a("span",[e._v(e._s(e.formInline._id))])]):e._e(),a("el-form-item",{attrs:{label:"课程名称：",prop:"name"}},[a("el-input",{staticClass:"inputStyle",attrs:{placeholder:"不超过10字",maxlength:"10"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),a("el-form-item",{attrs:{label:"课程类型：",prop:"type"}},[a("el-select",{model:{value:e.formInline.type,callback:function(t){e.$set(e.formInline,"type",t)},expression:"formInline.type"}},[a("el-option",{attrs:{label:"图像处理",value:"图像处理"}}),a("el-option",{attrs:{label:"音频处理",value:"音频处理"}})],1)],1),a("el-form-item",{attrs:{label:"课程难度：",prop:"level"}},[a("el-select",{model:{value:e.formInline.level,callback:function(t){e.$set(e.formInline,"level",t)},expression:"formInline.level"}},[a("el-option",{attrs:{label:"入门",value:"入门"}}),a("el-option",{attrs:{label:"初级",value:"初级"}}),a("el-option",{attrs:{label:"中级",value:"中级"}}),a("el-option",{attrs:{label:"高级",value:"高级"}})],1)],1),a("el-form-item",{attrs:{label:"课程简介：",prop:"intro"}},[a("el-input",{staticClass:"inputStyle",attrs:{type:"textarea",autosize:{minRows:2,maxRows:3},placeholder:"简介最多50字",maxlength:"50"},model:{value:e.formInline.intro,callback:function(t){e.$set(e.formInline,"intro",t)},expression:"formInline.intro"}})],1),a("el-form-item",{attrs:{label:"详情内容：",prop:"detail"}},[a("el-input",{staticClass:"inputStyle",attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"详情不限字数"},model:{value:e.formInline.detail,callback:function(t){e.$set(e.formInline,"detail",t)},expression:"formInline.detail"}})],1),a("el-form-item",{attrs:{label:"学习时间：",prop:"time"}},[a("el-input-number",{attrs:{precision:2,step:1,max:100},model:{value:e.formInline.time,callback:function(t){e.$set(e.formInline,"time",t)},expression:"formInline.time"}}),a("span",{staticClass:"inputSuffix"},[e._v("小时")])],1),a("el-form-item",{attrs:{label:"课程封面：",prop:"cover"}},[a("el-input",{staticClass:"inputStyle",attrs:{placeholder:"填入封面地址"},model:{value:e.formInline.cover,callback:function(t){e.$set(e.formInline,"cover",t)},expression:"formInline.cover"}})],1),this.$route.query._id?a("el-form-item",{attrs:{label:"是否添加课程视频：",prop:"videos"}},[a("span",[e._v(e._s(e.formInline.videos?"是":"否"))]),a("el-button",{staticClass:"courseVideoBtn",attrs:{type:"text"},on:{click:e.toCourseVideo}},[e._v(e._s(e.formInline.video?"修改课程视频":"添加课程视频"))])],1):e._e(),this.$route.query._id?a("el-form-item",[a("el-button",{attrs:{type:"success"},on:{click:function(t){e.updateCourse("formInline")}}},[e._v("更新课程")]),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.delDialogVisible=!0}}},[e._v("删除课程")])],1):a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addNewCourse("formInline")}}},[e._v("添加课程")]),a("el-button",{on:{click:function(t){e.resetForm("formInline")}}},[e._v("重置内容")])],1)],1)],1),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"确定删除该课程吗",visible:e.delDialogVisible,width:"30%"},on:{"update:visible":function(t){e.delDialogVisible=t}}},[a("span",[e._v("此操作不可逆")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.delCourse}},[e._v("确 定")])],1)])],1)},pe=[],me=(a("7f7f"),a("f499")),he=a.n(me),ve={name:"courseDetail",components:{},data:function(){var e=function(e,t,a){0===t?a(new Error("预计学习时间不能为0")):a()};return{loading:!1,delDialogVisible:!1,formInline:{name:"",type:"",level:"",intro:"",detail:"",time:0,cover:"",videos:null,_id:""},rules:{name:[{required:!0,message:"请输入课程名称",trigger:"change"}],type:[{required:!0,message:"请选择课程分类",trigger:"change"}],level:[{required:!0,message:"请选择课程难度",trigger:"change"}],intro:[{required:!0,message:"请输入课程简介",trigger:"change"}],detail:[{required:!0,message:"请输入课程详细介绍",trigger:"change"}],time:[{validator:e,trigger:"change"}],cover:[{required:!0,message:"请填写封面地址",trigger:"blur"}]}}},methods:{turnBack:function(){this.$router.push({path:"/manage/courses"})},resetForm:function(e){this.$refs[e].resetFields()},addNewCourse:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}return n=JSON.parse(he()(a.formInline)),delete n.videos,delete n._id,e.next=6,y.post(I.addCourse,n);case 6:r=e.sent,r=r.data,0===r.code?a.$message.success(r.msg):a.$message.error(r.msg),e.next=12;break;case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updateCourse:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return n=JSON.parse(he()(a.formInline)),delete n.videos,delete n._id,delete n.__v,e.next=7,y.post(I.updateCourse,n);case 7:r=e.sent,r=r.data,0===r.code?a.$message.success(r.msg):a.$message.error(r.msg),e.next=13;break;case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),delCourse:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t,a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,y.post(I.delCourse,{_id:this.formInline._id});case 3:t=e.sent,t=t.data,0===t.code?(this.$message.success("".concat(t.msg,", 3秒后返回上一页"),5),setTimeout(function(){a.$router.push({path:"/manage/courses"})},3e3)):this.$message.error(t.msg);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getCourseDetail:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.get(w.getCourseDetail,{params:{_id:t}});case 2:a=e.sent,a=a.data,0===a.code&&(this.formInline=a.data,this.loading=!1);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),toCourseVideo:function(){var e={_id:this.formInline._id,name:this.formInline.name,videos:this.formInline.videos};this.$router.push({path:"/manage/courseVideos",query:e})}},mounted:function(){this.$route.query._id&&(this.loading=!0,this.getCourseDetail(this.$route.query._id))}},ge=ve,be=(a("898b"),Object(l["a"])(ge,fe,pe,!1,null,"2e2afcaa",null)),ye=be.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"courseVideos"},[a("el-button-group",[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-arrow-left"},on:{click:function(t){e.turnBack()}}},[e._v("返回")]),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-document"},on:{click:function(t){e.turnBack("courses")}}},[e._v("首页")])],1),a("div",{staticClass:"formBox"},[a("p",{staticClass:"formItem",staticStyle:{border:"0"}},[e._v("课程名："+e._s(e.name))]),a("p",{staticClass:"formItem"},[e._v("课程每章节视频：")]),a("video-tree",{ref:"videoTree",on:{postVideoData:e.postVideoData}}),a("div",{staticClass:"formBtn formItem"},[!0===e.videos||"true"===e.videos?a("el-button",{attrs:{type:"success"},on:{click:function(t){e.getVideosData()}}},[e._v("更新")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.getVideosData()}}},[e._v("提交")])],1)],1)],1)},xe=[],we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"videoTree"},[a("div",{staticClass:"clear-float"},[a("el-button",{staticClass:"appendCap",attrs:{size:"mini",plain:""},on:{click:function(t){e.appendCap()}}},[e._v("添加章节")])],1),a("el-tree",{staticClass:"treeStyle",attrs:{data:e.videoTreeData,"node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node,r=t.data;return a("span",{staticClass:"custom-tree-node"},[a("span",[e._v(e._s(-1===n.label.indexOf("-")?"第"+n.label+"章":n.label+"."))]),a("el-input",{staticClass:"treeInput",attrs:{size:"mini",placeholder:"请输入标题"},model:{value:r.title,callback:function(t){e.$set(r,"title",t)},expression:"data.title"}}),void 0!==r.src?a("el-input",{staticClass:"treeInput",attrs:{size:"mini",placeholder:"请输入视频地址"},model:{value:r.src,callback:function(t){e.$set(r,"src",t)},expression:"data.src"}}):e._e(),a("span",{staticClass:"treeBtn"},[void 0===r.src?a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(r)}}},[e._v("添加子节")]):e._e(),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(n,r)}}},[e._v("删除本行")])],1)],1)}}])})],1)},Ie=[],Ce=a("5d73"),ke=a.n(Ce),$e=(a("20d6"),a("c5f6"),1),Se={name:"videoTree",data:function(){return{videoTreeData:[]}},methods:{appendCap:function(){var e=(Number(this.videoTreeData.length)+1).toString(),t={id:$e++,label:e,title:"",children:[]};this.videoTreeData.push(t)},append:function(e){var t="".concat(e.label,"-").concat(Number(e.children.length)+1),a={id:$e++,label:t,title:"",src:""};e.children||this.$set(e,"children",[]),e.children.push(a)},remove:function(e,t){var a=e.parent,n=a.data.children||a.data,r=n.findIndex(function(e){return e.id===t.id});n.splice(r,1)},returnVideosData:function(e){var t=this.transVideosDataToParams(e);"string"===typeof t?this.$message.error(t):this.$emit("postVideoData",t)},transVideosDataToParams:function(e){var t=[],a=!0,n=!1,r=void 0;try{for(var s,i=ke()(this.videoTreeData);!(a=(s=i.next()).done);a=!0){var o=s.value,l=[];if(""===o.title)return"请填写章节名";if(!(o.children.length>0))return"请保证每一章都要有课程，否则删除对应章";var u=!0,c=!1,d=void 0;try{for(var f,p=ke()(o.children);!(u=(f=p.next()).done);u=!0){var m=f.value;if(""===m.title||""===m.src)return"请保证每一个输入框都有内容，否则删除对应课程";l.push({title:m.title.trim(),src:m.src})}}catch(v){c=!0,d=v}finally{try{u||null==p.return||p.return()}finally{if(c)throw d}}t.push({title:o.title.trim(),list:l})}}catch(v){n=!0,r=v}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}var h={name:e,videoList:t};return h},getVideoData:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.get(w.getCourseVideo,{params:{_id:this.$route.query._id}});case 2:t=e.sent,t=t.data,0===t.code?this.transParamsToVideosData(t.data.videoList):this.$message.error({message:"错误：".concat(t.msg),duration:7e3});case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),transParamsToVideosData:function(e){var t=[],a=0,n=0,r=!0,s=!1,i=void 0;try{for(var o,l=ke()(e);!(r=(o=l.next()).done);r=!0){var u=o.value,c=[];n+=1;var d=++a,f=0;if(u.list){var p=!0,m=!1,h=void 0;try{for(var v,g=ke()(u.list);!(p=(v=g.next()).done);p=!0){var b=v.value;c.push({id:++a,label:"".concat(n,"-").concat(++f),title:b.title,src:b.src})}}catch(y){m=!0,h=y}finally{try{p||null==g.return||g.return()}finally{if(m)throw h}}}t.push({id:d,label:n.toString(),title:u.title,children:c})}}catch(y){s=!0,i=y}finally{try{r||null==l.return||l.return()}finally{if(s)throw i}}$e=++a,this.videoTreeData=JSON.parse(he()(t))}},mounted:function(){if(!1===this.$route.query.videos||"false"===this.$route.query.videos){$e=3;var e=[{id:1,label:"1",title:"",children:[{id:2,label:"1-1",title:"",src:""}]}];this.videoTreeData=JSON.parse(he()(e))}else this.getVideoData()}},De=Se,Oe=(a("0228"),Object(l["a"])(De,we,Ie,!1,null,"617a792a",null)),Ve=Oe.exports,je={name:"courseVideos",components:{VideoTree:Ve},data:function(){return{name:"",videos:!1}},methods:{turnBack:function(e){e?this.$router.push({path:"/manage/".concat(e)}):this.$router.go(-1)},getVideosData:function(){this.$refs.videoTree.returnVideosData(this.name)},postVideoData:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var a,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=!1===this.videos||"false"===this.videos?C.addCourseVideo:C.updateCourseVideo,e.next=3,y.post(a,t);case 3:n=e.sent,n=n.data,0===n.code?this.$message.success(n.msg):this.$message.error(n.msg);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){this.name=this.$route.query.name,this.videos=this.$route.query.videos}},Le=je,Re=(a("a553"),Object(l["a"])(Le,_e,xe,!1,null,"2ff27bc2",null)),Te=Re.exports;n["default"].use(d["a"]);var Pe=new d["a"]({base:"/",routes:[{path:"/",name:"login",component:D},{path:"/manage",name:"manage",component:U,children:[{path:"",name:"m_home",component:W},{path:"user",name:"m_user",component:Z},{path:"courses",name:"m_courses",component:de},{path:"courseDetail",name:"m_courseDetail",component:ye},{path:"courseVideos",name:"m_courseVideos",component:Te}]}]}),qe=a("2f62");n["default"].use(qe["a"]);var Ne=new qe["a"].Store({state:{},mutations:{},actions:{}}),Ee=(a("0fb7"),a("450d"),a("f529")),Be=a.n(Ee),Ue=(a("5e32"),a("6721")),ze=a.n(Ue),Fe=(a("eca7"),a("3787")),Ae=a.n(Fe),Je=(a("425f"),a("4105")),Me=a.n(Je),We=(a("6611"),a("e772")),Ge=a.n(We),He=(a("1f1a"),a("4e4b")),Ke=a.n(He),Qe=(a("be4f"),a("896a")),Xe=a.n(Qe),Ye=(a("a7cc"),a("df33")),Ze=a.n(Ye),et=(a("672e"),a("101e")),tt=a.n(et),at=(a("5466"),a("ecdf")),nt=a.n(at),rt=(a("38a0"),a("ad41")),st=a.n(rt),it=(a("de31"),a("c69e")),ot=a.n(it),lt=(a("a769"),a("5cc3")),ut=a.n(lt),ct=(a("a673"),a("7b31")),dt=a.n(ct),ft=(a("adec"),a("3d2d")),pt=a.n(ft),mt=(a("34db"),a("3803")),ht=a.n(mt),vt=(a("8bd8"),a("4cb2")),gt=a.n(vt),bt=(a("ce18"),a("f58e")),yt=a.n(bt),_t=(a("4ca3"),a("443e")),xt=a.n(_t),wt=(a("ae26"),a("845f")),It=a.n(wt),Ct=(a("1951"),a("eedf")),kt=a.n(Ct),$t=(a("9d4c"),a("e450")),St=a.n($t),Dt=(a("10cb"),a("f3ad")),Ot=a.n(Dt);n["default"].use(Ot.a),n["default"].use(St.a),n["default"].use(kt.a),n["default"].use(It.a),n["default"].use(xt.a),n["default"].use(yt.a),n["default"].use(gt.a),n["default"].use(ht.a),n["default"].use(pt.a),n["default"].use(dt.a),n["default"].use(ut.a),n["default"].use(ot.a),n["default"].use(st.a),n["default"].use(nt.a),n["default"].use(tt.a),n["default"].use(Ze.a),n["default"].use(Xe.a),n["default"].use(Ke.a),n["default"].use(Ge.a),n["default"].use(Me.a),n["default"].use(Ae.a),n["default"].use(ze.a),n["default"].prototype.$message=Be.a,n["default"].config.productionTip=!1,new n["default"]({router:Pe,store:Ne,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,a){},"68c9":function(e,t,a){"use strict";var n=a("af14"),r=a.n(n);r.a},"7b78":function(e,t,a){"use strict";var n=a("bba0"),r=a.n(n);r.a},"898b":function(e,t,a){"use strict";var n=a("208c"),r=a.n(n);r.a},"9b19":function(e,t,a){e.exports=a.p+"img/logo.5b64f6dd.svg"},a553:function(e,t,a){"use strict";var n=a("dc21"),r=a.n(n);r.a},af14:function(e,t,a){},b2f3:function(e,t,a){},b84c:function(e,t,a){},bba0:function(e,t,a){},c486:function(e,t,a){},d67d:function(e,t,a){"use strict";var n=a("25fe"),r=a.n(n);r.a},dc21:function(e,t,a){},f60b:function(e,t,a){},fe24:function(e,t,a){"use strict";var n=a("11be"),r=a.n(n);r.a}});
//# sourceMappingURL=app.4c53a77f.js.map