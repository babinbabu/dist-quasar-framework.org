!function(){function e(){m.classList.toggle("open"),f.classList.toggle("active")}function t(){var e=c&&c.scrollTop||l.scrollTop,t=d.offsetHeight;if(!E&&y){for(var a,n=0;n<y.length;n++){var i=y[n];if(i.offsetTop>=e+t+100){a||(a=i);break}a=i}a&&o(a.id)}}function a(e){var t=document.createElement("li"),a=e.textContent.replace(/\(.*\)$/,"");return e.id=e.id.replace(/\(.*\)$/,"").replace(/\$/,""),t.innerHTML='<a class="section-link" data-scroll href="#'+e.id+'">'+a+"</a>",t}function n(e){for(var t=[],a=e.nextSibling;a&&"H2"!==a.tagName;)"H3"===a.tagName&&t.push(a),a=a.nextSibling;return t}function i(e,t){var n=document.createElement("ul");return t&&(n.className="menu-sub"),e.forEach(function(e){n.appendChild(a(e))}),n}function o(e){var t=m.querySelector(".section-link.active"),a="string"==typeof e?m.querySelector('.section-link[href="#'+e+'"]'):e;if(a!==t&&(t&&t.classList.remove("active"),a.classList.add("active"),window.themePreview&&!window.themePreview.fullPageDemo)){var n=$(a).attr("href").substring(1),i=$('.content a[data-scroll][href="#'+n+'"]').next();window.themePreview.selectPage(i?i.data("demo"):"")}}function r(e){var t=document.createElement("a");t.href="#"+e.id,t.setAttribute("data-scroll",""),e.parentNode.insertBefore(t,e),t.appendChild(e)}var s=[].forEach,c=(document.getElementById("main"),document.documentElement),l=document.body,d=document.getElementById("header"),m=document.getElementById("sidebar"),u=document.querySelector(".content"),p=400,h=d.querySelector(".menu-button"),f=document.querySelector(".sidebar-backdrop"),w=document.getElementById("version-select");if(w.addEventListener("change",function(){var e=w.options[w.selectedIndex].value;if(e){w.selectedIndex=0;var t=window.open("https://"+e+".quasar-framework.org","_blank");t.focus()}}),m){var v=window.location.pathname.split("/")[1],g=sessionStorage.getItem("sidebar-"+v);g&&(m.scrollTop=g),m.addEventListener("scroll",function(){sessionStorage.setItem("sidebar-"+v,m.scrollTop)}),h.addEventListener("click",e),f.addEventListener("click",e);var b=m.querySelector(".sidebar-link.current");if(b){var k,y=[];k=document.createElement("ul"),k.className="menu-sub",b.parentNode.appendChild(k);var x=u.querySelectorAll("h2");x.length?s.call(x,function(e){k.appendChild(a(e));var t=n(e);y.push(e),y.push.apply(y,t),t.length&&k.appendChild(i(t))}):(x=u.querySelectorAll("h3"),s.call(x,function(e){k.appendChild(a(e)),y.push(e)}));var E=!1;k.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("section-link")&&(m.classList.remove("open"),o(e.target),E=!0)},!0),y.forEach(r),smoothScroll.init({speed:p,offset:window.innerWidth>720?100:15,callback:function(){setTimeout(function(){E=!1},100)}})}}(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}})();window.addEventListener("scroll",t),window.addEventListener("resize",t);for(var L=document.links,q=0,S=L.length;q<S;q++)L[q].hostname!==window.location.hostname&&(L[q].target="_blank");window.isMobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)),window.isMobile&&$(".content table").wrap('<div style="overflow-x: auto;"></div>')}(),$(function(){function e(e,t){return"https://github.com/quasarframework/quasar-play/tree/master/src/pages/showcase/"+(t||e+".vue")}function t(e,t){return 0===t.indexOf("http")?t:"/quasar-play/"+e+"/index.html#/showcase/"+t}function a(a,n,i){return'<div class="demo-links '+(i?"demo-always-visible":"")+'">Demo: '+w.map(function(e){return'<a class="spawn-demo" href="'+t(e,a)+'" target="_blank"><i class="fa fa-'+e+'"></i></a>'}).join(" ")+' <a class="spawn-demo" target="_blank" href="'+e(a,n)+'">Source <i class="fa fa-file-code-o"></i></a></div>'}var n,i,o=$("#preview"),r=$("#preview-chooser a"),s=$("#preview .theme"),c=$("#preview iframe"),l=$("#main > .content"),d=localStorage.getItem("theme")||"android",m=l.find("input[data-demo]"),u=l.find("input[data-fullpage-demo]"),p=l.find("input[data-external-demo]"),h=o.find(".view-source"),f=o.find(".desktop-launcher"),w=["android","apple"];if(p.each(function(){var e=$(this),t=e.data("external-demo"),n=e.data("source");e.after(a(t,n,!0))}),r.length&&(m.length||u.length)){if(window.isMobile)return m.each(function(){var e=$(this),t=e.data("demo");e.replaceWith(a(t,!0))}),void u.replaceWith(a(u.data("fullpage-demo"),u.data("source"),!0));0===u.length&&$("#main .footer").css("margin-bottom","100vh"),r.click(function(){window.themePreview.selectTheme($(this).data("theme"))}),window.themePreview={show:function(e,t){o.css("display","block"),l.addClass("with-previewer"),n=e,i=t,this.selectTheme(d)},hide:function(){o.css("display","none"),l.removeClass("with-previewer")},selectPage:function(a){c.each(function(){var n=$(this),o=$(this).attr("id").split("-")[0];d===o&&(a?(n.attr("src",t(o,a)),h.add(f).css("display",0===a.indexOf("http")?"none":"inline-block"),h.attr("href",e(a,i)),f.attr("href",t(o,a))):(n.attr("src",""),h.add(f).css("display","none")))})},selectTheme:function(e){r.removeClass("active"),$('#preview #preview-chooser a[data-theme="'+e+'"]').addClass("active"),s.css("display","none"),$("#"+e+"-preview").css("display","block"),localStorage.setItem("theme",e),d=e,this.selectPage(n)}},u.length>0?(window.themePreview.fullPageDemo=!0,window.themePreview.show(u.data("fullpage-demo"),u.data("source"))):window.themePreview.show()}}),$(function(){"use strict";function e(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function t(t){var a=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text().replace(/^.*\/\/[^\/]+/,"")}}).get(),n=document.getElementById("local-search-input"),i=document.getElementById("local-search-result");$("input#local-search-input").keyup(function(e){27==e.keyCode&&($(this).val(""),i.innerHTML="")}),n.addEventListener("input",function(){var t="<ul>",n=this.value.trim();i.innerHTML="",n.length<=0||(n=n.toLowerCase().split(/[\s\-]+/),a.forEach(function(a){var i=!0,o=a.title.trim().toLowerCase(),r=a.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),s=a.url,c=-1,l=-1,d=-1;if(console.log(s),""!=o&&""!=r&&n.forEach(function(e,t){c=o.indexOf(e),l=r.indexOf(e),c<0&&l<0?i=!1:(l<0&&(l=0),0==t&&(d=l))}),i){var m=a.content.trim().replace(/<[^>]+>/g,"");if(!m.length)return;if(t+='<li><a href="'+s+'" class="search-result-title">'+e(o)+"</a>",d>=0){var u=d-100,p=d+100;u<0&&(u=0),0==u&&(p=200),p>m.length&&(p=m.length);var h=m.substring(u,p);n.forEach(function(e){var t=new RegExp(e,"gi");h=h.replace(t,"<code>"+e+"</code>")}),t+='<a class="search-result" href="'+s+'"><p>'+h+"...</p></a>"}t+="</li>"}}),t+="</ul>",i.innerHTML=t)}),$("#loading-search").slideToggle(),$("#search-content").slideToggle()}0===window.location.pathname.indexOf("/search")&&$.ajax({url:"/search.xml",dataType:"xml",success:t})});