import React, { useEffect, useState } from 'react'
import PulseLoader from "react-spinners/PulseLoader";


export const SuspenseLoader = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), 300)
        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        show && <div className="loader_tct">
            <PulseLoader
                color={`#5e72e4`}
                loading={true}
                size={5}
            />
        </div >
    )
}
