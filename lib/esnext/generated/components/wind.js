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
export const Wind = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "wind", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M240 280C240 313.137 266.862 340 300 340C333.1380000000001 340 360 313.137 360 280C360 246.863 333.1380000000001 220 300 220H80C68.9544 220 60 211.0456 60 200C60 188.954 68.9544 180 80 180H300C355.228 180 400 224.7716 400 280C400 335.2284 355.228 380 300 380C244.772 380 200 335.2284 200 280C200 268.9544 208.954 260 220 260C231.046 260 240 268.9544 240 280zM20 160C8.9543 160 0 151.046 0 140C0 128.954 8.9543 120 20 120H220C242.092 120 260 102.092 260 80C260 57.908 242.092 40 220 40C201.326 40 183.9416 52.278 178.8568 66.6640000000001C175.1758 77.08 163.7494 82.538 153.335 78.856C142.9208 75.1760000000001 137.4622 63.75 141.1432 53.336C152.5318 21.114 186.4248 0 220 0C264.182 0 300 35.818 300 80C300 124.182 264.182 160 220 160H20z" : "M200 240C200 262.0914 217.908 280 240 280C262.092 280 280 262.0914 280 240C280 217.9086 262.092 200 240 200H80C68.9544 200 60 191.0456 60 180C60 168.9544 68.9544 160 80 160H240C284.182 160 320 195.8172 320 240C320 284.1828 284.182 320 240 320C195.8172 320 160 284.1828 160 240C160 228.9544 168.9544 220 180 220C191.0456 220 200 228.9544 200 240zM20 140C8.9543 140 0 131.0458 0 120C0 108.954 8.9543 100 20 100H170C186.5686 100 200 86.568 200 70C200 53.432 186.5686 40 170 40C155.0278 40 142.2828 50.764 139.6002 63.978C137.403 74.804 126.8462 81.798 116.0214 79.6C105.1964 77.402 98.2024 66.846 100.3998 56.022C106.9826 23.592 136.593 0 170 0C208.66 0 240 31.34 240 70C240 108.66 208.66 140 170 140H20z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Wind.defaultProps = {
    size: IconSize.STANDARD,
};
Wind.displayName = `Blueprint5.Icon.Wind`;
export default Wind;
//# sourceMappingURL=wind.js.map