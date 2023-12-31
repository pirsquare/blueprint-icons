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
export const HeaderOne = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "header-one", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M40 180V80C40 68.954 31.0456 60 20 60C8.9543 60 0 68.954 0 80V180V220V340C0 351.0456 8.9543 360 20 360C31.0456 360 40 351.0456 40 340V220H180V340C180 351.0456 188.9542 360 200 360C211.046 360 220 351.0456 220 340V220V180V80C220 68.954 211.046 60 200 60C188.9542 60 180 68.954 180 80V180H40zM354.8 200C353.8 193.8 351.4 188.6 348 184.6C344.6 180.4 340.4 176.8 335.2000000000001 174.4C330.2000000000001 171.8 324.8 169.8 318.6 168.6C312.6 167.6 306.4 167 300 167V142.2H350V0H380V200H354.8z" : "M281.2 160C280.4 155.4 278.8 151.2 276.2 147.8C273.6 144.4 270.4 141.8 266.6 139.6C263 137.4 258.8 136 254.2 135C249.6 134.2 245 133.6 240 133.6V113H274.8V0H300V160H281.2zM140 280C128.8 280 120 271 120 260V180H40V260C40 271 31 280 20 280C8.8 280 0 271 0 260V60C0 49 9 40 20 40C31.2 40 40 49 40 60V140H120V60C120 49 129 40 140 40C151.2 40 160 49 160 60V260C160 270.8 151 280 140 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
HeaderOne.defaultProps = {
    size: IconSize.STANDARD,
};
HeaderOne.displayName = `Blueprint5.Icon.HeaderOne`;
export default HeaderOne;
//# sourceMappingURL=header-one.js.map