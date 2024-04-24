function getRandomIndex(max) {
    /* The function will return a random number between 0 and max - 1 */
    return Math.floor(Math.random() * Math.floor(max));
}
const gamemode = JSON.parse(localStorage.getItem('gamemode'))['hello']
const language = document.documentElement.lang
const objcredits = JSON.parse(localStorage.getItem('credits'))
const objrounds = localStorage.getItem('rounds')
const rounds = JSON.stringify(objrounds)
const objscore = localStorage.getItem('points')
var score = JSON.stringify(objscore)
const nice_gifs = ['../static/gifs/nice1.mp4','../static/gifs/nice2.mp4','../static/gifs/nice3.mp4','../static/gifs/nice4.mp4','../static/gifs/nice5.mp4','../static/gifs/nice6.mp4']
const fail_gifs = ['../static/gifs/fail2.mp4','../static/gifs/fail3.mp4','../static/gifs/fail5.mp4','../static/gifs/fail6.mp4','../static/gifs/fail8.mp4']
const wow_gifs = ['../static/gifs/wow1.mp4','../static/gifs/wow2.mp4','../static/gifs/wow3.mp4','../static/gifs/wow4.mp4','../static/gifs/wow5.mp4','../static/gifs/wow6.mp4','../static/gifs/wow7.mp4']

const text = {'es': {'wow': 'Bien jugado!','nicetry': 'Buen intento!','betterluck':'Mejor suerte la proxima!','points':`Obtuviste ${objscore} Puntos`,'rounds':`Sobreviviste ${objrounds} Rondas`}, 'en':{'wow':'Wow!','nicetry':'Well played!','betterluck':'Better luck next time!','points':`You got ${objscore} Points`,'rounds':`You survived ${objrounds} Rounds`}}

console.log(document.getElementById('congrats'))

if (objscore/rounds >= 1100){
    document.getElementById('congrats').innerHTML= (text[language])['wow']
    document.getElementById('gif').src = wow_gifs[rando(wow_gifs.length - 1)]
    
}
if(objscore/rounds >= 800){
    document.getElementById('congrats').innerHTML= (text[language])['nicetry']
    document.getElementById('gif').src = nice_gifs[rando(nice_gifs.length - 1)]
}
else{
    document.getElementById('congrats').innerHTML= (text[language])['betterluck']
    document.getElementById('gif').src = fail_gifs[rando(fail_gifs.length - 1)]
}

if(gamemode != 'radius' && gamemode != 'contrarreloj'){
    document.getElementById('points').innerHTML = (text[language])['points']
}
else{
    document.getElementById('points').innerHTML = (text[language])['rounds']
}



function myFunction(){
    window.location.href = 'index.html'
}



function myFunction1(){
    window.location.href = 'game.html'
}



objcredits.forEach(function(element) {
    var x = document.createElement('div');
    x.classList.add('credit');
    x.innerHTML = `${element['round']}  <a href="${element['link']}" class ='credit_name' target='_blank'>${element['name']}</a>`;
    document.getElementById("credit_cont").appendChild(x);
})

