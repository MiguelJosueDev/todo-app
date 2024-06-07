import { useEffect, useState } from "react"
/*
* deps es un array
*/
export default function useCallback(callback, deps) {
    const [state, setState] = useState(callback());

    useEffect(() => {
        const handeler = window.addListener.addEvent()

        return () => {
            window.removeEventListener(handeler);
        }
    }, [deps.name])

    return state;
}



export function useEffect2(callback, deps) {
    const [_deps, setDeps] = useState(deps);

    function comparaCambios(obj1, obj2) {
    }
    const hasChange = comparaCambios(_deps, deps);

    if (hasChange) {
        setDeps(deps);
        callback();
    }


}