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
export const Learning = React.forwardRef((props, ref) => {
    const isLarge = props.size >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (React.createElement(SVGIconContainer, { iconName: "learning", ref: ref, ...props },
        React.createElement("path", { d: isLarge ? "M211.025884 377.45145018C204.327718 380.849516608 195.6695552 380.849516608 188.975025 377.45145018L9.12816108 282.2228476C-3.04272036 276.0424908 -3.04272036 263.9560918 9.12816108 257.7785596L188.975025 162.542216C195.6695552 159.14415 204.327718 159.14415 211.025884 162.542216L390.8691120000001 257.7785596C403.04363 263.9560918 403.04363 276.0424908 390.8691120000001 282.2228476L211.025884 377.45145018zM360 269.9968334L360.32922 179.716092C360.369136 168.76966 369.254204 159.916934 380.20071 159.916934C391.135556 159.916934 400 168.781378 400 179.716224L400 269.9968334L400 269.9968334L360 269.9968334zM67.3226902 199.3374188L195.3493856 132.177958C198.2574554 130.65246 201.729166 130.651974 204.637664 132.176656L332.760378 199.3406872C335.206126 200.622788 338.2281420000001 199.6794664 339.510244 197.2337192C339.885692 196.5175094 340.081826 195.7209226 340.081826 194.9122704L340.081826 92.739564C340.081826 90.841804 339.00745 89.107626 337.308208 88.262598L204.493676 22.214346C201.689 20.819588 198.3928272 20.819588 195.5881508 22.214346L62.7736186 88.262598C61.074377 89.107626 60 90.841804 60 92.739564L60 194.909653C60 197.6710768 62.2385762 199.909653 65 199.909653C65.8091264 199.909653 66.606166 199.7132888 67.3226902 199.3374188z" : "M168.8207072 297.91480954C163.462174 300.69506349 156.5356442 300.69506349 151.18002 297.91480954L7.30252886 220C-2.43417628 214.943312 -2.43417628 205.0543768 7.30252886 200L151.18002 122.0788574C156.5356442 119.2986034 163.462174 119.2986034 168.8207072 122.0788574L312.69529 200C322.434904 205.0543768 322.434904 214.943312 312.69529 220L168.8207072 297.91480954zM280 209.9968334L280.32922 119.7160926C280.369136 108.7696596 289.254204 99.916934 300.20071 99.916934C311.135556 99.916934 320 108.781378 320 119.7162242L320 209.9968334L320 209.9968334L280 209.9968334zM67.4240658 139.0634448L155.160337 90.429972C158.1753504 88.758708 161.8385762 88.758178 164.8540724 90.428572L252.659026 139.0669492C255.074602 140.4050258 258.11754 139.531539 259.455616 137.115962C259.8663420000001 136.3744958 260.0818260000001 135.5407846 260.0818260000001 134.6931602L260.0818260000001 75.591454C260.0818260000001 73.733896 259.052044 72.029446 257.4077000000001 71.165358L164.6926586 22.44445C161.7803086 20.914036 158.3015184 20.914036 155.3891684 22.44445L62.6741274 71.165358C61.0297826 72.029446 60 73.733896 60 75.591454L60 134.6903562C60 137.4517798 62.2385762 139.6903562 65 139.6903562C65.848114 139.6903562 66.6822902 139.4746216 67.4240658 139.0634448z", fillRule: "evenodd", "transform-origin": "center", transform: `scale(0.05, -0.05) translate(${translation}, ${translation})` })));
});
Learning.defaultProps = {
    size: IconSize.STANDARD,
};
Learning.displayName = `Blueprint5.Icon.Learning`;
export default Learning;
//# sourceMappingURL=learning.js.map