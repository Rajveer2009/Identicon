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
    // Random "hash"
    hash = String(Math.floor(Math.random() * 10000000000000000));

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

        // Logging the values of the "Seeed" and Color in the Console 
        console.log("seeed: " + hash);
        console.log("color: rgba[" + color + "]");

        // Setting the Color value and "Hash" value to a paragraph tag
        document.write('<a href="javascript:location.reload()" style="text-decoration: none; font-size:16px; color: rgb(' + color + ')">' + hash + '</a>');
    });

    // Writing the Identicon to an image
    document.write('<img width=420px height=420px onclick="copy()" src="data:image/svg+xml;base64,' + data + '">');
    document.write('<br>');
}

function copy() {
    // Defining the variable for the text field
    var copyText = hash;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText).then(
        function() {
            window.location = "convert.html" 
        }
    ) 
}

Genrate()