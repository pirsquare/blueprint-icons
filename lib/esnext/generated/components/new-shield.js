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
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const NewShield = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "new-shield", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M240 320C240 308 248 300 260 300H300V260C300 248 308 240 320 240C330 240 340 248 340 260V300H380C390 300 400 308 400 320C400 332 390 340 380 340H340V380C340 392 330 400 320 400C308 400 300 392 300 380V340H260C248 340 240 330 240 320zM315.9120000000001 200.1278C294.9020000000001 142.752 256.444 93.86 200 52.646V346.9694C200 370 200 360 200 400C120 342.8572000000001 60 314.2858 20 314.2858C20 180.952 80 76.19 200 0C292.678 58.844 349.568 134.73 370.67 227.6586C359.3760000000001 210.1856 339.448 200 320 200C318.642 200 317.278 200.0422 315.9120000000001 200.1278z" : "M220 240H240V220C240 209 249 200 260 200C271 200 280 209 280 220V240H300C311 240 320 249 320 260C320 271 311 280 300 280H280V300C280 311 271 320 260 320C249 320 240 311 240 300V280H220C209 280 200 271 200 260C200 249 209 240 220 240zM160 300C97.7778 257.1428 51.1112 235.7142 20 235.7142C20 135.7142 66.6666 57.142 160 0C235.938 46.492 280.9840000000001 107.172 295.138 182.0352C284.002 171.4394 269.8160000000001 164.0194 254.032 161.2268C238.806 113.352 207.638 73.028 160 39.484V240C160 260.12 160 279.6796 160 300z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
NewShield.defaultProps = {
    size: IconSize.STANDARD,
};
NewShield.displayName = `Blueprint5.Icon.NewShield`;
export default NewShield;
//# sourceMappingURL=new-shield.js.map