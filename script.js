// Las imágenes se activan automáticamente cuando el archivo existe.
document.querySelectorAll('.image-slot img').forEach(img=>{img.addEventListener('load',()=>img.parentElement.classList.add('loaded'));img.addEventListener('error',()=>img.style.display='none');if(img.complete&&img.naturalWidth)img.parentElement.classList.add('loaded')});
