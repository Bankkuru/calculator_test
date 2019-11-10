function add(a,b)
{
    return (a+b);
}
function minus(c,d)
{
    return (c-d);
}
function multiple(f,g)
{
    return (f*g);
}
function divide(h,i)
{
    return (h/i);
}
const calculator = {add,minus,multiple,divide}
module.exports = calculator;