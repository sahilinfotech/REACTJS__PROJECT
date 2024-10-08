import React from 'react'
import './ChartBar.css'

export default function ChartBar({ value, maxValue, label }) {

    let fillerHeight = '0%'
    if (maxValue > 0) {
        fillerHeight = Math.round((value / maxValue) * 100) + '%'
    }
    return (
        <div className='chart-bar'>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: fillerHeight }}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    )
}
