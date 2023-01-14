const assert = require('assert')
const { isTypedArray } = require('util/types')
const PaintCan = require('../paint_can')
const paint_can = require('../paint_can')

describe('Paint can', function() {
    let paintCan

    beforeEach(function() {
        paintCan = new PaintCan(40)
    })

    describe('Has property', function() {

        it('should have a number of liters of paint', function () {
            const actual = paintCan.litresOfPaint
            const expected = 40
            assert.strictEqual(actual, expected)
        })

        it('should be able to check if it is empty', function () {
            const actual = paintCan.isPaintEmpty()
            const expected = false
            assert.strictEqual(actual, expected)
        })

        it('should be able to empty itself of paint', function () {
            paintCan.emptyCan()
            const actual = paintCan.litresOfPaint
            const expected = 0
            assert.strictEqual(actual, expected)
        })


        
    })
})

// A paint can should:

// - have a number of litres of paint
// - be able to check if it is empty
// - be able to empty itself of paint