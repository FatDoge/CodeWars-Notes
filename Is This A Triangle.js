// 前提：整数参数，否则利用Number.isInteger()来判断
function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
}