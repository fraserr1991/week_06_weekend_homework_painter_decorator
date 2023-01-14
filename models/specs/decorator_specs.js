
const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js')

describe('Decorator', function() {

    let decorator
    let paintCan1
    let paintCan2
    let room
    let room1

    beforeEach(function() {
        decorator = new Decorator
        paintCan1 = new PaintCan(50)
        paintCan2 = new PaintCan(10)
        room = new Room(40)
        room1 = new Room(100)

    })

    describe('Has property', function() {

        it('should start with an empty paint stock', function () {
            const actual = decorator.paint_stock
            const expected = []
            assert.deepStrictEqual(actual, expected)
        })

    })

    describe('addPaintCan()', function() {

        it('should add a can of paint to the paint stock', function () {
            decorator.addPaintCan(paintCan1)
            const actual = decorator.paint_stock
            const expected = [paintCan1]
            assert.deepStrictEqual(actual, expected)
        })
    })
    describe('calculateTotalLitersOfPaint()', function() {

        it('should be able to calculate total litres of paint in stock', function () {
            decorator.addPaintCan(paintCan1)
            decorator.addPaintCan(paintCan2)
            const actual = decorator.calculateTotalLitersOfPaint()
            const expected = paintCan1.litresOfPaint + paintCan2.litresOfPaint
            assert.deepStrictEqual(actual, expected)
        })
    })
    describe('calculateIfPaintForRoomIsEnough()', function() {

        it('should be able to calculate whether is has enough paint to paint a room', function () {
            decorator.addPaintCan(paintCan1)
            decorator.addPaintCan(paintCan2)
            const actual = decorator.calculateIfPaintForRoomIsEnough('70')
            const expected = false
            assert.deepStrictEqual(actual, expected)
        })
    })

    describe('paintRoomIfEnoughPaintInStock()', function() {

        it('should be able to paint room if has enough paint in stock (there is enough)', function () {
            decorator.addPaintCan(paintCan1)
            decorator.addPaintCan(paintCan2)
            const actual = decorator.paintRoomIfEnoughPaintInStock(room.areaInSquareMeters)
            const expected = true
            assert.strictEqual(actual, expected)
            // assert.deepStrictEqual(actual1,expected1)
        })
        it('should be able to paint room if has enough paint in stock (there isn\'t enough)', function () {
            decorator.addPaintCan(paintCan1)
            decorator.addPaintCan(paintCan2)
            const actual = decorator.paintRoomIfEnoughPaintInStock(room1.areaInSquareMeters)
            const expected = false
            assert.strictEqual(actual, expected)
            // assert.deepStrictEqual(actual1,expected1)
        })
    })
})
    
// A decorator should:

// - start with an empty paint stock
// - be able to add a can of paint to paint stock
// - be able to calculate total litres paint it has in stock
// - be able to calculate whether is has enough paint to paint a room
// - be able to paint room if has enough paint in stock
