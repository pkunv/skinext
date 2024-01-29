import type CanvasButton from "@/game/components/button";
import { Views } from "@/game/types";
import * as optics from "@optics/state";

export const viewState = optics.createState(Views.MainMenu);

export const gameLoopState = optics.createState<boolean>(false);

export const canvasState = optics.createState<HTMLCanvasElement | null>(null);

export const buttonsState = optics.createState<
  ReturnType<typeof CanvasButton>[]
>([]);
