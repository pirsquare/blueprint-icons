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
export const Time = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "time", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M220 208.2V320C220 331 211 340 200 340S180 331 180 320V200C180 194.4 182.2 189.4 185.8 185.8L245.8 125.8C249.4 122.2 254.4 120 260 120C271 120 280 129 280 140C280 145.6 277.8 150.6 274.2000000000001 154.2L220 208.2zM200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40z" : "M160 320C71.6 320 0 248.4 0 160S71.6 0 160 0S320 71.6 320 160S248.4 320 160 320zM160 40C93.8 40 40 93.8 40 160S93.8 280 160 280S280 226.2 280 160S226.2 40 160 40zM180 168.2V240C180 251 171 260 160 260S140 251 140 240V160C140 154.4 142.2 149.4 145.8 145.8L185.8 105.8C189.4 102.2 194.4 100 200 100C211 100 220 109 220 120C220 125.6 217.8 130.6 214.2 134.2L180 168.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Time.defaultProps = {
    size: IconSize.STANDARD,
};
Time.displayName = `Blueprint5.Icon.Time`;
export default Time;
//# sourceMappingURL=time.js.map