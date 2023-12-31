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
export const AddLocation = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "add-location", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 400C211.045694 400 220 391.045695 220 380C220 368.954305 211.045694 360 200 360C111.63444 360 40 288.36556 40 200C40 111.63444 111.63444 40 200 40C288.36556 40 360 111.63444 360 200C360 211.045695 368.954306 220 380 220C391.0456940000001 220 400 211.045695 400 200C400 89.54305 310.45695 0 200 0C89.54305 0 0 89.54305 0 200C0 310.45695 89.54305 400 200 400zM200 280C244.18278 280 280 244.18278 280 200C280 155.81722 244.18278 120 200 120C155.81722 120 120 155.81722 120 200C120 244.18278 155.81722 280 200 280zM320 400C332 400 340 392 340 380L340 380L340 340L380 340C392 340 400 332 400 320C400 308 392 300 380 300L380 300L340 300L340 260C340 248 332 240 320 240C308 240 300 248 300 260L300 260L300 300L260 300C248 300 240 308 240 320C240 330 248 340 260 340L260 340L300 340L300 380C300 392 308 400 320 400z" : "M160 320C171.045695 320 180 311.045695 180 300C180 288.954305 171.045695 280 160 280C93.72583 280 40 226.27417 40 160C40 93.72583 93.72583 40 160 40C226.2741700000001 40 280 93.72583 280 160C280 171.045695 288.9543060000001 180 300 180C311.045694 180 320 171.045695 320 160C320 71.63444 248.36556 0 160 0C71.63444 0 0 71.63444 0 160C0 248.36556 71.63444 320 160 320zM160 220C193.137085 220 220 193.137085 220 160C220 126.862915 193.137085 100 160 100C126.862915 100 100 126.862915 100 160C100 193.137085 126.862915 220 160 220zM260 320C271.045694 320 280 311.045695 280 300L280 280.02L300 280C311.045694 280 320 271.045695 320 260C320 248.954305 311.045694 240 300 240L280 240L280 220C280 208.954305 271.045694 200 260 200C248.954306 200 240 208.954305 240 220L240 240L220 240C208.954306 240 200 248.954305 200 260C200 271.045695 208.954306 280 220 280L240 280L240 300C240 311.045695 248.954306 320 260 320z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
AddLocation.defaultProps = {
    size: IconSize.STANDARD,
};
AddLocation.displayName = `Blueprint5.Icon.AddLocation`;
export default AddLocation;
//# sourceMappingURL=add-location.js.map