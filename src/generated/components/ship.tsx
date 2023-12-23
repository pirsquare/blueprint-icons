/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import type { SVGIconProps } from "../../svgIconProps";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";

export const Ship: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="ship" ref={ref}  {...props}>
            <path
                d={isLarge ? "M136.7842 383.92232L129.9998 350H70C58.9542 350 50 341.0456 50 330V232.1428L18.4134 223.1182C8.1172 220.1764 1.955086 209.6542 4.57716 199.272C13.77092 162.87 27.8314 112.154 38.5992 87.852C34.2344 87.622 29.7024 87.5 25 87.5C18.09638 87.5 12.49994 81.904 12.49994 75C12.49994 68.096 18.09638 62.5 25 62.5C76.6658 62.5 110.358 76.086 129.0322 85.414C142.7806 76.096 166.6564 62.5 200 62.5C233.01 62.5 256.74 75.826 270.552 85.134L270.66 85.076C275.544 82.458 282.674 79.076 292.046 75.728C310.812 69.026 338.48 62.5 375 62.5C381.904 62.5 387.5 68.096 387.5 75C387.5 81.904 381.904 87.5 375 87.5C368.534 87.5 362.392 87.722 356.57 88.124C358.164 90.032 359.428 92.276 360.24 94.792L393.638 198.164C397.116 208.9294 390.978 220.4346 380.1 223.5428L350 232.1428V330C350 341.0456 341.046 350 330 350H270L263.216 383.92232C261.346 393.2708 253.138 400 243.604 400H156.3958C146.8622 400 138.654 393.2708 136.7842 383.92232zM100 246.4286L175 267.8572000000001V300H100V246.4286zM225 267.8572000000001L300 246.4286V300H225V267.8572000000001zM124.0972 61.018C128.2902 63.264 133.3946 62.936 137.2654 60.172C148.6394 52.048 169.1936 37.5 200 37.5C230.806 37.5 251.36 52.048 262.734 60.172C267.064 63.264 272.874 63.276 277.216 60.208L277.366 60.106C277.532 59.994 278.266 59.526 278.266 59.526C279.132 58.984 280.532 58.148 282.466 57.112C286.33 55.042 292.326 52.174 300.454 49.272C316.688 43.474 341.52 37.5 375 37.5C381.904 37.5 387.5 31.904 387.5 25C387.5 18.096 381.904 12.5 375 12.5C338.48 12.5 310.812 19.026 292.046 25.728C282.674 29.076 275.544 32.458 270.66 35.076L270.552 35.134C256.74 25.826 233.01 12.5 200 12.5C166.6564 12.5 142.7806 26.096 129.0322 35.414C110.358 26.086 76.6658 12.5 25 12.5C18.09638 12.5 12.49994 18.096 12.49994 25C12.49994 31.904 18.09638 37.5 25 37.5C78.2166 37.5 109.589 53.246 124.0972 61.018z" : "M108.7844 303.92232L104 280H60C48.9544 280 40 271.0456 40 260V185.7142L18.41346 179.5466C8.11726 176.605 1.955562 166.076 4.60586 155.7008C11.92338 127.0552 22.5362 89.23 30.775 70.518C30.81 70.438 30.8456 70.36 30.8816 70.282C27.3892 70.098 23.7628 70 20 70C14.47716 70 10 65.522 10 60C10 54.478 14.47716 50 20 50C61.3326 50 88.2864 60.868 103.2258 68.332C114.2246 60.878 133.3252 50 160 50C186.4074 50 205.392 60.66 216.44 68.106L216.528 68.06C220.436 65.966 226.138 63.26 233.636 60.582C248.648 55.222 270.784 50 300 50C305.522 50 310 54.478 310 60C310 65.522 305.522 70 300 70C294.108 70 288.55 70.232 283.326 70.642C286.098 72.97 288.272 76.082 289.472 79.792L313.6380000000001 154.5922C317.116 165.358 310.978 176.8632 300.1 179.9712L280 185.7142V260C280 271.0456 271.046 280 260 280H216L211.216 303.92232C209.346 313.2708 201.138 320 191.6038 320H128.396C118.8624 320 110.654 313.2708 108.7844 303.92232zM80 197.1428L140 214.2858V240H80V197.1428zM180 214.2858L240 197.1428V240H180V214.2858zM99.2778 48.814C102.6322 50.612 106.7158 50.35 109.8124 48.138C118.9116 41.638 135.355 30 160 30C184.645 30 201.088 41.638 210.188 48.138C213.652 50.612 218.3 50.62 221.772 48.166L221.892 48.084C222.026 47.996 222.612 47.62 222.612 47.62C223.306 47.188 224.426 46.518 225.972 45.69C229.064 44.034 233.862 41.74 240.364 39.418C253.352 34.778 273.216 30 300 30C305.522 30 310 25.522 310 20C310 14.478 305.522 10 300 10C270.784 10 248.648 15.222 233.636 20.582C226.138 23.26 220.436 25.966 216.528 28.06L216.44 28.106C205.392 20.66 186.4074 10 160 10C133.3252 10 114.2246 20.878 103.2258 28.332C88.2864 20.868 61.3326 10 20 10C14.47716 10 10 14.478 10 20C10 25.522 14.47716 30 20 30C62.5732 30 87.6712 42.596 99.2778 48.814z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Ship.defaultProps = {
    size: IconSize.STANDARD,
};
Ship.displayName = `Blueprint5.Icon.Ship`;
export default Ship;
