Enable_marking = true
var colors = ["#CC2A3D", "#9D2ECC", "#CBC52B", "#CB852B", "#3E3E3E", "#2C83CB"]
const colorobject = localStorage.getItem('color');
const numero_color = JSON.parse(colorobject);
document.getElementById("marker_warning").style.color = colors[Number(numero_color)]
try{
    const gamemode = JSON.parse(localStorage.getItem('gamemode'))['hello']
} catch(error){
    window.location.href = 'index.html'
}

window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};



if(window.mobileCheck()){
    console.log('blocking')
    document.getElementById('myvid').style.display = 'none'
}


const gamemode = JSON.parse(localStorage.getItem('gamemode'))['hello']
let abstime
var rounds = 1
var roundhtml = document.getElementById('round')
var timer = document.getElementById("timer")
const pretime = localStorage.getItem('time')
time = JSON.parse(pretime)
abstime =  JSON.parse(pretime)
const premute = localStorage.getItem('mute')
var mute = JSON.parse(premute)
if (gamemode != 'contrarreloj' && gamemode != 'radius' ){
    const prerounds = localStorage.getItem('rounds')
    var prround = JSON.parse(prerounds) 
    roundhtml.innerHTML = `1/${prround}`
}
else{
    var prround = 99999
    roundhtml.innerHTML = `1`
}

if (gamemode == 'radius'){
    const preradius = localStorage.getItem('radius')
    var gamerule_radius = JSON.parse(preradius)
    
}

if (gamemode == 'PAUSE'){
    document.getElementById('pausebutton').style.display = 'block'
}


var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


var blackIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});



var score, video_coords, Enable_marking, points, marker_coords, map, marker, score_id, vidmarker, polyline, src, lat, lng, active_video, playersmarkers, time, inter, pause, interval, player, active_playlist
var color_list = [redIcon, violetIcon, yellowIcon, orangeIcon, blackIcon, blueIcon]
var guessed = true
var pausado = false
var playing = true
const modal = document.getElementById('modal')
var videos_played = []

