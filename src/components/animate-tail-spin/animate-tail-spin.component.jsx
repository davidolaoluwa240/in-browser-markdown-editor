// Modules
import React from "react";

// Components
import { TailSpin } from "react-loader-spinner";

// Hocs
import { withEnhancedSpinner } from "../../hocs";

export const AnimateTailSpin = withEnhancedSpinner(TailSpin);
