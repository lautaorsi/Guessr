Enable_marking = true
var colors = ["#CC2A3D", "#9D2ECC", "#CBC52B", "#CB852B", "#3E3E3E", "#2C83CB"]

const colorobject = localStorage.getItem('color');
const numero_color = JSON.parse(colorobject);
document.getElementById("marker_warning").style.color = colors[Number(numero_color)]
const pretime = localStorage.getItem('time')
var time = JSON.parse(pretime)
const prerounds = localStorage.getItem('rounds')
var rounds = JSON.parse(prerounds) 



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



var score, video_coords, Enable_marking, points, marker_coords, map, marker, score_id, vidmarker, polyline, src, lat, lng, active_video, playersmarkers
var color_list = [redIcon, violetIcon, yellowIcon, orangeIcon, blackIcon, blueIcon]



var video_list = [["kXAHDqHfXAQ", 39.467269, -0.374927,'VAL', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["UHdURaQ0fXE", 39.457383, -0.354918,'MAD', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["Kv7JR2JgyfA", 40.420320, -3.714005,'MAD', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["2EffxnmMXg0", 40.416772, -3.708632,'MAD', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["hSZJk2N-ho4",-13.259417, -72.258194,'PER', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["mSdx12ETWFM", -13.420139, -71.850750,'PER', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["sw89HOTBHQI", -12.126667, -77.036333,'PER', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["jstF9EYr4IM", -37.992883, -57.564338,'ARG', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["EIc2vyDRT20", -36.535465, -56.688901,'ARG', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["zMz4bNxIWh8", 43.732685, 7.422464,'MON', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["2G3Mq_D1Po8", 48.858907, 2.293025,'FRA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["6yjZ1WE0tsg", 43.774012, 11.249976,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["jYVJccE8Wa4", 43.322257, 11.330865,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["zWxdKYxfcRQ", 44.499609, 11.343899,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["dbICS9q9hVo", -32.890557, -68.844857,'ARG', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["gpaB5d4C6hA", 45.465305, 9.194007,'ITA', 'CarpoWalks','https://www.youtube.com/@CarpoWalks'], 
["7a2cqy9Qwwg", 45.646856, 13.771754,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["BMDso0Rqx3M", 45.975012, 9.247205,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["9vx9qm2_ghI", 45.463732, 9.190500,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["4xJf5PfuMjg", 44.117593, 15.219858,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["GkhMz52zMG0", 46.004807, 8.948346,'SWZ', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["cSWv6YJYBHM", 43.508254, 16.440185,'CRO', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["RInBAatA11Q", 52.247803, 21.013650,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["ZL4LNXe_F2Y", 42.642014, 18.112509,'POL', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KQ5TW0DCXb0", 45.659127, 10.047541,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["KkKmGQpEr9s", 43.818297, 7.777631,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks'], 
["m4D8LqsvXu0", 44.303984, 9.207712,'ITA', 'AtmosWalks','https://www.youtube.com/@AtmosWalks']
]



var x = document.getElementById("warning-container")
var myvid = document.getElementById('myvid');
var bool_map = false





// initalize map
map = L.map('map').setView([0, 0], 2); 
console.log('map ready')
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
minZoom: 2,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
map.setMaxBounds([[150,200],[-150,-200]]);

//add marker to map
marker = L.layerGroup();
map.addLayer(marker)

function invsze(){
  map.invalidateSize();
}







function choose_color(i){
    return(color_list[i])
}


function getRandomIndex(max) {
    /* The function will return a random number between 0 and max - 1 */
    return Math.floor(Math.random() * Math.floor(max));
}


//choose random vid based on video list index
function randomlyChooseVideo() {
    
    

    // update the video source and play
    vid_index =  getRandomIndex(video_list.length);
    src = (video_list[vid_index])[0];
    console.log(src)
    
    active_video = video_list[vid_index]
    // update the video source and play
    

    video_coords = [active_video[1],active_video[2]]
    return(src)
   
}







//calculate distance
function distance_calc(user_guess, video_coords){
    const R = 6371e3; // metres
    const φ1 = user_guess[0] * Math.PI/180; // φ, λ in radians

    console.log(user_guess[0])
    console.log(user_guess[1])
    console.log(video_coords[0])
    console.log(video_coords[1])
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
           console.log("false -> true")
           bool_map = true
        }
        else {
            console.log("true -> false")
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
    console.log(`guess style vistibility is now ${x.style.visibility}`)
    console.log(`continue style vistibility is now ${y.style.visibility}`)
}

function showWarning() {
    if (x.style.display = "none"){
        x.style.display = "block";
        setTimeout(() => {  x.style.display = "none"; }, 5000);
        
    }
    else{
        x.style.display = "none"
    }
}

function showDistance() {
    var x = document.getElementById("h2");
    if (x.style.visibility != "hidden"){
        x.style.visibility = "visible";
    }
}





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

    if (10 <= distance & distance <= 40 ){
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



function next() {
    Enable_marking = true
    console.log('continue')
    document.getElementById('continue').innerHTML = 'Continue'
    switchbtn()
    marker.clearLayers()
    polyline.removeFrom(map)
    map.removeLayer(vidmarker)
    map.setView([0, 0], 2)
    map_open();
    document.getElementById("h2").innerHTML = "";
    console.log('next video')
    showDistance()
    document.getElementById('modal').close()
    marker_coords.length = 0
    var newvid = randomlyChooseVideo()
    player.loadVideoById(newvid, 100);
    var a = document.getElementById('credits');
    console.log(vid_index)
    a.href = video_list[vid_index][5]
    a.innerHTML = `Credits: ${video_list[vid_index][4]}`
    console.log('received next video')

}







//guessing secuence
function final_guess() {
    console.log("final_guess pressed")
    try{
        if (marker_coords[0] == null ||  marker_coords[1] == null){
            console.log("Error caught on if statement")
            showWarning()
            return
        }
    }
    catch(err){
        console.log("Error caught")
        showWarning()
        return

    }
    
    


    Enable_marking = false




    //calculate distance between user's guess and vid coords
    distance = distance_calc([marker_coords[0], marker_coords[1]], video_coords)
    switchbtn()

    console.log(distance)
    if(distance > 1000){
        console.log('Distance')
        window.location.href = ('index.html')
    }

    //calculate points
    score = calc_points().toFixed(0)

    document.getElementById(`${nombre_usuario}.points`).innerHTML = Number(document.getElementById(`${nombre_usuario}.points`).innerHTML) + Number(score)




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
        console.log("Error caught")
        showWarning()
        return
    }    

    //zoom into line
    map.fitBounds(polyline.getBounds());


    //display distance from guess to right answer
    document.getElementById("h2").innerHTML = Number((distance).toFixed(2)) + " KM";
    showDistance()


    

    
    
    
}


map.on('click', function(e){
    if (Enable_marking == true){
        mark(e)
        console.log("Guess coords: " + lat + " , " + lng);
        console.log("Marker coords: " + video_coords)
    }
});



function rewindVideo() {
    console.log("video rewinded");
    const currentTime = player.getCurrentTime();
    if(currentTime > 70){
        player.seekTo(currentTime - 10, true); 
    }
    else{
        player.seekTo(60, true);
    }
}

function reduceSpeed() {
    console.log("speed reduced");
    const currentPlaybackRate = player.getPlaybackRate();
    player.setPlaybackRate(currentPlaybackRate - 0.25); // You can adjust the speed reduction factor
}

function restartVideo(){
    console.log("video restarted");
    player.seekTo(60, true);
}

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var x = document.getElementById("guess");
    if (name === 'Enter' && bool_map) {
        if (x.style.visibility != "hidden"){
            console.log("final_guess")
            final_guess()
        }
        else{
            next()
        }
    }
})


function onYouTubeIframeAPIReady() {
    Enable_marking = true
    active_video = randomlyChooseVideo()
    player = new YT.Player("myvid", {
        videoId: active_video,
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            rel : 0,
            fs : 0,
            modestbranding: 1,
            showinfo: 0,
            start: 100,
            end: 300,
            loop: 1,
            origin: "http://127.0.0.1:3000/main.html"
        },
        events: {
            onReady: onPlayerReady
        },

    });
    console.log('Player ready')

}




function onPlayerReady(event) {
    console.log("buttons ready");
    // Define custom control actions
    document.getElementById("rewindButton").addEventListener("click", rewindVideo);
    document.getElementById("reduceSpeedButton").addEventListener("click", reduceSpeed);
    player.setPlaybackQuality('hd720')
    var a = document.getElementById('credits');
    console.log(vid_index)
    console.log(video_list[vid_index])
    a.href = video_list[vid_index][5]
    a.innerHTML = `Credits: ${video_list[vid_index][4]}`


}


