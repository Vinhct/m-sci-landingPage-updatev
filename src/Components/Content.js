import React from "react";

const Content = () => {
  return (
    <div className="bg-gray-900 text-white p-6 shadow-lg w-full mx-auto">
    <div className="max-w-4xl mx-auto px-8 py-8 ">
      <h1 className="text-3xl font-bold text-yellow-400 text-center">
        BẢN CẬP NHẬT 1.1 - HỆ THỐNG HÒM TIẾP TẾ X-FORCE
      </h1>
      
      {/* Thuật ngữ và khái niệm chính */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-blue-400">1. Thuật ngữ và khái niệm chính</h2>
        <p className="mt-4 text-gray-300">Kính gửi các Chỉ huy X-Force</p>
        <p className="mt-4 text-gray-300">Tôi xin trân trọng giới thiệu bản cập nhật 1.1 của hệ thống Hòm Tiếp
          Tế X-Force - một tính năng mới được thiết kế để tạo trải nghiệm thú vị
          và công bằng cho tất cả người chơi trong việc nhận các vật phẩm và trang bị.
        </p>
        <h3 className="text-xl font-semibold text-yellow-300 mt-4">Giải thích các thuật ngữ và khái niệm chính:</h3>
        <p className="mt-2 text-gray-300"><strong>Hòm Tiếp Tế X-Force</strong>: Đây là một hệ thống phân phối vật phẩm ngẫu nhiên, 
        nơi người chơi có thể sử dụng đơn vị tiền tệ Musk để mở hòm và nhận các phần thưởng khác nhau. Mỗi hòm có giá 2 Musk và 
        được thiết kế với cơ chế hai giai đoạn để đảm bảo tính công bằng.</p>
        <p className="mt-2 text-gray-300"><strong>Musk Token</strong>: Đây là đơn vị tiền tệ chính trong hệ thống, được sử dụng để
        mua Hòm Tiếp Tế và một số vật phẩm khác trong game. Người chơi có thể kiếm Musk thông qua nhiều hoạt động khác nhau trong game.</p>
        <p className="mt-2 text-gray-300"><strong>Chip</strong>: Là tài nguyên quan trọng dùng để nâng cấp trang bị và Drone. 
        Chip có thể nhận được trực tiếp từ việc mở Hòm Tiếp Tế hoặc thông qua các hoạt động khác trong game.</p>
        <p className="mt-2 text-gray-300"><strong>Drone X-Force</strong>: Là thiết bị hỗ trợ chiến đấu cao cấp, được phân thành 4 
        cấp độ (C, B, A, S) với sức mạnh tăng dần. Mỗi Drone có khả năng tấn công tự động và các chỉ số riêng biệt.</p>
        <p className="mt-2 text-gray-300"><strong>Hệ thống Cấp độ Drone</strong>:</p>
        <ul className="list-disc list-inside mt-2 text-gray-300">
          <li>Cấp C: Cấp cơ bản, dễ nhận được nhất</li>
          <li>Cấp B: Cấp trung cấp, có sức mạnh ổn định</li>
          <li>Cấp A: Cấp cao cấp, sức mạnh vượt trội</li>
          <li>Cấp S: Cấp hiếm nhất và mạnh nhất</li>
        </ul> 
        <p className="mt-2 text-gray-300"><strong>Tỷ lệ phần trăm (%)</strong>: Trong tài liệu này, tỷ lệ phần trăm thể hiện xác suất nhận
        được một vật phẩm hoặc kết quả cụ thể. Ví dụ, tỷ lệ 60% nghĩa là trong 100 lần, khoảng 60 lần sẽ xảy ra kết quả đó.</p>
        <p className="mt-2 text-gray-300"><strong>Vật phẩm đặc biệt</strong>: Bao gồm các trang bị, token, và vé có giá trị cao, được thiết 
        kế để nâng cao sức mạnh của người chơi hoặc mở khóa các tính năng mới.</p>
        <p className="mt-2 text-gray-300"><strong>Hệ thống nâng cấp</strong>: Cơ chế cho phép người chơi cải thiện sức mạnh của Drone bằng 
        cách kết hợp 3 Drone cùng cấp và sử dụng Chip. Mỗi lần nâng cấp có tỷ lệ thành công riêng và không làm mất Drone gốc nếu thất bại.</p>
        <p className="mt-4 text-gray-300">Chúng tôi tin rằng với những cải tiến mới này, trải nghiệm game của các Chỉ huy sẽ trở nên thú vị 
        và hấp dẫn hơn. Mọi góp ý và phản hồi của các bạn đều rất quan trọng với chúng tôi trong việc tiếp tục cải thiện và phát triển hệ thống.</p>
        <p className="mt-4 text-gray-300">Trân trọng,</p>
        <p className="mt-4 text-gray-300">Đội ngũ phát triển X-Force!</p>
      </section>


      {/* Mở hộp */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-blue-400">2. Mở hộp</h2>
        <p className="mt-4 text-gray-300">Hòm Tiếp Tế X-Force là hệ thống phân phối trang bị đa tầng, mỗi hòm có giá 2 Musk. 
          Khi mở hòm, người chơi sẽ trải qua hai giai đoạn:</p>
        <h3 className="text-xl font-semibold text-yellow-300 mt-4">Giai Đoạn 1 - Xác Định Cơ Hội:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>60% nhận được hộp để mở tiếp</li>
          <li>40% nhận ngay 100 Chip</li>
        </ul>
        <h3 className="text-xl font-semibold text-yellow-300 mt-4">Giai Đoạn 2 - Mở Hộp Đặc Biệt:</h3>
        <ul className="list-disc list-inside text-gray-300 mt-2">
        <p className="mt-2 text-gray-300">Nếu may mắn nhận được hộp ở giai đoạn 1, người chơi có:</p>
          <li>50% cơ hội nhận vật phẩm đặc biệt</li>
          <li>50% cơ hội nhận 100 Chip</li>
        </ul>
      </section>

      {/* Phân loại hộp đặc biệt */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-blue-400">3. Phân loại hộp đặc biệt</h2>
        <p className="mt-4 text-gray-300">Khi mở Hộp đặc biệt sẽ ngẫu nhiên nhận được 01 vật phẩm đặc biệt trong 5 hộp dưới đây theo tỷ lệ %:</p>
        <table className="min-w-full mt-4 text-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Hộp</th>
              <th className="px-4 py-2 border">Tỷ lệ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Hộp Trang Bị Đặc Biệt</td>
              <td className="px-4 py-2 border">04%</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Hộp Chip Nâng Cấp</td>
              <td className="px-4 py-2 border">60%</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Hộp Musk Token</td>
              <td className="px-4 py-2 border">30%</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Hộp Vé Đặc Biệt</td>
              <td className="px-4 py-2 border">01%</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Hộp Trang Bị DOGE</td>
              <td className="px-4 py-2 border">05%</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Hướng dẫn chi tiết */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-blue-400">5. Hướng dẫn chi tiết quy trình sử dụng hòm tiếp tế x-force</h2>
        <p className="mt-4 text-gray-300">I. CHUẨN BỊ VÀ KIỂM TRA</p>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>Truy cập vào game M-SCI</li>
          <li>Kiểm tra số Musk hiện có</li>
        </ul>
        <p className="mt-4 text-gray-300">II. THAO TÁC MUA VÀ MỞ HÒM</p>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>Chọn biểu tượng "Shop" ở góc phải màn hình</li>
          <li>Chọn số lượng muốn mua (1-99)</li>
          <li>Chờ kết quả và theo dõi quá trình mở hòm</li>
        </ul>
      </section>
    </div>
    </div>
  );
};

export default Content;
