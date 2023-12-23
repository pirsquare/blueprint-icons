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

export const ThDisconnect: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="th-disconnect" ref={ref}  {...props}>
            <path
                d={isLarge ? "M285.0073 380L380 380C390 380 400 370 400 360L400 40C400 30 390 20 380 20L235.57594 20L241.131496 60L360 60L360 120L249.464828 120L252.242606 140L360 140L360 200L260.57594 200L263.353718 220L360 220L360 280L271.68705 280L284.429536 371.7458978C284.81482 374.519933 285.003874 377.2759744 285.0073 380zM164.4240606 380L150.5351716 280L40 280L40 220L142.2018382 220L139.4240606 200L40 200L40 140L131.0907272 140L128.3129494 120L40 120L40 60L119.979616 60L115.5704636 28.254102C115.185181 25.480066 114.9961266 22.724026 114.992699 20L20 20C8 20 0 30 0 40L0 360C0 370 8 380 20 380L164.4240606 380zM205.190154 382.75136742C206.709692 393.69204298 216.810692 401.329383734 227.751368 399.8098454636001C238.692042 398.290307194 246.329384 388.18930812 244.809846 377.2486326L194.8098454 17.248632C193.2903072 6.307958 183.1893082 -1.329384 172.2486326 0.190154C161.307957 1.709692 153.6706162 11.810692 155.1901546 22.751368L205.190154 382.75136742z" : "M240.007594 300L300 300C312 300 320 290 320 280L320 40C320 28 312 20 300 20L200.609152 20L206.323438 60L280 60L280 100L212.037724 100L214.894866 120L280 120L280 160L220.609152 160L223.466296 180L280 180L280 220L229.180582 220L239.39697 291.5147186C239.804364 294.3664762 240.00408 297.2000044 240.007594 300zM119.3908474 300L107.9622758 220L40 220L40 180L102.2479902 180L99.3908474 160L40 160L40 120L93.6765616 120L90.8194188 100L40 100L40 60L85.105133 60L80.6030304 28.485282C80.1956364 25.633524 79.9959206 22.799996 79.9924056 20L20 20C8 20 0 28 0 40L0 280C0 290 8 300 20 300L119.3908474 300zM160.2010102 302.82842712C161.7631072 313.7631073 171.893747 321.36108704 182.8284272 319.798989874C193.7631072 318.236892706 201.361088 308.10625304 199.7989898 297.1715728L159.7989898 17.171572C158.2368928 6.236892 148.106253 -1.361088 137.1715728 0.20101C126.2368928 1.763108 118.638913 11.893746 120.2010102 22.828428L160.2010102 302.82842712z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ThDisconnect.defaultProps = {
    size: IconSize.STANDARD,
};
ThDisconnect.displayName = `Blueprint5.Icon.ThDisconnect`;
export default ThDisconnect;
