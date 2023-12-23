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

export const Following: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="following" ref={ref}  {...props}>
            <path
                d={isLarge ? "M231 81.6C201.4 94.6 205.4 102.6 204.4 113.4C204.2 114.8 204.2 116.4 204.2 118C214.4 127 222.6 139.4 228 153.6C228 153.6 228.2 154.4 228.4 154.6C229.6 157.6 230.6 161 231.4 164.2C238.2 165.6 242.2 173 243.6 179.8C245.2 182.6 248.2 189.4 247.6 197.2C246.6 207.2 242.6 211.8 238.2 213.6C238.2 214.2 238.2 214.8 238.2 215.4C238.2 228 237 246.4 234.8 258.4C234.4 261.8 233.6 265 232.6 268.4C228.2 283 219 296.4 206.8 305.6C194 315 176.2 320 160.4 320C144.6 320 126.8 315 114.2 305.4C102 296 92.8 282.8 88.4 268.2C87.4 265 86.6 261.6 86.2 258.2C83.8 246.2 82.6 228 82.6 215.4C82.6 214.8 82.6 214.4 82.6 213.8C78 212 73.8 207.4 73 197.2C72.2 189.4 75.4 182.6 77 179.8C78.6 172.8 82.6 165.4 89.6 164.2C90.4 160.8 91.4 157.6 92.6 154.6C92.6 154.4 92.8 154.2 92.8 154L93 153.8C98.4 139.4 107 126.8 117.4 117.8C117.4 116.4 117.2 115 117.2 113.6C116.2 102.8 119.2 94.8 89.6 81.8C60 68.8 15.4 54.8 6.4 33.8C-3 12.4 0.8 0 0.8 0H319.8C319.8 0 323.4 12.4 314.4 33.4C305.2 54.6 260.6 68.4 231 81.6zM380 340H308.4L334.2000000000001 365.8C337.8 369.4 340 374.4 340 380C340 391 331 400 320 400C314.4000000000001 400 309.4000000000001 397.8 305.8 394.2L245.8 334.2C242.4 330.6 240.2 325.6 240.2 320C240.2 314.4 242.4 309.4 246 305.8L306 245.8C309.6 242.2 314.6 240 320 240C331 240 340 249 340 260C340 265.6 337.8 270.6 334.2000000000001 274.2L308.4 300H380C391 300 400 309 400 320C400 331 391 340 380 340z" : "M187.4 66.2C163.4 76.8 166.6 83.2 165.8 92C165.6 93.2000000000001 165.6 94.4 165.6 95.8C173.8 103.2 180.6 113.2 185 124.6C185 124.6 185.2 125.2 185.2 125.4C186.2 128 187 130.6 187.6 133.2C193.2 134.4 196.4 140.4 197.6 145.8C198.8 148 201.4 153.6 200.8 159.8C200 167.8 196.8 171.6 193.2 173.2C193.2 173.6 193.2 174.2 193.2 174.6C193.2 185 192.2 199.8 190.4 209.4C190 212.6 189.4 215.2 188.6 218C185 230 177.6 240.6 167.8 248.2C157.4 256 143 260 130 260C117.2 260 102.8 256 92.6 248.2C82.6 240.6 75.2 229.8 71.6 218C70.8 215.4 70.2 212.6 69.8 210C68 200.2 67 185.2 67 175C67 174.6 67 174.2 67 173.8C63.2 172.4 59.8 168.6 59 160.2C58.4 154 61 148.4 62.2 146.2C63.4 140.6 66.8 134.4 72.4 133.4C73.2 130.6 74 128 75 125.6C75 125.4 75.2 125.2 75.2 125.2L75.2 125C79.6 113.2 86.6 103 95 95.8C95 94.6 94.8 93.4 94.8 92.4C94 83.6 96.4 77.2 72.4 66.6C48.4 56 12.2 44.6 4.8 27.6C-2.6 10 0.4 0 0.4 0H259.6C259.6 0 262.6 10 255.2 27.2C247.6 44.2 211.4 55.6 187.4 66.2zM299.8 280H248.2L254 285.8C257.6 289.4 259.8 294.4 259.8 300C259.8 311 250.8 320 239.8 320C234.2 320 229.2 317.8 225.6 314.2L185.6 274.2C182.2 270.6 179.8 265.6 179.8 260C179.8 254.4 182 249.4 185.6 245.8L225.6 205.8C229.4 202.2 234.4 200 239.8 200C250.8 200 259.8 209 259.8 220C259.8 225.6 257.6 230.6 254.0000000000001 234.2L248.2 240H299.8C310.8 240 319.8 249 319.8 260C319.8 271 310.8 280 299.8 280z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Following.defaultProps = {
    size: IconSize.STANDARD,
};
Following.displayName = `Blueprint5.Icon.Following`;
export default Following;
