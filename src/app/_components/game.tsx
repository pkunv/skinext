"use client";

import { canvasState, viewState } from "@/game/state";
import switchView from "@/game/switchView";
import { Errors } from "@/game/types";
import { useCallback } from "react";

export default function Game() {
  const onRefChange = useCallback((canvasRef: HTMLCanvasElement) => {
    if (!canvasRef) return;
    canvasState.set(canvasRef);

    const canvas = canvasState.get();
    const ctx = canvasState.get()?.getContext("2d");
    const view = viewState.get();

    if (!canvas) throw new Error(Errors.FailedToGetCanvas);
    if (!ctx) throw new Error(Errors.FailedToGetContext);

    switchView(canvas, view);
  }, []); // adjust deps

  return (
    <canvas
      ref={onRefChange}
      width={800}
      height={600}
      className="border-2 border-solid"
    />
  );
}
