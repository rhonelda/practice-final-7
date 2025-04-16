import {hello,square_feet_to_acre,minutes_to_mow} from './functions.js';

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
export {Question1,Question2,Question3}

