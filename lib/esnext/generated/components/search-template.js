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
export const SearchTemplate = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "search-template", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M260 240H100C89 240 80 231 80 220C80 209 89 200 100 200H260C271 200 280 209 280 220C280 231 271 240 260 240zM260 180H100C89 180 80 171 80 160C80 149 89 140 100 140H260C271 140 280 149 280 160C280 171 271 180 260 180zM260 300H100C89 300 80 291 80 280C80 269 89 260 100 260H260C271 260 280 269 280 280C280 291 271 300 260 300zM391.2 51.2L326.6 115.8C347.6 145.2 360 181.2 360 220C360 319.4 279.4 400 180 400S0 319.4 0 220C0 120.6 80.6 40 180 40C218.8 40 254.8 52.4 284.2000000000001 73.4L348.8 8.8C354.2000000000001 3.4 361.8 0 370 0C386.6 0 400 13.4 400 30C400 38.2 396.6 45.8 391.2 51.2zM180 80C102.6 80 40 142.6 40 220C40 297.4 102.6 360 180 360S320 297.4 320 220C320 142.6 257.4 80 180 80z" : "M311 51.4L257.6 104.8C271.6 126.6 279.8 152.4 279.8 180.2C279.8 257.6 217.2 320.2 139.8 320.2S-0.2 257.6 -0.2 180.2S62.4 40.2 139.8 40.2C167.6 40.2 193.4 48.4 215.2 62.4L268.6 9C274 3.6 281.6 0.2 289.8 0.2C306.4 0.2 319.8 13.6 319.8 30.2C319.8 38.4 316.4 46 311 51.4zM139.8 80.2C84.6 80.2 39.8 125 39.8 180.2S84.6 280.2 139.8 280.2S239.8 235.4 239.8 180.2S195 80.2 139.8 80.2zM189.8 200.2H89.8C84.2 200.2 79.8 195.8 79.8 190.2S84.2 180.2 89.8 180.2H189.8C195.4 180.2 199.8 184.6 199.8 190.2S195.4 200.2 189.8 200.2zM189.8 240.2H89.8C84.2 240.2 79.8 235.8 79.8 230.2S84.2 220.2 89.8 220.2H189.8C195.4 220.2 199.8 224.6 199.8 230.2S195.4 240.2 189.8 240.2zM189.8 160.2H89.8C84.2 160.2 79.8 155.8 79.8 150.2S84.2 140.2 89.8 140.2H189.8C195.4 140.2 199.8 144.6 199.8 150.2S195.4 160.2 189.8 160.2z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
SearchTemplate.defaultProps = {
    size: IconSize.STANDARD,
};
SearchTemplate.displayName = `Blueprint5.Icon.SearchTemplate`;
export default SearchTemplate;
//# sourceMappingURL=search-template.js.map