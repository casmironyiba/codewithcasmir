'use client';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { chartsData } from './chartsData'
import styles from './charts.module.scss';

export default function Charts() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recaps</h2>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%" className={styles.responsiveContainer}>

          <LineChart
            className={styles.lineChart}
            width={500}
            height={300}
            data={chartsData}
            margin={{
              top: 5,
              right: 10,
              left: 20,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ background: "#151c2c", border: 'none' }} />
            <Legend />
            <Line type="monotone" dataKey='Mon' stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="clicks" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
