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
export const Envelope = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "envelope", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M0 319.8V81.6L125.4 207L0 319.8zM378.2 340.4H21.8L200 180.6L378.2 340.4zM274.6 207.2L400 81.6V319.8L274.6 207.2zM210 149.2L210 149.2C207.4 146.8000000000001 203.8 145.4 200 145.4S192.6 146.8000000000001 190 149.2L190 149.2L147.8 187L21.2 60.4000000000001H378.8L252.2 187.0000000000001L210 149.2z" : "M0 258.8V61.2L98.8 160L0 258.8zM298.8 280H21.2L160 141.2L298.8 280zM170.6 109.4C167.8 106.6 164.2 105 160 105S152.2 106.6 149.4 109.4L120 138.8L21.2 40H298.8L200 138.8L170.6 109.4zM221.2 160L320 61.2V258.8L221.2 160z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Envelope.defaultProps = {
    size: IconSize.STANDARD,
};
Envelope.displayName = `Blueprint5.Icon.Envelope`;
export default Envelope;
//# sourceMappingURL=envelope.js.map