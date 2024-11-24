import { Facebook, Twitter, Youtube, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="bg-[#1C1C1E] text-[#D1D1D6]">
        <div className="max-w-[1440px] mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-light text-gray-400 pb-5">
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">คณะ</h3>
              <ul className="space-y-2">
                {faculties.map((faculty, index) => (
                  <li key={index}>{faculty}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">เกี่ยวกับมหาวิทยาลัย</h3>
              <ul className="space-y-2">
                {aboutUniversity.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">ติดต่อมหาวิทยาลัย</h3>
              <p>
                126/1 ซอยวิภาวดีรังสิต 2<br />
                แขวงรัชดาภิเษก เขตดินแดง
                <br />
                กรุงเทพมหานคร 10400
              </p>
              <p>โทร: 02-697-6000</p>
              <p>
                เวลาทำการ:
                <br />
                8.30 - 17.00
              </p>
              <div className="flex space-x-4 mt-4">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Youtube} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Mail} />
              </div>
              <p className="mt-6">นโยบายการคุ้มครองข้อมูลส่วนบุคคล</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-8 text-center">
          <div className="text-[#8E8E93] text-sm">
            &copy; 2024 University of the Thai Chamber of Commerce. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <a href="#" className="text-[#8E8E93] hover:text-white transition-colors">
      <Icon className="w-5 h-5" />
    </a>
  );
}

const quickLinks = [
  "สมัครเรียน",
  "หลักสูตร TEPCoT",
  "หลักสูตร ToPCATS",
  "หลักสูตร TEPCIAN",
  "หลักสูตร TEP-DE",
  "หลักสูตร AESTHETICS ToPART (ATA)",
  "หลักสูตร JToP",
  "หลักสูตร The Connext",
  "หลักสูตร EMBRYO Incubation Program",
  "หลักสูตร TEN X",
  "หลักสูตร DIGI-X",
  "หลักสูตรปริญญาตรี",
  "หลักสูตรปริญญาโท-เอก",
  "หลักสูตรระยะสั้น",
  "หลักสูตรออนไลน์",
  "ทุนการศึกษา",
  "นักศึกษาปัจจุบัน",
  "การเดินทาง",
  "หอพัก",
];

const faculties = [
  "คณะบริหารธุรกิจ",
  "คณะบัญชี",
  "คณะเศรษฐศาสตร์",
  "คณะมนุษยศาสตร์",
  "คณะวิทยาศาสตร์และเทคโนโลยี",
  "คณะนิเทศศาสตร์",
  "คณะวิศวกรรมศาสตร์",
  "คณะนิติศาสตร์",
  "คณะการท่องเที่ยวและอุตสาหกรรมบริการ",
  "คณะการศึกษาปฐมวัย",
  "คณะศิลปะและการออกแบบดิจิทัล",
  "คณะวิทยาพัฒน์",
  "วิทยาลัยผู้ประกอบการ",
  "วิทยาลัยการศึกษาต่อเนื่อง",
  "International School of Management",
  "泰-中国际管理学院",
  "บัณฑิตวิทยาลัย",
  "Harbour.Space@UTCC",
];

const aboutUniversity = [
  "หอการค้าไทย",
  "ประวัติมหาวิทยาลัย",
  "ปรัชญา วิสัยทัศน์ และพันธกิจ",
  "กรรมการสภา",
  "ผู้บริหาร",
  "ดาวน์โหลดตราสัญลักษณ์",
  "สโมสรมหาวิทยาลัยหอการค้าไทย",
  "รายงานประจำปี",
  "ประกาศจัดซื้อจัดจ้าง",
  "Talk to President",
  "UTCC Partnership",
  "Apple Distinguished School",
  "eTouch",
  "สถิติมหาวิทยาลัยหอการค้าไทย",
  "TCC Connect",
];
