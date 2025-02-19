import React from "react";

const Content = () => {
  return (
    <div className="bg-gray-900 text-white p-6 shadow-lg w-full mx-auto">
      <div className="max-w-4xl mx-auto px-8 py-8 ">
        <div className="text flex flex-col items-start w-full h-full justify-between py-[5%] gap-5">
          <h1 className="font-bold text-5xl lg:text-4xl w-full text-center">BẢN CẬP NHẬT 1.1 - HỆ THỐNG HÒM TIẾP TẾ X-FORCE</h1>
          <div className="w-full mx-auto h-[2px] bg-[#A7E6FF]"></div>
        </div>
        <h1 className="text-3xl font-bold text-yellow-400 text-center">
          BẢN CẬP NHẬT 1.1 - HỆ THỐNG HÒM TIẾP TẾ X-FORCE
        </h1>

        {/* Thuật ngữ và khái niệm chính */}
        <section className="mt-6">
          <a class="font-bold text-2xl w-full flex gap-3   z-50" href="#" target="_blank">1. Thuật ngữ và khái niệm chính<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide  lucide-external-link text-gray-500"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
          <div class="w-1/2 max-sm:w-full h-[2px] bg-[#A7E6FF] mb-6"></div>
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
          <a class="font-bold text-2xl w-full flex gap-3   z-50" href="#" target="_blank">2. Mở hộp<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide  lucide-external-link text-gray-500"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
          <div class="w-1/5 max-sm:w-full h-[2px] bg-[#A7E6FF] mb-6"></div>
          <p className="mt-4 text-gray-300">Hòm Tiếp Tế X-Force là hệ thống phân phối trang bị đa tầng, mỗi hòm có giá 2 Musk.
            Khi mở hòm, người chơi sẽ trải qua hai giai đoạn:</p>
          <h3 className="text-xl font-semibold text-yellow-300 mt-4">Giai Đoạn 1 - Xác Định Cơ Hội:</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>60% nhận được hộp để mở tiếp</li>
            <li>40% nhận ngay 100 Chip</li>
          </ul>
          <h3 className="text-xl font-semibold text-yellow-300 mt-4">Giai Đoạn 2 - Mở Hộp Đặc Biệt:</h3>
          <p className="mt-2 text-gray-300">Nếu may mắn nhận được hộp ở giai đoạn 1, người chơi có:</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>50% cơ hội nhận vật phẩm đặc biệt</li>
            <li>50% cơ hội nhận 100 Chip</li>
          </ul>
        </section>

        {/* Phân loại hộp đặc biệt */}
        <section className="mt-6">
          <a class="font-bold text-2xl w-full flex gap-3   z-50" href="#" target="_blank">3. Phân loại hộp đặc biệt<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide  lucide-external-link text-gray-500"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
          <div class="w-2/5 max-sm:w-full h-[2px] bg-[#A7E6FF] mb-6"></div>
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
                <td className="px-4 py-2 border text-center">Hộp Trang Bị Đặc Biệt</td>
                <td className="px-4 py-2 border text-center">04%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">Hộp Chip Nâng Cấp</td>
                <td className="px-4 py-2 border text-center">60%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">Hộp Musk Token</td>
                <td className="px-4 py-2 border text-center">30%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">Hộp Vé Đặc Biệt</td>
                <td className="px-4 py-2 border text-center">01%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">Hộp Trang Bị DOGE</td>
                <td className="px-4 py-2 border text-center">05%</td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.1. Hộp Trang Bị Đặc Biệt (4%) Mỗi hộp có tỷ lệ đồng
            đều (20%) chứa một trong năm loại:</h3>

          <table className="min-w-full mt-4 text-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Bộ Trang Bị Hero C</th>
                <th className="px-4 py-2 border">Bộ Trang Bị David</th>
                <th className="px-4 py-2 border">Bộ Trang Bị Marcus</th>
                <th className="px-4 py-2 border">Bộ Trang Bị Henry</th>
                <th className="px-4 py-2 border">Drone X-Force</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">tỷ lệ (20%)</td>
                <td className="px-4 py-2 border text-center">tỷ lệ (20%)</td>
                <td className="px-4 py-2 border text-center">tỷ lệ (20%)</td>
                <td className="px-4 py-2 border text-center">tỷ lệ (20%)</td>
                <td className="px-4 py-2 border text-center">tỷ lệ (20%)</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.2. Hộp Chip Nâng Cấp (60%)</h3>

          <table className="min-w-full mt-4 text-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">100 Chip</th>
                <th className="px-4 py-2 border">500 Chip</th>
                <th className="px-4 py-2 border">800 Chip</th>
                <th className="px-4 py-2 border">1000 Chip</th>
                <th className="px-4 py-2 border">10000 Chip</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">50% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">20% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">10% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">8% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">2% tỷ lệ</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.3. Hộp Musk Token (30%)</h3>

          <table className="min-w-full mt-4 text-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">1 Musk</th>
                <th className="px-4 py-2 border">2 Musk</th>
                <th className="px-4 py-2 border">5 Musk</th>
                <th className="px-4 py-2 border">10 Musk</th>
                <th className="px-4 py-2 border">100 Musk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">50% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">20% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">10% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">8% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">2% tỷ lệ</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.4. Hộp Vé Đặc Biệt (1%)</h3>

          <table className="min-w-full mt-4 text-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Vé Nhân Vật</th>
                <th className="px-4 py-2 border">Vé Mảnh Ghép</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">(20%)</td>
                <td className="px-4 py-2 border text-center">(80%)</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">3.5. Hộp Trang Bị DOGE (5%)</h3>

          <table className="min-w-full mt-4 text-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">DOGE Energy</th>
                <th className="px-4 py-2 border">MSCI Memory</th>
                <th className="px-4 py-2 border">DOGE Shield</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">50% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">10% tỷ lệ</td>
                <td className="px-4 py-2 border text-center">40% tỷ lệ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-6">
          <a class="font-bold text-2xl w-full flex gap-3   z-50" href="#" target="_blank">VÍ DỤ THỰC TẾ VỀ HỆ THỐNG HÒM TIẾP TẾ X-FORCE<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide  lucide-external-link text-gray-500"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
          <div class="w-4/5 max-sm:w-full h-[2px] bg-[#A7E6FF] mb-6"></div>
          <p className="mt-4 text-gray-300">Kính gửi các Chỉ huy X-Force,</p>
          <p className="mt-4 text-gray-300">Để giúp các chỉ huy hiểu rõ hơn về cơ chế hoạt động của Hòm
            Tiếp Tế, tôi xin đưa ra một số tình huống thực tế:</p>
          <p className="mt-2 text-gray-300"><strong>Tình Huống 1: Nhận Chip Trực Tiếp Chỉ huy A chi 2 Musk để mở Hòm Tiếp Tế:</strong></p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Giai đoạn 1: Rơi vào 40% → Nhận ngay 100 Chip và kết thúc</li>
            <li>Kết quả: 100 Chip với chi phí 2 Musk</li>
          </ul>
          <p className="mt-2 text-gray-300"><strong>Tình Huống 2: Nhận Vật Phẩm Đặc Biệt Chỉ huy B chi 2 Musk để mở Hòm Tiếp Tế:</strong></p>
          <ul className="list-none text-gray-300 mt-2">
            <li className="list-disc ml-4">Giai đoạn 1: Rơi vào 60% → Tiếp tục mở hộp</li>
            <li className="list-disc ml-4">Giai đoạn 2: Rơi vào 50% nhận vật phẩm đặc biệt</li>
            <li className="list-disc ml-4">Hệ thống ngay lập tức roll tỷ lệ trong 5 loại vật phẩm:</li>
            <li className="ml-6">o	May mắn trúng Hộp Musk Token (30%)</li>
            <li className="ml-6">o	Tự động roll tiếp và nhận được 10 Musk (8%)</li>
            <li className="list-disc ml-4">Kết quả: Với 2 Musk đầu tư, nhận được 10 Musk</li>
          </ul>
          <p className="mt-2 text-gray-300"><strong>Tình Huống 3: Nhận Drone Chỉ huy C chi 2 Musk để mở Hòm Tiếp Tế:</strong></p>
          <ul className="list-none text-gray-300 mt-2">
            <li className="list-disc ml-4">Giai đoạn 1: Rơi vào 60% → Tiếp tục mở hộp</li>
            <li className="list-disc ml-4">Giai đoạn 2: Rơi vào 50% nhận vật phẩm đặc biệt</li>
            <li className="list-disc ml-4">Hệ thống ngay lập tức roll: </li>
            <li className="ml-6">o	Trúng Hộp Trang Bị Đặc Biệt (4%)</li>
            <li className="ml-6">o	Tự động roll trong 5 trang bị và nhận Drone (20%)</li>
            <li className="ml-6">o	Tự động xác định cấp độ Drone là C (60%)</li>
            <li className="list-disc ml-4">Kết quả: Với 2 Musk, nhận được 1 Drone cấp C</li>
          </ul>
          <p className="mt-2 text-gray-300"><strong>Tình Huống 4: Nhận Vé Đặc Biệt Chỉ huy D chi 2 Musk để mở Hòm Tiếp Tế:</strong></p>
          <ul className="list-none text-gray-300 mt-2">
            <li className="list-disc ml-4">Giai đoạn 1: Rơi vào 60% → Tiếp tục mở hộp</li>
            <li className="list-disc ml-4">Giai đoạn 2: Rơi vào 50% nhận vật phẩm đặc biệt</li>
            <li className="list-disc ml-4">Hệ thống ngay lập tức roll: </li>
            <li className="ml-6">o	Trúng Hộp Trang Bị Đặc Biệt (1%)</li>
            <li className="ml-6">o	Tự động roll và nhận Vé Nhân Vật (10%)</li>
            <li className="list-disc ml-4">Kết quả: Với 2 Musk, nhận được 1 Vé Nhân Vật</li>
          </ul>
          <p className="mt-2 text-gray-300">Mỗi khi nhận được vật phẩm đặc biệt, hệ thống sẽ tự động roll các tỷ lệ liên tiếp để xác
            định phần thưởng cuối cùng mà không cần người chơi mở thêm hộp nào khác.</p>
          <p className="mt-2 text-gray-300">Trân trọng, Bộ phận Hỗ trợ X-Force</p>
        </section>

        <section className="mt-6">
          <a class="font-bold text-2xl w-full flex gap-3   z-50" href="#" target="_blank">4 . Hướng dẫn chi tiết về hệ thống drone x-force<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide  lucide-external-link text-gray-500"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
          <div class="w-3/4 max-sm:w-full h-[2px] bg-[#A7E6FF] mb-6"></div>
          <p className="mt-4 text-gray-300">Kính gửi các Chỉ huy X-Force,</p>
          <p className="mt-4 text-gray-300">Bộ phận R&D xin trân trọng giới thiệu chi tiết về hệ thống Drone chiến thuật của chúng ta.</p>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">4.1. TỔNG QUAN HỆ THỐNG DRONE</h3>
          <p className="mt-2 text-gray-300">Drone X-Force là công nghệ tiên tiến được trang bị cho các chiến binh. Mỗi Drone có một sức mạnh chiến đấu khác nhau.</p>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">4.2. PHÂN CẤP VÀ ĐẶC ĐIỂM</h3>
          <h4 className="text-lg font-semibold text-green-300 mt-3">4.2.1. Drone Cấp C (Tỷ lệ xuất hiện: 60%)</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Sát thương cơ bản: 10 dmg</li>
            <li>Tấn công liên tục trong 30 giây</li>
            <li>Tốc độ tấn công: 5 phát/giây</li>
            <li>Miễn nhiễm mọi sát thương khi hoạt động</li>
            <li>Chi phí nâng cấp: 5,000 Chip/lần (3 drone C → 1 drone B)</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">4.2.2. Drone Cấp B (Tỷ lệ xuất hiện: 35%)</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Sát thương cơ bản: 20 dmg</li>
            <li>Tấn công liên tục trong 30 giây</li>
            <li>Tốc độ tấn công: 5 phát/giây</li>
            <li>Miễn nhiễm mọi sát thương khi hoạt động</li>
            <li>Chi phí nâng cấp: 15,000 Chip/lần (3 drone B → 1 drone A)</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">4.2.3. Drone Cấp A (Tỷ lệ xuất hiện: 4%)</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Sát thương cơ bản: 50 dmg</li>
            <li>Tốc độ tấn công: 5 phát/giây</li>
            <li>Miễn nhiễm mọi sát thương khi hoạt động</li>
            <li>Chi phí nâng cấp: 30,000 Chip/lần (3 drone A → 1 drone S)</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">4.2.4. Drone Cấp S (Tỷ lệ xuất hiện: 1%)</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Sát thương cơ bản: 100 dmg</li>
            <li>Tốc độ tấn công: 5 phát/giây</li>
            <li>Miễn nhiễm mọi sát thương khi hoạt động</li>
            <li>Cấp độ cao nhất của hệ thống Drone</li>
          </ul>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">4.3. HỆ THỐNG NÂNG CẤP</h3>
          <h4 className="text-lg font-semibold text-green-300 mt-3">4.3.1. Quy Trình Nâng Cấp:</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Cần đủ 3 Drone cùng cấp để thực hiện nâng cấp</li>
            <li>Chi phí và tỷ lệ thành công tăng theo cấp độ</li>
            <li>Drone không bị mất khi nâng cấp thất bại</li>
            <li>Không giới hạn số lần thử nâng cấp</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">4.3.2. Tỷ Lệ Thành Công:</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>C → B: 30% (Chi phí: 5,000 Chip)</li>
            <li>B → A: 15% (Chi phí: 15,000 Chip)</li>
            <li>A → S: 5% (Chi phí: 30,000 Chip)</li>
          </ul>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">4.4. CHIẾN THUẬT SỬ DỤNG</h3>
          <h4 className="text-lg font-semibold text-green-300 mt-3">Khả Năng Chiến Đấu:</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Tấn công liên tục trong 30 giây</li>
            <li>Miễn nhiễm sát thương khi hoạt động</li>
            <li>Tự động tìm và tấn công mục tiêu</li>
          </ul>
        </section>

        <section className="mt-6">
          <a class="font-bold text-2xl w-full flex gap-3   z-50" href="#" target="_blank">5. Hướng dẫn chi tiết quy trình sử dụng hòm tiếp tế X-Force<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide  lucide-external-link text-gray-500"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
          <div class="w-5/6 max-sm:w-full h-[2px] bg-[#A7E6FF] mb-6"></div>
          <h3 className="text-xl font-semibold text-yellow-300 mt-4">I. CHUẨN BỊ VÀ KIỂM TRA</h3>
          <h4 className="text-lg font-semibold text-green-300 mt-3">Bước 1: Kiểm Tra Tài Khoản</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Truy cập vào game M-SCI</li>
            <li>Chọn biểu tượng "Wallet" góc trái màn hình</li>
            <li>Kiểm tra số Musk hiện có (tối thiểu 2 Musk/lần mở) Ví dụ: Tài khoản có 10 Musk = Có thể mở 5 lần</li>
          </ul>
          <h4 className="text-lg font-semibold text-green-300 mt-3">Bước 2: Kiểm Tra Kho</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Vào mục "Inventory" góc phải màn hình</li>
            <li>Kiểm tra không gian trống trong kho</li>
            <li>Sắp xếp và xóa vật phẩm không cần thiết nếu kho gần đầy</li>
          </ul>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">II. THAO TÁC MUA VÀ MỞ HÒM</h3>
          <h4 className="text-lg font-semibold text-green-300 mt-3">Bước 1: Truy Cập Shop</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Chọn biểu tượng "Shop" ở góc phải màn hình</li>
            <li>Tìm mục "X-Force Supply Box"</li>
            <li>Giá hiển thị: 2 Musk/hòm</li>
          </ul>
          <h4 className="text-lg font-semibold text-green-300 mt-3">Bước 2: Mua Hòm</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Nhấn vào biểu tượng hòm</li>
            <li>Chọn số lượng muốn mua (1-99)</li>
            <li>Xác nhận mua bằng nút "BUY" Ví dụ: Mua 5 hòm = 10 Musk</li>
          </ul>
          <h4 className="text-lg font-semibold text-green-300 mt-3">Bước 3: Mở Hòm Giai Đoạn 1</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Chọn "Open Box" từ Inventory</li>
            <li>Chờ animation mở hòm (khoảng 3 giây)</li>
            <li>Quan sát kết quả trên màn hình</li>
          </ul>
        </section>

        <section className="mt-6">

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">B. CÁC TÌNH HUỐNG CÓ THỂ XẢY RA</h3>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Tình Huống 1: Mở Hòm Giai Đoạn 1 - Nhận Chip</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Kết quả: Rơi vào 40% nhận Chip</li>
            <li>Hệ thống tự động cộng 100 Chip vào tài khoản</li>
            <li>Quy trình kết thúc</li>
            <li>Có thể tiếp tục mua hòm mới nếu muốn</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Tình Huống 2: Mở Hòm Giai Đoạn 1 - Tiếp Tục</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Kết quả: Rơi vào 60% tiếp tục</li>
            <li>Hệ thống tự động chuyển sang Giai đoạn 2</li>
            <li>Không cần thêm thao tác</li>
            <li>Chờ kết quả Giai đoạn 2</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Tình Huống 3: Giai Đoạn 2 - Nhận Chip</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Kết quả: Rơi vào 50% nhận Chip</li>
            <li>Hệ thống tự động cộng 100 Chip</li>
            <li>Quy trình kết thúc</li>
            <li>Có thể mua hòm mới</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Tình Huống 4: Giai Đoạn 2 - Nhận Vật Phẩm</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Kết quả: Rơi vào 50% nhận vật phẩm</li>
            <li>Hệ thống tự động xác định loại vật phẩm</li>
            <li>Vật phẩm được thêm vào kho</li>
            <li>Quy trình kết thúc</li>
          </ul>
        </section>

        <section className="mt-6">

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">C. KHẮC PHỤC SỰ CỐ</h3>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Trường Hợp Mất Kết Nối</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Đợi kết nối ổn định</li>
            <li>Kiểm tra lịch sử giao dịch</li>
            <li>Liên hệ hỗ trợ nếu mất vật phẩm</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Trường Hợp Kho Đầy</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Dọn dẹp kho trước</li>
            <li>Xử lý vật phẩm trùng lặp</li>
            <li>Nâng cấp dung lượng kho nếu cần</li>
          </ul>

          <h4 className="text-lg font-semibold text-green-300 mt-3">Trường Hợp Không Đủ Musk</h4>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Kiếm thêm Musk từ nhiệm vụ</li>
            <li>Mua Musk từ shop</li>
            <li>Tham gia sự kiện để nhận Musk</li>
          </ul>

          <h3 className="text-xl font-semibold text-yellow-300 mt-4">D. LỜI KHUYÊN</h3>
          <ul className="mt-2 text-gray-300 list-disc list-inside">
            <li>Chuẩn bị đủ Musk cho nhiều lần mở</li>
            <li>Theo dõi và ghi chép kết quả để tối ưu chiến lược</li>
          </ul>
        </section>

      </div>
      {/* Nút Về Đầu Trang */}
    <div className="flex justify-center mt-6">
        <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-400 transition duration-300">
            Về Đầu Trang
        </button>
    </div>
    </div>
  );
};

export default Content;
