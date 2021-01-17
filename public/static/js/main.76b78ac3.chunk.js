(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),o=a.n(c),s=a(6),i=a.n(s),r=(a(15),a(9)),l=a(2),u=a.p+"static/media/logo.c2821b38.svg";var p=function(){return Object(n.jsx)("header",{className:"header page__content",children:Object(n.jsx)("img",{className:"logo",src:u,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f"})})},d=o.a.createContext();var _=function(e){var t=o.a.useContext(d),a=e.card.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id}));return Object(n.jsxs)("li",{className:"card",children:[a?Object(n.jsx)("button",{className:"button-delete",type:"button",onClick:function(){e.onCardDelete(e.card)}}):"",Object(n.jsx)("div",{className:"card__image",onClick:function(){e.onCardClick(e.card)},style:{backgroundImage:"url(".concat(e.card.link,")"),backgroundSize:"cover",backgroundPosition:"center"}}),Object(n.jsxs)("div",{className:"card__group",children:[Object(n.jsx)("h3",{className:"card__title",children:e.card.name}),Object(n.jsxs)("div",{className:"card__like-group",children:[Object(n.jsx)("button",{className:"button-like ".concat(c?"button-like_active":""),type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(n.jsx)("p",{className:"button-like__counter",children:e.card.likes.length})]})]})]})};var j=function(e){var t=o.a.useContext(d);return Object(n.jsxs)("main",{className:"page__content",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("div",{className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")"),backgroundSize:"cover"}}),Object(n.jsx)("div",{className:"profile__avatar-overlay",onClick:e.onEditAvatar}),Object(n.jsxs)("div",{className:"profile__group",children:[Object(n.jsxs)("div",{className:"profile__text-block",children:[Object(n.jsx)("h1",{className:"profile__name",children:t.name}),Object(n.jsx)("p",{className:"profile__profession",children:t.about})]}),Object(n.jsx)("button",{className:"button-editor",type:"button",onClick:e.onEditProfile})]})]}),Object(n.jsx)("button",{className:"button-add",type:"button",onClick:e.onAddPlace})]}),Object(n.jsx)("section",{className:"cards",children:Object(n.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(n.jsx)(_,{card:t,onCardDelete:e.onCardDelete,onCardClick:e.onCardClick,onCardLike:e.onCardLike},t._id)}))})})]})};var h=function(){return Object(n.jsx)("footer",{className:"footer page__content",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){return Object(n.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(n.jsxs)("form",{className:"popup__container popup__container_type_".concat(e.name),onSubmit:e.onSubmit,action:"#",method:"#",name:e.name,noValidate:!0,children:[Object(n.jsx)("button",{className:"popup__close",type:"reset",onClick:e.onClose}),Object(n.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(n.jsx)("button",{className:"popup__save",type:"submit",children:e.buttonText})]})})};var f=function(e){return Object(n.jsx)("div",{className:"popup popup_type_image-viewer ".concat(e.isOpen),children:Object(n.jsxs)("div",{className:"popup__image-viewer",children:[Object(n.jsx)("button",{className:"popup__close",type:"reset",onClick:e.onClose}),Object(n.jsxs)("figure",{className:"popup__image-form",children:[Object(n.jsx)("img",{className:"popup__image",src:"".concat(e.card?e.card.link:""),alt:e.card.name}),Object(n.jsx)("figure",{className:"popup__title-place",children:e.card.name})]})]})})},m=a(7),O=a(8),v=new(function(){function e(t){var a=t.baseUrl,n=t.authorization;Object(m.a)(this,e),this._baseUrl=a,this._authorization=n}return Object(O.a)(e,[{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:{authorization:this._authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserData",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"cards"),{headers:{authorization:this._authorization}}).then((function(t){return e._getResponseData(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._authorization}}).then((function(e){return t._getResponseData(e)}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"changeLikeCardStatus",value:function(e,t){var a=this;return fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}}).then((function(e){return a._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17/",authorization:"9842cf93-c038-42ac-8b76-736f25c21d6e"});var x=function(e){var t=o.a.useContext(d),a=o.a.useState(""),c=Object(l.a)(a,2),s=c[0],i=c[1],r=o.a.useState(""),u=Object(l.a)(r,2),p=u[0],_=u[1];return o.a.useEffect((function(){i(t.name),_(t.about)}),[t]),Object(n.jsx)(b,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,children:Object(n.jsxs)("div",{className:"popup__inputs",children:[Object(n.jsxs)("label",{className:"popup__label",children:[Object(n.jsx)("input",{className:"popup__field popup__field_value_name",value:s,id:"popup__field_name",onChange:function(e){i(e.target.value)},type:"text",name:"name",required:!0,minLength:"2",maxLength:"40"}),Object(n.jsx)("span",{className:"popup__field-error",id:"popup__field_name-error"})]}),Object(n.jsxs)("label",{className:"popup__label",children:[Object(n.jsx)("input",{className:"popup__field popup__field_value_profession",value:p,onChange:function(e){_(e.target.value)},id:"popup__field_profession",type:"text",name:"about",required:!0,minLength:"2",maxLength:"200"}),Object(n.jsx)("span",{className:"popup__field-error",id:"popup__field_profession-error"})]})]})})};var g=function(e){var t=o.a.useRef();return Object(n.jsx)(b,{onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value),t.current.value=""},title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"change-avatar",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,children:Object(n.jsx)("div",{className:"popup__inputs",children:Object(n.jsxs)("label",{className:"popup__label",children:[Object(n.jsx)("input",{className:"popup__field popup__field_value_avatar",ref:t,id:"popup__field_avatar",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(n.jsx)("span",{className:"popup__field-error",id:"popup__field_avatar-error"})]})})})};var C=function(e){var t=o.a.useState(""),a=Object(l.a)(t,2),c=a[0],s=a[1],i=o.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return Object(n.jsx)(b,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",onSubmit:function(t){t.preventDefault(),e.onAddPlace({link:u,name:c}),p(""),s("")},name:"add-card",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,children:Object(n.jsxs)("div",{className:"popup__inputs",children:[Object(n.jsxs)("label",{className:"popup__label",children:[Object(n.jsx)("input",{className:"popup__field popup__field_value_place",value:c,onChange:function(e){s(e.target.value)},id:"popup__field_place",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(n.jsx)("span",{className:"popup__field-error",id:"popup__field_place-error"})]}),Object(n.jsxs)("label",{className:"popup__label",children:[Object(n.jsx)("input",{className:"popup__field popup__field_value_url",value:u,onChange:function(e){p(e.target.value)},id:"popup__field_url",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(n.jsx)("span",{className:"popup__field-error",id:"popup__field_url-error"})]})]})})};var N=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=o.a.useState(!1),i=Object(l.a)(s,2),u=i[0],_=i[1],m=o.a.useState(!1),O=Object(l.a)(m,2),N=O[0],k=O[1],y=o.a.useState(!1),S=Object(l.a)(y,2),U=S[0],D=S[1],z=o.a.useState([]),T=Object(l.a)(z,2),L=T[0],P=T[1],E=o.a.useState({name:"",link:""}),A=Object(l.a)(E,2),R=A[0],w=A[1],q=o.a.useState(""),J=Object(l.a)(q,2),F=J[0],I=J[1];function B(){_(!1),k(!1),c(!1),D(!1)}return o.a.useEffect((function(){v.getUserData().then((function(e){I(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),o.a.useEffect((function(){v.getCards().then((function(e){P(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),Object(n.jsx)(d.Provider,{value:F,children:Object(n.jsxs)("div",{className:"page",children:[Object(n.jsxs)("div",{className:"page__container",children:[Object(n.jsx)(p,{}),Object(n.jsx)(j,{cards:L,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===F._id}));v.changeLikeCardStatus(e._id,!t).then((function(t){var a=L.map((function(a){return a._id===e._id?t:a}));P(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){v.deleteCard(e._id).then((function(){var t=L.filter((function(t){return t._id!==e._id}));P(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardClick:function(e){D(!0),w(e)},onEditProfile:function(){c(!0)},onAddPlace:function(){_(!0)},onEditAvatar:function(){k(!0)}}),Object(n.jsx)(h,{})]}),Object(n.jsx)(x,{isOpen:a,onUpdateUser:function(e){v.setUserData(e).then((function(e){I(e),B()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onClose:B}),Object(n.jsx)(g,{isOpen:N,onClose:B,onUpdateAvatar:function(e){v.changeUserAvatar(e).then((function(e){B(),I(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(n.jsx)(C,{isOpen:u,onClose:B,onAddPlace:function(e){v.addCard(e).then((function(e){P([e].concat(Object(r.a)(L))),B()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}}),Object(n.jsx)(b,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"verification",buttonText:"\u0414\u0430"}),Object(n.jsx)(f,{card:R,onClose:B,isOpen:U?"popup_opened":""})]})})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root")),k()}},[[16,1,2]]]);
//# sourceMappingURL=main.76b78ac3.chunk.js.map