"use strict";

(function(){
    const footerElement = document.getElementById("main-footer");
    const spacer = document.createElement("br");
    const lastModified = new Date(document.lastModified);
    const lastModifiedText =
        document.createTextNode("Last Modified: " + lastModified.toString());

    footerElement.appendChild(spacer);
    footerElement.appendChild(lastModifiedText);
}());
