// 1. TIỆN ÍCH
    // 1. TIỆN ÍCH
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
            image: "ẢNH OPPO/1.jpg",
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
            detailImage: "ẢNHOPPO/op7.jpg",
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

//
let currentProductDetail = null;
// ==============================================================================================
// 3. NHẬN DIỆN TRANG
// ==============================================================================================
function getPageBrandName() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("apple.html")) return "Apple";
    if (path.includes("samsung.html")) return "Samsung";
    if (path.includes("oppo.html")) return "Oppo";
    if (path.includes("vivo.html")) return "Vivo";
    return null;
}

function isHomePage() {
    const path = window.location.pathname.toLowerCase();
    return path.includes("index.html") || path.endsWith("/");
}



// ==============================================================================================
// 5. HIỂN THỊ DANH SÁCH SẢN PHẨM
// ==============================================================================================
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

// ==============================================================================================
// 6. LỌC THEO HÃNG (DANH MỤC)
// ==============================================================================================
function filterByBrand(brandName) {
    filteredProducts = allProducts.filter(p => p.brand === brandName);
    renderUserView();
    const slider = document.getElementById("hero-slider");
    if (slider) slider.style.display = "none";
}

function showAllProducts() {
    filteredProducts = [...allProducts];
    renderUserView();

    const slider = document.getElementById("hero-slider");
    if (slider) slider.style.display = "block";

    slideIndex = 0;
    showSlides();
}

// ==============================================================================================
// 7. TÌM KIẾM SẢN PHẨM (PHẦN BẠN CẦN)
// ==============================================================================================
function handleSearch(keyword) {
    const searchText = keyword.toLowerCase().trim();

    if (searchText === "") {
        showAllProducts();
        return;
    }

    filteredProducts = allProducts.filter(p =>
        p.name.toLowerCase().includes(searchText) ||
        p.brand.toLowerCase().includes(searchText)
    );

    renderUserView();

    const slider = document.getElementById("hero-slider");
    if (slider) slider.style.display = "none";
}

// ==============================================================================================
// 8. CHI TIẾT SẢN PHẨM
// ==============================================================================================
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
}


// goback mới đẩy lên lần 4
function goBack() {
    // Ẩn tất cả section
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));

    // 🔥 NẾU ĐANG CÓ SẢN PHẨM CHI TIẾT → QUAY VỀ HÃNG
    if (currentProductDetail && currentProductDetail.brand) {
        filteredProducts = allProducts.filter(
            p => p.brand === currentProductDetail.brand
        );
        renderUserView();
    }

    // Hiện lại danh sách sản phẩm
    document.getElementById("user-view")?.classList.add("active");

    // Tắt chế độ header giỏ hàng (nếu có)
    setHeaderCartMode(false);

    // Ẩn slider vì đây là trang hãng
    const slider = document.getElementById("hero-slider");
    if (slider) slider.style.display = "none";
}



// ==============================================================================================
// 9. KHỞI TẠO TRANG
// ==============================================================================================
document.addEventListener("DOMContentLoaded", () => {
    const brandPage = getPageBrandName();

    if (brandPage) {
        filteredProducts = allProducts.filter(p => p.brand === brandPage);
        renderUserView();
    } else {
        renderUserView();
        if (isHomePage()) showSlides();
    }
});
//CHỨC NĂNG GIỎ HÀNG
// ==============================================================================================
// 10. LOGIC GIỎ HÀNG (FR3.1 - FR3.4)
// 

// Khởi tạo giỏ hàng từ bộ nhớ trình duyệt (localStorage)
let cart = JSON.parse(localStorage.getItem('miniStoreCart')) || [];

// Lưu giỏ hàng và cập nhật giao diện
function saveCart() {
    localStorage.setItem('miniStoreCart', JSON.stringify(cart));
}

