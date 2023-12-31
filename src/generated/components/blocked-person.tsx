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

export const BlockedPerson: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="blocked-person" ref={ref}  {...props}>
            <path
                d={isLarge ? "M231 81.6C201.4 94.6 205.4 102.6 204.4 113.4C204.2 114.8 204.2 116.4 204.2 118C214.4 127 222.6 139.4 228 153.6C228 153.6 228.2 154.4 228.4 154.6C229.6 157.6 230.6 161 231.4 164.2C238.2 165.6 242.2 173 243.6 179.8C244.8 182 246.4 186.8 247 192.2C206.6 211.6 178.4 252.4 178.4 300C178.4 306 179.4 311.6 180.2 317.4C173.6 319 166.8 320 160.4 320C144.6 320 126.8 315 114.2 305.4C102 296 92.8 282.8 88.4 268.2C87.4 265 86.6 261.6 86.2 258.2C83.8 246.2 82.8 228 82.8 215.4C82.8 214.8 82.8 214.4 82.8 213.8C78 212 73.8 207.4 73 197.2C72.2 189.4 75.4 182.6 77 179.8C78.6 172.8 82.6 165.4 89.6 164.2C90.4 160.8 91.4 157.6 92.6 154.6C92.6 154.4 92.8 154.2 92.8 154L93 153.8C98.4 139.4 107 126.8 117.4 117.8C117.4 116.4 117.2 115 117.2 113.6C116.2 102.8 119.2 94.8 89.6 81.8C60 68.8 15.4 54.8 6.4 33.8C-3 12.4 0.8 0 0.8 0H319.8C319.8 0 323.4 12.4 314.4 33.4C305.2 54.6 260.6 68.4 231 81.6zM299.4000000000001 400C243.8 400 198.8 355.2 198.8 300S243.8 200 299.4000000000001 200S400 244.8 400 300S355 400 299.4000000000001 400zM238.8 300C238.8 333.2 265.8 360 299.2 360C308.6 360 317.2 357.8 325 354L244.8 274.2C241.2 282.2 238.8 290.8 238.8 300zM299.4000000000001 240C290 240 281.4 242.2 273.6 246L353.8 325.8C357.6 318 359.8 309.4 359.8 300C359.8 266.8 332.6 240 299.4000000000001 240z" : "M187.8 66.2C163.8 76.8 167 83.2 166.2 92C166 93.4 166 94.6 165.8 96C174 103.4 180.8 113.4 185.2 124.8C185.2 124.8 185.4 125.4 185.4 125.6C186.4 128.2 187.2 130.8 188 133.4C193.4 134.6 196.6 140.6 198 146C198.2 146.6 198.6 147.6 199 148.4C163.6 164 138.8 199.2 138.8 240C138.8 246.4 139.6 252.4 140.6 258.4C137.2 259 133.6 260 130.4 260C117.4 260 103 256 92.8 248.2C82.8 240.6 75.4 229.8 71.8 218C71 215.2 70.4 212.6 70 209.8C68.2 200.2 67.2 185.2 67.2 175C67.2 174.6 67.2 174.2 67.2 173.8C63.4 172.2 60 168.4 59.2 160.2C58.6 154 61.2 148.4 62.4 146.2C63.6 140.6 67 134.4 72.6 133.4C73.4 130.6 74.2 128 75.2 125.6C75.2 125.4 75.4 125.2 75.4 125.2L75.4 125C79.8 113.2 86.8 103 95.2 95.8C95.2 94.6 95 93.4 95 92.4C94.2 83.6 96.6 77.2 72.6 66.6C48.6 56 12.4 44.6 5 27.6C-2.4 10 0.6 0 0.6 0H259.8C259.8 0 262.8 10 255.4 27.2C248 44.2 211.8 55.6 187.8 66.2zM239.4 320C195 320 158.8 284.2 158.8 240C158.8 195.8 194.8 160 239.4 160S320 195.8 320 240C320 284.2 284 320 239.4 320zM199.2 240C199.2 262 217.2 280 239.4 280C246.8 280 253.8 277.8 259.8 274.4L204.8 219.8C201.4 225.8 199.2 232.6 199.2 240zM239.4 200C232.0000000000001 200 225 202.2 219 205.6L274 260.2C277.6 254.2 279.6 247.4 279.6 240C279.8 218 261.6 200 239.4 200z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
BlockedPerson.defaultProps = {
    size: IconSize.STANDARD,
};
BlockedPerson.displayName = `Blueprint5.Icon.BlockedPerson`;
export default BlockedPerson;
