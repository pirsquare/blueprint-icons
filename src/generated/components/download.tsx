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

export const Download: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="download" ref={ref}  {...props}>
            <path
                d={isLarge ? "M200 400C89.6 400 0 310.4 0 200C0 89.6 89.6 0 200 0S400 89.6 400 200C400 310.4 310.4 400 200 400zM294.2000000000001 165.8L214.2 85.8C210.6 82.2 205.6 80 200 80S189.4 82.2 185.8 85.8L105.8 165.8C102.2 169.4 100 174.4 100 180C100 191 109 200 120 200C125.6 200 130.6 197.8 134.2 194.2L180 148.2V300C180 311 189 320 200 320S220 311 220 300V148.2L265.8 194C269.4000000000001 197.8 274.4000000000001 200 280 200C291 200 300 191 300 180C300 174.4 297.8 169.4 294.2000000000001 165.8z" : "M159.8 320.2C71.4 320.2 -0.2 248.6 -0.2 160.2S71.4 0.2 159.8 0.2S319.8 71.8 319.8 160.2S248.2 320.2 159.8 320.2zM234 126L174 66C170.4 62.4 165.4 60.2000000000001 159.8 60.2000000000001S149.2 62.4 145.6 66L85.6 126C82 129.6 79.8 134.6 79.8 140.2C79.8 151.2 88.8 160.2 99.8 160.2C105.4 160.2 110.4 158 114 154.4L139.8 128.6V240.2C139.8 251.2 148.8 260.2 159.8 260.2S179.8 251.2 179.8 240.2V128.4L205.6 154.2C209.2 157.8 214.2 160 219.8000000000001 160C230.8000000000001 160 239.8000000000001 151 239.8000000000001 140C239.8 134.6 237.6 129.6 234 126z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Download.defaultProps = {
    size: IconSize.STANDARD,
};
Download.displayName = `Blueprint5.Icon.Download`;
export default Download;
