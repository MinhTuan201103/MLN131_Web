"use client"

import { AnimatedNumber } from "@/components/animated-number"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import { ArrowDownToLine, ArrowRight, CircleAlert, Factory, Scale } from "lucide-react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts"

const GDP_SCALE = [
  { year: "1986", value: 26.3 },
  { year: "2000", value: 31.2 },
  { year: "2010", value: 147.2 },
  { year: "2020", value: 346.6 },
  { year: "2024", value: 476.4 },
]

const BEFORE_AFTER = [
  { label: "GDP/người", before: 436.4, after: 4717.3, unit: "USD" },
  { label: "GDP", before: 26.3, after: 476.4, unit: "tỷ USD" },
]

const CRISIS_TO_REFORM = [
  {
    title: "Khủng hoảng 1986",
    detail: "Lạm phát cao, thiếu hàng, sản xuất bị kìm hãm",
    icon: CircleAlert,
    accent: "text-revolutionary-red",
  },
  {
    title: "Đổi mới",
    detail: "Xóa cơ chế tập trung quan liêu, bao cấp; giải phóng lực lượng sản xuất",
    icon: Factory,
    accent: "text-golden-silk",
  },
  {
    title: "Quá độ tiếp tục",
    detail: "Hoàn thiện thể chế, năng suất, công bằng xã hội, môi trường",
    icon: Scale,
    accent: "text-on-surface",
  },
]

const chartConfig = {
  value: {
    label: "Giá trị",
    color: "#ffd700",
  },
}

export function EvidenceStatStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
      <KpiTile
        value={774.7}
        suffix="%"
        decimals={1}
        label="Lạm phát 1986"
        note="Nguồn: Bộ Công Thương"
        tone="red"
      />
      <KpiTile
        value={436.4}
        prefix="$"
        decimals={1}
        label="GDP/người 1986"
        note="USD hiện hành, World Bank"
        tone="gold"
      />
      <KpiTile
        value={4717.3}
        prefix="$"
        decimals={1}
        label="GDP/người 2024"
        note="USD hiện hành, World Bank"
        tone="grey"
      />
    </div>
  )
}

function KpiTile({
  value,
  label,
  note,
  prefix,
  suffix,
  decimals = 0,
  tone,
}: {
  value: number
  label: string
  note: string
  prefix?: string
  suffix?: string
  decimals?: number
  tone: "red" | "gold" | "grey"
}) {
  const toneClass = {
    red: "border-revolutionary-red bg-revolutionary-red/10",
    gold: "border-golden-silk bg-golden-silk/10",
    grey: "border-monument-grey bg-surface-container",
  }[tone]

  return (
    <div className={cn("border p-5 md:p-6 exhibition-card-hover", toneClass)}>
      <AnimatedNumber
        value={value}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="font-display text-4xl md:text-5xl font-black text-on-surface leading-none"
      />
      <p className="font-label-mono text-sm md:text-base uppercase tracking-widest text-golden-silk mt-4">
        {label}
      </p>
      <p className="text-base md:text-lg text-on-surface-variant mt-2 leading-snug">{note}</p>
    </div>
  )
}

