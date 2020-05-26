createProduct();
createAdmin();

/*======================= PHẦN HIỂN THỊ FULLNAME USER KHI LOGIN THÀNH CÔNG ===========================*/
function hello1(){
	document.getElementById('nav').style.display = 'flex';
	//JSON.parse() nhận vào một chuỗi JSON chuyển đổi nó thành dạng đối tượng để lưu trữ vào localStorage
	var user = JSON.parse(localStorage.getItem('userlogin'));
	document.getElementById('nameAdmin').innerHTML= user.fullname +'<button onclick="logout()">LOGOUT</button>';
}
/*=================== PHẦN HIỂN THỊ FULLNAME USER KHI LOGIN THÀNH CÔNG - END =======================*/

/*============================== PHẦN ĐĂNG XUẤT TÀI KHOẢN ==================================*/
function logout(url){
	localStorage.removeItem('userlogin'); //xóa userlogin trong localStorage
	localStorage.removeItem('cart');	  //xóa cart trong localStorage
	location.reload(true);
	//window.location.assign('index.html'); //hiển thị nội dung của URL được chỉ định
}
/*============================== PHẦN ĐĂNG XUẤT TÀI KHOẢN - END ==================================*/

/*======================= QUY ƯỚC HIỂN THỊ KIỂU SỐ (DÙNG CHO GIÁ SẢN PHẨM) =====================*/
function currency(num) {

  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}
/*======================= QUY ƯỚC HIỂN THỊ KIỂU SỐ (DÙNG CHO GIÁ SẢN PHẨM) - END =====================*/

/* ======================== PHẦN HIỂN THỊ FORM ĐĂNG NHẬP - ĐĂNG KÝ ===========================*/
function showform(){
	var userform = document.getElementById('showform');
	userform.style.display = 'block';
}

	/*========== FORM ĐĂNG KÝ ==========*/
function showSignUp(){
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}
	/*========== FORM ĐĂNG KÝ - END ==========*/

	/*========== FORM ĐĂNG NHẬP ==========*/
function showLogin(){
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}
	/*========== FORM ĐĂNG NHẬP - END ==========*/
/* ======================== PHẦN HIỂN THỊ FORM ĐĂNG NHẬP - ĐĂNG KÝ - END ===========================*/

/*========== ẨN FORM ĐĂNG NHẬP - ĐĂNG KÝ ==========*/
function closeform(){
	var userform = document.getElementById('showform');
	userform.style.display = 'none';
}
/*========== ẨN FORM ĐĂNG NHẬP - ĐĂNG KÝ - END ==========*/

