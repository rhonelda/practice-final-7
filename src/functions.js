function hello(name){
    return(`hello ${name}`);
}

function square_feet_to_acre (square_feet) {
    return (square_feet/43560)
}
function minutes_to_mow (length,width,per_minute) {
    return (length*width/per_minute)
}
function getAirQualityDescription (aqi) {
    return (aqi <= 50 ? "Good" : aqi <= 100 ? "Moderate" : aqi <= 150 ? "Unhealthy for Sensitive Groups" :  aqi <= 200 ? "Unhealthy" : aqi <= 300 ? "Very Unhealthy" :"Hazardous")
}
function yee_ha(num) {
    return (num % 3 === 0 && num % 7 === 0 ? "Yee Ha" : num % 3 === 0 ? "Yee" :  num % 7 === 0 ? "Ha" : "Nada" )
}
function calculate_slope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1)
}
export {hello,square_feet_to_acre,minutes_to_mow,getAirQualityDescription,yee_ha,calculate_slope} 
