// TIỆN ÍCH
    function formatMoney(amount) {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(amount);
}


const PRODUCT_DATA = {
    Apple: [
        {
            id: 1,
            name: "iPhone 16e 128GB",
            price: 14900000,
            image: "ẢNH IPHONE coppy/1.jpg",
            detailImage: "ẢNH IPHONE coppy/ct1.jpg",
            status: "Còn hàng",
            description: 
            [
                "Chip Apple A18 6 nhân",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: 48 MP",
                "Camera trước: 12 MP",
                "Pin 26 giờ, Sạc 20 W"
            ]
        },
        {
            id: 2,
            name: "iPhone 13 128GB",
            price: 12490000,
            image: "ẢNH IPHONE coppy/2.jpg",
            detailImage: "ẢNH IPHONE coppy/ct2.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A15 Bionic",
                "RAM: 4 GB",
                "Dung lượng: 128 GB",
                "Camera sau: 2 camera 12 MP",
                "Camera trước: 12 MP",
                "Pin 3240 mAh, Sạc 20W"
            ]
        },
        {
            id: 3,
            name: "iPhone 17 256GB",
            price: 24990000,
            image: "ẢNH IPHONE coppy/3.jpg",
            detailImage: "ẢNH IPHONE coppy/ct3.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A19 6 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 48 MP & Phụ 48 MP",
                "Camera trước: 18 MP",
                "Pin 30 giờ, Sạc 40 W"
            ]
        },
        {
            id: 4,
            name: "iPhone 16 Plus 128GB",
            price: 25090000,
            image: "ẢNH IPHONE coppy/4.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A18 6 nhân",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 48 MP & Phụ 12 MP",
                "Camera trước: 12 MP",
                "Pin 27 giờ, Sạc 20 W"
            ]
        }, 
        {
            id: 5,
            name: "iPhone 14 128GB",
            price: 13990000,
            image: "ẢNH IPHONE coppy/5.jpg",
            detailImage: "ẢNH IPHONE coppy/ct5.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A15 Bionic",
                "RAM: 6 GB",
                "Dung lượng: 128 GB",
                "Camera sau: 2 camera 12 MP",
                "Camera trước: 12 MP",
                "Pin 3279 mAh, Sạc 20 W"
            ]
        },
        {
            id: 6,
            name: "iPhone 17 Pro Max 256GB",
            price: 37990000,
            image: "ẢNH IPHONE coppy/6.jpg",
            detailImage: "ẢNH IPHONE coppy/ct6.jpg",
            status: "Còn hàng",     
            description: [
                "Chip Apple A19 Pro 6 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 48 MP & Phụ 48 MP, 48 MP",
                "Camera trước: 18 MP",
                "Pin 37 giờ, Sạc 40 W"
            ]
        },
        {
            id: 7,
            name: "iPhone 15 128GB",
            price: 17290000,
            image: "ẢNH IPHONE coppy/7.jpg",
            detailImage: "ẢNH IPHONE coppy/ct7.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A16 Bionic",
                "RAM: 6 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 48 MP & Phụ 12 MP",
                "Camera trước: 12 MP",
                "Pin 3349 mAh, Sạc 20 W"
            ]
        },
        {
            id: 8,
            name: "iPhone 16 128GB",
            price: 21290000,
            image: "ẢNH IPHONE coppy/8.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A18 6 nhân",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 48 MP & Phụ 12 MP",
                "Camera trước: 12 MP",
                "Pin 22 giờ, Sạc 20 W"
            ]
        },
        {
            id: 9,
            name: "iPhone 17 Pro 256GB",
            price: 34690000,
            image: "ẢNH IPHONE coppy/9.jpg",
            detailImage: "ẢNH IPHONE coppy/ct9.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A19 Pro 6 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 48 MP & Phụ 48 MP, 48 MP",
                "Camera trước: 18 MP",
                "Pin 31 giờ, Sạc 40 W"
            ]
        },
        {
            id: 10,
            name: "iPhone 16 Pro Max 256GB",
            price: 31290000,
            image: "ẢNH IPHONE coppy/10.jpg",
            status: "Còn hàng",
            description: [
                "Chip Apple A18 Pro 6 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 48 MP & Phụ 48 MP, 12 MP",
                "Camera trước: 12 MP",
                "Pin 33 giờ, Sạc 20 W"
            ]
        },
    ],

    Samsung: [
        {
            id: 11,
            name: "Samsung Galaxy S24 FE 5G 8GB/128GB",
            price: 13160000,
            image: "ẢNH SAMSUNG/1.jpg",
            detailImage: "ẢNH SAMSUNG/ct1.jpg",
            status: "Còn hàng",
            description: [
                "Chip Exynos 2400e 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 12 MP, 8 MP",
                "Camera trước: 10 MP",
                "Pin 4700 mAh, Sạc 25 W"
            ]
        },
        {
            id: 12,
            name: "Samsung Galaxy A17 5G 8G/128GB",
            price: 6190000,
            image: "ẢNH SAMSUNG/2.jpg",
            detailImage: "ẢNH SAMSUNG/ct2.jpg",
            status: "Còn hàng",
            description: [
                "Chip Exynos 1330",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 5 MP, 2 MP",
                "Camera trước: 13 MP"
            ]

            
        },
        {
            id: 13,
            name: "Samsung Galaxy A56 5G 12G/256GB",
            price: 10680000,
            image: "ẢNH SAMSUNG/3.jpg",
            detailImage: "ẢNH SAMSUNG/ct3.jpg",
            status: "Còn hàng",
            description: [
                "Chip Exynos 1580 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 12 MP, 5 MP",
                "Camera trước: 12 MP",
                "Pin 5000 mAh, Sạc 45 W"
            ]
        },
        {
            id: 14,
            name: "Samsung Galaxy S24 Ultra 5G 12G/256GB",
            price: 23790000,
            image: "ẢNH SAMSUNG/4.jpg",
            detailImage: "ẢNH SAMSUNG/ct4.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 8 Gen 3 for Galaxy",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 200 MP & Phụ 50 MP, 12 MP, 10 MP",
                "Camera trước: 12 MP",
                "Pin 5000 mAh, Sạc 45 W"
            ]
        },
        {
            id: 15,
            name: "Samsung Galaxy A07  4G/64GB",
            price: 2590000,
            image: "ẢNH SAMSUNG/5.jpg",
            detailImage: "ẢNH SAMSUNG/ct5.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Helio G99",
                "RAM: 4 GB",
                "Dung lượng: 64 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 8 MP",
                "Pin 5000 mAh, Sạc 25 W"
            ]
        },
        {
            id: 16,
            name: "Samsung Galaxy A06 5G  6G/128GB",
            price: 3810000,
            image: "ẢNH SAMSUNG/6.jpg",
            detailImage: "ẢNH SAMSUNG/ct6.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 6300 5G 8 nhân",
                "RAM: 6 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 8 MP",
                "Pin 5000 mAh, Sạc 25 W"
            ]
        },
        {
            id: 17,
            name: "Samsung Galaxy A26 5G  6G/128GB",
            price: 6270000,
            image: "ẢNH SAMSUNG/7.jpg",
            detailImage: "ẢNH SAMSUNG/ct7.jpg",
            status: "Còn hàng",
            description:[
                "Chip Exynos 1380 8 nhân",
                "RAM: 6 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP",
                "Camera trước: 13 MP",
                "Pin 5000 mAh, Sạc 25 W"
            ]
        },
        {
            id: 18,
            name: "Samsung Galaxy A36 5G  12G/256GB",
            price: 9110000,
            image: "ẢNH SAMSUNG/8.jpg",
            detailImage: "ẢNH SAMSUNG/ct8.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 6 Gen 3 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP, 5 MP",
                "Camera trước: 12 MP",
                "Pin 5000 mAh, Sạc 45 W"
            ]
        },
        {
            id: 19,
            name: "Samsung Galaxy Z Flip7 5G  12G/256GB",
            price: 16090000,
            image: "ẢNH SAMSUNG/9.jpg",
            detailImage: "ẢNH SAMSUNG/ct9.jpg",
            status: "Còn hàng",
            description: [
                "Chip Exynos 2400 10 nhân",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 12 MP",
                "Camera trước: 10 MP",
                "Pin 4000 mAh, Sạc 25 W",
            ]
        },
        {
            id: 20,
            name: "Samsung Galaxy Z Flip7 FE 5G  8G/128GB",
            price: 9110000,
            image: "ẢNH SAMSUNG/10.jpg",
            detailImage: "ẢNH SAMSUNG/ct10.jpg",
            status: "Còn hàng",        
            description: [
                 "Chip Snapdragon 6 Gen 3 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP, 5 MP",
                "Camera trước: 12 MP",
                "Pin 5000 mAh, Sạc 45 W"
            ]
        }
    ],
           


    Oppo: [
        {
            id: 21,
            name: "OPPO Reno 13F 5G 8GB/256GB",
            price: 9810000,
            image: "ẢNH OPPO/1.jpg",
            detailImage: "ẢNH OPPO/op1.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 6 Gen 1 5G 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP",
                "Camera trước: 32 MP",
                "Pin 5800 mAh, Sạc 45 W"
            ]
        },
        {
            id: 22,
            name: "Oppo Find X9 5G 12GB/256GB",
            price: 22990000,
            image: "ẢNH OPPO/2.jpg",
            detailImage: "ẢNH OPPO/op2.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 9500 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 50 MP, 50 MP, 2 MP",
                "Camera trước: 32 MP",
                "Pin 7025 mAh, Sạc 80 W"
            ]
        },
        {
            id: 23,
            name: "Oppo Find X8 Pro 5G 16GB/512GB",
            price: 23450000,
            image: "ẢNH OPPO/3.jpg",
            detailImage: "ẢNH OPPO/op3.jpg",
            status: "Còn hàng",
            description:[
                "Chip MediaTek Dimensity 9400 8 nhân",
                "RAM: 16 GB",
                "Dung lượng: 512 GB",
                "Camera sau: 4 camera 50 MP",
                "Camera trước: 32 MP",
                "Pin 5910 mAh, Sạc 80 W"
            ]
        },
        {
            id: 24,
            name: "Oppo A5 8GB/128GB",
            price: 6290000,
            image: "ẢNH OPPO/4.jpg",
            detailImage: "ẢNH OPPO/op4.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 6s Gen 1 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 5 MP",
                "Pin 6000 mAh, Sạc 45 W"
            ]
        },
        {
            id: 25,
            name: "Oppo Reno14 5G 12GB/512GB",
            price: 16690000,
            image: "ẢNH OPPO/5.jpg",
            detailImage: "ẢNH OPP0/op5.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 8350 5G 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 512 GB",
                "Camera sau: Chính 50 MP & Phụ 50 MP, 8 MP",
                "Camera trước: 50 MP",
                "Pin 6000 mAh, Sạc 80 W"
            ]
        },
        {
            id: 26,
            name: "Oppo A6 Pro 8GB/128GB",
            price: 7490000,
            image: "ẢNH OPPO/6.jpg",
            detailImage: "ẢNH OPPO/op6.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Helio G100 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 16 MP",
                "Pin 7000 mAh, Sạc 80 W"
            ]
        },
        {
            id: 27,
            name: "Oppo Reno13 5G 12GB/256GB",
            price: 14700000,
            image: "ẢNH OPPO/7.jpg",
            detailImage: "ẢNH OPPO/op7.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 8350 5G 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP, 2 MP",
                "Camera trước: 50 MP",
                "Pin 5600 mAh, Sạc 80 W"
            ]
        },
        {
            id: 28,
            name: "Oppo Find X8 5G 16GB/512GB Hồng",
            price: 19490000,
            image: "ẢNH OPPO/8.jpg",
            detailImage: "ẢNH OPPO/op8.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 9400 8 nhân",
                "RAM: 16 GB",
                "Dung lượng: 512 GB",
                "Camera sau: 3 camera 50 MP",
                "Camera trước: 32 MP",
                "Pin 5630 mAh, Sạc 80 W"
            ]
        },
        {
            id: 29,
            name: "Oppo Find N3 Flip 5G 12GB/256GB Hồng",
            price: 13990000,
            image: "ẢNH OPPO/9.jpg",
            detailImage: "ẢNH OPPO/op9.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 9200 5G 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 48 MP, 32 MP",
                "Camera trước: 32 MP",
                "Pin 4300 mAh, Sạc 44 W"
            ]
        },
        {
            id: 30,
            name: "Oppo A60 8GB/258GB",
            price: 6080000,
            image: "ẢNH OPPO/10.jpg",
            detailImage: "ẢNH OPPO/op10.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 680",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 8 MP",
                "Pin 5000 mAh, Sạc 45 W",
            ]
        }
    ],

    Vivo: [
        {
            id: 31,
            name: "Vivo V60 Lite 5G 8GB/256GB",
            price: 10490000,
            image: "ẢNH VIVO/1.jpg",
            detailImage: "ẢNH VIVO/ct1.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 7360-Turbo 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP",
                "Camera trước: 32 MP",
                "Pin 6500 mAh, Sạc 90 W"
            ]
        },
        {
            id: 32,
            name: "Vivo V60 5G",
            price: 15990000,
            image: "ẢNH VIVO/2.jpg",
            detailImage: "ẢNH VIVO/ct2.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 7 Gen 4 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 50 MP, 8 MP",
                "Camera trước: 50 MP",
                "Pin 6500 mAh, Sạc 90 W"
            ]
        },
        {
            id: 33,
            name: "Vivo Y21d 6GB/128GB",
            price: 6290000,
            image: "ẢNH VIVO/3.jpg",
            status: "Còn hàng",
            description: [
                "Chip Unisoc T7225 8 nhân",
                "RAM: 6 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 50 MP & Phụ 0.08 MP",
                "Camera trước: 5 MP",
                "Pin 6500 mAh, Sạc 44 W"
            ]
        },
        {
            id: 34,
            name: "Vivo V30e 5G 12GB/256GB",
            price: 10300000,
            image: "ẢNH VIVO/4.jpg",
            detailImage: "ẢNH VIVO/ct4.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 6 Gen 1 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP",
                "Camera trước: 32 MP",
                "Pin 5500 mAh, Sạc 44 W"
            ]
        },
        {
            id: 35,
            name: "Vivo Y03 4GB/128GB",
            price: 3040000,
            image: "ẢNH VIVO/5.jpg",
            detailImage: "ẢNH VIVO/ct5.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Helio G85",
                "RAM: 4 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 13 MP & Phụ 0.08 MP",
                "Camera trước: 5 MP",
                "Pin 5000 mAh, Sạc 15 W"
            ]
        },
        {
            id: 36,
            name: "Vivo X300 5G 12GB/256GB",
            price: 21490000,
            image: "ẢNH VIVO/6.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 9500 8 nhân",
                "RAM: 12 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 200 MP & Phụ 50 MP, 50 MP",
                "Camera trước: 50 MP",
                "Pin 6040 mAh, Sạc 90 W"
            ]
        },
        {
            id: 37,
            name: "Vivo V50 Lite 8GB/256GB",
            price: 18990000,
            image: "ẢNH VIVO/7.jpg",
            detailImage: "ẢNH VIVO/ct7.jpg",
            status: "Còn hàng",
            description: [
                "Chip Snapdragon 685 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 32 MP",
                "Pin 6500 mAh, Sạc 90 W"
            ]
        },
        {
            id: 38,
            name: "Vivo Y04 4GB/128GB",
            price: 3430000,
            image: "ẢNH VIVO/8.jpg",
            detailImage: "ẢNH VIVO/ct8.jpg",
            status: "Còn hàng",
            description: [
                "Chip Unisoc T7225 8 nhân",
                "RAM: 4 GB",
                "Dung lượng: 128 GB",
                "Camera sau: Chính 13 MP & Phụ 0.08 MP",
                "Camera trước: 5 MP",
                "Pin 5500 mAh, Sạc 15 W"
            ]
        },
        {
            id: 39,
            name: "Vivo V50 Lite 5G 8GB/256GB",
            price: 95100000,
            image: "ẢNH VIVO/9.jpg",
            detailImage: "ẢNH VIVO/ct9.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Dimensity 6300 5G 8 nhân",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 8 MP",
                "Camera trước: 32 MP",
                "Pin 6500 mAh, Sạc 90 W"
            ]
        },
        {
            id: 40,
            name: "Vivo Y28 8GB/256GB",
            price: 6380000,
            image: "ẢNH VIVO/10.jpg",
            detailImage: "ẢNH VIVO/ct10.jpg",
            status: "Còn hàng",
            description: [
                "Chip MediaTek Helio G85",
                "RAM: 8 GB",
                "Dung lượng: 256 GB",
                "Camera sau: Chính 50 MP & Phụ 2 MP",
                "Camera trước: 8 MP",
                "Pin 6000 mAh, Sạc 44 W"
            ]
        }
    ]
};
const allProducts = Object.keys(PRODUCT_DATA).flatMap(brand =>
    PRODUCT_DATA[brand].map(p => ({
        ...p,
        brand: brand
    }))
);
let filteredProducts = [...allProducts];
//HIỂN THỊ DANH SÁCH SẢN PHẨM
function renderUserView() {
    const list = document.getElementById("userProductList");
    if (!list) return;

    list.innerHTML = "";
    if (filteredProducts.length === 0) {
        list.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>";
        return;
    }
    filteredProducts.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.onclick = () => showDetail(p);

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${p.image}" class="card-img">
            </div>
            <div class="card-body">
                <h3 class="card-title">${p.name}</h3>
                <div class="card-price">${formatMoney(p.price)}</div>
            </div>
        `;
        list.appendChild(card);
    });
}
// TIÊU CHÍ TÌM KIẾM (theo tên, hãng)
function matchSearch(product, keyword) {
    const key = keyword.toLowerCase();

    const matchName = product.name.toLowerCase().includes(key);
    const matchBrand = product.brand.toLowerCase().includes(key);
    const matchPrice = product.price.toString().includes(key);

    return matchName || matchBrand || matchPrice;
}
// LOGIC TÌM KIẾM SẢN PHẨM
function handleSearch(keyword) {
    if (!keyword || keyword.trim() === "") {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(p => matchSearch(p, keyword));
    }
    renderUserView();
}
// XÁC ĐỊNH HÃNG TỪ TRANG
function getBrandFromPage() {
    const path = window.location.pathname.toLowerCase();

    if (path.includes("apple")) return "Apple";
    if (path.includes("samsung")) return "Samsung";
    if (path.includes("oppo")) return "Oppo";
    if (path.includes("vivo")) return "Vivo";

    return null; 
}
//  CHI TIẾT SẢN PHẨM
function showDetail(p) {
    currentProductDetail = p;

    // Ẩn các section khác
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById("detail-view").classList.add("active");

    // Đổ dữ liệu cơ bản
    document.getElementById("detailImage").src = p.detailImage || p.image;
    document.getElementById("detailName").innerText = p.name;
    document.getElementById("detailBrand").innerText = p.brand;
    document.getElementById("detailPrice").innerText = formatMoney(p.price);

    // 🔴 QUAN TRỌNG: hiển thị đặc điểm nổi bật (mỗi dòng 1 <li>)
    const ul = document.getElementById("detailDesc");
    ul.innerHTML = "";
    p.description.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
    //Hiển thị danh sách đặc điểm nổi bật//
if (Array.isArray(p.description)) { 
    p.description.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li); // Thêm mỗi đặc điểm vào thành một mục <li>
    });
} else {
     // Nếu không phải là mảng, hiển thị như đoạn văn
     ul.innerHTML = `<p>${p.description}</p>`;
}
}
function goBack() {
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
    document.getElementById("user-view")?.classList.add("active");
}
// KHỞI TẠO TRANG//
document.addEventListener("DOMContentLoaded", () => {
    const brand = getBrandFromPage();

    if (brand) {
        filteredProducts = allProducts.filter(p => p.brand === brand);
        const title = document.getElementById("currentCategoryTitle");
        if (title) title.innerText = brand;
    } else {
        filteredProducts = [...allProducts];
    }

    renderUserView();
});
function updateTotal() {
    let total = 0;
    let count = 0;
    const checkboxes = document.querySelectorAll('.item-checkbox');
    
    checkboxes.forEach((cb) => {
        if (cb.checked) {
            const productId = parseInt(cb.getAttribute('data-id'));
            const item = cart.find(i => i.id === productId);
            if (item) {
                total += item.price * item.quantity;
                count++;
            }
        }
    });

    const totalPriceElement = document.getElementById('cart-total-price');
    if (totalPriceElement) totalPriceElement.innerText = formatMoney(total);

    const buyBtn = document.querySelector('.buy-now-btn');
    if (buyBtn) buyBtn.innerText = `Mua ngay (${count})`;
}