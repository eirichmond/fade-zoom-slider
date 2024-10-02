(()=>{"use strict";var e,r={93:()=>{const e=window.wp.blocks,r=window.React,t=(window.wp.i18n,window.wp.blockEditor),a=window.wp.components,i=JSON.parse('{"UU":"elliottrichmond/fade-zoom-slider"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){const{images:l}=e;return(0,r.createElement)("div",{...(0,t.useBlockProps)()},(0,r.createElement)(t.MediaUploadCheck,null,(0,r.createElement)(t.MediaUpload,{onSelect:e=>i({images:e}),allowedTypes:["image"],multiple:!0,addToGallery:!0,gallery:!0,value:l.map((e=>e.id)),render:({open:e})=>(0,r.createElement)(a.Button,{className:"add-fade-slider-img",variant:"primary",onClick:e},"Open Media Library")})),l.map(((e,t)=>(0,r.createElement)("div",{className:"slide",key:t},(0,r.createElement)("img",{src:e.url,alt:e.alt}),(0,r.createElement)(a.Button,{className:"remove-fade-slider-img",isDestructive:!0,onClick:()=>(e=>{const r=l.filter(((r,t)=>t!==e));i({images:r})})(t)},"Remove")))))},save:function({attributes:e}){const{images:a}=e;return(0,r.createElement)("div",{...t.useBlockProps.save()},a.map(((e,t)=>(0,r.createElement)("div",{className:"slide",key:t},(0,r.createElement)("img",{src:e.url,alt:e.alt})))))}})}},t={};function a(e){var i=t[e];if(void 0!==i)return i.exports;var l=t[e]={exports:{}};return r[e](l,l.exports,a),l.exports}a.m=r,e=[],a.O=(r,t,i,l)=>{if(!t){var o=1/0;for(d=0;d<e.length;d++){for(var[t,i,l]=e[d],n=!0,s=0;s<t.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](t[s])))?t.splice(s--,1):(n=!1,l<o&&(o=l));if(n){e.splice(d--,1);var c=i();void 0!==c&&(r=c)}}return r}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,i,l]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={57:0,350:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var i,l,[o,n,s]=t,c=0;if(o.some((r=>0!==e[r]))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(s)var d=s(a)}for(r&&r(t);c<o.length;c++)l=o[c],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},t=globalThis.webpackChunkfade_zoom_slider=globalThis.webpackChunkfade_zoom_slider||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var i=a.O(void 0,[350],(()=>a(93)));i=a.O(i)})();