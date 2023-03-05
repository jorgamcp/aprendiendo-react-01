
import { useState } from 'react';

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h3>Counter Component</h3>
            <p>Mi número de counter vale {counter}</p>
            <button onClick={updateCounter}>Actualizar Contador</button>
        </div>
    )
}

