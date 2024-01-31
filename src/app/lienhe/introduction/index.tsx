import React from 'react';

const Introduction = () => {
    return (
        <div className="max-w-4xl my-4 mx-auto ml-4 p-6 bg-white shadow-md m-4">
            <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mb-4">GIỚI THIỆU</h2>
            <p className="text-gray-700">
                Hơn 15 năm - một chặng đường với sự hình thành và phát triển không ngừng nghỉ cho đến nay. Sim Vip là
                thương hiệu chuyên cung cấp Sim số đẹp lớn nhất và rẻ nhất thị trường, chiếm được niềm tin của hàng
                triệu khách hàng trên toàn quốc.
                {/* ... Nội dung tiếp theo ... */}
            </p>

            <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mt-4 mb-4">Về chúng tôi</h2>
            <p className="text-gray-700">
                Simvipgiare.com là website được công ty chúng tôi cho ra đời từ năm 2009 với mục đích phục vụ những người yêu
                thích sim số đẹp trên toàn quốc với đa dạng loại sim và phân loại mức giá phù hợp với mọi tầng lớp và
                khả năng kinh tế của khách hàng.
                {/* ... Nội dung tiếp theo ... */}
            </p>

            <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mt-4 mb-4">Cam kết của công ty</h2>
            <p className="text-gray-700">
                Hỗ trợ hết mình, đặt khách hàng làm trọng tâm, áp dụng tư duy cùng có lợi, sự hài lòng của khách hàng là
                viên gạch tạo nên thương hiệu cho công ty chúng tôi.
                {/* ... Nội dung tiếp theo ... */}
            </p>

            <h2 className="text-2xl font-bold border-b-2 border-gray-300 pb-2 mt-4 mb-4">Thông tin liên hệ và hỗ trợ</h2>
            <p className="text-gray-700">
                Để được tư vấn và hỗ trợ về việc mua/bán sim hay bất cứ vấn đề về sim số nào quý khách gặp phải, hãy
                liên lạc với Sim Vip qua thông tin sau:
                Zalo: 0886.39.4567
            </p>
        </div>
    );
};

export default Introduction;