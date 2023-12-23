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
import { __assign } from "tslib";
import * as React from "react";
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export var Tractor = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "tractor", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M89.9923902 180C139.6938028 180 179.9847584 139.705628 179.9847584 90C179.9847584 40.294372 139.6938028 0 89.9923902 0C40.2909776 0 0.0000220142266 40.294372 0.0000220142266 90C0.0000220142266 139.705628 40.2909776 180 89.9923902 180zM319.972886 160C364.15192 160 399.966102 124.18278 399.966102 80C399.966102 35.81722 364.15192 0 319.972886 0C275.793854 0 239.97967 35.81722 239.97967 80C239.97967 124.18278 275.793854 160 319.972886 160zM89.9923902 128.571428C68.6917848 128.571428 51.4242324 111.302412 51.4242324 90C51.4242324 68.697588 68.6917848 51.428572 89.9923902 51.428572C111.2929956 51.428572 128.560548 68.697588 128.560548 90C128.560548 111.302412 111.2929956 128.571428 89.9923902 128.571428zM319.972886 106.666666C305.246542 106.666666 293.308482 94.727594 293.308482 80C293.308482 65.272406 305.246542 53.333334 319.972886 53.333334C334.699232 53.333334 346.637292 65.272406 346.637292 80C346.637292 94.727594 334.699232 106.666666 319.972886 106.666666zM119.9898462 400C149.189379 400 170.53383 386.63504464 179.9996426 360L197.0258602 274.8708958C225.682238 272.9553418000001 253.411966 270.5493466000001 279.962644 267.6439022L279.976278 360L319.972886 360L319.98631 262.7596812C339.225722 260.1543906 357.706394 257.2569058000001 375.3169400000001 254.0632516C390.8958760000001 251.2380278 399.966102 241.77407 399.966102 228.38137L400 139.981502C381.75131 164.230056 352.707318 179.913486 319.9955320000001 179.913486C271.608528 179.913486 231.24669 145.598012 221.978074 100.005344L199.5882618 99.98923C194.5389238 155.993926 147.4113552 199.882832 90.019736 199.882832C64.5594906 199.882832 41.119225 191.245432 22.4764964 176.744608L0.0790105396 176.731484L0.063593751 200.3299208C0.0490912502 220.2934266 0.0276726488 243.575603 0.0001100302818 253.4857346C-0.0329517234 265.4202890000001 7.38706966 277.0766346 19.97884766 279.529156L19.99832606 380C19.99832606 391.045695 28.952631 400 39.998326 400L119.9898462 400zM139.9881502 360L59.9949342 360L59.98 280L74.9634974 280C102.6971944 279.4658782 129.9567796 278.542019 156.5565024 277.2217932L139.9881502 360z" : "M70 140C108.6599324 140 140 108.659932 140 70C140 31.340068 108.6599324 0 70 0C31.3400676 0 0 31.340068 0 70C0 108.659932 31.3400676 140 70 140zM260 120C293.137084 120 320 93.137084 320 60C320 26.862916 293.137084 0 260 0C226.862916 0 200 26.862916 200 60C200 93.137084 226.862916 120 260 120zM70 100C53.4314576 100 40 86.568542 40 70C40 53.431458 53.4314576 40 70 40C86.5685424 40 100 53.431458 100 70C100 86.568542 86.5685424 100 70 100zM260 80C248.954306 80 240 71.045694 240 60C240 48.954306 248.954306 40 260 40C271.045694 40 280 48.954306 280 60C280 71.045694 271.045694 80 260 80zM100 320.0000000000002C129.202009 320.0000000000002 150.54827 306.63504464 160.0148854 280L176.309483 214.8927204C191.2516718 213.7629924 205.842658 212.4640316 220.023336 210.9937846L220 280L260 280L260.0242 206.2371444C273.978006 204.3487456 287.41948 202.2704826 300.280828 200C312.743876 197.799831 320 190.4296874 320 180L319.996168 112.929272C305.3386280000001 129.5364984 283.892892 140.0109176 260.000668 140.0109176C222.732866 140.0109176 191.4175366 114.525934 182.5322214 80.033138L159.9781648 80.021836L159.4597272 80.050608C154.4702914 125.0274894 116.3315056 160.0054588 70.0229928 160.0054588C48.4690998 160.0054588 28.6850604 152.4279864 13.1895982 139.7917082L0.0928907468 139.7771786L0.0818882496 156.3500616C0.070283221 172.2728114 0.0526798512 191.5319618 0.0297708454 199.5502534C-1.6e-12 210.0116132 7.5242821 220.1984798 20 220.1984798L20 300C20 311.045695 28.954305 320.0000000000002 40 320.0000000000002L100 320.0000000000002zM120 280L60 280L60 220.1984798C85.8001104 219.7147856 111.0873338 218.8206704 135.6280022 217.508016L120 280z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Tractor.defaultProps = {
    size: IconSize.STANDARD,
};
Tractor.displayName = "Blueprint5.Icon.Tractor";
export default Tractor;
//# sourceMappingURL=tractor.js.map