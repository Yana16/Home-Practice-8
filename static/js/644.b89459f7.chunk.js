"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{9175:function(e,n){n.Z={name:{type:"text",name:"name",required:!0,label:"User Name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}}},6946:function(e,n){n.Z={name:"",email:"",password:""}},7644:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(1413),a=t(158),i=t(3340),l=t(9175),u=t(4905),o=t(6946),s="login-form_form__eHBRV",c=t(184),d=function(e){var n=e.onSubmit,t=(0,a.Z)({initialState:o.Z,onSubmit:n}),d=t.state,f=t.handleChange,m=t.handleSubmit,h=d.email,p=d.password;return(0,c.jsxs)("form",{onSubmit:m,className:s,children:[(0,c.jsx)(i.Z,(0,r.Z)({value:h,handleChange:f},l.Z.email)),(0,c.jsx)(i.Z,(0,r.Z)({value:p,handleChange:f},l.Z.password)),(0,c.jsx)(u.Z,{children:"Login"})]})},f=t(7689),m=t(9434),h=t(1260),p=t(9869),b=function(){var e=(0,m.v9)(p.y),n=(0,m.I0)();return e?(0,c.jsx)(f.Fg,{to:"/"}):(0,c.jsxs)("div",{children:[(0,c.jsx)("h1",{children:"Login page"}),(0,c.jsx)(d,{onSubmit:function(e){n((0,h.x)(e))}})]})}},4905:function(e,n,t){t.d(n,{Z:function(){return i}});var r="button_btn__uXPTj",a=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,a.jsx)("button",{type:i,className:r,children:n})}},3340:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(2791),l=t(5984),u="text-field_wrapper__Y6TVN",o="text-field_field__q+3UI",s=t(184),c=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,d=a(e,c),f=(0,i.useMemo)((function(){return(0,l.x0)()}),[]);return(0,s.jsxs)("div",{className:u,children:[(0,s.jsx)("label",{htmlFor:f,children:n}),(0,s.jsx)("input",(0,r.Z)({className:o,id:f,onChange:t},d))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),i=t(9439),l=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,l.useState)((0,a.Z)({},n)),o=(0,i.Z)(u,2),s=o[0],c=o[1],d=(0,l.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=644.b89459f7.chunk.js.map