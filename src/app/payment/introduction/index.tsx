import React from 'react';

const Introduction = () => {
    return (
        <div className="max-w-5xl mx-auto ml-4 p-6 bg-white shadow-md my-4">
            <h2 className="text-2xl font-bold border-b-2 border-black-300 pb-2 mb-4">HÌNH THỨC THANH TOÁN</h2>

            <p className="text-gray-700 mb-4 font-bold">1. THANH TOÁN TIỀN MẶT</p>

            <p className="text-gray-700 mb-4 ml-4">1.1 Tại siêu thị: Quý khách có thể đến mua hàng & thanh toán trực tiếp tại cửa hàng của simvipgiare.com</p>

            <p className="text-gray-700 mb-4 ml-4">1.2 Tại nhà/nơi nhận hàng (sim): Thanh toán cho nhân viên giao hàng trực tiếp của simvipgiare.com tại bất kỳ đâu mà bạn yêu cầu khi giao hàng (sim).</p>

            <p className="text-gray-700 mb-4 font-bold">2. THANH TOÁN CHUYỂN KHOẢN</p>

            <p className="text-gray-700 mb-4 ml-4">Chuyển khoản qua ngân hàng VIETCOMBANK cho chúng tôi theo thông tin:</p>

            <ul className="list-disc ml-8">
                <li>Tên ngân hàng: Ngân hàng Thương mại Cổ phần Ngoại thương Việt Nam - Vietcombank</li>
                <li>Chủ tài khoản: BUI TUAN KIET</li>
                <li>Số tài khoản: 24.9999.6666</li>
                <li>Nội dung: TÊN MUA HÀNG - Số sim đặt mua (VD: BUITUANKIET 0886394567)</li>
            </ul>
            <br/>
            <p className="text-gray-700 mb-4 font-bold">3. QUY ĐỊNH VỀ HOÀN TRẢ TIỀN</p>

            <p className="text-gray-700 mb-4 ml-4">Trong trường hợp quý khách hàng đã mua hàng & thanh toán thành công nhưng dư tiền, hoặc đổi trả sim (chưa đăng ký thông tin), Sim Vip sẽ hoàn tiền qua hình thức chuyển khoản vào số tài khoản yêu cầu, hoặc tiền mặt tại địa chỉ giao hàng (sim).</p>
        </div>
    );
};

export default Introduction;