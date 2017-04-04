'use strict'

class ImageRotator {
    rotate90(image) {
        var n = image.length;
        var outimg = new Array(n);

        for (var t = 0; t < n; t++) {
            outimg[t] = new Array(n);
        }

        var revimg = image.reverse();

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                outimg[j][i] = revimg[i][j];
            }
        }

        return outimg;
    }
}

module.exports = ImageRotator;
