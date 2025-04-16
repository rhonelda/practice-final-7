import {hello,square_feet_to_acre} from './functions.js';

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
export {Question1,Question2}