/*=============================== PHẦN TẠO LIST SẢN PHẨM ===============================*/
function createProduct(){
	//Đây là lồng câu lệnh vào nhau:
	//localStore.getItem('product'); dùng để tạo 1 key lưu trữ trên localStorage
	//if(localStorage.getItem('product')===null) // nếu chưa có gì (===) rỗng thì tạo mảng product
	// '=== bull'  là bằng rỗng tuyệt đối. Tất cả key bên trong đều bằng rỗng. Ví dụ như bên dưới sẽ là:
	// productID === rỗng
	// brand === rỗng
	//.... và cứ như vậy
	if(localStorage.getItem('product')===null){
		var productArray = [
			{
				productId:10030,   				//ID của sản phẩm
				brand:'mac',    				//Mã thể loại
				img:'Image/product/10030.png',	//Ảnh sản phẩm (dẫn link)
				name:'MacBook Pro Touch 2019',  //Tên sản phẩm
				price: 1723690,					//Giá thành sản phẩm
				
				//Cấu hình chi tiết của sản phẩm
				detail: {
        					screen: 'LED Backlit 13.3", IPS, Retina ',
        					os: 'Mac OS',								
							camaraFront: 'HD Webcam',					
							camara: 'No',								
        					cpu: 'Intel Core i5 Coffee Lake, 1.40 GHz', 
        					ram: '8 GB, DDR3L, 2133 MHz',				
        					rom: 'SSD 256GB NVMe PCle',
        					microUSB: '2 x Thunderbolt (USB-C)',
        					battery: 'About 10 hours',
							size: '14.9 mm, 1.39 kg' 
						  },
			},
			
			{
				productId:10029, 			
				brand:'watch',    
				img:'Image/product/10029.png', 
				name:'Apple Watch series 4', 
				price: 516810,
				
				//Cấu hình chi tiết
				detail: {
        					screen: 'AMOLED 2.2"',
        					os: 'watchOS 6.0',
							camaraFront: '0.08 MP',
							camara: '0.08 MP',
        					cpu: 'Apple S4 64 bit',
        					ram: 'No',
        					rom: '16 GB',
        					microUSB: 'Wifi, Bluetooth v5.0, GPS',
        					battery: '340 mAh',
							size: 'Diameter 44mm, 30.1g'
						  },
			},
			
			{
				productId:10028, 
				brand:'watch',    
				img:'Image/product/10028.png', 
				name:'Apple Watch series 3', 
				price: 245260,
				
				detail: {
        					screen: 'OLED 1.9"',
        					os: 'watchOS 6.0',
							camaraFront: 'No',
							camara: 'No',
        					cpu: 'Apple W2',
        					ram: 'No',
        					rom: '8 GB',
        					microUSB: 'Wifi, Bluetooth',
        					battery: '334 mAh',
							size: 'Diameter 38mm, 26.7g'
						  },
			},
			
			{
				productId:10027, 
				brand:'ipad',    
				img:'Image/product/10027.png', 
				name:'iPad Pro 11 inch Wifi 64GB (2018)', 
				price: 947840,
				
				detail: {
        					screen: 'Liquid Retina, 11"',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: '12 MP',
        					cpu: 'Apple A12X Bionic 64-bit',
        					ram: '4 GB',
        					rom: '64 GB',
        					microUSB: 'USB Type-C, Wifi, Bluetooth 5.0, No support 3G, 4G',
        					battery: 'Lithium - Polymer, 30.4 Wh',
							size: '5.9 mm, 468g'
						  },
			},
			
			{
				productId:10026, 
				brand:'ipad',    
				img:'Image/product/10026.png', 
				name:'iPad Pro', 
				price: 646110,
				
				detail: {
        					screen: 'LED backlit LCD, 10.2"',
        					os: 'iOS 13',
							camaraFront: '1.2 MP',
							camara: '8 MP',
        					cpu: 'Apple A10 Fusion, 2.34 GHz',
        					ram: '3 GB',
        					rom: '128 GB',
        					microUSB: 'Lightning, WiFi, Bluetooth, 3G, 4G LTE',
        					battery: 'Lithium - Ion, 8600 mAh',
							size: '7.5 mm, 493g'
						  },
			},
			
			{
				productId:10025, 
				brand:'iphone',    
				img:'Image/product/10025.png', 
				name:'iPhone XR 128GB', 
				price: 818530,
				
				detail: {
        					screen: 'IPS LCD, 6.1", Liquid Retina',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: '12 MP',
        					cpu: 'Apple A12 Bionic 6 nhân',
        					ram: '3 GB',
        					rom: '128 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 2942 mAh',
							size: '8.3 mm, 194g'
						  },
			},
			
			{
				productId:10024, 
				brand:'iphone',    
				img:'Image/product/10024.png', 
				name:'iPhone XS Max 256GB', 
				price: 1465070,
				
				detail: {
        					screen: 'OLED, 6.5", Super Retina',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: 'Chính 12 MP & Phụ 12 MP',
        					cpu: 'Apple A12 Bionic 6 nhân',
        					ram: '4 GB',
        					rom: '256 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 3174 mAh',
							size: '7.7 mm, 208g'
						  },
			},
			
			{
				productId:10023, 
				brand:'mac',    
				img:'Image/product/10023.png', 
				name:'MacBook Air 2019 128GB', 
				price: 1206450,
				
				detail: {
        					screen: 'LED Backlit, IPS, Retina 13"',
        					os: 'Mac OS',
							camaraFront: 'HD Webcam',
							camara: 'No',
        					cpu: 'Intel Core i5 Coffee Lake, 1.60 GHz',
        					ram: '8 GB, DDR3, 2133 MHz',
        					rom: 'SSD: 128 GB',
        					microUSB: '2 x Thunderbolt 3 (USB-C)',
        					battery: 'About 10 hours',
							size: '4.1 mm to 15.6 mm, 1.25 kg'
						  },
			},
			
			
			{
				productId:10022, 
				brand:'mac',    
				img:'Image/product/10022.png', 
				name:'MacBook Pro Touch 2019 256GB', 
				price: 2585750,
				
				detail: {
        					screen: 'LED Backlit, IPS, Retina 15.4"',
        					os: 'Mac OS',
							camaraFront: 'HD Webcam',
							camara: 'No',
        					cpu: 'Intel Core i7 Coffee Lake, 2.60 GHz',
        					ram: '16 GB, DDR4 (On board), 2400 MHz',
        					rom: 'SSD: 256 GB',
        					microUSB: '4 x Thunderbolt 3 (USB-C)',
        					battery: 'About 10 hours',
							size: '15.5 mm, 1.83 kg'
						  },
			},
			
			{
				productId:10021, 
				brand:'iphone',    
				img:'Image/product/10021.png', 
				name:'iPhone 11 128GB', 
				price: 1034040,
				
				detail: {
        					screen: 'IPS LCD, 6.1", Liquid Retina',
        					os: 'iOS 13',
							camaraFront: '12 MP',
							camara: 'Chính 12 MP & Phụ 12 MP',
        					cpu: 'Apple A13 Bionic 6 nhân',
        					ram: '4 GB',
        					rom: '128 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 3110 mAh',
							size: '8.3 mm, 194g'
						  },
			},
			
			{
				productId:10020, 
				brand:'iphone',    
				img:'Image/product/10020.png', 
				name:'iPhone 11 Pro Max 512GB', 
				price: 1896100,
				
				detail: {
        					screen: 'OLED, 6.5", Super Retina XDR',
        					os: 'iOS 13',
							camaraFront: '12 MP',
							camara: '3 camera 12 MP',
        					cpu: 'Apple A13 Bionic 6 nhân',
        					ram: '4 GB',
        					rom: '512 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 3969 mAh',
							size: '8.1 mm, 226g'
						  },
			},
			
			{
				productId:10019, 
				brand:'ipad',    
				img:'Image/product/10019.png', 
				name:'iPad 10.2 inch Wifi Cellular 128GB (2019)',
				price: 646110,
				
				detail: {
        					screen: 'LED backlit LCD, 10.2"',
        					os: 'iOS 13',
							camaraFront: '1.2 MP',
							camara: '8 MP',
        					cpu: 'Apple A10 Fusion, 2.34 GHz',
        					ram: '3 GB',
        					rom: '128 GB',
        					microUSB: 'WiFi, Bluetooth, 3G, 4G LTE',
        					battery: 'Lithium - Ion, 8600 mAh',
							size: '7.5 mm, 493g'
						  },
			},
			
			{
				productId:10018, 
				brand:'ipad',    
				img:'Image/product/10018.png', 
				name:'iPad Mini 7.9 inch Wifi 64GB (2019)', 
				price: 473700,
				
				detail: {
        					screen: 'LED backlit LCD, 7.9"',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: '8 MP',
        					cpu: 'Apple A12 Bionic 6 nhân, 2 nhân 2.5 GHz Vortex & 4 nhân 1.6 GHz Tempest',
        					ram: '3 GB',
        					rom: '64 GB',
        					microUSB: 'Wifi, Bluetooth, No support 3G, 4G',
        					battery: 'Lithium - Polymer, 5124 mAh',
							size: '6.1 mm, 300g'
						  },
			},
			
			{
				productId:10017, 
				brand:'iphone',    
				img:'Image/product/10017.png', 
				name:'iPhone 8 Plus 64GB', 
				price: 689220,
				
				detail: {
        					screen: 'LED-backlit IPS LCD, 5.5", Retina HD',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: 'Chính 12 MP & Phụ 12 MP',
        					cpu: 'Apple A11 Bionic 6 nhân',
        					ram: '3 GB',
        					rom: '64 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 2691 mAh',
							size: '7.5 mm, 205g'
						  },
			},
			
			{
				productId:10016, 
				brand:'iphone',    
				img:'Image/product/10016.png', 
				name:'iPhone 6s Plus 32GB', 
				price: 387500,
				
				detail: {
        					screen: 'LED-backlit IPS LCD, 5.5", Retina HD',
        					os: 'iOS 12',
							camaraFront: '5 MP',
							camara: '12 MP',
        					cpu: 'Apple A9 2 nhân 64-bit',
        					ram: '2 GB',
        					rom: '32 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 2750 mAh',
							size: '7.3 mm, 192g'
						  },
			},
			
			{
				productId:10015, 
				brand:'mac',    
				img:'Image/product/10015.png', 
				name:'MacBook Air 2017 128GB', 
				price: 926280,
				
				detail: {
        					screen: '13.3 inch, WXGA+(1440 x 900)',
        					os: 'Mac OS',
							camaraFront: 'HD Webcam',
							camara: 'No',
        					cpu: 'Intel Core i5 Broadwell, 1.80 GHz',
        					ram: '8 GB, DDR3L(On board), 1600 MHz',
        					rom: 'SSD: 128 GB',
        					microUSB: 'MagSafe 2, 2 x USB 3.0, Thunderbolt 2',
        					battery: 'About 12 hours',
							size: '17 mm, 1.35 kg'
						  },
			},
			
			{
				productId:10014, 
				brand:'iphone',    
				img:'Image/product/10014.png', 
				name:'iPhone 7 32GB', 
				price: 430600,
				
				detail: {
        					screen: 'LED-backlit IPS LCD, 4.7", Retina HD',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: '12 MP',
        					cpu: 'Apple A10 Fusion 4 nhân 64-bit',
        					ram: '2 GB',
        					rom: '32 GB',
        					microUSB: 'Lightning, Air Play, NFC, OTG, HDMI',
        					battery: 'Li-ion, 1960 mAh',
							size: '7.1 mm, 138g'
						  },
			},
			
			{
				productId:10013, 
				brand:'watch',    
				img:'Image/product/10013.png', 
				name:'Apple Watch Series 5', 
				price: 531890,
				
				detail: {
        					screen: 'OLED 1.78"',
        					os: 'watchOS 6.0',
							camaraFront: 'No',
							camara: 'No',
        					cpu: 'Apple S5 64 bit',
        					ram: 'No',
        					rom: '32 GB',
        					microUSB: 'Wifi, Bluetooth v5.0, GPS',
        					battery: 'About 18 hours',
							size: 'Diameter 44 mm, 36.7g'
						},
			},
			
			{
				productId:10012, 
				brand:'watch',    
				img:'Image/product/10012.png', 
				name:'Apple Watch Series 5 Black', 
				price: 490940,
				
				detail: {
        					screen: 'OLED 1.57"',
        					os: 'watchOS 6.0',
							camaraFront: 'No',
							camara: 'No',
        					cpu: 'Apple S5 64 bit',
        					ram: 'No',
        					rom: '32 GB',
        					microUSB: 'Wifi, Bluetooth v5.0, GPS',
        					battery: 'About 18 hours',
							size: 'Diameter 4 mm, 30g'
						  },
			},
			
			{
				productId:10011, 
				brand:'ipad',    
				img:'Image/product/10011.png', 
				name:'iPad Wifi 32GB (2019)', 
				price: 387500,
				
				detail: {
        					screen: 'LED backlit LCD, 10.2"',
        					os: 'iOS 13',
							camaraFront: '1.2 MP',
							camara: '8 MP',
        					cpu: 'Apple A10 Fusion, 2.34 GHz',
        					ram: '3 GB',
        					rom: '32 GB',
        					microUSB: 'Wifi, Bluetooth, GPS, No support 3G, 4G',
        					battery: 'Li-ion, 8600 mAh',
							size: '7.5 mm, 483g'
						  },
			},
			
			{
				productId:10010, 
				brand:'ipad',    
				img:'Image/product/10010.png', 
				name:'iPad Wifi 32GB (2018)', 
				price: 387500,
				
				detail: {
        					screen: 'LED backlit LCD, 9.7"',
        					os: 'iOS 12',
							camaraFront: '1.2 MP',
							camara: '8 MP',
        					cpu: 'Apple A10 Fusion, 2.34 GHz',
        					ram: '2 GB',
        					rom: '32 GB',
        					microUSB: 'Wifi, Bluetooth, GPS, No support 3G, 4G',
        					battery: 'Li-ion, 8600 mAh',
							size: '7.5 mm, 469g'
						  },
			},
			
			{
				productId:10009, 
				brand:'iphone',    
				img:'Image/product/10009.png',
				name:'iPhone X 64GB', 
				price: 861630,
				
				detail: {
        					screen: 'OLED, 5.8", Super Retina',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: 'Chính 12 MP & Phụ 12 MP',
        					cpu: 'Apple A11 Bionic 6 nhân',
        					ram: '3 GB',
        					rom: '64 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 2716 mAh',
							size: '7.7 mm, 174g'
						  },
			},
			
			{
				productId:10008, 
				brand:'iphone',    
				img:'Image/product/10008.png', 
				name:'iPhone 7S Plus 32GB', 
				price: 559910,
				
				detail: {
        					screen: 'LED-backlit IPS LCD, 5.5", Retina HD',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: 'Chính 12 MP & Phụ 12 MP',
        					cpu: 'Apple A10 Fusion 4 nhân 64-bit',
        					ram: '3 GB',
        					rom: '32 GB',
        					microUSB: 'Lightning, Air Play, NFC, OTG, HDMI',
        					battery: 'Li-ion, 2900 mAh',
							size: '7.3 mm, 188g'
						  },
			},
			
			{
				productId:10007, 
				brand:'mac',    
				img:'Image/product/10007.png', 
				name:'iMac 5K Retina', 
				price: 2068520,
				
				detail: {
        					screen: 'Retina 27 inch, 5K (5120 x 2880)',
        					os: 'Mac OS',
							camaraFront: 'HD Webcam',
							camara: 'No',
        					cpu: 'Intel Core i5 Coffee Lake, 3.00 GHz',
        					ram: '8 GB, DDR4 (On board), 2666 MHz',
        					rom: '1TB Fusion Drive',
        					microUSB: '3 x USB 3.0, LAN (RJ45), 2 x Thunderbolt 3 (USB-C), USB 2.0',
        					battery: 'Updating',
							size: '203 mm, 9.42 kg'
						  },
			},
			
			{
				productId:10006, 
				brand:'mac',    
				img:'Image/product/10006.png', 
				name:'Macbook Pro Touch 2019 512GB', 
				price: 3016780,
				
				detail: {
        					screen: '15.4 inch, Retina (2880 x 1800)',
        					os: 'Mac OS',
							camaraFront: 'HD Webcam',
							camara: 'No',
        					cpu: 'Intel Core i9 Coffee Lake, 2.30 GHz',
        					ram: '16 GB, DDR4 (On board), 2400 MHz',
        					rom: 'SSD 512GB',
        					microUSB: '4 x Thunderbolt 3 (USB-C)',
        					battery: 'About 10 hours',
							size: '15.5 mm, 1.83 kg'
						  },
			},
			
			{
				productId:10005, 
				brand:'watch',    
				img:'Image/product/10005.png', 
				name:'Apple Watch Series 4', 
				price: 516810,
				
				detail: {
        					screen: 'AMOLED 2.2"',
        					os: 'watchOS 6.0',
							camaraFront: '0.08 MP',
							camara: '0.08 MP',
        					cpu: 'Apple S4 64 bit',
        					ram: 'No',
        					rom: '16 GB',
        					microUSB: 'Wifi, Bluetooth v5.0, GPS',
        					battery: '340 mAh',
							size: 'Diameter 44 mm, 30.1g'
						  },
			},
			
			{
				productId:10004, 
				brand:'watch',    
				img:'Image/product/10004.png', 
				name:'Apple Watch Series 4', 
				price: 473700,
				
				detail: {
        					screen: 'AMOLED 2.0"',
        					os: 'watchOS 5.0',
							camaraFront: 'No',
							camara: 'No',
        					cpu: 'Apple S4 64 bit',
        					ram: 'No',
        					rom: '16 GB',
        					microUSB: 'Bluetooth v5.0, Wifi, GPS',
        					battery: '340 mAh'
						  },
			},
			
			{
				productId:10003, 
				brand:'ipad',    
				img:'Image/product/10003.png', 
				name:'iPad Wifi Cellular 32GB (2019)', 
				price: 559910,
				
				detail: {
        					screen: 'LED backlit LCD, 10.2"',
        					os: 'iOS 13',
							camaraFront: '1.2 MP',
							camara: '8 MP',
        					cpu: 'Apple A10 Fusion, 2.34 GHz',
        					ram: '3 GB',
        					rom: '32 GB',
        					microUSB: 'WiFi, Bluetooth, 3G, 4G LTE',
        					battery: 'Li-ion, 8600 mAh',
							size: '7.5 mm, 493g'
						  },
			},
			
			{
				productId:10002, 
				brand:'ipad',    
				img:'Image/product/10002.png', 
				name:'iPad Mini Wifi Cellular 64GB (2019)', 
				price: 646110,
				
				detail: {
        					screen: 'LED backlit LCD, 7.9"',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: '8 MP',
        					cpu: 'Apple A12 Bionic 6 nhân, 2 nhân 2.5 GHz Vortex & 4 nhân 1.6 GHz Tempest',
        					ram: '3 GB',
        					rom: '64 GB',
        					microUSB: 'Wifi, Bluetooth, Support 4G',
        					battery: 'Lithium - Polymer, 5124 mAh',
							size: '6.1 mm, 308g'
						  },
			},
			
			{
				productId:10001, 
				brand:'iphone',    
				img:'Image/product/10001.png', 
				name:'iPhone Xs Max 256GB', 
				price: 1465070,
				
				detail: {
        					screen: 'OLED, 6.5", Super Retina',
        					os: 'iOS 12',
							camaraFront: '7 MP',
							camara: 'Chính 12 MP & Phụ 12 MP',
        					cpu: 'Apple A12 Bionic 6 nhân',
        					ram: '4 GB',
        					rom: '256 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 3174 mAh',
							size: '7.7 mm, 208g'
						  },
			},
			
			{
				productId:10000, 
				brand:'iphone',    
				img:'Image/product/10000.png', 
				name:'iPhone 11 Pro Max 512GB', 
				price: 1896100,
				
				//Cấu hình chi tiết sản phẩm
				detail: {
        					screen: 'OLED, 6.5", Super Retina XDR',
        					os: 'iOS 13',
							camaraFront: '12 MP',
							camara: '3 camera 12 MP',
        					cpu: 'Apple A13 Bionic 6 nhân',
        					ram: '4 GB',
        					rom: '512 GB',
        					microUSB: 'Lightning, NFC, OTG',
        					battery: 'Li-ion, 3969 mAh',
							size: '8.1 mm, 226g'
						  },
			},
			
		];
		//Đây là câu lệnh lồng:
		//JSON.stringify():  Chuyển đổi một đối tượng JavaScript thành một chuỗi. Vì khi gửi dữ liệu đến máy chủ web, dữ liệu phải là một chuỗi. 
		//localStorage.setItem(): là phương thức gán giá trị cho key đã có trên localStorage
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}
/*=============================== PHẦN TẠO LIST SẢN PHẨM - END ===============================*/

/*=============================== PHẦN SHOW SẢN PHẨM =================================*/
function showProduct(){
	var url = document.location.href; //lấy địa chỉ URL
	var temp = url.split("?");			//cắt chuỗi vừa lấy được theo dấu '?'. Chuỗi nhận đc sau đó là chuỗi ký tự từ sau dấu '?'. Ví dụ: 'index.html?abc' sau khi cắt chuỗi sẽ nhận đc chuỗi trả về là 'abc'
	var s=''; //tạo biến kiểu string
	
	//Đây là câu lệnh lồng:
	//localStorage.getItem(): là phương thức lấy giá trị lưu trữ của key trong localStorage
	//JSON.parse(): nhận vào dữ liệu ở dạng chuỗi và chuyển đổi nó sang dạng đối tượng
	var productArray = JSON.parse(localStorage.getItem('product'));
	//nếu chuỗi nhận đc sau khi cắt là rỗng thì gán nó bằng 'all&0' 
	if(temp[1]=='' || temp[1]==undefined || temp[1].search('all')==0){
		if(temp[1]=='' || temp[1]==undefined){
			temp = 'all&0';
		}
		else{ //ngược lại nếu nhận đc chuỗi nào đó thì gán chuỗi đó vào temp
			temp = temp[1]; 
		}
		var temp2 = temp.split("&"); //tiếp tục cắt chuỗi temp theo dấu '&'.
		var vitri = temp2[1];
		var sotrang=0,dem=0;
		for(var i=vitri;i<productArray.length;i++){
			//tạo vùng chứa từng sản phẩm bên html
			s+='<div class="card">'+
						'<img src="'+productArray[i].img+'">'+ //lấy đường dẫn ảnh tại vtri của nó trong mảng sản phẩm
						'<p>' + productArray[i].name + '</p>'+ //lấy tên tại vtri của nó trong mảng sản phẩm
						'<p> $' + currency(productArray[i].price) +'</p>' + //lấy giá tiền tại vtri của nó trong mảng sản phẩm
						//tạo nút button 'DETAIL' để hiển thị chi tiết sản phẩm.
						'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">DETAIL</button></div>';
			dem++;
			if(dem==12) //nếu đủ 12 sản phẩm trong 1 trang thì break qua trang khác để đổ sản phẩm ra
				break;
		}
		//chia số trang (sotrang = số lượng sản phẩm chia lấy nguyên cho 12)
		//Phương thức Math.ceil(): làm tròn một số tới số nguyên gần nhất.
		sotrang=Math.ceil(productArray.length/12);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*12; //giảm trang xuống. Như lúc nãy bên trên đã dùng hàm Math.ceil() để lấy đc số trang thì câu lệnh vitri=(i-1)*12 này là xác định hiện tại đang ở trang số bao nhiêu.
			//tạo thẻ a pageNumber ( hiển thị số trang).
			var a ='<a href="index.html?all&'+vitri+'">'+i+'</a>';
			lienket+='<div class="pageNumber">'+a+'</div>';
		}
		//in số trang ra màn hình
		document.getElementById('page').innerHTML=lienket;
	}
	else{ //ngược lại với cái bên trên là chuỗi sau khi cắt phía sau dấu '?' là rỗng thì đây là khác rỗng
		temp = temp[1]; //lấy chuỗi vừa cắt đó gán vào biến mảng phụ
		var temp2 = temp.split("&"); //tiếp tục cắt theo dấu '&'. //CHỊU KHÓ RÀ LÊN COI LẠI PHẦN VÍ DỤ.
		var brand = temp2[0];	//gán mã thể loại là biến mảng phụ
		var vitri = temp2[1];	//gán vitri là biến mảng phụ
		var sotrang=0,dem=0;
		var arrtempt=[];		//khai báo mảng phụ
		
		//duyệt mảng sản phẩm chính
		for(var i=0; i<productArray.length;i++){
			//nếu mã thể loại của mảng chính bằng trùng khớp với brand thì push sản phẩm đó vào mảng phụ vừa tạo.
			//push(): là phương thức thêm sản phẩm vào cuối mảng(theo cơ chế Stack) và trả về độ dài mới của mảng.
			if(brand==productArray[i].brand)
				arrtempt.push(productArray[i]);
		}
		
		//duyệt mảng phụ
		for(var i=vitri;i<arrtempt.length;i++){
			//tạo vùng chứa từng sản phẩm trong mảng phụ
			s+='<div class="card">'+
						'<img src="'+arrtempt[i].img+'">'+ //lấy đường dẫn ảnh của sản phẩm trong mảng phụ
						'<p>' + arrtempt[i].name + '</p>'+ //lấy tên sản phẩm trong mảng phụ
						'<p> $' + currency(arrtempt[i].price) +'</p>' + //lấy giá tiền
						//tạo nút button 'DETAIL' hiển thị chi tiết sản phẩm khi onClick.
						'<button class="btn" onClick="showProductInfo('+arrtempt[i].productId+')">DETAIL</button></div>';
			dem++;
			if(dem==8) //nếu đủ 8 sản phẩm trên 1 trang thì break sang trang khác. (8 sản phẩm trên trang là do tự quy định)
				break;
		}
		//sotrang = số sản phẩm chia lấy nguyên cho 8
		//Math.ceil(): là phương thức làm tròn số tới số nguyên gần nhất.
		sotrang=Math.ceil(arrtempt.length/8);
		var lienket='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*8; //giảm trang xuống. Như lúc nãy bên trên đã dùng hàm Math.ceil() để lấy đc số trang thì câu lệnh vitri=(i-1)*8 này là xác định hiện tại đang ở trang số bao nhiêu.
			//tạo thẻ a pageNumber ( hiển thị số trang).
			var a ='<a href="index.html?'+brand+'&'+vitri+'">'+i+'</a>';
			lienket+='<div class="pageNumber">'+a+'</div>';
		}
		//in vùng chứa sản phẩm dành riêng cho phân loại ra
		document.getElementById('page').innerHTML=lienket;
	}
	//đổ sản phẩm theo phân loại ra
	document.getElementById('product').innerHTML=s;
}
/*=============================== PHẦN SHOW SẢN PHẨM - END =================================*/

