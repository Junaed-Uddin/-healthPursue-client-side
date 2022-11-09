import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - HealthPursue`;
    }, [title])
}

export default useTitle;