/**

 * ẢNH THUYẾT TRÌNH — ƯU TIÊN ẢNH CHỤP / QUAY THẬT (không bắt sơ đồ)

 *

 * Web KHÔNG tự sinh hình. Ô trống = khung chờ; ô có URL = hiện ảnh đó.

 *

 * Cách gắn ảnh thực tế:

 * 1. Tìm ảnh: Wikipedia (Commons), báo (VnExpress, TTXVN…), Flickr, ảnh bạn chụp

 * 2. Chuột phải ảnh → "Copy image address" / link kết thúc .jpg .png .webp

 * 3. Dán vào số tương ứng, ví dụ:  9: "https://upload.wikimedia.org/.../cang.jpg",

 * 4. Lưu → pnpm dev → Ctrl+F5

 *

 * File local: copy vào public/images/ →  1: "/images/ten-anh.jpg"
 *
 * Chú thích: PRESENTATION_CAPTIONS — hiển thị dưới mỗi hình.

 *

 * Gợi ý từng ô nằm ở IMAGE_SLOT_GUIDE (chủ đề ảnh thật, không infographic).

 * Các URL mẫu bên dưới là ảnh Wikimedia (CC) — thay bằng ảnh bạn chọn khi thuyết trình.

 */

const W = "https://upload.wikimedia.org/wikipedia/commons/thumb"



export const PRESENTATION_IMAGES: Record<number, string> = {

  // Hero — ảnh thật: Quốc hội, Ba Đình, đại lộ Hà Nội

  0: `https://lh5.googleusercontent.com/proxy/loTkC70bhmApsTiRU99ARkI3xhNT1Uu3L4dYJIPSlA9y15yfLG0zffrC5ILtQOLS9-vliB7X8v6C3KA4DzcBXfmdhIbW0PEhoLxMPzRiSf6tdx7MDkBJbOfn-qRUh0649ClRjqGitln2jjMX`,



  // P1 — lý luận (ảnh hiện trường, không icon/vector)

  1: "https://btgdv.cantho.gov.vn/uploads/news/2022_09/30-9-bac.jpeg", // Khái niệm CNXH — cờ, Bác, Mác–Lênin

  2: "https://tttctt.1cdn.vn/2026/01/10/dh-xi.jpg", // Đại hội / văn kiện — tránh poster AI

  3: "https://en-cdnmedia.daihoidang.vn/images/435ef148cda3029d42285188cef7b1814e2dbfcf83cff9554546c0c5342205d9445ccfa2b0ae0990224457ff57f97c5aaea87e37fd5d365fff5b071c87a32c2a6b90a78330522fd4ac8aefeb86b5ba4d/01-doi-moi-nam-1986-ava.jpg.webp", // Ảnh lịch sử: Hội nghị VI, nhà máy 1980s

  4: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2026/03/18/1773836786606_picture1-1-11203258.jpeg", // Khu CN, FDI, container — ảnh báo chí

  5: "https://media.vov.vn/sites/default/files/styles/large/public/2025-05/z6606878579991_42d6137064418cae8e373985a74e55d1_c9df6.jpg", // Mít tinh, Đảng–Nhân dân, cờ Tổ quốc



  // P2

  6: "https://image.sggp.org.vn/Uploaded/2026/mzzan/2025_04_20/dh-lan-4-dai-dien-4077-2216.jpg", // Ảnh timeline: có thể 1 ảnh lớn Đổi mới 1986 (báo/hồ sơ) thay sơ đồ

  7: `https://i1-kinhdoanh.vnecdn.net/2016/12/15/mua-hang-thoi-bao-cap-0-9267-1481774665.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=rRVC2g4v0dMWxeK09wKAZQ`,



  // P3 — kinh tế thực địa

  8: "https://dahop.vn/wp-content/uploads/2025/07/DSC02743-scaled.jpg", // Lễ khánh thành KCN, bảng FDI

  9: "https://cdn.saigonnewport.com.vn/uploads/images/2021/04/14/post-1.jpg",

  10: "https://media.doanhnhantrevietnam.vn/files/content/2022/11/11/nong-nghiep-1702.jpg", // Nhà máy, FPT, nông nghiệp công nghệ cao — ảnh thật

  11: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2026/04/30/1777561567251_img_562929a0.png", // Có thể 1 ảnh lớn (Quốc hội, cầu) thay infographic 2030



  // P4 — xã hội

  12: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2026/04/30/1777561567251_img_562929a0.png", // Trường học, trẻ em vùng sâu

  13: "https://image.vietnamnews.vn/uploadvnnews/Article/2024/9/17/374853_1.jpg", // Bệnh viện, BHYT, y tế cơ sở

  14: "https://cafefcdn.com/zoom/700_438/203337114487263232/2024/5/28/photo1716797908450-17167979117461446424485-1716857759679488774539.jpg", // Gia đình, người cao tuổi

  15: "https://baotuyenquang.com.vn/file/4028eaa4679b32c401679c0c74382a7e/052026/nong-dan-ra-dong-thu-hoach-gan-27-nghin-ha-1_20260519125105.jpg", // Làng nông thôn mới, nông dân

  16: "https://suckhoedoisong.qltns.mediacdn.vn/Images/anhvan/2020/05/04/20200504_073042_1.jpg", // Lớp học, sinh viên

  17: "https://sgtt.thesaigontimes.vn/wp-content/uploads/2024/12/nui-sam-ssd.jpg", // Lễ hội, di sản (chùa, dân ca)



  // P5

  18: "https://image.vietnamnews.vn/uploadvnnews/Article/2025/7/3/434768_5207900386848668_vna_potal_thu_tuong_chu_tri_phien_hop_chinh_phu_thuong_ky_thang_6_va_hoi_nghi_truc_tuyen_chinh_phu_voi_cac_dia_phuong_8129254.jpg", // Họp Quốc hội, ổn định — ảnh báo

  19: "https://ttdn.vn/Uploads/Images/2026/1/30/3/xay-dung-bien-gioi-viet-nam-lao-hoa-binh-huu-nghi-hop-tac-cung-phat-trien-8561393.jpg", // Hội nghị ngoại giao, APEC, LHQ

  20: "https://images2.thanhnien.vn/528068263637045248/2025/8/14/2-1755133981191631210673.jpg", // Diễu binh, hải quân, bộ đội (ảnh báo chính thống)

  21: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2025/07/11/0fba5117-1c0a-4226-9636-47e9d8b3899b_906a3670.jpg?itok=vmp2Anja&v=1752218044", // Toà án, kiểm tra — ảnh thực tế

  22: "https://phaply.net.vn/uploads/images/blog/banpv2/2026/01/06/1-1767672472.jpg", // Một cửa, VNeID, người dân làm thủ tục

  23: "https://bcp.cdnchinhphu.vn/334894974524682240/2026/1/20/base64-176890464753754697520.png",



  24: `https://upload.wikimedia.org/wikipedia/commons/0/08/Ho_Chi_Minh_City_Skyline_at_Night.jpg`,

}

