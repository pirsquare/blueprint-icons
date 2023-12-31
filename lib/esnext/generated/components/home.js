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
export const Home = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "home", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M40 160V20C40 9 49 0 60 0H160V140H240V0H340C351 0 360 9 360 20V160L200 320L40 160zM394.2000000000001 214.2L340 268.2V340C340 351 331 360 320 360S300 351 300 340V308.2L214.2 394C210.6 397.8 205.6 400 200 400S189.4 397.8 185.8 394.2L5.8 214.2C2.2 210.6 0 205.6 0 200C0 189 9 180 20 180C25.6 180 30.6 182.2 34.2 185.8L200 351.8L365.8 186C369.4 182.2 374.4 180 380 180C391 180 400 189 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2z" : "M40 120V100C40 100 40 91.4 40 80V60.2C40 40.2 40 20 40 20C40 9 49 0 60 0H120V100H200V0H260C271 0 280 9 280 20V120L160 240L40 120zM314.2000000000001 174.2L280 208.2V280C280 291 271 300 260 300S240 291 240 280V248.2L174.2 314.2C170.6 317.8 165.6 320 160 320S149.4 317.8 145.8 314.2L5.8 174.2C2.2 170.6 0 165.6 0 160C0 149 9 140 20 140C25.6 140 30.6 142.2 34.2 145.8L160 271.8L285.8 146C289.4000000000001 142.2 294.4000000000001 140 300 140C311 140 320 149 320 160C320 165.6 317.8 170.6 314.2000000000001 174.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Home.defaultProps = {
    size: IconSize.STANDARD,
};
Home.displayName = `Blueprint5.Icon.Home`;
export default Home;
//# sourceMappingURL=home.js.map