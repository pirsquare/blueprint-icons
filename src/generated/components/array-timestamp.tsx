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

export const ArrayTimestamp: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="array-timestamp" ref={ref}  {...props}>
            <path
                d={isLarge ? "M380 400C390.2567160000001 400 398.710144 392.2791962 399.865446 382.3324225L400 380L400 20C400 9.743284 392.279196 1.289856 382.332422 0.134554L380 0L300 0C288.9543060000001 0 280 8.954306 280 20C280 30.256716 287.720804 38.710144 297.667578 39.865446L300 40L360 40L360 360L300 360C289.743284 360 281.289856 367.7208038 280.1345540000001 377.6675774000001L280 380C280 390.25671678 287.720804 398.7101432140001 297.667578 399.8654453736L300 400L380 400zM100 400C111.045695 400 120 391.045695 120 380C120 369.7432832 112.2791962 361.2898568 102.3324226 360.1345546L100 360L40 360L40 40L100 40C110.2567168 40 118.7101432 32.279196 119.8654454 22.332422L120 20C120 9.743284 112.2791962 1.289856 102.3324226 0.134554L100 0L20 0C9.74328322 0 1.289856786 7.720804 0.1345546266 17.667578L0 20L0 380C0 390.25671678 7.7208038 398.7101432140001 17.6675775 399.8654453734L20 400L100 400zM200 320C266.2741700000001 320 320 266.2741700000001 320 200C320 133.72583 266.2741700000001 80 200 80C133.72583 80 80 133.72583 80 200C80 266.2741700000001 133.72583 320 200 320zM200 300C144.771525 300 100 255.228475 100 200C100 144.771526 144.771525 100 200 100C255.228474 100 300 144.771526 300 200C300 255.228475 255.228474 300 200 300zM257.071068 257.0710678000001C260.542394 253.5997408 260.9280980000001 248.2112528 258.228176 244.31389L257.071068 242.9289322L207.071068 192.928932C203.59974 189.457606 198.2112528 189.071902 194.31389 191.771824L192.9289322 192.928932L162.9289322 222.9289322C159.0236892 226.8341752 159.0236892 233.1658248 162.9289322 237.0710678C166.4002592 240.5423948 171.7887472 240.9280978 175.68611 238.2281768L177.0710678 237.0710678L200 214.14L242.9289320000001 257.0710678000001C246.834176 260.9763108 253.165824 260.9763108 257.071068 257.0710678000001z" : "M300 320C310.256716 320 318.710144 312.2791962 319.865446 302.3324225L320 300L320 20C320 9.743284 312.279196 1.289856 302.332422 0.134554L300 0L240 0C228.954306 0 220 8.954306 220 20C220 30.256716 227.720804 38.710144 237.667578 39.865446L240 40L280 40L280 280L240 280C229.743284 280 221.289856 287.7208038 220.134554 297.6675774000001L220 300C220 310.25671678 227.720804 318.7101432140001 237.667578 319.8654453734L240 320L300 320zM80 320C91.045695 320 100 311.045695 100 300C100 289.7432832 92.2791962 281.2898568 82.3324226 280.1345546L80 280L40 280L40 40L80 40C90.2567168 40 98.7101432 32.279196 99.8654454 22.332422L100 20C100 9.743284 92.2791962 1.289856 82.3324226 0.134554L80 0L20 0C9.74328322 0 1.289856786 7.720804 0.1345546266 17.667578L0 20L0 300C0 310.25671678 7.7208038 318.7101432140001 17.6675775 319.8654453734L20 320L80 320zM160 260C215.228474 260 260 215.228475 260 160C260 104.771526 215.228474 60 160 60C104.771525 60 60 104.771526 60 160C60 215.228475 104.771525 260 160 260zM160 240C115.81722 240 80 204.18278 80 160C80 115.81722 115.81722 80 160 80C204.18278 80 240 115.81722 240 160C240 204.18278 204.18278 240 160 240zM207.071068 207.0710678C210.542394 203.5997408 210.928098 198.2112528 208.228176 194.31389L207.071068 192.9289322L167.0710678 152.9289322C163.5997408 149.4576052 158.2112528 149.0719022 154.31389 151.7718232L152.9289322 152.9289322L132.9289322 172.9289322C129.0236892 176.8341752 129.0236892 183.1658248 132.9289322 187.0710678C136.4002592 190.5423948 141.7887472 190.9280978 145.68611 188.2281768L147.0710678 187.0710678L160 174.14L192.9289322 207.0710678C196.8341752 210.9763108 203.165824 210.9763108 207.071068 207.0710678z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
ArrayTimestamp.defaultProps = {
    size: IconSize.STANDARD,
};
ArrayTimestamp.displayName = `Blueprint5.Icon.ArrayTimestamp`;
export default ArrayTimestamp;
