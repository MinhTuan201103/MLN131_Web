import { HeroSection } from "@/components/hero-section"
import { Part1CoSoLyLuan } from "@/components/part-1"
import { Part2BoiCanh } from "@/components/part-2"
import { Part3KinhTe } from "@/components/part-3"
import { Part4VanHoaXaHoi } from "@/components/part-4"
import { Part5QuocPhongChinhTri } from "@/components/part-5"
import { ConclusionSection } from "@/components/conclusion"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Part1CoSoLyLuan />
      <Part2BoiCanh />
      <Part3KinhTe />
      <Part4VanHoaXaHoi />
      <Part5QuocPhongChinhTri />
      <ConclusionSection />
      <Footer />
    </main>
  )
}
