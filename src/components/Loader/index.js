import React, { useEffect, useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'


export const Loader = () => {
    // const ref = useRef(null);
    // useEffect(() => {
    //     ref.current.complete();
    //     return () => {
    //         ref.current = null;
    //     }
    // }, [ref])
    return (<LoadingBar color={'#f11946'}  progress={100}/>);
}
