import * as PIXI from 'pixi.js'
import { gsap } from 'gsap';
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const app = new PIXI.Application({
  view: document.getElementById("c"),
  width: window.innerWidth,
  height: window.innerHeight,
  background: 0xCCCCCC,
  antialias: true,
});

app.loader
  .load(setup);

function setup () {
  app.ticker.add(loop);
}

function loop() {

}
