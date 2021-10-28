import React from 'react'
import Layout from '../../Components/Layout/Layout'
import {useCountActionDecrease,useCountActionIncrease, useCountState} from '../../helper/context/CounterContext'


const Home = () => {
    const {increment } = useCountActionIncrease()
    const {decriment } = useCountActionDecrease()
    const count = useCountState()
    return (
        <Layout>
             <h1>Show Button</h1>
              <button onClick={increment}>Increase</button>
              <button onClick={decriment}>Decrease</button>
              <p>{count}</p>
        </Layout>
    )
}

export default Home
