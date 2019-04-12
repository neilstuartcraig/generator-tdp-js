"use strict";

import * as config from "../config/<%= GTNOpts.appConfigFilename %>"; // NOTE: Path is relative to build dir (dist/)
import {test1} from "./lib/<%= GTNOpts.appLibFilename %>"; // NOTE: Path is relative to build dir (dist/) - local because lib is babel'd


const arg1: string = config.testArg;
const ret: string = test1(arg);
console.log(`Hello! test1("${arg1}") returns "${ret}"`);
