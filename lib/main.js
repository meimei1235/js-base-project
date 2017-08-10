function main(num) {
    let lyrics = [];
        while(num >= 0) {
            lyrics.push(wordClassify(num));
            num--;
        }
    return lyrics.join('\n');
}
function getOneWord(count1, unit1, count2, unit2) {
    let word = '';
    if (count1 == 'No more') {
        word = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.';
        return word;
    }else {
        word = count1 + ' ' + unit1 + ' ' + 'of beer on the wall, ' + count1 + ' ' + unit1 + ' ' +
            'of beer.\n' + 'Take one down and pass it around, ' + count2 + ' ' + unit2 + ' of beer on the wall.';
    }
    return word;
}
function wordClassify(count) {
    if (count == 0) {
        return getOneWord('No more', 'bottles', 0, 'bottles' );
    }else if (count == 1) {
        return getOneWord(1, 'bottle', 'no more', 'bottles');
    }else if (count == 2) {
        return getOneWord(2, 'bottles', 1, 'bottle');
    }else {
        return getOneWord(count, 'bottles', count-1, 'bottles');
    }
}
module.exports = main;
// let str = main(99);
// console.log(str);