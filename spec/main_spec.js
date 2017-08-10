"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("Lyrics output test", function(){
    sinon.spy(console, 'log');

    it("when pass 0", function(){

        var result = main(0);
        var expect_string = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(expect_string).to.equal(result);
    });

    it("when pass 1", function(){
        var result = main(1);
        var expect_string = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n' +
            'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(expect_string).to.equal(result);
    });
    it("when pass 2", function(){
        var result = main(2);
        var expect_string = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
            'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
            '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.\n' +
           'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        expect(expect_string).to.equal(result);
    });

});