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
export const List = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "list", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M20.6 380C9.2 380 0 370.8 0 359.4V340.4C0 329.2 9.2 320 20.6 320H379.6C390.8 320 400 329.2 400 340.6V359.4C400 370.8 390.8 380 379.4 380H20.6zM0 40.6C0 29.2 9.2 20 20.6 20H379.6C390.8 20 400.2000000000001 29.2 400.2000000000001 40.6V59.6C400.2000000000001 70.8 391 80.2 379.6 80.2H20.6C9.2 80 0 70.8 0 59.4V40.6zM0 140.6C0 129.2000000000001 9.2 120 20.6 120H379.6C390.8 120 400.2000000000001 129.2000000000001 400.2000000000001 140.6V159.6C400.2000000000001 170.8 391 180.2 379.6 180.2H20.6C9.2 180 0 170.8 0 159.4V140.6zM0 240.6C0 229.2 9.2 220 20.6 220H379.6C390.8 220 400 229.2 400 240.6V259.4C400 270.8 390.8 280 379.4 280H20.6C9.2 280 0 270.8 0 259.4V240.6z" : "M20 260H300C311 260 320 269 320 280S311 300 300 300H20C9 300 0 291 0 280S9 260 20 260zM300 60H20C9 60 0 51 0 40S9 20 20 20H300C311 20 320 29 320 40S311 60 300 60zM300 140H20C9 140 0 131 0 120S9 100 20 100H300C311 100 320 109 320 120S311 140 300 140zM300 220H20C9 220 0 211 0 200S9 180 20 180H300C311 180 320 189 320 200S311 220 300 220z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
List.defaultProps = {
    size: IconSize.STANDARD,
};
List.displayName = `Blueprint5.Icon.List`;
export default List;
//# sourceMappingURL=list.js.map