Enable_marking = true
var colors = ["#CC2A3D", "#9D2ECC", "#CBC52B", "#CB852B", "#3E3E3E", "#2C83CB"]
const colorobject = localStorage.getItem('color');
const numero_color = JSON.parse(colorobject);
document.getElementById("marker_warning").style.color = colors[Number(numero_color)]
const gamemode = JSON.parse(localStorage.getItem('gamemode'))['hello']
let abstime
var rounds = 0 
var roundhtml = document.getElementById('round')
var timer = document.getElementById("timer")
const pretime = localStorage.getItem('time')
time = JSON.parse(pretime)
abstime =  JSON.parse(pretime)
const premute = localStorage.getItem('mute')
var mute = JSON.parse(premute)
if (gamemode != 'contrarreloj'){
    const prerounds = localStorage.getItem('rounds')
    var prround = JSON.parse(prerounds) 
    roundhtml.innerHTML = `0/${prround}`
}
else{
    roundhtml.innerHTML = `0`
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



var score, video_coords, Enable_marking, points, marker_coords, map, marker, score_id, vidmarker, polyline, src, lat, lng, active_video, playersmarkers, time, inter, pause, interval, player
var color_list = [redIcon, violetIcon, yellowIcon, orangeIcon, blackIcon, blueIcon]
var guessed = true
var pausado = false
var videos_played = []



var urban_list = [['4keUlXV_z5w', -568.3435959177785, -1390.7216472103837, 20, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -554.6542089811346, -1328.8768865409415, 70, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -394.50011893608536, -1119.1645529151644, 305, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -153.6780094867725, -719.572882101767, 909, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -230.03120507293698, -666.7917939802127, 1200, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -226.96234107948013, -528.0192415200981, 1440, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -292.58050095044484, -316.92327909272046, 1665, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -468.70733446496473, -162.6429837788674, 1891, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -582.1124039904098, -89.06078843640066, 2225, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -746.6862998149187, -24.24984274886327, 2431, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -868.7050729370324, -122.31711913396488, 2662, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -976.9550379865161, -13.669760165230315, 2843, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['4keUlXV_z5w', -1301.634640865187, 48.13265456935852, 3208, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
]




var rural_list = [['fVoMdt5MZKg', 4954.52773506048,1673.2022200772203, 0, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',3754.8508708416716,1943.1708494208497,1675, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',3704.6966190852772, 32.949174951501,7860, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',2559.6723206516867, -1241.2936757941654,9796, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',1152.7158116135877, -3067.7949750856214,11745, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',2305.0334220833015, -1760.3386319718345,10500, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',1079.5259092872393, -3263.8359728834753,12249, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',184.70609745664692, -3013.5055170253504,13040, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
['fVoMdt5MZKg',971.4073999111112, -3260.898346751677,14409, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
]

var classic_list = [
["fVoMdt5MZKg", 4954.52773506048,1673.2022200772203, 0, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",3754.8508708416716,1943.1708494208497,1675, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",3704.6966190852772, 32.949174951501,7860, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",2559.6723206516867, -1241.2936757941654,9796, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",1152.7158116135877, -3067.7949750856214,11745, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",2305.0334220833015, -1760.3386319718345,10500, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",1079.5259092872393, -3263.8359728834753,12249, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",184.70609745664692, -3013.5055170253504,13040, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["fVoMdt5MZKg",971.4073999111112, -3260.898346751677,14409, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -568.3435959177785, -1390.7216472103837, 20, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -554.6542089811346, -1328.8768865409415, 70, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -394.50011893608536, -1119.1645529151644, 305, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -153.6780094867725, -719.572882101767, 909, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -230.03120507293698, -666.7917939802127, 1200, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -226.96234107948013, -528.0192415200981, 1440, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -292.58050095044484, -316.92327909272046, 1665, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -468.70733446496473, -162.6429837788674, 1891, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -582.1124039904098, -89.06078843640066, 2225, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -746.6862998149187, -24.24984274886327, 2431, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -868.7050729370324, -122.31711913396488, 2662, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -976.9550379865161, -13.669760165230315, 2843, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
["4keUlXV_z5w", -1301.634640865187, 48.13265456935852, 3208, 'GTA', 'DayDream Gaming', 'https://www.youtube.com/@DayDreamGamingTV'],
]








const list = {
    'URBAN': urban_list,
    'RURAL': rural_list,
    'PAUSE': classic_list,
    'CLASICO': classic_list,
    'contrarreloj': classic_list,
    'radius': classic_list,
    'INVERTIDO': classic_list,

}



var x = document.getElementById("warning-container")
var myvid = document.getElementById('myvid');
var bool_map = false
var backvideo 
// var creditos = []







const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    scale: function(zoom) {

        return Math.pow(2, zoom);
    },
    zoom: function(sc) {

        return Math.log(sc) / 0.6931471805599453;
    },

	transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
    infinite: true
});

var SateliteStyle = L.tileLayer('../mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'SateliteStyle map',})

var map = L.map('map', {
    crs: CUSTOM_CRS,
    minZoom: 2,
    maxZoom: 5.49,
    Zoom: 5,
    maxNativeZoom: 5,
    preferCanvas: true,
    layers: [SateliteStyle],
    center: [0, 0],
    zoom: 3,
});






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
            onStateChange: onPlayerStateChange
        },

    });

   
    

}


document.getElementById('speedrange').oninput = function(){
    player.setPlaybackRate(parseFloat((document.getElementById('speedrange')).value))
    document.getElementById('reduceSpeedButton').innerHTML = `x${(document.getElementById('speedrange')).value}`
};

document.getElementById('volumerange').oninput = function(){
    player.setVolume(parseFloat((document.getElementById('volumerange')).value))
    document.getElementById('reduceSpeedButton').innerHTML = `x${(document.getElementById('volumerange')).value}`
};


function onPlayerReady(event) {
    console.log('player ready')
    if(gamemode == 'INVERTIDO'){
        document.getElementById('myvid').style.transform = 'rotate(180deg)'
        document.getElementById('myvid').style.top= '-80px';
        document.getElementById('myvid').style.left= '00%';
    }
    // Define custom control actions
    document.getElementById("rewindButton").addEventListener("click", rewindVideo);
    document.getElementById("reduceSpeedButton").addEventListener("click", reduceSpeed);
    player.setPlaybackQuality('highres')
    if(mute){
        player.unMute()
        player.setVolume(0)
        document.getElementById('volumerange').value = 0
    }
    else{
        player.unMute()
        player.setVolume(30)
    }
    

    var a = document.getElementById('credits');

    a.href = active_playlist[vid_index][6]
    a.innerHTML = `${active_playlist[vid_index][5]}`
    startTimer()
}

function onPlayerStateChange(event){
    console.log(player.getCurrentTime())
}




//player color selection
function choose_color(i){
    return(color_list[i])
}


function getRandomIndex(max) {
    /* The function will return a random number between 0 and max - 1 */
    // return Math.floor(Math.random() * Math.floor(max));
    return rando(max)
}


function randomlyChooseVideo() {
    // get new video
    vid_index =  getRandomIndex((list[gamemode]).length - 1);
    while(videos_played.includes(vid_index)){
        randomlyChooseVideo()
    }
    videos_played.push(vid_index)
    src = ((list[gamemode])[vid_index]);
    active_video = (list[gamemode])[vid_index]
    active_playlist = list[gamemode]

    // update the video's coordenates
    video_coords = [active_video[1],active_video[2]]

    //update credits
    var a = document.getElementById('credits');
    a.href = active_playlist[vid_index][6]
    a.innerHTML = `${active_playlist[vid_index][5]}`


    //return video array
    return(src)
   
}



function calc_distance(pos1, pos2){
    var x_difference = pos2[1] - pos1[1];
    var y_difference = pos2[0] - pos1[0];
    return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
}







//marking function
function mark(e){
    marker.clearLayers();
    var coord = e.latlng;
    lat = coord.lat;
    lng = coord.lng;
    L.marker((e.latlng), {icon: choose_color(Number(numero_color))}).addTo(marker);
    marker_coords = [coord.lat, coord.lng]
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
    
    if(gamemode != 'contrarreloj'){
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
    document.getElementById('continue').innerHTML = 'Continue'
    switchbtn()

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

    console.log(newvid)

    //update video
    player.loadVideoById(newvid[0],newvid[3]);
    console.log(player.getCurrentTime())
    


    
    
    if(gamemode !='contrarreloj'){
        //readjust round timer
        time = abstime   
    }

    if(gamemode == 'radius'){

    }

    pausado = false
    //start timer
    startTimer()
}




function end(){
    score = parseInt(score)
    localStorage.setItem('points', score)
    window.location.href = 'resume.html'
    
}


function startTimer(){
   
    clearTimeout(interval)
    looptime()


}

function looptime(){
    if(time < 1){
        final_guess(false)
    }
    else{
       interval = setTimeout(function() {
          updatetime()
        }, 1200);
       
    }
    
}

function updatetime(){

    if(pausado == false){
    time = time - 1
    timer.innerHTML = `${time}s`
    looptime()
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
    pausado = true
    //if c == false user made no guess, otherwise user guessed
    
    //if user didn't guess on those gamemodes, game ends
    if(c == false && (gamemode == 'contrarreloj' || gamemode == '1hp' || gamemode == 'radius')){
        
        end()
    }

    //if user didn't guess on regular gamemodes
    if(c == false){
        
        guessed = false
        document.getElementById('modal').showModal()
        invsze()
        
        Enable_marking = false
        
        //give 0 points
        score = 0
        document.getElementById(`points`).innerHTML = Number(document.getElementById('points').innerHTML) + Number(score)
            
        //update video marker coords
        vidmarker = L.layerGroup();

        //add marker on vid coords 
        var latlng = L.latLng(video_coords[0], video_coords[1]);
        L.marker((latlng), {icon: greenIcon}).addTo(vidmarker);
        map.addLayer(vidmarker);

        //front end stuff
        document.getElementById("h2").innerHTML = "El tiempo acabo!";
        showDistance()
        switchbtn()
    }
    else{
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

    Enable_marking = false




    //calculate distance between user's guess and vid coords
    distance = calc_distance([marker_coords[0], marker_coords[1]], video_coords)

    switchbtn()

    //calculate points
    var point = Number(calc_points())


    //update points on scoreboard
    score = Number(document.getElementById(`points`).innerHTML) + Number(point.toFixed(0))
    
    //if radius gamemode, check guess distance and end if failed
    if(gamemode == 'radius' && distance > gamerule_radius*1000){
        end()
        
    }
    else{
    document.getElementById(`points`).innerHTML =  Number(score)
    }



    vidmarker = L.layerGroup();

    //add marker on vid coords 
    var latlng = L.latLng(video_coords[0], video_coords[1]);
    L.marker((latlng), {icon: greenIcon}).addTo(vidmarker);

    map.addLayer(vidmarker);

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
    if(distance > 1000){
        document.getElementById("h2").innerHTML = Number((Number((distance))/1000).toFixed(2)) + " KM";
    }
    else{
    document.getElementById("h2").innerHTML = Number((distance).toFixed(2)) + " M";
    }
    showDistance()
    }


    

    
    
    
}


map.on('click', function(e){
    mark(e)
    if (Enable_marking == true){
        mark(e)
       
  
    }
});



function rewindVideo() {
    const currentTime = player.getCurrentTime();
    if(currentTime >= active_video[3] + 10 ){
        player.seekTo(currentTime - 10, true); 
    }
    else{
        player.seekTo(src[3], true);
    }
}

function reduceSpeed() {
    const currentPlaybackRate = player.getPlaybackRate();
    player.setPlaybackRate(currentPlaybackRate - 0.25); // You can adjust the speed reduction factor
}

function restartVideo(){
    player.seekTo(src[3], true);
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var x = document.getElementById("guess");
    if (name === 'Enter' && bool_map) {
        if (x.style.visibility != "hidden"){
           
            final_guess()
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
})


