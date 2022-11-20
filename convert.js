/**
 * identicon 2.0.0
 * http://github.com/Rajveer2009/identicon/
 *
 * Libraries
 * elrumordelaluz/svgson, mathiasbynens/utf8.js,
 * mathiasbynens/base64, stewartlord/identicon.js
 *
 * Copyright (c) 2022 Rajveer Singh Saggu, https://rajveer2009.github.io/ <rajveersinghsaggu2009@proton.me>
 * Released under the MIT license
 * https://rajveer2009.github.io/LICENSE/
 */

function Genrate() {
    // Checking if the image is there an if there removing it  
    element1 = document.getElementById("img");

    if (typeof (element1) != 'undefined' && element1 != null) {
        const element1 = document.getElementById("img");
        element1.remove();
    }

    // Getting "hash" value
    var hash = document.getElementById("seeed").value;

    // Options for the Identicon
    var options = {
        background: [240, 240, 240, 255],
        margin: 0.2,
        size: 420,
        format: 'svg'
    };

    // Genrate the Identicon
    var data = new Identicon(hash, options).toString();

    // Decode the base64 ecoded svg data of the Identicon to get the color value
    var bytes = base64.decode(data);
    var text = utf8.decode(bytes);

    svgson.parse(String(text)).then((json) => {
        style = json.children[0].attributes.style

        var myArr = String(style).split("").map((style) => {
            return String(style)
        })

        if (myArr[21] == ")") {
            color = myArr[10] + myArr[11] + myArr[12] + myArr[13] + myArr[14] + myArr[15] + myArr[16] + myArr[17] + myArr[18] + myArr[19] + myArr[20]
        }
        else {
            color = myArr[10] + myArr[11] + myArr[12] + myArr[13] + myArr[14] + myArr[15] + myArr[16] + myArr[17] + myArr[18] + myArr[19] + myArr[20] + myArr[21]
        }

        // Deleting the image element
        const element2 = document.getElementById("del");
        element2.remove();

        // Logging the values of the "Seeed" and Color in the Console 
        console.log("seeed: " + hash);
        console.log("color: rgba[" + color + "]");
    });

    // Writing the Identicon to an image
    img = document.createElement('img');
    img.id = "img"
    img.src = String("data:image/svg+xml;base64," + data);
    document.body.appendChild(img);
};