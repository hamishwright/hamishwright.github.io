(this.webpackJsonpsetword=this.webpackJsonpsetword||[]).push([[0],{12:function(e,t,s){},13:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var o=s(0),a=s.n(o),r=s(6),i=s.n(r),l=(s(12),s(1)),n=s(2),c=s(4),d=s(3),h=(s(13),function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(e){var o;Object(l.a)(this,s);return(o=t.call(this,e)).state={isSelected:!0,emojiCode:Math.floor(61*Math.random())+128e3},o}return Object(n.a)(s,[{key:"handleClick",value:function(){if(!(this.props.totalWordsCompleted>0)){var e=!this.state.isSelected;this.props.toggleActive(this.props.setNumber,e),this.setState({isSelected:e})}}},{key:"getBorderColor",value:function(){return this.props.isActive?" border-success ":" "}},{key:"isComplete",value:function(){return 0===this.props.remaining&&!this.props.isActive}},{key:"getEmoji",value:function(){var e=a.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udeab");return this.state.isSelected&&(e=a.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b50")),e}},{key:"render",value:function(){var e=this,t=8===this.props.setNumber?12:10;return a.a.createElement("div",{onClick:function(){return e.handleClick()},className:" setWordsBox col p-1 "+this.getBorderColor()},a.a.createElement("div",null,a.a.createElement("span",{className:this.state.isSelected?"":" text-muted "},this.getEmoji()," Set ",this.props.setNumber+1)),a.a.createElement("div",null,a.a.createElement(m,{total:t,remaining:this.props.remaining,isActive:this.props.isActive})))}}]),s}(a.a.Component)),m=function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"getSquareBGClass",value:function(e){var t="";return e<this.props.total-this.props.remaining&&(t=" bg-success "),this.props.isActive&&e===this.props.total-this.props.remaining-1&&(t=" border-success border-right border-left "),t}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.total;t++)e.push(a.a.createElement("div",{key:t,className:"border-left border-top border-bottom flex-grow-1 "+this.getSquareBGClass(t)+(t===this.props.total-1&&" border-right ")},"\xa0"));return a.a.createElement("div",{className:"d-flex justify-content-center progressBar"},e)}}]),s}(a.a.Component),p=h,u=function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"getSquareBGClass",value:function(e,t){var s="",o=this.props.totalWordsCompleted<1?0:this.props.totalWordsCompleted-1;((e<o%10||o%10===0&&this.props.isShowingPrize)&&(s=" bg-success "),0===o&&(s=""),this.props.totalWords-o<12&&this.props.totalWords%10!==0)&&(s="",12-e>this.props.totalWords-o&&(s=" bg-success "));return this.props.totalWords-o<1&&(s=" bg-success "),s}},{key:"getSquareBorderClass",value:function(e,t){var s="",o=this.props.totalWordsCompleted<1?0:this.props.totalWordsCompleted-1;(e===o%t&&(s=" border-success "),this.props.totalWords-o<12&&this.props.totalWords%10!==0)&&(s="",12-e===this.props.totalWords-o&&(s=" border-success "));return(this.props.isShowingPrize||0===this.props.totalWordsCompleted)&&(s=""),this.props.totalWords-o<1&&(s=" "),s}},{key:"render",value:function(){var e=this.props.totalWordsCompleted<1?0:this.props.totalWordsCompleted-1,t=[],s=10;this.props.totalWords-e<12&&this.props.totalWords%10!==0&&(s=12),12===this.props.totalWords&&(s=12);for(var o=0;o<s;o++)t.push(a.a.createElement("div",{key:o,className:"border flex-grow-1 "+this.getSquareBGClass(o,s)+this.getSquareBorderClass(o,s)},"\xa0"));return a.a.createElement("div",{className:"col p-1 overallProgress"},a.a.createElement("div",{className:"d-flex justify-content-center"},t))}}]),s}(a.a.Component),g=function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"getIsPrizeBoxCompleted",value:function(e){var t=this.props.totalWordsCompleted<1?0:this.props.totalWordsCompleted-1;return t===this.props.totalWords||e!==Math.floor(this.props.totalWords/10)-1&&Math.floor(t/10)>e}},{key:"getBorderColor",value:function(e){return this.getIsPrizeBoxCompleted(e)?" border-warning ":" bg-success "}},{key:"render",value:function(){for(var e=[],t=0,s=0;s<Math.floor(this.props.totalWords/10);s++)e.push(a.a.createElement("div",{key:s,className:" border  mx-sm-2 rounded-lg growers "+this.getBorderColor(t)},a.a.createElement(v,{isCompleted:this.getIsPrizeBoxCompleted(t),emojiCode:this.props.emojiPrizes[s]}))),t++;return a.a.createElement("div",{className:"col p-0"},a.a.createElement("div",{className:"d-flex justify-content-center"},e))}}]),s}(a.a.Component),v=function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"getEmoji",value:function(){var e=a.a.createElement("span",{className:"text-light",role:"img","aria-label":"emoji"},"?");return this.props.isCompleted&&(e=a.a.createElement("span",{code:this.props.emojiCode,role:"img","aria-label":"emoji",dangerouslySetInnerHTML:{__html:"&#"+this.props.emojiCode+";"}})),e}},{key:"render",value:function(){return a.a.createElement("div",{className:"prizeEmoji"},this.getEmoji())}}]),s}(a.a.Component),f=g,b=function(e){Object(c.a)(s,e);var t=Object(d.a)(s);function s(e){var o;Object(l.a)(this,s),o=t.call(this,e);for(var a=[],r=128e3;r<=128060;r++)a.push(r);for(var i=129408;i<=129425;i++)a.push(i);for(var n=127812;n<=127829;n++)a.push(n);for(var c=127846;c<=127853;c++)a.push(c);for(var d=127871;d<=127877;d++)a.push(d);for(var h=127927;h<=127931;h++)a.push(h);for(var m=127949;m<=127955;m++)a.push(m);for(var p=128640;p<=128642;p++)a.push(p);for(var u=128657;u<=128659;u++)a.push(u);a.push(127984,127968,128063,128081,128132,128241,128250,127906,127908,127909,127912,127911,129373,129365,129361,129360,129302,128756,128526,128374,128300,128301,128248,128141,128142,127936,127934,129472,9748,9875,9917,9924,9973,9975,127752,127757,127789,127790,127797,127798,127799,127804,127880,127891,127894,127904,127918);for(var g=[],v=0;v<10;v++)g.push(a.splice(Math.floor(Math.random()*a.length),1));return o.state={setWordsList:[["I","a","the","to","at","it","is","in","on","as"],["an","be","he","she","we","me","up","us","my","go"],["and","be","can","for","get","got","had","her","him","of"],["no","so","do","too","see","not","said","or","its","was"],["back","with","his","big","mum","dad","went","will","like","you"],["than","that","their","them","then","there","they","this","came","come"],["but","all","out","day","put","off","now","way","good","look"],["if","into","how","down","from","new","made","make","take","are"],["give","have","here","old","our","saw","say","want","well","what","when","who"],["your","first","use","some","more","also","any","one","two","were"]],activeSets:[0,1,2,3,4,5,6,7,8,9],randomWord:"Ready?",randomSetNumber:-1,totalWords:102,totalWordsCompleted:0,isShowingPrize:!1,emojiPrizes:g,emojiLibrary:a},o}return Object(n.a)(s,[{key:"toggleActive",value:function(e,t){var s=this.state.activeSets.slice();if(t)s.push(e);else{var o=s.indexOf(e);-1!==o&&s.splice(o,1)}var a=10*s.length;-1!==s.indexOf(8)&&(a+=2),this.setState({activeSets:s,totalWords:a})}},{key:"shouldShowPrize",value:function(){var e=this.state.totalWordsCompleted<1?0:this.state.totalWordsCompleted-1;return this.state.totalWords-e<12&&this.state.totalWords%10!==0?this.state.totalWordsCompleted===this.totalWords-1:this.state.totalWordsCompleted%10===0&&this.state.totalWordsCompleted>0}},{key:"shuffle",value:function(){var e=this.state.setWordsList.slice(),t=this.state.activeSets.slice();if(0===t.length&&this.state.isShowingPrize)this.setState({randomWord:"All Done!",randomSetNumber:-2,isShowingPrize:!1});else if(0!==t.length)if(this.state.isShowingPrize)this.setState({isShowingPrize:!1});else{var s=t[Math.floor(Math.random()*t.length)],o=this.state.setWordsList[s],a=Math.floor(Math.random()*o.length),r=o.splice(a,1);if(e[s]=o,0===o.length){var i=t.indexOf(s);-1!==i&&t.splice(i,1)}this.setState({setWordsList:e,randomWord:r,randomSetNumber:s,activeSets:t,totalWordsCompleted:this.state.totalWordsCompleted+1}),this.shouldShowPrize()&&this.setState({isShowingPrize:!0})}else this.setState({isShowingPrize:!0,totalWordsCompleted:this.state.totalWordsCompleted+1,randomSetNumber:-3})}},{key:"getEmoji",value:function(){var e="";return-2===this.state.randomSetNumber&&(e=a.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83c\udf89")),e}},{key:"getEmoji2",value:function(){var e="";return-2===this.state.randomSetNumber&&(e=a.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\ude1c")),e}},{key:"getInstructions",value:function(){if(this.state.totalWordsCompleted<1)return a.a.createElement("div",{className:"h5"},"Select your Sets")}},{key:"getDisplayWord",value:function(){if(console.log(Math.floor((this.state.totalWordsCompleted-4)/10)),console.log(this.state.totalWordsCompleted),this.state.isShowingPrize){var e=this.state.emojiPrizes[Math.floor((this.state.totalWordsCompleted-4)/10)];return a.a.createElement("span",{className:"bg-light border border-warning rounded-lg px-4 py-5",role:"img","aria-label":"emoji",dangerouslySetInnerHTML:{__html:"&#"+e+";"}})}return this.state.randomWord}},{key:"render",value:function(){for(var e=this,t=[],s=0;s<this.state.setWordsList.length/2;s++){var o=this.state.setWordsList[s],r=s===this.state.randomSetNumber;t.push(a.a.createElement(p,{key:s,setNumber:s,remaining:o.length,isActive:r,toggleActive:this.toggleActive.bind(this),totalWordsCompleted:this.state.totalWordsCompleted}))}for(var i=[],l=this.state.setWordsList.length/2;l<this.state.setWordsList.length;l++){var n=this.state.setWordsList[l],c=l===this.state.randomSetNumber;i.push(a.a.createElement(p,{key:l,setNumber:l,remaining:n.length,isActive:c,toggleActive:this.toggleActive.bind(this),totalWordsCompleted:this.state.totalWordsCompleted}))}var d="";if(-2!==this.state.randomSetNumber&&this.state.totalWords>0){var h=-1===this.state.randomSetNumber?"Start":"Next";d=a.a.createElement("button",{className:"btn btn-lg btn-outline-light mt-5 py-3 px-5",onClick:function(){return e.shuffle()}},h)}return a.a.createElement("div",{className:"container-fluid text-center vh-100 bg-success"},a.a.createElement("div",{className:"row h-100"},a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"h-100 d-flex flex-column"},a.a.createElement("div",{className:"row justify-content-center bg-light"},t),a.a.createElement("div",{className:"row justify-content-center bg-light"},i),a.a.createElement("div",{className:"row justify-content-center bg-light"},a.a.createElement(f,{totalWords:this.state.totalWords,totalWordsCompleted:this.state.totalWordsCompleted,activeSets:this.state.activeSets,emojiPrizes:this.state.emojiPrizes})),a.a.createElement("div",{className:"row justify-content-center bg-light"},a.a.createElement(u,{totalWords:this.state.totalWords,totalWordsCompleted:this.state.totalWordsCompleted,isShowingPrize:this.state.isShowingPrize})),a.a.createElement("div",{className:"row flex-grow-1"},a.a.createElement("div",{className:"col"},a.a.createElement("div",{className:"d-flex align-items-center justify-content-center flex-grow h-100"},a.a.createElement("div",{className:"setWord"},a.a.createElement("div",{className:"display-4 d-md-none"},this.getEmoji()," ",this.getEmoji2()," ",this.getEmoji()),a.a.createElement("div",{className:"display-1 d-none d-md-block"},this.getEmoji()," ",this.getEmoji2()," ",this.getEmoji()),this.getInstructions(),a.a.createElement("h1",{className:"display-1"},this.getDisplayWord()),a.a.createElement("div",{className:"display-1 d-none d-md-block"},this.getEmoji()," ",this.getEmoji2()," ",this.getEmoji()),a.a.createElement("div",{className:"display-4 d-md-none"},this.getEmoji()," ",this.getEmoji2()," ",this.getEmoji()),d))))))))}}]),s}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,s){e.exports=s(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d1a626c0.chunk.js.map