(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(2),r=n.n(c),i=n(9),a=n.n(i),o=(n(15),n(3)),l=n(6),j=n(5);var u=function(e){return Object(s.jsxs)("div",{className:"c-player--controls",children:[Object(s.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong(!1)},children:Object(s.jsx)(l.a,{icon:j.a})}),Object(s.jsx)("button",{className:"play-btn",onClick:function(){return e.setIsPlaying(!e.isPlaying)},children:Object(s.jsx)(l.a,{icon:e.isPlaying?j.c:j.d})}),Object(s.jsx)("button",{className:"skip-btn",onClick:function(){return e.SkipSong()},children:Object(s.jsx)(l.a,{icon:j.b})})]})};var g=function(e){return Object(s.jsxs)("div",{className:"c-player--details",children:[Object(s.jsx)("div",{className:"details-img",children:Object(s.jsx)("img",{src:e.song.img_src,alt:""})}),Object(s.jsx)("h3",{className:"details-title",children:e.song.title}),Object(s.jsx)("h4",{className:"details-artist",children:e.song.artist})]})};var b=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(!1),r=Object(o.a)(n,2),i=r[0],a=r[1];return Object(c.useEffect)((function(){i?t.current.play():t.current.pause()})),Object(s.jsxs)("div",{className:"c-player",children:[Object(s.jsx)("audio",{src:e.songs[e.currentSongIndex].src,ref:t}),Object(s.jsx)("h4",{children:"Playing now"}),Object(s.jsx)(g,{song:e.songs[e.currentSongIndex]}),Object(s.jsx)(u,{isPlaying:i,setIsPlaying:a,SkipSong:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return++t>e.songs.length-1&&(t=0),t})):e.setCurrentSongIndex((function(){var t=e.currentSongIndex;return--t<0&&(t=e.songs.length-1),t}))}}),Object(s.jsxs)("p",{children:["Next up: ",Object(s.jsxs)("span",{children:[e.songs[e.nextSongIndex].title," by ",e.songs[e.nextSongIndex].artist]})]})]})};var d=function(){var e=Object(c.useState)([{title:"Slow Down",artist:"Selena Gomez",img_src:"./images/selena.jpg",src:"./music/slowdown.mp3"},{title:"Say my Name",artist:"BeBe Rexha",img_src:"./images/bebe.jpg",src:"./music/saymyname.mp3"},{title:"I knew you were trouble",artist:"Taylor Swift",img_src:"./images/taylor.jpg",src:"./music/iknew.mp3"}]),t=Object(o.a)(e,1)[0],n=Object(c.useState)(0),r=Object(o.a)(n,2),i=r[0],a=r[1],l=Object(c.useState)(0),j=Object(o.a)(l,2),u=j[0],g=j[1];return Object(c.useEffect)((function(){g((function(){return i+1>t.length-1?0:i+1}))}),[i]),Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(b,{currentSongIndex:i,setCurrentSongIndex:a,nextSongIndex:u,songs:t})})};a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5b4b5468.chunk.js.map