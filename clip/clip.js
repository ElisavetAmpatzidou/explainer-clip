import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import { leftMove } from "./library/leftMove";
import { opacity } from "./library/opacity";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(opacity(1,".text",1000),1000);
clip.addIncident(leftMove("-10px",".box:nth-child(2)",500),3000);
clip.addIncident(leftMove("-20px",".box:nth-child(3)",500),3000);
clip.addIncident(leftMove("0px",".box",500),5000);
clip.addIncident(leftMove("362px",".box:nth-child(1)",800),9500);
clip.addIncident(leftMove("242px",".box:nth-child(2)",800),9500);
clip.addIncident(leftMove("122px",".box:nth-child(3)",800),9500);
clip.addIncident(leftMove("83%",".text",800),9500);
