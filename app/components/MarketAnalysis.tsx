"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    XAxis,
    YAxis
} from "recharts";

const data = [
  { year: "2021", value: 3 },
  { year: "2022", value: 8 },
  { year: "2023", value: 14 },
  { year: "2023", value2: 16 },
  { year: "2024", value: 18 },
  { year: "2024", value2: 20 }
];

export default function MarketAnalysis() {
  return (
    <section className="relative w-full h-[900px] overflow-hidden bg-[#05080A]">

      {/* BACKGROUND LUXUOSO — IGUAL AO DO DESIGN ORIGINAL */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c5958] via-[#0a0f14] to-black opacity-[0.9]" />

      {/* LUZ NO TOPO */}
      <div className="absolute -top-40 left-0 w-[800px] h-[800px] bg-[#00e5ff]/20 rounded-full blur-[200px]" />

      {/* LUZ NO CANTO DIREITO */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#65ffd7]/10 rounded-full blur-[200px]" />

      {/* SWIRL EFFECT (igual ao da foto) */}
      <div className="absolute top-40 left-0 right-0 h-[380px] bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.12),transparent_60%)] opacity-30" />

      {/* GRID PRINCIPAL */}
      <div className="relative max-w-7xl mx-auto h-full px-14 flex items-center justify-between">

        {/* LEFT / TITULO + GRAFICO */}
        <div className="flex flex-col justify-center w-[50%]">

          <h1 className="text-white text-[90px] font-bold leading-[90px] mb-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Market Analysis
          </h1>

          <div className="w-[580px] h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barGap={10}>
                <CartesianGrid stroke="rgba(255,255,255,0.15)" vertical={false} />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "white", fontSize: 14 }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "white", fontSize: 14 }}
                  axisLine={false}
                  tickLine={false}
                />
                {/* BARRAS 1 */}
                <Bar
                  dataKey="value"
                  fill="#24C7B9"
                  radius={[6, 6, 0, 0]}
                />
                {/* BARRAS 2 (sobrepostas igual na imagem) */}
                <Bar
                  dataKey="value2"
                  fill="#16A897"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* RIGHT — TEXTO + DESCRIÇÕES + BOTÃO */}
        <div className="w-[45%] text-white">

          <p className="text-gray-300 text-[18px] leading-relaxed max-w-[480px] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum sed orci in risus hendrerit malesuada.
            Nunc laoreet eu quam eu.
          </p>

          {/* DESCRIPTION 01 */}
          <div className="flex items-start gap-4 mb-10">
            <div className="w-5 h-5 bg-[#45E0D1] rounded-sm mt-1"></div>
            <div>
              <h4 className="text-[#FFD84D] text-lg font-semibold">
                DESCRIPTION 01
              </h4>
              <p className="text-gray-300 mt-2 max-w-[380px] leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed orci in risus hendrerit malesuada.
              </p>
            </div>
          </div>

          {/* DESCRIPTION 02 */}
          <div className="flex items-start gap-4 mb-10">
            <div className="w-5 h-5 bg-[#45E0D1] rounded-sm mt-1"></div>
            <div>
              <h4 className="text-[#FFD84D] text-lg font-semibold">
                DESCRIPTION 02
              </h4>
              <p className="text-gray-300 mt-2 max-w-[380px] leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed orci in risus hendrerit malesuada.
              </p>
            </div>
          </div>

          {/* BOTÃO IDENTICO */}
          <button className="
            px-12 py-5 text-lg font-semibold rounded-full
            border border-[#FFD84D] text-[#FFD84D]
            hover:bg-[#FFD84D] hover:text-black
            transition-all duration-300
          ">
            INCREASE PROFIT
          </button>
        </div>
      </div>
    </section>
  );
}
