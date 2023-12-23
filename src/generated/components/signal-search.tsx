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

export const SignalSearch: React.FC<SVGIconProps> = React.forwardRef<any, SVGIconProps>((props, ref) => {
    const isLarge = props.size! >= IconSize.LARGE;
    const pixelGridSize = isLarge ? IconSize.LARGE : IconSize.STANDARD;
    const translation = `${-1 * pixelGridSize / 0.05 / 2}`;
    return (
        <SVGIconContainer iconName="signal-search" ref={ref}  {...props}>
            <path
                d={isLarge ? "M142.9819366 193.417704C160.755405 177.394016 182.974199 166.206544 207.564874 161.928734L254.089464 22.324672C257.151544 13.486748 252.218194 3.968984 243.372186 0.909704C234.52618 -2.149578 224.829594 2.779264 221.93763 11.6171880000001L197.4409958 85.039936L142.4936824 85.039936L117.9970474 11.6171880000001C115.1050836 2.779264 105.4084988 -1.979618 96.5624918 0.909704C87.7164846 3.799024 82.95325 13.486748 85.845214 22.324672L142.9819366 193.417704zM170.0523968 167.300606L153.8914224 119.031948L186.0432558 119.031948L170.0523968 167.300606zM100 290C100 274.7877548 102.6128776 260.18578 107.4143232 246.6183848C97.4792222 225.4795872 101.1446342 199.481608 121.4798722 180.800994C129.1749846 173.732012 129.5597402 162.012386 122.2493834 154.571354C114.9390268 147.13032 102.819225 146.758268 95.1241126 153.82725C51.4543504 194.008828 55.1095288 256.3274774 95.3164904 292.6025126C96.7765886 293.9085092000001 98.4029134 294.9533066 100.1271272 295.7369046C100.041057 293.8042030000001 100 291.9068962 100 290zM77.4825744 136.293404C50.563598 154.653264 33.7392378 189.703902 33.7392378 223.0854636C33.7392378 258.1361028 48.881162 288.1795076 77.4825744 309.8775224C85.8947544 314.8847564 85.8947544 326.5683028 80.8474464 333.244615C75.8001384 341.5900054 64.0230862 341.5900054 57.2933422 336.5827712C20.2797496 308.2084442000001 -1.591918598 269.8196490000001 0.0905174224 223.0854636C1.772953444 178.020356 23.6446218 134.624326 57.2933422 109.588156C60.6582142 107.919078 64.0230862 106.25 67.3879582 106.25C72.4352664 106.25 77.4825744 107.919078 80.8474464 112.926312C87.5771906 121.271702 85.8947544 131.28617 77.4825744 136.293404zM244.926326 153.824078C237.243584 146.759514 225.143268 147.131332 217.844664 154.567716C215.96063 156.487316 214.58853 158.691836 213.718454 161.030986C219.057778 160.34294 224.48884 160 230 160C237.811054 160 245.46121 160.688892 252.8930220000001 162.009236C250.44238 159.186908 247.785984 156.457906 244.926326 153.824078zM292.629014 170.473868L317.183346 145.906512C308.030612 131.698138 296.377932 119.27024 282.711932 109.588156C279.34642 107.919078 275.980906 106.25 272.615394 106.25C267.5671260000001 106.25 262.5188560000001 107.919078 259.153344 112.926312C252.422318 121.271702 254.105076 131.28617 262.5188560000001 136.293404C274.91466 144.746248 285.170338 156.736976 292.629014 170.473868L292.629014 170.473868zM230 400C290.8 400 340 350.8 340 290C340 284.8 339.6 279.8 338.8 275L338.2 271.6C337.4000000000001 266.6 336.2 261.8 334.8 257L334.8 256.8C333.2 252 331.4 247.4 329.2000000000001 243C329 242.2 328.6 241.6 328.2 240.8C326 236.2 323.4000000000001 232 320.6 227.8L394.2000000000001 154.2C397.8 150.6 400 145.6 400 140C400 129 391 120 380 120C374.4 120 369.4 122.2 366 125.8L292.4 199.4C288.2 196.6 284 194 279.4000000000001 191.8C278.6 191.6 278 191.2 277.2 190.8C272.8 188.6 268.2 186.8 263.4 185.2L263.2 185.2C258.4 183.8 253.6 182.6 248.6 181.8L245.2 181.2C240.2 180.4 235.2 180 230 180C169.2 180 120 229.2 120 290C120 350.8 169.2 400 230 400zM230 370C185.8 370 150 334.2 150 290C150 245.8 185.8 210 230 210C274.2000000000001 210 310 245.8 310 290C310 334.2 274.2000000000001 370 230 370z" : "M109.4823658 160.5760082C116.4400596 153.3260918 124.4210696 147.0661448 133.1956504 142.0259124L133.334363 141.6429264L133.7091872 140.5181156C134.0090468 139.7682418 134.4588358 139.3183176 134.6087656 138.5684438L164.5947096 18.588632C166.543796 10.63997 161.746045 2.391358 153.64984 0.441686C145.703565 -1.507986 137.4574302 3.291206 135.508344 11.389844L127.1122796 44.98419L113.0188858 44.98419L104.6228216 11.389844C102.6737352 3.291206 94.5775302 -1.507986 86.4813254 0.441686C78.3851204 2.391358 73.5873694 10.489994 75.5364558 18.588632L105.5223998 138.5684438C105.6723296 139.3183176 106.1221188 139.7682418 106.4219782 140.5181156C106.7218376 141.2679894 106.7218376 142.0178634 107.1716268 142.7677372C105.972189 144.8673838 105.0726106 147.26698 105.0726106 149.9665258C105.0726106 154.0908318 106.75932 157.840201 109.4767962 160.5584936L109.4823658 160.5760082zM55.8956624 214.4556746C61.5929918 220.4546652 61.443062 229.9030754 55.595803 235.7520912C49.7485438 241.601107 40.1530418 241.3011574 34.3057826 235.4521416C-11.42278212 188.6600152 -11.42278212 111.273036 34.3057826 64.48091C40.1530418 58.48192 49.5986142 58.48192 55.4458732 64.18096C61.2931322 69.880002 61.443062 79.478386 55.7457326 85.327402C21.5617564 120.571472 21.5617564 179.3615796 55.8956624 214.4556746L55.8956624 214.4556746zM156.1642786 132.2405208C165.6247038 129.4799736 175.636411 128 186 128C186.5849678 128 187.1688144 128.0047152 187.7515042 128.0141096C185.0296064 120.3540608 180.7027146 113.496366 174.640001 108.423516C168.193023 103.1744 158.7474506 104.074248 153.4999104 110.373188C148.2523702 116.822102 149.1519484 126.270513 155.4489968 131.5196298L156.1642786 132.2405208zM230.8704 137.904922L238.44256 130.346824C234.61642 106.16943 223.69711 83.012586 205.675454 64.630884C199.9781238 58.631894 190.5325514 58.631894 184.5353626 64.330936C178.5381736 70.029976 178.388244 79.628362 184.235503 85.477378C196.566834 98.081736 204.469256 113.742768 207.94277 130.2648078C215.954558 131.9440888 223.635344 134.528078 230.8704 137.904922zM81.0838554 131.5196298C72.5378614 138.5684438 74.0371586 163.1643052 80.4841366 167.9634976C87.0810442 172.9126648 88.4304116 182.361075 83.482731 188.9599646C78.5350502 195.5588542 69.0894778 196.9086272 62.49257 191.95946C40.9026904 175.9121602 38.0540256 128.3701598 61.8928512 108.423516C68.1898994 103.1744 77.6354718 103.924274 83.0329418 110.373188C88.280482 116.672128 87.3809036 126.270513 81.0838554 131.5196298zM186.351472 320C234.041034 320 272.702944 281.338091 272.702944 233.648528C272.702944 229.5272078 272.310438 225.602141 271.721678 221.677074C271.5254240000001 220.6958074 271.5254240000001 219.910794 271.32917 218.9295272C270.5441580000001 215.0044604 269.759144 211.2756468 268.5816240000001 207.5468332L268.5816240000001 207.3505798C267.404104 203.6217662 265.834076 200.089206 264.26405 196.5566458L263.479036 194.7903658C261.712756 191.2578056 259.750224 187.9214986 257.5914360000001 184.5851918L315.28992 126.8867082C318.037466 123.9429082 319.803746 120.0178412 320 115.700268C320 107.06512 312.93488 100 304.299732 100C299.785906 100 295.860838 101.76628 293.113292 104.513826L235.414808 162.2123104C232.078502 160.0535236 228.742194 158.0909902 225.209634 156.32471L223.443354 155.5396966C219.910794 153.96967 216.378234 152.3996432 212.64942 151.2221232L212.453166 151.2221232C208.724354 150.044603 204.99554 149.0633364 201.070472 148.4745762C200.089206 148.278323 199.1079394 148.0820696 198.322926 148.0820696C194.397859 147.4933096 190.4727922 147.1008028 186.351472 147.1008028C138.661909 147.1008028 100 185.7627118 100 233.4522748C100 281.1418376000001 138.661909 319.8037466548 186.351472 320zM185.960025 298C150.5821362 298 122 269.4178638 122 234.039975C122 198.6620862 150.5821362 170.07995 185.960025 170.07995C221.337914 170.07995 249.92005 198.6620862 249.92005 234.039975C249.92005 269.4178638 221.337914 298 185.960025 298z"}
                fillRule="evenodd"
                transform-origin="center"
                transform={`scale(0.05, -0.05) translate(${translation}, ${translation})`}
            />
        </SVGIconContainer>
   )
});
SignalSearch.defaultProps = {
    size: IconSize.STANDARD,
};
SignalSearch.displayName = `Blueprint5.Icon.SignalSearch`;
export default SignalSearch;