var video_list = [ 
["jstF9EYr4IM", -38.005376808820586, -57.54250699591142, 833,'AR', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Mar del Plata'], 
["EIc2vyDRT20", -36.535465, -56.688901,300,'AR', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Santa Teresita'], 
["2G3Mq_D1Po8", 48.858907, 2.293025,140,'FR', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Paris'], 
["jYVJccE8Wa4", 43.322257, 11.330865, 935 ,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Siena'], 
["zWxdKYxfcRQ", 44.499609, 11.343899, 866,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Bolonia'], 
["dbICS9q9hVo", -32.890557, -68.844857, 240,'AR', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Mendoza'], 
["gpaB5d4C6hA", 45.465305, 9.194007,260,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks','Milan'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 66,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Trieste'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 780,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Trieste'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 1652,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Trieste'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 2202,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Trieste'], 
["BMDso0Rqx3M", 45.975012, 9.247205,50,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Bellagio'], 
["BMDso0Rqx3M", 45.975012, 9.247205,518,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Bellagio'], 
["BMDso0Rqx3M", 45.975012, 9.247205,1164,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Bellagio'], 
["9vx9qm2_ghI", 45.463732, 9.190500,97,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Florence'], 
["9vx9qm2_ghI", 45.463732, 9.190500,984,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Florence'], 
["4xJf5PfuMjg", 44.117593, 15.219858,55,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Zadar'], 
["4xJf5PfuMjg", 44.117593, 15.219858,390,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Zadar'], 
["4xJf5PfuMjg", 44.117593, 15.219858,1028,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Zadar'], 
["4xJf5PfuMjg", 44.117593, 15.219858,1615,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Zadar'], 
["GkhMz52zMG0", 46.004807, 8.948346,345,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Lugano'], 
["GkhMz52zMG0", 46.004807, 8.948346,670,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Lugano'], 
["GkhMz52zMG0", 46.004807, 8.948346,1246,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Lugano'], 
["GkhMz52zMG0", 46.004807, 8.948346,1693,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Lugano'], 
["cSWv6YJYBHM", 43.508254, 16.440185,103,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Split'], 
["cSWv6YJYBHM", 43.508254, 16.440185,732,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Split'], 
["cSWv6YJYBHM", 43.508254, 16.440185,1060,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Split'], 
["cSWv6YJYBHM", 43.508254, 16.440185,1405,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Split'], 
["RInBAatA11Q", 52.247803, 21.013650,70,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Warsaw'], 
["RInBAatA11Q", 52.247803, 21.013650,656,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Warsaw'], 
["RInBAatA11Q", 52.247803, 21.013650,1180,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Warsaw'], 
["RInBAatA11Q", 52.247803, 21.013650,1654,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Warsaw'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,98,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Dubrovnik'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,845,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Dubrovnik'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,1415,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Dubrovnik'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,99,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Iseo'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,551,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Iseo'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,1002,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Iseo'], 
["KkKmGQpEr9s", 43.818297, 7.777631,100,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Sanremo'], 
["KkKmGQpEr9s", 43.818297, 7.777631,520,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Sanremo'], 
["KkKmGQpEr9s", 43.818297, 7.777631,960,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Sanremo'], 
["KkKmGQpEr9s", 43.818297, 7.777631,1280,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Sanremo'], 
["m4D8LqsvXu0", 44.303984, 9.207712,640,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Portofino'],
["EtxCpMzu1GY", 52.360660, 4.887635,100,'NTH', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Amsterdam'],
["EtxCpMzu1GY", 52.366964, 4.889127,907,'NTH', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Amsterdam'],
["EtxCpMzu1GY", 52.376607, 4.899634,2249,'NTH', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Amsterdam'],
["-0YA3p8zvRE", 40.8391213,14.2495606,235,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Napoles'],
["-0YA3p8zvRE", 40.8401192,14.2484348,590,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Napoles'],
["-0YA3p8zvRE", 40.8473569,14.2515967,1984,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Napoles'],
["-0YA3p8zvRE", 40.8513121,14.2577763,2531,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Napoles'],
["-0YA3p8zvRE", 40.8413436,14.2520886,3302,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Napoles'],
["by-2aEbso28", 51.601629,-0.3169,94,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Edgware'],
["by-2aEbso28", 51.601629,-0.3169,94,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Edgware'],
["by-2aEbso28", 51.607338, -0.301417,1110,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Edgware'],
["by-2aEbso28", 51.6076714,-0.2905685,1743,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Edgware'],
["by-2aEbso28", 51.6102515,-0.2829999,1743,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Edgware'],
["_aQVlq9jOlw", 51.5949805,-0.3145607,410,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Harrow'],
["_aQVlq9jOlw", 51.600035, -0.312838,1728,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Harrow'],
["cQilmRKq9A0", 34.007217, -118.496112,693,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["cQilmRKq9A0", 34.007968, -118.494115,1165,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["xAN7PVS8Hko", 34.0691215,-118.2913733,119,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["xAN7PVS8Hko", 34.076186, -118.291566,932,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["xAN7PVS8Hko", 34.0729513,-118.2915304,1842,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["teHOCmM18ZU", 34.0769519,-118.3803203,127,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["teHOCmM18ZU", 34.077164, -118.376534,1227,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["25iy2ZFAMZE", 34.101665, -118.338577,24,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["BYX7lxGRl3Q", 33.8148071,-117.9215549,185,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','Los Angeles'],
["bEt-vzKFVP8", 51.509009, -0.087134,445,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','London'],
["bEt-vzKFVP8", 51.5074602,-0.0776777,1428,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks','London'],
["jrd8_6iFA8M", 41.0365019,28.9833963,171,'TR', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Instabul'],
["jrd8_6iFA8M", 41.035325, 28.981794,486,'TR', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Instabul'],
["jrd8_6iFA8M", 41.0316971,28.9760594,1055,'TR', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Instabul'],
["wG0bqfgKJKU", 51.5107977,-0.0984437,600,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','London'],
["wG0bqfgKJKU", 51.513865, -0.101370,216,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','London'],
["wG0bqfgKJKU", 51.507418, -0.092923,1200,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','London'],
["wG0bqfgKJKU", 51.5100729,-0.0869013,1884,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','London'],
["wG0bqfgKJKU", 51.5130422,-0.090591,3173,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','London'],
["41Swm3AtU48", 50.847373, 4.351958,258,'BE', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Brussels'],
["41Swm3AtU48", 50.8465143,4.3495567,750,'BE', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Brussels'],
["41Swm3AtU48", 50.84529,4.3470555,1084,'BE', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Brussels'],
["rFfWAwsdZWI", 59.913840, 10.738698,81,'NW', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Oslo'],
["rFfWAwsdZWI", 59.9134949,10.7398892,1140,'NW', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Oslo'],
["rFfWAwsdZWI", 59.9119644,10.7485938,1725,'NW', 'Atmos Walks','https://www.youtube.com/@AtmosWalks','Oslo'],
['sKTox7DglVg',37.8093724,-122.4759122,301, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','San Francisco'],
['sKTox7DglVg',37.8084333,-122.4729643,1400, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','San Francisco'],
['a6VI-4YNHR0',40.7567671,-73.9865428,6, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew',''],
['4ugekTk2_Ss',40.6908017,-74.045311,315, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','New York'],
['-jHtx64DUuw',21.4310782,-157.8315108,5, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Yucatan'],
['0WFAbXjpC1s',21.281624, -157.830731,107, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Hawaii'],
['0WFAbXjpC1s',21.2740059,-157.824152,1273, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Hawaii'],
['0WFAbXjpC1s',21.277048, -157.826154,2089, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Hawaii'],
['gcfC4lT2mj0',36.122620868922525, -115.17038233886313,2765, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Las Vegas'],
['gcfC4lT2mj0',36.117949828514625, -115.17166929611284,4272, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Las Vegas'],
['gcfC4lT2mj0',36.115322568368626, -115.17367909154801,531, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Las Vegas'],
['gcfC4lT2mj0',36.101604793421046, -115.1732311728788,6415, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Las Vegas'],
['vuWpEJ1JRUQ',37.793363170827774, -122.4060702564594,441, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','San Francisco'],
['frh97PBKay8',34.06794575788217, -118.40156826076559,1320, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Los Angeles'],
['iNd7CKmrdpY',10.032714, 105.788126 ,481,'VN','POPtravel','https://www.youtube.com/@poptravelorg','Can Tho' ],
['iNd7CKmrdpY',10.0367558,105.7910135 ,2252,'VN','POPtravel','https://www.youtube.com/@poptravelorg','Can Tho' ],
['JKL5S_boq-4',1.3048167,103.8326361,39,'SG','POPtravel','https://www.youtube.com/@poptravelorg','Singapore' ],
['JKL5S_boq-4',1.3007931,103.8403117,1213,'SG','POPtravel','https://www.youtube.com/@poptravelorg','Singapore' ],
['JKL5S_boq-4',1.2980133,103.8480229,2664,'SG','POPtravel','https://www.youtube.com/@poptravelorg','Singapore' ],
['RvJyagzLUes',10.6101058,104.1814367,421,'KH','POPtravel','https://www.youtube.com/@poptravelorg','Kampot' ],
['24o8YE-Mwd4',36.7674308,31.3880902,470,'TR','POPtravel','https://www.youtube.com/@poptravelorg','Side' ],
['dIKLONh7SB4',42.0669729,19.513625,33,'AL','POPtravel','https://www.youtube.com/@poptravelorg','Shkodër' ],
['dIKLONh7SB4',42.065909, 19.510200,2421,'AL','POPtravel','https://www.youtube.com/@poptravelorg','Shkodër' ],
['dIKLONh7SB4',42.068374, 19.511942,2690,'AL','POPtravel','https://www.youtube.com/@poptravelorg','Shkodër' ],
['9N6IpArMDG8',-34.55721829259971, -58.45155763856845,200,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['9N6IpArMDG8',-34.5579427,-58.4501807,510,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['I7TWfDFlSf4',-34.60862875630961, -58.374458816502546,1240,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['I7TWfDFlSf4',-34.60694698019424, -58.37574848477445,1654,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['I7TWfDFlSf4',-34.60895337398217, -58.38212817623477,64,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['fwUekhXJd5U',-25.59506587483902, -54.590725610383245,69,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Misiones'],
['_Lk6DCnmPLE',-34.592373876236294, -58.378693844533146,231,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['wRQ-vN3C0Ko',-34.60612318759173, -58.381690941223695,313,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['O1RyGdlmoLc',-34.60706564188459, -58.36616101403808,252,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['Dtxr7H9cpEc',-34.583844004597026, -58.39163494962098,93,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['DpvzLyuGtaI',-50.46891320343997, -73.03324494984098,300,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Santa Cruz'],
['QpO_uUjCM5c',50.0866367,14.4196876,1030,'CZ','POPtravel','https://www.youtube.com/@poptravelorg','Prague'],
['QpO_uUjCM5c',50.0859985,14.4148046,1335,'CZ','POPtravel','https://www.youtube.com/@poptravelorg','Prague'],
['QpO_uUjCM5c',50.086209769723936, 14.41345735432818,3904,'CZ','POPtravel','https://www.youtube.com/@poptravelorg','Prague'],
['ol1e2IZ45sw',-25.282562768391205, -57.63553727118099,891,'PAR','ManuTrip','https://www.youtube.com/@ManuTrip','Asuncion'],
['428KUrsOEeU',-25.284343453539265, -57.56769198018064,616,'PAR','ManuTrip','https://www.youtube.com/@ManuTrip','Asuncion'],
['FtQDfyhVSNg',-34.620281306186264, -58.37149449568235 ,1131,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Buenos Aires'],
['zyHOuffhsF4',-34.60849464976005, -58.37219289535865 ,189,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Buenos Aires'],
['zyHOuffhsF4',-34.60159425945439, -58.38551866601885 ,3349,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Buenos Aires'],
['fi3cltSV4cA',-25.686250079771224, -54.44794950241885,4099,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Misiones'],
['pghHgslBJgI',-34.58358471178038, -58.3911774746335,81,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Buenos Aires'],
['aiLw910PC3Y',-54.810821746131516, -68.3152866742151,154,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Ushuaia'],
['6ghlKAmlbkY',-41.121034981205426, -71.39681102306164,268,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Bariloche'],
['IBROyImKFZo',-23.596944252905963, -65.88318723584135,53,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Salta'],
['L4GEfzP09Sg',-26.829572714174326, -65.20440764697985,509,'AR','ManuTrip','https://www.youtube.com/@ManuTrip','Tucuman'],
['uRcpYz9lxZw',55.7664814781097, 37.620986278808545,351,'RU','WindowToM*****','https://www.youtube.com/@WindowToMoscow','Moscow'],
['77bfP5qAar0',55.756118,37.6161097,64,'RU','WindowToM*****','https://www.youtube.com/@WindowToMoscow','Moscow'],
['ZMHTdqngZfA',55.75356764468332, 37.62166782320351,72,'RU','WindowToM*****','https://www.youtube.com/@WindowToMoscow','Moscow'],
['ZMHTdqngZfA',55.75301418846161, 37.622853682566515,454,'RU','WindowToM*****','https://www.youtube.com/@WindowToMoscow','Moscow'],
['IOm_1-Qx744',55.73881335254801, 37.61029574547425,933,'RU','WindowToM*****','https://www.youtube.com/@WindowToMoscow','Moscow'],
['uRcpYz9lxZw',55.7617247,37.6202726,753,'RU','WindowToM*****','https://www.youtube.com/@WindowToMoscow','Moscow'],
['hmT3m4GBhJU',40.784622,-73.9591253,30, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','New York'],
['hmT3m4GBhJU',40.774314, -73.970380,680, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','New York'],
['hmT3m4GBhJU',40.77265742288223, -73.97149820965703,984, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','New York'],
['rDI1XWuz5tM',39.3092147,-119.6500964,237, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Nevada'],
['am6-ntPu-_0',40.7047082562976, -73.99511540940394,66, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','New York'],
['_RTB5Aeq3BU',34.10167341716042, -118.34096089715887,221, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew','Los Angeles'],
['XxsMwnHeZes',48.14564986210154, 11.565785527245966,1560,'DE','POPtravel','https://www.youtube.com/@poptravelorg','Munich' ],
['sCw_gHM7q-Q',53.553151077864676, 10.005848720455502,18,'DE','POPtravel','https://www.youtube.com/@poptravelorg','Hamburg' ],
['7M36wpx_OfU',52.376282008479876, 9.740673894271058,7,'DE','POPtravel','https://www.youtube.com/@poptravelorg','Hanover' ],
['gA1aLQCCZQE',52.51392118526781, 13.378696152051283,3240,'DE','POPtravel','https://www.youtube.com/@poptravelorg','Berlin' ],
['gA1aLQCCZQE',52.51631158134281, 13.378436903451522,3641,'DE','POPtravel','https://www.youtube.com/@poptravelorg','Berlin' ],
['V5q8f_eluOg',54.59482020760334, -5.934534194681385,43,'IRE','POPtravel','https://www.youtube.com/@poptravelorg','Belfast' ],
['AWHkUszwLf4',35.6807522,139.7630938,65,'JAP','Taka Soyama','https://www.pexels.com/@taka-soyama-4618245/','Tokyo'],
['42Sq_ePHpCc',35.282887,129.0706587,828, 'SK','ZERO ONE', 'https://www.youtube.com/@zeroone_01','Busan'],
['nPKe55qvJl8',24.8566053,67.0157151,170,'PK','Walk This Way', 'https://www.youtube.com/@walkthisway001','Karachi'],
['nPKe55qvJl8',24.856195, 67.015195,900,'PK','Walk This Way','https://www.youtube.com/@walkthisway001','Karachi'],
['nPKe55qvJl8',24.8549319,67.0154156,1755,'PK','Walk This Way','https://www.youtube.com/@walkthisway001','Karachi'],
['Ad_QDNC_1g0',-23.5672806,-46.6496069,191,'BR','Walk This Way', 'https://www.youtube.com/@walkthisway001','Sao Paulo'],
['ZccG9pKupqU',20.5324549,-105.2894049,1,'MX','Travel Tours 4K', 'https://www.youtube.com/@Traveltoursin4k','Jalisco'],
['zs3SYMrdur0',20.7561162,-105.3408928,1,'MX','Travel Tours 4K', 'https://www.youtube.com/@Traveltoursin4k','Nayarit'],
['Ad_QDNC_1g0',-23.5672806,-46.6496069,191,'BR','Walk This Way', 'https://www.youtube.com/@walkthisway001','Sao Paulo'],
['rktKwPbXLZs',22.2846002,114.2135811,59,'CH','Lazy Explorer','https://www.youtube.com/@lazy_explorer','Hong Kong'],
['5ZcYgv9ffzU',37.0704012,-8.1081289,697,'PT','Walking Portugal','https://www.youtube.com/@Walking_Portugal','Quarteira'],
['5ZcYgv9ffzU',37.06696758422314, -8.102253299954697,1854,'PT','Walking Portugal','https://www.youtube.com/@Walking_Portugal','Quarteira'],
['DrkaBlrgwlA',13.7438432,100.5024166,185,'TH','Lazy Explorer','https://www.youtube.com/@lazy_explorer','Bangkok'],
['21BHGHBxKz4',30.043400, 31.236254,1858,'EG','Streets Of Ambience','https://www.youtube.com/@streetsambience6054','Cairo'],
['5d7-bxplgr8',49.2889298,-123.1182284,111,'CA','Zero One','https://www.youtube.com/@zeroone_01','Vancouver'],
['5d7-bxplgr8',49.2880387,-123.1142063,881,'CA','Zero One','https://www.youtube.com/@zeroone_01','Vancouver'],
['5d7-bxplgr8',49.28265316002172, -123.1182161055164,1612,'CA','Zero One','https://www.youtube.com/@zeroone_01','Vancouver'],
['5d7-bxplgr8',49.28596015370139, -123.11254286984651,2171,'CA','Zero One','https://www.youtube.com/@zeroone_01','Vancouver'],
['UqZYW3-MgnE',37.5006252,127.0255362,482,'SK','Watchers Club','https://www.youtube.com/@watchersclub','Seoul'],
['zUUT06KHbw8',46.62425461112303, 8.035429897480348,150,'SZ','Chris L','https://www.youtube.com/@christopherlzt','Grindelwald'],
['8fOxvqVbPvc',56.950837338520955, 24.104650581006652,662,'LTV','Streets Of Ambience','https://www.youtube.com/@streetsambience6054','Riga'],
['K4HWfOy93k8',20.6896872,-88.201725,112,'MX','Paseos de Aventura', 'https://www.youtube.com/@MiddleAgeAdventureWalks','Valladolid'],
['tHhTHoPcRB8',48.86042795329101, 2.3377860527069623,409,'FR','People Places & Events','https://www.youtube.com/@PeoplePlacesEvents','Paris'],
['tHhTHoPcRB8',48.86106567197757, 2.3359028276445084,928,'FR','People Places & Events','https://www.youtube.com/@PeoplePlacesEvents','Paris'],
['RnWLl2HRgOQ',-34.61227406477105, -58.36359412429127,1583,'AR','Tropical Nomad','https://www.youtube.com/@PeteTropicalNomad','Buenos Aires'],
['RnWLl2HRgOQ',-34.605027402533324, -58.367107801435225,5025,'AR','Tropical Nomad','https://www.youtube.com/@PeteTropicalNomad','Buenos Aires'],
['RnWLl2HRgOQ',-34.60801046177624, -58.37103582651056,5509,'AR','Tropical Nomad','https://www.youtube.com/@PeteTropicalNomad','Buenos Aires'],
['RnWLl2HRgOQ',-34.60273514997674, -58.38345687276528,6771,'AR','Tropical Nomad','https://www.youtube.com/@PeteTropicalNomad','Buenos Aires'],
['RnWLl2HRgOQ',-34.609690498628794, -58.38968946476691,7831,'AR','Tropical Nomad','https://www.youtube.com/@PeteTropicalNomad','Buenos Aires'],
['7WCK5_JodiU',40.18206776788928, 44.52088794136007,1453,'ARM','Travel Monkey','https://www.youtube.com/@travelmonkey2022','Yerevan'],
['j-wq6fTYmew',28.640959628460305, 77.21070536024683,206,'IN','Streets of Ambience','https://www.youtube.com/@streetsambience6054','New Delhi'],
['dkTq0zuno_Q',37.39207286872985, -5.996576691388661,751,'ES','Teleport Walkers','https://www.youtube.com/@TeleportWalkers','Sevilla'],
['dkTq0zuno_Q',37.39113625775936, -5.99537170546983,1282,'ES','Teleport Walkers','https://www.youtube.com/@TeleportWalkers','Sevilla'],
['izAiKy89vwg',35.6569217,139.7536052,104,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['izAiKy89vwg',35.65705497598221, 139.7523612827231,2606,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['Cg_9hjAm5gU',35.64459951105388, 139.70046802196327,165,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['Cg_9hjAm5gU',35.64829118114152, 139.69545494062717,1436,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['ZOWygni0bOY',35.45334516639329, 139.6357929432623,324,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['ZOWygni0bOY',35.454165512071, 139.63607863590607,794,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['eTZxoAxsO8E',35.64898898382873, 139.69931674578416,33,'JP','KiLn','https://www.youtube.com/@KiLn1009','Tokyo'],
['cw5E_5-xn84',38.04476430355647, 114.48700435868744,492,'CN','DuckTravel','https://www.youtube.com/@DuckTravel','Shijiazhuang'],
['JYMwoDkf8Ws',-32.91959374398838, -68.84593538372067,22,'AR','Diego Salatino','https://www.youtube.com/@DiegoSalatino','Mendoza'],
['v7NA0C5oJLY',59.94119243601341, 30.312381188069537,793,'RU','Ivar Maldeikis','https://www.youtube.com/@ivarmaldeikis','St. Petesburg'],
['XTIMkOTFqqw',43.6477833940206, -79.39628648439763,575,'CA','A Dawn','https://www.youtube.com/@ADawn','Toronto'],
['XTIMkOTFqqw',43.651706873252465, -79.37925148373166,2107,'CA','A Dawn','https://www.youtube.com/@ADawn','Toronto'],
['PzIQBbnMzKM',40.757945238992114, -73.97789892352559,25,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['PzIQBbnMzKM',40.76005535826208, -73.98290085099386,456,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['WQEoE6bp0LY',40.756710163894034, -73.97883544564534,27,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['NK_FQ7XLr6k',40.71430512734087, -74.01334106377642,7,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['mUA1hhoL4p8',40.70645052325826, -74.00655877746622,34,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['B4GQ9xSyPjo',40.711840770734796, -74.01193995088201,41,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['1_4O-VMDm6E',40.705283281594134, -74.00600549345309,86,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['NHPPgD3h6oA',40.70445337414764, -74.01584874329727,75,'US','Spirit of N','https://www.youtube.com/@spiritofnewyork1819','New York'],
['9N6IpArMDG8',-34.55700181814424, -58.45222054648821,66,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['9N6IpArMDG8',-34.55789954238547, -58.45025453263423,543,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre','Buenos Aires'],
['x_EIenax9zs',34.70404224115961, 135.49748490067643,163,'JP','Gaijin Adventures','https://www.youtube.com/@Gaijin_adventures','Osaka'],
['x_EIenax9zs',34.70404224115961, 135.49748490067643,163,'JP','Gaijin Adventures','https://www.youtube.com/@Gaijin_adventures','Osaka'],
['3_mlkTAi0ng',40.75540105748244, -73.94126244306398,213,'US','Walking ***** Luna','https://www.youtube.com/@WALKINGNYCLUNA','Long Island'],
['JmABJdosEYw',40.42067234724074, -3.6990897586068767,410,'ES','Walking around city','https://www.youtube.com/@walkingaroundcity2160','Madrid'],
['JmABJdosEYw',40.41896595101334, -3.707410450820669,966,'ES','Walking around city','https://www.youtube.com/@walkingaroundcity2160','Madrid'],
['_MTtDni0xf0',46.061562055677115, 13.23479955741569,150,'IT','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Udine'],
['_MTtDni0xf0',46.06218805321954, 13.232298057574733,768,'IT','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Udine'],
['_MTtDni0xf0',46.065703356739476, 13.23358505175013,1406,'IT','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Udine'],
['uzumxoo7fSU',39.57224389251076, 2.6520803363015037,626,'ES','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Mallorca'],
['Yy_aVMmHlyM',43.669268841386135, -79.39174077998233,132,'CA','Eye Heart Cycling','https://www.youtube.com/@eyeheartcycling','Toronto'],
['Yy_aVMmHlyM',43.66132037858645, -79.38296345419354,1212,'CA','Eye Heart Cycling','https://www.youtube.com/@eyeheartcycling','Toronto'],
['SeRmOzcEt9M',25.77708787085667, -80.13139835627238,62,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Miami'],
['SeRmOzcEt9M',25.781532781847925, -80.1304494417622,554,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Miami'],
['Ov2yZdbc8tc',25.765567842716514, -80.22148666671843,74,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Miami'],
['Ov2yZdbc8tc',25.765890903267255, -80.2153357084752,821,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Miami'],
['Ov2yZdbc8tc',25.765603571773422, -80.22116012873005,1486,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Miami'],
['N14HuzfK6lk',27.94872893852301, -82.45457451150659,72,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['N14HuzfK6lk',27.946349104799385, -82.45730133913888,678,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['N14HuzfK6lk',27.950924464468596, -82.4594571010082,1388,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['N14HuzfK6lk',27.949630870659675, -82.45481988624489,2526,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['N14HuzfK6lk',27.950508177573308, -82.45507056277727,3063,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['1TCh11GJhdQ',27.943130324639423, -82.44760225190576,62,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['1TCh11GJhdQ',27.944402841140427, -82.44552237300563,694,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['1TCh11GJhdQ',27.95063724291666, -82.44574783425024,1481,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Tampa'],
['z_vNwikJKH8',28.4734015558863, -81.46481061054276,20,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Orlando'],
['z_vNwikJKH8',28.473805845479333, -81.46572064816162,972,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Orlando'],
['z_vNwikJKH8',28.472645306613245, -81.46560030269957,1680,'US','Travels With Alain','https://www.youtube.com/@travelswithalain','Orlando'],
['KFXoMOmz8as',37.45149496558525, 126.45324714141861,1636,'SK','Hodu Walker','https://www.youtube.com/@hoduwalker','Incheon'],
['zyRsmqsGggY',37.56358242291375, 126.98283843689401,36,'SK','K*** Walking Tour','https://www.youtube.com/@WalkingTravel21','Seoul'],
['hk_kAYwbQPw',34.11902970364856, -118.30041112031401,92,'US','Zero One','https://www.youtube.com/@zeroone_01','Los Angeles'],
['sesj4QwZRO8',1.2811823196972463, 103.84915210345567,285,'SG','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Singapore'],
['sesj4QwZRO8',1.2837785296260664, 103.85113138288266,973,'SG','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Singapore'],
['kibhq0WR1XM',21.03135442192783, 105.84848129778157,1228,'VN','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Hanoi'],
['kibhq0WR1XM',21.02477459061477, 105.85308195947172,229,'VN','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Hanoi'],
['l5xe_yVgFoY',38.71213351186336, -9.139431060787198,286,'PT','Walking P*****','https://www.youtube.com/@Walking_Portugal','Lisboa'],
['aRHweyKtvgA',36.106934075089065, -115.17331520947201,281,'US','Zero One','https://www.youtube.com/@zeroone_01','Las Vegas'],
['wFZy3owiG2U',41.31062522440086, 19.436809373232837,8,'AL','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Durres'],
['0QLhb01jfKI',38.7677920644157, -9.098308290512026,58,'PT','Walking P*****','https://www.youtube.com/@Walking_Portugal','Lisboa'],
['vfzPQCk87m0',40.753621277050414,-73.98697438819755,33,'US','WizardP','https://www.youtube.com/@wizardp7467','New York'],
['vfzPQCk87m0',40.75800626075224, -73.98533519938796,538,'US','WizardP','https://www.youtube.com/@wizardp7467','New York'],
['9llK66sQmEw',47.37576442233883, 8.53751871378099,321,'SWZ','Street To Street','https://www.youtube.com/@streettostreet','Zurich'],
['9llK66sQmEw',47.36765650776644, 8.545285779759638,2431,'SWZ','Street To Street','https://www.youtube.com/@streettostreet','Zurich'],
['alRKhZjdR9M',52.363643496946096, 4.8851677083576135,286,'NTH','TourDrift','https://www.youtube.com/@tourdrift8580','Amsterdam'],
['alRKhZjdR9M',52.36676788423055, 4.891316691120381,842,'NTH','TourDrift','https://www.youtube.com/@tourdrift8580','Amsterdam'],
['y4RN6MusjY8',46.20222395335237, 6.153557598327851,84,'SWZ','Walking Tour Master','https://www.youtube.com/@Walkingtourmaster','Geneva'],
['nsa82K9x7A0',40.419925821610235, -3.700989645180039,426,'ES','TourDrift','https://www.youtube.com/@tourdrift8580','Madrid'],
['nsa82K9x7A0',40.419324478139835, -3.693570792713237,895,'ES','TourDrift','https://www.youtube.com/@tourdrift8580','Madrid'],
['nsa82K9x7A0',40.41673318930838, -3.702573047558823,1536,'ES','TourDrift','https://www.youtube.com/@tourdrift8580','Madrid'],
['B8rC1p1g5ZU',43.33682269048736, 17.813725017924604,600,'BSN','POPtravel','https://www.youtube.com/@poptravelorg','Mostar' ],
['B8rC1p1g5ZU',43.33682269048736, 17.813725017924604,600,'BSN','POPtravel','https://www.youtube.com/@poptravelorg','Mostar' ],
['B8rC1p1g5ZU',43.336982591155014, 17.812021042238513,1713,'BSN','POPtravel','https://www.youtube.com/@poptravelorg','Mostar' ],
['B8rC1p1g5ZU',43.337203638143066, 17.814156862462188,2413,'BSN','POPtravel','https://www.youtube.com/@poptravelorg','Mostar' ],
['B8rC1p1g5ZU',43.33914277843345, 17.81501797397351,3046,'BSN','POPtravel','https://www.youtube.com/@poptravelorg','Mostar' ],
['u5V7X0tzGDc',40.70186184575172, -73.80801945267366,812,'US','Walk Around W/ Us','https://www.youtube.com/@walkaroundwithus','Queens'],
['u5V7X0tzGDc',40.70149884195183, -73.82385925309559,2012,'US','Walk Around W/ Us','https://www.youtube.com/@walkaroundwithus','Queens'],
['QDhiq1Y9vUE',50.63685618351507, 3.0697021660918473,20,'FR','POPtravel','https://www.youtube.com/@poptravelorg','Lille' ],
['QDhiq1Y9vUE',50.63135632402641, 3.061553187863695,744,'FR','POPtravel','https://www.youtube.com/@poptravelorg','Lille' ],
['QDhiq1Y9vUE',50.63120140381111, 3.0547043018551547,1508,'FR','POPtravel','https://www.youtube.com/@poptravelorg','Lille' ],
['QDhiq1Y9vUE',50.62948779735412, 3.0582314389660885,2186,'FR','POPtravel','https://www.youtube.com/@poptravelorg','Lille' ],
['QDhiq1Y9vUE',50.63293488708856, 3.062647470224023,2681,'FR','POPtravel','https://www.youtube.com/@poptravelorg','Lille' ],
['lJTXnG6AlzY',43.695486593659, 7.276714180991253,35,'FR','Nomad Walker','https://www.youtube.com/@NOMADWALKER_','Niza'],
['lJTXnG6AlzY',43.69510404108565, 7.273482770080713,711,'FR','Nomad Walker','https://www.youtube.com/@NOMADWALKER_','Niza'],
['kDQXwOkikPw',45.56657578672296, 5.92288950030342,30,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Chambery'],
['kDQXwOkikPw',45.563280980417716, 5.9217369617207725,628,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Chambery'],
['kDQXwOkikPw',45.56493283961756, 5.918489823835716,1133,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Chambery'],
['kDQXwOkikPw',45.56657578672296, 5.92288950030342,30,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Chambery'],
['HRXfxEcQFxA',49.70717542537798, 0.20548552520966826,103,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Etretat'],
['HRXfxEcQFxA',49.70822966347092, 0.2049564299979739,820,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Etretat'],
['AfXyxj7WqdA',45.76849169591416, 4.837099110888122,51,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Lyon'],
['AfXyxj7WqdA',45.768155237889346, 4.829327852537253,663,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Lyon'],
['AfXyxj7WqdA',45.765316034243305, 4.827318658144039,1157,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Lyon'],
['hB5ZM78uCO4',43.30401832537083, 5.3941176110074585,61,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Marseille'],
['hB5ZM78uCO4',43.29973922722406, 5.385538715720343,594,'FR','Casual Voyager','https://www.youtube.com/@casualvoyager','Marseille'],
['Yex5X2p2izk',39.859233646686796, -4.022424060360696,600,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Toledo'],
['Yex5X2p2izk',39.85751005684317, -4.021269174599751,1967,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Toledo'],
['mxZGFvBpo',40.41459109135954, -3.7035879055320904,6,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Madrid'],
['mxZGFvBpo',40.41920472478652, -3.698070580562131,554,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Madrid'],
['mxZGFvBpo',40.41855294989362, -3.696661923858176,1052,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Madrid'],
['mxZGFvBpo',40.416092615992575, -3.7069638393876336,1761,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Madrid'],
['v_pDQLxe_mQ',37.33229090988114, -121.88468847168534,30,'US','Gala Daily','https://www.youtube.com/@galadaily240','San Jose'],
['v_pDQLxe_mQ',37.33524746903032, -121.88998726682321,548,'US','Gala Daily','https://www.youtube.com/@galadaily240','San Jose'],
['v_pDQLxe_mQ',37.33776800777274, -121.89393627930158,1164,'US','Gala Daily','https://www.youtube.com/@galadaily240','San Jose'],
['GmI4WLZ3RWU',37.34899567313431, -121.89437410442511,68,'US','Gala Daily','https://www.youtube.com/@galadaily240','San Jose'],
['HKiyU2JtlMI',41.37392680733299, 2.1502713792964676,460,'ES','The World is Yours','https://www.youtube.com/@Gmadeira04','Barcelona'],
['HKiyU2JtlMI',41.37513632941855, 2.1618819597737793,1173,'ES','The World is Yours','https://www.youtube.com/@Gmadeira04','Barcelona'],
['HKiyU2JtlMI',41.37459760904399, 2.176548066407066,1840,'ES','The World is Yours','https://www.youtube.com/@Gmadeira04','Barcelona'],
['HKiyU2JtlMI',41.375538746884736, 2.180178823327157,2950,'ES','The World is Yours','https://www.youtube.com/@Gmadeira04','Barcelona'],
['HKiyU2JtlMI',41.381142564092656, 2.1732598151770866,3493,'ES','The World is Yours','https://www.youtube.com/@Gmadeira04','Barcelona'],
['AL5WRHVSO34',41.40401781117569, 2.174923371244246,99,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Barcelona'],
['AL5WRHVSO34',41.401175139691674, 2.1790790562265423,696,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Barcelona'],
['AL5WRHVSO34',41.40136222316096, 2.1856607334370897,1282,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Barcelona'],
['6nsAktkBDhg',41.387092718368294, 2.1699289769037966,2295,'ES','POPtravel','https://www.youtube.com/@poptravelorg','Barcelona'],
['32AwZU4FhXc',39.458615,-0.3558719,109,'ES','Impresiones Todas Partes','https://www.youtube.com/@ImpressionsFromEverywhere','Valencia'],    
["3ZygN1uKRok",41.39816350624864, 2.1708645837607694, 940,'ES', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Barcelona'], 
["3ZygN1uKRok",41.39134588744798, 2.163983735547655, 1399,'ES', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Barcelona'],
["3ZygN1uKRok",41.39131950408178, 2.170793474286792, 1845,'ES', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Barcelona'],
["-dZyG7zYxOw",40.550594350190096, 14.24251863078365, 136,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Capri'],
["-dZyG7zYxOw",40.54749542909699, 14.243634184697326, 1000,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Capri'],
["BSxV9nUfDAU",-33.903989032285516, 18.421244996936988, 220,'SA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Cape Town'],
["BSxV9nUfDAU",-33.962639071304785, 18.409769655891978, 1084,'SA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Cape Town'],
["BSxV9nUfDAU",-33.91892476085363, 18.38477143542082, 1727,'SA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Cape Town'],
["MWvrDzIzfhQ",25.29601844342615, 51.543429526763305, 554,'QA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Doha'],
["MWvrDzIzfhQ",25.38908155374747, 51.53220891943388, 1170,'QA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Doha'],
["MWvrDzIzfhQ",25.359066095510858, 51.52503677572895, 1800,'QA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Doha'],
["MWvrDzIzfhQ",25.3575483220633, 51.52671547354513, 2482,'QA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Doha'],
["MWvrDzIzfhQ",25.289014281798337, 51.54778197321127, 3051,'QA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks','Doha'],
['5FEvcCa6Jhs',25.765179185992753, -80.18563531843044,71,'US','Traveling W/ Andrew','https://www.youtube.com/@TravelingwithAndrew','Miami'],
['5FEvcCa6Jhs',25.763312160213868, -80.19002556781052,680,'US','Traveling W/ Andrew','https://www.youtube.com/@TravelingwithAndrew','Miami'],
['5FEvcCa6Jhs',25.767262486412545, -80.18841434631132,1405,'US','Traveling W/ Andrew','https://www.youtube.com/@TravelingwithAndrew','Miami'],



]


var arg_list = [["jstF9EYr4IM", -38.005376808820586, -57.54250699591142, 833,'ARG', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["EIc2vyDRT20", -36.535465, -56.688901,300,'ARG', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["dbICS9q9hVo", -32.890557, -68.844857, 240,'ARG', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
['9N6IpArMDG8',-34.55721829259971, -58.45155763856845,200,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['9N6IpArMDG8',-34.5579427,-58.4501807,510,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['I7TWfDFlSf4',-34.60862875630961, -58.374458816502546,1240,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['I7TWfDFlSf4',-34.60694698019424, -58.37574848477445,1654,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['I7TWfDFlSf4',-34.60895337398217, -58.38212817623477,64,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['fwUekhXJd5U',-25.59506587483902, -54.590725610383245,69,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['_Lk6DCnmPLE',-34.592373876236294, -58.378693844533146,231,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['wRQ-vN3C0Ko',-34.60612318759173, -58.381690941223695,313,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['O1RyGdlmoLc',-34.60706564188459, -58.36616101403808,252,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['Dtxr7H9cpEc',-34.583844004597026, -58.39163494962098,93,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['DpvzLyuGtaI',-50.46891320343997, -73.03324494984098,300,'AR','Martin Recorre','https://www.youtube.com/@MartinRecorre'],
['FtQDfyhVSNg',-34.620281306186264, -58.37149449568235 ,1131,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['zyHOuffhsF4',-34.60849464976005, -58.37219289535865 ,189,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['zyHOuffhsF4',-34.60159425945439, -58.38551866601885 ,3349,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['fi3cltSV4cA',-25.686250079771224, -54.44794950241885,4099,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['pghHgslBJgI',-34.58358471178038, -58.3911774746335,81,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['aiLw910PC3Y',-54.810821746131516, -68.3152866742151,154,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['6ghlKAmlbkY',-41.121034981205426, -71.39681102306164,268,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['IBROyImKFZo',-23.596944252905963, -65.88318723584135,53,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
['L4GEfzP09Sg',-26.829572714174326, -65.20440764697985,509,'AR','ManuTrip','https://www.youtube.com/@ManuTrip'],
]


var ita_list = [["jYVJccE8Wa4", 43.322257, 11.330865, 935 ,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["zWxdKYxfcRQ", 44.499609, 11.343899, 866,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["gpaB5d4C6hA", 45.465305, 9.194007,260,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 66,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 780,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 1652,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 2202,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,50,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,518,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,1164,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["9vx9qm2_ghI", 45.463732, 9.190500,97,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["9vx9qm2_ghI", 45.463732, 9.190500,984,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,99,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,551,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,1002,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,100,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,520,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,960,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,1280,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["m4D8LqsvXu0", 44.303984, 9.207712,640,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8391213,14.2495606,235,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8401192,14.2484348,590,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8473569,14.2515967,1984,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8513121,14.2577763,2531,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8413436,14.2520886,3302,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
]

var usa_list = [["cQilmRKq9A0", 34.007217, -118.496112,693,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["cQilmRKq9A0", 34.007968, -118.494115,1165,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["xAN7PVS8Hko", 34.0691215,-118.2913733,119,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["xAN7PVS8Hko", 34.076186, -118.291566,932,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["xAN7PVS8Hko", 34.0729513,-118.2915304,1842,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["teHOCmM18ZU", 34.0769519,-118.3803203,127,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["teHOCmM18ZU", 34.077164, -118.376534,1227,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["25iy2ZFAMZE", 34.101665, -118.338577,24,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["BYX7lxGRl3Q", 33.8148071,-117.9215549,185,'US', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
['sKTox7DglVg',37.8093724,-122.4759122,301, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['sKTox7DglVg',37.8084333,-122.4729643,1400, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['a6VI-4YNHR0',40.7567671,-73.9865428,6, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['4ugekTk2_Ss',40.6908017,-74.045311,315, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['-jHtx64DUuw',21.4310782,-157.8315108,5, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['0WFAbXjpC1s',21.281624, -157.830731,107, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['0WFAbXjpC1s',21.2740059,-157.824152,1273, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['0WFAbXjpC1s',21.277048, -157.826154,2089, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['gcfC4lT2mj0',36.122620868922525, -115.17038233886313,2765, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['gcfC4lT2mj0',36.117949828514625, -115.17166929611284,4272, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['gcfC4lT2mj0',36.115322568368626, -115.17367909154801,531, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['gcfC4lT2mj0',36.101604793421046, -115.1732311728788,6415, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['vuWpEJ1JRUQ',37.793363170827774, -122.4060702564594,441, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
['frh97PBKay8',34.06794575788217, -118.40156826076559,1320, 'US', 'Traveling w/ Andrew', 'https://www.youtube.com/@TravelingwithAndrew'],
]


var europe_list = [["kXAHDqHfXAQ", 39.467269, -0.374927, ,'ES', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'],
["2G3Mq_D1Po8", 48.858907, 2.293025,140,'FRA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["jYVJccE8Wa4", 43.322257, 11.330865, 935 ,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["zWxdKYxfcRQ", 44.499609, 11.343899, 866,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["gpaB5d4C6hA", 45.465305, 9.194007,260,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 66,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 780,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 1652,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754, 2202,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,50,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,518,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,1164,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["9vx9qm2_ghI", 45.463732, 9.190500,97,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["9vx9qm2_ghI", 45.463732, 9.190500,984,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["4xJf5PfuMjg", 44.117593, 15.219858,55,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["4xJf5PfuMjg", 44.117593, 15.219858,390,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["4xJf5PfuMjg", 44.117593, 15.219858,1028,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["4xJf5PfuMjg", 44.117593, 15.219858,1615,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["GkhMz52zMG0", 46.004807, 8.948346,345,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["GkhMz52zMG0", 46.004807, 8.948346,670,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["GkhMz52zMG0", 46.004807, 8.948346,1246,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["GkhMz52zMG0", 46.004807, 8.948346,1693,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["cSWv6YJYBHM", 43.508254, 16.440185,103,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["cSWv6YJYBHM", 43.508254, 16.440185,732,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["cSWv6YJYBHM", 43.508254, 16.440185,1060,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["cSWv6YJYBHM", 43.508254, 16.440185,1405,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["RInBAatA11Q", 52.247803, 21.013650,70,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["RInBAatA11Q", 52.247803, 21.013650,656,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["RInBAatA11Q", 52.247803, 21.013650,1180,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["RInBAatA11Q", 52.247803, 21.013650,1654,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,98,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,845,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,1415,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,99,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,551,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,1002,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,100,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,520,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,960,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,1280,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["m4D8LqsvXu0", 44.303984, 9.207712,640,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["EtxCpMzu1GY", 52.360660, 4.887635,100,'NTH', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["EtxCpMzu1GY", 52.366964, 4.889127,907,'NTH', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["EtxCpMzu1GY", 52.376607, 4.899634,2249,'NTH', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8391213,14.2495606,235,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8401192,14.2484348,590,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8473569,14.2515967,1984,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8513121,14.2577763,2531,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["-0YA3p8zvRE", 40.8413436,14.2520886,3302,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'],
["by-2aEbso28", 51.601629,-0.3169,94,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["by-2aEbso28", 51.601629,-0.3169,94,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["by-2aEbso28", 51.607338, -0.301417,1110,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["by-2aEbso28", 51.6076714,-0.2905685,1743,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["by-2aEbso28", 51.6102515,-0.2829999,1743,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["_aQVlq9jOlw", 51.5949805,-0.3145607,410,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["_aQVlq9jOlw", 51.600035, -0.312838,1728,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["bEt-vzKFVP8", 51.509009, -0.087134,445,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["bEt-vzKFVP8", 51.5074602,-0.0776777,1428,'UK', 'Voyager Walks','https://www.youtube.com/@TheVoyagerWalks'],
["wG0bqfgKJKU", 51.5107977,-0.0984437,600,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["wG0bqfgKJKU", 51.513865, -0.101370,216,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["wG0bqfgKJKU", 51.507418, -0.092923,1200,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["wG0bqfgKJKU", 51.5100729,-0.0869013,1884,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["wG0bqfgKJKU", 51.5130422,-0.090591,3173,'UK', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["41Swm3AtU48", 50.847373, 4.351958,258,'BE', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["41Swm3AtU48", 50.8465143,4.3495567,750,'BE', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["41Swm3AtU48", 50.84529,4.3470555,1084,'BE', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["rFfWAwsdZWI", 59.913840, 10.738698,81,'NW', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["rFfWAwsdZWI", 59.9134949,10.7398892,1140,'NW', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
["rFfWAwsdZWI", 59.9119644,10.7485938,1725,'NW', 'Atmos Walks','https://www.youtube.com/@AtmosWalks'],
['QpO_uUjCM5c',50.0866367,14.4196876,1030,'CZ','POPtravel','https://www.youtube.com/@poptravelorg'],
['QpO_uUjCM5c',50.0859985,14.4148046,1335,'CZ','POPtravel','https://www.youtube.com/@poptravelorg'],
['QpO_uUjCM5c',50.086209769723936, 14.41345735432818,3904,'CZ','POPtravel','https://www.youtube.com/@poptravelorg']
]

const list = {
    'US': usa_list,
    'ITA': ita_list,
    'PAUSE': video_list,
    'CLASICO': video_list,
    'contrarreloj': video_list,
    'radius': video_list,
    '1hp': video_list,
    'clear_map': video_list,
    'INVERTIDO': video_list,
    'nozoom': video_list,
    'EUROPA': europe_list,
    'ARG': arg_list,
}



var x = document.getElementById("warning-container")
var myvid = document.getElementById('myvid');
var bool_map = false
var backvideo
var credit_array = []
var marker_placed = false
var language =  ((document.getElementsByTagName('meta'))[0]).getAttribute('content')
var round_ended = false


// initalize map
map = L.map('map').setView([0, 0], 2.4); 

//select map type based on gamemode
switch(gamemode){
    case 'clear_map':
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxZoom: 19,
            minZoom: 2,
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }).addTo(map);
            break
    case 'nozoom':
        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', {
            minZoom: 2,
            maxZoom: 2,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains:['mt0','mt1','mt2','mt3']
        }).addTo(map);
        break
    default:
        L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&hl=en', {
            minZoom: 2,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains:['mt0','mt1','mt2','mt3']
        }).addTo(map);
}
map.setMaxBounds([[150,200],[-150,-200]]);



//add marker to map
marker = L.layerGroup();
map.addLayer(marker)

function invsze(){
  map.invalidateSize();
}

function onYouTubeIframeAPIReady() {
    Enable_marking = true
    active_video = randomlyChooseVideo()
    player = new YT.Player("myvid", {
        
        videoId: active_video[0],
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            rel : 0,
            fs : 0,
            modestbranding: 1,
            showinfo: 0,
            start: active_video[3],
            loop: 1,
            origin: "http://127.0.0.1:3000/main.html"
        },
        events: {
            onReady: onPlayerReady,
            onError: onPlayerError,
            onStateChange: onStateChange
        },

    });

    player.getVideoURL = function(){
        window.location.href = 'https://www.videoguessr.com/en/credits.html'
    }

    player.getVideoData = function(){
        window.location.href = 'https://giphy.com/gifs/rickroll-rick-astley-never-gonna-give-you-up-Vuw9m5wXviFIQ/fullscreen'
    }

    if(gamemode != 'PAUSE'){
        player.pauseVideo = function(){
            window.location.href = 'https://giphy.com/gifs/rickroll-rick-astley-never-gonna-give-you-up-Vuw9m5wXviFIQ/fullscreen'
        }
    }
    
    

}


function onStateChange(event){
    if(event.data == 1 || event.data == 5 ){
        console.log('showing')
        document.getElementById('myvid').style.display = 'block'
    }
}

function onPlayerReady(event) {
    if(gamemode == 'INVERTIDO'){
        document.getElementById('myvid').style.transform = 'rotate(180deg)'
        document.getElementById('myvid').style.top= '-80px';
        document.getElementById('myvid').style.left= '00%';
    }
    // Define custom control actions
    document.getElementById("rewindButton").addEventListener("click", rewindVideo);
    document.getElementById("reduceSpeedButton").addEventListener("click", reduceSpeed);
    player.setPlaybackQuality('highres')

    if(window.mobileCheck()){
        player.mute()
    }

    if(mute && window.mobileCheck() == false){
        player.unMute()
        player.setVolume(0)
        document.getElementById('volumerange').value = 0
    }
    if(mute == false && window.mobileCheck() == false){
        player.unMute()
        player.setVolume(30)
    }
    

    var a = document.getElementById('credits');

    a.href = active_playlist[vid_index][6]
    a.innerHTML = `${active_playlist[vid_index][5]}`
    startTimer()
    setTimeout(() => {  document.getElementById('howto').style.display = "none"; }, 6500)

}

function onPlayerError(event){

    //choose new video
    var newvid = randomlyChooseVideo()

    //update video
    player.loadVideoById(newvid[0],newvid[3]);


    //remove video from credit array
    credit_array.splice(-1)
}



document.getElementById('speedrange').oninput = function(){
    player.setPlaybackRate(parseFloat((document.getElementById('speedrange')).value))
    document.getElementById('reduceSpeedButton').innerHTML = `x${(document.getElementById('speedrange')).value}`
};

document.getElementById('volumerange').oninput = function(){
    player.setVolume(parseFloat((document.getElementById('volumerange')).value))
};



//player color selection
function choose_color(i){
    return(color_list[i])
}


function getRandomIndex(max) {
    return rando(max)
}



//choose random vid based on video list index
function randomlyChooseVideo() {
    // get new video
    vid_index =  getRandomIndex((list[gamemode]).length);
    if(validateVideo(vid_index)){
        videos_played.push(vid_index)
    }
    else{
        randomlyChooseVideo()
    }
    
    src = ((list[gamemode])[vid_index]);
    active_video = (list[gamemode])[vid_index]
    active_playlist = list[gamemode]

    // update the video's coordenates
    video_coords = [active_video[1],active_video[2]]

    //update credits
    var a = document.getElementById('credits');
    a.href = active_playlist[vid_index][6]
    a.innerHTML = `${active_playlist[vid_index][5]}`
    addtocredit(src)

    //return video array
    console.log(src)
    return(src)
   
}




//calculate distance
function distance_calc(user_guess, video_coords){
    const R = 6371e3; // metres
    const φ1 = user_guess[0] * Math.PI/180; // φ, λ in radians


    const φ2 = +video_coords[0] * Math.PI/180;
    const Δφ = (+video_coords[0]-user_guess[0]) * Math.PI/180;
    const Δλ = (+video_coords[1]-user_guess[1]) * Math.PI/180;
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    const d = (R * c)/1000; 
    return(d)
}


function validateVideo(ind){
    if(videos_played.includes(ind)){
        return false;
    }
    else{
        return true;
    }
}

//marking function
function mark(e){
    marker.clearLayers();
    var coord = e.latlng;
    lat = coord.lat;
    lng = coord.lng;
    L.marker((e.latlng), {icon: choose_color(Number(numero_color))}).addTo(marker);
    marker_coords = [coord.lat, coord.lng]
    marker_placed = true
}

//show or hide map
function map_open() {

        if(bool_map == false){
         
           bool_map = true
        }
        else {
            bool_map = false
        }
}



//hide guess button after guessing and shows 'continue' button, viceversa otherwise
function switchbtn() {
    var x = document.getElementById("guess");
    var y = document.getElementById("continue");
    if (x.style.visibility != "hidden"){
        x.style.visibility = "hidden";
        y.style.visibility = "visible";
    }
    else{
        y.style.visibility = "hidden";
        x.style.visibility = "visible";
    }

}

//no-guess warning
function showWarning() {
    if (x.style.display = "none"){
        x.style.display = "block";
        setTimeout(() => {  x.style.display = "none"; }, 5000);
        
    }
    else{
        x.style.display = "none"
    }
}

//show distance btwn guess and answer
function showDistance() {
    var x = document.getElementById("h2");
    if (x.style.visibility != "hidden"){
        x.style.visibility = "visible";
    }
}




//point calculation
function calc_points(){
    if (distance <= 1){

        return(1300 + 30/distance )
    }  

    if (1 < distance & distance <= 3 ){
        return(1000 + 300/distance )
    }  

    if (3 < distance & distance < 10 ){
        return(800 + 300/distance )
    }  

    if (10 <= distance & distance <= 100 ){
        return(480 + 3000/distance )
    }  

    if (100 < distance & distance <= 500 ){
        return(400 + 3000/distance )
    }  

    if (500 < distance & distance <= 1000 ){
        return(370 + 3000/distance )
    }  

    if (1000 < distance & distance <= 5000 ){
        return(330 + 30000/distance )
    } 

    if (5000 < distance & distance <= 10000 ){
        return(300 + 30000/distance )
    }  

    if (10000 < distance){
        return(250)
    }  
    
}


//next function 
function next(e) {

    //if user didn't guess on these gamemodes, game ends
    if(guessed == false && (gamemode == 'contrarreloj' || gamemode == '1hp' || gamemode == 'radius')){
        end()
    }

    //if radius gamemode, check guess distance and end if failed
    if(gamemode == 'radius' && distance > gamerule_radius){
        end()
    }

    marker_placed = false
    playing = true
    rounds = rounds + 1
    
    if(gamemode != 'contrarreloj' && gamemode != 'radius'){
    if(rounds <= prround){
        //update round counter
    roundhtml.innerHTML = `${rounds}/${prround}`
    }
    else{
        // if all rounds have been played, end match
        end()
    }
    }
    else{
        //if contrarreloj gamemode, no round max, just counter
        roundhtml.innerHTML = `${rounds}`
    }
    Enable_marking = true

    //update continue button
    if(language == 'es'){
        document.getElementById('continue').innerHTML = 'Continuar'
    }
    if(language == 'en'){
        document.getElementById('continue').innerHTML = 'Continue'
    } 

    switchbtn()
    document.getElementById('continue_out').style.visibility = 'hidden'


    //clear all map layers
    marker.clearLayers()
    if(guessed){
    polyline.removeFrom(map)
    marker_coords.length = 0
    }
    map.removeLayer(vidmarker)

    //readjust map's zoom
    map.setView([0, 0], 2.4)
    map_open();

    //erase distance text
    document.getElementById("h2").innerHTML = "";
    showDistance()

    //close map modal
    document.getElementById('modal').close()
    
    //remove current video from list
    active_playlist = active_playlist.splice(vid_index,1);


    //choose new video
    
    var newvid = randomlyChooseVideo()

    //update video
    player.loadVideoById(newvid[0],newvid[3]);

    


    
    
    if(gamemode !='contrarreloj'){
        //readjust round timer
        time = abstime   
    }



    pausado = false
    //start timer
    startTimer()
}


function end(){
    score = parseInt(score)
    localStorage.setItem('points', score)
    if(gamemode != 'radius' && gamemode != 'contrarreloj'){
        localStorage.setItem('rounds',prround)
    }
    else{
        localStorage.setItem('rounds',rounds)
    }
    localStorage.setItem('credits', JSON.stringify(credit_array))
    document.getElementById("continue").onclick = window.location.href = 'resume.html';
}


function startTimer(){
    clearTimeout(interval)
    looptime()
}

function looptime(){
    if(time < 1 && marker_placed){
        final_guess(true)
    }
    if(time >= 1){
       interval = setTimeout(function() {
          updatetime()
        }, 1000);
    }
    if(time < 1 && marker_placed == false){
        final_guess(false)
    }
    
}

function updatetime(){

    if(pausado == false){
        time = time - 1
        timer.innerHTML = `${time}s`
        looptime()
        if(time <= 10 && playing){
            playing = false
            document.getElementById('tic').play()
            console.log('audio play')
        }
    }
    

}

function pause(){
    if(gamemode == 'PAUSE'){
        player.pauseVideo()
        document.getElementById('pausebutton').style.display = 'none'
        document.getElementById('playbutton').style.display = 'block'
    }
}



function play(){
    if(gamemode == 'PAUSE'){
        player.playVideo()
        document.getElementById('playbutton').style.display = 'none'
        document.getElementById('pausebutton').style.display = 'block'
    }
}


//guessing secuence
function final_guess(c) {
    if(c){
        try{
            //if user tried guessing without clicking map show warning
           if (marker_coords[0] == null ||  marker_coords[1] == null){
              
               showWarning()
               return
           }
       }
       catch(err){
          
           showWarning()
           return
    
       }

    }

    playing = false
    document.getElementById('tic').currentTime = 0
    document.getElementById('tic').pause()
    pausado = true

                            
    //create marker on vid coords 
    vidmarker = L.layerGroup();
    var latlng = L.latLng(video_coords[0], video_coords[1]);
    var green_marker = L.marker((latlng), {icon: greenIcon})
        .addTo(vidmarker)
        .bindPopup(`${active_playlist[vid_index][7]}, ${country(active_playlist[vid_index][4])}`);

    green_marker.on('add', function(){
         green_marker.openPopup();
    });


    //if gamemode is radius, draw a circle with desired r
    if(gamemode == 'radius'){
        console.log('added radius')
        L.circle(latlng,{
         color: 'green',
         radius: gamerule_radius*1000   
        }).addTo(vidmarker)
    }

    //add the marker and circle
    map.addLayer(vidmarker);




    //if c == false user didn't guess
    if(c == false){
        console.log('didnt press guess')
        
        guessed = false
        document.getElementById('modal').showModal()
        invsze()
        
        Enable_marking = false
        try{
            //if user tried guessing without clicking map show warning
           if (marker_coords[0] == null ||  marker_coords[1] == null){
                //give 0 points
                score = 0
                if(document.location.pathname == '/es/game.html'){
                    document.getElementById("h2").innerHTML = "El tiempo acabo! ";
                }
                else{
                    document.getElementById("h2").innerHTML = "Time ran out! ";
                }
                

                switchbtn()
               return
           }
       }
       catch(err){
        //give 0 points
        score = 0
        if(document.location.pathname == '/es/game.html'){
            document.getElementById("h2").innerHTML = "El tiempo acabo! ";
        }
        else{
            document.getElementById("h2").innerHTML = "Time ran out! ";
        }
        



        switchbtn()
        return
        }}
    else{
        console.log('pressed guess')


    Enable_marking = false
    guessed = true




    //calculate distance between user's guess and vid coords
    distance = distance_calc([marker_coords[0], marker_coords[1]], video_coords)
    if(distance <= 10){
        document.getElementById('cheers').play()
        document.getElementById('cheers').addEventListener("ended", function(){
            this.currentTime = 0;
            this.pause();
        });
    }
    switchbtn()

    //calculate points
    var point = Number(calc_points())


    //update points on scoreboard
    score = Number(document.getElementById(`points`).innerHTML) + Number(point.toFixed(0))
    



    


    //draw line between the 2 markers
    var latlngs = [];
    latlngs.push(L.latLng(marker_coords[0],marker_coords[1]));
    latlngs.push(L.latLng(video_coords[0],video_coords[1]));
    polyline = L.polyline(latlngs, {color: 'black'})
    try{polyline.addTo(map);}
    catch(err){
        
        showWarning()
        return
    }    

    //zoom into line
    map.fitBounds(polyline.getBounds());


    //display distance from guess to right answer
    if(distance < 1){
        document.getElementById("h2").innerHTML = Number((Number((distance))*1000).toFixed(0)) + " M";
    }
    else{
    document.getElementById("h2").innerHTML = Number((distance).toFixed(2)) + " KM";
    }
    showDistance()
    }

    document.getElementById(`points`).innerHTML = score



    
    
}


map.on('click', function(e){
    if (Enable_marking == true){
        mark(e);
    }
});



function rewindVideo() {
    
    const currentTime = player.getCurrentTime();
    if(currentTime >= 5 + active_video[3]){
        player.seekTo(currentTime - 5, true); 
    }
    else{
        player.seekTo(active_video[3], true);
    }
}

function reduceSpeed() {
   
    const currentPlaybackRate = player.getPlaybackRate();
    player.setPlaybackRate(currentPlaybackRate - 0.25); // You can adjust the speed reduction factor
}

function restartVideo(){
    player.seekTo(active_video[3], true);
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    console.log(name)
    var x = document.getElementById("guess");
    if (name === 'Enter' && bool_map) {
        if (x.style.visibility != "hidden"){
           
            final_guess(true)
        }
        else{
            next()
        }
    }
    if (name == ' ' && gamemode == 'PAUSE'){
      
        if(document.getElementById('pausebutton').style.display == 'none'){
            play()
        }
        else{
            pause()
        }
    }
    if(name == 'MediaPlayPause'){
        player.playVideo()
    }
    if (name === 'm') {
        document.getElementById('modal').showModal()
        invsze()
    }
    if (name === 'ArrowLeft') {
        var currentPlaybackRate = player.getPlaybackRate(); 
        player.setPlaybackRate(currentPlaybackRate - 0.25);
        document.getElementById('speedrange').value = currentPlaybackRate - 0.25;
        document.getElementById('reduceSpeedButton').innerHTML = `x${(document.getElementById('speedrange')).value}`;
    }
    if (name === 'ArrowRight'){
        var currentPlaybackRate = player.getPlaybackRate();
        player.setPlaybackRate(currentPlaybackRate + 0.25);
        document.getElementById('speedrange').value = currentPlaybackRate + 0.25;
        document.getElementById('reduceSpeedButton').innerHTML = `x${(document.getElementById('speedrange')).value}`;
    }

    if (name === 'audio play'){
        player.playVideo()
            
    }


})


window.onclick = function(event) {
    console.log(event.target)
    if (event.target == modal) {
      modal.close()
    }
    if(playing == false && event.target == document.getElementById('close_map')){
        console.log('displaying')
        document.getElementById('continue_out').style.visibility = 'visible'
    }
}


if (window.performance.getEntriesByType) {
    if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
        window.location.href = './index.html';
    }
}


function startgame(){
    player.playVideo()
    console.log(player.getPlayerState())
    startTimer()
    document.getElementById('StartGame').style.display = 'none'
    document.getElementsByClassName('video-foreground')[0].style.display = 'block'
}

function addtocredit(ar){
    credit_array.push({'name':ar[5],'link':ar[6], 'round':rounds})
    console.log(credit_array)
}

function country(index){
    switch (index){
        case 'MX':
            return('Mexico');
        case 'AR':
            return('Argentina');
        case 'ITA':
            return('Italy');        
        case 'FR':
            return('France');
        case 'US':
            return('United States');
        case 'UK':
            return('United Kingdom');
        case 'CRO':
            return('Croatia');
        case 'BR':
            return('Brazil');
        case 'CA':
            return('Canada');
        case 'JAP':
            return('Japan');
        case 'CH':
            return('China');
        case 'POL':
            return('Poland');
        case 'TR':
            return('Turkey');
        case 'UR':
            return('Uruguay');
        case 'TH':
            return('Thailand');
        case 'RU':
            return('Russia');
        case 'PK':
            return('Pakistan');
        case 'SK':
            return('South Korea');
        case 'PT':
            return('Portugal');
        case 'DE':
            return('Germany');            
        case 'SZ':
            return('Switzerland');
        case 'LTV':
            return('Latvia');
        case 'IRE':
            return('Ireland');     
        case 'KH':
            return('Cambodia');
        case 'EG':
            return('Egypt');         
        case 'BE':
            return('Belgium');
        case 'BSN':
            return('Bosnia');
        case 'NW':
            return('Norway');    
        case 'VN':
            return('Vietnam');
        case 'CZ':
            return('Czech Republic');
        case 'SG':
            return('Singapore');
        case 'PAR':
            return('Paraguay');
        case 'ARM':
            return('Armenia');
        case 'IN':
            return('India');
        default:
            return('Unknown')
    }
}


