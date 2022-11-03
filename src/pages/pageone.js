import { useState } from "react";

const PageOne = () => {

    function intialCount() {
        console.log("use state render");
        return 4;
    }

    // const [count, setCount] = useState(() => {
    //     console.log("use state render");
    //     return 4;
    // })

    const [count, setCount] = useState(() => intialCount());

    console.log(count);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount -1);
    }

    return (
        <>
            <p>This is Page One</p>            
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>

            <div className="main">
                <div className="item item1">item1</div>
                <div className="item item2">item2</div>
                <div className="item item3">item3</div>
                <div className="item item4">item4</div>
                <div className="item item5">item5</div>
                <div className="item item6">item6</div>
                <div className="item item7">item7</div>

                <div className="item item7">item9</div>
                
<div className="item item7">item8</div>
            </div>
        </>
    )
}

export default PageOne;
