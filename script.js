let musicas = [
    {titulo: 'Era uma vez', artista: 'Kell Smith', src: 'music/3 - Kell Smith - Era uma Vez.mp3', img:'img/marek-piwnicki-Om3TCpJZzk8-unsplash.jpg'},
    {titulo: 'Difícil', artista: 'NGA', src: 'music/06 Difícil.mp3', img:'img/IMG-20230102-WA0009.jpg'},
    {titulo: 'Estranho', artista: 'Marilia Mendonça', src: 'music/Marília Mendonça Estranho (Letra)(MP3_320K).mp3', img:'img/IMG-20230104-WA0001.jpg'},
    {titulo: 'Slander', artista: 'Love is gone', src: 'music/SLANDER - Love Is Gone ft. Dylan Matthew (Acoustic) - Lyrics(MP3_320K).mp3', img:'img/IMG-20230105-WA0005.jpg'}
];
let indexMusica = 0;
let musica = document.querySelector('audio');
 let duracaoDaMusica = document.querySelector('.fim');
 let imagens = document.querySelector('img');
 let nomeMusica = document.querySelector('.descricao h2');
 let nomeArtista = document.querySelector('.descricao i');

duracaoDaMusica.textContent = segundosParaMinitos(Math.floor(musica.duration));
//Eventos///
document.querySelector('.boao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.back').addEventListener('click', () => {
   indexMusica--;
   if(indexMusica < 0){
    indexMusica = 3;
   }
    renderizarMusica(indexMusica);
    musica.play();
});
document.querySelector('.next').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 3){
        indexMusica = 0;
       }
    renderizarMusica(indexMusica);
    musica.play();
});
//Funcoes
function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.boao-play').style.display = 'none';
}


function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.boao-play').style.display = 'block'; 
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinitos(Math.floor(musica.currentTime));
}
function segundosParaMinitos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if( campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
 return campoMinutos+ ':'+campoSegundos;
}
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagens.src = musicas[index].img;
        duracaoDaMusica.textContent = segundosParaMinitos(Math.floor(musica.duration));

    });
}