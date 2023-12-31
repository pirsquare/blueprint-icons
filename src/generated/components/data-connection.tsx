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

export const DataConnection: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="data-connection" ref={ref}  {...props}>
            <path
                d={isLarge ? "M40 162C58.693773 148.515528 86.779336 137.660844 120.4573894 131.27809C120.1515374 127.568272 120 123.801834 120 120C120 69.065874 147.1989 24.4846 187.8643188 -0.011C108.0925026 0.376966 43.2336234 21.658914 40.1172306 48.014096L40 50L40 162zM260 240C326.3 240 380 186.3 380 120C380 53.7 326.3 0 260 0C193.7 0 140 53.7 140 120C140 186.3 193.7 240 260 240zM280 220L200 100L250 100L240 20L320 140L270 140L280 220zM339.990248 312L339.9994240000001 234.901628C317.322246 250.7219106 289.74232 260 259.99545 260C194.784215 260 139.9867956 215.4117094 124.4255082 155.058382C76.267117 162.889044 42.4828228 179.095604 40.1310854 197.900202L40 200L40 312C70.4990086 290 125.9972044 275 189.995124 275C253.993044 275 309.49124 290 339.990248 312zM189.995124 400C272.742434 400 339.990248 377.5 339.990248 350C339.990248 322.5 272.742434 300 189.995124 300C106.997822 300 40 322.5 40 350C40 377.5 106.997822 400 189.995124 400z" : "M20 129.6C37.7731818 116.78 66.1579598 106.931246 100.0528088 102.527208L100 100C100 58.41417 121.1536484 21.76904 153.2876162 0.237938C148.9339546 0.08301 144.4955694 0 140 0C75.6914286 0 23.0844082 16.986122 20.1307896 38.124408L20 40L20 129.6zM220 200C275.25 200 320 155.25 320 100C320 44.75 275.25 0 220 0C164.75 0 120 44.75 120 100C120 155.25 164.75 200 220 200zM240 180L160 80L210 80L200 20L280 120L230 120L240 180zM260 249.6L260.0137180000001 213.1669222C247.498684 217.592072 234.030544 220 220 220C161.2569858 220 112.3724554 177.7908122 102.0208966 122.0469242L97.0436104 122.6540408C53.684161 128.223347 22.389439 141.9598368 20.1307896 158.1244082L20 160L20 249.6C44.4 232 88.8 220 140 220C191.2 220 235.6 232 260 249.6zM140 320C206.2 320 260 302 260 280C260 258 206.2 240 140 240C73.6 240 20 258 20 280C20 302 73.6 320 140 320z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
DataConnection.defaultProps = {
    size: IconSize.STANDARD,
};
DataConnection.displayName = `Blueprint5.Icon.DataConnection`;
export default DataConnection;
