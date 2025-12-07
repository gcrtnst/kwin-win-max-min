# Windows-Like Maximize/Minimize

This KWin script introduces new keyboard shortcuts for maximizing and minimizing windows, mimicking the familiar behavior found in Windows (`Win + Up` / `Win + Down`).

## Features

The script adds two new, non-default keyboard shortcuts to KWin:

1.  Windows-Like Maximize:
    - If the window is not maximized, it will maximize the window.
    - If the window is already maximized, it will do nothing. (Unlike the default KWin "Maximize Window" action, which would unmaximize it.)

2.  Windows-Like Minimize:
    - If the window is maximized, the first press will unmaximize it.
    - If the window is not maximized (including after being unmaximized by the first press), the next press will minimize it.

By using these new shortcuts, you can achieve a familiar, Windows-like workflow, especially when mapping them to `Meta + Up` and `Meta + Down`.

## Installation and Configuration

### 1. Install the Script

1.  Download the script's zip file from the repository's release page. The file is named `kwin-win-max-min-vX.Y.Z.zip`.
2.  Open System Settings.
3.  Go to Workspace -> Window Management -> KWin Scripts.
4.  Click "Install from File..." and select the previously downloaded `kwin-win-max-min-vX.Y.Z.zip` file.
5.  Ensure the script is enabled in the KWin Scripts list.

### 2. Configure the Shortcuts

After enabling the script, you must assign the new actions to your desired key bindings, typically `Meta + Up` and `Meta + Down`.

1.  Open System Settings.
2.  Go to Workspace -> Shortcuts -> KWin.
3.  Search for the two new custom actions provided by this script. They will typically be named:
    * Windows-Like Maximize
    * Windows-Like Minimize
4.  Click the entry for "Windows-Like Maximize" and press `Meta + Up` (or your preferred shortcut) to set the custom binding.
5.  Click the entry for "Windows-Like Minimize" and press `Meta + Down` (or your preferred shortcut) to set the custom binding.

#### Note on Existing Shortcuts

The default KWin shortcuts use `Meta + Up` for "Quick Tile Window to the Top" and `Meta + Down` for "Quick Tile Window to the Bottom".

When you assign the new "Windows Maximize" and "Windows Minimize" actions to `Meta + Up` and `Meta + Down`, respectively, these new actions will take priority, overriding the default quick-tiling behavior for those keys. The standard quick-tiling for `Meta + Left` and `Meta + Right` will remain unaffected.

## Scope

This script is focused on maximizing and minimizing windows.

Window snapping (like quick-tiling to the top, bottom, or quarters of the screen) is not supported. The shortcuts provided by this script only perform maximize/minimize operations.

## License

This project is licensed under The Unlicense. Please refer to the [LICENSE](./LICENSE) file in this repository for the complete licensing details.
