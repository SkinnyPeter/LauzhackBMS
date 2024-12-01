"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the type for our data
type DataItem = {
  name: string
  value1: number
  value2: number
}

// Sample data
const data: DataItem[] = [
  { name: 'Jan', value1: 4000, value2: 2400 },
  { name: 'Feb', value1: 3000, value2: 1398 },
  { name: 'Mar', value1: 2000, value2: 9800 },
  { name: 'Apr', value1: 2780, value2: 3908 },
  { name: 'May', value1: 1890, value2: 4800 },
  { name: 'Jun', value1: 2390, value2: 3800 },
]

const BarChartComponent: React.FC = () => {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Demand Volumes</CardTitle>
        <CardDescription>Demand Volume time serie</CardDescription>
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
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="value1" fill="var(--color-value1)" />
              <Bar dataKey="value2" fill="var(--color-value2)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default BarChartComponent
