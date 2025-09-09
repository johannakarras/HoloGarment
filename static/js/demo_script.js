let g_idx = [0, 0, 0];

function changeImage(direction, type, p_idx, g_num) {
    // change garment id
    if (type == 'change_garment') {
        if (direction === 'next') {
            g_idx[p_idx] = (g_idx[p_idx] + 1) % g_num;
        } else {
            g_idx[p_idx] = (g_idx[p_idx] - 1 + g_num) % g_num;
        }
    }
    document.getElementById(`garmentImage_${p_idx}`).src = `static/videos/demo_videos/cropped_person_${p_idx}/garment_${g_idx[p_idx]}.png`;
    document.getElementById(`tryonVideo_${p_idx}`).src = `static/videos/demo_videos/cropped_person_${p_idx}/garment_${g_idx[p_idx]}.mp4`;
    document.getElementById(`personVideo_${p_idx}`).src = `static/videos/demo_videos/cropped_person_${p_idx}/person.mp4`;
}