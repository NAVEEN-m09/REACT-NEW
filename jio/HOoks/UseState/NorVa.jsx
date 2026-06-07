// import React, { useState } from 'react';

// const NorVa = () => {
//     let name = "NorVa";
//     let count = 0;

//     function click(){
//         count =count + 1
//         console.log(count);
//     }
//     //using use statae
//     let [splv,splvrup] = useState(10)

//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{splv}</p>
//             <button className='border-2 border-amber-50 cursor-pointer' onClick={click}>Click Me</button>
//         </div>
//     );
// }

// export default NorVa;


import React, { useState } from 'react';

const NorVa = () => {
    let name = "NorVa";
    let [count, setCount] = useState(10);

    function click() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>{count}</p>
            <button className='border-2 border-amber-50 cursor-pointer' onClick={click}>
                Click Me
            </button>
        </div>
    );
}

export default NorVa;