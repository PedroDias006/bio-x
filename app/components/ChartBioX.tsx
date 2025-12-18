"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from "recharts";

export default function ChartBioX() {
  const data = [
    { year: "2021", small: 3, big: 6 },
    { year: "2022", small: 8, big: 14 },
    { year: "2023", small: 16, big: 18 },
    { year: "2024", small: 18, big: 20 },
  ];

  return (
    <div className="w-[650px] h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap="28%"
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* GRID SUAVE */}
          <CartesianGrid
            stroke="#00000020"
            strokeDasharray="0"
            vertical={false}
          />

          {/* NUMERAÇÃO Y EM PRETO */}
          <YAxis
            domain={[0, 20]}
            ticks={[0, 5, 10, 15, 20]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#000000", fontSize: 14 }}
          />

          {/* ANOS EM PRETO */}
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#000000", fontSize: 14, dy: 10 }}
          />

          {/* BARRAS */}
          <Bar dataKey="small" fill="#3CC9A7" radius={[4, 4, 0, 0]} />
          <Bar dataKey="big" fill="#1F8A78" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
