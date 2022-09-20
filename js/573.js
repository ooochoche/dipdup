"use strict";(self.webpackChunkdipdup_docs=self.webpackChunkdipdup_docs||[]).push([[573,105,744],{9744:(e,t,n)=>{n.r(t),n.d(t,{a:()=>i,d:()=>s});var r=n(7480);function o(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}var i={exports:{}};!function(e){function t(t,n,r){var o,i=t.getWrapperElement();return(o=i.appendChild(document.createElement("div"))).className=r?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?o.innerHTML=n:o.appendChild(n),e.addClass(i,"dialog-opened"),o}function n(e,t){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=t}e.defineExtension("openDialog",(function(r,o,i){i||(i={}),n(this,null);var a=t(this,r,i.bottom),s=!1,c=this;function l(t){if("string"==typeof t)f.value=t;else{if(s)return;s=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),c.focus(),i.onClose&&i.onClose(a)}}var u,f=a.getElementsByTagName("input")[0];return f?(f.focus(),i.value&&(f.value=i.value,!1!==i.selectValueOnOpen&&f.select()),i.onInput&&e.on(f,"input",(function(e){i.onInput(e,f.value,l)})),i.onKeyUp&&e.on(f,"keyup",(function(e){i.onKeyUp(e,f.value,l)})),e.on(f,"keydown",(function(t){i&&i.onKeyDown&&i.onKeyDown(t,f.value,l)||((27==t.keyCode||!1!==i.closeOnEnter&&13==t.keyCode)&&(f.blur(),e.e_stop(t),l()),13==t.keyCode&&o(f.value,t))})),!1!==i.closeOnBlur&&e.on(a,"focusout",(function(e){null!==e.relatedTarget&&l()}))):(u=a.getElementsByTagName("button")[0])&&(e.on(u,"click",(function(){l(),c.focus()})),!1!==i.closeOnBlur&&e.on(u,"blur",l),u.focus()),l})),e.defineExtension("openConfirm",(function(r,o,i){n(this,null);var a=t(this,r,i&&i.bottom),s=a.getElementsByTagName("button"),c=!1,l=this,u=1;function f(){c||(c=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),l.focus())}s[0].focus();for(var h=0;h<s.length;++h){var p=s[h];!function(t){e.on(p,"click",(function(n){e.e_preventDefault(n),f(),t&&t(l)}))}(o[h]),e.on(p,"blur",(function(){--u,setTimeout((function(){u<=0&&f()}),200)})),e.on(p,"focus",(function(){++u}))}})),e.defineExtension("openNotification",(function(r,o){n(this,l);var i,a=t(this,r,o&&o.bottom),s=!1,c=o&&void 0!==o.duration?o.duration:5e3;function l(){s||(s=!0,clearTimeout(i),e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a))}return e.on(a,"click",(function(t){e.e_preventDefault(t),l()})),c&&(i=setTimeout(l,c)),l}))}(r.a.exports);var a=i.exports,s=Object.freeze(o({__proto__:null,[Symbol.toStringTag]:"Module",default:a},[i.exports]))},2573:(e,t,n)=>{n.r(t),n.d(t,{s:()=>l});var r=n(7480),o=n(6105),i=n(9744);function a(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}var s={exports:{}};!function(e){function t(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function n(e){return e.state.search||(e.state.search=new t)}function r(e){return"string"==typeof e&&e==e.toLowerCase()}function o(e,t,n){return e.getSearchCursor(t,n,{caseFold:r(t),multiline:!0})}function i(e,t,n,r,o){e.openDialog?e.openDialog(t,o,{value:r,selectValueOnOpen:!0,bottom:e.options.search.bottom}):o(prompt(n,r))}function a(e){return e.replace(/\\([nrt\\])/g,(function(e,t){return"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\"==t?"\\":e}))}function s(e){var t=e.match(/^\/(.*)\/([a-z]*)$/);if(t)try{e=new RegExp(t[1],-1==t[2].indexOf("i")?"":"i")}catch(e){}else e=a(e);return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}function c(e,t,n){t.queryText=n,t.query=s(n),e.removeOverlay(t.overlay,r(t.query)),t.overlay=function(e,t){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos;var n=e.exec(t.string);if(n&&n.index==t.pos)return t.pos+=n[0].length||1,"searching";n?t.pos=n.index:t.skipToEnd()}}}(t.query,r(t.query)),e.addOverlay(t.overlay),e.showMatchesOnScrollbar&&(t.annotate&&(t.annotate.clear(),t.annotate=null),t.annotate=e.showMatchesOnScrollbar(t.query,r(t.query)))}function l(t,r,o,a){var s=n(t);if(s.query)return u(t,r);var l=t.getSelection()||s.lastQuery;if(l instanceof RegExp&&"x^"==l.source&&(l=null),o&&t.openDialog){var h=null,g=function(n,r){e.e_stop(r),n&&(n!=s.queryText&&(c(t,s,n),s.posFrom=s.posTo=t.getCursor()),h&&(h.style.opacity=1),u(t,r.shiftKey,(function(e,n){var r;n.line<3&&document.querySelector&&(r=t.display.wrapper.querySelector(".CodeMirror-dialog"))&&r.getBoundingClientRect().bottom-4>t.cursorCoords(n,"window").top&&((h=r).style.opacity=.4)})))};(function(e,t,n,r,o){e.openDialog(t,r,{value:n,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){f(e)},onKeyDown:o,bottom:e.options.search.bottom})})(t,p(t),l,g,(function(r,o){var i=e.keyName(r),a=t.getOption("extraKeys"),s=a&&a[i]||e.keyMap[t.getOption("keyMap")][i];"findNext"==s||"findPrev"==s||"findPersistentNext"==s||"findPersistentPrev"==s?(e.e_stop(r),c(t,n(t),o),t.execCommand(s)):"find"!=s&&"findPersistent"!=s||(e.e_stop(r),g(o,r))})),a&&l&&(c(t,s,l),u(t,r))}else i(t,p(t),"Search for:",l,(function(e){e&&!s.query&&t.operation((function(){c(t,s,e),s.posFrom=s.posTo=t.getCursor(),u(t,r)}))}))}function u(t,r,i){t.operation((function(){var a=n(t),s=o(t,a.query,r?a.posFrom:a.posTo);(s.find(r)||(s=o(t,a.query,r?e.Pos(t.lastLine()):e.Pos(t.firstLine(),0))).find(r))&&(t.setSelection(s.from(),s.to()),t.scrollIntoView({from:s.from(),to:s.to()},20),a.posFrom=s.from(),a.posTo=s.to(),i&&i(s.from(),s.to()))}))}function f(e){e.operation((function(){var t=n(e);t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))}))}function h(e,t){var n=e?document.createElement(e):document.createDocumentFragment();for(var r in t)n[r]=t[r];for(var o=2;o<arguments.length;o++){var i=arguments[o];n.appendChild("string"==typeof i?document.createTextNode(i):i)}return n}function p(e){return h("",null,h("span",{className:"CodeMirror-search-label"},e.phrase("Search:"))," ",h("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",h("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}function g(e,t,n){e.operation((function(){for(var r=o(e,t);r.findNext();)if("string"!=typeof t){var i=e.getRange(r.from(),r.to()).match(t);r.replace(n.replace(/\$(\d)/g,(function(e,t){return i[t]})))}else r.replace(n)}))}function d(e,t){if(!e.getOption("readOnly")){var r=e.getSelection()||n(e).lastQuery,c=t?e.phrase("Replace all:"):e.phrase("Replace:"),l=h("",null,h("span",{className:"CodeMirror-search-label"},c),function(e){return h("",null," ",h("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",h("span",{style:"color: #888",className:"CodeMirror-search-hint"},e.phrase("(Use /re/ syntax for regexp search)")))}(e));i(e,l,c,r,(function(n){n&&(n=s(n),i(e,function(e){return h("",null,h("span",{className:"CodeMirror-search-label"},e.phrase("With:"))," ",h("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}(e),e.phrase("Replace with:"),"",(function(r){if(r=a(r),t)g(e,n,r);else{f(e);var i=o(e,n,e.getCursor("from")),s=function(){var t,a=i.from();!(t=i.findNext())&&(i=o(e,n),!(t=i.findNext())||a&&i.from().line==a.line&&i.from().ch==a.ch)||(e.setSelection(i.from(),i.to()),e.scrollIntoView({from:i.from(),to:i.to()}),function(e,t,n,r){e.openConfirm?e.openConfirm(t,r):confirm(n)&&r[0]()}(e,function(e){return h("",null,h("span",{className:"CodeMirror-search-label"},e.phrase("Replace?"))," ",h("button",{},e.phrase("Yes"))," ",h("button",{},e.phrase("No"))," ",h("button",{},e.phrase("All"))," ",h("button",{},e.phrase("Stop")))}(e),e.phrase("Replace?"),[function(){c(t)},s,function(){g(e,n,r)}]))},c=function(e){i.replace("string"==typeof n?r:r.replace(/\$(\d)/g,(function(t,n){return e[n]}))),s()};s()}})))}))}}e.defineOption("search",{bottom:!1}),e.commands.find=function(e){f(e),l(e)},e.commands.findPersistent=function(e){f(e),l(e,!1,!0)},e.commands.findPersistentNext=function(e){l(e,!1,!0,!0)},e.commands.findPersistentPrev=function(e){l(e,!0,!0,!0)},e.commands.findNext=l,e.commands.findPrev=function(e){l(e,!0)},e.commands.clearSearch=f,e.commands.replace=d,e.commands.replaceAll=function(e){d(e,!0)}}(r.a.exports,o.a.exports,i.a.exports);var c=s.exports,l=Object.freeze(a({__proto__:null,[Symbol.toStringTag]:"Module",default:c},[s.exports]))},6105:(e,t,n)=>{n.r(t),n.d(t,{a:()=>i,s:()=>s});var r=n(7480);function o(e,t){return t.forEach((function(t){t&&"string"!=typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}var i={exports:{}};!function(e){var t,n,r=e.Pos;function o(e,t){for(var n=function(e){var t=e.flags;return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}(e),r=n,o=0;o<t.length;o++)-1==r.indexOf(t.charAt(o))&&(r+=t.charAt(o));return n==r?e:new RegExp(e.source,r)}function i(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function a(e,t,n){t=o(t,"g");for(var i=n.line,a=n.ch,s=e.lastLine();i<=s;i++,a=0){t.lastIndex=a;var c=e.getLine(i),l=t.exec(c);if(l)return{from:r(i,l.index),to:r(i,l.index+l[0].length),match:l}}}function s(e,t,n){if(!i(t))return a(e,t,n);t=o(t,"gm");for(var s,c=1,l=n.line,u=e.lastLine();l<=u;){for(var f=0;f<c&&!(l>u);f++){var h=e.getLine(l++);s=null==s?h:s+"\n"+h}c*=2,t.lastIndex=n.ch;var p=t.exec(s);if(p){var g=s.slice(0,p.index).split("\n"),d=p[0].split("\n"),m=n.line+g.length-1,v=g[g.length-1].length;return{from:r(m,v),to:r(m+d.length-1,1==d.length?v+d[0].length:d[d.length-1].length),match:p}}}}function c(e,t,n){for(var r,o=0;o<=e.length;){t.lastIndex=o;var i=t.exec(e);if(!i)break;var a=i.index+i[0].length;if(a>e.length-n)break;(!r||a>r.index+r[0].length)&&(r=i),o=i.index+1}return r}function l(e,t,n){t=o(t,"g");for(var i=n.line,a=n.ch,s=e.firstLine();i>=s;i--,a=-1){var l=e.getLine(i),u=c(l,t,a<0?0:l.length-a);if(u)return{from:r(i,u.index),to:r(i,u.index+u[0].length),match:u}}}function u(e,t,n){if(!i(t))return l(e,t,n);t=o(t,"gm");for(var a,s=1,u=e.getLine(n.line).length-n.ch,f=n.line,h=e.firstLine();f>=h;){for(var p=0;p<s&&f>=h;p++){var g=e.getLine(f--);a=null==a?g:g+"\n"+a}s*=2;var d=c(a,t,u);if(d){var m=a.slice(0,d.index).split("\n"),v=d[0].split("\n"),y=f+m.length,x=m[m.length-1].length;return{from:r(y,x),to:r(y+v.length-1,1==v.length?x+v[0].length:v[v.length-1].length),match:d}}}}function f(e,t,n,r){if(e.length==t.length)return n;for(var o=0,i=n+Math.max(0,e.length-t.length);;){if(o==i)return o;var a=o+i>>1,s=r(e.slice(0,a)).length;if(s==n)return a;s>n?i=a:o=a+1}}function h(e,o,i,a){if(!o.length)return null;var s=a?t:n,c=s(o).split(/\r|\n\r?/);e:for(var l=i.line,u=i.ch,h=e.lastLine()+1-c.length;l<=h;l++,u=0){var p=e.getLine(l).slice(u),g=s(p);if(1==c.length){var d=g.indexOf(c[0]);if(-1==d)continue e;return i=f(p,g,d,s)+u,{from:r(l,f(p,g,d,s)+u),to:r(l,f(p,g,d+c[0].length,s)+u)}}var m=g.length-c[0].length;if(g.slice(m)==c[0]){for(var v=1;v<c.length-1;v++)if(s(e.getLine(l+v))!=c[v])continue e;var y=e.getLine(l+c.length-1),x=s(y),C=c[c.length-1];if(x.slice(0,C.length)==C)return{from:r(l,f(p,g,m,s)+u),to:r(l+c.length-1,f(y,x,C.length,s))}}}}function p(e,o,i,a){if(!o.length)return null;var s=a?t:n,c=s(o).split(/\r|\n\r?/);e:for(var l=i.line,u=i.ch,h=e.firstLine()-1+c.length;l>=h;l--,u=-1){var p=e.getLine(l);u>-1&&(p=p.slice(0,u));var g=s(p);if(1==c.length){var d=g.lastIndexOf(c[0]);if(-1==d)continue e;return{from:r(l,f(p,g,d,s)),to:r(l,f(p,g,d+c[0].length,s))}}var m=c[c.length-1];if(g.slice(0,m.length)==m){var v=1;for(i=l-c.length+1;v<c.length-1;v++)if(s(e.getLine(i+v))!=c[v])continue e;var y=e.getLine(l+1-c.length),x=s(y);if(x.slice(x.length-c[0].length)==c[0])return{from:r(l+1-c.length,f(y,x,y.length-c[0].length,s)),to:r(l,f(p,g,m.length,s))}}}}function g(e,t,n,i){var c;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof i?c=i.caseFold:(c=i,i=null),"string"==typeof t?(null==c&&(c=!1),this.matches=function(n,r){return(n?p:h)(e,t,r,c)}):(t=o(t,"gm"),i&&!1===i.multiline?this.matches=function(n,r){return(n?l:a)(e,t,r)}:this.matches=function(n,r){return(n?u:s)(e,t,r)})}String.prototype.normalize?(t=function(e){return e.normalize("NFD").toLowerCase()},n=function(e){return e.normalize("NFD")}):(t=function(e){return e.toLowerCase()},n=function(e){return e}),g.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){var n=this.doc.clipPos(t?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(n=r(n.line,n.ch),t?(n.ch--,n.ch<0&&(n.line--,n.ch=(this.doc.getLine(n.line)||"").length)):(n.ch++,n.ch>(this.doc.getLine(n.line)||"").length&&(n.ch=0,n.line++)),0!=e.cmpPos(n,this.doc.clipPos(n))))return this.atOccurrence=!1;var o=this.matches(t,n);if(this.afterEmptyMatch=o&&0==e.cmpPos(o.from,o.to),o)return this.pos=o,this.atOccurrence=!0,this.pos.match||!0;var i=r(t?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:i,to:i},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var o=e.splitLines(t);this.doc.replaceRange(o,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+o.length-1,o[o.length-1].length+(1==o.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new g(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new g(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],o=this.getSearchCursor(t,this.getCursor("from"),n);o.findNext()&&!(e.cmpPos(o.to(),this.getCursor("to"))>0);)r.push({anchor:o.from(),head:o.to()});r.length&&this.setSelections(r,0)}))}(r.a.exports);var a=i.exports,s=Object.freeze(o({__proto__:null,[Symbol.toStringTag]:"Module",default:a},[i.exports]))}}]);