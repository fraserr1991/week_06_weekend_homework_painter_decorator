//initiate the Decorator class
const Decorator = function () {
    this.paint_stock = []
}

Decorator.prototype.addPaintCan = function(paintCan) {
    this.paint_stock.push(paintCan)
}

Decorator.prototype.calculateTotalLitersOfPaint = function() {
    //could I use a method to be quicker with this?
    totalLitresOfPaint = 0
    for (paintCan of this.paint_stock) {
        totalLitresOfPaint += paintCan.litresOfPaint
    }
    return totalLitresOfPaint
}

Decorator.prototype.calculateIfPaintForRoomIsEnough = function(roomSize) {
    const totalLitersOfPaint = this.calculateTotalLitersOfPaint()
    if (totalLitersOfPaint >= roomSize) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.paintRoomIfEnoughPaintInStock = function(roomSize) {
    let runningTotalPaintUsedOnRoom = 0
    const isPaintEnough = this.calculateIfPaintForRoomIsEnough(roomSize)
    if (isPaintEnough === true) {
        while(runningTotalPaintUsedOnRoom < roomSize) {
            for (paintCan of this.paint_stock) {
                runningTotalPaintUsedOnRoom += paintCan.litresOfPaint 
                paintCan.emptyCan()
            }
        }
    let roomPainted = true
    return roomPainted
    }
    return false
}
//     let runningTotalPaintUsedOnRoom = 0
//     const isPaintEnough = calculateIfPaintForRoomIsEnough(roomSize)
//     if (isPaintEnough === true) {
//         while(runningTotalPaintUsedOnRoom < roomSize) {
//             for (paintCan of this.paint_stock) {
//                 runningTotalPaintUsedOnRoom += paintCan.litresOfPaint 
//                 paintCan.emptyCan()
//             }
//         }
//     }
// }

module.exports = Decorator

// A decorator should:

// - start with an empty paint stock
// - be able to add a can of paint to paint stock
// - be able to calculate total litres paint it has in stock
// - be able to calculate whether is has enough paint to paint a room
// - be able to paint room if has enough paint in stock
