import { buttonsState, viewState } from "@/game/state";
import { Errors, Views } from "@/game/types";
import gameLoop from "@/game/views/game";
import mainMenu from "@/game/views/mainMenu";

export default function switchView(canvas: HTMLCanvasElement, view: Views) {
  buttonsState.get().forEach((btn) => {
    btn.removeEventListeners();
  });

  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error(Errors.FailedToGetContext);

  viewState.set(view);

  switch (view) {
    case Views.MainMenu:
      mainMenu({ canvas, ctx });
      break;
    case Views.Game:
      gameLoop({ canvas, ctx });
      break;
    default:
      throw new Error(Errors.UnknownView);
  }
}
