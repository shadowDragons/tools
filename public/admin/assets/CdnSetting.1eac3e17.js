import{s as B,g as F,r as N,u as h}from"./column.6d3cfc6f.js";import{d as b,r as S,u as E,s as k,_ as y,e as $,x as j,w as t,h as e,j as p,g as m,bw as V,ae as w,y as A,A as M,l as J,D as P,C as U,aU as x,aV as R}from"./index.e68eab72.js";const T=b({setup(){const n=S(null),s=E();let o=k(B);F().then(a=>{for(const u of a)o[u.key]=u.value});function r(){n.value.validate(a=>{if(a)s.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F");else{let u=[];for(const l in o)u.push({key:l,value:o[l]});h(u).then(()=>{s.success("\u66F4\u65B0\u6210\u529F")})}})}function c(){n.value.restoreValidation()}return{formRef:n,state:o,rules:N,formSubmit:r,resetForm:c}}}),q=m("br",null,null,-1);function z(n,s,o,r,c,a){const u=V,l=w,i=A,d=M,f=J,g=P,C=U,v=x,D=R;return $(),j(D,{cols:"2 s:1 m:1 l:1 xl:2 2xl:3",responsive:"screen"},{default:t(()=>[e(v,null,{default:t(()=>[e(u,{title:"\u9ED8\u8BA4\u4E0B\u8F7D\u6E90",type:"info"},{default:t(()=>[p(" NPM CDN\u9ED8\u8BA4\u6E90: https://cdn.jsdelivr.net/npm "),q,p(" CDNJS\u6E90: https://cdn.staticfile.org ")]),_:1}),e(l),e(C,{"label-width":80,model:n.state,rules:n.rules,ref:"formRef"},{default:t(()=>[e(d,{label:"NPM CDN",path:"cdn.npm"},{default:t(()=>[e(i,{placeholder:"\u8BF7\u8F93\u5165NPM CDN",value:n.state["cdn.npm"],"onUpdate:value":s[0]||(s[0]=_=>n.state["cdn.npm"]=_)},null,8,["value"])]),_:1}),e(d,{label:"CDNJS CDN",path:"cdn.cdnjs"},{default:t(()=>[e(i,{placeholder:"\u8BF7\u8F93\u5165CDNJS CDN",value:n.state["cdn.cdnjs"],"onUpdate:value":s[1]||(s[1]=_=>n.state["cdn.cdnjs"]=_)},null,8,["value"])]),_:1}),m("div",null,[e(g,null,{default:t(()=>[e(f,{type:"primary",onClick:n.formSubmit},{default:t(()=>[p("\u4FDD\u5B58")]),_:1},8,["onClick"])]),_:1})])]),_:1},8,["model","rules"])]),_:1})]),_:1})}var I=y(T,[["render",z]]);export{I as default};