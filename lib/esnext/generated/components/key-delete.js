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
export const KeyDelete = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "key-delete", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M394.2000000000001 214.2L274.2000000000001 334.2000000000001C270.6 337.8 265.6 340 260 340H20C9 340 0 331 0 320V80C0 69 9 60 20 60H260C265.6 60 270.6 62.2 274.2000000000001 65.8L394.2000000000001 185.8C397.8 189.4 400 194.4 400 200C400 205.6 397.8 210.6 394.2000000000001 214.2zM214.2 154.2C217.8 150.6 220 145.6 220 140C220 129 211 120 200 120C194.4 120 189.4 122.2 185.8 125.8L140 171.8L94.2 126C90.6 122.2 85.6 120 80 120C69 120 60 129 60 140C60 145.6 62.2 150.6 65.8 154.2L111.8 200L65.8 245.8C62.2 249.4 60 254.4 60 260C60 271 69 280 80 280C85.6 280 90.6 277.8 94.2 274.2L140 228.2L185.8 274C189.4 277.8 194.4 280 200 280C211 280 220 271 220 260C220 254.4 217.8 249.4 214.2 245.8L168.2 200L214.2 154.2z" : "M314.2000000000001 174.2L214.2 274.2C210.6 277.8 205.6 280 200 280H20C9 280 0 271 0 260V60C0 49 9 40 20 40H200C205.6 40 210.6 42.2 214.2 45.8L314.2000000000001 145.8C317.8 149.4 320 154.4 320 160C320 165.6 317.8 170.6 314.2000000000001 174.2zM174.2 134.2C177.8 130.6 180 125.6 180 120C180 109 171 100 160 100C154.4 100 149.4 102.2 145.8 105.8L120 131.8L94.2 106C90.6 102.2 85.6 100 80 100C69 100 60 109 60 120C60 125.6 62.2 130.6 65.8 134.2L91.8 160L65.8 185.8C62.2 189.4 60 194.4 60 200C60 211 69 220 80 220C85.6 220 90.6 217.8 94.2 214.2L120 188.2L145.8 214C149.4 217.8 154.4 220 160 220C171 220 180 211 180 200C180 194.4 177.8 189.4 174.2 185.8L148.2 160L174.2 134.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
KeyDelete.defaultProps = {
    size: IconSize.STANDARD,
};
KeyDelete.displayName = `Blueprint5.Icon.KeyDelete`;
export default KeyDelete;
//# sourceMappingURL=key-delete.js.map