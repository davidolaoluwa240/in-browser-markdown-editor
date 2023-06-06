// Modules
import React from "react";

// Components
import { BiMoon as BiMoonEC } from "react-icons/bi";
import {
  MdOutlineLightMode as MdOutlineLightModeEC,
  MdOutlineFullscreenExit as MdOutlineFullscreenExitEC,
  MdOutlineFullscreen as MdOutlineFullscreenEC,
} from "react-icons/md";

// Hocs
import { withEnhancedIcon } from "../../hocs";

export const BiMoon = withEnhancedIcon(BiMoonEC);
export const MdOutlineLightMode = withEnhancedIcon(MdOutlineLightModeEC);
export const MdOutlineFullscreenExit = withEnhancedIcon(
  MdOutlineFullscreenExitEC
);
export const MdOutlineFullscreen = withEnhancedIcon(MdOutlineFullscreenEC);