/**
 * Chú thích hiển thị DƯỚI mỗi hình (Hình #0–#24).
 * Ví dụ: 1: "Cờ Tổ quốc — Ba Đảng, nguồn: btgdv.cantho.gov.vn",
 */
export const PRESENTATION_CAPTIONS: Record<number, string> = {
  0: "",
  1: "",
  2: "",
  3: "Đại hội VI (1986)",
  4: "Khu Công Nghiệp Đồng Văn II (Hà Nam)",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
  21: "",
  22: "",
  23: "",
  24: "",
}

/** Căn ảnh trong khung khi dùng chế độ cover (mặc định dùng contain = không cắt) */
export const PRESENTATION_IMAGE_FOCUS: Partial<
  Record<number, "top" | "center" | "bottom">
> = {
  1: "top",
}

export function getPresentationCaption(slot: number): string | undefined {
  const text = PRESENTATION_CAPTIONS[slot]?.trim()
  return text && text.length > 0 ? text : undefined
}

export function getPresentationImageFocus(
  slot: number
): "top" | "center" | "bottom" {
  return PRESENTATION_IMAGE_FOCUS[slot] ?? "center"
}

export function getPresentationImage(slot: number): string | undefined {

  const raw = PRESENTATION_IMAGES[slot]

  if (!raw) return undefined

  const path = raw.trim()

  if (path.length === 0) return undefined

  return path

}



export function setPresentationImageUrl(slot: number, url: string) {

  PRESENTATION_IMAGES[slot] = url.trim()

}



/** Gợi ý ảnh THẬT cho từng ô (không bắt sơ đồ / icon) */

export const IMAGE_SLOT_GUIDE: Record<

  number,

  { part: string; position: string; suggest: string; searchHint?: string }

