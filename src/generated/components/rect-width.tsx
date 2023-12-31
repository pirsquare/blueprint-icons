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

export const RectWidth: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="rect-width" ref={ref}  {...props}>
            <path
                d={isLarge ? "M360 80H40V320H360V80zM20 40C8.95432 40 0 48.954 0 60V340C0 351.0456 8.9543 360 20 360H380C391.046 360 400 351.0456 400 340V60C400 48.954 391.046 40 380 40H20zM145.8934 274.1482C153.6958 281.9506 166.3458 281.9506 174.1482 274.1482C181.9506 266.3458 181.9506 253.6958 174.1482 245.8934L128.2548 200L174.1482 154.106C181.9506 146.304 181.9506 133.654 174.1482 125.852C166.3458 118.05 153.6958 118.05 145.8934 125.852L86.6454 185.1C86.3758 185.342 86.1112 185.592 85.8518 185.852C81.9454 189.758 79.9948 194.88 80 200C79.9948 205.12 81.9454 210.2418 85.8518 214.1482C86.1112 214.4076 86.3758 214.6584 86.6456 214.9004L145.8934 274.1482zM225.852 274.1482C233.654 281.9506 246.3040000000001 281.9506 254.106 274.1482L313.354 214.9004C313.624 214.6584 313.888 214.4076 314.148 214.1482C318.054 210.2418 320.006 205.12 320 200C320.006 194.88 318.054 189.758 314.148 185.852C313.888 185.592 313.624 185.342 313.354 185.1L254.106 125.852C246.3040000000001 118.05 233.654 118.05 225.852 125.852C218.05 133.654 218.05 146.304 225.852 154.106L271.7460000000001 200L225.852 245.8934C218.05 253.6958 218.05 266.3458 225.852 274.1482z" : "M20 260H300V60H20V260zM0 260C0 271.0456 8.9543 280 20 280H300C311.046 280 320 271.0456 320 260V60C320 48.954 311.046 40 300 40H20C8.9543 40 0 48.954 0 60V260zM214.142 214.1422C206.332 221.9526 193.6684 221.9526 185.8578 214.1422C178.0474 206.3316 178.0474 193.6684 185.8578 185.8578L211.716 160L185.8578 134.1422C178.0474 126.3316 178.0474 113.668 185.8578 105.858C193.6684 98.048 206.332 98.048 214.142 105.858L254.142 145.8578C257.892 149.6086 260 154.6956 260 160C260 165.3044 257.892 170.3914 254.142 174.1422L214.142 214.1422zM134.1422 185.8578C141.9526 193.6684 141.9526 206.3316 134.1422 214.1422C126.3316 221.9526 113.6684 221.9526 105.8578 214.1422L65.8578 174.1422C62.1072 170.3914 60 165.3044 60 160C60 154.6956 62.1072 149.6086 65.8578 145.8578L105.8578 105.858C113.6684 98.048 126.3316 98.048 134.1422 105.858C141.9526 113.668 141.9526 126.3316 134.1422 134.1422L108.2842 160L134.1422 185.8578z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
RectWidth.defaultProps = {
    size: IconSize.STANDARD,
};
RectWidth.displayName = `Blueprint5.Icon.RectWidth`;
export default RectWidth;
