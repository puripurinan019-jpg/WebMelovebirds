// ฐานข้อมูลสัตว์เลี้ยง อุปกรณ์ และข้อมูลนกสำหรับ Pet Paradise & Bird Shop

const PET_DATA = [
  // --- หมวดหมู่นก (BIRDS) ---
  {
    id: "BIRD-001",
    name: "ซันคอนัวร์ (Sun Conure)",
    category: "birds",
    categoryTh: "นกสายพันธุ์พิเศษ",
    price: 4500,
    originalPrice: 5200,
    rating: 4.9,
    reviewsCount: 38,
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
    tags: ["นกแก้ว", "สีสันสดใส", "ขี้อ้อน", "เชื่องมาก"],
    age: "3 เดือน",
    gender: "ผู้/เมีย (เลือกได้)",
    health: "ฉีดวัคซีนครบ ตรวจสุขภาพแล้ว",
    description: "นกซันคอนัวร์ ขนนุ่มสีส้มเหลืองสดใส นิสัยร่าเริง ขี้อ้อน และเป็นมิตรกับผู้เลี้ยง เหมาะมากสำหรับผู้เริ่มเลี้ยงนกแก้ว กินอาหารเม็ดและผลไม้ได้เองแล้ว",
    specifications: {
      "สายพันธุ์": "Sun Conure (Aratinga solstitialis)",
      "อายุ": "3 เดือน (วัยกำลังเชื่อง)",
      "อาหารประจำ": "อาหารเม็ดสำเร็จรูป Nutri-Bird, ผลไม้สด",
      "การฝึกฝน": "ฝึกเรียกชื่อและบินมาหาได้แล้ว"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามข้อมูลนกซันคอนัวร์ (รหัส BIRD-001) ครับ"
  },
  {
    id: "BIRD-002",
    name: "ค็อกคาเทล แก้มส้ม (Cockatiel Pearl)",
    category: "birds",
    categoryTh: "นกสายพันธุ์พิเศษ",
    price: 2200,
    originalPrice: 2800,
    rating: 4.8,
    reviewsCount: 45,
    isPopular: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    tags: ["เสียงเพราะ", "เลี้ยงง่าย", "เชื่องมาก"],
    age: "2.5 เดือน",
    gender: "เพศผู้",
    health: "แข็งแรง ร่าเริง ไม่มีเห็บรำคาญ",
    description: "นกค็อกคาเทลสีพาร์ลลายสวย แก้มสีส้มสดใส เสียงนกเป่านกหวีดเพราะ นิสัยสุภาพ เชื่อง ป้อนอาหารเช้า-เย็น ง่ายต่อการฝึกฝน",
    specifications: {
      "สายพันธุ์": "Cockatiel Pearl",
      "อายุ": "2.5 เดือน",
      "อาหารประจำ": "ธัญพืชรวมมิตร, ผักใบเขียว",
      "นิสัย": "ชอบให้ลูบหัว อารมณ์ดี"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามข้อมูลนกค็อกคาเทล แก้มส้ม (รหัส BIRD-002) ครับ"
  },
  {
    id: "BIRD-003",
    name: "สการ์เล็ต มาคอว์ (Scarlet Macaw)",
    category: "birds",
    categoryTh: "นกแก้วขนาดใหญ่",
    price: 48000,
    originalPrice: 55000,
    rating: 5.0,
    reviewsCount: 12,
    isPopular: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1550853024-fae8cd4be47f?auto=format&fit=crop&w=800&q=80",
    tags: ["นกพรีเมียม", "ฉลาดมาก", "พูดได้"],
    age: "5 เดือน",
    gender: "มีใบ DNA ตรวจเพศ (ผู้)",
    health: "ตรวจโรคไวรัส APV/PBFD ผลเป็นลบ (สุขภาพ 100%)",
    description: "นกสการ์เล็ต มาคอว์ นกแก้วขนาดใหญ่สีแดงสดตัดเหลืองฟ้า สวยสง่างาม เฉลียวฉลาดสูง สามารถฝึกพูดและทำตามคำสั่งซับซ้อนได้ มาพร้อมใบเซอร์การตรวจสุขภาพ",
    specifications: {
      "สายพันธุ์": "Scarlet Macaw (Ara macao)",
      "อายุ": "5 เดือน",
      "ใบรับรอง": "มีใบตรวจ DNA และใบรับรองสุขภาพจากสัตวแพทย์",
      "ทักษะ": "พูดคำว่า 'สวัสดี' และ 'ขอบคุณ' ได้แล้ว"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ ต้องการสอบถามและนัดดูตัวนกสการ์เล็ต มาคอว์ (รหัส BIRD-003) ครับ"
  },
  {
    id: "BIRD-004",
    name: "เลิฟเบิร์ด ขอบตา (Lovebird Fischer)",
    category: "birds",
    categoryTh: "นกแก้วขนาดเล็ก",
    price: 1200,
    originalPrice: 1500,
    rating: 4.7,
    reviewsCount: 29,
    isPopular: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
    tags: ["น่ารัก", "สีสดใส", "คู่นก"],
    age: "3 เดือน",
    gender: "คู่ (ผู้+เมีย)",
    health: "แข็งแรง สมบูรณ์ ขนเงางาม",
    description: "นกเลิฟเบิร์ดสายพันธุ์ฟิชเชอร์ ขอบตาขาว สีส้มตัดเขียวสด น่ารัก ขี้เล่น ชอบอยู่เป็นคู่ เติมความสดใสให้บ้านของคุณได้เป็นอย่างดี",
    specifications: {
      "สายพันธุ์": "Lovebird Fischer's",
      "อายุ": "3 เดือน",
      "การเลี้ยง": "เลี้ยงเป็นคู่จะมีความสุขและร่าเริงมาก"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามนกเลิฟเบิร์ดขอบตา (รหัส BIRD-004) ครับ"
  },
  {
    id: "BIRD-005",
    name: "แอฟริกันเกรย์ (African Grey Parrot)",
    category: "birds",
    categoryTh: "นกแก้วขนาดใหญ่",
    price: 28500,
    originalPrice: 32000,
    rating: 4.9,
    reviewsCount: 19,
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&w=800&q=80",
    tags: ["ฉลาดที่สุด", "พูดเก่งมาก", "จำคำศัพท์"],
    age: "4 เดือน",
    gender: "เพศเมีย (ใบ DNA)",
    health: "สมบูรณ์แข็งแรง ฉีดวัคซีนครบ",
    description: "แอฟริกันเกรย์ นกแก้วที่ฉลาดที่สุดในโลก สามารถจำคำศัพท์และเลียนเสียงต่างๆ ได้อย่างแม่นยำ เชื่องและติดคนเลี้ยงมาก",
    specifications: {
      "สายพันธุ์": "African Grey (Psittacus erithacus)",
      "อายุ": "4 เดือน",
      "IQ": "เทียบเท่าเด็ก 4-5 ขวบ",
      "เอกสาร": "ใบรับรอง DNA และแหวนห่วงขาปิด"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามเกี่ยวกับนกแอฟริกันเกรย์ (รหัส BIRD-005) ครับ"
  },

  // --- หมวดแมว (CATS) ---
  {
    id: "CAT-001",
    name: "แมวเปอร์เซีย สีขาวหิมะ (Persian Cat)",
    category: "cats",
    categoryTh: "น้องแมวสุดน่ารัก",
    price: 8900,
    originalPrice: 10500,
    rating: 4.9,
    reviewsCount: 52,
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    tags: ["หน้าบี้", "ขนยาว", "ขี้อ้อน"],
    age: "2 เดือน",
    gender: "เพศเมีย",
    health: "ถ่ายพยาธิแล้ว ฉีดวัคซีนเข็มแรกแล้ว",
    description: "ลูกแมวเปอร์เซียหน้าบี้น่ารัก ขนยาวฟูสีขาวนวลสะอาด ตาสีฟ้าใส นิสัยเรียบร้อย ขี้อ้อน ใช้กระบะทรายเป็นแล้ว",
    specifications: {
      "สายพันธุ์": "Persian Purebred",
      "อายุ": "2 เดือน",
      "วัคซีน": "วัคซีนรวมเข็มที่ 1 + ถ่ายพยาธิ"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามน้องแมวเปอร์เซีย (รหัส CAT-001) ครับ"
  },
  {
    id: "CAT-002",
    name: "สก็อตติช โฟลด์ หูพับ (Scottish Fold)",
    category: "cats",
    categoryTh: "น้องแมวสุดน่ารัก",
    price: 13500,
    originalPrice: 15000,
    rating: 5.0,
    reviewsCount: 41,
    isPopular: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
    tags: ["หูพับ", "หน้ากลม", "ขี้อ้อนมาก"],
    age: "2.5 เดือน",
    gender: "เพศผู้",
    health: "ตรวจสุขภาพครบ ทานอาหารเม็ดเกรดพรีเมียม",
    description: "สก็อตติช โฟลด์ หูพับสนิท หน้ากลมมนน่ารักเหมือนกลมแป้ง นิสัยขี้อ้อน ติดคน และเข้ากับสัตว์เลี้ยงอื่นได้ดี",
    specifications: {
      "สายพันธุ์": "Scottish Fold Triple Fold",
      "อายุ": "2.5 เดือน"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามแมวสก็อตติช โฟลด์ (รหัส CAT-002) ครับ"
  },

  // --- หมวดสุนัข (DOGS) ---
  {
    id: "DOG-001",
    name: "โกลเด้น รีทรีฟเวอร์ (Golden Retriever)",
    category: "dogs",
    categoryTh: "น้องหมาแสนรู้",
    price: 12500,
    originalPrice: 14000,
    rating: 4.9,
    reviewsCount: 63,
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    tags: ["ใจดี", "ฉลาด", "เป็นมิตร"],
    age: "2 เดือน",
    gender: "เพศผู้",
    health: "ฝังชิปแล้ว ฉีดวัคซีนแล้ว 1 เข็ม",
    description: "ลูกสุนัขโกลเด้น โครงสร้างใหญ่ ขนแน่นสวย อารมณ์ดี ร่าเริง เป็นมิตรกับทุกคนในบ้าน มีใบเพ็ดดีกรีรับรองสายพันธุ์",
    specifications: {
      "สายพันธุ์": "Golden Retriever (Pedigree)",
      "อายุ": "2 เดือน"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามลูกสุนัขโกลเด้น รีทรีฟเวอร์ (รหัส DOG-001) ครับ"
  },
  {
    id: "DOG-002",
    name: "ปอมเมอเรเนียน หน้าหมี (Pomeranian)",
    category: "dogs",
    categoryTh: "น้องหมาแสนรู้",
    price: 11000,
    originalPrice: 13000,
    rating: 4.8,
    reviewsCount: 37,
    isPopular: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    tags: ["ตัวเล็ก", "ขนฟู", "หน้าหมี"],
    age: "2 เดือน",
    gender: "เพศเมีย",
    health: "สุขภาพแข็งแรงสมบูรณ์ ทานเก่ง",
    description: "ปอมเมอเรเนียนไซส์ทีคัพ ขนแน่นฟูราวกับก้อนเมฆ หน้าหมีน่ารัก ซน ร่าเริง ชอบวิ่งเล่นตลอดเวลา",
    specifications: {
      "สายพันธุ์": "Pomeranian Bear Face",
      "อายุ": "2 เดือน"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามลูกสุนัขปอมเมอเรเนียน (รหัส DOG-002) ครับ"
  },

  // --- หมวดอุปกรณ์และอาหาร (SUPPLIES) ---
  {
    id: "SUP-001",
    name: "กรงนกแก้วสแตนเลสทรงสูงพรีเมียม",
    category: "supplies",
    categoryTh: "อุปกรณ์สัตว์เลี้ยง",
    price: 2450,
    originalPrice: 2900,
    rating: 4.9,
    reviewsCount: 88,
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    tags: ["กรงนก", "สแตนเลส 304", "แข็งแรง"],
    description: "กรงนกแก้วสแตนเลสแท้ เกรด 304 ไม่เป็นสนิม ขนาดใหญ่ มีถาดรองทำความสะอาดง่าย มาพร้อมขอนไม้ธรรมชาติและถ้วยอาหารสแตนเลส 2 ใบ",
    specifications: {
      "ขนาด": "60 x 50 x 120 ซม.",
      "วัสดุ": "Stainless Steel 304"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจสอบถามกรงนกแก้วสแตนเลส (รหัส SUP-001) ครับ"
  },
  {
    id: "SUP-002",
    name: "อาหารนกแก้วพรีเมียม Nutri-Bird A21 (800g)",
    category: "supplies",
    categoryTh: "อุปกรณ์และอาหาร",
    price: 650,
    originalPrice: 750,
    rating: 5.0,
    reviewsCount: 120,
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    tags: ["อาหารนกป้อน", "สารอาหารสูง", "ย่อยง่าย"],
    description: "อาหารลูกป้อนพรีเมียมสำหรับนกแก้วทุกสายพันธุ์ สารอาหารครบถ้วน เสริมสร้างภูมิคุ้มกัน ช่วยให้ลูกนกโตไว ขนสวยเงางาม",
    specifications: {
      "น้ำหนัก": "800 กรัม",
      "เหมาะสำหรับ": "ลูกนกป้อนอายุ 1 สัปดาห์ขึ้นไป"
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สั่งซื้ออาหารนก Nutri-Bird A21 (รหัส SUP-002) ครับ"
  },
  {
    id: "SUP-003",
    name: "คอนไม้ธรรมชาติสำหรับนกฝึกบิน (Bird Perch)",
    category: "supplies",
    categoryTh: "อุปกรณ์สัตว์เลี้ยง",
    price: 490,
    originalPrice: 600,
    rating: 4.7,
    reviewsCount: 34,
    isPopular: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
    tags: ["คอนไม้", "ฝึกนก", "ตั้งพื้น"],
    description: "คอนไม้ธรรมชาติไร้สารเคมี ออกแบบสำหรับให้นกแก้วพักผ่อนและฝึกฝนบายนอกกรง แข็งแรง ถอดประกอบง่าย",
    specifications: {
      "วัสดุ": "ไม้เนื้อแข็งธรรมชาติ",
      "ความสูง": "45 ซม."
    },
    facebookPresetMsg: "สวัสดีครับ/ค่ะ สนใจคอนไม้ธรรมชาติ (รหัส SUP-003) ครับ"
  }
];

// ข้อมูลรีวิวลูกค้า
const REVIEWS_DATA = [
  {
    name: "คุณสมชาย วงศ์สุข",
    role: "ผู้เลี้ยงซันคอนัวร์",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "รับน้องซันคอนัวร์จากร้านนี้ น้องเชื่องมากและแข็งแรงดีสุดๆ ทางร้านให้คำแนะนำการเลี้ยงอย่างใกล้ชิดผ่าน Facebook ประทับใจมากครับ!",
    date: "15 กรกฎาคม 2026"
  },
  {
    name: "คุณกานดา สุวรรณ",
    role: "ผู้เลี้ยงค็อกคาเทล",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "นกน่ารักตรงปก บริการส่งด่วนถึงบ้านปลอดภัยดีมาก แอดมินตอบ Facebook ไวมาก คอยติดตามอาการลูกนกตลอด แนะนำเลยค่ะร้านนี้",
    date: "28 มิถุนายน 2026"
  },
  {
    name: "หมอพัทธ์ (สัตวแพทย์)",
    role: "ลูกค้าประจำ",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "สัตว์เลี้ยงของร้านนี้สุขภาพดี ตรวจโรคครบ ถือว่าเป็นฟาร์มนกและร้านสัตว์เลี้ยงคุณภาพสูงครับ",
    date: "10 พฤษภาคม 2026"
  }
];

// ข้อมูลร้านค้าและติดต่อ Facebook
const SHOP_INFO = {
  name: "Pet Paradise & Bird Shop",
  tagline: "ศูนย์รวมสัตว์เลี้ยงน่ารัก & นกแก้วสายพันธุ์พิเศษ สุขภาพดี 100%",
  facebookId: "Me Love Bird's",
  facebookUrl: "https://www.facebook.com/share/19AFPVQYhd/?mibextid=wwXIfr",
  phone: "081-234-5678",
  email: "contact@petparadise-birdshop.com",
  address: "99/5 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
  hours: "เปิดบริการทุกวัน: 09:00 - 20:00 น.",
  mapUrl: "https://maps.google.com"
};
