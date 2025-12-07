"use strict";

function nullish(v) {
  return v === null || v === undefined;
}

function winUp() {
  const activeWindow = workspace.activeWindow;
  if (!nullish(activeWindow)) {
    activeWindow.setMaximize(true, true);
  }
}

function winDown() {
  const activeWindow = workspace.activeWindow;
  if (!nullish(activeWindow)) {
    if (activeWindow.maximizeMode === 0) /* MaximizeRestore */ {
      activeWindow.minimized = true;
    } else {
      activeWindow.setMaximize(false, false);
    }
  }
}

registerShortcut(
  "WindowsLikeMaximize",
  "Windows-Like Maximize",
  "Meta+Up",
  winUp
);

registerShortcut(
  "WindowsLikeMinimize",
  "Windows-Like Minimize",
  "Meta+Down",
  winDown
);