/*=============================== PHẦN CHI TIẾT SẢN PHẨM ==================================*/
function showProductInfo(productid){
	//truy xuất đến thuộc tính display = none của productInfo đổi nó thành block.
	document.getElementById('productInfo').style.display = 'block';
	//localStorage.getItem(): lấy giá trị lưu trữ của key trong localStorage.
	//JSON.parse: nhận vào dữ liệu dạng chuỗi và chuyển nó sang dạng đối tượng.
	var productArray = JSON.parse(localStorage.getItem('product'));
	//duyệt mảng
	for(var i=0;i<productArray.length;i++){
	//nếu id sản phẩm trong localStorage khớp với id truyền vào thì in tên, giá, ảnh của sản phẩm đó ra
		if(productArray[i].productId==productid){
			document.getElementById('productname').innerHTML = productArray[i].name; // tên sản phẩm
			document.getElementById('productprice').innerHTML = 'Price: $'+ currency(productArray[i].price); //giá sản phẩm có gắn thêm dấu '$' phía trước các con số.
			document.getElementById('imgbig').src=productArray[i].img; //ảnh sản phẩm
			
			/*============================== PHẦN CẤU HÌNH SẢN PHẨM ==============================*/
			//truy xuất đến div có địa chỉ id là productDetail để in ra các dữ liệu ra.
				document.getElementById('productDetail').innerHTML = '<li id="screen">Screen: ' +																	productArray[i].detail.screen +
																		'</li>' + 
																			'<br/>' + 
				
																 '<li id="os">Operating System: ' +	  	          productArray[i].detail.os +
																		'</li>' + 
																			'<br/>' +
				
																 '<li id="cameraFront">Front Camera: ' + 	productArray[i].detail.camaraFront + 		'</li>' + 
																			'<br/>' +
				
																 '<li id="camera">Rear Camera: ' + 		      productArray[i].detail.camara + 
																		'</li>' + 
																			'<br/>' + 
				
																 '<li id="cpu">CPU: ' +                	      productArray[i].detail.cpu + 
																		'</li>' + 
																			'<br/>' + 
				
																 '<li id="ram">RAM: ' + 	                  productArray[i].detail.ram + 
																		'</li>' + 
																			'<br/>' + 
				
																 '<li id="rom">ROM: ' +              productArray[i].detail.rom + 
																		'</li>' + 
																			'<br/>' + 
				
																 '<li id="microUSB">MicroUSB: ' + 	          productArray[i].detail.microUSB + 			'</li>' + 
																			'<br/>' +
				
																 '<li id="battery">Battery: ' + 	      productArray[i].detail.battery + 				'</li>' + 
																			'<br/>' +
				
																 '<li id="battery">Size: ' + 	      productArray[i].detail.size + 				'</li>' + 
																			'<br/>';
			
		/*============================== PHẦN CẤU HÌNH SẢN PHẨM - END ==============================*/
			//truy xuất đến số lượng và gán nó mặc định đầu tiên là 1.
			document.getElementById('quantity').value = 1;
			
			//document.quertSelector(): Phương thức querySelector() trả về phần tử đầu tiên khớp với (các) bộ chọn CSS được chỉ định. Lưu ý: Phương thức querySelector() chỉ trả về phần tử đầu tiên khớp với các bộ chọn đã chỉ định. Để trả về tất cả các kết quả khớp, thay vào đó, hãy sử dụng phương thức querySelectorAll ().
			//setAttribute(): thêm thuộc tính vào phần tử chỉ định.
			document.querySelector('#info .right button.addtocart').setAttribute('onClick', 'addToCart('+productid+')');
		}
	}
}
/*=============================== PHẦN CHI TIẾT SẢN PHẨM - END ==================================*/

