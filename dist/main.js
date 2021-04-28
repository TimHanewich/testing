"use strict";
function DoThis() {
    console.log("Hello world! @ " + Date.now().toString());
}
setInterval(DoThis, 1000);
