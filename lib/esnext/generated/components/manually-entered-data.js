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
export const ManuallyEnteredData = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "manually-entered-data", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M20 160H106.8L146.8 200H20C9 200 0 191 0 180C0 169 9 160 20 160zM355.4 238.8L388.4 271.8C395.6 279 400 289 400 300C400 322 382 340 360 340C349 340 339 335.6 331.8 328.2L298.8 295.2L355.4 238.8zM20 320H266.8L306.8 360H20C9 360 0 351 0 340C0 329 9 320 20 320zM0 100C0 89 9 80 20 80H26.8L66.8 120H20C9 120 0 111 0 100zM20 240H186.8L226.8 280H20C9 280 0 271 0 260C0 249 9 240 20 240zM380 200H373.2L333.2 160H380C391 160 400 169 400 180C400 191 391 200 380 200zM380 120H293.2L253.2 80H380C391 80 400 89 400 100C400 111 391 120 380 120zM80 20L168.2 51.8L112 107.6L80 20zM284.6 281.2L131.6 128.2L188.2 71.6L341.2000000000001 224.6L284.6 281.2z" : "M20 160H95.2L135.2 200H20C9 200 0 191 0 180C0 169 9 160 20 160zM309.8 240.2C316 246.6 320 255.4 320 265C320 284.4 304.4000000000001 300 285 300C275.4 300 266.6 296 260.2 289.8L231.4 261L280.8 211.6L309.8 240.2zM20 240H175.2L215.2 280H20C9 280 0 271 0 260C0 249 9 240 20 240zM20 120C9 120 0 111 0 100C0 90.4 7 82.8 16 80.8L55.2 120H20zM219 248.6L85.2 114.8L134.6 65.4L268.4 199.2L219 248.6zM304 199.2L264.8 160H300C311 160 320 169 320 180C320 189.6 313 197.2 304 199.2zM40 20L117.2 47.8L68 96.6L40 20zM300 120H224.8L184.8 80H300C311 80 320 89 320 100C320 111 311 120 300 120z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
ManuallyEnteredData.defaultProps = {
    size: IconSize.STANDARD,
};
ManuallyEnteredData.displayName = `Blueprint5.Icon.ManuallyEnteredData`;
export default ManuallyEnteredData;
//# sourceMappingURL=manually-entered-data.js.map