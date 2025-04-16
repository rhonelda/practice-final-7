import {hello,square_feet_to_acre,minutes_to_mow,getAirQualityDescription,yee_ha} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2.There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.
<h2>results</h2>
<p>square feet to acre(50 000) == {square_feet_to_acre(50000)}</p> 

<p>square feet to acre(100 000) == {square_feet_to_acre(100000)}</p> 

<p>square feet to acre(150 000) == {square_feet_to_acre(150000)}</p> 
</section>;
}

function Question3(){
return <section>
3. Given the&nbsp; width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes
<h2>results</h2>
<p>minutes_to_mow(100,100,10) == {minutes_to_mow(100,100,10)}</p>
<p>minutes_to_mow(200,200,200) == {minutes_to_mow(200,200,200)}</p>
<p>minutes_to_mow(300,300,300) == {minutes_to_mow(300,300,300)}</p>
</section>
}

function Question4(){
return <section>
4.Compute the air quality given an air quality index:
        <h1>results</h1>
        <ul>
        <li>"Good" - 0 to 50 AQI</li>
        <li>"Moderate" - 51 - 100 AQI</li>
        <li>"Unhealthy for Sensitive Groups" - 101 - 150 AQI</li>
        <li>"Unhealthy" - 151 - 200 AQI</li>
        <li>"Very Unhealthy" - 201 - 300 AQI</li>
        <li>"Hazardous" - 300+ AQI</li>
        </ul>
        <p>Make a test for each type of air quality.</p>

        <h2>Results</h2>
        <p>getAirQualityDescription(25) = {getAirQualityDescription(25)}</p>
        <p>getAirQualityDescription(75) = {getAirQualityDescription(75)}</p>
        <p>getAirQualityDescription(125) = {getAirQualityDescription(125)}</p>
        <p>getAirQualityDescription(175) = {getAirQualityDescription(175)}</p>
        <p>getAirQualityDescription(250) = {getAirQualityDescription(250)}</p>
        <p>getAirQualityDescription(350) = {getAirQualityDescription(350)}</p>
        </section>
}

function Question5(){
    return <section>
5.yee_ha takes an integer and returns:
            <h1>results</h1>
            <ul>
            <li>"Yee" if number is divisible by 3</li>
            <li>"Ha" if number is divisible by 7</li>
            <li>"Yee Ha" if divisible by both 3 and 7</li>
            <li>"Nada" if none of the above</li>
            </ul>
            <p>Make a test for each branch.</p>

            <h2>Results</h2>
            <p>yee_ha(21) = {yee_ha(21)} {/* Yee Ha */}</p>
            <p>yee_ha(9) = {yee_ha(9)} {/* Yee */}</p>
            <p>yee_ha(14) = {yee_ha(14)} {/* Ha */}</p>
            <p>yee_ha(8) = {yee_ha(8)} {/* Nada */}</p>
        </section>
}

function Question6(){
            return <section>
 6. Calculate the slope of a line  Slope is calculated as rise / run, where rise is distance between y coordinates, and run is distance between x coordinates.Test at least 3 lines.
            <h2>results</h2>
            <p>Slope = (y2 - y1) / (x2 - x1)</p>
            <p>Line (1, 2) to (3, 6): slope = {calculate_slope(1, 2, 3, 6)}</p>
            <p>Line (0, 0) to (4, 8): slope = {calculate_slope(0, 0, 4, 8)}</p>
            <p>Line (2, 5) to (6, 5): slope = {calculate_slope(2, 5, 6, 5)}</p>
        </section>
}

export {Question1,Question2,Question3,Question4,Question5,Question6}

