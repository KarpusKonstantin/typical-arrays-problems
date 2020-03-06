
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length === 0) { return 0}
    array.sort((a,b) =>{return a-b});
    return array[0];
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length === 0) { return 0}
    array.sort((a,b) =>{return b-a});
    return array[0];
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length === 0) { return 0}

    let a = 0;
    for (let i = 0; i < array.length; i++) {
        a = a + array[i];
    }
  return a/array.length;
}
