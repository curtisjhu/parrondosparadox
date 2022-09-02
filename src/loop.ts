import { draw } from "./index";
let previousTimeStamp = 0;

export function loop(timestamp): void {
    if (timestamp - previousTimeStamp > 1000) {
        draw();
        previousTimeStamp = timestamp;
    }
    window.requestAnimationFrame(loop);
}
