import { useState } from "react";
import { Rocket, Package, Shield, Cpu, Coins } from "lucide-react";

const sections = [
  {
    title: "Bản Cập Nhật 1.1 - Hệ Thống Hòm Tiếp Tế X-Force",
    icon: <Rocket size={24} className="text-cyan-400 " />, 
    content: "Hệ thống phân phối vật phẩm ngẫu nhiên, mỗi hòm có giá 2 Musk và mở ra nhiều cơ hội nhận vật phẩm giá trị."
  },
  {
    title: "Thuật ngữ và Khái niệm Chính",
    icon: <Cpu size={24} className="text-green-400" />, 
    content: (
    <>
    <p><strong>Hòm Tiếp Tế X-Force</strong><br/>Đây là một hệ thống phân phối vật phẩm ngẫu nhiên, nơi người chơi có thể sử dụng đơn vị tiền tệ Musk để mở hòm và nhận các phần thưởng khác nhau. Mỗi hòm có giá 2 Musk và được thiết kế với cơ chế hai giai đoạn để đảm bảo tính công bằng.</p>
      <p><strong>Musk Token</strong><br/>Đây là đơn vị tiền tệ chính trong hệ thống, được sử dụng để mua Hòm Tiếp Tế và một số vật phẩm khác trong game. Người chơi có thể kiếm Musk thông qua nhiều hoạt động khác nhau trong game.</p>
      <p><strong>Chip</strong><br/>Là tài nguyên quan trọng dùng để nâng cấp trang bị và Drone. Chip có thể nhận được trực tiếp từ việc mở Hòm Tiếp Tế hoặc thông qua các hoạt động khác trong game.</p>
      <p><strong>Drone X-Force</strong><br/>Là thiết bị hỗ trợ chiến đấu cao cấp, được phân thành 4 cấp độ (C, B, A, S) với sức mạnh tăng dần. Mỗi Drone có khả năng tấn công tự động và các chỉ số riêng biệt.</p>
      <p><strong>Hệ thống Cấp độ Drone</strong><br/>- Cấp C: Cấp cơ bản, dễ nhận được nhất<br/>- Cấp B: Cấp trung cấp, có sức mạnh ổn định<br/>- Cấp A: Cấp cao cấp, sức mạnh vượt trội<br/>- Cấp S: Cấp hiếm nhất và mạnh nhất</p>
      <p><strong>Tỷ lệ phần trăm (%)</strong><br/>Trong tài liệu này, tỷ lệ phần trăm thể hiện xác suất nhận được một vật phẩm hoặc kết quả cụ thể. Ví dụ, tỷ lệ 60% nghĩa là trong 100 lần, khoảng 60 lần sẽ xảy ra kết quả đó.</p>
      <p><strong>Vật phẩm đặc biệt</strong><br/>Bao gồm các trang bị, token, và vé có giá trị cao, được thiết kế để nâng cao sức mạnh của người chơi hoặc mở khóa các tính năng mới.</p>
      <p><strong>Hệ thống nâng cấp</strong><br/>Cơ chế cho phép người chơi cải thiện sức mạnh của Drone bằng cách kết hợp 3 Drone cùng cấp và sử dụng Chip. Mỗi lần nâng cấp có tỷ lệ thành công riêng và không làm mất Drone gốc nếu thất bại.</p>
    </>)
  },
  {
    title: "Phân Loại Hòm Đặc Biệt",
    icon: <Package size={24} className="text-yellow-400" />, 
    content: (
      <>
      <p><strong>Hòm Tiếp Tế X-Force</strong><br/>Hệ thống phân phối trang bị đa tầng, mỗi hòm có giá 2 Musk. Khi mở hòm, người chơi sẽ trải qua hai giai đoạn:</p>
        <p><strong>Giai Đoạn 1 - Xác Định Cơ Hội</strong><br/>- 60% nhận được hộp để mở tiếp <br/>- 40% nhận ngay 100 Chip</p>
        <br></br>
        <p><strong>Giai Đoạn 2 - Mở Hộp Đặc Biệt</strong><br/>Nếu may mắn nhận được hộp ở giai đoạn 1, người chơi có:<br/>• 50% cơ hội nhận vật phẩm đặc biệt<br/>• 50% cơ hội nhận 100 Chip</p>
        <br></br>
        <p><strong>Phân loại hộp đặc biệt</strong><br/> Khi mở Hộp đặc biệt, người chơi sẽ nhận được 01 vật phẩm đặc biệt trong 5 loại hộp dưới đây theo tỷ lệ:</p>
        <ul>
          <li><strong>Hộp Trang Bị Đặc Biệt</strong> - 4%</li>
          <li><strong>Hộp Chip Nâng Cấp</strong> - 60%</li>
          <li><strong>Hộp Musk Token</strong> - 30%</li>
          <li><strong>Hộp Vé Đặc Biệt</strong> - 1%</li>
          <li><strong>Hộp Trang Bị DOGE</strong> - 5%</li>
        </ul>
        <br></br>
        <p><strong>Chi tiết từng loại hộp</strong></p>
        <ul>
          <li className="mt-2"><strong>Hộp Trang Bị Đặc Biệt (4%)</strong>: Có <strong>20%</strong> cơ hội nhận mỗi loại trang bị:<strong> Hero C, David, Marcus, Henry, hoặc Drone X-Force</strong>.</li>
          <li className="mt-2"><strong>Hộp Chip Nâng Cấp (60%)</strong>: Chứa: <strong>100, 500, 800, 1000, 10.000</strong>  Chip với các tỷ lệ lần lượt: <strong>50%, 20%, 10%, 8%, 2%</strong>  .</li>
          <li className="mt-2" ><strong>Hộp Musk Token (30%)</strong>: Chứa: <strong>1, 2, 5, 10, 100</strong>  Musk với các tỷ lệ lần lượt: <strong>50%, 20%, 10%, 8%, 2%</strong> .</li>
          <li className="mt-2"><strong>Hộp Vé Đặc Biệt (1%)</strong>: Có <strong>20%</strong> cơ hội nhận Vé Nhân Vật và <strong>80%</strong> cơ hội nhận Vé Mảnh Ghép.</li>
          <li className="mt-2"><strong>Hộp Trang Bị DOGE (5%)</strong>: Có thể chứa <strong>  DOGE Energy (50%), MSCI Memory (10%), hoặc DOGE Shield (40%)  </strong>.</li>
        </ul>
      </>
    )
  },
  {
    title: "Hệ Thống Drone X-Force",
    icon: <Shield size={24} className="text-purple-400" />, 
    content: (
      <>
        <p><strong>4.1. TỔNG QUAN HỆ THỐNG DRONE</strong><br/>Drone X-Force là công nghệ tiên tiến được trang bị cho các chiến binh. Mỗi Drone có một sức mạnh chiến đấu khác nhau.</p>
        <br></br>
        <p><strong>4.2. PHÂN CẤP VÀ ĐẶC ĐIỂM</strong></p>
        <p className="mt-2"><strong>Drone Cấp C (60%)</strong>: <strong> 10 </strong>  dmg, tấn công <strong>30 </strong> giây, <strong> miễn nhiễm</strong> sát thương, nâng cấp <strong>5,000 Chip (3C → 1B) </strong>.</p>
        <p className="mt-2"><strong>Drone Cấp B (35%)</strong>: <strong> 20 </strong>  dmg, tấn công <strong>30 </strong>  giây,<strong> miễn nhiễm  </strong> sát thương, nâng cấp <strong>15,000 Chip (3B → 1A)</strong> .</p>
        <p className="mt-2"><strong>Drone Cấp A (4%)</strong>: <strong>  50 </strong> dmg, tấn công <strong>30 </strong> giây, <strong> miễn nhiễm </strong> sát thương, nâng cấp <strong>30,000 Chip (3A → 1S) </strong> .</p>
        <p className="mt-2"><strong>Drone Cấp S (1%)</strong>: <strong> 100 </strong> dmg, tấn công <strong>30 </strong> giây, <strong> miễn nhiễmnhiễm </strong> sát thương, cấp cao nhất.</p>
        <br></br>
        <p><strong>4.3. HỆ THỐNG NÂNG CẤP</strong></p>
        <p>- Cần <strong> 3 </strong> Drone cùng cấp để nâng cấp.</p>
        <p>- Chi phí và tỷ lệ thành công:<strong>C → B (30%, 5,000 Chip), B → A (15%, 15,000 Chip), A → S (5%, 30,000 Chip) </strong> .</p>
        <p>- Drone <strong>không  </strong> bị mất khi nâng cấp <strong>thất bại </strong>.</p>
        <br></br>
        <p><strong>4.4. CHIẾN THUẬT SỬ DỤNG</strong></p>
        <p>- Tấn công liên tục trong 30 giây, miễn nhiễm sát thương, tự động tìm và tấn công mục tiêu.</p>
      </>
    )
  },
  {
    title: "Mua và Sử Dụng Hòm",
    icon: <Coins size={24} className="text-orange-400" />, 
    content: (
      <>
        <p><strong> Hướng dẫn chi tiết quy trình sử dụng hòm tiếp tế X-Force</strong></p>
        <br></br>
        <p><strong>I. CHUẨN BỊ VÀ KIỂM TRA</strong></p>
        <p><strong>Bước 1: Kiểm Tra Tài Khoản</strong>: Truy cập vào game M-SCI, chọn "Wallet", kiểm tra số Musk.</p>
        <p><strong>Bước 2: Kiểm Tra Kho</strong>: Vào "Inventory", kiểm tra không gian trống, sắp xếp vật phẩm.</p>
        <br></br>
        <p><strong>II. THAO TÁC MUA VÀ MỞ HÒM</strong></p>
        <p><strong>Bước 1: Truy Cập Shop</strong>: Chọn "Shop", tìm "X-Force Supply Box", giá 2 Musk/hòm.</p>
        <p><strong>Bước 2: Mua Hòm</strong>: Nhấn vào hòm, chọn số lượng, xác nhận mua.</p>
        <p><strong>Bước 3: Mở Hòm</strong>: Chọn "Open Box", chờ animation, quan sát kết quả.</p>
        <br></br>
        <p><strong> CÁC TÌNH HUỐNG CÓ THỂ XẢY RA</strong></p>
        <p>- 40% nhận ngay 100 Chip.</p>
        <p>- 60% tiếp tục mở hộp, có 50% cơ hội nhận vật phẩm đặc biệt.</p>
        <br></br>
        <p><strong> KHẮC PHỤC SỰ CỐ</strong></p>
        <p>- Nếu mất kết nối: Kiểm tra giao dịch, liên hệ hỗ trợ.</p>
        <p>- Nếu kho đầy: Dọn dẹp, nâng cấp kho.</p>
        <p>- Nếu không đủ Musk: Kiếm từ nhiệm vụ, sự kiện.</p>
        <br></br>
        <p><strong> LỜI KHUYÊN</strong></p>
        <p>- Chuẩn bị đủ Musk trước khi mở.</p>
        <p>- Theo dõi kết quả để tối ưu chiến lược.</p>
      </>
    )
  }
];

export default function Content({ contentRef }) {
  const [selected, setSelected] = useState(0);

  return (
    <div ref={contentRef} className=" min-h-screen bg-black text-white p-6 " style={{ backgroundImage: 'url(https://m-sci.net/assets/join_now_bg-D2HkDGs-.png)'}}>
      <h1 className="  text-3xl font-bold text-cyan-400 text-center mb-6">Cập Nhật X-Force 1.1</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-4 ">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                selected === index ? "bg-cyan-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelected(index)}
            >
              {section.icon} {section.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="bg-gray-900 border border-cyan-500 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">
              {sections[selected].title}
            </h2>
            <p className="text-gray-300">{sections[selected].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}