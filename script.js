"use strict";

(function(){
    const footerElement = document.getElementById("main-footer");
    const lineBreak = document.createElement("br");
    const lastModified =
        document.createTextNode("Last Modified: " + document.lastModified);

    footerElement.appendChild(lineBreak);
    footerElement.appendChild(lastModified);
}());
