gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
var tl = gsap.timeline({scrollTrigger:{
    trigger:'.container',
    start:'0% 0%',
    end:'70% 0%',
    pin:'.night-svg',
    pinSpacing:true,
    scrub:true,
    // markers:true,
    immediateRender:false
}})
tl.set('.night-svg', {transformOrigin:'center top'})
tl.set('.night-svg svg #witch', {transformOrigin:'center center'})
tl.fromTo('.night-svg svg',1,{scale:1}, {scale:3.5} )
tl.to('.night-svg svg #blue',1, {scale:2.5,transformOrigin:'center'},'-=0.75')
tl.to('svg #buildings',1, {scale:1.5,y:'145%', transformOrigin:'center'},'-=1')
tl.to('svg #insidebuildings',1, {scale:1.5,y:'135%', transformOrigin:'center'},'-=1')
tl.to('svg #stars',0.75, {scale:0,alpha:0,y:'-100%',transformOrigin:'center'},'-=0.5')
tl.to('svg #witch', 0.5,{scale:0,alpha:0,transformOrigin:'center'},'-=0.75')
tl.to('.night-svg svg #blue circle',0.25, {fill:'#c5a619',transformOrigin:'center'},'-=.75')