/*=============================== ẨN CHI TIẾT SẢN PHẨM ================================*/
function closeProductInfo(){

	document.getElementById('productInfo').style.display = 'none';
}
/*=============================== ẨN CHI TIẾT SẢN PHẨM - END ================================*/

/*=============================== PHẦN SEARCH SẢN PHẨM Ở TRANG CHỦ =============================*/
function search(){
	var productsearch = document.getElementById('search').value.toLowerCase(); //toLowerCase() là phương thức chuyển đổi tất cả thành chữ thường/ toUpperCase() thì ngược lại.
	var productArray = JSON.parse(localStorage.getItem('product')); ////JSON.parse() nhận vào một chuỗi JSON chuyển đổi nó thành dạng đối tượng để lưu trữ vào localStorage.
	var s='';
	//tìm đến vị trí chứa khung search
	if(document.getElementById('searchextend').className== 'search-box'){
		//duyệt mảng sản phẩm trong localStorage
		for(var i = 0; i<productArray.length; i++){
			//nếu tên sản phẩm hoặc mã sản phẩm đang nhập vào đã được chuyển thành chữ thường khác -1(sai) và khác rỗng thì tạo chuỗi s như bên dưới và inner(hiển thị) chuỗi s ra.
			if ((productArray[i].name.toLowerCase().search(productsearch) != -1 || productArray[i].brand.toLowerCase().search(productsearch) != -1)) {
				s+='<div class="card">'+
					'<img src="'+productArray[i].img+'">'+
					'<p>' + productArray[i].name + '</p>'+
					'<p> Prices: ' + currency(productArray[i].price) +'</p>' +
					'<button class="btn" onClick="showProductInfo('+productArray[i].productId+')">DETAIL</button></div>';
			}
		}
	}
	document.getElementById('product').innerHTML = s;
}
/*=============================== PHẦN SEARCH SẢN PHẨM Ở TRANG CHỦ - END =============================*/

