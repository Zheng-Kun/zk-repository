function getSquare(config) {
    if (!config.color) {
        config.color = 'blue';
    }
    if (!config.width) {
        config.width = 10;
    }
    return config.width * config.width;
}
getSquare({ width: 10, name: 'square' });
getSquare({ width: 10, name: 'sd', other: 'square' });
getSquare({ haha: true });
var obj = {
    haha: true
};
getSquare(obj);
