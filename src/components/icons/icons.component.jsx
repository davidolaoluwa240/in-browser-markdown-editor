// Modules
import React from "react";

// Components
import { BiMoon as BiMoonEnhanced } from "react-icons/bi";
import { MdOutlineLightMode as MdOutlineLightModeEnhanced } from "react-icons/md";

export const BiMoon = ({ isActive, ...props }) => {
  return <BiMoonEnhanced {...props} />;
};

export const MdOutlineLightMode = ({ isActive, ...props }) => {
  return <MdOutlineLightModeEnhanced {...props} />;
};
