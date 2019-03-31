export default function processing(img) {
    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;

    if (width > 200) width = 100;
    if (height > 200) width = 100;

    canvas.width = width ;
    canvas.height = height;

    const  ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let red = 0;
    let green = 0;
    let blue = 0;
    let alfa = 0;

    const length = imageData.data.length;
    const lengthPix = length / 4;
    for (let i = 0 ; i < length; i += 4) {
        red += imageData.data[i];
        green += imageData.data[i + 1];
        blue += imageData.data[i + 2];
        alfa += imageData.data[i + 3];
    }

    const redAverage = Math.ceil(red / lengthPix);
    const greenAverage = Math.ceil(green / lengthPix);
    const blueAverage = Math.ceil(blue / lengthPix);
    const alfaAverage = alfa / lengthPix;

    return `rgba(${redAverage}, ${greenAverage}, ${blueAverage}, ${alfaAverage})`;
}
