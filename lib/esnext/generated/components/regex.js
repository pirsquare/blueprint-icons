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
export const Regex = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "regex", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M0 50C0 77.614 22.3858 100 50 100C77.6142 100 100 77.614 100 50C100 22.386 77.6142 0 50 0C22.3858 0 0 22.386 0 50zM280 400C268.954 400 260 391.04568 260 380V304.6424L194.7374 342.3216C185.1716 347.8446 172.9398 344.567 167.417 335.0012C161.8942 325.4354 165.1716 313.2036 174.7374 307.6806000000001L240.002 270.0002L174.737 232.3194000000001C165.171 226.7964 161.8936 214.5646 167.4164 204.9988C172.9392 195.432 185.171 192.156 194.737 197.678L260 235.358V160C260 148.954 268.954 140 280 140C291.046 140 300 148.954 300 160V235.3604L365.264 197.68C374.828 192.158 387.0600000000001 195.436 392.584 205.0012C398.106 214.567 394.828 226.7988 385.264 232.3216L320.002 270.0002L385.2620000000001 307.6784C394.828 313.2012 398.106 325.433 392.584 334.9988C387.0600000000001 344.5646 374.828 347.8422 365.2620000000001 342.3194L300 304.64V380C300 391.04568 291.046 400 280 400z" : "M0 40C0.00000386258 62.092 17.9086 80 40 80C62.0914 80 80 62.092 80 40C80 17.908 62.0914 0 40 0C17.9086 0 -0.00000386258 17.908 0 40zM220 320C208.954 320.000001931292 200 311.0457 200 300L200 244.6422L152.0578 272.3216C142.4918 277.8446 130.26 274.567 124.7372 265.0012C119.2144 255.4354 122.4918 243.2036 132.0578 237.6806L180.002 210L132.0578 182.3194C122.4918 176.7964 119.2144 164.5646 124.7372 154.9988C130.26 145.433 142.4918 142.1554 152.0576 147.6784L200 175.3578L200 120C200 108.954 208.954 100 220 100C231.046 100 240 108.954 240 120L240 175.3602L287.942 147.6806C297.5080000000001 142.1578 309.74 145.4354 315.262 155.0012C320.786 164.567 317.5080000000001 176.7988 307.942 182.3216L260.002 210L307.942 237.6784C317.5080000000001 243.2012 320.786 255.433 315.262 264.9988C309.74 274.5646 297.5080000000001 277.8422 287.942 272.3194L240 244.6398L240 300C240 311.0457 231.046 319.999998068708 220 320z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Regex.defaultProps = {
    size: IconSize.STANDARD,
};
Regex.displayName = `Blueprint5.Icon.Regex`;
export default Regex;
//# sourceMappingURL=regex.js.map