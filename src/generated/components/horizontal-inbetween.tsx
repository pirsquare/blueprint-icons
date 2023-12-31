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

export const HorizontalInbetween: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="horizontal-inbetween" ref={ref}  {...props}>
            <path
                d={isLarge ? "M225.852 125.852C233.654 118.05 246.3040000000001 118.05 254.106 125.852L313.354 185.1C313.624 185.342 313.888 185.592 314.148 185.852C318.054 189.758 320.006 194.88 320 200C320.006 205.12 318.054 210.2418 314.148 214.1482C313.888 214.4076 313.624 214.6582 313.354 214.9004L254.106 274.1482C246.3040000000001 281.9506 233.654 281.9506 225.852 274.1482C218.05 266.3458 218.05 253.6958 225.852 245.8934L271.7460000000001 200L225.852 154.106C218.05 146.304 218.05 133.654 225.852 125.852zM145.8934 125.852C153.6958 118.05 166.3458 118.05 174.1482 125.852C181.9506 133.654 181.9506 146.304 174.1482 154.106L128.2548 200L174.1482 245.8934C181.9506 253.6958 181.9506 266.3458 174.1482 274.1482C166.3458 281.9506 153.6958 281.9506 145.8934 274.1482L86.6456 214.9004C86.3758 214.6582 86.1112 214.4076 85.8518 214.1482C81.9454 210.2418 79.9948 205.12 80 200C79.9948 194.88 81.9454 189.758 85.8518 185.852C86.1112 185.592 86.3758 185.342 86.6456 185.1L145.8934 125.852zM0 0V400H20C31.0456 400 40 391.0457 40 380V20C40 8.954 31.0456 0 20 0H0zM400 0V400H380C368.954 400 360 391.0457 360 380V20C360 8.954 368.954 0 380 0H400z" : "M0 0V320H20C31.0456 320 40 311.0457 40 300V20C40 8.954 31.0456 0 20 0H0zM300 320H320V0H300C288.954 0 280 8.954 280 20V300C280 311.0457 288.954 320 300 320zM134.1416 185.8578C141.952 193.6684 141.952 206.3316 134.1416 214.1422C126.331 221.9526 113.6678 221.9526 105.8572 214.1422L65.8572 174.1422C58.0468 166.3316 58.0468 153.6684 65.8572 145.8578L105.8572 105.858C113.6678 98.048 126.331 98.048 134.1416 105.858C141.952 113.668 141.952 126.3316 134.1416 134.1422L108.2836 160L134.1416 185.8578zM214.142 214.1422C206.332 221.9526 193.6678 221.9526 185.8572 214.1422C178.0468 206.3316 178.0468 193.6684 185.8572 185.8578L211.716 160L185.8572 134.1422C178.0468 126.3316 178.0468 113.668 185.8572 105.858C193.6678 98.048 206.332 98.048 214.142 105.858L254.142 145.8578C261.952 153.6684 261.952 166.3316 254.142 174.1422L214.142 214.1422z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
HorizontalInbetween.defaultProps = {
    size: IconSize.STANDARD,
};
HorizontalInbetween.displayName = `Blueprint5.Icon.HorizontalInbetween`;
export default HorizontalInbetween;
