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

export const Unlink: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="unlink" ref={ref}  {...props}>
            <path
                d={isLarge ? "M320 400C364.2000000000001 400 400 364.2 400 320C400 297.8 390.8 278.2 376.4 263.6L376.6 263.4L316.6 203.4L316.4 203.6C305.212 192.566 291.0900000000001 184.586 275.112 181.458L256.484 200.0842L348.2 291.8C355.6 299 360 309 360 320C360 342 342 360 320 360C309 360 299 355.6 291.8 348.4L199.9842 256.5842L181.457 275.1114C184.5854 291.0902 192.5662 305.2128 203.6 316.4L203.4 316.6L263.4 376.6L263.6 376.4C278.2 390.8 297.8 400 320 400zM214.084 242.4842L242.484 214.0842L294.2000000000001 265.8C297.8 269.4 300 274.4 300 280C300 291 291 300 280 300C274.4000000000001 300 269.4000000000001 297.8 265.8 294.2L214.084 242.4842zM171.6578 200.0578L105.8 134.2000000000001C102.2 130.6 100 125.6 100 120C100 109 109 100 120 100C125.6 100 130.6 102.2 134.2 105.8L200.058 171.658L214.158 157.558L128.2 71.6L108.2 51.6C101 44.4 91 40 80 40C58 40 40 58 40 80C40 91 44.4 101 51.8 108.2L157.6578 214.0578L171.6578 200.0578zM152.9716 218.744L65.8578 305.8578C58.0474 313.6684 58.0474 326.3316 65.8578 334.1422C73.6684 341.9526 86.3316 341.9526 94.1422 334.1422L334.142 94.142C341.952 86.332 341.952 73.668 334.142 65.858C326.332 58.048 313.668 58.048 305.858 65.858L218.732 152.982C219.528 148.792 220 144.514 220 140C220 117.8 210.8 98.2 196.4 83.6L196.6 83.4L136.6 23.4L136.4 23.6C121.8 9.2 102.2 0 80 0C35.8 0 0 35.8 0 80C0 102.2 9.2 121.8 23.6 136.4L23.4 136.6L83.4 196.6L83.6 196.4C98.2 210.8 117.8 220 140 220C144.4928 220 148.7518 219.5328 152.9716 218.744z" : "M239.95 319.8999786C284.122 319.8999786 319.9 284.1224 319.9 239.95C319.9 217.7638 310.706 198.176 296.116 183.785L296.514 183.3852L276.528 163.3978L276.128 163.7976C265.124 152.6404 250.964 144.6386 235.078 141.4904L216.498 160.0714L248.146 191.98L268.132 211.9674L267.932 212.1674C275.128 219.3628 279.926 229.1566000000001 279.926 240.1498C279.926 262.136 261.936 280.1248 239.95 280.1248C228.9580000000001 280.1248 219.164 275.3278 211.968 268.1324L211.768 268.3322L160.002 216.5664L141.5118 235.0566C144.7036 250.9506 152.7886 265.1182 163.7978 276.1274L163.398 276.527L183.3856 296.5146L183.7852 296.1148C198.1764 310.70572 217.964 319.8999786 239.95 319.8999786zM45.8578 274.1422C53.6682 281.9526 66.3314 281.9526 74.142 274.1422L274.142 74.142C281.952 66.332 281.952 53.668 274.142 45.858C266.332 38.048 253.668 38.048 245.858 45.858L178.713 113.002C179.513 108.76 179.9876 104.438 179.9876 100.038C179.9876 78.052 170.7932 58.264 156.2024 43.872L156.6022 43.474L136.6146 23.486L136.2148 23.886C121.8238 9.294 102.0362 0.1 80.05 0.1C35.8776 0.1 0.0999376 35.878 0.0999376 80.05C0.0999376 102.036 9.29418 121.8242 23.885 136.2152L23.4854 136.615L43.4728 156.6024L43.8726 156.2028C58.2636 170.7936 78.0512 179.9878 100.0374 179.9878C104.502 179.9878 108.8128 179.5262 113.0174 178.6982L45.8578 245.858C38.0472 253.6684 38.0472 266.3318 45.8578 274.1422zM160.0488 131.6668L174.14 117.576L108.2324 51.668L108.0324 51.868C100.837 44.672 91.0432 39.876 80.05 39.876C58.0638 39.876 40.075 57.864 40.075 79.85C40.075 90.844 44.872 100.638 52.0674 107.832L51.8676 108.032L117.7752 173.9404L131.6666 160.049L85.8462 114.228C82.2486 110.63 80.0498 105.634 80.0498 100.038C80.0498 89.044 89.0442 80.05 100.0374 80.05C105.6338 80.05 110.6308 82.248 114.2286 85.846L160.0488 131.6668zM174.0932 202.4754L202.476 174.0932L234.154 205.7714C237.752 209.3692 239.95 214.366 239.95 219.9626C239.95 230.9556 230.956 239.95 219.962 239.95C214.366 239.95 209.37 237.7514 205.772 234.1536L174.0932 202.4754z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Unlink.defaultProps = {
    size: IconSize.STANDARD,
};
Unlink.displayName = `Blueprint5.Icon.Unlink`;
export default Unlink;
