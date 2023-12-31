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
export const Shapes = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "shapes", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M157.5864028 177.61821C166.5515942 182.546628 177.9903592 179.580442 183.1355996 170.993044L183.1355996 170.993044L257.516596 46.851302C259.1437880000001 44.13552 260 41.05887 260 37.92761C260 28.026464 251.620418 20 241.28368 20L241.28368 20L98.7201054 20C95.6838246 20 92.693128 20.707562 90.0060144 22.061646C80.8579836 26.671498 77.343471 37.511958 82.1561306 46.274488L82.1561306 46.274488L150.3387098 170.41623C151.9922902 173.426946 154.506055 175.924856 157.5864028 177.61821zM300 300C344.18278 300 380 264.18278 380 220C380 175.81722 344.18278 140 300 140C255.81722 140 220 175.81722 220 220C220 264.18278 255.81722 300 300 300zM160 380C171.045695 380 180 371.045695 180 360L180 240C180 228.954305 171.045695 220 160 220L40 220C28.954305 220 20 228.954305 20 240L20 360C20 371.045695 28.954305 380 40 380L160 380z" : "M118.4121872 157.2293096C127.2091482 162.8527168 138.526284 159.6447622 143.6897176 150.0641428L143.6897176 150.0641428L197.4589014 50.296792C199.1227852 47.209498 200 43.694534 200 40.114714C200 29.005664 191.7309654 20 181.5305946 20L181.5305946 20L78.4729922 20C75.4185326 20 72.4117548 20.825028 69.7219222 22.4012C60.7392232 27.664826 57.3752944 39.86245 62.208377 49.645354L62.208377 49.645354L111.4967954 149.4127042C113.1006618 152.6591768 115.4929012 155.3631728 118.4121872 157.2293096zM240 240C273.137084 240 300 213.137085 300 180C300 146.862915 273.137084 120 240 120C206.862916 120 180 146.862915 180 180C180 213.137085 206.862916 240 240 240zM120 300C131.045695 300 140 291.045695 140 280L140 200C140 188.954305 131.045695 180 120 180L40 180C28.954305 180 20 188.954305 20 200L20 280C20 291.045695 28.954305 300 40 300L120 300z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Shapes.defaultProps = {
    size: IconSize.STANDARD,
};
Shapes.displayName = `Blueprint5.Icon.Shapes`;
export default Shapes;
//# sourceMappingURL=shapes.js.map