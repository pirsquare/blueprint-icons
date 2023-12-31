"use strict";
/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapWithTimer = void 0;
var tslib_1 = require("tslib");
/** Returns whether bundler-injected variable `NODE_ENV` equals `env`. */
function isNodeEnv(env) {
    return typeof NODE_ENV !== "undefined" && NODE_ENV === env;
}
/**
 * Wraps an async task with a performance timer. Only logs to console in development.
 */
function wrapWithTimer(taskDescription, task) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var shouldMeasure, start, time;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shouldMeasure = isNodeEnv("development") && typeof performance !== "undefined";
                    /* eslint-disable no-console */
                    if (shouldMeasure) {
                        start = performance.now();
                        console.info("Started '".concat(taskDescription, "'..."));
                    }
                    return [4 /*yield*/, task()];
                case 1:
                    _a.sent();
                    if (shouldMeasure) {
                        time = Math.round(performance.now() - start);
                        console.info("Finished '".concat(taskDescription, "' in ").concat(time, "ms"));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.wrapWithTimer = wrapWithTimer;
//# sourceMappingURL=loaderUtils.js.map