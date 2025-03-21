import { useState } from "react";
import { useEffect } from "react";

export default function Image(){
    const [value,setValue] = useState("cake");
    const [picture,setPicture] = useState([]);
    
    const change = () => {
        let apidata=fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=btSmrY-Cu0LPQ4O4RVLgm3WJ7qYVeXgTIrPPRp_rczY`),
        data=apidata.then((item)=>item.json());
        data.then((pic)=>setPicture(pic.results))
    }

    useEffect(function(){
        change();
    },[value])
    
    return(
        <>
        <div className="main">
            <div className="input">
                <h1>Search image by name</h1>
                <input type="search" placeholder="Type anything..." onChange={(abc)=>setValue(abc.target.value)} />
            </div>
            <div className="card">
                {picture ?picture.map((curImage)=>
                <img src={curImage.urls.raw} alt="" /> ):null                  
                }
            </div>
        </div>
        </>
    )
}