gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
var tl = gsap.timeline({scrollTrigger:{
    trigger:'.svg-container',
    start:'0% 0%',
    end:'85% 0%',
    pin:'.svg-container',
//     pinSpacing:true,
    scrub:0.65,
//     markers:true,
    immediateRender:false
}})
tl.set('.night-svg', {transformOrigin:'center top'})
tl.set('.night-svg svg #witch', {transformOrigin:'center center'})
// tl.fromTo('.night-svg',1,{height:'30%', width:'100%'}, {height:'100%',width:'100%'} )
tl.fromTo('.night-svg svg',1,{scale:1}, {scale:3.75} )
tl.to('.night-svg svg #blue',1, {scale:2,transformOrigin:'center',overflow:'hidden'},'-=0.5')
tl.fromTo('.night-svg svg',1,{scale:4}, {scale:1} )
tl.to('.svg-container',0.01, {backgroundColor:'#F5F2E9'},'-=1.5')
tl.to('.night-svg svg #blue circle',1.5, {fill:'#F5F2E9'},1)
tl.to('.intro .journ', 0.1, {color:'#47484b', alpha:0},'-=0.5')
tl.to('svg #buildings',1, {scale:1.5,y:'145%', transformOrigin:'center'},'-=1.25')
tl.to('svg #insidebuildings',1, {scale:1.5,y:'135%', transformOrigin:'center'},'-=1.25')
tl.to('svg #stars',0.75, {scale:2.5,alpha:0,y:'-100%',transformOrigin:'center'})
tl.to('svg #witch', 0.5,{scale:0,alpha:0,transformOrigin:'center'},'-=0.75')
tl.to('.night-svg svg #blue circle',0.25, {fill:'#F5F2E9',scale:0,transformOrigin:'center'},'-=.75')
tl.to('.intro h2', 0.1, {color:'#47484b'},'-=0.75')
tl.fromTo('.s1', 0.25, {opacity:0,y:-20}, {color:'white',opacity:0.9,y:'2vh'})
tl.to('.s1',0.15,{alpha:0, x:200})
tl.fromTo('.s2', 0.25, {opacity:0,y:-20}, {color:'white',opacity:0.9,y:'2vh'})
tl.to('.s2',0.15,{alpha:0,x:-200})
tl.fromTo('.s3', 0.5, {opacity:0,y:-20}, {color:'white',opacity:0.9,y:'2vh'})
tl.to('.s3',0.15,{alpha:0,x:200})
tl.fromTo('.s4', 0.7, {opacity:0,y:-20}, {color:'white',opacity:0.9,y:'2vh'})
tl.to('.s4',0.15,{alpha:1,scale:1.15, x:20})
tl.to('.svg-container',0.1, {backgroundColor:'#001E43'},'-=0.15')
tl.to('.intro h2', 0.1, {alpha:0},'-=0.15')
