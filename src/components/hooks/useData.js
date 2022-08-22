import { useEffect, useState } from "react"

const useData = () => {
    const [workData, setWorkData] = useState([])
    useEffect(() => {
        fetch('workData.json')
            .then(res => res.json())
            .then(data => setWorkData(data[0]))
    }, [])

    return [workData]
}

export default useData