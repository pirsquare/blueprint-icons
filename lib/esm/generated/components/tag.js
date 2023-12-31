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
export var Tag = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "tag", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M40 320C40 342.09139 57.90861 360 80 360L171.7537572 360C182.3624168 360 192.5365732 355.7857264 200.038028 348.2842712L348.23049 200.0918088C363.8514620000001 184.470838 363.8514620000001 159.144238 348.23049 143.523266L256.476734 51.76951C240.855762 36.148538 215.529162 36.148538 199.9081912 51.76951L51.7157288 199.961972C44.2142736 207.4634268 40 217.6375832 40 228.2462428L40 320zM109.772785 320.1298372C93.2580228 320.1298372 79.8701628 306.7419772 79.8701628 290.227215C79.8701628 273.7124528 93.2580228 260.324593 109.772785 260.324593C126.2875472 260.324593 139.675407 273.7124528 139.675407 290.227215C139.675407 306.7419772 126.2875472 320.1298372 109.772785 320.1298372z" : "M20 260C20 282.09139 37.90861 300 60 300L151.6850114 300C162.293671 300 172.4678274 295.7857264 179.9692826 288.2842712L288.222836 180.0307174C303.843808 164.4097456 303.843808 139.0831466 288.222836 123.4621748L196.5378252 31.777164C180.9168534 16.156192 155.5902544 16.156192 139.9692826 31.777164L31.7157288 140.0307174C24.2142736 147.5321726 20 157.706329 20 168.3149886L20 260zM89.740446 260.1483166C73.2333382 260.1483166 59.8516834 246.7666618 59.8516834 230.259554C59.8516834 213.7524462 73.2333382 200.3707914 89.740446 200.3707914C106.2475538 200.3707914 119.6292086 213.7524462 119.6292086 230.259554C119.6292086 246.7666618 106.2475538 260.1483166 89.740446 260.1483166z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Tag.defaultProps = {
    size: IconSize.STANDARD,
};
Tag.displayName = "Blueprint5.Icon.Tag";
export default Tag;
//# sourceMappingURL=tag.js.map