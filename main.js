var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);

var hash = String(Math.floor(Math.random() * 10000000000000000));
console.log("seeed: " + hash);

var options = {
    background: [240, 240, 240, 255],
    margin: 0.2,
    size: 420,
    format: 'svg'
};
var data = new Identicon(hash, options).toString();

var bytes = base64.decode(data);
var text = utf8.decode(bytes);

svgson.parse(String(text)).then((json) => {
    style = json.children[0].attributes.style

    var myArr = String(style).split("").map((style) => {
        return String(style)
    })

    if(myArr[21] == ")") {
        color = myArr[10] + myArr[11] + myArr[12] + myArr[13] + myArr[14] + myArr[15] + myArr[16] + myArr[17] + myArr[18] + myArr[19] + myArr[20]
    }
    else {
        color = myArr[10] + myArr[11] + myArr[12] + myArr[13] + myArr[14] + myArr[15] + myArr[16] + myArr[17] + myArr[18] + myArr[19] + myArr[20] + myArr[21]
    }

    console.log("color: rgba(" + color + ")")
    document.write('<p style="font-size:20px; font-weight: 900; color: rgb(' + color + ')">' + hash + '</p>');
});

document.write('<img width=420 height=420 src="data:image/svg+xml;base64,' + data + '">');
