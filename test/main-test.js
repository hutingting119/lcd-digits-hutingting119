describe('lcd', function() {

    var inputs;
    var loadAllLcd;

    beforeEach(function () {
        inputs = 910;
        loadAllLcd = lcdDigts();

    });
    describe('unit testing', function () {

        describe('test splitNumbers function', function () {
               it('should print correct number', function () {
                var numbers = [9, 1, 0];
                expect(splitNumbers(inputs)).toEqual(numbers);
            });
        });

        describe('test matchLcdDigts function', function () {
            var numbers = [9, 1, 0];
            it('should print correct lcdDigts', function () {
                var lcdDigts = [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']];
                expect(matchLcdDigts(loadAllLcd, numbers)).toEqual(lcdDigts);
            });
        });
        });

    describe('integration testing', function () {
        var loadAllLcd;
        var inputs;
         beforeEach(function () {
         loadAllLcd = lcdDigts();
          inputs=910;
         });
        it('should print correct text', function () {
            spyOn(console, 'log');
            printReceipt(inputs);
            var expectText =
                '._. ... ._. \n' +
                '|_| ..| |.| \n' +
                '..| ..| |_| \n';
            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});
