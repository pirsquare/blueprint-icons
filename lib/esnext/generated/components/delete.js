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
export const Delete = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "delete", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M300 280C300 291 291 300 280 300C274.4000000000001 300 269.4000000000001 297.8 265.8 294.2L200 228.2L134.2 294.2C130.6 297.8 125.6 300 120 300C109 300 100 291 100 280C100 274.4 102.2 269.4 105.8 265.8L171.8 200L106 134.2000000000001C102.2 130.6 100 125.6 100 120C100 109 109 100 120 100C125.6 100 130.6 102.2 134.2 105.8L200 171.8L265.8 106C269.4000000000001 102.2 274.4000000000001 100 280 100C291 100 300 109 300 120C300 125.6 297.8 130.6 294.2000000000001 134.2000000000001L228.2 200L294 265.8C297.8 269.4 300 274.4 300 280zM200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM200 40C111.6 40 40 111.6 40 200S111.6 360 200 360S360 288.4 360 200S288.4 40 200 40z" : "M239.8 220.2C239.8 231.2 230.8 240.2 219.8 240.2C214.2 240.2 209.2 238 205.6 234.4L159.8 188.4L114 234.2C110.4 238 105.4 240.2 99.8 240.2C88.8 240.2 79.8 231.2 79.8 220.2C79.8 214.6 82 209.6 85.6 206L131.4 160.2L85.6 114.4C82 110.8 79.8 105.8 79.8 100.2C79.8 89.1999999999999 88.8 80.2 99.8 80.2C105.4 80.2 110.4 82.4 114 85.9999999999999L159.8 131.7999999999999L205.6 85.9999999999999C209.2 82.4 214.2 80.2 219.8000000000001 80.2C230.8000000000001 80.2 239.8000000000001 89.1999999999999 239.8000000000001 100.2C239.8000000000001 105.8 237.6000000000001 110.8 234.0000000000001 114.4L188.2 160.2L234 206C237.6 209.6 239.8 214.6 239.8 220.2zM159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2S248.2 320.2 159.8 320.2zM159.8 40.2C93.6 40.2 39.8 94 39.8 160.2S93.6 280.2 159.8 280.2S279.8 226.4 279.8 160.2S226.2 40.2 159.8 40.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Delete.defaultProps = {
    size: IconSize.STANDARD,
};
Delete.displayName = `Blueprint5.Icon.Delete`;
export default Delete;
//# sourceMappingURL=delete.js.map