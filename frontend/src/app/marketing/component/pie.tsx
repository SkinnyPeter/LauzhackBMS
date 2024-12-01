"use client"

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Define the type for our data
type DataItem = {
  name: string
  value: number
  color: string
}

// Sample data
const data: DataItem[] = [
  { name: 'Company A', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Company B', value: 300, color: 'hsl(var(--chart-2))' },
  { name: 'Company C', value: 200, color: 'hsl(var(--chart-3))' },
  { name: 'Company D', value: 100, color: 'hsl(var(--chart-4))' },
]

const PieChartComponent: React.FC = () => {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Share of voice</CardTitle>
        <CardDescription>Share of voice distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            ...Object.fromEntries(
              data.map(item => [
                item.name,
                { label: item.name, color: item.color }
              ])
            )
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default PieChartComponent

