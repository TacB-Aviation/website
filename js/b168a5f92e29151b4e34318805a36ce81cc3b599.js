"require"in window&&require("discourse/lib/theme-settings-store").registerSettings(24,{show_excerpts_mobile:!0,show_excerpts_desktop:!0,enabled_categories:"",enabled_tags:"",show_toggle:!1}),"define"in window&&define("discourse/theme-24/discourse/components/topic-excerpt-toggle",["exports","@glimmer/component","@ember/modifier","@ember/object","@ember/service","discourse/helpers/d-icon","discourse-i18n","@ember/component","@ember/template-factory"],(function(e,t,i,r,s,o,c,n,l){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const d=require("discourse/lib/theme-settings-store").getObjectForTheme(24),p=e=>`theme_translations.24.${e}`
class u extends t.default{static#e=(()=>dt7948.g(this.prototype,"excerptState",[s.service]))()
#t=(()=>{dt7948.i(this,"excerptState")})()
static#i=(()=>dt7948.g(this.prototype,"site",[s.service]))()
#r=(()=>{dt7948.i(this,"site")})()
static#s=(()=>dt7948.g(this.prototype,"router",[s.service]))()
#o=(()=>{dt7948.i(this,"router")})()
get shouldShow(){if(!this.excerptState.shouldApplyOverride)return!1
const e="discovery.categories"===this.router.currentRouteName
if(!d.show_toggle||e)return!1
return("default"===this.args.outletArgs.name||"topic.title"===this.args.outletArgs.name||this.site.mobileView)&&!this.args.outletArgs.bulkSelectEnabled}get buttonIcon(){return this.excerptState.prefersExcerpt?"square-check":"far-square"}toggleExcerpt(){this.excerptState.toggleExcerpt()}static#c=(()=>dt7948.n(this.prototype,"toggleExcerpt",[r.action]))()
static#n=(()=>(0,n.setComponentTemplate)((0,l.createTemplateFactory)({id:null,block:'[[[1,"\\n"],[41,[30,0,["shouldShow"]],[[[1,"      "],[11,"button"],[24,0,"excerpt-toggle"],[24,4,"button"],[4,[32,0],["click",[30,0,["toggleExcerpt"]]],null],[12],[1,"\\n        "],[1,[28,[32,1],[[30,0,["buttonIcon"]]],null]],[1,"\\n        "],[10,1],[12],[1,[28,[32,2],[[28,[32,3],["show_excerpts"],null]],null]],[13],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "]],[],false,["if"]]',moduleName:"/discourse/theme-24/discourse/components/topic-excerpt-toggle",scope:()=>[i.on,o.default,c.i18n,p],isStrictMode:!0}),this))()}e.default=u})),"define"in window&&define("discourse/theme-24/discourse/initializers/init-topic-excerpts",["exports","discourse/lib/plugin-api"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(24)
e.default={name:"topic-excerpts-init",initialize(){(0,t.withPluginApi)("1.34.0",(e=>{e.registerValueTransformer("topic-list-item-expand-pinned",(t=>{let{value:i}=t
const r=e.container.lookup("service:excerpt-state")
return r.shouldApplyOverride?r.prefersExcerpt:i}))}))}}})),"define"in window&&define("discourse/theme-24/discourse/initializers/init-topic-excerpt-toggle",["exports","discourse/lib/api","../components/topic-excerpt-toggle"],(function(e,t,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
require("discourse/lib/theme-settings-store").getObjectForTheme(24)
e.default=(0,t.apiInitializer)("1.8.0",(e=>{e.container.lookup("service:site").mobileView?e.renderInOutlet("extra-nav-item",i.default):e.renderInOutlet("topic-list-heading-bottom",i.default)}))})),"define"in window&&define("discourse/theme-24/discourse/services/excerpt-state",["exports","@glimmer/tracking","@ember/object","@ember/service"],(function(e,t,i,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const s=require("discourse/lib/theme-settings-store").getObjectForTheme(24),o="showExcerpt",c=s.enabled_categories.split("|").map(Number).filter(Boolean),n=s.enabled_tags.split("|").filter(Boolean)
class l extends r.default{static#e=(()=>dt7948.g(this.prototype,"router",[r.service]))()
#o=(()=>{dt7948.i(this,"router")})()
static#i=(()=>dt7948.g(this.prototype,"discovery",[r.service]))()
#l=(()=>{dt7948.i(this,"discovery")})()
static#s=(()=>dt7948.g(this.prototype,"site",[r.service]))()
#r=(()=>{dt7948.i(this,"site")})()
static#c=(()=>dt7948.g(this.prototype,"prefersExcerpt",[t.tracked],(function(){return!s.show_toggle||"false"!==localStorage.getItem(o)})))()
#d=(()=>{dt7948.i(this,"prefersExcerpt")})()
get shouldApplyOverride(){const e=0===c.length&&0===n.length,t=c.includes(this.discovery.category?.id),i=n.includes(this.discovery.tag?.id),r=this.site.mobileView?s.show_excerpts_mobile:s.show_excerpts_desktop
return(e||i||t)&&r}toggleExcerpt(){this.prefersExcerpt=!this.prefersExcerpt,localStorage.setItem(o,this.prefersExcerpt)}static#n=(()=>dt7948.n(this.prototype,"toggleExcerpt",[i.action]))()}e.default=l}))

//# sourceMappingURL=b168a5f92e29151b4e34318805a36ce81cc3b599.map?__ws=forums.unrealengine.com
