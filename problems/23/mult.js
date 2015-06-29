var index = 1; 
    while (index <= 12){
        for (var x = 1; x <= 12; x++){
            var numString = '';
            var mult = x * index;
            if (mult < 10){
                numString += '   ';
            }
            else if (mult < 100){
                numString += '  ';
            }
            else {
                numString += ' '
            }
            if (x === 1){
                numString.trim();
            }
            numString += mult;
            process.stdout.write(numString);
        }
    process.stdout.write('\n');
    index++;
}