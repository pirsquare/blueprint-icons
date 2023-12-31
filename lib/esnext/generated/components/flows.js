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
export const Flows = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "flows", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M350 241.4C325.8 241.4 305.6 224.2 301 201.4H255L174.8 281.4L159.8 266.4L225 201.4H99C94.4 224.2 74.2 241.4 50 241.4C22.4 241.4 0 219 0 191.4S22.4 141.4 50 141.4C74.2 141.4 94.4 158.6 99 181.4H225L159.8 116.4L174.8 101.4L255 181.4H301C305.6 158.6 325.8 141.4 350 141.4C377.6 141.4 400 163.8 400 191.4S377.6 241.4 350 241.4z" : "M270 200C245.8 200 225.6 182.8 221 160H195L114.8 240L99.8 225L165 160H99C94.4 182.8 74.2 200 50 200C22.4 200 0 177.6 0 150C0 122.4 22.4 100 50 100C74.2 100 94.4 117.2 99 140H165L99.8 75L114.8 60L195 140H221C225.6 117.2 245.8 100 270 100C297.6 100 320 122.4 320 150C320 177.6 297.6 200 270 200z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Flows.defaultProps = {
    size: IconSize.STANDARD,
};
Flows.displayName = `Blueprint5.Icon.Flows`;
export default Flows;
//# sourceMappingURL=flows.js.map