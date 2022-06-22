   
/**
 * Big O Notation (how code slows as data grows): 
/**
 * letter grade: (when working with large data sets)
 * 
 * O(1): A (Excellent).
 * O(n): B (Pretty good).
 * O(log n): C (Okay).
 * O(n log n): D (Barely passing).
 * O(n^2): E (Bad).
 * O(n!): F (Expelled).
 */

//Big O(1) [ A (Excellent)]
function constants(arr)
{
    var result =100*1000;
    return result;
}

//Big O(n) [B (Pretty good)]
function linearFunc(arr)
{
    for(let i = 0; i<arr.length; i++ )
    {
        console.log(100*1000);//Big O(1)
        console.log(constants(arr));//Big O(1)
    }
}

//Big O(n^2) [E (Bad)]
function squere(n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n ; j++)
        {
            console.log(i,j);
        }
    }
}

//Big O(n^3) [E (Bad)]
function cube(n)
{
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n ; j++)
        {
            for(let k = 0; k < n ; j++)
            {
                console.log(i,j,k);
            }
        }
    }
}

//Big O(log n) // [C (Okay)] 
//[log 8]=3 which mean [log base 2 of 8 is 3] 
//for example ?^?=8 the base need to be allways 2 so the real question is 2^?=8 and then yo got 3
function logFunc(n)
{
    if(n===0)//Stop conditions
    {
        return "Done";
    }

    n= Math.floor(n/2);
    return logFunc(n);
}

// example logFunc(8) => logFunc(4) => logFunc(2) => logFunc(1) and return "Done" ,
// 3 levels of running (log 8 = 3) 
//1 level  logFunc(8) => logFunc(4)
//2 level  logFunc(4) => logFunc(2)
//3 level  logFunc(2) => logFunc(1)

// more example not recursive (its run log n iteration befor its done..)
function logn(n)
{
    while(n>1)
    {
        n= Math.floor(n/2);
    }
}

//O(n log n) [D (Barely passing] 
//if we take n as 8 . so O(n log n) = > O(n * (log n)) = > 8 * 3= 24 iterations
function nLogNFunc(n)
{
    let y =n;
    while(n<1)
    {
        n = Math.floor(n/2);
        for(let i =1 ;i<=y;i++)
        {
            console.log(i);
        }
    }
}


//O(2^n)  
function fib(n)
{
    if(n===0)
    {
        return 0;
    }
    if(n === 0 )
    {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}
//                (its fibonachi)
//                         fib(4)
//                       /      \
//                    /            \
//                 /                  \
//            fib(3)                    fib(2)                      2^1     level 1  
//          /       \                  /       \
//    fib(2)        fib(1)         fib(1)       fib(0)             2^2     level 2
//    /   \         /   \          /   \         /   \ 
//fib(1)  fib(0) *fib() fib()   fib()  fib()  fib()  fib()*         2^3     level 3
//                                  
//                                     in real its O(2^n-1) = 2^3  but becuse we not consider constants its O(2^n) for the worst case


//O(n!)  
function f(n)
{
    if(n===0)
    {
        console.log("***************");
        return;
    }

    for(let i=0 ; i<n ; i++)
    {
        f(n-1);
    }
}
