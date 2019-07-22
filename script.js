"use strict";

(function(){
    const footerElement = document.getElementById("footer");
    const lastModifiedElement = document.createElement("small");
    const lastModified = new Date(document.lastModified);
    const lastModifiedText = document.createTextNode(
            "Last Modified: " + lastModified.toString());
    lastModifiedElement.appendChild(lastModifiedText);
    footerElement.appendChild(lastModifiedElement);
}());
