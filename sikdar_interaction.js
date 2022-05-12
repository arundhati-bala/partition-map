mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw';
// map.setLayoutProperty('your-layer', 'visibility', 'visible');  

const map = new mapboxgl.Map({
container: 'map',
showMarkers: false,
style: 'mapbox://styles/arundhati08/cl32p4f6i000414mkouutjxzi',
bearing:0,
center: [78.827853, 24.888531],
zoom: 3.68,
pitch: 0,
mapAnimation: 'flyTo',
});

map.addControl(new mapboxgl.NavigationControl());


const chapters = {
'part_1':{
    bearing:0,
    center: [78.827853, 24.888531],
    zoom: 3.9,
    pitch: 0,
    mapAnimation: 'flyTo',
},
'part_2': {
    duration: 2000,
    center: [81.044216, 24.881370],
    bearing: -108.80,
    zoom: 4.4,
    pitch: 27.0,
},
'part_3': {
    duration: 2000,
    center: [81.044216, 24.881370],
    bearing: -108.80,
    zoom: 4.3,
    pitch: 27.0,
},
'part_4': {
    bearing: 0,
    duration: 2000,
    center: [89.938125, 24.648040],
    zoom: 7.36,
    pitch: 15,
},
'part_5': {
    bearing: -64.80,
    center: [89.183167, 22.855792],
    zoom: 6.4,
    pitch: .00,
    duration: 2000,
    curve:1
},
'part_6': {
    bearing:0,
    center: [78.827853, 24.888531],
    zoom: 3.9,
    pitch: 0,
    mapAnimation: 'flyTo',
}
};

let activeChapterName = 'part_1';
function setActiveChapter(chapterName) {
if (chapterName === activeChapterName) return;

map.flyTo(chapters[chapterName]);
    
document.getElementById(chapterName).classList.add('active');
document.getElementById(activeChapterName).classList.remove('active');

activeChapterName = chapterName;
}

function isElementOnScreen(id) {
const element = document.getElementById(id);
const bounds = element.getBoundingClientRect();
return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// On every scroll event, check which element is on screen
window.onscroll = () => {
for (const chapterName in chapters) {
if (isElementOnScreen(chapterName)) {
    if(chapterName=='part_1')
    {
        // map.setLayoutProperty('manto_distance', 'visibility', 'visible');
        map.setLayoutProperty('destination-rings', 'visibility', 'visible');
        map.setLayoutProperty('destination-point', 'visibility', 'visible');
        map.setLayoutProperty('home-rings', 'visibility', 'visible');
        map.setLayoutProperty('home-point', 'visibility', 'visible');
        map.setLayoutProperty('interactions', 'visibility', 'visible');
        map.setLayoutProperty('paths', 'visibility', 'visible');
    }
    if(chapterName=='part_2')
    {
        // map.setLayoutProperty('manto_distance', 'visibility', 'none');
        map.setLayoutProperty('destination-rings', 'visibility', 'none');
        map.setLayoutProperty('destination-point', 'visibility', 'none');
        map.setLayoutProperty('home-rings', 'visibility', 'none');
        map.setLayoutProperty('home-point', 'visibility', 'none');
        map.setLayoutProperty('interactions', 'visibility', 'none');
        map.setLayoutProperty('paths', 'visibility', 'visible');
    }
    if(chapterName=='part_3')
    {
        // map.setLayoutProperty('manto_distance', 'visibility', 'none');
        map.setLayoutProperty('destination-rings', 'visibility', 'none');
        map.setLayoutProperty('destination-point', 'visibility', 'none');
        map.setLayoutProperty('home-rings', 'visibility', 'none');
        map.setLayoutProperty('home-point', 'visibility', 'none');
        map.setLayoutProperty('interactions', 'visibility', 'visible');
        map.setLayoutProperty('paths', 'visibility', 'visible');
    }
    if(chapterName=='part_4')
    {
        // map.setLayoutProperty('manto_distance', 'visibility', 'none');
        map.setLayoutProperty('destination-rings', 'visibility', 'none');
        map.setLayoutProperty('destination-point', 'visibility', 'visible');
        map.setLayoutProperty('home-rings', 'visibility', 'visible');
        map.setLayoutProperty('home-point', 'visibility', 'visible');
        map.setLayoutProperty('interactions', 'visibility', 'visible');
        map.setLayoutProperty('paths', 'visibility', 'none');
    }
    if(chapterName=='part_5')
    {
        // map.setLayoutProperty('manto_distance', 'visibility', 'none');
        map.setLayoutProperty('destination-rings', 'visibility', 'visible');
        map.setLayoutProperty('destination-point', 'visibility', 'visible');
        map.setLayoutProperty('home-rings', 'visibility', 'none');
        map.setLayoutProperty('home-point', 'visibility', 'none');
        map.setLayoutProperty('interactions', 'visibility', 'visible');
        map.setLayoutProperty('paths', 'visibility', 'none');
    }
    if(chapterName=='part_6')
    {
        // map.setLayoutProperty('manto_distance', 'visibility', 'visible');
        map.setLayoutProperty('destination-rings', 'visibility', 'visible');
        map.setLayoutProperty('destination-point', 'visibility', 'visible');
        map.setLayoutProperty('home-rings', 'visibility', 'visible');
        map.setLayoutProperty('home-point', 'visibility', 'visible');
        map.setLayoutProperty('interactions', 'visibility', 'visible');
        map.setLayoutProperty('paths', 'visibility', 'visible');
    }

setActiveChapter(chapterName);
break;
}
}
};
