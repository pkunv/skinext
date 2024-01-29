import CanvasText from "@/game/components/text";

export default function gameLoop({
  canvas,
  ctx,
}: {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}) {
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // test text
  CanvasText({
    canvas,
    ctx,
    text: "Here is some text",
    size: "large",
    position: { hAlign: "center", vAlign: "top", margin: 25 },
  });
}
