"use strict";

(function(){
    let footerElement = document.getElementById("footer");
    let lastModifiedElement = document.createElement("small");
    let lastModified = new Date(document.lastModified);
    let lastModifiedText = document.createTextNode(
            "Last Modified: " + lastModified.toString());
    lastModifiedElement.appendChild(lastModifiedText);
    footerElement.appendChild(lastModifiedElement);
}());
