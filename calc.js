
function tinhtong() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a+b;
    document.getElementById('result').innerText = "Result Addition: " + c;

}function tinhhieu() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a-b;
    document.getElementById('result').innerText = "Result Subtraction: " + c;

}function tinhtich() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a*b;
    document.getElementById('result').innerText = "Result Multiplication : " + c;

}function tinhthuong() {
    let a = + document.getElementById("a").value;
    let b = + document.getElementById("b").value;
    let c = a/b;
    document.getElementById('result').innerText = "Result Division : " + c;

}