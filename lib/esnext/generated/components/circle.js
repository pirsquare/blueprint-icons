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
export const Circle = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "circle", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 400C90 400 0 310 0 200S90 0 200 0S400 90 400 200S310 400 200 400L200 400zM200 40C112 40 40 112 40 200S112 360 200 360S360 288 360 200S288 40 200 40L200 40z" : "M160 320C72 320 0 248 0 160S72 0 160 0S320 72 320 160S248 320 160 320L160 320zM160 40C94 40 40 94 40 160S94 280 160 280S280 226 280 160S226 40 160 40L160 40z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Circle.defaultProps = {
    size: IconSize.STANDARD,
};
Circle.displayName = `Blueprint5.Icon.Circle`;
export default Circle;
//# sourceMappingURL=circle.js.map