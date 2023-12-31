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
import { IconSize } from "../../iconTypes";
import { SVGIconContainer } from "../../svgIconContainer";
export const TimelineLineChart = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "timeline-line-chart", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M380 80H40V111.8L140 211.8L205.8 146C209.4 142.2 214.4 140 220 140S230.6 142.2 234.2 145.8L374.2000000000001 285.8C377.8 289.4 380 294.4 380 300C380 311 371 320 360 320C354.4 320 349.4 317.8 345.8 314.2L220 188.2L154.2 254.2C150.6 257.8 145.6 260 140 260S129.4 257.8 125.8 254.2L40 168.2V340C40 351 31 360 20 360S0 351 0 340V60C0 57.2 0.6 54.6 1.6 52.2C4.6 45 11.8 40 20 40H380C391 40 400 49 400 60C400 71 391 80 380 80z" : "M300 80H40V131.8L100 191.8L165.8 126C169.4 122.2 174.4 120 180 120S190.6 122.2 194.2 125.8L314.2000000000001 245.8C317.8 249.4 320 254.4 320 260C320 271 311 280 300 280C294.4000000000001 280 289.4000000000001 277.8 285.8 274.2L180 168.2L114.2 234.2C110.6 237.8 105.6 240 100 240S89.4 237.8 85.8 234.2L40 188.2V260C40 271 31 280 20 280S0 271 0 260V60C0 49 9 40 20 40H300C311 40 320 49 320 60C320 71 311 80 300 80z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
TimelineLineChart.defaultProps = {
    size: IconSize.STANDARD,
};
TimelineLineChart.displayName = `Blueprint5.Icon.TimelineLineChart`;
export default TimelineLineChart;
//# sourceMappingURL=timeline-line-chart.js.map