"use strict";(self.webpackChunkfrisko_mayufid=self.webpackChunkfrisko_mayufid||[]).push([[691],{82:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var i=a(7294),r=a(2086),n=a(5444),s=a(9),o=function(){return i.createElement(d,null,i.createElement(l,null,"Hi Salam Kenal! Nama saya"),i.createElement(c,null,"Frisko Mayufid"),i.createElement(u,null,"Seorang Front End Developer dari Indonesia. Hobi main game online dan ngoding (pastinya). Kadang sharing pengetahuan dan hal yang lagi dipelajari disini."),i.createElement(f,null,i.createElement(n.Link,{to:"https://www.linkedin.com/in/friskomayufid/"},i.createElement(m,{src:"../../linkedin.svg",alt:"linkedin"})),i.createElement(n.Link,{to:"https://github.com/friskomayufid"},i.createElement(m,{src:"../../github.svg",alt:"github"})),i.createElement(n.Link,{to:"https://www.facebook.com/Friskomayufid/"},i.createElement(m,{src:"../../facebook.svg",alt:"facebook"})),i.createElement(n.Link,{to:"https://www.instagram.com/myxxfd/"},i.createElement(m,{src:"../../instagram.svg",alt:"instagram"}))))},d=s.default.div.withConfig({displayName:"Herocomponent__Container",componentId:"sc-u0ptmb-0"})(["width:50%;margin:0 auto;margin-bottom:20px;margin-top:-4vw;@media (max-width:768px){width:90%;}"]),l=s.default.h2.withConfig({displayName:"Herocomponent__Subtitle",componentId:"sc-u0ptmb-1"})(["font-style:normal;font-weight:600;font-size:18px;line-height:136.34%;text-align:center;letter-spacing:0.075em;"]),c=s.default.h1.withConfig({displayName:"Herocomponent__Title",componentId:"sc-u0ptmb-2"})(["font-weight:600;font-size:45px;line-height:54px;letter-spacing:0.035em;color:#2300ae;text-align:center;margin-top:15px;"]),u=s.default.p.withConfig({displayName:"Herocomponent__Description",componentId:"sc-u0ptmb-3"})(["font-weight:300;font-size:18px;line-height:127.34%;text-align:center;letter-spacing:0.095em;margin-top:15px;"]),f=s.default.div.withConfig({displayName:"Herocomponent__WrapperImage",componentId:"sc-u0ptmb-4"})(["text-align:center;margin-top:20px;"]),m=s.default.img.withConfig({displayName:"Herocomponent__Image",componentId:"sc-u0ptmb-5"})(["width:40px;padding:5px;"]),p=a(1496),g=function(e){var t=e.post;console.log(t.featuredImage.childImageSharp.fluid.srcSet);var a=t.featuredImage.childImageSharp.fluid;return i.createElement(n.Link,{to:t.slug,className:"post-card"},i.createElement("header",{className:"post-card-header"},i.createElement(p.Z,{className:"post-card-image",fluid:a}),i.createElement("h2",{className:"post-card-title"},t.title)),i.createElement("section",{className:"post-card-excerpt"},t.excerpt),i.createElement("footer",{className:"post-card-footer"},i.createElement("div",{className:"post-card-footer-left"},i.createElement("span",null,t.author)),i.createElement("div",{className:"post-card-footer-right"},i.createElement("div",null,t.readtime," min read"))))},h=function(e){var t=e.data;console.log(t);var a=t.allMarkdownRemark.nodes;return i.createElement(r.Z,null,i.createElement(o,null),i.createElement("div",{className:"container"},i.createElement("section",{className:"post-feed"},a.map((function(e){return i.createElement(g,{post:e.frontmatter,key:e.id})})))))}},1496:function(e,t,a){var i=a(5318);t.Z=void 0;var r,n=i(a(1506)),s=i(a(5354)),o=i(a(7316)),d=i(a(7154)),l=i(a(7294)),c=i(a(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},m=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=g(t||a||[]);return i&&i.src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(m);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),b=function(e){var t=f(e),a=p(t);return h[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function k(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},H=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(C,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),C=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,f=e.loading,m=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,u);return l.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:c,ref:t,loading:f,draggable:m,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&b(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:b(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=b(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,x=e.draggable,k=p||h;if(!k)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:R?1:0,transition:z?"opacity "+y+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,_={transitionDelay:y+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&_,o,u),W={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:E},P=this.state.isHydrated?g(k):k[0];if(p)return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&_)}),P.base64&&l.default.createElement(H,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:k,generateSources:L}),P.tracedSVG&&l.default.createElement(H,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:k,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(k),l.default.createElement(C,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:S},P,{imageVariants:k}))}}));if(h){var j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:V,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},z&&_)}),P.base64&&l.default.createElement(H,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:k,generateSources:L}),P.tracedSVG&&l.default.createElement(H,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:k,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(k),l.default.createElement(C,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:x})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,d.default)({alt:a,title:t,loading:S},P,{imageVariants:k}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function _(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}z.propTypes={resolutions:O,sizes:V,fixed:_(c.default.oneOfType([O,c.default.arrayOf(O)])),fluid:_(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=z;t.Z=T}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f8f8994ac5d699bd6645.js.map