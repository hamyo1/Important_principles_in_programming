   
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

//Big O(n^2) [C (Okay)]
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

//Big O(n^3)
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

//Big O(log n) // 
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
