var temprature = 16;
function testSwitch() {
    switch (temprature) {
        case 16 :
            console.log('cool');
            break;
        case 40:
            console.log('hot');
            break;
        default:
            console.log('unknown temperature');
            break;
    }
}
testSwitch();