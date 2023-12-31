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

export const Issue: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="issue" ref={ref}  {...props}>
            <path
                d={isLarge ? "M200 0C89.54305 0 0 89.54305 0 200C0 310.45695 89.54305 400 200 400C310.45695 400 400 310.45695 400 200C400 89.54305 310.45695 0 200 0zM200 40C288.36556 40 360 111.63444 360 200C360 288.36556 288.36556 360 200 360C111.63444 360 40 288.36556 40 200C40 111.63444 111.63444 40 200 40zM220 80L180 80L180 120L220 120L220 80zM220 140L180 140L180 320L220 320L220 140z" : "M160 0C71.63444 0 0 71.63444 0 160C0 248.36556 71.63444 320 160 320C248.36556 320 320 248.36556 320 160C320 71.63444 248.36556 0 160 0zM160 40C226.2741700000001 40 280 93.72583 280 160C280 226.27417 226.2741700000001 280 160 280C93.72583 280 40 226.27417 40 160C40 93.72583 93.72583 40 160 40zM180 80L140 80L140 120L180 120L180 80zM180 140L140 140L140 240L180 240L180 140z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Issue.defaultProps = {
    size: IconSize.STANDARD,
};
Issue.displayName = `Blueprint5.Icon.Issue`;
export default Issue;
