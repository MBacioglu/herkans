const musicDiv = document.querySelector('.music');

fetch('https://mbo-sd.nl/period3-fetch/music-artist-david-bowie')
.then(data => data.json())
.then(jsonData => showOnScreen(jsonData));

function showOnScreen(jsonData){
    console.log(jsonData);

    for (let i = 0; i < jsonData.length; i++) {
        const object= jsonData[i];
        musicDiv.innerHTML +=
        `<h1>${object.title}</h1>` +
        `<h1>${object.description}</h1>` +
        `<h1>${object.releaseYear}</h1>` ;
        
    }
}