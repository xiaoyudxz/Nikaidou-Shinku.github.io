// build time:Sat Aug 03 2019 17:26:33 GMT+0800 (GMT+08:00)
(function(e){var n=false;if(typeof define==="function"&&define.amd){define(e);n=true}if(typeof exports==="object"){module.exports=e();n=true}if(!n){var t=window.Cookies;var r=window.Cookies=e();r.noConflict=function(){window.Cookies=t;return r}}})(function(){function e(){var e=0;var n={};for(;e<arguments.length;e++){var t=arguments[e];for(var r in t){n[r]=t[r]}}return n}function n(t){function r(n,o,i){var c;if(typeof document==="undefined"){return}if(arguments.length>1){i=e({path:"/"},r.defaults,i);if(typeof i.expires==="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+i.expires*864e5);i.expires=f}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(o);if(/^[{[]/.test(c)){o=c}}catch(a){}if(!t.write){o=encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)}else{o=t.write(o,n)}n=encodeURIComponent(String(n));n=n.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);n=n.replace(/[()]/g,escape);var u="";for(var s in i){if(!i[s]){continue}u+="; "+s;if(i[s]===true){continue}u+="="+i[s]}return document.cookie=n+"="+o+u}if(!n){c={}}var p=document.cookie?document.cookie.split("; "):[];var d=/(%[0-9A-Z]{2})+/g;var l=0;for(;l<p.length;l++){var v=p[l].split("=");var C=v.slice(1).join("=");if(C.charAt(0)==='"'){C=C.slice(1,-1)}try{var g=v[0].replace(d,decodeURIComponent);C=t.read?t.read(C,g):t(C,g)||C.replace(d,decodeURIComponent);if(this.json){try{C=JSON.parse(C)}catch(a){}}if(n===g){c=C;break}if(!n){c[g]=C}}catch(a){}}return c}r.set=r;r.get=function(e){return r.call(r,e)};r.getJSON=function(){return r.apply({json:true},[].slice.call(arguments))};r.defaults={};r.remove=function(n,t){r(n,"",e(t,{expires:-1}))};r.withConverter=n;return r}return n(function(){})});
//rebuild by neat 