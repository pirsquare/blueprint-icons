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
export var FeedSubscribed = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "feed-subscribed", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0S100 22.4 100 50C100 77.6 77.6 100 50 100zM60 360C95.2 360 128.8 353.8 160.2 342.6C160.8 356.8 166.4 369.6 175.2 379.6C139.2 392.6 100.6 400 60 400C49 400 40 391 40 380S49 360 60 360zM266.4 266.6C270 263 275 260.8 280.4 260.8C285.8 260.8 290.8 263 294.4 266.6L394 366.2C397.8 369.6 400 374.6 400 380.2C400 391.2 391 400.2 380 400.2C374.6 400.2 369.6 398 366 394.4L280.6 309L235.0000000000001 354.6C231.4000000000001 358.2 226.4000000000001 360.4 221.0000000000001 360.4C210 360.4 201.2000000000001 351.4 201.2000000000001 340.4C201.2000000000001 334.8 203.4 330 207 326.4L266.4 266.6zM60 200C49 200 40 191 40 180S49 160 60 160C115.2 160 160 115.2 160 60C160 49 169 40 180 40S200 49 200 60C200 137.4 137.4 200 60 200zM338.8 253.8L322.4000000000001 237.4000000000001L322 237.8C318.0000000000001 233.8 313.6 230.4000000000001 308.6 227.6C341.2 179.8 360 122.2 360 60C360 49 369 40 380 40S400 49 400 60C400 132.2 377.2 198.8 338.8 253.8zM60 300C49 300 40 291 40 280S49 260 60 260C170.4 260 260 170.4 260 60C260 49 269 40 280 40S300 49 300 60C300 192.6 192.6 300 60 300z" : "M60 280C81.2 280 101.6 276.8 121.2 271C123.8 285.2 131.6 297.4 142.2 306.2C116.4 315 88.8 320 60 320C49 320 40 311 40 300S49 280 60 280zM40 80C18 80 0 62 0 40C0 18 18 0 40 0S80 18 80 40C80 62 62 80 40 80zM206.4 206.6C210 203 215 200.8 220.4 200.8C225.8 200.8 230.8 203 234.4 206.6L314 286.2C317.8 289.8 320 294.6 320 300.2C320 311.2 311 320 300 320C294.4000000000001 320 289.6 317.8 286 314.2L220.4 248.6L194.6 274.4C191 278 186 280.2 180.6 280.2C169.6 280.2 160.6 271.2 160.6 260.4C160.6 255 162.8 250 166.4 246.4L206.4 206.6zM281 196L262.4000000000001 177.4L262 177.8C258.6 174.4 255.0000000000001 171.2 250.8 168.8C269.4000000000001 136.8 280 99.6 280 60C280 49 289 40 300 40S320 49 320 60C320 110 305.4 156.4 281 196zM60 160C49 160 40 151 40 140S49 120 60 120C93.2 120 120 93.2 120 60C120 49 129 40 140 40S160 49 160 60C160 115.2 115.2 160 60 160zM178.2 178.2L177.6 177.6L137.6 217.6L138.2 218.2C136 220.4 133.6 222.2 131.6 224.8C109.6 234.4 85.6 240 60 240C49 240 40 231 40 220S49 200 60 200C137.4 200 200 137.4 200 60C200 49 209 40 220 40S240 49 240 60C240 97.4 228.6 132.2 209 161.2C196.8 163.4 186.4 169.6 178.2 178.2z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
FeedSubscribed.defaultProps = {
    size: IconSize.STANDARD,
};
FeedSubscribed.displayName = "Blueprint5.Icon.FeedSubscribed";
export default FeedSubscribed;
//# sourceMappingURL=feed-subscribed.js.map