function hobbie(type){
    const img = document.getElementById('monImage');
    const video = document.getElementById('monVideo');
    const videoSource = document.getElementById('videoSource');

    if (type === 2) { 
        img.style.display = 'none';
        video.style.display = 'block';
        videoSource.src = "marathon.mp4"; 
        video.load();
        video.play();
    } 
    else if (type === 3) {  
        img.style.display = 'none';
        video.style.display = 'block';
        videoSource.src = "rochelle.mp4";  
        video.load();
        video.play();
    }
    else {  
        video.pause();
        video.style.display = 'none';
        img.style.display = 'block';

        if (type === 1) {
            img.src = "ODM.jpeg";
        }
    }
}