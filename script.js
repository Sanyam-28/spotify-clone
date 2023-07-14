console.log("Welcome to Spotify");

// Initialize the Variables

let songIndex = 0;
let audioElement=new Audio('download1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs = [
{songName: "Savera- yungsta", filePath: "download1.mp3", coverPath: "savera.jpg"},
{songName: "gumnam - talha Anjum", filePath: "download2.mp3", coverPath: "gumnam.jpg"},
{songName: "Babam-Bam - paradox", filePath: "download3.mp3", coverPath: "Babam-Bam.jpg"},
{songName: "never let down- Raftar", filePath: "download4.mp3", coverPath: "never.jpg"},
{songName: "Heart-strings - Sanyam", filePath: "download5.mp3", coverPath: "heartstrings.jpg"},
{songName: "woh", filePath: "download6(2).mp3", coverPath: "woh.jpg"},
{songName: "obsessed", filePath: "download7(2).mp3", coverPath: "Obsessed.jpg"},
{songName: "lemonade -Diljit Dosanjh", filePath: "download8.mp3", coverPath: "lemonade.jpg"},

]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

})
// audioElement.play();
//handel play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

})
// Listen to Events

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
      //update seekbar
      progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
      console.log(progress);
      myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value* audioElement.duration/100;

})
const makeAllPlays= ()=>{
    element.classList.add('fa-circle-pause');
    element.classList.add('fa-circle-play');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        Console.log(e.target);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= '${songIndex+1}.mp3';
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
document.getElementById("previos").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;

    }
    else{
        songIndex +=1;

    }
    audioElement.src=' ${songIndex+1}.mp3 ';
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
   
})