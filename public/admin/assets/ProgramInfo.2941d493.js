import{aY as _,d as h,r as d,az as i,e as c,x as p,w as e,h as o,g as t,t as n,j as m,l as f,ba as g,n as v}from"./index.e68eab72.js";function b(){return _.request({url:"/master/system/info",method:"GET"})}const F=t("th",null,"\u7A0B\u5E8F\u540D\u79F0",-1),x=t("th",null,"\u4F5C\u8005",-1),C=t("th",null,"\u5F53\u524D\u7248\u672C",-1),y=t("th",null,"\u6F14\u793A\u5730\u5740",-1),B=t("tr",null,[t("th",null,"Github"),t("td",null,[t("div",{class:"flex"},[t("iframe",{src:"https://ghbtns.com/github-btn.html?user=aoaostar&repo=toolbox&type=star&count=true",frameborder:"0",scrolling:"0",width:"100px",height:"20px"}),t("iframe",{src:"https://ghbtns.com/github-btn.html?user=aoaostar&repo=toolbox&type=fork&count=true",frameborder:"0",scrolling:"0",width:"100px",height:"20px"})])])],-1),E=t("th",null,"\u6846\u67B6\u7248\u672C",-1),D=t("th",null,"PHP\u7248\u672C",-1),k=t("th",null,"\u6570\u636E\u5E93\u7248\u672C",-1),w=t("th",null,"\u64CD\u4F5C\u7CFB\u7EDF",-1),P=t("th",null,"\u670D\u52A1\u5668IP",-1),A=t("th",null,"\u670D\u52A1\u5668\u65F6\u95F4",-1),V=h({__name:"ProgramInfo",setup(q){const u=d({app_name:"",author:"Pluto",version:"",framework_version:"",php_version:"",mysql_version:"5.7.30",os:"",host:"",date:""});return i(()=>{b().then(l=>{u.value=l})}),(l,I)=>{const s=f,a=g,r=v;return c(),p(r,{segmented:{content:!0},"content-style":"padding-top: 0;padding-bottom: 0;",bordered:!1,size:"small",title:"\u7248\u672C\u4FE1\u606F",class:"mt-4"},{default:e(()=>[o(a,{"single-line":!1},{default:e(()=>[t("tbody",null,[t("tr",null,[F,t("td",null,n(u.value.app_name),1)]),t("tr",null,[x,t("td",null,n(u.value.author),1)]),t("tr",null,[C,t("td",null,n(u.value.version),1)]),t("tr",null,[y,t("td",null,[o(s,{text:"",tag:"a",href:"https://tool.aoaostar.com",target:"_blank",type:"primary"},{default:e(()=>[m(" \u70B9\u51FB\u8BBF\u95EE ")]),_:1})])]),B,t("tr",null,[E,t("td",null,n(u.value.framework_version),1)]),t("tr",null,[D,t("td",null,n(u.value.php_version),1)]),t("tr",null,[k,t("td",null,n(u.value.mysql_version),1)]),t("tr",null,[w,t("td",null,n(u.value.os),1)]),t("tr",null,[P,t("td",null,n(u.value.host),1)]),t("tr",null,[A,t("td",null,n(u.value.date),1)])])]),_:1})]),_:1})}}});export{V as default};
