(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),d=a(r("pVnL")),c=a(r("q1tI")),u=a(r("17x9")),l=function(e){var t=(0,d.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},h=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},p=Object.create({}),m=function(e){var t=l(e),r=h(t);return p[r]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function k(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},a&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),c.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function E(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function I(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function _(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:a})}))}function w(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+c+o+s+r+a+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,r=e.imageVariants,a=e.generateSources,i=e.spreadProps,n=e.ariaHidden,o=c.default.createElement(x,(0,d.default)({src:t},i,{ariaHidden:n}));return r.length>1?c.default.createElement("picture",null,a(r),o):o},x=c.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,o=e.onLoad,u=e.onError,l=e.loading,f=e.draggable,h=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,d.default)({"aria-hidden":h,sizes:r,srcSet:a,src:i},g,{onLoad:o,onError:u,ref:t,loading:l,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var N=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!b&&y&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(b||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=l(e),r=h(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=l(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,h=e.placeholderClassName,p=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,w=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:z?1:0,transition:N?"opacity "+v+"ms":"none"},s),C="boolean"==typeof b?"lightgray":b,R={transitionDelay:v+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&R,{},s,{},f),M={title:t,alt:this.state.isVisible?"":r,style:V,className:h,itemProp:S};if(p){var j=p,P=g(p);return c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),C&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&R)}),P.base64&&c.default.createElement(L,{ariaHidden:!0,src:P.base64,spreadProps:M,imageVariants:j,generateSources:_}),P.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,src:P.tracedSVG,spreadProps:M,imageVariants:j,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,k(j),c.default.createElement(x,{alt:r,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:r,title:t,loading:E},P,{imageVariants:j}))}}))}if(m){var F=m,q=g(m),$=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete $.display,c.default.createElement(y,{className:(a||"")+" gatsby-image-wrapper",style:$,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},N&&R)}),q.base64&&c.default.createElement(L,{ariaHidden:!0,src:q.base64,spreadProps:M,imageVariants:F,generateSources:_}),q.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,src:q.tracedSVG,spreadProps:M,imageVariants:F,generateSources:I}),this.state.isVisible&&c.default.createElement("picture",null,k(F),c.default.createElement(x,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:w})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:r,title:t,loading:E},q,{imageVariants:F}))}}))}return null},t}(c.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});N.propTypes={resolutions:T,sizes:C,fixed:u.default.oneOfType([T,u.default.arrayOf(T)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=N;t.default=R},INYr:function(e,t,r){"use strict";var a=r("XKFU"),i=r("CkkT")(6),n="findIndex",o=!0;n in[]&&Array(1)[n]((function(){o=!1})),a(a.P+a.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(n)},KvMI:function(e,t,r){"use strict";r.r(t);r("f3/d");var a=r("q1tI"),i=r.n(a),n=r("PIHY"),o=r("Ac47"),s=(r("OG14"),r("91GP"),r("9eSz")),d=r.n(s),c=r("Wbzz"),u=(r("V+eJ"),r("hHhE"),r("a1Th"),r("h7Nl"),r("HAE/"),r("bWfx"),r("KKXr"),r("0l/t"),r("Vd3H"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("Tze0"),function(){function e(){}return e.prototype.expandToken=function(e){for(var t=[],r="",a=0,i=e.length;a<i;++a)r+=e.charAt(a),t.push(r);return t},e}()),l=function(){function e(){}return e.prototype.sanitize=function(e){return e?e.toLocaleLowerCase().trim():""},e}();function f(e,t){t=t||[];for(var r=e=e||{},a=0;a<t.length;a++)if(null==(r=r[t[a]]))return null;return r}var h=function(){function e(e){this._uidFieldName=e,this._tokenToIdfCache={},this._tokenMap={}}var t=e.prototype;return t.indexDocument=function(e,t,r){this._tokenToIdfCache={};var a,i=this._tokenMap;"object"!=typeof i[e]?i[e]=a={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(a=i[e]).$totalNumOccurrences++;var n=a.$uidMap;"object"!=typeof n[t]?(a.$numDocumentOccurrences++,n[t]={$document:r,$numTokenOccurrences:1}):n[t].$numTokenOccurrences++},t.search=function(e,t){for(var r={},a=0,i=e.length;a<i;a++){var n=e[a],o=this._tokenMap[n];if(!o)return[];if(0===a)for(var s=0,d=(c=Object.keys(o.$uidMap)).length;s<d;s++){r[u=c[s]]=o.$uidMap[u].$document}else{var c;for(s=0,d=(c=Object.keys(r)).length;s<d;s++){var u=c[s];"object"!=typeof o.$uidMap[u]&&delete r[u]}}}var l=[];for(var u in r)l.push(r[u]);var f=this._createCalculateTfIdf();return l.sort((function(r,a){return f(e,a,t)-f(e,r,t)}))},t._createCalculateIdf=function(){var e=this._tokenMap,t=this._tokenToIdfCache;return function(r,a){if(!t[r]){var i=void 0!==e[r]?e[r].$numDocumentOccurrences:0;t[r]=1+Math.log(a.length/(1+i))}return t[r]}},t._createCalculateTfIdf=function(){var e=this._tokenMap,t=this._uidFieldName,r=this._createCalculateIdf();return function(a,i,n){for(var o=0,s=0,d=a.length;s<d;++s){var c,u=a[s],l=r(u,n);l===1/0&&(l=0),c=t instanceof Array?i&&f(i,t):i&&i[t],o+=(void 0!==e[u]&&void 0!==e[u].$uidMap[c]?e[u].$uidMap[c].$numTokenOccurrences:0)*l}return o}},e}(),g=/[^a-zа-яё0-9\-']+/i,p=function(){function e(){}return e.prototype.tokenize=function(e){return e.split(g).filter((function(e){return e}))},e}();function m(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var b=function(){function e(e){if(!e)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=e,this._indexStrategy=new u,this._searchIndex=new h(e),this._sanitizer=new l,this._tokenizer=new p,this._documents=[],this._searchableFields=[]}var t,r,a,i=e.prototype;return i.addDocument=function(e){this.addDocuments([e])},i.addDocuments=function(e){this._documents=this._documents.concat(e),this.indexDocuments_(e,this._searchableFields)},i.addIndex=function(e){this._searchableFields.push(e),this.indexDocuments_(this._documents,[e])},i.search=function(e){var t=this._tokenizer.tokenize(this._sanitizer.sanitize(e));return this._searchIndex.search(t,this._documents)},i.indexDocuments_=function(e,t){this._initialized=!0;for(var r=this._indexStrategy,a=this._sanitizer,i=this._searchIndex,n=this._tokenizer,o=this._uidFieldName,s=0,d=e.length;s<d;s++){var c,u=e[s];c=o instanceof Array?f(u,o):u[o];for(var l=0,h=t.length;l<h;l++){var g,p=t[l];if(null!=(g=p instanceof Array?f(u,p):u[p])&&"string"!=typeof g&&g.toString&&(g=g.toString()),"string"==typeof g)for(var m=n.tokenize(a.sanitize(g)),b=0,v=m.length;b<v;b++)for(var y=m[b],S=r.expandToken(y),k=0,E=S.length;k<E;k++){var I=S[k];i.indexDocument(I,c,u)}}}},t=e,(r=[{key:"indexStrategy",set:function(e){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=e},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(e){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=e},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(e){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=e},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(e){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=e},get:function(){return this._tokenizer}}])&&m(t.prototype,r),a&&m(t,a),e}(),v=r("ydnR");r("qi5D");var y=Object(a.memo)((function(e){var t=Object(a.useState)(v.a),r=t[0],n=t[1],o=e.books,s=new b("slug");s.addIndex("title"),s.addIndex(["authorName"]),o.forEach((function(e){var t=Object.assign({},e,{authorName:e.author.join(v.b)});s.addDocument(t)}));var u=s.search(r),l=(r===v.a?o:u).map((function(e){var t=e.author,r=e.description,a=e.fluid,n=e.slug,o=e.title,s=t.join(", ");return i.a.createElement("div",{key:n,className:"book-content-book-container fadeIn"},i.a.createElement(c.Link,{to:n},i.a.createElement(d.a,{className:"book-content-image",fluid:a})),i.a.createElement("div",null,i.a.createElement(c.Link,{to:n},i.a.createElement("h4",{className:"book-content-title"},o)),i.a.createElement("small",null,"By ",s),i.a.createElement("p",{className:"book-content-description"},r),i.a.createElement(c.Link,{className:"book-content-link",to:n},"...")))}));return i.a.createElement("section",{className:"book-content-container"},i.a.createElement("h1",{className:"book-content-title"},"My Book List"),i.a.createElement("div",{className:"book-content-search-container"},i.a.createElement("label",null,"Search Books by Title or Author"),i.a.createElement("input",{type:"text",value:r,onChange:function(e){return n(e.target.value)}})),l)}));r.d(t,"BookListQuery",(function(){return S}));t.default=function(e){var t=e.data,r=t.imageFiles.edges,a=t.bookFiles.edges,s=r.reduce((function(e,t){var r=t.node,a=r.childImageSharp.fluid;return e[r.name]=a,e}),{}),d=a.map((function(e){var t=e.node,r=t.childMarkdownRemark,a=r.fields.slug,i=r.frontmatter,n=i.author,o=i.title,d=i.description,c=t.name;return{author:n,description:d,slug:a,title:o,fluid:s[c]}}));return i.a.createElement(o.a,null,i.a.createElement(n.a,{title:"My Book List",description:"This is my book list."}),i.a.createElement(y,{books:d}))};var S="4021744006"},OGtf:function(e,t,r){var a=r("XKFU"),i=r("eeVq"),n=r("vhPU"),o=/"/g,s=function(e,t,r,a){var i=String(n(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}}}]);
//# sourceMappingURL=component---src-custom-pages-book-list-tsx-a0e0932a57b3bbdf26c4.js.map