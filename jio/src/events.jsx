import React from 'react';

const Events = () => {
    // function greet( name) {
    //     alert("hii ,how are you" + name);
    // }
    function greet(e) {
        console.log(e.target);
    }
    function HandelSubmit(e) {
        e.preventDefault();
        let target = e.target;

    }
    function name(e){
        console.log(e.target.value);
    }
    function mail(e){
        console.log(e.target.value);
    }
    
        return (
        <div className='flex flex-col items-center gap-4 mt-4 rounded-full shadow-md p-6 bg-gray-200 w-[500px] h-[500px] gap-8 border border-gray-300 justify-center align-middle justify-items'>
            {/* <h1>hello</h1> */}
            {/* <button className='bg-black text-white p-5 border border-white rounded-full' onClick={greet}>click</button> */}
            <form onSubmit={HandelSubmit} className='flex flex-col items-center gap-4 mt-4  gap-8'>
                <input type="text" placeholder="username" onChange={name} />
                <input type="text" placeholder="Password" onChange={name} />
                <input type="text" placeholder="Confirm Password" onChange={name} />
                <input type="number" placeholder="Phone Number" onChange={name} />
                <input type="date" placeholder="Date of Birth" onChange={name} />
                <input type="text" placeholder="Gender" onChange={name} />
                <input type="email" placeholder="Email" onChange={mail} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Events;
