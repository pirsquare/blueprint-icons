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
export const CircleArrowDown = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "circle-arrow-down", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M280 200C274.4000000000001 200 269.4000000000001 197.8 265.8 194.2L220 148.2V300C220 311 211 320 200 320S180 311 180 300V148.2L134.2 194C130.6 197.8 125.6 200 120 200C109 200 100 191 100 180C100 174.4 102.2 169.4 105.8 165.8L185.8 85.8C189.4 82.2 194.4 80 200 80S210.6 82.2 214.2 85.8L294.2000000000001 165.8C297.8 169.4 300 174.4 300 180C300 191 291 200 280 200zM200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40z" : "M220 180C214.4 180 209.4 177.8 205.8 174.2L180 148.2V220C180 231 171 240 160 240S140 231 140 220V148.2L114.2 174.2C110.6 177.8 105.6 180 100 180C89 180 80 171 80 160C80 154.4 82.2 149.4 85.8 145.8L145.8 85.8C149.4 82.2 154.4 80 160 80S170.6 82.2 174.2 85.8L234.2 145.8C237.8 149.4 240 154.4 240 160C240 171 231 180 220 180zM160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
CircleArrowDown.defaultProps = {
    size: IconSize.STANDARD,
};
CircleArrowDown.displayName = `Blueprint5.Icon.CircleArrowDown`;
export default CircleArrowDown;
//# sourceMappingURL=circle-arrow-down.js.map