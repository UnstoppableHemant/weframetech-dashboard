import React, { useEffect, useState } from 'react'

const useShowHideSidenav = (val) => {
    console.log(val)
    const [showHide, setShowHide] = useState();
    useEffect(()=>{
        setShowHide(val)
    })
    return showHide; 
}

export default useShowHideSidenav