> = {

  0: {

    part: "Hero",

    position: "Nền full màn hình",

    suggest: "Ảnh chụp: Nhà Quốc hội / Ba Đình / Hà Nội",

    searchHint: "National Assembly Vietnam Hanoi wikimedia",

  },

  1: {

    part: "P1",

    position: "1. Khái niệm CNXH",

    suggest: "Ảnh chụp: Lăng Bác, đại đoàn kết, cờ Tổ quốc",

    searchHint: "Ho Chi Minh Mausoleum crowd photo",

  },

  2: {

    part: "P1",

    position: "2. 8 đặc trưng",

    suggest: "Ảnh Đại hội Đảng / văn kiện / họp quốc hội (không poster icon)",

    searchHint: "Vietnam National Congress photo",

  },

  3: {

    part: "P1",

    position: "3. Quá độ",

    suggest: "Ảnh lịch sử: Hội nghị VI, nhà máy 1980s, Hà Nội xưa",

    searchHint: "Vietnam 1986 reform historical photo",

  },

  4: {

    part: "P1",

    position: '4. "Bỏ qua" TBCN',

    suggest: "Ảnh KCN, xe container, nhà đầu tư nước ngoài",

    searchHint: "Vietnam industrial zone FDI photo",

  },

  5: {

    part: "P1",

    position: "5. Mô hình VN",

    suggest: "Ảnh mít tinh, cán bộ–nhân dân, hội nhập (WTO, APEC)",

    searchHint: "Vietnam rally flag photo",

  },

  6: {

    part: "P2",

    position: "Timeline đầu P2",

    suggest: "1 ảnh lớn hồ sơ Đổi mới 1986 hoặc bìa báo (có thể không cần sơ đồ)",

    searchHint: "Vietnam doi moi 1986 newspaper",

  },

  7: {

    part: "P2",

    position: "Khủng hoảng 1986",

    suggest: "Ảnh bao cấp: chợ, hàng hóa, Hà Nội 1990s",

    searchHint: "Hanoi 1990s street photo",

  },

  8: {

    part: "P3",

    position: "Đột phá 1 — Thể chế",

    suggest: "Ảnh lễ khánh thành KCN, bảng chỉ dẫn FDI",

    searchHint: "Vietnam industrial park opening",

  },

  9: {

    part: "P3",

    position: "Đột phá 2 — Hạ tầng",

    suggest: "Ảnh cảng Cát Lái / Cái Mép / cao tốc / sân bay",

    searchHint: "Cat Lai port Vietnam photo",

  },

  10: {

    part: "P3",

    position: "Đột phá 3 — KH-CN",

    suggest: "Ảnh nhà máy, startup, nông nghiệp công nghệ cao",

    searchHint: "Vietnam technology factory photo",

  },

  11: {

    part: "P3",

    position: "Roadmap 2030–2045",

    suggest: "Ảnh tượng trưng: cầu, đô thị, Quốc hội (thay infographic nếu muốn)",

    searchHint: "Vietnam bridge infrastructure photo",

  },

  12: {

    part: "P4",

    position: "HDI",

    suggest: "Ảnh trẻ em đến trường, thư viện vùng sâu",

    searchHint: "Vietnam rural school children",

  },

  13: {

    part: "P4",

    position: "BHYT",

    suggest: "Ảnh bệnh viện, khám BHYT, y tế cơ sở",

    searchHint: "Vietnam hospital patient photo",

  },

  14: {

    part: "P4",

    position: "Tuổi thọ",

    suggest: "Ảnh gia đình nhiều thế hệ, người cao tuổi",

    searchHint: "Vietnam elderly family photo",

  },

  15: {

    part: "P4",

    position: "Giảm nghèo",

    suggest: "Ảnh làng nông thôn mới, thu hoạch lúa",

    searchHint: "Vietnam new rural area photo",

  },

  16: {

    part: "P4",

    position: "Giáo dục",

    suggest: "Ảnh lớp học, sinh viên, giáo viên",

    searchHint: "Vietnam classroom students",

  },

  17: {

    part: "P4",

    position: "Văn hóa",

    suggest: "Ảnh lễ hội, chùa, di sản UNESCO",

    searchHint: "Vietnam festival heritage photo",

  },

  18: {

    part: "P5",

    position: "KT ↔ CT",

    suggest: "Ảnh họp Chính phủ / Quốc hội / đại hội",

    searchHint: "Vietnam government meeting photo",

  },

  19: {

    part: "P5",

    position: "Ngoại giao",

    suggest: "Ảnh hội nghị quốc tế, lãnh đạo đối ngoại",

    searchHint: "Vietnam diplomatic summit photo",

  },

  20: {

    part: "P5",

    position: "Quốc phòng",

    suggest: "Ảnh diễu binh, hải quân, huấn luyện (nguồn chính thống)",

    searchHint: "Vietnam military parade photo",

  },

  21: {

    part: "P5",

    position: "Chống tham nhũng",

    suggest: "Ảnh toà án, thanh tra, họp báo",

    searchHint: "Vietnam court anti corruption",

  },

  22: {

    part: "P5",

    position: "Chính phủ số",

    suggest: "Ảnh người dân làm thủ tục một cửa, VNeID",

    searchHint: "Vietnam public service office photo",

  },

  23: {

    part: "P5",

    position: "Timeline CT",

    suggest: "Ảnh Quốc hội / Đại hội XIV (có thể không cần sơ đồ)",

    searchHint: "Vietnam National Assembly session",

  },

  24: {

    part: "Kết luận",

    position: "Ảnh ngang",

    suggest: "Ảnh skyline TP.HCM / lao động / công nhân",

    searchHint: "Ho Chi Minh City skyline photo",

  },

}


