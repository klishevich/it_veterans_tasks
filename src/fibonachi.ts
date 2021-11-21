function fib(n)
{
    let a = 0
    let b = 1

    for (let i = 2; i < n; i++)
    {
        b = a + b
        a = b
    }
    console.log(b)
}

fib(5)