/*======================================= PHẦN GIỎ HÀNG ===========================================*/
	/*========== THÊM VÀO GIỎ HÀNG ==========*/
function addToCart(productid1){
	var quantity = document.getElementById('quantity').value; //biến giữ giá trị số lượng
	
	//Nhận vào dữ liệu trong key 'product' của localStorage ở dạng chuỗi và chuyển nó sang dạng đối tượng.
	var productArray = JSON.parse(localStorage.getItem('product'));
	var producttemp; //biến đối tượng lưu trữ tạm
	for(var i=0; i<productArray.length;i++){
		//nếu id sản phẩm khớp với id đc truyền vào thì gán cả sản phẩm đó vào producttemp.
		if(productArray[i].productId==productid1){
			producttemp = productArray[i];
		}
	}
	//nếu giá trị của key 'cart' trong localStorage là rỗng thì
	if(localStorage.getItem('cart')===null){
		var cartArray = []; 	//tạo mảng giỏ hàng
		producttemp.quantity = quantity;	//lấy số lượng của sản phẩm trong producttemp
		producttemp.totalprice = quantity*producttemp.price; //lấy tổng giá = số lượng nhân giá sản phẩm.
		cartArray.unshift(producttemp);		//unshift(): thêm vào đầu mảng trả về độ dài mới của mảng.
		//setItem(): đặt giá trị cho đối tượng cart
		//stringify():  chuyển đổi đối tượng JavaScript thành dạng chuỗi. Vì khi lưu giữ liệu lên máy chủ server hay localStorage thì dữ liệu phải là dạng chuỗi.
		localStorage.setItem('cart',JSON.stringify(cartArray));
	}else{
		//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
		//getItem(): lấy giá trị lưu trữ của key 'cart' trong localStorage.
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		producttemp.quantity = quantity; //số lượng của sản phẩm
		producttemp.totalprice = quantity*producttemp.price; //tổng tiền
		cartArray.unshift(producttemp); //unshift(): thêm vào đầu mảng và trả về độ dài mới của mảng.
		//setItem(): đặt giá trị cho key 'cart' trong localStorage.
		//stringigy(): chuyển đổi đối tượng JS thành dạng chuỗi. Do máy chủ server hay localStorage chỉ nhận dữ liệu vào là dạng chuỗi.
		localStorage.setItem('cart',JSON.stringify(cartArray));		
	}
	closeProductInfo(); //đóng div Chi tiết sản phẩm.
}
	/*========== THÊM VÀO GIỎ HÀNG - END ==========*/

	/*========== HIỂN THỊ GIỎ HÀNG ==========*/
function showCartTable(){
	showbill();
	//nếu giá trị trong key 'cart' là rỗng thì
	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		//tạo dòng thông báo nếu chưa có sản phẩm trong trang giỏ hàng.
		var s='<tr>'+
					'<th>'+
						'<h1>YOUR CART IS EMPTY!</h1>'+
					'</th>'+
			 '</tr>';
		document.getElementById('carttable').innerHTML=s; //in thông báo
		document.getElementById('totalprice').innerHTML= 0; //in tổng tiền
	}else { //ngược lại nếu có giá trị chứa trong key 'cart' thì
		//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
		//getItem(): lấy giá trị của key 'cart'.
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		//tạo tiêu đề cho bảng sản phẩm trong trang giỏ hàng.
		var s='<tr class="titlelist">'+
						'<th class="oridinal">ORIDINAL</th>'+ //số thứ tự sản phẩm
						'<th>PRODUCT</th>'+		//sản phẩm (ảnh)
						'<th>NAME PRODUCT</th>'+	//tên sản phẩm
						'<th>PRICE</th>'+			//giá
						'<th>QUANTITY</th>'+		//số lượng
						'<th>TOTAL</th>'+		//tổng tiền
						'<th>DELETE PRODUCT</th>'+	//xóa sản phẩm
				'</tr>';
		var totalprice=0;
		var dem = 1;
		for (var i = 0; i < cartArray.length; i++){
			//tạo sản phẩm trong bảng giỏ hàng.
			s+=  '<tr>'+
					'<td class="oridinal">' + dem++ + '</td>' + //số thứ tự
					'<td><img src="../'+cartArray[i].img+'"></td>'+ //ảnh 
					'<td>'+	
						'<div>'+cartArray[i].name+'</div>'+		//tên
					'</td>'+
					'<td>'+currency(cartArray[i].price)+'</td>'+	//giá
					'<td>'+
						//nút giảm phẩm trong giỏ hàng
						'<button onClick="quantitydown2('+cartArray[i].productId+')">&lsaquo;</button>'+
						'<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productId+')">'+
						
						//nút tăng phẩm trong giỏ hàng
						'<button onClick="quantityup2('+cartArray[i].productId+')">&rsaquo;</button>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+ //tiền
					
					//nút xóa sản phẩm.
					'<td><button><i class="fa fa-trash" onClick="deletecartitem('+cartArray[i].productId+')""></i></buttom></td>'+
				'</tr>';
				
			totalprice+=cartArray[i].price*cartArray[i].quantity; //tổng tiền tất cả sản phẩm
		}
		//tiêu đề bên dưới bảng sản phẩm
		s+= '<tr class="listbottom">'+
						'<th colspan="3" class="totalcart">TOTAL BUYING: </th>'+ 
						'<th> $'+currency(totalprice)+'</th>'+		//tổng tiền tất cả
						'<th colspan="2" class="pay" onClick="buy()">CONDUCTING PAYMENT</th>'+ //nút thanh toán giỏ hàng
						'<th class="delete" onClick="deletecart()">DELETE CART</th>'+ //nút xóa toàn bộ giỏ hàng
			'</tr>';
		document.getElementById('carttable').innerHTML=s;
	}	
}
	/*========== HIỂN THỊ GIỎ HÀNG - END ==========*/

	/*========== XÓA TỪNG SẢN PHẨM TRONG GIỎ HÀNG ==========*/
