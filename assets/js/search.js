!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=202)}({202:function(e,t){summaryInclude=60;let n={shouldSort:!0,includeMatches:!0,threshold:.1,tokenize:!0,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:[{name:"title",weight:.8},{name:"description",weight:.5},{name:"tags",weight:.3},{name:"categories",weight:.3}]},r=new URLSearchParams(window.location.search).get("s");if(r)document.querySelector("#search-query").value=r,document.querySelector("#default-body").style.display="none",function(e){fetch("/registry/index.json").then(e=>e.json()).then(t=>{let r=new Fuse(t,n).search(e);r.length>0?i(r):document.querySelector("#search-results").innerHTML+="<p>No matches found</p>"})}(r);else{let e=document.querySelector("#default-body");"none"===e.style.display&&(e.style.display="block")}function i(e){e.forEach((e,t)=>{let i=e.item.description,s="",a=[];n.tokenize?a.push(r):e.matches.forEach(e=>{"tags"===e.key||"categories"===e.key?a.push(e.value):"description"===e.key&&(start=e.indices[0][0]-summaryInclude>0?e.indices[0][0]-summaryInclude:0,end=e.indices[0][1]+summaryInclude<i.length?e.indices[0][1]+summaryInclude:i.length,s+=i.substring(start,end),a.push(e.value.substring(e.indices[0][0],e.indices[0][1]-mvalue.indices[0][0]+1)))}),s.length<1&&i.length>0&&(s+=i.substring(0,2*summaryInclude));let l=function(e,t){let n,r,i,s,a,l;r=/\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g,i=e;for(;null!==(n=r.exec(e));)i=t[n[1]]?i.replace(n[0],n[2]):i.replace(n[0],"");for(s in e=i,t)a="\\$\\{\\s*"+s+"\\s*\\}",l=new RegExp(a,"g"),e=e.replace(l,t[s]);return e}(document.querySelector("#search-result-template").innerHTML,{key:t,title:e.item.title,link:e.item.permalink,tags:e.item.tags,categories:e.item.categories,description:e.item.description,repo:e.item.repo,registryType:e.item.registryType,language:e.item.language,snippet:s,otVersion:e.item.otVersion});document.querySelector("#search-results").innerHTML+=l})}let s="all",a="all";document.addEventListener("input",(function(e){"componentFilter"===e.target.id&&(a=e.target.value),"languageFilter"===e.target.id&&(s=e.target.value),function(){let e=[...document.getElementsByClassName("component")];"all"===a&&"all"===s?e.forEach(e=>e.classList.remove("is-hidden")):e.forEach(e=>{const t=e.dataset.registrytype,n=e.dataset.registrylanguage;t!==a&&"all"!==a||n!==s&&"all"!==s?e.classList.add("is-hidden"):e.classList.remove("is-hidden")})}()}))}});