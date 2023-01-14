const PaintCan = function(litresOfPaint) {
    this.litresOfPaint = litresOfPaint
}

PaintCan.prototype.isPaintEmpty = function() {
    if (this.litresOfPaint > 0) {
        return false
    } else {
        return true
    }
}

PaintCan.prototype.emptyCan = function() {
    this.litresOfPaint = 0
}

module.exports = PaintCan
// A paint can should:

// - have a number of litres of paint
// - be able to check if it is empty
// - be able to empty itself of paint