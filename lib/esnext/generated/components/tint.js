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
export const Tint = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "tint", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M197.2 360C197.2 360 79.6 216.4 79.6 156.6C79.8 92 135.6 40 199.2 40C262.8 40.2 320 92.6 319.8000000000001 157.2C319.8 219 197.2 360 197.2 360z" : "M157.6 300C157.6 300 59.6 174.4 59.6 122C59.8 65.6 106.4 20 159.4 20C212.4 20.2 260 66 260 122.6C259.8 176.6 157.6 300 157.6 300z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Tint.defaultProps = {
    size: IconSize.STANDARD,
};
Tint.displayName = `Blueprint5.Icon.Tint`;
export default Tint;
//# sourceMappingURL=tint.js.map