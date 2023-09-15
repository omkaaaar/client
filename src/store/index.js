import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    color: '#2a9d8f',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',

});

export default state;