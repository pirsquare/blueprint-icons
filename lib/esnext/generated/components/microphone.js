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
export const Microphone = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "microphone", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M200 400C155.8172 400 120 364.1828 120 320V220C120 175.818 155.8172 140 200 140C244.182 140 280 175.818 280 220V320C280 364.1828 244.182 400 200 400zM80 260C91.0456 260 100 251.0456 100 240V220C100 164.772 144.7716 120 200 120C255.228 120 300 164.772 300 220V240C300 251.0456 308.954 260 320 260C331.046 260 340 251.0456 340 240V220C340 149.47 287.846 91.122 220 81.418V40H240C251.046 40 260 31.046 260 20C260 8.954 251.046 0 240 0H160C148.9544 0 140 8.954 140 20C140 31.046 148.9544 40 160 40H180V81.418C112.1542 91.122 60 149.47 60 220V240C60 251.0456 68.9544 260 80 260z" : "M160 320C126.863 320 100 293.137 100 260V180C100 146.863 126.863 120 160 120C193.137 120 220 146.863 220 180V260C220 293.137 193.137 320 160 320zM60 220C71.0456 220 80 211.0456 80 200V160C80 126.863 106.863 100 140 100H180C213.138 100 240 126.863 240 160V200C240 211.0456 248.954 220 260 220C271.046 220 280 211.0456 280 200V160C280 104.772 235.228 60 180 60L180 40H200C211.046 40 220 31.046 220 20C220 8.954 211.046 0 200 0H120C108.9544 0 100 8.954 100 20C100 31.046 108.9544 40 120 40H140L140 60C84.7716 60 40 104.772 40 160V200C40 211.0456 48.9544 220 60 220z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Microphone.defaultProps = {
    size: IconSize.STANDARD,
};
Microphone.displayName = `Blueprint5.Icon.Microphone`;
export default Microphone;
//# sourceMappingURL=microphone.js.map