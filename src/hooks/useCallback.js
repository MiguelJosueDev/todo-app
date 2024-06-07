import { useEffect, useState } from "react"

export default function useCallback(callback, deps) {
    const [state, setState] = useState(callback);

    useEffect(() => {
        setState(callback);
    }, [deps])

    return state;
}
