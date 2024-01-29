export default function canvasMouseEvent({
  canvas,
  x,
  y,
  width,
  height,
  type,
  callback,
  signal,
}: {
  canvas: HTMLCanvasElement;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "click" | "mouseenter" | "mouseleave";
  callback: () => void;
  signal: AbortSignal;
}) {
  switch (type) {
    case "mouseenter":
      canvas.addEventListener(
        "mousemove",
        function (event) {
          const mouseX = event.offsetX,
            mouseY = event.offsetY;
          // Collision detection between clicked offset and element.
          if (
            mouseX > x &&
            mouseX < x + width &&
            mouseY > y &&
            mouseY < y + height
          ) {
            callback();
          }
        },
        { signal },
      );
      break;
    case "mouseleave":
      canvas.addEventListener(
        "mousemove",
        function (event) {
          const mouseX = event.offsetX,
            mouseY = event.offsetY;
          // Collision detection between clicked offset and element.
          if (
            (mouseX > x &&
              mouseX < x + width &&
              mouseY > y &&
              mouseY < y + height) === false
          ) {
            callback();
          }
        },
        { signal },
      );
      break;
    default:
      canvas.addEventListener(
        type,
        function (event) {
          const mouseX = event.offsetX,
            mouseY = event.offsetY;
          // Collision detection between clicked offset and element.
          if (
            mouseX > x &&
            mouseX < x + width &&
            mouseY > y &&
            mouseY < y + height
          ) {
            callback();
          }
        },
        { signal },
      );
      break;
  }
}
