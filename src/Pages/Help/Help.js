import React from 'react'
import Layout from '../../Components/Layout/Layout'
import {useCountState} from '../../helper/context/CounterContext'

const Help = () => {
    const count= useCountState()
    return (
        <Layout>
            <h1>Show Increase Data</h1>
            <span>Data: {count}</span>
        </Layout>
    )
}

export default Help
