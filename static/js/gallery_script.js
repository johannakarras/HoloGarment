let idx = 0;

function changeImage(direction, type, num_samples) {
    if (direction === 'next') {
        idx = (idx+ 1) % num_samples;
    } else {
        idx = (idx- 1 + num_samples) % num_samples;
    }
    document.getElementById(`galleryPersonVideo`).src = `static/videos/gallery/garment_${idx}.mp4`;
    document.getElementById(`galleryGarmentVideo`).src = `static/videos/gallery/garment_${idx}.mp4`;
    document.getElementById(`galleryTryonVideo`).src = `static/videos/gallery/tryon_${idx}.mp4`;
        }