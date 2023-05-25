import {proxy} from 'valtio'


//ITS LIKE THE REACT CONTEXT
//we specify our default values for the states

const state = proxy({
intro:true, //are we currently in the home page?
color:'#EFBD48',
isLogoTexture:true,//are we currently displaying the logo on our shirt
isFullTexture:false,//
logoDecal:'./threejs.png', // initial logo for shirt
fullDecal:'./threejs.png', //initial texture
})
export default state
