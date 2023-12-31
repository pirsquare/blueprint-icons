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

export const PanelTable: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="panel-table" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 380H20C8 380 0 372 0 360V60C0 48 8 40 20 40H380C392 40 400 48 400 60V360C400 372 392 380 380 380zM200 160H140V220H200V160zM200 240H140V300H200V240zM40 80V340H120V80H40zM140 80V140H200V80H140zM360 80H220V140H360V80zM360 160H220V220H360V160zM360 240H220V300H360V240z" : "M300 300H20C8 300 0 292 0 280V60C0 48 8 40 20 40H300C312 40 320 48 320 60V280C320 292 312 300 300 300zM160 140H120V180H160V140zM160 200H120V240H160V200zM40 80V260H100V80H40zM120 80V120H160V80H120zM280 80H180V120H280V80zM280 140H180V180H280V140zM280 200H180V240H280V200z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
PanelTable.defaultProps = {
    size: IconSize.STANDARD,
};
PanelTable.displayName = `Blueprint5.Icon.PanelTable`;
export default PanelTable;
