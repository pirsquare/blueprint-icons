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
export const RotatePage = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "rotate-page", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M280 360H248.2L254 365.8C257.8 369.4 260 374.4 260 380C260 391 251 400 240 400C234.4 400 229.4 397.8 225.8 394.2L185.8 354.2C182.2 350.6 180 345.6 180 340C180 334.4 182.2 329.4 185.8 325.8L225.8 285.8C229.4 282.2 234.4 280 240 280C251 280 260 289 260 300C260 305.6 257.8 310.6 254.2 314.2L248.2 320H280C302 320 320 302 320 280V220C320 209 329 200 340 200S360 209 360 220V280C360 324.2 324.2000000000001 360 280 360zM240 260H60C49 260 40 251 40 240V20C40 9 49 0 60 0H240C251 0 260 9 260 20V240C260 251 251 260 240 260zM220 40H80V220H220V40z" : "M160 200H40C29 200 20 191 20 180V20C20 9 29 0 40 0H160C171 0 180 9 180 20V180C180 191 171 200 160 200zM140 40H60V160H140V40zM240 280H208.2L214 285.8C217.8 289.4 220 294.4 220 300C220 311 211 320 200 320C194.4 320 189.4 317.8 185.8 314.2L145.8 274.2C142.2 270.6 140 265.6 140 260C140 254.4 142.2 249.4 145.8 245.8L185.8 205.8C189.4 202.2 194.4 200 200 200C211 200 220 209 220 220C220 225.6 217.8 230.6 214.2 234.2L208.2 240H240C251 240 260 231 260 220V160C260 149 269 140 280 140S300 149 300 160V220C300 253.2 273.2 280 240 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
RotatePage.defaultProps = {
    size: IconSize.STANDARD,
};
RotatePage.displayName = `Blueprint5.Icon.RotatePage`;
export default RotatePage;
//# sourceMappingURL=rotate-page.js.map