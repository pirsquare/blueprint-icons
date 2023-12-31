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
export const Inbox = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "inbox", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M338.4000000000001 328.8L338.4000000000001 328.8L338.2 329.2L338.2 329.2C335 336.2 328.2 341.2 320 341.2H80C71.8 341.2 64.8 336.2 61.8 329.2L61.8 329.2L61.6 328.8L61.6 328.8L0 190.2V61C0 50 9 41 20 41H380C391 41 400 50 400 61V190.2000000000001L338.4000000000001 328.8zM300 181C289 181 280 172 280 161V141H120V161C120 172 111 181 100 181H39.6L93 301H307L360.4 181H300z" : "M278.2 268C278.2 268 278.2 268 278.2 268L278.2 268L278.2 268C275 275.2 268 280.2 259.8 280.2H59.8C51.6 280.2 44.4 275.2 41.4 268L41.4 268L41.4 268C41.4 268 41.4 268 41.4 268L-0.2 171V60.2000000000001C-0.2 49.2 8.8 40.2 19.8 40.2H299.8C310.8 40.2 319.8 49.2 319.8 60.2000000000001V171L278.2 268zM239.8 160.2C228.8 160.2 219.8 151.2 219.8 140.2V120.2H99.8V140.2C99.8 151.2 90.8 160.2 79.8 160.2H38.8L73 240.2H246.6L280.8 160.2H239.8z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Inbox.defaultProps = {
    size: IconSize.STANDARD,
};
Inbox.displayName = `Blueprint5.Icon.Inbox`;
export default Inbox;
//# sourceMappingURL=inbox.js.map