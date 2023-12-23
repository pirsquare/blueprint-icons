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

export const Route: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="route" ref={ref}  {...props}>
            <path
                d={isLarge ? "M280.55342 279.6899548C283.483428 274.1776762 286.760102 268.2857864 290.26609 262.2412462C296.344764 251.7612298 302.824644 241.306349 309.302882 231.3318858L311.6600000000001 227.7899548L307.5073280000001 227.8912026L295.9691900000001 228.0009226C254.108024 227.9100448 239.13746 221.9377054 239.13746 210.0993832C239.13746 208.726132 244.560846 205.1410794 264.036 198.756862L284.195582 192.504342C337.619642 175.877018 363.999834 155.960166 363.999834 109.156762C363.999834 53.95534 325.442724 27.986186 267.355856 21.641754C251.727588 19.934786 236.958826 19.680014 218.329216 20.32431L195.3264632 21.241948L124.42 21.24L135.1274054 37.469792C142.675676 49.091768 150.2245876 61.081596 157.5631282 73.196418L198.354868 73.193646L212.08168 72.60922C232.645962 71.686342 247.47887 71.73426 262.540848 73.379376C299.17062 77.380196 315.99984 88.715108 315.99984 109.156762C315.99984 122.960768 306.342754 130.978344 276.16348 140.860464L259.568354 146.004438C235.724294 153.288626 218.810956 160.006284 207.764242 169.292604C215.737496 189.294768 220 206.1702008 220 220.06C219.951432 234.8207776 217.252432 248.9567564 212.355102 262.0138912C227.254202 273.4803678 250.0428 278.4681244 280.55342 279.6899548zM100 316C152.9655172 316 195.8257714 272.98 196 220.06C196 166.96 100 28 100 28L90.016 42.87664C65.44 80.1496 4 177.58 4 220.06C4 272.98 47.0344828 316 100 316zM100 268C73.504 268 52 246.496 52 220C52 193.504 73.504 172 100 172C126.496 172 148 193.504 148 220C148 246.496 126.496 268 100 268zM340 393.33333334C369.425288 393.33333334 393.23654 369.4333334 393.3333340000001 340.0333334C393.3333340000001 310.5333334 340 233.3333334 340 233.3333334L332.1778940000001 245.0707108C317.3602860000001 267.8231074000001 286.666666 317.654023 286.666666 340.0333334C286.666666 369.4333334 310.574712 393.33333334 340 393.33333334z" : "M233.377944 218.6822578C234.029752 217.4418622 234.683576 216.183999 235.357652 214.9065578C237.61257 210.6332572 240.0700760000001 206.2143398 242.699566 201.6809346C247.22658 193.8760804 252.050288 186.089814 256.874874 178.656459L252.922894 178.7426396L243.307764 178.8270396C208.423398 178.7571336 195.947909 174.1630186 195.947909 165.0566016C195.947909 164.0002528 200.467406 161.2425154 216.696728 156.3315708L233.496408 151.5219312C278.016532 138.7316616 299.999992 123.4109802 299.999992 87.4083C299.999992 44.945596 267.869082 24.969292 219.463278 20.088952C206.4397 18.775896 194.132378 18.579918 178.607677 19.07553L159.4386836 19.781408L103.92 19.786396L109.2728378 27.891492C115.9969562 38.244534 122.721685 48.947864 129.2322248 59.75427L161.9623584 59.74432L173.4013874 59.29476C190.5383188 58.584852 202.899096 58.621712 215.450764 59.887188C245.975626 62.964748 259.999992 71.683926 259.999992 87.4083C259.999992 98.026784 251.952414 104.194162 226.802978 111.795804L212.973684 115.752714C192.1765186 121.6173764 177.7064846 127.0046306 168.546831 134.6797312C176.0013966 152.687586 180 167.7691864 180 180.05C179.9695808 189.295013 178.6915062 198.2459106 176.3257308 206.7420516C189.228452 214.6367422 208.289206 217.9813982 233.377944 218.6822578zM80 260C124.137931 260 159.8548094 224.15 160 180.05C160 135.8 80 20 80 20L71.68 32.3972C51.2 63.458 0 144.65 0 180.05C0 224.15 35.862069 260 80 260zM80 220C57.92 220 40 202.08 40 180C40 157.92 57.92 140 80 140C102.08 140 120 157.92 120 180C120 202.08 102.08 220 80 220zM280 300C302.068966 300 319.927404 282.075 320 260.025C320 237.9 280 180 280 180L274.13342 188.8030332C263.020214 205.8673306 240 243.2405172 240 260.025C240 282.075 257.931034 300 280 300z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
Route.defaultProps = {
    size: IconSize.STANDARD,
};
Route.displayName = `Blueprint5.Icon.Route`;
export default Route;
