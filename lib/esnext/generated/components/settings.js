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
export const Settings = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "settings", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M80 380C80 391 71 400 60 400S40 391 40 380V280H80V380zM40 20C40 9 49 0 60 0S80 9 80 20V140H40V20zM220 380C220 391 211 400 200 400S180 391 180 380V220H220V380zM360 380C360 391 351 400 340 400S320 391 320 380V320H360V380zM180 20C180 9 189 0 200 0S220 9 220 20V80H180V20zM360 300H320C309 300 300 291 300 280V220C300 209 309 200 320 200H360C371 200 380 209 380 220V280C380 291 371 300 360 300zM320 20C320 9 329 0 340 0S360 9 360 20V180H320V20zM80 260H40C29 260 20 251 20 240V180C20 169 29 160 40 160H80C91 160 100 169 100 180V240C100 251 91 260 80 260zM220 200H180C169 200 160 191 160 180V120C160 109 169 100 180 100H220C231 100 240 109 240 120V180C240 191 231 200 220 200z" : "M60 300C60 311 51 320 40 320S20 311 20 300V240H60V300zM60 220H20C9 220 0 211 0 200V160C0 149 9 140 20 140H60C71 140 80 149 80 160V200C80 211 71 220 60 220zM300 300C300 311 291 320 280 320S260 311 260 300V260H300V300zM180 300C180 311 171 320 160 320S140 311 140 300V180H180V300zM20 20C20 9 29 0 40 0S60 9 60 20V120H20V20zM300 240H260C249 240 240 231 240 220V180C240 169 249 160 260 160H300C311 160 320 169 320 180V220C320 231 311 240 300 240zM260 20C260 9 269 0 280 0S300 9 300 20V140H260V20zM180 160H140C129 160 120 151 120 140V100C120 89 129 80 140 80H180C191 80 200 89 200 100V140C200 151 191 160 180 160zM140 20C140 9 149 0 160 0S180 9 180 20V60H140V20z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Settings.defaultProps = {
    size: IconSize.STANDARD,
};
Settings.displayName = `Blueprint5.Icon.Settings`;
export default Settings;
//# sourceMappingURL=settings.js.map