function deletecartitem(id){
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
	//getItem(): lấy giá trị key 'cart'.
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		//nếu id trong localStorage bằng id truyền vào thì 
		//splice(): thêm / xóa các mục vào / từ một mảng và trả về (các) mục đã xóa. Phương pháp này làm thay đổi mảng ban đầu.
		if(cartArray[i].productId==id){
			cartArray.splice(i, 1);  //xóa 1 phần tử của mảng tại vitri i.
		}
	}
	//setItem(): đặt lại giá trị key 'cart'.
	//JSON.stringify(): chuyển đổi đối tượng JS thành dạng chuỗi. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ dạng chuỗi.
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable(); //hiển thị bảng sản phẩm trong giỏ hàng.
}
	/*========== XÓA TỪNG SẢN PHẨM TRONG GIỎ HÀNG - END ==========*/

	/*========== XÓA TẤT CẢ SẢN PHẨM TRONG GIỎ HÀNG ==========*/
function deletecart(){
	//removeItem(): xóa key 'cart' trong localStorage.
	localStorage.removeItem('cart'); 
	showCartTable();	//hiển thị bảng sản phẩm trong giỏ hàng.
}
	/*========== XÓA TẤT CẢ SẢN PHẨM TRONG GIỎ HÀNG - END ==========*/

	/*========== UPDATE SỐ LƯỢNG VÀ SẢN PHẨM ĐƯỢC THÊM VÀO TRONG GIỎ HÀNG ==========*/
function updateCart(quantity,id){
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
	//getItem(): lấy giá trị lưu trữ của key 'cart' trong localStorage.
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		//nếu id của đối tượng đã lấy bằng id truyền vào thì gán số lượng của sản phẩm đó vào biến quantity. 
		if(cartArray[i].productId==id){
			cartArray[i].quantity=quantity; //gán
		}
	}
	//setItem(): đặt lại giá trị của key 'cart' trong localStorage.
	//JSON.stringify(): chuyển đối tượng của JS thành dạng chuỗi. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable(); //hiển thị bảng sản phẩm trong giỏ hàng.
}
	/*========== UPDATE SỐ LƯỢNG VÀ SẢN PHẨM ĐƯỢC THÊM VÀO TRONG GIỎ HÀNG - END ==========*/

	/*========== THANH TOÁN ĐƠN HÀNG ==========*/
function buy(){
	//nếu giá trị lưu trữ của key 'userlogin' hoàn toàn rỗng thì không cho mua hàng.
	//getItem(): trả về giá trị của key 'userlogin' trong localStorage.
	if(localStorage.getItem('userlogin')===null){
		alert('ERROR!!! YOU MUST BE LOGGED IN TO CONTINUE SHOPPING!');
		return false;
	}
	var info = ''; //biến dạng chuỗi
	var totalprice = 0;
	//nếu giá trị trả về của key 'cart' là rỗng thì return false ngay lập tức.
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		return false;
	}
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
	//getItem(): lấy giá trị lưu trữ của key 'cart' trong localStorage.
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
			info+=cartArray[i].quantity+' x '+cartArray[i].name+'<br/>'; //số lượng nhân tên sản phẩm mua
			totalprice+=cartArray[i].quantity*cartArray[i].price;	//số lượng nhân giá sản phẩm
	}
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
	//getItem(): lấy giá trị lưu trữ của key 'userlogin' trong localStorage.
	var customer = JSON.parse(localStorage.getItem('userlogin'));
	var date = new Date();		//khai báo hàm khởi tạo ngày tháng năm.
	//getDate(): hàm lấy ngày hiện tại
	//getMonth(): hàm lấy tháng hiện tại
	//getFullYear(): hàm lấy năm hiện tại
	var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
	
	//getItem(): lấy giá trị của key 'bill' trong localStorage.
	//nếu giá trị lưu trữ của key 'bill' trong localStorage rỗng thì
	if(localStorage.getItem('bill')===null){
		var billArray = [];	//khai báo mảng bill
		var bill = {
						id: billArray.length, 	//id là chiều dài mảng bill
						info: info, 			//info là chuỗi info đã khai báo phía trên.
						totalprice: totalprice, 	//totalprice là tổng tiền
						customer: customer, 		//khách hàng
						date: d, 				//ngày tháng năm
						status: 'Unconfimred'	//trạng thái ban đầu của đơn hàng là 'Unconfimred': chưa được xác nhận.
				   };
		//unshift(): thêm 1 phần tử vào đầu mảng, trả về chiều dài mới của mảng.
		//billArray.unshift(bill) là thêm 1 bill vào đầu mảng billArray rồi trả về chiều dài mới của mảng.
		billArray.unshift(bill);
		//setItem(): đặt lại giá trị cho key 'bill' trong localStorage.
		//JSON.stringify(): chuyển đổi đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
		localStorage.setItem('bill', JSON.stringify(billArray));
	}
	else{
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = {
						id: billArray.length, 
						info: info, 
						totalprice: totalprice, 
						customer: customer, 
						date: d, 
						status: 'Unconfimred'
				   };
		billArray.unshift(bill);
		localStorage.setItem('bill', JSON.stringify(billArray));
	}	
	localStorage.removeItem('cart');
	showCartTable();
	showbill();
}
	/*========== THANH TOÁN ĐƠN HÀNG - END ==========*/

	/*========== HIỂN THỊ ĐƠN HÀNG ĐÃ ĐẶT VÀ ĐƯỢC DUYỆT BỞI ADMIN ==========*/
function showbill(){
	if (localStorage.getItem('bill')===null){
		document.getElementById('bill').style.display = 'none';
	}
	//ngược lại nếu giá trị lưu trữ của key 'bill' trong localStorage khác rỗng thì
	else{
		//hiển thị div bill lên.
		document.getElementById('bill').style.display = 'block';
		
		//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng.
		//getItem(): lấy giá trị lưu trữ của key 'userlogin' trong localStorage.
		var user = JSON.parse(localStorage.getItem('userlogin'))
		var billArray = JSON.parse(localStorage.getItem('bill'));
		//tạo tiêu đề cho đơn hàng đã đặt.
		var s='<h2>ORDERS ARE ORDERED</h2>';
		for (var i = 0; i < billArray.length; i++) {
			//nếu username trong userlogin bằng username của khách hàng trong mảng billArray thì
			if(user.username==billArray[i].customer.username){
				//hiển thị div bill
				document.getElementById('bill').style.display = 'block';
				//tạo div hiển thị bill
				s+='<div class="billcontent">'+
					'<div>'+billArray[i].info+'</div>'+		
					'<div>'+'$'+currency(billArray[i].totalprice)+'</div>'+
					'<div>'+billArray[i].date+'</div>'+
					'<div>'+billArray[i].status+'</div>'+
				'</div>';
			}
		}
		document.getElementById('bill').innerHTML = s;
	}
}
	/*========== HIỂN THỊ ĐƠN HÀNG ĐÃ ĐẶT VÀ ĐƯỢC DUYỆT BỞI ADMIN - END ==========*/
/*===================================== PHẦN GIỎ HÀNG - END =========================================*/

/*================================== SỐ LƯỢNG SẢN PHẨM ==========================================*/
	/*========== GIẢM SỐ LƯỢNG TRONG PHẦN CHI TIẾT SẢN PHẨM ==========*/