// FR3.1: Thêm sản phẩm vào giỏ
function addToCart(product, quantity = 1, redirectToCart = false) {
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }

    saveCart();
    updateCartBadge(); // ✅ CẬP NHẬT SỐ LƯỢNG NGAY LẬP TỨC

    
    // THAY THẾ ALERT BẰNG TOAST
    showToast(`Đã thêm vào giỏ hàng thành công!`);

    if (redirectToCart) showCart();
}


// FR3.2, 3.3, 3.4: Hiển thị giỏ hàng
// Cập nhật Badge số lượng trên Header
function updateCartBadge() {
    const badges = document.querySelectorAll("#cart-count");
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    badges.forEach(badge => {
        badge.innerText = totalQty;
        badge.style.display = totalQty > 0 ? "flex" : "none";
    });
}

// Hàm render lại giỏ hàng có Checkbox và nút to
function renderCart() {
    const cartContent = document.getElementById("cart-content");
    const emptyCart = document.getElementById("empty-cart");   // UI giỏ hàng trống
    const cartFooter = document.querySelector(".cart-footer"); // thanh tạm tính
    const cartControlBar = document.querySelector(".cart-control-bar");

    if (!cartContent) return;

    // 🔴 TRƯỜNG HỢP: GIỎ HÀNG TRỐNG
    if (cart.length === 0) {
        cartContent.innerHTML = "";
        
        if (emptyCart) emptyCart.style.display = "block";
        if (cartFooter) cartFooter.style.display = "none";
        if (cartControlBar) cartControlBar.style.display = "none"; 

        updateCartBadge();
        return;
    }

    // 🟢 TRƯỜNG HỢP: CÓ SẢN PHẨM
    if (emptyCart) emptyCart.style.display = "none";
    if (cartFooter) cartFooter.style.display = "flex";
    if (cartControlBar) cartControlBar.style.display = "flex"; 

    let html = cart.map(item => `
        <div class="cart-item" style="display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #eee; background: #fff;">
            <label class="checkbox-container">
                <input type="checkbox" class="item-checkbox" data-id="${item.id}" onchange="updateTotal()">
                <span class="checkmark"></span>
            </label>

            <img src="${item.image}" width="70" style="margin: 0 15px;">

            <div style="flex: 1;">
                <h4 style="margin-bottom: 5px;">${item.name}</h4>
                <p style="color: #d70018; font-weight: bold;">
                    ${formatMoney(item.price)}
                </p>
            </div>

            <div class="quantity-wrapper">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <input type="number" value="${item.quantity}" readonly>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>

            <i class="fas fa-trash-alt"
               style="margin-left: 20px; color: #999; cursor: pointer;"
               onclick="removeItem(${item.id})"></i>
        </div>
    `).join('');

    cartContent.innerHTML = html;

    updateTotal();
    updateCartBadge();
}


// Tính tổng tiền chỉ cho những sản phẩm được CHỌN
function updateTotal() {
    let total = 0;
    let count = 0;
    
    // Lấy tất cả các checkbox của từng sản phẩm
    const checkboxes = document.querySelectorAll('.item-checkbox');
    
    checkboxes.forEach((cb) => {
        if (cb.checked) {
            // Lấy ID từ thuộc tính data-id đã gắn ở hàm renderCart
            const productId = parseInt(cb.getAttribute('data-id'));
            // Tìm sản phẩm trong mảng cart bằng ID đó
            const item = cart.find(i => i.id === productId);
            
            if (item) {
                total += item.price * (item.quantity || 1);
                count++;
            }
        }
    });

    // Hiển thị tổng tiền lên giao diện
    const totalPriceElement = document.getElementById('cart-total-price');
    if (totalPriceElement) {
        totalPriceElement.innerText = total.toLocaleString('vi-VN') + 'đ';
    }

    // Cập nhật số lượng hiển thị trên nút "Mua ngay"
    const buyBtn = document.querySelector('.buy-now-btn');
    if (buyBtn) {
        // Cập nhật đúng text theo yêu cầu (Mua ngay + số lượng chọn)
        buyBtn.innerText = `Mua ngay (${count})`;
    }
}
// Cập nhật số lượng
function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity < 1) item.quantity = 1; // Tối thiểu là 1
        
        saveCart();
        renderCart(); // Hàm renderCart sẽ vẽ lại HTML
        
        // QUAN TRỌNG: Sau khi render lại, các checkbox bị reset về mặc định
        // Bạn cần đảm bảo hàm renderCart có gọi updateTotal() bên trong nó.
    }
}