export function GdpTimelineChart() {
  return (
    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-5 mb-12 items-stretch">
      <div className="bg-surface-container border border-monument-grey p-5 md:p-7">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
          <div>
            <span className="font-label-mono text-revolutionary-red uppercase tracking-widest text-sm md:text-base font-semibold">
              So sánh quy mô
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-on-surface mt-2">
              GDP Việt Nam 1986-2024
            </h3>
          </div>
          <span className="font-label-mono text-sm md:text-base text-on-surface-variant uppercase">
            Tỷ USD hiện hành
          </span>
        </div>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <LineChart data={GDP_SCALE} margin={{ left: 8, right: 24, top: 18, bottom: 8 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={12} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              width={64}
              tickFormatter={(value) => `${Number(value).toLocaleString("vi-VN")}`}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  formatter={(value) => (
                    <span className="font-mono text-foreground">
                      {Number(value).toLocaleString("vi-VN", { maximumFractionDigits: 1 })} tỷ USD
                    </span>
                  )}
                />
              }
            />
            <ReferenceLine x="1986" stroke="#b20000" strokeDasharray="4 4" />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ffd700"
              strokeWidth={4}
              dot={{ r: 5, fill: "#ffd700", stroke: "#111415", strokeWidth: 2 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ChartContainer>
      </div>

      <div className="bg-surface-container-high border border-monument-grey p-5 md:p-7">
        <span className="font-label-mono text-golden-silk uppercase tracking-widest text-sm md:text-base font-semibold">
          Trước / sau Đổi mới
        </span>
        <div className="mt-6 space-y-5">
          {BEFORE_AFTER.map((item) => (
            <div key={item.label} className="border border-monument-grey bg-background/45 p-4">
              <p className="font-label-mono text-sm md:text-base uppercase tracking-widest text-on-surface-variant">
                {item.label}
              </p>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mt-4">
                <NumberColumn value={item.before} unit={item.unit} caption="1986" />
                <ArrowRight className="w-7 h-7 text-revolutionary-red" />
                <NumberColumn value={item.after} unit={item.unit} caption="2024" highlight />
              </div>
            </div>
          ))}
        </div>
        <p className="text-base md:text-lg text-on-surface-variant mt-5 leading-relaxed">
          Dùng số liệu World Bank để so sánh theo cùng đơn vị USD hiện hành.
        </p>
      </div>
    </div>
  )
}

function NumberColumn({
  value,
  unit,
  caption,
  highlight = false,
}: {
  value: number
  unit: string
  caption: string
  highlight?: boolean
}) {
  return (
    <div className={cn("min-w-0", highlight && "text-right")}>
      <p className={cn("font-display text-2xl md:text-3xl font-black", highlight ? "text-golden-silk" : "text-on-surface")}>
        <AnimatedNumber value={value} decimals={1} />
      </p>
      <p className="text-base md:text-lg text-on-surface-variant leading-snug">
        {unit} · {caption}
      </p>
    </div>
  )
}

export function ReformFlowDiagram() {
  return (
    <div className="mb-12">
      <div className="grid lg:grid-cols-3 gap-4">
        {CRISIS_TO_REFORM.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className="relative bg-surface-container border border-monument-grey p-6 min-h-[210px] exhibition-card-hover"
            >
              <div className="flex items-center justify-between gap-4">
                <Icon className={cn("w-11 h-11", item.accent)} />
                <span className="font-label-mono text-2xl text-monument-grey font-bold">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-on-surface mt-6">
                {item.title}
              </h3>
              <p className="text-lg md:text-xl text-on-surface-variant mt-3 leading-snug">
                {item.detail}
              </p>
              {index < CRISIS_TO_REFORM.length - 1 && (
                <div className="hidden lg:flex absolute -right-5 top-1/2 z-10 h-10 w-10 -translate-y-1/2 items-center justify-center bg-background border border-monument-grey">
                  <ArrowRight className="w-6 h-6 text-golden-silk" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TransitionLogicDiagram() {
  const items = [
    { title: "Lực lượng sản xuất", detail: "Xuất phát thấp, cần công nghiệp hóa", icon: Factory },
    { title: "Quan hệ sản xuất", detail: "Phải đổi mới cho phù hợp trình độ phát triển", icon: Scale },
    { title: "Quá độ lâu dài", detail: "Vừa phát triển, vừa hoàn thiện thể chế XHCN", icon: ArrowDownToLine },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-4 mb-10">
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={item.title} className="bg-surface-container border border-monument-grey p-5 md:p-6">
            <div className="flex items-center justify-between gap-3">
              <Icon className="w-9 h-9 text-golden-silk" />
              <span className="font-label-mono text-revolutionary-red text-xl font-bold">
                {index + 1}
              </span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-on-surface mt-5">{item.title}</h3>
            <p className="text-base md:text-lg text-on-surface-variant mt-2 leading-snug">
              {item.detail}
            </p>
          </div>
        )
      })}
    </div>
  )
}
