"use strict";

const fun = require("./functions.js");
const assert = require("assert");

/* 1.	Prime Check. */


describe("checkPrime", function () {

    it("37 is prime", function () {
        assert.strictEqual(fun.checkPrime(37), true); 
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(fun.checkPrime(77), false);
    });
});



// 2a-  area of circle 
describe("areaOfCircle", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.areaOfCircle(1), Math.PI );
    });

});

// 2b- volume of cylinder 
describe("volumeOfCylinder", function () {

    it("area of unit circle is Pi", function () {
        assert.strictEqual(fun.volumeOfCyliner(1, 1), Math.PI * Math.PI);
    });

});
//3- volume of a house
describe("houseVolume", function () {

    it("the volume of a house is 2080", function () {
        assert.strictEqual(fun.houseVolume(16, 10, 10, 10), 2080);
    });

});