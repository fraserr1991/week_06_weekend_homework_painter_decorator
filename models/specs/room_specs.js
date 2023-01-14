const assert = require('assert');
const Room = require('../room.js');

describe('Room', function() {

    let room

    beforeEach(function() {
        room = new Room(50)

    })

    describe('Has property', function() {

        it('should have an area in square meters', function () {
            const actual = room.areaInSquareMeters
            const expected = 50
            assert.strictEqual(actual, expected)
        })

        it('should start unpainted', function() {
            const actual = room.isPainted
            const expected = false
            assert.strictEqual(actual, expected)
        })

    })

    describe('paint()', function() {

        it('should be able to be painted', function() {
            room.paint()
            const actual = room.isPainted
            const expected = true
            assert.strictEqual(actual, expected)
        })

    })

})
