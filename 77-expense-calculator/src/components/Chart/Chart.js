import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart({ dataPoints }) {
    const dataPointVal = dataPoints.map(dp => dp.value)
    const totalMaxVal = Math.max(...dataPointVal)

    return (
        <div className='chart'>
            {
                dataPoints.map((datapoint) => {
                    return <ChartBar
                        key={datapoint.label}
                        value={datapoint.value}
                        maxValue={totalMaxVal}
                        label={datapoint.label}
                    />
                })
            }
        </div>
    )
}
