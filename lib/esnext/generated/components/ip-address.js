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
export const IpAddress = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "ip-address", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M120 326.8C120 286.2 200 180 200 180S280 286.2 280 326.8C279.8 367.2 244.2 400 200 400S120 367.2 120 326.8zM160 320C160 342 178 360 200 360S240 342 240 320S222 280 200 280S160 298 160 320zM280 130V140H200V120H260V80H220V60H270H280V130zM60 160H340C351 160 360 151 360 140V20C360 9 351 0 340 0H60C49 0 40 9 40 20V140L40 140C40 151 49 160 60 160L60 160zM140 140V20H160V140H140zM200 120V20H220V120H200z" : "M100 266.8C100 237.2 160 160 160 160S220 237.2 220 266.8C219.8 296 193.2 320 160 320S100 296 100 266.8zM140 260C140 271 149 280 160 280S180 271 180 260S171 240 160 240S140 249 140 260zM210 120H170H160V20H180V100H200V80H180V60H210H220V120H210zM40 140H280L280 140C291 140 300 131 300 120V20L300 20C300 9 291 0 280 0H40L40 0C29 0 20 9 20 20V120L20 120C20 131 29 140 40 140L40 140zM120 120V20H140V120H120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
IpAddress.defaultProps = {
    size: IconSize.STANDARD,
};
IpAddress.displayName = `Blueprint5.Icon.IpAddress`;
export default IpAddress;
//# sourceMappingURL=ip-address.js.map