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
export const FolderSharedOpen = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "folder-shared-open", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M61.4 247.4C64.4 254.8 71.6 260 80 260H235.2L246 270.8C230.2 281.6 220 299.6 220 320H168.2L134.2 354.2C130.6 357.8 125.6 360 120 360H20C9 360 0 351 0 340V93.8L61.4 247.4L61.4 247.4zM330.8 186L302.4 157.6C291.6 146.8 276.6 140 260 140C226.8 140 200 166.8 200 200C200 215.4 206 229.4 215.6 240H100C91.4 240 84.2 234.6 81.4 227L81.2 227L21.2 67L21.4 67C20.6 64.8 20 62.4 20 60C20 49 29 40 40 40H320C328.6 40 335.8 45.4 338.6 53L338.8 53L379.0000000000001 160.2C359 160.4 341.4 170.6 330.8 186zM380 340H280C269 340 260 331 260 320S269 300 280 300H331.8L246 214.2C242.2 210.6 240 205.6 240 200C240 189 249 180 260 180C265.6 180 270.6 182.2 274.2000000000001 185.8L360 271.8V220C360 209 369 200 380 200S400 209 400 220V320C400 331 391 340 380 340z" : "M260.4 115.6L242.4 97.6L242.2 97.8C231.4 86.8 216.6 80 200 80C166.8 80 140 106.8 140 140C140 155.4 146 169.4 155.6 180H80C71.2 180 63.8 174.2 61.2 166.2L61.2 166.2L21.2 46.2L21.2 46.2C20.4 44.4 20 42.2 20 40C20 29 29 20 40 20H260C268.8 20 276.2 25.8 278.8 33.8L278.8 33.8L301 100.2C300.8 100.2 300.4 100 300 100C284.6 100 271 106 260.4 115.6zM41.2 186.2C44 194.2 51.2 200 60 200H175.2L175.4 200.2C166 210.8 160 224.6 160 240H128.2L94.2 274.2C90.6 277.8 85.6 280 80 280H20C9 280 0 271 0 260V63.2L41 186.2L41.2 186.2zM300 260H220C209 260 200 251 200 240S209 220 220 220H251.8L185.8 154.2C182.2 150.6 180 145.6 180 140C180 129 189 120 200 120C205.6 120 210.6 122.2 214.2 125.8L280 191.8V160C280 149 289 140 300 140S320 149 320 160V240C320 251 311 260 300 260z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
FolderSharedOpen.defaultProps = {
    size: IconSize.STANDARD,
};
FolderSharedOpen.displayName = `Blueprint5.Icon.FolderSharedOpen`;
export default FolderSharedOpen;
//# sourceMappingURL=folder-shared-open.js.map