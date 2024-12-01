"use client"

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the type for our data
type DataItem = {
  date: string
  value1: number
  value2: number
}

// Sample data
const data: DataItem[] = [
  { date: '2023-01-01', value1: 4000, value2: 2400 },
  { date: '2023-02-01', value1: 3000, value2: 1398 },
  { date: '2023-03-01', value1: 2000, value2: 9800 },
  { date: '2023-04-01', value1: 2780, value2: 3908 },
  { date: '2023-05-01', value1: 1890, value2: 4800 },
  { date: '2023-06-01', value1: 2390, value2: 3800 },
  { date: '2023-07-01', value1: 3490, value2: 4300 },
]

const TimeSeriesChartComponent: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Time Series Chart</CardTitle>
        <CardDescription>Monthly trends of two values over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            value1: {
              label: "Value 1",
              color: "hsl(var(--chart-1))",
            },
            value2: {
              label: "Value 2",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short' })}
              />
              <YAxis />
              <ChartTooltip 
                content={
                  <ChartTooltipContent 
                    labelFormatter={(label) => new Date(label).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  />
                } 
              />
              <Legend />
              <Line type="monotone" dataKey="value1" stroke="var(--color-value1)" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="value2" stroke="var(--color-value2)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default TimeSeriesChartComponent

