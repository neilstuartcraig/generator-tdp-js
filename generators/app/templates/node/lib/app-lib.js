"use strict";

function test1(arg1: number | string, arg2: number | string = "Badger")
{
    return `Arg 1 is ${arg1}, arg 2 is ${arg2}`;
}

module.exports =
{
    test1: test1
};
