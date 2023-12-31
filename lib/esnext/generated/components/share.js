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
export const Share = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "share", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M300 40H40V300H215.2L255.2 340H20C9 340 0 331 0 320V20C0 9 9 0 20 0H320C331 0 340 9 340 20V255.2L300 215.2V40zM380 400H240C229 400 220 391 220 380C220 369 229 360 240 360H331.8L185.8 214.2C182.2 210.6 180 205.6 180 200C180 189 189 180 200 180C205.6 180 210.6 182.2 214.2 185.8L360 331.8V240C360 229 369 220 380 220S400 229 400 240V380C400 391 391 400 380 400z" : "M219.8 40.2H39.8V220.2H135L175 260.2H19.8C8.8 260.2 -0.2 251.2 -0.2 240.2V20.2C-0.2 9.2 8.8 0.2 19.8 0.2H239.8C250.8 0.2 259.8 9.2 259.8 20.2V175.2L219.8 135.2V40.2zM299.8 320.2H199.8C188.8 320.2 179.8 311.2 179.8 300.2S188.8 280.2 199.8 280.2H251.6L145.8 174.4C142 170.6 139.8 165.6 139.8 160.2C139.8 149.2 148.8 140.2 159.8 140.2C165.4 140.2 170.4 142.4 174 146L279.8 251.8V200C279.8 189 288.8 180 299.8 180S319.8 189 319.8 200V300C319.8 311.2 310.8 320.2 299.8 320.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Share.defaultProps = {
    size: IconSize.STANDARD,
};
Share.displayName = `Blueprint5.Icon.Share`;
export default Share;
//# sourceMappingURL=share.js.map