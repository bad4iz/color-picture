import processing from "./processing";

export default function getAverageRGBA(imgSource) {
    switch (typeof imgSource) {
        case "object":
            return processing(imgSource);
        case "string":
            return string(imgSource);
        default:
            return false;
    }

}

function string(src) {
    const img = new Image();
    img.src = src;
    img.addEventListener('load', ()=>processing(img));
}
