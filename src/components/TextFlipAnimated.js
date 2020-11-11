import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import '../css/animation.css'
import '../index.css'

export default function TextFlipAnimated() {

    // Animation
    const ref = useRef([])
    const [items, set] = useState([])

    // Spring transition
    const transitions = useTransition(items, null, {
        // From here, start animation
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#30DFF2' },
        // Go to this point
        enter: [
            { opacity: 1, height: 50, innerHeight: 50 },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        // Left this in the end
        leave: [{ color: '#F2441D' }, { innerHeight: 0}, { opacity: 0, height: 0}],
        // Update this before ending the animation
        update: {color: '#30DFF2' },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['Liste', 'de', 'tâches']), 500))
        ref.current.push(setTimeout(() => set(['Liste', 'tâches']), 1250))
        ref.current.push(setTimeout(() => set(['Liste', 'de mes', 'tâches']), 4000))
    }, [])

    useEffect(() => void reset(), [reset])


    return (
        <div id="divAnim">
            {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
            <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
            </animated.div>
            ))}
        </div>
    )
}