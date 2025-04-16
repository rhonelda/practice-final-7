function hello(name){
    return(`hello ${name}`);
}

function square_feet_to_acre (square_feet) {
    return (square_feet/43560)
}
function minutes_to_mow (length,width,per_minute) {
    return (length*width/per_minute)
}

export {hello,square_feet_to_acre,minutes_to_mow} 