function quantitydown(){
	if(document.getElementById('quantity').value > 1){
		document.getElementById('quantity').value--;
	}
}
	/*========== GIẢM SỐ LƯỢNG TRONG PHẦN CHI TIẾT SẢN PHẨM - END ==========*/

	/*========== TĂNG SỐ LƯỢNG TRONG PHẦN CHI TIẾT SẢN PHẨM ==========*/
function quantityup(){
	document.getElementById('quantity').value++;
}
	/*========== TĂNG SỐ LƯỢNG TRONG PHẦN CHI TIẾT SẢN PHẨM - END ==========*/

	/*========== GIẢM SỐ LƯỢNG TRONG PHẦN GIỎ HÀNG ==========*/
function quantitydown2(id){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng.
	//getItem(): lấy giá trị lưu trữ của key 'cart' trong localStorage.
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		//nếu id trong mảng cartArray khớp với id truyền vào thì
		if(cartArray[i].productId==id){
			//nếu số lượng của sản phẩm i trong  mảng cartArray lớn hơn 1 thì mỗi lần click giảm 1.
			if(cartArray[i].quantity>1)
				cartArray[i].quantity--;
		}
	}
	//setItem(): đặt lại giá trị cho key 'cart' trong localStorage.
	//JSON.stringify(): đổi đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();  //hiển thị bảng sản phẩm trong giỏ hàng.
}
	/*========== GIẢM SỐ LƯỢNG TRONG PHẦN GIỎ HÀNG - END ==========*/

	/*========== TĂNG SỐ LƯỢNG TRONG PHẦN GIỎ HÀNG ==========*/
function quantityup2(id){
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển đổi nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'cart' trong localStorage.
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		//nếu id của sản phẩm tại vị trí i trong mảng cartArray khớp với id truyền vào thì mỗi lần click sẽ tăng lên 1.
		if(cartArray[i].productId==id){
				cartArray[i].quantity++;
		}
	}
	//setItem(): đặt lại giá trị cho key 'cart' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();	//hiển thị bảng sản phẩm trong giỏ hàng.
}
	/*========== TĂNG SỐ LƯỢNG TRONG PHẦN GIỎ HÀNG - END ==========*/
/*================================== SỐ LƯỢNG SẢN PHẨM ==========================================*/

/*=============================== NÚT DI CHUYỂN LÊN ĐẦU TRANG ====================================*/
function gotoTop() {
    if (window.jQuery) {
		//jQuery().animate(): để tạo hành động tùy chỉnh
		//Phương thức scrollTop() thiết lập hoặc trả về vị trí thanh cuộn dọc cho các phần tử được chọn.
        	jQuery('html,body').animate({ scrollTop: 0 }, 'slow');
    } else {
		//Phương thức scrollIntoView() cuộn phần tử được chỉ định vào vùng hiển thị của cửa sổ trình duyệt.
        document.getElementsByClassName('top')[0].scrollIntoView({
			behavior: 'smooth',  //xác định hình ảnh chuyển tiếp tự động
			block: 'start',		//chạy theo chiều dọc dừng ở đầu trang.
		});
		
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
/*=============================== NÚT DI CHUYỂN LÊN ĐẦU TRANG ====================================*/

/*=============================== TẠO TÀI KHOẢN =================================*/
	/*========== TẠO ADMIN ==========*/
function createAdmin(){
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorage.
	//nếu giá trị đó rỗng hoàn toàn thì tạo user1,2,3,4.
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user1 = {
						username: 'admin', 
						password: 'admin', 
						fullname: 'Dương Bắc Đông', 
						address: '273 An Dương Vương, P3, Quận 5, TPHCM', 
						phone: '0915272291' , 
						datesignup: '04-10-2000'
				   };
		
		var user2 = {
						username: 'admin1', 
						password: 'admin1', 
						fullname: 'Lưu Đức Hòa', 
						address: 'Nguyễn Thị Nhỏ, Quận 11, TPHCM', 
						phone: '0899168098' , 
						datesignup: 'dd-mm-1998'
				   };
		
		var user3 = {
						username: 'admin2', 
						password: 'admin2', 
						fullname: 'Bùi Trung Hậu', 
						address: 'Huyện Củ Chi, TPHCM', 
						phone: '0395492474' , 
						datesignup: 'dd-mm-2000'
				   };
		
		var user4 = {
						username: 'admin3', 
						password: 'admin3', 
						fullname: 'Lê Nguyễn Anh Đức', 
						address: 'Hào Sỹ Phường, Quận 5, TPHCM', 
						phone: '0869968293' , 
						datesignup: 'dd-mm-2000'
				   };
		
		//push(): thêm 1 đối tượng vào cuối mảng (theo cơ chế Stack) và trả về chiều dài mới của mảng.
		userArray.push(user1);
		userArray.push(user2);
		userArray.push(user3);
		userArray.push(user4);
		//setItem(): đặt lại giá trị cho key 'user' trong localStorage.
		//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận giá trị lưu trữ ở dạng chuỗi.
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
	/*========== TẠO ADMIN - END ==========*/

	/*========== TẠO TÀI KHOẢN DÀNH CHO KHÁCH HÀNG ==========*/
function createUser(){
	//e.preventDefault();
	var fullnamet = document.getElementById('fullnameSignup');
	var addresst = document.getElementById('addressSignup');
	var phonet = document.getElementById('phoneSignup');
	var usernamet = document.getElementById('usernameSignup');
	var passwordt = document.getElementById('passwordSignup');
	var password2t = document.getElementById('confirmPasswordSignup');
	
	//khai báo hàm khởi tạo ngày tháng năm.
	var d = new Date();
	
	//getDate(): lấy ngày hiện tại.
	//getMonth(): lấy tháng hiện tại.
	//getFullYear(): lấy năm hiện tại.
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user1 = {
					username: usernamet.value, 
					password: passwordt.value, 
					fullname: fullnamet.value, 
					address:  addresst.value, 
					phone:    phonet.value, 
					datesignup: datesignup
			   };
	var flag = true; //tạo biến flag kiểu boolean
	
	//nếu fullname bằng rỗng thì báo lỗi
	if(user1.fullname == null || user1.fullname ==''){
		alert("ERROR!!! FULLNAME IS NOT NULL!");
		fullnamet.focus();  //trỏ chuột vào ô fullname.
		return false;
	} else { //ngược lại nếu khác rỗng thì 
		flag = true;	//thay đổi giá trị biến flag thành true.
	}
	
	if(user1.fullname.length < 5){
		alert("ERROR!!! FULLNAME MUST BE BIGGER THAN 6 WORDS!");
		fullnamet.focus();
		return false;
	} else {
		flag = true;
	}
	
	//nếu address bằng rỗng thì báo lỗi
	if(user1.address == null || user1.address == ''){
		alert("ERROR!!! ADDRESS IS NOT NULL!");
		addresst.focus(); //trỏ chuột vào ô address.
		return false;
	} else { //ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
		flag = true;	
	}
	
	//nếu phone bằng rỗng thì báo lỗi
	if(user1.phone == null || user1.phone ==''){
		alert("ERROR!!! PHONE IS NOT NULL!");
		phonet.focus(); //trỏ chuột vào ô phone.
		return false;
	} else { //ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
		flag = true;	
	}
	
	//nếu số điện thoại nhỏ hơn 10 ký tự hoặc lớn hơn 11 ký tự thì báo lỗi.
	if(user1.phone.length < 10 || user1.phone.length > 11){
		alert("ERROR!!! INVALID PHONE NUMBER");
		phonet.focus();	//trỏ chuột vào ô phone.
		return false;
	} else {	//ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
		flag = true;
	}
	
	//nếu username bằng rỗng thì báo lỗi
	if(user1.username == null || user1.username == ''){
		alert("ERROR!!! USERNAME IS NOT NULL");
		usernamet.focus(); //trỏ chuột vào ô username.
		return false;
	} else { //ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
		flag = true;
	}
	
	//JSON.parse(): lấy chuỗi dữ liệu chuyển sang dạng đối tượng.
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorage.
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		//nếu username nhập vào trùng với username có sẵn trong mảng userArray thì báo lỗi.
		if(user1.username==userArray[i].username){
			alert("ERROR!!! USERNAME IS USED!"); 
			usernamet.focus();  //trỏ chuột vào ô username.
			return false;
		}
	}
	
	//nếu password bằng rỗng thì báo lỗi.
	if(user1.password == null || user1.password == ''){
		alert("ERROR!!! PASSWORD IS NOT NULL!");
		passwordt.focus(); //trỏ chuột vào ô password.
		return false;
	
	} else { //ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
			flag = true;	
	}
	
	//nếu password nhỏ hơn hoặc bằng 6 ký tự thì báo lỗi.
	if(user1.password.length <= 6){
		alert("ERROR!!! PASSWORD MUST BE BIGGER THAN 6 WORDS!");
		passwordt.focus(); //trỏ chuột vào ô password.
		return false;
	} else { //ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
		flag = true;
	}
	
	//nếu nhập lại password không khớp với pasword thì báo lỗi.
	if(password2t.value != user1.password){
		alert("ERROR CONFIRM PASSWORD! ");
		password2t.focus();  //trỏ chuột vào ô confirm password.
		return false;
	} else { //ngược lại khác rỗng thì thay đổi giá trị biến flag thành true.
		flag = true;	
	}
	
	//nếu chạy hết các điều kiện bên trên mà biến flag = true thì 
	if(flag == true){
		userArray.push(user1); // thêm đối tượng user1 vào cuối mảng userArray và trả về chiều dài mới của mảng.
	}
	//setItem(): đặt lại giá trị cho key 'user' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('user',JSON.stringify(userArray));
	alert('Congratulations! '+fullnamet.value+' you have successfully registered!');
	alert('AUTOMATIC LOGIN!'); //Tự động đăng nhập
	autologin(); //gọi hàm tự động đăng nhập
}
	/*========== TẠO TÀI KHOẢN DÀNH CHO KHÁCH HÀNG - END ==========*/
/*=============================== TẠO TÀI KHOẢN =================================*/

/*====================================== PHẦN ĐĂNG NHẬP VÀO =======================================*/
	/*================== AUTOMATIC LOGIN =====================*/
function autologin(){
	var usernameAuto = document.getElementById('usernameSignup').value; //lấy username từ form đăng kí
	var passwordAuto = document.getElementById('passwordSignup').value; //lấy password từ form đăng kí
	
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorage.
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		//nếu username của form đăng kí trùng với username đã đc tạo trong mảng userArray thì xét tiếp
		if(usernameAuto == userArray[i].username){
			//nếu password của form đăng kí trùng với password đã đc tạo trong mảng userArray thì
			if(passwordAuto == userArray[i].password){
				closeform();		//ẩn form đăng kí đăng nhập đi
				
				//setItem(): đặt lại giá trị lưu trữ cho key 'userlogin' trong localStorage.
				//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ dạng chuỗi.
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				
				//load lại trang hiện tại.
				location.reload(true);
				return true;
			}
		}
	}
	
	//nếu không khớp username or password thì báo lỗi 
	alert('ERROR AUTOMATIC LOGIN!');
	showLogin();	//hiển thị form đăng nhập.
	return false;
}
	/*================== AUTOMATIC LOGIN - END =====================*/

	/*========== ĐĂNG NHẬP THỦ CÔNG ==========*/
function login(){
	var username = document.getElementById('usernameLogin').value; //lấy username từ form đăng nhập
	var password = document.getElementById('passwordLogin').value; //lấy password từ form đăng nhập
	
	//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorage.
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		//nếu username của form đăng nhập khớp với username trong mảng userArray thì xét tiếp
		if(username==userArray[i].username){
			//nếu password của form đăng nhập khớp với password trong mảng userArray thì
			if(password==userArray[i].password){
				closeform();	//ẩn form đăng ký đăng nhập
				
				//setItem(): đặt lại giá trị cho key 'userlogin' trong localStorage.
				//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				location.reload(true);		//load lại trang hiện tại.
				return true;
			}
		}
	}
	
	//nếu username or password không khớp thì báo lỗi.
	alert("ERROR!!! WRONG LOGIN INFORMATION!");
	document.getElementById('usernameLogin').focus();	//trỏ chuột vào ô username
	return false;
}
	/*========== ĐĂNG NHẬP THỦ CÔNG ==========*/
