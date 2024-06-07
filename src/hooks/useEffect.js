import { useState, useRef } from "react";
import isEqual from 'lodash/isEqual';

export function useCustomEffect(setup, deps) {
    const hasMounted = useRef(false);  // Para rastrear si el componente se ha montado
    const prevDeps = useRef(deps);  // Para almacenar las dependencias anteriores
    const [, setTick] = useState(0);  // Para forzar la re-renderización

    // Función para comparar las dependencias
    const dependenciesChanged = (prevDeps, nextDeps) => {
        if (prevDeps.length !== nextDeps.length) {
            return true;
        }

        for (let i = 0; i < prevDeps.length; i++) {
            if (!isEqual(prevDeps[i], nextDeps[i])) {
                return true;
            }
        }

        return false;
    };

    // Función para ejecutar el efecto y manejar la limpieza
    const runEffect = () => {
        if (typeof setup === 'function') {
            const cleanup = setup();

            // Manejar la función de limpieza si es proporcionada
            return () => {
                if (typeof cleanup === 'function') {
                    cleanup();
                }
            };
        }
    };

    // Verificar si las dependencias han cambiado y ejecutar el efecto en consecuencia
    if (!hasMounted.current) {
        hasMounted.current = true;
        runEffect();
    } else if (dependenciesChanged(prevDeps.current, deps)) {
        runEffect();
        prevDeps.current = deps;
    }

    // Forzar la re-renderización para mantener la actualización
    setTick(tick => tick + 1);
}
