(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.startFromScratch=t.BaseEditor=void 0,t.startFromText=function(e){var t=r.ContentState.createFromText(e);return r.EditorState.createWithContent(t,o.default)};var r=n(48),o=u(n(147)),a=u(n(143));function u(e){return e&&e.__esModule?e:{default:e}}t.BaseEditor=a.default;t.startFromScratch=function(){return r.EditorState.createEmpty(o.default)}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editorState,n=e.onChange,r=e.readOnly,o=e.handleKeyCommand,i=e.keyBinding,c=e.setRef,l=function(){};return o&&i?a.default.createElement(u.Editor,{editorState:t,onChange:n||l,handleKeyCommand:o,keyBindingFn:i,ref:c||l}):a.default.createElement(u.Editor,{editorState:t,onChange:n||l,ref:c||l,readOnly:r||!1})};var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r},u=n(48)},144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=[{strategy:function(e,t,n){var r=e.getText();0===r.ltrim().indexOf("#")&&t(1,r.length)},component:function(e){return a.default.createElement("span",{style:{fontSize:"28px"}},e.children)}},{strategy:function(e,t){0===e.getText().ltrim().indexOf("#")&&t(0,1)},component:function(e){return a.default.createElement("span",{style:{fontSize:"28px",color:"#ccc"}},e.children)}}]},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=[{strategy:function(e,t,n){var r=e.getText();0===r.ltrim().indexOf("##")&&t(2,r.length)},component:function(e){return a.default.createElement("span",{style:{fontSize:"24px"}},e.children)}},{strategy:function(e,t){0===e.getText().ltrim().indexOf("##")&&t(0,2)},component:function(e){return a.default.createElement("span",{style:{fontSize:"24px",color:"#ccc"}},e.children)}}]},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1),a=(r=o)&&r.__esModule?r:{default:r};t.default=[{strategy:function(e,t,n){var r=e.getText();0===r.ltrim().indexOf("###")&&t(3,r.length)},component:function(e){return a.default.createElement("span",{style:{fontSize:"20px"}},e.children)}},{strategy:function(e,t){0===e.getText().ltrim().indexOf("###")&&t(0,3)},component:function(e){return a.default.createElement("span",{style:{fontSize:"20px",color:"#ccc"}},e.children)}}]},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(n(1));var r=n(48),o=i(n(146)),a=i(n(145)),u=i(n(144));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}String.prototype.ltrim=function(){return this.replace(/(^\s*)/g,"")},t.default=new r.CompositeDecorator([].concat(c(o.default),c(a.default),c(u.default)))}}]);