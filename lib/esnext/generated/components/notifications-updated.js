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
export const NotificationsUpdated = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "notifications-updated", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 0C222 0 240 18 240 40L160 40C160 18 178 0 200 0zM240 356.6840968C233.599948 358.9820866 226.776472 360.2 219.8 360.2C186.6212272 360.2 160 333.2064478 160 300.2C160 284.0347284 166.3727932 269.0586642 177.5157288 257.9157288L236.915728 198.115728C248.040604 186.990854 263.218882 180.6 279.2000000000001 180.6C294.48142 180.6 309.028764 186.443486 320 196.681858L320 120C320 109 329 100 340 100C351 100 360 91 360 80C360 69 351 60 340 60L60 60C49 60 40 69 40 80C40 91 49 100 60 100C71 100 80 109 80 120L80 240C80 292.2 113.4 336.2 160 352.6L160 360C160 382 178 400 200 400C222 400 240 382 240 360L240 356.6840968zM265.2 226.4L205.8 286.2C202.2 289.8 200 294.6 200 300.2C200 311.2 208.8 320.2 219.8 320.2C225.2 320.2 230.2 318 233.8 314.4L279.4000000000001 268.8L364.8 354.2C368.4000000000001 357.8 373.4000000000001 360 378.8 360C389.8 360 398.8 351 398.8 340C398.8 334.4 396.6 329.4 392.8 326L293.2 226.4C289.6 222.8 284.6 220.6 279.2000000000001 220.6C273.8 220.6 268.8 222.8 265.2 226.4z" : "M160 0C182 0 200 18 200 40L120 40C120 18 138 0 160 0zM227.976586 273.345128L219.726904 265.095446C208.889204 274.7275318 194.788337 280.2 180 280.2C147.0015896 280.2 120 253.3846282 120 220.4C120 204.4188818 126.390854 189.2406036 137.5157288 178.1157288L177.5607218 138.2707836C188.6815092 127.1736428 203.840416 120.8 219.8 120.8C234.804476 120.8 249.10124 126.433603 260 136.3295492L260 120C260 109 269 100 280 100C291 100 300 91 300 80C300 69 291 60 280 60L40 60C29 60 20 69 20 80C20 91 29 100 40 100C51 100 60 109 60 120L60 200C60 248.6 94.6 289 140.4 298C140.4 298.8 140 299.2 140 300C140 311 149 320 160 320C171 320 180 311 180 300C180 299.2 179.6 298.8 179.6 298C198.0541022 294.373648 214.689874 285.6494756 227.976586 273.345128zM205.8 166.6L165.8 206.4C162.2 210 160 215 160 220.4C160 231.2 169 240.2 180 240.2C185.4 240.2 190.4 238 194 234.4L219.8 208.6L285.4 274.2C289 277.8 293.8 280 299.4000000000001 280C310.4 280 319.4000000000001 271.2 319.4000000000001 260.2C319.4000000000001 254.6 317.2 249.8 313.4 246.2L233.8 166.6C230.2 163 225.2 160.8 219.8 160.8C214.4 160.8 209.4 163 205.8 166.6z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
NotificationsUpdated.defaultProps = {
    size: IconSize.STANDARD,
};
NotificationsUpdated.displayName = `Blueprint5.Icon.NotificationsUpdated`;
export default NotificationsUpdated;
//# sourceMappingURL=notifications-updated.js.map