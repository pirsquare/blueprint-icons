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
export const Archive = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "archive", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M328.676192 400C335.70145 400 342.211586 396.31402332 345.82605 390.2899151L400 300L400 20C400 8.954306 391.0456940000001 0 380 0L20 0C8.954305 0 0 8.954306 0 20L0 300L54.173949 390.2899151C57.788414 396.31402332 64.2985506 400 71.3238076 400L328.676192 400zM200 240C189 240 180 231 180 220L180 220L180 128.4L154.2 154.2L152.573761 155.66589C149.1591836 158.436734 144.8 160.2 140 160.2C129 160.2 120 151.2 120 140.2C120 134.6 122.2 129.6 125.8 126L125.8 126L185.8 66L187.712963 64.32037C191.0833334 61.727778 195.3333334 60.2000000000001 200 60.2000000000001C205.6 60.2000000000001 210.6 62.4 214.2 66L214.2 66L274.2000000000001 126L275.87963 127.912962C278.472222 131.283334 280 135.533334 280 140.2C280 151.2 271 160.2 260 160.2C254.4 160.2 249.4 158 245.8 154.4L245.8 154.4L220 128.4L220 220L219.864796 222.3239796C218.704082 232.239796 210.214286 240 200 240zM320 360L80 360L40 299.9675252L360 299.9675252L320 360z" : "M267.63932 320C275.214762 320 282.140024 315.71995248 285.527864 308.9442719L320 240L320 20C320 8.954306 311.045694 0 300 0L20 0C8.954305 0 0 8.954306 0 20L0 240L34.472136 308.9442719C37.8599762 315.71995248 44.7852386 320 52.3606798 320L267.63932 320zM160 200C149 200 140 191 140 180L140 180L140 128.2L134.2 134L132.573761 135.528863C129.1591836 138.3836734 124.8 140 120 140C109 140 100 131 100 120C100 114.4 102.2 109.4 105.8 105.8L105.8 105.8L145.8 65.8L147.712963 64.12037C151.0833334 61.527778 155.3333334 60 160 60C165.6 60 170.6 62.2 174.2 65.8L174.2 65.8L214.2 105.8L215.87963 107.712962C218.472222 111.083334 220 115.333334 220 120C220 131 211 140 200 140C194.4 140 189.4 137.8 185.8 134.2L185.8 134.2L180 128.2L180 180L179.864796 182.3239796C178.7040816 192.239796 170.2142858 200 160 200zM260 280L60 280L40 240L280 240L260 280z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Archive.defaultProps = {
    size: IconSize.STANDARD,
};
Archive.displayName = `Blueprint5.Icon.Archive`;
export default Archive;
//# sourceMappingURL=archive.js.map