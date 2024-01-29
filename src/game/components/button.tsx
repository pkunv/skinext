import canvasMouseEvent from "@/game/lib/canvasMouseEvent";
import { BgColorVariants, ColorVariants } from "@/game/types";

export default function CanvasButton({
  canvas,
  ctx,
  text,
  position,
  variant = "primary",
  size = "medium",
  onClick,
  onMouseEnter,
  onMouseLeave,
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
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
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
  const controller = new AbortController();
  const { signal } = controller;
  let x: number, y: number;
  let color: string, bgColor: string;

  switch (variant) {
    case "primary":
      color = ColorVariants.Primary;
      bgColor = BgColorVariants.Primary;
      break;
    case "secondary":
      color = ColorVariants.Secondary;
      bgColor = BgColorVariants.Secondary;
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

  ctx.beginPath();
  ctx.fillStyle = bgColor;
  ctx.fillRect(x, y, width + padding * 2, height + padding / 2);

  ctx.fillStyle = color;
  ctx.fillText(text, x + padding, y + fontSize + padding);

  if (onClick)
    canvasMouseEvent({
      canvas,
      x,
      y,
      width,
      height,
      type: "click",
      callback: onClick,
      signal,
    });
  if (onMouseEnter && onMouseLeave) {
    canvasMouseEvent({
      canvas,
      x,
      y,
      width,
      height,
      type: "mouseenter",
      callback: onMouseEnter,
      signal,
    });
    canvasMouseEvent({
      canvas,
      x,
      y,
      width,
      height,
      type: "mouseleave",
      callback: onMouseLeave,
      signal,
    });
  }
  return {
    removeEventListeners: () => {
      if (onMouseLeave) onMouseLeave();
      controller.abort();
    },
  };
}
