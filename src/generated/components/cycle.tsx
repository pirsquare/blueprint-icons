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

export const Cycle: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="cycle" ref={ref}  {...props}>
            <path
                d={isLarge ? "M320 200C364.18278 200 400 164.18278 400 120C400 75.81722 364.18278 40 320 40C275.81722 40 240 75.81722 240 120C240 164.18278 275.81722 200 320 200zM80 200C124.18278 200 160 164.18278 160 120C160 75.81722 124.18278 40 80 40C35.81722 40 0 75.81722 0 120C0 164.18278 35.81722 200 80 200zM225.975578 310.8636448L227.717926 309.0819614L266.32 264.44L307.2837120000001 250.2722938C316.977674 246.9215724 322.445012 236.8627728 320.287458 227.0843274L319.652662 224.8359206C316.30194 215.1419584 306.24314 209.6746208 296.464696 211.832174L294.216288 212.4669708L248.186224 228.3772788C245.690846 229.2398068 243.39937 230.5848596 241.438168 232.3268482L239.59174 234.1979788L211.86 266.26L174.04 226.62L214.96187 181.137364C217.716386 178.07692 219.445596 174.257058 219.945486 170.20942L220.096268 167.757756L220.096268 82.951372C220.096268 71.905678 211.141964 62.951372 200.096268 62.951372C189.839552 62.951372 181.3861256 70.672176 180.2308234 80.61895L180.0962688 82.951372L180.08 160.1L131.9170774 213.6129642C125.5061162 220.735953 125.1153508 231.2833646 130.65201 238.8193324L132.3088992 240.795097L198.1159522 309.8025254000001C205.680532 317.7349912 218.063208 318.0133324 225.975578 310.8636448zM320 160C297.90861 160 280 142.09139 280 120C280 97.90861 297.90861 80 320 80C342.09139 80 360 97.90861 360 120C360 142.09139 342.09139 160 320 160zM80 160C57.90861 160 40 142.09139 40 120C40 97.90861 57.90861 80 80 80C102.09139 80 120 97.90861 120 120C120 142.09139 102.09139 160 80 160zM270 360C286.5685420000001 360 300 346.5685424 300 330C300 313.4314576 286.5685420000001 300 270 300C253.431458 300 240 313.4314576 240 330C240 346.5685424 253.431458 360 270 360z" : "M260 140C293.137084 140 320 113.137084 320 80C320 46.862916 293.137084 20 260 20C226.862916 20 200 46.862916 200 80C200 113.137084 226.862916 140 260 140zM60 140C93.137085 140 120 113.137084 120 80C120 46.862916 93.137085 20 60 20C26.862915 20 0 46.862916 0 80C0 113.137084 26.862915 140 60 140zM183.3730088 245.4034204L185.128195 243.6100436L215.32 208.68L247.09883 197.6993958C256.792792 194.3486744 262.26013 184.2898748 260.102576 174.5114294L259.46778 172.2630226C256.117058 162.5690604 246.058258 157.1017228 236.279814 159.259276L234.031406 159.8940728L197.1880868 172.628979C194.6927092 173.4915072 192.4012326 174.8365598 190.4400318 176.5785486L188.5936032 178.4496792L169.42 200.62L140.82 170L174.6459846 133.61966C177.513628 130.535922 179.319932 126.6428462 179.8423766 122.5064836L180 120L180 60C180 48.954306 171.045695 40 160 40C149.7432832 40 141.2898568 47.720804 140.1345546 57.667578L140 60L139.98 112.16L98.8526818 156.3858336C92.299539 163.4327958 91.7631726 174.0248152 97.2372524 181.6518998L98.8791978 183.653612L155.3805314 244.1762008C162.9141772 252.2460234 175.4012012 252.595028 183.3730088 245.4034204zM260 110C243.431458 110 230 96.568542 230 80C230 63.431458 243.431458 50 260 50C276.5685420000001 50 290 63.431458 290 80C290 96.568542 276.5685420000001 110 260 110zM60 110C43.4314576 110 30 96.568542 30 80C30 63.431458 43.4314576 50 60 50C76.5685424 50 90 63.431458 90 80C90 96.568542 76.5685424 110 60 110zM220 300C236.568542 300 250 286.5685424 250 270C250 253.4314576 236.568542 240 220 240C203.431458 240 190 253.4314576 190 270C190 286.5685424 203.431458 300 220 300z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Cycle.defaultProps = {
    size: IconSize.STANDARD,
};
Cycle.displayName = `Blueprint5.Icon.Cycle`;
export default Cycle;
