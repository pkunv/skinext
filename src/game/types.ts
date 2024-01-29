export enum Views {
  MainMenu = 0,
  Game = 1,
}

export enum Errors {
  FailedToGetCanvas = "ERROR: Could not get canvas element.",
  FailedToGetContext = "ERROR: Could not get canvas 2D context.",
  UnknownView = "ERROR: Could not reach unknown view of the game.",
}

export enum ColorVariants {
  Primary = "#000000",
  Secondary = "#FFFFFF",
}

export enum BgColorVariants {
  Primary = "#FFFFFF",
  Secondary = "#000000",
}
