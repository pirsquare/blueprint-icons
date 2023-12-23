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
export var Geofence = React.forwardRef(function (props, ref) {
    var isLarge = props.size >= IconSize.LARGE;
    var pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    var translation = "".concat(-1 * pixelGridSize / 0.05 / 2);
    return (React.createElement(SVGIconContainer, __assign({ iconName: "geofence", ref: ref }, props),
        React.createElement("path", { d: isLarge ? "M160 180L161.5047708 179.944242L164.0145152 179.595198L166.2428504 179.005238L168.464431 178.126532L170.414175 177.08009L172.340447 175.741446L174.1428162 174.141782C174.8500166 173.434254 175.493741 172.686512 176.0733084 171.906132L177.5065766 169.681242L178.5754902 167.42672L179.2830972 165.31986L179.8618568 162.36191L180 159.979706L180 40C180 28.954306 171.045695 20 160 20C149.7432832 20 141.2898568 27.720804 140.1345546 37.667578L140 40L140 111.72L34.1421356 5.8578640000001C26.3316498 -1.952622 13.66835022 -1.952622 5.85786438 5.8578640000001C-1.351814856 13.067544 -1.906405566 24.412164 4.19409224 32.257988L5.85786438 34.1421359999999L111.68 140L40.0796508 140C29.0339558 140 20.0796508 148.954306 20.0796508 160C20.0796508 170.256716 27.8004546 178.710144 37.7472284 179.865446L40.0796508 180L160 180zM220.353532 399.99730602694C221.742358 399.9721704388 223.119904 399.8031605912001 224.467234 399.49494119C225.7284200000001 399.210404934 226.961728 398.800930584 228.1558340000001 398.26732539L230.54701 396.99909132L231.181828 396.58468328L233.172254 395.04964176L393.725474 254.5115684L394.957418 253.2394958L396.324354 251.5233122L397.20639 250.1629134L398.484412 247.6006474L399.285032 245.2595818L399.767848 243.0000786L399.982762 240.8332014L399.971428 238.8282252L399.835502 237.3833294L399.4621560000001 235.3299866L398.71651 232.8950534L397.9415800000001 231.1108168L396.9587580000001 229.3574988L297.019108 69.489968C295.8149440000001 67.54418 294.286408 65.820288 292.50898 64.393776L290.644976 63.065146L288.736888 62.004198L287.006182 61.265966L284.507568 60.5100240000001C283.083748 60.184628 281.616072 60.009688 280.140066 59.997958L220 59.997958L220 160C220 191.953618 195.0216008 218.0732176 163.5254558 219.8981462L160 220L60 220L60 280C60.0076872 285.4561596 62.228822 290.822099 66.4243496 294.689681L68.3752362 296.2746694L208.375236 396.27466942C209.097784 396.79077536 209.842968 397.2519392 210.605814 397.65898986C211.66371 398.225299292 212.768174 398.688943632 213.899952 399.050165764C215.053414 399.421521056 216.217094 399.679513636 217.388064 399.832696902L220.353532 399.99730602694z" : "M120 140C131 140 140 131 140 120L140 120L140 40C140 29 131 20 120 20C109 20 100 29 100 40L100 40L100 71.8L34.2 5.8C30.6 2.2 25.6 0 20 0C9 0 4.4e-12 9 4.4e-12 20C4.4e-12 25.6 2.2 30.6 6 34.2L6 34.2L71.8 100L40 100C29 100 20 109 20 120C20 131 29 140 40 140L40 140zM181.7513244 319.9238973876L183.7059536 319.65732403L185.6438468 319.188227496L186.7743274 318.823554982L188.7679404 317.980513L189.8682892 317.4009627600001L191.7648664 316.18039794L192.803688 315.3644256L312.803688 215.3644256L313.808364 214.4692662L315.326578 212.8568274L316.389862 211.4705122L317.569974 209.5660614L318.603692 207.3438056C319.71095 204.5336696 320.179526 201.4869304 319.944042 198.4432986L319.66598 196.3302288L318.910844 193.4738316L318.222312 191.7447336L317.364862 190.0772212L237.364862 50.077222L236.680414 48.964022L235.506858 47.367912L234.742414 46.478998L232.81395 44.637064L230.53434 42.995664L228.224526 41.76393L226.497718 41.079818L224.320188 40.468408L222.332422 40.134554L220.943752 40.019754L176.5935068 40.019754C178.3584452 45.02116 179.4796378 50.324626 179.8575174 55.83241L180 60L180 120C180 151.9536176 155.0216008 178.0732176 123.5254558 179.8981462L120 180L60 180C52.973628 180 46.2293474 178.7922228 39.9634404 176.5729504L40 220L40.0469564 221.3813346L40.2924582 223.4080052L40.5923554 224.8510144L41.0978674 226.5501266L41.9581402 228.6406776L43.0748944 230.6606106L43.9768114 231.9781248L45.5574476 233.8413760000001L47.2420406 235.4031072L48.905996 236.6410058L168.905996 316.64100588L170.3017282 317.49246314L172.7093812 318.627809038L174.922276 319.346295756L177.0760668 319.785307096L178.732873 319.963137805L179.3682024 319.9902335706001C180.2886398 320.01324136752 181.0221554 319.9884539969 181.7513244 319.9238973876z", fillRule: "evenodd", "transform-origin": "center", transform: "scale(0.05, -0.05) translate(".concat(translation, ", ").concat(translation, ")") })));
});
Geofence.defaultProps = {
    size: IconSize.STANDARD,
};
Geofence.displayName = "Blueprint5.Icon.Geofence";
export default Geofence;
//# sourceMappingURL=geofence.js.map