/**
 * VIDEO THUYẾT TRÌNH — Gắn video cho từng đại hội
 * 
 * Cách gắn video:
 * 1. Upload video (.mp4, .webm) vào public/videos/
 * 2. Hoặc dán link từ YouTube/Vimeo
 * 3. Cập nhật slot tương ứng: 0: "https://..." hoặc 0: "/videos/ten-video.mp4"
 * 
 * Slot:
 * 0: Đại hội VI (1986)
 * 1: Đại hội VII (1991)
 * 2: Đại hội IX (2001)
 * 3: Đại hội XI (2011)
 * 4: Đại hội XIII (2021)
 * 5: Đại hội XIV (2026)
 */

export const PRESENTATION_VIDEOS: Record<number, string> = {
  0: "", // Đại hội VI 1986
  1: "", // Đại hội VII 1991
  2: "", // Đại hội IX 2001
  3: "", // Đại hội XI 2011
  4: "", // Đại hội XIII 2021
  5: "", // Đại hội XIV 2026
}

export function getPresentationVideo(slot: number): string {
  return PRESENTATION_VIDEOS[slot] ?? ""
}
