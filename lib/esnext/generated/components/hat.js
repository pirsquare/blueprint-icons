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
export const Hat = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "hat", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M370 140C392.354862 140 399.310486 129.312478 399.9501620000001 112.675622L400 110L400 100C400 61.093998 286.201512 40 200 40C113.7984854 40 -0.0000018482524 61.093998 -0.0000018482524 100L-0.0000018482524 110C-0.0000018482524 128.15787 6.46856372 140 29.9999982 140C47.8956428 140 99.9990908 116 199.9999982 116L208.222814 116.054526C302.868972 117.314814 352.601456 140 370 140zM270 340C304.505576 340 329.089196 285.42924 343.750858 176.28772C314.658946 171.018284 267.661194 161.89494 215.915702 160.255912L207.24975 160.053984L199.9999982 160C142.0778164 160 88.2953406 170.48412 56.2292176 176.27092C70.9112756 285.42924 95.4948382 340 130 340C172 340 166.5721132 290 200 290C233.427884 290 230 340 270 340z" : "M300 120C309.909058 120 318.660478 112.429816 319.860124 102.364698L320 100L320 89.90589C320 60.67968 249.51787 40.914208 165.8574354 40.030874L160 40C73.7984854 40 -0.0000018609992 60 -0.0000018609992 89.90589L-0.0000018609992 100C-0.0000018609992 111.22038 9.32870562 120 19.99999814 120C37.895641 120 79.9992712 100 159.9999982 100L167.62416 100.061092C242.6919 101.26951 282.6816360000001 120 300 120zM219.999998 280C242.592376 280 260.399782 236.9321216 273.422218 150.796365C252.155506 145.472496 220.54205 137.7672422 175.6792504 136.2608346L167.6241582 136.0610922L159.9999982 136C106.715904 136 70.2435724 144.8723222 46.538305 150.7982326C59.5996604 236.9321216 77.4068928 280 99.9992712 280C139.9985444 280 126.5721132 240 159.9999982 240C193.4278832 240 180.000725 280 219.999998 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Hat.defaultProps = {
    size: IconSize.STANDARD,
};
Hat.displayName = `Blueprint5.Icon.Hat`;
export default Hat;
//# sourceMappingURL=hat.js.map