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

export const CellTower: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="cell-tower" ref={ref}  {...props}>
            <path
                d={isLarge ? "M230 233.6C236.2 240.6 240.2 249.8 240.2 260C240.2 282 222.2 300 200.2 300S160.2 282 160.2 260C160.2 249.8 164.2 240.6 170.4 233.6L101.2 26.2C97.8 15.8 103.4 4.4 113.8 0.9999999999999S135.6 3.1999999999999 139 13.5999999999999L167.8 100H232.4000000000001L261.2 13.6C264.6 3.2 276 -2.6 286.4 1S302.6 15.8 299 26.2L230 233.6zM219 140H181.2L200.2 196.8L219 140zM106.2 185.4C114.2 177.8 126.8 178.2 134.4 186.2C142 194.2 141.6 206.8 133.6 214.4C105.6 241 108 281.4 133.4 305.2C141.4 312.8 142 325.4 134.4 333.4C127.2 341.6 114.4 342 106.4 334.6C64.6 295.6 60.8 228.6 106.2 185.4zM92 156C60 178 40 220 40 260C40 302 58 338 92 364C102 370 102 384 96 392C90 402 76 402 68 396C24 362 -2 316 0 260C2 206 28 154 68 124C72 122 76 120 80 120C86 120 92 122 96 128C104 138 102 150 92 156zM265.4 186.2C273 178.2 285.6 177.8 293.6 185.4C339 228.6 335.2 295.6 293.4 334.6C285.4 342.2000000000001 272.6 341.6 265.2 333.6C257.6 325.6 258.2 312.8 266.2 305.4000000000001C291.8 281.6 294 241.2 266 214.6C258.2 206.8 257.8 194.2 265.4 186.2zM332 396C324.0000000000001 402 310.0000000000001 402 304 392C298 384 298 370 308 364C342 338 360 302 360 260C360 220 340 178 308 156C298 150 296 138 304 128C308 122 314 120 320 120C324 120 328 122 332 124C374.0000000000001 154 400 206 400 260C401.8 316 376 362 332 396z" : "M179.4 184.8C179.2 185.8 178.6 186.4 178.2 187.4C177.8 188.4 177.6 189.4 177.2 190.4C178.8 193.2 180 196.4 180 200C180 211 171 220 160 220S140 211 140 200C140 196.4 141.2 193.2 142.8 190.4C142.2 189.4 142.2 188.4 141.8 187.4C141.4 186.4 140.8 185.8 140.6 184.8L100.6 24.8C98 14 104.4 3.2 115.2 0.6C126 -1.9999999999999 136.8 4.4 139.4 15.2L150.6 60H169.4L180.6 15.2C183.2000000000001 4.4 194.2 -2 204.8000000000001 0.6C215.6 3.2 222 14.2 219.4 24.8L179.4 184.8zM74.4 286C82 294 81.8 306.6 74 314.4S53.4 321.8 45.6 314C-15.4 251.6 -15.4 148.4 45.6 86C53.4 78 66 78 73.8 85.6S81.8 106 74.2 113.8C28.6 160.8 28.6 239.2 74.4 286zM232 256C223.2 262.6 210.6 260.8 204 252C197.4 243.2 199.2 230.6 208 224C216.6 217.6 218.6 184.8 207.2 175.4C198.8 168.4 197.6 155.8 204.6 147.2C211.6 138.8 224.2 137.6 232.8 144.6C264.6 171.2 260.6 234.6 232 256zM274.4000000000001 314C266.6 322 254.0000000000001 322 246.2 314.4S238 294 245.6 286C291.4 239.2 291.4 160.8 245.6 114C237.8 106.2 238 93.4 246 85.8S266.6 78.2 274.2 86.2C335.2000000000001 148.4 335.2000000000001 251.6 274.4000000000001 314zM108 175.4C96.6 184.8 98.6 217.6 107.2 224C116 230.6 117.8 243.2 111.2 252S92 262.6 83.2 256C54.4 234.6 50.6 171.2 82.4 144.6C90.8 137.6 103.4 138.6 110.6 147.2C117.6 155.6 116.4 168.4 108 175.4z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
CellTower.defaultProps = {
    size: IconSize.STANDARD,
};
CellTower.displayName = `Blueprint5.Icon.CellTower`;
export default CellTower;