// Xóa sản phẩm (FR3.3)
function removeItem(id) {
    // Xóa bỏ đoạn confirm("Xóa sản phẩm này?")
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart(); // Vẽ lại giỏ hàng ngay lập tức
}

// Chuyển sang trang giỏ hàng
function showCart() {
    // Ẩn toàn bộ section
    document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));

    // Hiện giỏ hàng
    const cartView = document.getElementById("cart-view");
    if (cartView) {
        cartView.classList.add("active");
        renderCart();
    }

    // 🔥 Ẩn slider nếu đang ở trang chủ
    const slider = document.getElementById("hero-slider");
    if (slider) slider.style.display = "none";

    // 🔥 Chỉnh header sang chế độ giỏ hàng
    setHeaderCartMode(true);
}

// tự hiên tự ẩn của thông báo
function showToast(message) {
    // Tạo phần tử thông báo
    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    
    // Thêm vào body
    document.body.appendChild(toast);
    
    // Tự động xóa sau 3 giây
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

/* --- THÊM CÁC HÀM NÀY VÀO FILE JS --- */

// Hàm xử lý khi bấm vào "Chọn tất cả"
function toggleSelectAll(source) {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const labelText = document.getElementById('select-all-text');

    checkboxes.forEach(cb => {
        cb.checked = source.checked;
    });

    // Cập nhật lại chữ hiển thị
    if (labelText) {
        labelText.innerText = source.checked ? "Bỏ chọn tất cả" : "Chọn tất cả";
    }

    // --- THÊM DÒNG NÀY ĐỂ TÍNH LẠI TIỀN KHI CHỌN TẤT CẢ ---
    updateTotal(); 
}
// Hàm kiểm tra để đổi chữ khi người dùng tích lẻ từng ô
function updateSelectAllStatus() {
    const allItems = document.querySelectorAll('.item-checkbox');
    const checkedItems = document.querySelectorAll('.item-checkbox:checked');
    const selectAllBtn = document.getElementById("select-all-checkbox");
    const labelText = document.getElementById('select-all-text');

    if (selectAllBtn && allItems.length > 0) {
        const isAllChecked = allItems.length === checkedItems.length;
        selectAllBtn.checked = isAllChecked;
        labelText.innerText = isAllChecked ? "Bỏ chọn tất cả" : "Chọn tất cả";
    }
}

// Hàm Xóa các mục đã chọn
function deleteSelectedItems() {
    const selectedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    
    if (selectedCheckboxes.length === 0) {
        showToast("Vui lòng chọn sản phẩm!"); // Dùng hàm Toast đã tạo ở bước trước
        return;
    }

    const selectedIds = Array.from(selectedCheckboxes).map(cb => parseInt(cb.getAttribute('data-id')));
    
    // Cập nhật mảng cart toàn cục
    cart = cart.filter(item => !selectedIds.includes(item.id));
    
    saveCart();
    renderCart(); // Vẽ lại giỏ hàng
    
    // Reset thanh điều khiển về mặc định
    document.getElementById("select-all-checkbox").checked = false;
    document.getElementById('select-all-text').innerText = "Chọn tất cả";
}
//header trong giỏ hàng
function setHeaderCartMode(isCart) {
    const header = document.querySelector("header");
    if (!header) return;

    if (isCart) {
        header.classList.add("cart-mode");
    } else {
        header.classList.remove("cart-mode");
    }
}


//
function openAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

function toggleAuth(type) {
    document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
    document.getElementById('register-form').style.display = type === 'register' ? 'block' : 'none';
}