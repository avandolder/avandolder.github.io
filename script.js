"use strict";

(function(){
    const footerElement = document.getElementById("main-footer");
    const spacer = document.createElement("br");
    const lastModifiedText =
        document.createTextNode("Last Modified: " + document.lastModified);

    footerElement.appendChild(spacer);
    footerElement.appendChild(lastModifiedText);
}());
