mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ1bmRoYXRpMDgiLCJhIjoiY2t3d2FwNjl0MDF1bTJucnJua3VldnN1ZCJ9.9YCEBV7RfCfhoEdb6wTTlw';
// map.setLayoutProperty('your-layer', 'visibility', 'visible');  

const map = new mapboxgl.Map({
container: 'map',
showMarkers: false,
style: 'mapbox://styles/arundhati08/cl2sv6t89003a15oxiuaobofa',
bearing:0,
center: [78.638675, 23.244354],
zoom: 3.68,
pitch: 0,
mapAnimation: 'flyTo',
});

const chapters = {
'part_2': {
duration: 7000,
center: [74.884868, 26.799180],
bearing: -93.60,
zoom: 4.52,
pitch: 24.91,
onChapterEnter: [
    {
        layer: 'manto_distance',
        opacity: 0
    },
    {
        layer: 'manto_displacement',
        opacity: 1
    },
    {
        layer: 'manto_interactions',
        opacity: 0
    },
    {
        layer: 'destination_rings',
        opacity: 0
    },
    {
        layer: 'home_rings',
        opacity: 0
    }
    
  ],
  onChapterExit: [
    {
        layer: 'manto_distance',
        opacity: 1
    },
    {
        layer: 'manto_displacement',
        opacity: 1
    },
    {
        layer: 'manto_interactions',
        opacity: 1
    },
    {
        layer: 'destination_rings',
        opacity: 1
    },
    {
        layer: 'home_rings',
        opacity: 1
    }
    
  ],
},
'part_3': {duration: 7000,
center: [74.884868, 26.799180],
bearing: -93.60,
zoom: 4.52,
pitch: 24.91,
onChapterEnter: [
    {
        layer: 'manto_distance',
        opacity: 0
    },
    {
        layer: 'manto_displacement',
        opacity: 1
    },
    {
        layer: 'manto_interactions',
        opacity: 0
    },
    {
        layer: 'destination_rings',
        opacity: 0
    },
    {
        layer: 'home_rings',
        opacity: 0
    }
    
  ],
  onChapterExit: [
    {
        layer: 'manto_distance',
        opacity: 1
    },
    {
        layer: 'manto_displacement',
        opacity: 1
    },
    {
        layer: 'manto_interactions',
        opacity: 1
    },
    {
        layer: 'destination_rings',
        opacity: 1
    },
    {
        layer: 'home_rings',
        opacity: 1
    }
    
  ]
},
'part_4': {
bearing: -64.80,
duration: 7000,
center: [74.243323, 19.801949],
zoom: 5.65,
pitch: 39.00,
},
'part_5': {
bearing: -64.80,
center: [74.615831, 31.598771],
zoom: 5.23,
pitch: 39.00,
duration: 7000,
curve:1
},
'part_6': {
    bearing:0,
    center: [73.576969, 26.478517],
    zoom: 4.31,
    pitch: 0,
    duration: 7000,
    mapAnimation: 'flyTo',
}
};

let activeChapterName = 'part_1';
function setActiveChapter(chapterName) {
if (chapterName === activeChapterName) return;

map.flyTo(chapters[chapterName]);
map.setLayoutProperty('your-layer', 'visibility', 'none');
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
setActiveChapter(chapterName);
break;
}
}
};
