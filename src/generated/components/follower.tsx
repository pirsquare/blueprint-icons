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
import type { SVGIconProps } from "../../svgIconProps";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";

export const Follower: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="follower" ref={ref}  {...props}>
            <path
                d={isLarge ? "M230.8 81.6C201.2 94.6 205.2 102.6 204.2 113.4C204 114.8 204 116.4 204 118C214.2 127 222.4 139.4 227.8 153.6C227.8 153.6 228 154.4 228.2 154.6C229.4 157.6 230.4 161 231.2 164.2C238 165.6 242 173 243.4 179.8C245 182.6 248 189.4 247.4 197.2C246.3999999999999 207.2 242.4 211.8 238 213.6C238 214.2 238 214.8 238 215.4C238 228 236.8 246.4 234.6 258.4C234.2 261.8 233.3999999999999 265 232.4 268.4C228 283 218.8 296.4 206.6 305.6C193.8 315 176 320 160.2 320C144.2 320 126.4 315 113.8 305.4C101.6 296 92.6 282.8 88.2 268.2C87.2 264.8 86.4 261.6 86 258.2C83.6 246.2 82.4 228 82.4 215.4C82.4 214.8 82.4 214.4 82.4 213.8C77.8 212 73.6 207.4 72.6 197.2C71.8 189.4 75 182.6 76.6 179.8C78.2 172.8 82.2 165.4 89.2 164.2C90 160.8 91 157.6 92.2 154.6C92.2 154.4 92.4 154.2 92.4 154L92.6 153.8C98 139.4 106.6 126.8 117 117.8C117 116.4 116.8 115 116.8 113.6C115.8 102.8 118.8 94.8 89.2 81.8C59.6 68.8 15 54.8 6 33.8C-3.2 12.4 0.4 0 0.4 0H319.4C319.4 0 323 12.4 314 33.4C304.8 54.6 260.4 68.4 230.8 81.6zM393.8 334.2L333.8 394.2C330.4 397.8 325.4 400 319.8 400C308.8 400 299.8 391 299.8 380C299.8 374.4 302 369.4 305.6 365.8L331.6 340H260C249 340 240 331 240 320C240 309 249 300 260 300H331.6L305.8 274.2C302 270.6 299.8 265.6 299.8 260C299.8 249 308.8 240 319.8 240C325.4 240 330.4 242.2 334 245.8L394 305.8C397.6 309.4 399.8 314.4 399.8 320C399.8 325.6 397.6 330.6 393.8 334.2z" : "M187.4 66.2C163.4 76.8 166.6 83.2 165.8 92C165.6 93.2000000000001 165.6 94.4 165.6 95.8C173.8 103.2 180.6 113.2 185 124.6C185 124.6 185.2 125.2 185.2 125.4C186.2 128 187 130.6 187.6 133.2C193.2 134.4 196.4 140.4 197.6 145.8C198.8 148 201.4 153.6 200.8 159.8C200 167.8 196.8 171.6 193.2 173.2C193.2 173.6 193.2 174.2 193.2 174.6C193.2 185 192.2 199.8 190.4 209.4C190 212.6 189.4 215.2 188.6 218C185 230 177.6 240.6 167.8 248.2C157.4 256 143 260 130 260C117.2 260 102.8 256 92.6 248.2C82.6 240.6 75.2 229.8 71.6 218C70.8 215.4 70.2 212.6 69.8 210C68 200.2 67 185.2 67 175C67 174.6 67 174.2 67 173.8C63.2 172.4 59.8 168.6 59 160.2C58.4 154 61 148.4 62.2 146.2C63.4 140.6 66.8 134.4 72.4 133.4C73.2 130.6 74 128 75 125.6C75 125.4 75.2 125.2 75.2 125.2L75.2 125C79.6 113.2 86.6 103 95 95.8C95 94.6 94.8 93.4 94.8 92.4C94 83.6 96.4 77.2 72.4 66.6C48.4 56 12.2 44.6 4.8 27.6C-2.6 10 0.4 0 0.4 0H259.6C259.6 0 262.6 10 255.2 27.2C247.6 44.2 211.4 55.6 187.4 66.2zM314 274.2L274 314.2C270.4 317.8 265.4 320 259.8 320C248.8 320 239.8 311 239.8 300C239.8 294.4 242 289.4 245.6 285.8L251.6 280H199.8C188.8 280 179.8 271 179.8 260C179.8 249 188.8 240 199.8 240H251.4L245.6 234.2C242 230.6 239.8 225.6 239.8 220C239.8 209 248.8 200 259.8 200C265.4 200 270.4 202.2 274 205.8L314 245.8C317.6 249.4 319.8 254.4 319.8 260C319.8 265.6 317.6 270.6 314 274.2z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Follower.defaultProps = {
    size: IconSize.STANDARD,
};
Follower.displayName = `Blueprint5.Icon.Follower`;
export default Follower;
