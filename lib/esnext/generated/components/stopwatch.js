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
export const Stopwatch = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "stopwatch", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 280C133.72583 280 80 226.2741700000001 80 160C80 93.72583 133.72583 40 200 40C266.2741700000001 40 320 93.72583 320 160L200 160L200 280zM180.0373994 318.7667840000001C180.012587 319.174675 180 319.5858676000001 180 320L180 360L140 360C128.954305 360 120 368.954305 120 380C120 391.045695 128.954305 400 140 400L260 400C271.045694 400 280 391.045695 280 380C280 368.954305 271.045694 360 260 360L220 360L220 320C220 319.5858676000001 219.987412 319.174675 219.9626 318.7667840000001C298.9069380000001 308.941431 360 241.6052402 360 160C360 71.63444 288.36556 0 200 0C111.63444 0 40 71.63444 40 160C40 241.6052402 101.0930626 308.941431 180.0373994 318.7667840000001z" : "M180 280L180 258.3408312000001C236.7542660000001 248.8192694 280 199.4599258 280 140C280 73.72583 226.2741700000001 20 160 20C93.72583 20 40 73.72583 40 140C40 199.4599258 83.2457332 248.8192694 140 258.3408312000001L140 280L120 280C108.954305 280 100 288.954305 100 300C100 311.045695 108.954305 320 120 320L200 320C211.045694 320 220 311.045695 220 300C220 288.954305 211.045694 280 200 280L180 280zM160 220C115.81722 220 80 184.18278 80 140C80 95.81722 115.81722 60 160 60C204.18278 60 240 95.81722 240 140L160 140L160 220z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Stopwatch.defaultProps = {
    size: IconSize.STANDARD,
};
Stopwatch.displayName = `Blueprint5.Icon.Stopwatch`;
export default Stopwatch;
//# sourceMappingURL=stopwatch.js.map