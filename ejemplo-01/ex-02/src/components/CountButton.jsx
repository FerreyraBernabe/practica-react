import './CountButton.css'
export function CountButton({increment,decrement,reset})
{
    return(
        <>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}