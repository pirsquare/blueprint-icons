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
export const VerticalInbetween = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "vertical-inbetween", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M0 400H400V380C400 368.9544 391.046 360 380 360H20C8.9543 360 0 368.9544 0 380V400zM125.8518 174.148C118.0494 166.346 118.0494 153.696 125.8518 145.894L185.0996 86.646C185.3416 86.376 185.5924 86.112 185.8518 85.852C189.7582 81.946 194.88 79.994 200 80C205.12 79.994 210.242 81.946 214.148 85.852C214.408 86.112 214.658 86.376 214.9 86.646L274.148 145.894C281.95 153.696 281.95 166.346 274.148 174.148C266.346 181.95 253.696 181.95 245.894 174.148L200 128.254L154.1066 174.148C146.3042 181.95 133.6542 181.95 125.8518 174.148zM125.8518 254.1066C118.0494 246.3042 118.0494 233.6542 125.8518 225.8518000000001C133.6542 218.0494 146.3042 218.0494 154.1066 225.8518000000001L200 271.7452L245.894 225.8518000000001C253.696 218.0494 266.346 218.0494 274.148 225.8518000000001C281.95 233.6542 281.95 246.3042 274.148 254.1066L214.9 313.3544C214.658 313.6242 214.408 313.8888 214.148 314.1482C210.242 318.0546 205.12 320.0052 200 320C194.88 320.0052 189.7582 318.0546 185.8518 314.1482C185.5924 313.8888 185.3416 313.6242 185.0996 313.3544L125.8518 254.1066zM400 20V0H0V20C0 31.046 8.9543 40 20 40H380C391.046 40 400 31.046 400 20z" : "M320 320H0V300C0 288.9544 8.9543 280 20 280H300C311.046 280 320 288.9544 320 300V320zM0 20V0H320V20C320 31.046 311.046 40 300 40H20C8.9543 40 0 31.046 0 20zM174.1422 254.1422C166.3316 261.9526 153.6684 261.9526 145.8578 254.1422L105.8578 214.1422C98.0474 206.3316 98.0474 193.6684 105.8578 185.8578C113.6684 178.0474 126.3316 178.0474 134.1422 185.8578L160 211.7158L185.8578 185.8578C193.6684 178.0474 206.332 178.0474 214.142 185.8578C221.952 193.6684 221.952 206.3316 214.142 214.1422L174.1422 254.1422zM134.1422 134.1422C126.3316 141.9526 113.6684 141.9526 105.8578 134.1422C98.0474 126.3316 98.0474 113.668 105.8578 105.858L145.8578 65.858C153.6684 58.048 166.3316 58.048 174.1422 65.858L214.142 105.858C221.952 113.668 221.952 126.3316 214.142 134.1422C206.332 141.9526 193.6684 141.9526 185.8578 134.1422L160 108.284L134.1422 134.1422z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
VerticalInbetween.defaultProps = {
    size: IconSize.STANDARD,
};
VerticalInbetween.displayName = `Blueprint5.Icon.VerticalInbetween`;
export default VerticalInbetween;
//# sourceMappingURL=vertical-inbetween.js.map