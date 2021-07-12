(()=>{"use strict";var e={373:(e,t,s)=>{s.r(t)},752:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(i,a){function r(e){try{d(n.next(e))}catch(e){a(e)}}function o(e){try{d(n.throw(e))}catch(e){a(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,o)}d((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const i=s(403),a=s(977),r=s(748),o="train";class d extends i.BaseComponent{constructor(e){super(e,"div",["app__container"]),this.parentNode=e,this.mode=o,this.header=null,this.mainContainer=null,this.state=[],this.init()}init(){return n(this,void 0,void 0,(function*(){this.element.innerHTML="";const e=(yield fetch("/api/categories")).json();return this.state=yield e,this.header=new a.Header(this.element,this.state,this.mode),this.header.element.onchange=e=>{var t,s,n,i,a,r;"switcher"===e.target.id&&(e.target.checked?(this.mode=o,null===(t=this.header)||void 0===t||t.setMode(this.mode),null===(s=this.header)||void 0===s||s.changeSwitcher(),null===(n=this.mainContainer)||void 0===n||n.changeMode(this.mode)):(this.mode="play",null===(i=this.header)||void 0===i||i.setMode(this.mode),null===(a=this.header)||void 0===a||a.changeSwitcher(),null===(r=this.mainContainer)||void 0===r||r.changeMode(this.mode)))},yield this.renderMainContainer(this.element,this.state,this.mode),e}))}renderMainContainer(e,t,s){this.mainContainer=new r.MainContainer(e,t,s)}renderCards(e){var t;null===(t=this.mainContainer)||void 0===t||t.renderCardsByCategory(e)}}t.App=d},403:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e=null,t="div",s=[],n=""){this.element=document.createElement(t),this.element.classList.add(...s),this.element.innerHTML=`${n}`,e&&e.append(this.element)}destroy(){this.element.remove()}addClass(e){this.element.classList.add(e)}removeClass(e){this.element.classList.remove(e)}changeClassMode(e){"train"===e&&(this.removeClass("red"),this.addClass("green")),"play"===e&&(this.removeClass("green"),this.addClass("red"))}}},343:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;const n=s(403),i="flipped";class a extends n.BaseComponent{constructor(e){super(e,"div",["card__container"]),this.parentNode=e,this.cardHolder=document.createElement("div"),this.cardHolder.classList.add("card"),this.cardFront=document.createElement("div"),this.cardFront.classList.add("card__front"),this.image=document.createElement("img"),this.image.classList.add("card__image"),this.header=new n.BaseComponent(this.cardHolder,"h3",["card__header"]),this.cardButton=new n.BaseComponent(this.cardHolder,"button",["card__button"]),this.audio=new Audio,this.cardBack=document.createElement("div"),this.cardBack.classList.add("card__back")}renderCategory(e,t){var s;console.log(e),this.cardHolder.classList.add("column"),this.header.element.innerHTML=`${e.category}`,this.cardButton.element.innerHTML="Select",this.cardButton.element.id=`${e.category}`,e.items&&0!==(null===(s=e.items)||void 0===s?void 0:s.length)?(this.image.src=`${e.items[0].image}`,this.cardHolder.append(this.image)):(this.image.src="./assets/noImage.png",this.cardHolder.append(this.image)),this.cardButton.changeClassMode(t),this.cardHolder.append(this.cardButton.element),this.element.append(this.cardHolder)}renderItem(e,t){return"train"===t&&(this.renderFrontSide(e,t),this.cardFront.append(this.image,this.header.element),this.cardHolder.append(this.cardFront,this.cardBack),this.element.append(this.cardHolder),this.image.onclick=()=>{this.audio.src=`${e.audioSrc}`,this.audio.currentTime=0,this.audio.play()}),"play"===t&&(this.renderPlayCardMode(e,t),this.cardHolder.id=e.word,this.cardHolder.append(this.image,this.cardButton.element),this.element.append(this.cardHolder)),this.cardHolder}renderFrontSide(e,t){this.image.src=`${e.image}`,this.header.element.innerHTML=`${e.word}`,this.cardButton.removeClass("card__button"),this.cardButton.addClass("card__button_flip"),this.cardButton.element.innerHTML="🔄",this.cardButton.changeClassMode(t),this.cardButton.element.onclick=()=>{this.addClass(i),this.renderBackSide(e),setTimeout((()=>{this.removeClass(i)}),5e3)},this.cardFront.append(this.header.element,this.image,this.cardButton.element)}renderBackSide(e){this.cardBack.innerHTML="";const t=document.createElement("img");t.src=`${e.image}`,t.classList.add("card__image");const s=document.createElement("h3");s.innerHTML=`${e.translation}`,this.cardBack.append(t,s)}renderPlayCardMode(e,t){this.image.src=`${e.image}`,this.image.classList.add("card__image"),this.image.style.pointerEvents="none"}renderCreateCard(){return this.header.destroy(),this.cardButton.destroy(),this.cardHolder.classList.add("card__create"),this.element.append(this.cardHolder),this.cardHolder}}t.Card=a},977:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const n=s(403),i=s(658),a=s(709);class r extends n.BaseComponent{constructor(e,t,s){super(e,"header",["header"]),this.parentNode=e,this.mode=s,this.navigation=new i.Navigation(this.element,t,this.mode),this.switcher=new a.Switcher(this.element,this.mode)}getMode(){return this.mode}setMode(e){this.mode=e}changeSwitcher(){this.switcher.changeClassMode(this.mode),this.navigation.changeMenuColor(this.mode)}}t.Header=r},565:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MenuToggle=void 0;const n=s(403),i=s(991);class a extends n.BaseComponent{constructor(e,t,s){super(e,"div",["menu-toggle"]),this.parentNode=e,this.input=document.createElement("input"),this.input.id="menu__toggle",this.input.type="checkbox",this.label=document.createElement("label"),this.label.classList.add("menu__btn"),this.label.htmlFor="menu__toggle",this.label.innerHTML="<span></span>",this.render([this.input,this.label]),this.navigationList=new i.NavigationList(this.element,t,s)}render(e=[]){this.element.append(...e)}changeColor(e){this.navigationList.changeClassMode(e)}}t.MenuToggle=a},658:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0;const n=s(403),i=s(565);class a extends n.BaseComponent{constructor(e,t,s){super(e,"nav",["navigation"]),this.parentNode=e,this.menuToggle=new i.MenuToggle(this.element,t,s)}changeMenuColor(e){this.menuToggle.changeColor(e)}}t.Navigation=a},81:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationItem=void 0;const n=s(403);class i extends n.BaseComponent{constructor(e,t){super(e,"li",["navigation__item"]),this.parentNode=e,this.innerLink=new n.BaseComponent(this.element,"a",["navigation__link"],t),this.innerLink.element.href=`#${t}`}}t.NavigationItem=i},991:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationList=void 0;const n=s(403),i=s(81);class a extends n.BaseComponent{constructor(e,t,s){super(e,"ul",["navigation__list"]),this.parentNode=e,this.mode=s,this.state=t,this.renderList()}renderList(){this.changeClassMode(this.mode),this.state.forEach((e=>{const t=new i.NavigationItem(this.element,e.category);this.element.append(t.element)}))}}t.NavigationList=a},709:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Switcher=void 0;const n=s(403);class i extends n.BaseComponent{constructor(e,t){super(e,"div",["switch-button"]),this.parentNode=e,this.mode=t,this.input=document.createElement("input"),this.input.type="checkbox",this.input.id="switcher",this.input.classList.add("switch-button-checkbox"),this.label=document.createElement("label"),this.label.classList.add("switch-button-label"),this.label.htmlFor="",this.span=document.createElement("span"),this.span.classList.add("switch-button-label-span"),this.span.innerHTML="Train",this.label.append(this.span),this.render(this.mode)}render(e){"train"===e&&(this.input.checked=!0),"play"===e&&(this.input.checked=!1),this.changeClassMode(e),this.element.append(this.input,this.label)}}t.Switcher=i},64:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardField=void 0;const n=s(403),i=s(343),a=s(253);class r extends n.BaseComponent{constructor(e){super(e,"div",["cards-field"]),this.parentNode=e,this.cards=[],this.cardsHtmlElements=[],this.buttonStart=new n.BaseComponent(this.element,"button",["button__start"],"Start game"),this.overlay=new a.Overlay(this.element),this.audio=new Audio,this.audio.currentTime=0,this.activeItem=null,this.index=0,this.errors=0,this.answers=0,this.cardsHtmlElements=[],this.score=new n.BaseComponent(this.element,"div",["score"]),this.buttonStart.element.onclick=()=>{this.newGame()}}clear(){this.cards=[],this.element.innerHTML=""}addCardsCategory(e,t){this.element.before(this.overlay.element),this.removeClass("column__center"),this.cards=e,this.cards.forEach((e=>{new i.Card(this.element).renderCategory(e,t)})),new i.Card(this.element).renderCreateCard().onclick=()=>{this.overlay.removeClass("overlay_hidden")}}addCardsItems(e,t,s){this.clear(),this.cards=e,this.cards.forEach((e=>{e.category===s&&e.items&&(this.cardsItems=e.items,e.items.forEach((e=>{const s=new i.Card(this.element).renderItem(e,t);this.cardsHtmlElements.push(s)})))})),"play"===t&&(this.element.append(this.buttonStart.element),this.buttonStart.changeClassMode(t))}newGame(){this.buttonStart.destroy(),this.element.append(this.score.element);const e=new n.BaseComponent(this.element,"button",["button__start","red"],"Repeat");e.element.onclick=()=>{this.activeItem&&this.playSound(this.activeItem.audioSrc)},this.element.append(e.element),this.sortPlayItems(),this.getPlayElement()}getPlayElement(){this.cardsItems&&(this.index===this.cardsItems.length&&this.renderEndGame(),this.activeItem=this.cardsItems[this.index],this.playSound(this.activeItem.audioSrc),this.cardsHtmlElements.forEach((e=>{e.onclick=()=>{this.playCardsHandler(e.id)}})))}playCardsHandler(e){if(!this.activeItem)throw Error(`active item is not defined: ${this.activeItem}`);e===this.activeItem.word?(this.answers+=1,this.score.element.append("⭐"),this.index+=1,this.getPlayElement()):(this.errors+=1,this.score.element.append("⭕"))}playSound(e){this.audio.src=e,this.audio.play()}sortPlayItems(){this.cardsItems&&this.cardsItems.sort((()=>Math.round(100*Math.random()-50)))}renderEndGame(){this.element.innerHTML="",this.addClass("column__center");const e=new n.BaseComponent(this.element,"h1",["header__final"]),t=document.createElement("img");t.classList.add("img__final"),t.src="";const s=new n.BaseComponent(this.element,"button",["button__restart"],"Try again!");s.element.onclick=()=>{this.restartGame()},0===this.errors?(e.element.innerHTML="",e.element.innerHTML=`You Win! Answers: ${this.answers}. Errors: ${this.errors}`,t.src="./img/win.jpg",this.element.append(e.element,t)):(e.element.innerHTML="",e.element.innerHTML=`You lose! Answers: ${this.answers}. Errors: ${this.errors}`,t.src="./img/lose.jpg",this.element.append(e.element,t)),this.element.append(s.element)}restartGame(){this.element.innerHTML="",this.removeClass("column__center"),this.score.element.innerHTML="",this.errors=0,this.index=0,this.answers=0,this.activeItem=null,this.audio.src="",this.addCardsCategory(this.cards,"play")}}t.CardField=r},748:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainContainer=void 0;const n=s(403),i=s(64);class a extends n.BaseComponent{constructor(e,t,s){super(e,"div",["main-container"]),this.parentNode=e,this.mode=s,this.state=t,this.cardField=new i.CardField(this.element),this.renderStartCategory(),this.element.onclick=e=>{this.handlerClick(e)}}renderStartCategory(){this.cardField.clear(),this.cardField.addCardsCategory(this.state,this.mode)}changeMode(e){this.mode=e,this.renderStartCategory()}handlerClick(e){if("card__button"===e.target.className.split(" ")[0]){const t=e.target.id;this.cardField.clear(),this.cardField.addCardsItems(this.state,this.mode,t)}}renderCardsByCategory(e){this.state.forEach((t=>{t.category===e&&this.cardField.addCardsItems(this.state,this.mode,e)}))}}t.MainContainer=a},189:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;const n=s(403);class i extends n.BaseComponent{constructor(e){super(e,"div",["modal"]),this.parentNode=e,this.header=new n.BaseComponent(this.element,"h2",["modal__header"],"Your Category"),this.form=new n.BaseComponent(this.element,"form",["form"]),this.nameInput=new n.BaseComponent(this.element,"input",["modal__input"]),this.data={category:""},this.nameInput.element.oninput=e=>{this.data.category=e.target.value},this.buttonSave=new n.BaseComponent(this.element,"input",["button__save"],"Send"),this.buttonSave.element.onclick=()=>{""!==this.data.category&&fetch("http://localhost/api/categories/",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(this.data)}).then((e=>{console.log("Request complete! response:",e)}))},this.renderModal()}renderModal(){this.form.element.method="POST",this.nameInput.element.type="text",this.nameInput.element.placeholder="Enter your category name",this.nameInput.element.required=!0,this.buttonSave.element.type="submit",this.form.element.append(this.nameInput.element,this.buttonSave.element),this.element.append(this.header.element,this.form.element)}getData(){return this.data}}t.Modal=i},253:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;const n=s(403),i=s(189);class a extends n.BaseComponent{constructor(e){super(e,"div",["overlay","overlay_hidden"]),this.parentNode=e,this.modal=new i.Modal(this.element)}}t.Overlay=a},458:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0,t.Router=class{constructor(e){this.routes=[],this.mode=null,this.root="/",this.mode="hash",e.mode&&(this.mode=e.mode),e.root&&(this.root=e.root),window.onpopstate=()=>{this.navigate()}}add(e,t){return this.routes.push({path:e,handler:t}),this}navigate(){const e=this.routes.find((e=>e.path===window.location.hash));if(!e)throw new Error("error route: there is no such route");return e.handler(),this}}}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,s),a.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{s(373);const e=s(752),t=s(458),n=["action","animals","colors","clothiers","emotions","fruits","transport","vegetables"];window.onload=()=>{if(!document.getElementById("app"))throw Error("Application root element not found");const s=new e.App(document.body),i=new t.Router({mode:"hash",root:"/"});n.forEach((e=>{i.add(`#${e}`,(()=>{s.renderCards(e)}))}))}})()})();