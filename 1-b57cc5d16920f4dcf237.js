(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{152:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(154);var d=r.a.createContext({}),c=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},153:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var i=a(160),r=a.n(i),n=a(161),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm,d=o.scale},154:function(e,t,a){var i;e.exports=(i=a(157))&&i.default||i},155:function(e,t,a){"use strict";a(34);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(152),l=a(153),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,i=t.title,r=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},i)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,e),s.a.createElement("main",null,r),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},156:function(e,t,a){"use strict";var i=a(158),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(162),d=a.n(l);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,o=i.data.site,l=t||o.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:s},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=c},157:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(56),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Pickard's Pickle",description:"The personal blog of Jim Pickard.",author:"Jim Pickard"}}}}},159:function(e,t,a){"use strict";a(164);var i=a(166),r=a(0),n=a.n(r),s=a(152),o=a(167),l=a.n(o),d=a(153);var c="2598425350";t.a=function(){return n.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who runs a pub by day and develops software by night."," ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"You should follow him on Twitter")))},data:i})}},164:function(e,t,a){"use strict";a(165)("fixed",function(e){return function(){return e(this,"tt","","")}})},165:function(e,t,a){var i=a(11),r=a(18),n=a(19),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},166:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,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",width:50,height:50,src:"/static/94301edce0aef3e3a3d1a45dabaae008/58398/profile-pic.png",srcSet:"/static/94301edce0aef3e3a3d1a45dabaae008/58398/profile-pic.png 1x,\n/static/94301edce0aef3e3a3d1a45dabaae008/fd23f/profile-pic.png 1.5x,\n/static/94301edce0aef3e3a3d1a45dabaae008/fc368/profile-pic.png 2x,\n/static/94301edce0aef3e3a3d1a45dabaae008/521d9/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Jim Pickard",social:{twitter:"jickles"}}}}}},167:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(35)),o=i(a(75)),l=i(a(76)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+i+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+o+l+a+r+t+s+n+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.nativeLazyLoadSupported,f=e.loading,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),h={};return u&&(h.loading=f),d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:c,ref:t},h,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=!1,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(i=!0,o=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var c=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:n,hasNoScript:c,seenBefore:l,nativeLazyLoadSupported:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,S=e.durationFadeIn,v=e.Tag,w=e.itemProp,L=(e.critical,u(this.props).loading);var E=this.state.nativeLazyLoadSupported,O=this.state.imgLoaded||!1===this.state.fadeIn,R=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:O?1:0,transition:R?"opacity "+S+"ms":"none"},o),M="boolean"==typeof y?"lightgray":y,z={transitionDelay:S+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&z,o,f),T={title:t,alt:this.state.isVisible?"":a,style:x,className:p};if(h){var N=h;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),M&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&z)}),N.base64&&d.default.createElement(b,(0,l.default)({src:N.base64},T)),N.tracedSVG&&d.default.createElement(b,(0,l.default)({src:N.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,N.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:N.sizes,src:N.src,crossOrigin:this.props.crossOrigin,srcSet:N.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:E,loading:L})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:L},N))}}))}if(g){var P=g,V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete V.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},M&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:M,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},R&&z)}),P.base64&&d.default.createElement(b,(0,l.default)({src:P.base64},T)),P.tracedSVG&&d.default.createElement(b,(0,l.default)({src:P.tracedSVG},T)),this.state.isVisible&&d.default.createElement("picture",null,P.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),d.default.createElement(b,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,nativeLazyLoadSupported:E,loading:L})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,loading:L},P))}}))}return null},t}(d.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var S=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),v=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:S,sizes:v,fixed:S,fluid:v,fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"])};var w=y;t.default=w}}]);
//# sourceMappingURL=1-b57cc5d16920f4dcf237.js.map