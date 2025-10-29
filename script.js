const ctx = new AudioContext();
const gain = new GainNode(ctx);
let audiobuffer = null,
  sourceNode = null;
gain.connect(ctx.destination);

//load + decode audio
loadAndDecode = async function () { 
    let file = event.target.files[0];
    let arrayBuff = await file.arrayBuffer(); 
    let audioBuffer = await ctx.decodeAudioData(arrayBuff); 
    console.log(audioBuffer);
}; }

// playback audio

const playback = function () {
    if (!audioBuffer) { if (!sourceNode) {
        sourceNode = AudioBufferSourceNode(ctx, {buffer: audiobuffer}); 
        sourceNode.connect(gain); 
        sourceNode.start(); 

    } else {
        alert("Upload file nerd"); 
    }
};}; 

// reverse 
const revAudioBuffer () {
    for (let ch = 0; ch < audiobuffer.numberOfChannels; ch++
        let revData = audioBuffer.getChannelData(ch); 

}

// event listeners
document.queryselector("#fileupload").AddEventListener("change", loadAndDecode);
document.queryselector("#Play").addEventListener("click", playBuffer);
document.queryselector("#reverse").addEventListener("click", revAudioBuffer);
