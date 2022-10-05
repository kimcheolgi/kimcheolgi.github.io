"use strict";(self.webpackChunkfleasman=self.webpackChunkfleasman||[]).push([[386],{8388:function(e,a){var r=[{category:"macbookair",item:"M1",nowPage:1,totalPage:10,contents:[1,2,3,4,5,6,7,8,9,10,11,12].map((function(e,a){return{id:e,image:"https://media.bunjang.co.kr/product/200821868_1_1664634630_w512.jpg",name:"macbook m1 \uae09\ucc98\ud569\ub2c8\ub2e4",state:"\ud310\ub9e4\uc911",price:82e4,like:332,comments:10,source:"\ubc88\uac1c\uc7a5\ud130",date:"2022-10-01"}}))}];a.Z=r},6386:function(e,a,r){r.r(a),r.d(a,{default:function(){return A}});var n=r(2982),t=r(885),c=r(7689),s=r(8388),i=r(2791),o=r(3360),l=r(1413),d=r(5987),f=r(1694),m=r.n(f),u=r(162),v=r(6543),x=r(7472),h=r(184),p=["bsPrefix","className","variant","as"],Z=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.variant,c=e.as,s=void 0===c?"img":c,i=(0,d.Z)(e,p),o=(0,u.vE)(r,"card-img");return(0,h.jsx)(s,(0,l.Z)({ref:a,className:m()(t?"".concat(o,"-").concat(t):o,n)},i))}));Z.displayName="CardImg";var b=Z,g=r(6040),j=["bsPrefix","className","as"],N=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.as,c=void 0===t?"div":t,s=(0,d.Z)(e,j),o=(0,u.vE)(r,"card-header"),f=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:o}}),[o]);return(0,h.jsx)(g.Z.Provider,{value:f,children:(0,h.jsx)(c,(0,l.Z)((0,l.Z)({ref:a},s),{},{className:m()(n,o)}))})}));N.displayName="CardHeader";var w=N,y=["bsPrefix","className","bg","text","border","body","children","as"],P=(0,x.Z)("h5"),k=(0,x.Z)("h6"),C=(0,v.Z)("card-body"),E=(0,v.Z)("card-title",{Component:P}),T=(0,v.Z)("card-subtitle",{Component:k}),z=(0,v.Z)("card-link",{Component:"a"}),D=(0,v.Z)("card-text",{Component:"p"}),R=(0,v.Z)("card-footer"),I=(0,v.Z)("card-img-overlay"),M=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.bg,c=e.text,s=e.border,i=e.body,o=e.children,f=e.as,v=void 0===f?"div":f,x=(0,d.Z)(e,y),p=(0,u.vE)(r,"card");return(0,h.jsx)(v,(0,l.Z)((0,l.Z)({ref:a},x),{},{className:m()(n,p,t&&"bg-".concat(t),c&&"text-".concat(c),s&&"border-".concat(s)),children:i?(0,h.jsx)(C,{children:o}):o}))}));M.displayName="Card",M.defaultProps={body:!1};var B=Object.assign(M,{Img:b,Title:E,Subtitle:T,Body:C,Link:z,Text:D,Header:w,Footer:R,ImgOverlay:I}),O=["as","bsPrefix","className"],S=["className"];var _=i.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,n=e.className,t=(0,d.Z)(e,O);r=(0,u.vE)(r,"col");var c=(0,u.pi)(),s=(0,u.zG)(),i=[],o=[];return c.forEach((function(e){var a,n,c,l=t[e];delete t[e],"object"===typeof l&&null!=l?(a=l.span,n=l.offset,c=l.order):a=l;var d=e!==s?"-".concat(e):"";a&&i.push(!0===a?"".concat(r).concat(d):"".concat(r).concat(d,"-").concat(a)),null!=c&&o.push("order".concat(d,"-").concat(c)),null!=n&&o.push("offset".concat(d,"-").concat(n))})),[(0,l.Z)((0,l.Z)({},t),{},{className:m().apply(void 0,[n].concat(i,o))}),{as:a,bsPrefix:r,spans:i}]}(e),n=(0,t.Z)(r,2),c=n[0],s=c.className,i=(0,d.Z)(c,S),o=n[1],f=o.as,v=void 0===f?"div":f,x=o.bsPrefix,p=o.spans;return(0,h.jsx)(v,(0,l.Z)((0,l.Z)({},i),{},{ref:a,className:m()(s,!p.length&&x)}))}));_.displayName="Col";var H=_,L=["bsPrefix","className","as"],F=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,t=e.as,c=void 0===t?"div":t,s=(0,d.Z)(e,L),i=(0,u.vE)(r,"row"),o=(0,u.pi)(),f=(0,u.zG)(),v="".concat(i,"-cols"),x=[];return o.forEach((function(e){var a,r=s[e];delete s[e],a=null!=r&&"object"===typeof r?r.cols:r;var n=e!==f?"-".concat(e):"";null!=a&&x.push("".concat(v).concat(n,"-").concat(a))})),(0,h.jsx)(c,(0,l.Z)((0,l.Z)({ref:a},s),{},{className:m().apply(void 0,[n,i].concat(x))}))}));F.displayName="Row";var G=F,W=r(5736);function U(e){var a=e.cData,r=e.resize>=1080?15:13,n=a.name.length>=r?a.name.substr(0,r)+"...":a.name,t=a.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c=function(e){var a=new Date,r=new Date(e),n=a.getTime()-r.getTime();return Math.floor(n/864e5)}(a.date),s=(function(e){var a=new Date,r=new Date(e),n=a.getTime()-r.getTime();Math.floor(n/36e5)}(a.date),c>=1?c+"\uc77c \uc804":"\uc2dc\uac04 \uc804");return(0,h.jsx)(H,{children:(0,h.jsx)("a",{style:{color:"black"},target:"_blank",href:"https://codingapple.com/",children:(0,h.jsxs)(B,{children:[(0,h.jsx)(B.Img,{variant:"top",src:a.image}),(0,h.jsx)(B.ImgOverlay,{children:(0,h.jsxs)(B.Title,{children:[(0,h.jsx)(W.Z,{bg:"light",text:"dark",children:a.source}),(0,h.jsx)(q,{state:a.state})]})}),(0,h.jsxs)(B.Body,{children:[(0,h.jsx)(B.Text,{children:n}),(0,h.jsxs)(B.Title,{children:[t,"\uc6d0 "]})]}),(0,h.jsx)(B.Footer,{children:(0,h.jsx)("small",{className:"text-muted",children:s})})]})})})}function q(e){var a=e.state;return"\ud310\ub9e4\uc644\ub8cc"==a?(0,h.jsx)(W.Z,{bg:"danger",children:a}):"\ud310\ub9e4\uc911"==a?(0,h.jsx)(W.Z,{bg:"success",children:a}):(0,h.jsx)(W.Z,{bg:"warning",children:a})}var A=function(e){var a=(0,i.useState)(window.innerWidth),r=(0,t.Z)(a,2),l=r[0],d=r[1],f=function(){d(window.innerWidth)};(0,i.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[]);var m=(0,c.UO)(),u=m.categoryName,v=m.itemName,x=(0,i.useState)(s.Z[0].contents),p=(0,t.Z)(x,2),Z=p[0],b=p[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{children:u}),(0,h.jsx)("h6",{children:v}),(0,h.jsx)(G,{xs:2,md:3,className:"g-4",children:Z.map((function(e,a){return(0,h.jsx)(U,{cData:e,resize:l},a)}))}),(0,h.jsx)(o.Z,{style:{margin:"30px"},variant:"outline-primary",onClick:function(){var e=(0,n.Z)(Z),a=e.slice(0,12),r=[].concat((0,n.Z)(e),(0,n.Z)(a));b(r)},children:" More..."})]})}}}]);
//# sourceMappingURL=386.d8e638b4.chunk.js.map