$(document).ready(function(l){$(window).scroll(function(){100<$(this).scrollTop()?($(".scroll-up").fadeIn(),$(".scroll-up").addClass("show")):($(".scroll-up").fadeOut(),$(".scroll-up").removeClass("show"))}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}),$(document).ready(function(){$(".validation-calculator > div").hide(),$(".validation-calculator").hide(),$(".client-question__content .button").click(function(){$(".validation-calculator").fadeIn(),$(".number-validation").fadeIn(),$("body").addClass("locked")}),$(".number-validation .button").click(function(){$(".number-validation").fadeOut(),$(".code-confirmation").fadeIn()}),$(".code-confirmation .button").click(function(){$(".code-confirmation").fadeOut(),$(".thank-you").fadeIn()}),$(".thank-you .button").click(function(){$(".thank-you").fadeOut(),$(".validation-calculator").fadeOut(),$("body").removeClass("locked")})}),function(e){e(function(){e("nav ul li a:not(:only-child)").click(function(l){e(this).siblings(".nav-dropdown").toggle(),e(".nav-dropdown").not(e(this).siblings()).hide(),l.stopPropagation()}),e("html").click(function(){e(".nav-dropdown").hide()}),e("#nav-toggle").click(function(){e("nav ul").slideToggle()}),e("#nav-toggle").on("click",function(){this.classList.toggle("active")})})}(jQuery);var ClickableMap={},myUsaMap=(!function(){var i="1.0.0",c="cmm-usa-",p=0,b=this;function r(l){if(!this.statesData[l].isHovering){this.statesData[l].isHovering=!0;var e=b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(l)),i=b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(l)+" path"),r=b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(l)+" text");if(this.statesData[l].isDisabled?(i.style.fill=this.globalData.disabledFill,e.style.cursor="default"):(this.statesData[l].overrideHoverFillEnabled&&null!=this.statesData[l].overrideHoverFill?i.style.fill=this.statesData[l].overrideHoverFill:i.style.fill=this.globalData.hoverFill,r.style.fill=this.globalData.hoverLabelColor,e.style.cursor="pointer"),this.globalData.showStateTitleAndDescOnHover){var n=b.getEleByQuery("#"+this.$map.id+" ."+c+"hover-state-info"),r=null==this.statesData[l].title?"":this.statesData[l].title,o=null==this.statesData[l].description?"":this.statesData[l].description,a=null==this.statesData[l].longDescription?"":this.statesData[l].longDescription,t=document.createElement("span"),s=document.createElement("span");for(t.textContent=r,""!=a?s.innerHTML=a:s.textContent=o;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(t),n.appendChild(s),n.style.display="block"}!this.statesData[l].isDisabled&&this.globalData.enableShadows&&((statePathBlur=i.cloneNode(!0)).setAttribute("filter","url(#"+this.$map.id+"-blur-filter)"),statePathBlur.setAttribute("class",c+"state-shadow"),e.parentNode.appendChild(statePathBlur),e.parentNode.appendChild(e))}}function n(l){this.statesData[l].isHovering=!1;var e=b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(l)+" path"),i=b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(l)+" text"),r=i.getAttribute("class")==c+"outer-label",l=(this.globalData.showStateTitleAndDescOnHover&&(b.getEleByQuery("#"+this.$map.id+" ."+c+"hover-state-info").style.display="none"),this.statesData[l].isDisabled?e.style.fill=this.globalData.disabledFill:(this.statesData[l].overrideFillEnabled&&null!=this.statesData[l].overrideFill?e.style.fill=this.statesData[l].overrideFill:e.style.fill=this.globalData.fill,i.style.fill=r?this.globalData.outerLabelColor:this.globalData.innerLabelColor),document.querySelectorAll("#"+this.$map.id+" ."+c+"state-shadow"));Array.prototype.map.call(Array.prototype.slice.call(l),function(l){l.parentNode.removeChild(l)})}this.getEleById=function(l){return document.getElementById(l)},this.getEleByQuery=function(l){return document.querySelector(l)},this.stateIdToDomClass=function(l){return c+"state-"+l.toLowerCase()},this.version=i,this.create=function(l){return new this.mapObject(l)},this.mapObject=function(l){for(var e in this.$map=b.getEleById(l),this.globalData={version:i,width:"800",widthUnits:"px",fontSize:"12px",fontName:"Arial",fill:"#97e2bb",hoverFill:"#ffffff",disabledFill:"#c2c2c2",innerLabelColor:"#000000",outerLabelColor:"#000000",hoverLabelColor:"#D64933",borderType:null,borderStroke:"#49bc95",enableShadows:!0,popLink:!1,showStateTitleAndDescOnHover:!0,showLinksList:!1,globalLinkUrl:null,globalJsCallback:null,mapTitle:"Choose your state below",creditLink:""},this.statesData=function(){var l,e={AL:{fullName:"Alabama"},AK:{fullName:"Alaska"},AZ:{fullName:"Arizona"},AR:{fullName:"Arkansas"},CA:{fullName:"California"},CO:{fullName:"Colorado"},CT:{fullName:"Connecticut"},DE:{fullName:"Delaware"},DC:{fullName:"District Of Columbia"},FL:{fullName:"Florida"},GA:{fullName:"Georgia"},HI:{fullName:"Hawaii"},ID:{fullName:"Idaho"},IL:{fullName:"Illinois"},IN:{fullName:"Indiana"},IA:{fullName:"Iowa"},KS:{fullName:"Kansas"},KY:{fullName:"Kentucky"},LA:{fullName:"Louisiana"},ME:{fullName:"Maine"},MD:{fullName:"Maryland"},MA:{fullName:"Massachusetts"},MI:{fullName:"Michigan"},MN:{fullName:"Minnesota"},MS:{fullName:"Mississippi"},MO:{fullName:"Missouri"},MT:{fullName:"Montana"},NE:{fullName:"Nebraska"},NV:{fullName:"Nevada"},NH:{fullName:"New Hampshire"},NJ:{fullName:"New Jersey"},NM:{fullName:"New Mexico"},NY:{fullName:"New York"},NC:{fullName:"North Carolina"},ND:{fullName:"North Dakota"},OH:{fullName:"Ohio"},OK:{fullName:"Oklahoma"},OR:{fullName:"Oregon"},PA:{fullName:"Pennsylvania"},RI:{fullName:"Rhode Island"},SC:{fullName:"South Carolina"},SD:{fullName:"South Dakota"},TN:{fullName:"Tennessee"},TX:{fullName:"Texas"},UT:{fullName:"Utah"},VT:{fullName:"Vermont"},VA:{fullName:"Virginia"},WA:{fullName:"Washington"},WV:{fullName:"West Virginia"},WI:{fullName:"Wisconsin"},WY:{fullName:"Wyoming"}};for(l in e)e.hasOwnProperty(l)&&(e[l].title=e[l].fullName,e[l].description=null,e[l].longDescription=null,e[l].linkUrl=null,e[l].isDisabled=!1,e[l].isHovering=!1,e[l].cssClass=null,e[l].overrideFill=null,e[l].overrideFillEnabled=!1,e[l].overrideHoverFill=null,e[l].overrideHoverFillEnabled=!1,e[l].overridePopLink=null,p++);return e}(),this.statesData)this.statesData.hasOwnProperty(e)&&!function(e){var l=b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(e)),i=this;l.addEventListener("mouseover",function(l){r.call(i,e)}),l.addEventListener("mouseout",function(l){n.call(i,e)})}.call(this,e);b.getEleByQuery("#"+this.$map.id+" ."+c+"blur-filter").setAttribute("id",this.$map.id+"-blur-filter")},this.mapObject.prototype.getDomId=function(){return this.$map.id},this.mapObject.prototype.draw=function(){for(var l in this.$map.style.width=this.globalData.width+this.globalData.widthUnits,this.$map.style.backgroundColor=this.globalData.backgroundFill,this.$map.style.fontFamily=this.globalData.fontName,this.$map.style.fontSize=this.globalData.fontSize,b.getEleByQuery("#"+this.$map.id+" ."+c+"title").textContent=this.globalData.mapTitle,null!=this.globalData.creditLink&&""!=this.globalData.creditLink?(b.getEleByQuery("#"+this.$map.id+" ."+c+"credit-link").innerHTML='<a target="_blank" href=""></a>',b.getEleByQuery("#"+this.$map.id+" ."+c+"credit-link a").textContent=this.globalData.creditLink):b.getEleByQuery("#"+this.$map.id+" ."+c+"credit-link").innerHTML="",this.statesData)if(this.statesData.hasOwnProperty(l)){for(var e=b.stateIdToDomClass(l),i=b.getEleByQuery("#"+this.$map.id+" ."+e+" title"),r=b.getEleByQuery("#"+this.$map.id+" ."+e+" desc"),i=(i.textContent=this.statesData[l].title,r.textContent=this.statesData[l].description,b.getEleByQuery("#"+this.$map.id+" ."+e+" path")),n=(i.style.stroke=this.globalData.borderStroke,null!=this.globalData.borderType?i.style.strokeDasharray=this.globalData.borderType:i.style.strokeDasharray="none",this.statesData[l].isDisabled?i.style.fill=this.globalData.disabledFill:this.statesData[l].overrideFillEnabled&&null!=this.statesData[l].overrideFill?i.style.fill=this.statesData[l].overrideFill:i.style.fill=this.globalData.fill,document.querySelectorAll("#"+this.$map.id+" ."+e+" text")),o=0;o<n.length;++o)n.item(o).style.fill=this.globalData.innerLabelColor;this.wireStateLink(l,!1)}for(var a=document.querySelectorAll("#"+this.$map.id+" ."+c+"outer-label"),o=0;o<a.length;++o)a.item(o).style.fill=this.globalData.outerLabelColor;this.globalData.showLinksList?this.displayMapLinksList():b.getEleByQuery("#"+this.$map.id+" ."+c+"listview").innerHTML="",this.$map.style.display="block"},this.mapObject.prototype.getGlobalData=function(){return this.globalData},this.mapObject.prototype.getStatesData=function(){return this.statesData},this.mapObject.prototype.setGlobalData=function(l){for(var e in this.globalData)this.globalData.hasOwnProperty(e)&&l.hasOwnProperty(e)&&(this.globalData[e]=l[e])},this.mapObject.prototype.setStatesData=function(l){for(var e in this.statesData)if(this.statesData.hasOwnProperty(e)&&l.hasOwnProperty(e))for(var i in this.statesData[e])this.statesData[e].hasOwnProperty(i)&&l[e].hasOwnProperty(i)&&(this.statesData[e][i]=l[e][i])},this.mapObject.prototype.wireStateLink=function(r,l,e){var n,i=null,e=(e=e||"",b.getEleByQuery("#"+this.$map.id+" ."+b.stateIdToDomClass(r)+e));null!=this.statesData[r].cssClass&&e.setAttribute("class",e.getAttribute("class")+" "+this.statesData[r].cssClass),this.statesData[r].isDisabled?i=null:null!=this.statesData[r].linkUrl?(n=this,i=function(l){var e=!1;null!=n.statesData[r].overridePopLink?e=n.statesData[r].overridePopLink:n.globalData.popLink&&(e=!0),e?window.open(n.statesData[r].linkUrl):document.location.href=n.statesData[r].linkUrl}):null!=this.globalData.globalLinkUrl?(n=this,i=function(l){var e=n.globalData.globalLinkUrl.replaceAll("@state",r),i=!1;null!=n.statesData[r].overridePopLink?i=n.statesData[r].overridePopLink:n.globalData.popLink&&(i=!0),i?window.open(e):document.location.href=e}):null!=this.globalData.globalJsCallback&&(n=this,i=function(l){var e=window[n.globalData.globalJsCallback];"function"==typeof e?e(r):console.log("Unable to execute function: "+n.globalData.globalJsCallback+'("'+r+'")')}),e.onclick=i,l&&(e.className=e.className.replace(" "+(l=c+"live-link"),""),null!=i)&&(e.className=e.className+" "+l)},this.mapObject.prototype.displayMapLinksList=function(){var l=b.getEleByQuery("#"+this.$map.id+" ."+c+"listview"),e=[];for(i in this.statesData)this.statesData.hasOwnProperty(i)&&e.push(i);for(var i,r=Math.floor(20),n=Math.ceil(p/5),o=0,a=0;a<5;++a){var t=e.slice(o,o+n);if(o+=n,0<t.length){var s=document.createElement("UL");s.style.maxWidth=r+"%";for(var d=0;d<t.length;++d){var u=document.createElement("LI"),v=(u.appendChild(document.createElement("SPAN")),document.createElement("A"));v.className=c+"state-"+t[d].toLowerCase()+"-listview",v.textContent=this.statesData[t[d]].title,u.appendChild(v),s.appendChild(u)}l.appendChild(s)}}for(i in this.statesData)this.statesData.hasOwnProperty(i)&&this.wireStateLink(i,!0,"-listview")},"undefined"!=typeof exports&&(module.exports=this)}.apply(ClickableMap),ClickableMap.create("cmm-usa"));myUsaMap.setGlobalData({version:"1.0.0",width:"100","max-width":"500px",widthUnits:"%",fontSize:"12px",fontName:"Arial",fill:"#ea614e",hoverFill:"#ffffff",disabledFill:"#c2c2c2",backgroundFill:"#eeeeed",innerLabelColor:"#ffffff",outerLabelColor:"#000000",hoverLabelColor:"#d64933",borderType:null,borderStroke:"#ffffff",enableShadows:!0,popLink:!1,showStateTitleAndDescOnHover:!1,showLinksList:!1,globalLinkUrl:null,globalJsCallback:null,mapTitle:null,creditLink:""}),state_info={AL:{fullName:"Alabama",title:"Alabama",description:null,longDescription:null,linkUrl:"alabama/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},AK:{fullName:"Alaska",title:"Alaska",description:null,longDescription:null,linkUrl:"alaska/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:"#000000",overrideFillEnabled:!1,overrideHoverFill:"#000000",overrideHoverFillEnabled:!1,overridePopLink:null},AZ:{fullName:"Arizona",title:"Arizona",description:null,longDescription:null,linkUrl:"arizona/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},AR:{fullName:"Arkansas",title:"Arkansas",description:null,longDescription:null,linkUrl:"arkansas",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},CA:{fullName:"California",title:"California",description:null,longDescription:null,linkUrl:"california/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:"#000000",overrideFillEnabled:!1,overrideHoverFill:"#000000",overrideHoverFillEnabled:!1,overridePopLink:null},CO:{fullName:"Colorado",title:"Colorado",description:null,longDescription:null,linkUrl:"colorado/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},CT:{fullName:"Connecticut",title:"Connecticut",description:null,longDescription:null,linkUrl:"connecticut/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},DE:{fullName:"Delaware",title:"Delaware",description:null,longDescription:null,linkUrl:"delaware/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},DC:{fullName:"Washington, D.C.",title:"Washington, D.C.",description:null,longDescription:null,linkUrl:"/dc/washington/mesothelioma/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},FL:{fullName:"Florida",title:"Florida",description:null,longDescription:null,linkUrl:"florida/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},GA:{fullName:"Georgia",title:"Georgia",description:null,longDescription:null,linkUrl:"georgia/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},HI:{fullName:"Hawaii",title:"Hawaii",description:null,longDescription:null,linkUrl:"hawaii/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:"#000000",overrideFillEnabled:!1,overrideHoverFill:"#000000",overrideHoverFillEnabled:!1,overridePopLink:null},ID:{fullName:"Idaho",title:"Idaho",description:null,longDescription:null,linkUrl:"idaho/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},IL:{fullName:"Illinois",title:"Illinois",description:null,longDescription:null,linkUrl:"illinois/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},IN:{fullName:"Indiana",title:"Indiana",description:null,longDescription:null,linkUrl:"indiana/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},IA:{fullName:"Iowa",title:"Iowa",description:null,longDescription:null,linkUrl:"iowa/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},KS:{fullName:"Kansas",title:"Kansas",description:null,longDescription:null,linkUrl:"kansas/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},KY:{fullName:"Kentucky",title:"Kentucky",description:null,longDescription:null,linkUrl:"kentucky/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},LA:{fullName:"Louisiana",title:"Louisiana",description:null,longDescription:null,linkUrl:"louisiana/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},ME:{fullName:"Maine",title:"Maine",description:null,longDescription:null,linkUrl:"maine/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MD:{fullName:"Maryland",title:"Maryland",description:null,longDescription:null,linkUrl:"maryland/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MA:{fullName:"Massachusetts",title:"Massachusetts",description:null,longDescription:null,linkUrl:"massachusetts/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MI:{fullName:"Michigan",title:"Michigan",description:null,longDescription:null,linkUrl:"michigan/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MN:{fullName:"Minnesota",title:"Minnesota",description:null,longDescription:null,linkUrl:"minnesota/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MS:{fullName:"Mississippi",title:"Mississippi",description:null,longDescription:null,linkUrl:"mississippi/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MO:{fullName:"Missouri",title:"Missouri",description:null,longDescription:null,linkUrl:"missouri/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},MT:{fullName:"Montana",title:"Montana",description:null,longDescription:null,linkUrl:"montana/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NE:{fullName:"Nebraska",title:"Nebraska",description:null,longDescription:null,linkUrl:"nebraska/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NV:{fullName:"Nevada",title:"Nevada",description:null,longDescription:null,linkUrl:"nevada/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NH:{fullName:"New Hampshire",title:"New Hampshire",description:null,longDescription:null,linkUrl:"new-hampshire/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NJ:{fullName:"New Jersey",title:"New Jersey",description:null,longDescription:null,linkUrl:"new-jersey/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NM:{fullName:"New Mexico",title:"New Mexico",description:null,longDescription:null,linkUrl:"new-mexico/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NY:{fullName:"New York",title:"New York",description:null,longDescription:null,linkUrl:"new-york/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},NC:{fullName:"North Carolina",title:"North Carolina",description:null,longDescription:null,linkUrl:"north-carolina/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},ND:{fullName:"North Dakota",title:"North Dakota",description:null,longDescription:null,linkUrl:"north-dakota/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},OH:{fullName:"Ohio",title:"Ohio",description:null,longDescription:null,linkUrl:"ohio/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},OK:{fullName:"Oklahoma",title:"Oklahoma",description:null,longDescription:null,linkUrl:"oklahoma/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},OR:{fullName:"Oregon",title:"Oregon",description:null,longDescription:null,linkUrl:"oregon/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},PA:{fullName:"Pennsylvania",title:"Pennsylvania",description:null,longDescription:null,linkUrl:"pennsylvania/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},RI:{fullName:"Rhode Island",title:"Rhode Island",description:null,longDescription:null,linkUrl:"rhode-island/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},SC:{fullName:"South Carolina",title:"South Carolina",description:null,longDescription:null,linkUrl:"south-carolina/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},SD:{fullName:"South Dakota",title:"South Dakota",description:null,longDescription:null,linkUrl:"south-dakota/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},TN:{fullName:"Tennessee",title:"Tennessee",description:null,longDescription:null,linkUrl:"tennessee/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},TX:{fullName:"Texas",title:"Texas",description:null,longDescription:null,linkUrl:"texas/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:"#000000",overrideFillEnabled:!1,overrideHoverFill:"#000000",overrideHoverFillEnabled:!1,overridePopLink:null},UT:{fullName:"Utah",title:"Utah",description:null,longDescription:null,linkUrl:"utah/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},VT:{fullName:"Vermont",title:"Vermont",description:null,longDescription:null,linkUrl:"vermont/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},VA:{fullName:"Virginia",title:"Virginia",description:null,longDescription:null,linkUrl:"virginia/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},WA:{fullName:"Washington",title:"Washington",description:null,longDescription:null,linkUrl:"washington/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},WV:{fullName:"West Virginia",title:"West Virginia",description:null,longDescription:null,linkUrl:"west-virginia/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},WI:{fullName:"Wisconsin",title:"Wisconsin",description:null,longDescription:null,linkUrl:"wisconsin/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null},WY:{fullName:"Wyoming",title:"Wyoming",description:null,longDescription:null,linkUrl:"wyoming/",isDisabled:!1,isHovering:!1,cssClass:null,overrideFill:null,overrideFillEnabled:!1,overrideHoverFill:null,overrideHoverFillEnabled:!1,overridePopLink:null}},myUsaMap.setStatesData(state_info),myUsaMap.draw();