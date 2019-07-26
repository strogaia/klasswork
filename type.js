function calculateConsume(distance, type){
    switch(type){
        case "bike": consume = 2; break;
        case "car": consume = 8; break;
        case "bus": consume = 10; break;

        default: alert("Don't know"); break;
    }
    return consume * distance / 100;
}
alert( calculateConsume(1000,"bike") );