/*================================= PHẦN ĐĂNG NHẬP VÀO - END =====================================*/

/*====================== SAU KHI MỞ TRANG KIỂM TRA CÓ TÀI KHOẢN ĐĂNG NHẬP CHƯA ==================*/
function checklogin(){
	//getItem(): lấy giá trị lưu trữ của key 'userlogin' trong localStorage.
	//nếu giá trị có tồn tại thì
	if(localStorage.getItem('userlogin')){
		
		//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		
		//nếu username là admin thì chuyển đến trang admin.
		if(user.username=='admin' || user.username=='admin1' || user.username=='admin2' || user.username=='admin3'){
			window.location.assign("Administrators/admin.html");
		}else{ //ngược lại nếu không phải là admin thì gọi hàm hello1() để xuất fullname của người đăng nhập ra.
			hello1();
		}
		
		//document.quertSelector(): Phương thức querySelector() trả về phần tử đầu tiên khớp với (các) bộ chọn CSS được chỉ định. Lưu ý: Phương thức querySelector() chỉ trả về phần tử đầu tiên khớp với các bộ chọn đã chỉ định. Để trả về tất cả các kết quả khớp, thay vào đó, hãy sử dụng phương thức querySelectorAll ().
		document.querySelector('#header .top .user').innerHTML = s;
	}
}
/*================= SAU KHI MỞ TRANG KIỂM TRA CÓ TÀI KHOẢN ĐĂNG NHẬP CHƯA - END ==================*/

/*========================= KIỂM TRA GIỎ HÀNG ĐÃ CÓ ĐĂNG NHẬP CHƯA ==========================*/
//checklogin bên phẩn giỏ hàng.
function checklogin2(){
	//getItem(): lấy giá trị lưu trữ của key 'userlogin' trong localStorage.
	//nếu giá trị có tồn tại thì
	if(localStorage.getItem('userlogin')){
		
		//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		
		//nếu username khác admin thì gọi hàm hello1() để in fullname của khách hàng ra.
		if(user.username!='admin' || user.username!='admin1' || user.username!='admin2' || user.username!='admin3'){
			hello1();
		}
		
		//document.quertSelector(): Phương thức querySelector() trả về phần tử đầu tiên khớp với (các) bộ chọn CSS được chỉ định. Lưu ý: Phương thức querySelector() chỉ trả về phần tử đầu tiên khớp với các bộ chọn đã chỉ định. Để trả về tất cả các kết quả khớp, thay vào đó, hãy sử dụng phương thức querySelectorAll ().
		document.querySelector('#header .top .user').innerHTML = s;
		document.querySelector('#header .top .cart').innerHTML = s;
	}
}
/*========================= KIỂM TRA GIỎ HÀNG ĐÃ CÓ ĐĂNG NHẬP CHƯA - END ==========================*/

/*============================ KIỂM TRA VƯỢT RÀO TRUY CẬP ADMIN =============================*/
//kiểm tra bên trang admin
function checkAdmin(){
	if(localStorage.getItem('userlogin')===null){
		window.location.assign("../Page/RejectLogin.html");
	}
	
	//getItem(): lấy giá trị lưu trữ của key 'userlogin' trong localStorage.
	//nếu giá trị có tồn tại thì
	if(localStorage.getItem('userlogin')){
		
		//JSON.parse(): nhận vào chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
		var user = JSON.parse(localStorage.getItem('userlogin'));
		
		//nếu username nếu là admin thì gọi hàm hello() để xuất tên admin ra.
		if(user.username=='admin' || user.username=='admin1' || user.username=='admin2' || user.username=='admin3'){
			hello();
			
		} else { //ngược lại nếu khác admin thì chuyển tới trang thông báo không có quyền truy cập.
			window.location.assign("../Page/RejectLogin.html");
		}
	}
}
/*============================ KIỂM TRA VƯỢT RÀO TRUY CẬP ADMIN - END =============================*/