var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);

var hash = String(Math.floor(Math.random() * 1000000000000000));

var options = {
    foreground: [r, g, b, 255],
    background: [255, 255, 255, 255],
    margin: 0.2,
    size: 420,
    format: 'svg'
};
var data = new Identicon(hash, options).toString();
document.write('<img width=420 height=420 src="data:image/svg+xml;base64,' + data + '">');
document.write('<p style="color: rgb(' + [r, g, b] + ')">' + hash + '</p>')