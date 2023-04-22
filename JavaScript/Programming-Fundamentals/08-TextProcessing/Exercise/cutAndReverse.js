function cutAndReverse(string) {
 
    let stringLength = string.length;
    let cutIndex = (stringLength / 2);
    let stringFirstHalf = string.substring(0, cutIndex);
    let stringSecondHalf = string.substring(cutIndex);
 
    let resultFirstHalf = stringFirstHalf
        .split('')
        .reverse()
        .join('');
 
    let resultSecondHalf = stringSecondHalf
        .split('')
        .reverse()
        .join('');
 
    console.log(resultFirstHalf);
    console.log(resultSecondHalf);
}
 
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');