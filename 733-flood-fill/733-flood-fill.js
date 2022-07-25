/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if(image[sr][sc] === color) {
        return image;
    }
    let prevColor = image[sr][sc];
    checkAdjacent(image, sr, sc, prevColor, color);
    return image
};

var checkAdjacent = (image, row, column, prevColor, color) => {
    if(row < 0 || column < 0 || row >= image.length || column >= image[0].length || image[row][column] !== prevColor) {
        return;
    }
    console.log(row, column)
    image[row][column] = color;
    checkAdjacent(image, row+1, column, prevColor, color);
    checkAdjacent(image, row-1, column, prevColor, color);
    checkAdjacent(image, row, column+1, prevColor, color);
    checkAdjacent(image, row, column-1, prevColor, color);
    
}