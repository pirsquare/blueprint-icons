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
export const AreaOfInterest = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "area-of-interest", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M100.0002 306.725C100.0002 358.175 144.8276 400 200 400C255.172 400 299.818 358.175 300 306.725C300 255.1 200 120 200 120C200 120 100.0002 255.1 100.0002 306.725zM160 300C160 277.92 177.9202 260 200 260C222.08 260 240 277.92 240 300C240 322.08 222.08 340 200 340C177.9202 340 160 322.08 160 300zM10.07784 157.366L96.1162 206.5278C102.5572 195.002 109.3598 183.616 116.0262 172.89L116.5104 172.112L50.6398 134.474L129.3676 39.996L270.632 40L349.36 134.472L283.49 172.112L283.974 172.89C290.64 183.616 297.442 195.002 303.884 206.5274L389.922 157.364C395.058 154.43 398.632 149.372 399.682 143.55C400.732 137.728 399.152 131.74 395.3640000000001 127.196L295.3640000000001 7.196C291.564 2.636 285.936 0 280 0L120.0006 -0.004C114.0646 -0.004 108.4354 2.6319999999999 104.6354 7.192L4.63548 127.198C0.848502 131.742 -0.732348 137.73 0.317864 143.552C1.368074 149.374 4.9416 154.432 10.07784 157.366z" : "M80.0006 246.7126C80.0006 287.1376 115.8626 320 160.0006 320C204.138 320 239.856 287.1376 240 246.7126C240 206.15 160.0006 100 160.0006 100C160.0006 100 80.0006 206.15 80.0006 246.7126zM120.0006 240C120.0006 217.92 137.9206 200 160.0006 200C182.0806 200 200 217.92 200 240C200 262.08 182.0806 280 160.0006 280C137.9206 280 120.0006 262.08 120.0006 240zM270.086 114.628L216.482 146.7902L216.902 147.4524C223.718 158.2264 230.652 169.7582 236.886 181.1958L310.29 137.1528C315.238 134.1834 318.664 129.221 319.684 123.5406C320.706 117.86 319.222 112.016 315.618 107.51L235.618 7.51C231.822 2.764 226.076 0.002 220 0.002H100.0002C93.9244 0.002 88.1782 2.764 84.3828 7.51L4.38276 107.51C0.777406 112.016 -0.705358 117.86 0.315498 123.5406C1.336354 129.221 4.7613 134.1834 9.71022 137.1528L83.116 181.1962C89.348 169.7586 96.2824 158.2266 103.0998 147.4524L103.519 146.7906L49.9134 114.628L109.6126 40.002H210.388L270.086 114.628z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
AreaOfInterest.defaultProps = {
    size: IconSize.STANDARD,
};
AreaOfInterest.displayName = `Blueprint5.Icon.AreaOfInterest`;
export default AreaOfInterest;
//# sourceMappingURL=area-of-interest.js.map