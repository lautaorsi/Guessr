var modal_image = document.getElementById('modal_pfp')
var modal_title = document.getElementById('title_href')
var modal_description = document.getElementById('description_content')
var modal = document.getElementsByClassName('modal_container')[0]
var img_href = document.getElementById('img_href')


function card(name){
  modal.style.display = 'block'
  modal_image.src = creators[name].image
  modal_description.innerHTML = creators[name].description
  modal_title.innerHTML = creators[name].title
  img_href.href = creators[name].href
  modal_title.href = creators[name].href
}


window.onclick = function(event) {
if (event.target == document.getElementById('modal-background') || event.target == document.getElementById('close_modal')) {
    document.getElementById('modal-background').style.display = "none";
}

if (event.target.classList[0] == 'image-style' || event.target.classList[0] == 'card-content'){
  card(event.target.closest('.card-style').id)
}
if (event.target.classList[0] == 'card-style'){
  card(event.target.id)
}
}


const creators = {
example: {image: '../static/content-creators/example.png',href:'',title:'YOUR CHANNEL HERE', description:"Any description here <br> <br> Any donation/social media links"},
poptravel: {image:'../static/content-creators/poptravel.jpg', href:'https://www.youtube.com/@poptravelorg',  title:'POPTRAVEL', description:'<a href="https://www.youtube.com/@poptravelorg" class="imlink" id="toptext">youtube.com/@poptravelorg</a>'},
ppe: {image:'../static/content-creators/ppe.jpg', href:'https://www.youtube.com/@PeoplePlacesEvents',  title:'People Places & Events', description:'Welcome to People Places Events. <br> This channel brings you the best UltraHD, informative and insightful videos of people, places and events from around the world.You can support my channel by sharing it with your friends and family on social media platforms. <br>Please dont forget to subscribe set notification bell 🔔 Ringing icon to see the newest published uploads.<br> Keep smiling everyone 😊 Thank you.'},
adv: {image:'../static/content-creators/adv.jpg', href:'https://www.youtube.com/@MiddleAgeAdventureWalks',  title:'Paseos de Ventura en la Edad Media', description:'¡Somos de mediana edad y nos gusta hacer caminatas de aventura! <br> Nuestro enfoque principal está en la gente fascinante y amigable, los bulliciosos y coloridos mercados, las calles auténticas y una variedad de vehículos, la interesante flora y fauna local, las obras de arte y la arquitectura dinámicas y el aspecto cinéma vérité de la vida real tal como la vemos pasar...'},
s_travel: {image:'../static/content-creators/s_travel.jpg', href:'https://www.youtube.com/@planetsolotraveler',  title:'Solo Traveler', description:'World Travel'},
w_club: {image:'../static/content-creators/w_club.jpg', href:'https://www.youtube.com/@watchersclub',  title:'Watchers Club', description:"You can register as a member to watch high-definition videos around the world.<br>Real-time live for members only, special video that only members can watch.<br>Members of Watchers level or higher provide travel guides through a separate live chat.<br>Direct donation for the Watchers Club's round-the-world trip<br>Sponsoring the channel will help create more interesting videos.<br><br>▶️ Donate Paypal <a href='https://paypal.me/watchersclub' class='imlink'>https://paypal.me/watchersclub</a><br><br>Enjoy the walking tour video of a city in a more enjoyable and happy world.<br>▶️ <a class='imlink' href='https://www.watchersclub.com'>https://www.watchersclub.com</a><br><br>To download the sound source used in the Watchers Club video, refer to the link below.<br>▶️ Epidemicsound <a href='https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbms0WEFlaHdsQ18zMkRTNm1obnRqQzRjUHpUQXxBQ3Jtc0tsbUNEUzhzWEpTVV9hZm1zMWtMNFNJRU4tdlVnM2hOZndwYkdpb1VpcVhuMTN5eVU1OE82S2ZOYzhDcmRUeWpNT2J0U3hUZ3d5Vmoya1BDa28xODdIMU90a0dUWXMwRHFwcEtBTlZYeU1BcTdnN0RNbw&q=https%3A%2F%2Fwww.epidemicsound.com%2Freferral%2Fx54fog&v=m3x5pZcXrOQ' class='imlink'> https://www.epidemicsound.com/referra...</a> "},
Lzy_expl: {image:'../static/content-creators/lzy.jpg', href:'https://www.youtube.com/@lazy_explorer',  title:'Lazy Explorer', description:'Join me as I explore some of the great cities and interesting places from around the world. I upload a new video EVERY WEDNESDAY, so be sure to subscribe and click the bell icon to get notified. <br>Instagram: <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbkE0M09MOVM1b3AxMmw3VU5VQXl4ZDN1MHFlZ3xBQ3Jtc0tuZm1IeGVrLTVXaGlRRTQwbUlxTGN0VHh5dEo1SE4zcHVXN1FJX01vdnZoUXVidjU3UEdoNm56bm9fU3c0eEJCeTJCT3ljOFRZeE9DWmE4ZUhfY1BFN3gxTTJlY2pWdFk5V1oxdEZYN2FHdThCWG9saw&q=https%3A%2F%2Fwww.instagram.com%2Flazy_explorer_official%2F%3Figshid%3DZDdkNTZiNTM%253D" class="imlink">lazy_explorer_official</a><br>Faxebook:  <a href="facebook.com/profile.php?id=100089943294516" class="imlink">Lazy Explorer</a><br>'},
Str_amb: {image:'../static/content-creators/str_amb.jpg', href:'https://www.youtube.com/@streetsambience6054',  title:'Streets Of Ambience', description:'Hello. Streets Of Ambience is about walking through different cities, parks, beaches, forests. Relaxing in the nature. Binaural Nature Sounds for Sleep and Study | 4k ASMR. Ambience sounds, soundscapes. Thanks for visiting my channel. Hope you enjoyed it.'},
Walk_pt: {image:'../static/content-creators/walk_pt.jpg', href:'https://www.youtube.com/@Walking_Portugal',  title:'Walking_Portugal', description:'Welcome to our channel where we film walking tours of Portugal for you. We love Portugal and want to share its beauty with you. We live in the Algarve, so our channel started with walking around the beaches of the Algarve 4K. <br> Enjoy watching and dont forget to subscribe. <br> Secondary channel:  <a href="youtube.com/channel/UCeg9gpnGCRnK7p6_xoTqbXQ" class="imlink">Ocean Relax PT</a><br>'},
Z1: {image:'../static/content-creators/Z1.jpg', href:'https://www.youtube.com/@zeroone_01',  title:'Zero One', description:'I hope that the video I created will give the viewers the feeling of traveling while walking or driving, just like I did. I used field audio to enhance the immersive experience. I hope you enjoy the tour.'},
WTW: {image:'../static/content-creators/WTW.jpg', href:'https://www.youtube.com/@walkthisway001',  title:'Walk This Way', description:'Lets walk and keep it simple. No narration or music. Allow your imagination to teleport you to another place. I will try my best to show you sights from my point of view. '},
TakaSoyama: {image:'../static/content-creators/taka-soyama.jpeg', href:'https://www.pexels.com/@taka-soyama-4618245',  title:'Taka Soyama', description:'Website: <a href="https://www.dahawaii.com/" class="imlink">Dahawaii</a><br>Pexels: <a href="https://www.pexels.com/@taka-soyama-4618245/" class="imlink">Taka-Soyama</a><br>Instagram: <a href="https://www.instagram.com/dahawaii" class="imlink">Dahawaii</a><br>Twitter:  <a href="https://twitter.com/dahawaii" class="imlink">Dahawaii</a><br>Paypal:  <a href="https://www.paypal.com/donate?token=gIhb5oCJdSHzcnV4ZG99RtHD8vpSvGcTJCKntAKXtxDXYzDSCBEY3twDkz5tOWuEMSNTA6LPDm70aL6l&locale.x=US" class="imlink">Taka Soyama-Pexels</a><br>'},
ViajandoJuntosAmerica: {image:'../static/content-creators/VJA.jpg', href:'https://www.youtube.com/@ViajandoJuntosAmerica',  title:'Viajando Juntos America', description:'viajandojuntosamerica@gmail.com <br>Instagram: <a href="https://www.instagram.com/viajandojuntosamerica/" class="imlink"> @viajandojuntosamerica</a><br>TikTok: <a href="https://www.tiktok.com/@viajandojuntosamerica" class="imlink"> @viajandojuntosamerica</a>'},
WindowToMoscow: {image:'../static/content-creators/WTM.jpg', href:'https://www.youtube.com/@WindowtoMoscow',  title:'Window To Moscow', description:'<a href="donationalerts.com/r/windowtomoscow" class="imlink" id="toptext">Donations</a> <br> <a href="rutube.ru/channel/30477044" id="toptext" class="imlink">RUTUBE</a><br><a href="instagram.com/window_to_moscow" class="imlink" id="toptext">Instagram</a>'},
Tenerife: {image:'../static/content-creators/tenerife.jpg', href:'https://www.youtube.com/@WalkingToursTf',  title:'Walking Tours Tenerife', description:'Paypal: <a href="https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbmE5UzAxeTF5dk1KbXNnQzNMRTFZdGstZ09rUXxBQ3Jtc0ttRnpXQ3p0OVA3ZGE2bk5oeE1ZYUx5LVNtWmpyMl9LVmVoMW5sRHFHZzFEaHJRRnFMOTIzQlQ1azN4VlFVWnU5RVowSjNRQ2FINHJUUXVPLWZKMEJWOENIQ0JZZl9xSk5ia2ZPeVB1LWpYRFhUVWFaaw&q=https%3A%2F%2Fpaypal.me%2FWalkingToursTf1%3Fcountry.x%3DES%26locale.x%3Des_ES" class="imlink">WalkingToursTf1</a><br>Guia Tenerife: <a href="walkingtourstf.gumroad.com/l/zJhOP" class="imlink">Walkingtourstf</a><br>BuyMeACoffee: <a href="buymeacoffee.com/walkingtourstf" class="imlink">Walkingtourstf</a><br>'},
VoyagerWalks: {image:'../static/content-creators/voyager.jpg', href:'https://www.youtube.com/@TheVoyagerWalks',  title:'The Voyager Walks', description:'Dedicated to walking around different places of the world; ASMR & Binaural sounds to sleep, study, or relax to.'},
carpos: {image:'../static/content-creators/carpos.png', href:'https://www.youtube.com/@CarpoWalks',  title:'Carpos Walks', description:'Paypal: <a href="paypal.com/paypalme/carpowalks?locale.x=es_XC" class="imlink">CarpoWalks</a><br>Facebook: <a href="facebook.com/carpowalks" class="imlink">CarpoWalks</a><br>'},
TravelWithAndrew: {image:'../static/content-creators/Andrew.jpg', href:'https://www.youtube.com/@TravelingwithAndrew',  title:'Travel With Andrew', description:'Take a journey with me to beautiful places.<br>Please subscribe, like, comment and share!'},
DDG: {image:'../static/content-creators/DDG.jpg', href:'https://www.youtube.com/@DayDreamGamingTV',  title:'DayDream Gaming', description:'On this channel you will find:Cyberpunk 2077, Red Dead Redemption 2, GTA V, Assassins Creed series, Mafia series, Far Cry series, Watch Dogs series and more.<br>If youd like to support my channel, please consider subscribing!<br>Ko-Fi: <a href="ko-fi.com/daydreamgaming" class="imlink">daydreamgaming</a>'},
AtmosWalks: {image:'../static/content-creators/atmos.jpg', href:'https://www.youtube.com/@AtmosWalks',  title:'Atmos Walks' , description: "Welcome to Atmos Walks, your passport to the world's most captivating places. Dive into our immersive 4K Dolby Vision walking tours, where we explore everything from vibrant cityscapes to serene natural settings. Whether you're planning your next trip, seeking inspiration, or just want a relaxing escape, we're here to transport you to the heart of your chosen destination."},
ltc: {image:'../static/content-creators/LTC.jpg', href:'https://www.youtube.com/@PeteTropicalNomad', title:'Tropical Nomad', description:"Hi im Pete! im solo traveler and i like to share the experience of exploring this amazing planet -- Calling all armchair explorers!  Do you crave the thrill of discovery without leaving your living room? Join me on virtual walking tours through the world's most electrifying cities villages and wild places. Immerse yourself in new cultures, meet fascinating people, and experience sights, sounds, and tastes – all in 4K Ultra HD. These aren't your typical travel vlogs. Forget faces and intrusive commentary. We offers pure, uncut journeys through bustling city streets, filmed entirely in first-person perspective for a truly immersive experience. Turn on closed captions to unlock hidden gems and local secrets along the way."}
}




