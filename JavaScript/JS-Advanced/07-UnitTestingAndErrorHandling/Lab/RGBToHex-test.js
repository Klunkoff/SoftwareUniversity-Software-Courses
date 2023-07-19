const { rgbToHexColor } = require("./RGBToHex");
const { expect } = require('chai');

describe('RGB to Hex testing functionality', () => {

    it('Should return white color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('Should return black color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('Should return Supernova color', () => {
        expect(rgbToHexColor(255, 196, 5)).to.equal('#FFC405');
    });


    it('Out of upper boundary', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('Out of lower boundary', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('One of the arguments is string value', () => {
        expect(rgbToHexColor('12', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '12', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '12')).to.be.undefined;
    });

    it('Takes two arguments', () => {
        expect(rgbToHexColor(0, 0)).to.be.undefined;
    });

    it('Takes no arguments', () => {
        expect(rgbToHexColor()).to.be.undefined;
    });

});