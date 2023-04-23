const file = document.getElementById("file");
const video = document.getElementById("video");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const volumeUpButton = document.getElementById("volume-up-button");
const volumeDownButton = document.getElementById("volume-down-button");
const loadingMessage = document.getElementById('loading');

let mediaSource;
let sourceBuffer;


function handleFile(e) {
    const fileInput = e.target.files[0];
    const blobURL = URL.createObjectURL(fileInput);
    video.src = blobURL;
    loadingMessage.style.display = 'none';
  }
  
// Función para mostrar el mensaje de carga
function showLoadingMessage() {
    loadingMessage.style.display = 'block';
  }
  
// Función para ocultar el mensaje de carga
function hideLoadingMessage() {
    loadingMessage.style.display = 'none';
}
  
// Función para manejar los errores de carga de archivos
 function handleFileError(error) {
    alert(`Error al cargar el archivo: ${error.message}`);
}
  
// Función para manejar los errores de la API Media Source
function handleMediaSourceError(error) {
    alert(`Error en la API Media Source: ${error.message}`);
}

// Función para cargar y reproducir el archivo de video
function loadVideoFile(file) {
    showLoadingMessage();
    const fileURL = URL.createObjectURL(file);
    video.src = fileURL;
    video.addEventListener('loadedmetadata', () => {
        
        mediaSource = new MediaSource();
    
        if (MediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')) {
            sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
        } else {
            alert('El navegador no admite el tipo de archivo de video.');
        }
    
        mediaSource.addEventListener('sourceopen', () => {
            try {
            fetch(fileURL)
                .then(response => response.arrayBuffer())
                .then(data => {
                sourceBuffer.appendBuffer(data);
                video.play();
                hideLoadingMessage();
                })
                .catch(handleFileError);
            } catch (error) {
            handleMediaSourceError(error);
            }
      });
  
      video.src = URL.createObjectURL(mediaSource);
    });
  }

// Evento de cambio el input de archivo de video
file.addEventListener('change', () => {
    const selectedFile = file.files[0];
    if (!selectedFile) {
      return;
    }
    if (!selectedFile.type.startsWith('video/')) {
      alert('El archivo seleccionado no es un archivo de vídeo.');
      return;
    }
    loadVideoFile(selectedFile);
  });

// Eventos de los botones 
playButton.addEventListener('click', () => {
  video.play();
});

pauseButton.addEventListener('click', () => {
  video.pause();
});

volumeUpButton.addEventListener('click', () => {
  if (video.volume < 1) {
    video.volume += 0.1;
  }
});

volumeDownButton.addEventListener('click', () => {
  if (video.volume > 0) {
    video.volume -= 0.1;
  }
});
