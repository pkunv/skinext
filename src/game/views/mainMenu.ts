import CanvasButton from "@/game/components/button";
import { buttonsState } from "@/game/state";
import switchView from "@/game/switchView";
import { Views } from "@/game/types";

export default function mainMenu({
  canvas,
  ctx,
}: {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}) {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // start button
  const startBtn = CanvasButton({
    canvas,
    ctx,
    text: "Start the game",
    position: { hAlign: "center", vAlign: "center", margin: 10 },
    onClick: () => {
      switchView(canvas, Views.Game);
    },
    onMouseEnter: () => {
      canvas.style.cursor = "pointer";
    },
    onMouseLeave: () => {
      canvas.style.cursor = "default";
    },
  });

  buttonsState.set([startBtn]);
}
