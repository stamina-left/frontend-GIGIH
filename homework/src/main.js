const form = document.getElementById('form');
form.addEventListener('submit', showAlert);

const trackImage = document.getElementById('track-image');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const trackAlbum = document.getElementById('track-album');

function showAlert() {
  alert('Hello World');
}

function getTrackDetails() {
  fetch('https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json')
    .then((res) => res.json())
    .then((data) => {
      trackImage.src = data.album.images[0].url;
      trackTitle.innerHTML = data.name;
      trackArtist.innerHTML = data.artists[0].name;
      trackAlbum.innerHTML = data.album.name;
    });
}

getTrackDetails();
