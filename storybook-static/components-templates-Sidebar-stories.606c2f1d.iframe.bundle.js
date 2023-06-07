"use strict";(self.webpackChunkts_myportfolio=self.webpackChunkts_myportfolio||[]).push([[86],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/stories/components/templates/Sidebar.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Indesx:()=>Indesx,default:()=>Sidebar_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),__jsx=react.createElement,SidebarWrapper=function SidebarWrapper(_ref){var children=_ref.children;return __jsx("aside",{className:"max-w-[250px]"},children)};SidebarWrapper.displayName="SidebarWrapper",SidebarWrapper.__docgenInfo={description:"",methods:[],displayName:"SidebarWrapper",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};try{SidebarWrapper.displayName="SidebarWrapper",SidebarWrapper.__docgenInfo={description:"",displayName:"SidebarWrapper",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/organisms/SidebarWrapper/SidebarWrapper.tsx#SidebarWrapper"]={docgenInfo:SidebarWrapper.__docgenInfo,name:"SidebarWrapper",path:"src/stories/components/organisms/SidebarWrapper/SidebarWrapper.tsx#SidebarWrapper"})}catch(__react_docgen_typescript_loader_error){}var SidebarIcon=__webpack_require__("./src/stories/components/atoms/SidebarIcon/SidebarIcon.tsx"),SidebarList_jsx=react.createElement,SidebarList=function SidebarList(_ref){var children=_ref.children;return SidebarList_jsx("ol",{type:"1"},children)};SidebarList.displayName="SidebarList",SidebarList.__docgenInfo={description:"",methods:[],displayName:"SidebarList",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};try{SidebarList.displayName="SidebarList",SidebarList.__docgenInfo={description:"",displayName:"SidebarList",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/molecules/SidebarList/SidebarList.tsx#SidebarList"]={docgenInfo:SidebarList.__docgenInfo,name:"SidebarList",path:"src/stories/components/molecules/SidebarList/SidebarList.tsx#SidebarList"})}catch(__react_docgen_typescript_loader_error){}var _Indesx$parameters,_Indesx$parameters2,_Indesx$parameters2$d,SidebarItem=__webpack_require__("./src/stories/components/atoms/SidebarItem/SidebarItem.tsx"),Sidebar_jsx=react.createElement,Sidebar=function Sidebar(){return Sidebar_jsx("div",{className:"sidebar"},Sidebar_jsx(SidebarWrapper,null,Sidebar_jsx(SidebarIcon.B,{link:"/",iconUrl:"https://myportfoliomaind3f2.gatsbyjs.io/static/me-f026bf3459d66dc11942c02ddf5dd9d8.png",position:"auto"}),Sidebar_jsx("nav",{className:"mt-[50px] ml-[100px]"},Sidebar_jsx(SidebarList,null,Sidebar_jsx(SidebarItem.R,{link:"#about",text:"About"}),Sidebar_jsx(SidebarItem.R,{link:"#skill",text:"Skill"}),Sidebar_jsx(SidebarItem.R,{link:"#works",text:"Works"}),Sidebar_jsx(SidebarItem.R,{link:"#contact",text:"Contact"})))))};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}Sidebar.displayName="Sidebar",Sidebar.__docgenInfo={description:"",methods:[],displayName:"Sidebar"};const Sidebar_stories={title:"Sidebar/Sidebar",component:Sidebar,tags:[""]};var Indesx={};Indesx.parameters=_objectSpread(_objectSpread({},Indesx.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Indesx$parameters=Indesx.parameters)||void 0===_Indesx$parameters?void 0:_Indesx$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Indesx$parameters2=Indesx.parameters)||void 0===_Indesx$parameters2||null===(_Indesx$parameters2$d=_Indesx$parameters2.docs)||void 0===_Indesx$parameters2$d?void 0:_Indesx$parameters2$d.source)})})},"./src/stories/components/atoms/SidebarIcon/SidebarIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>SidebarIcon});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,SidebarIcon=function SidebarIcon(_ref){var link=_ref.link,iconUrl=_ref.iconUrl,position=_ref.position;return __jsx("div",null,__jsx("a",{href:link},__jsx("img",{src:iconUrl,alt:"アイコン画像",className:"w-48 h-48 object-cover rounded-[20%] m-".concat(position)})))};SidebarIcon.displayName="SidebarIcon",SidebarIcon.__docgenInfo={description:"",methods:[],displayName:"SidebarIcon",props:{link:{required:!0,tsType:{name:"string"},description:""},iconUrl:{required:!0,tsType:{name:"string"},description:""},position:{required:!0,tsType:{name:"string"},description:""}}};try{SidebarIcon.displayName="SidebarIcon",SidebarIcon.__docgenInfo={description:"",displayName:"SidebarIcon",props:{link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},iconUrl:{defaultValue:null,description:"",name:"iconUrl",required:!0,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/SidebarIcon/SidebarIcon.tsx#SidebarIcon"]={docgenInfo:SidebarIcon.__docgenInfo,name:"SidebarIcon",path:"src/stories/components/atoms/SidebarIcon/SidebarIcon.tsx#SidebarIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/components/atoms/SidebarItem/SidebarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>SidebarItem});var __jsx=__webpack_require__("./node_modules/react/index.js").createElement,SidebarItem=function SidebarItem(_ref){var text=_ref.text,link=_ref.link;return __jsx("li",{className:"mb-6 w-fit"},__jsx("a",{className:"text-lg font-bold",href:link},text))};SidebarItem.displayName="SidebarItem",SidebarItem.__docgenInfo={description:"",methods:[],displayName:"SidebarItem",props:{text:{required:!0,tsType:{name:"string"},description:""},link:{required:!0,tsType:{name:"string"},description:""}}};try{SidebarItem.displayName="SidebarItem",SidebarItem.__docgenInfo={description:"",displayName:"SidebarItem",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/atoms/SidebarItem/SidebarItem.tsx#SidebarItem"]={docgenInfo:SidebarItem.__docgenInfo,name:"SidebarItem",path:"src/stories/components/atoms/SidebarItem/SidebarItem.tsx#SidebarItem"})}catch(__react_docgen_typescript_loader_error){}}}]);