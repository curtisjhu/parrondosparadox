"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loop = void 0;
const index_1 = require("./index");
let previousTimeStamp = 0;
function loop(timestamp) {
    if (timestamp - previousTimeStamp > 1000) {
        (0, index_1.draw)();
        previousTimeStamp = timestamp;
    }
    window.requestAnimationFrame(loop);
}
exports.loop = loop;
