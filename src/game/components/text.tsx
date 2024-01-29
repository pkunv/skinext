import { ColorVariants } from "@/game/types";

export default function CanvasText({
  canvas,
  ctx,
  text,
  position,
  variant = "primary",
  size = "medium",
}: {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  text: string;
  position: {
    hAlign: "left" | "center" | "right";
    vAlign: "top" | "center" | "bottom";
    margin: number;
  };
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}) {
  const sizes = {
    small: { padding: 5, fontSize: 10 },
    medium: { padding: 7, fontSize: 14 },
    large: { padding: 10, fontSize: 16 },
  };

  const { padding, fontSize } = sizes[size];
  ctx.font = `${fontSize}px Arial`;
  const width = ctx.measureText(text).width;
  const height = fontSize + padding * 2;
  let x: number, y: number;
  let color: string;

  switch (variant) {
    case "primary":
      color = ColorVariants.Primary;
      break;
    case "secondary":
      color = ColorVariants.Secondary;
      break;
  }

  switch (position.hAlign) {
    case "left":
      x = position.margin;
      break;
    case "center":
      x = canvas.width / 2 - width / 2;
      break;
    case "right":
      x = canvas.width - width - position.margin;
      break;
  }
  switch (position.vAlign) {
    case "top":
      y = position.margin;
      break;
    case "center":
      y = canvas.height / 2 - height / 2;
      break;
    case "bottom":
      y = canvas.height - height - position.margin;
      break;
  }

  ctx.fillStyle = color;
  ctx.fillText(text, x + padding, y + fontSize + padding);
}
