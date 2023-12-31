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
export const Compressed = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "compressed", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M397.8 268.8L397.8 268.8L338 388.8L337.8 388.8C334.4 395.4 327.8 400 320 400H80C72.2 400 65.6 395.4 62.2 388.8L62 388.8L2 268.8L2.2 268.8C1 266.2 0 263.2 0 260V20C0 9 9 0 20 0H380C391 0 400 9 400 20V260C400 263.2 399 266.2 397.8 268.8zM220 360H307.6L347.6 280H220V360zM92.4 360H180V280H52.4L92.4 360zM360 40H40V240H180V148.2L134.2 194C130.6 197.8 125.6 200 120 200C109 200 100 191 100 180C100 174.4 102.2 169.4 105.8 165.8L185.8 85.8C189.4 82.2 194.4 80 200 80S210.6 82.2 214.2 85.8L294.2000000000001 165.8C297.8 169.4 300 174.4 300 180C300 191 291 200 280 200C274.4000000000001 200 269.4000000000001 197.8 265.8 194.2L220 148.2V240H360V40z" : "M318.6 207.4L318.6 207.4L318.6 207.8C318.6 207.8 318.6 207.8 318.6 207.8L278.8 307.4L278.8 307.4C275.6 314.8 268.4 320 260 320H60C51.6 320 44.4 314.8 41.4 307.4L41.4 307.4L1.6 207.8C1.6 207.8 1.6 207.8 1.6 207.8L1.4 207.4L1.4 207.4C0.6 205.2 0 202.6 0 200V20C0 9 9 0 20 0H300C311 0 320 9 320 20V200C320 202.6 319.4000000000001 205.2 318.6 207.4zM180 280H246.4L270.4 220H180V280zM73.6 280H140V220H49.6L73.6 280zM280 40H40V180H140V128.2L114.2 154.2C110.6 157.8 105.6 160 100 160C89 160 80 151 80 140C80 134.4 82.2 129.4 85.8 125.8L145.8 65.8C149.4 62.2 154.4 60 160 60S170.6 62.2 174.2 65.8L234.2 125.8C237.8 129.4 240 134.4 240 140C240 151 231 160 220 160C214.4 160 209.4 157.8 205.8 154.2L180 128.2V180H280V40z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Compressed.defaultProps = {
    size: IconSize.STANDARD,
};
Compressed.displayName = `Blueprint5.Icon.Compressed`;
export default Compressed;
//# sourceMappingURL=compressed.js.map