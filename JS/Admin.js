/*======================= PHẦN HIỂN THỊ FULLNAME USER KHI LOGIN THÀNH CÔNG ===========================*/
function hello(){
	var user = JSON.parse(localStorage.getItem('userlogin'));
	document.getElementById('nameAdmin').innerHTML= user.fullname +'<button onclick="logout1()">LOGOUT</button>';
}
/*================== PHẦN HIỂN THỊ FULLNAME USER KHI LOGIN THÀNH CÔNG - END ======================*/

/*============================== PHẦN ĐĂNG XUẤT TÀI KHOẢN ==================================*/
function logout1(url){
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	window.location.assign("../index.html");
}
/*============================== PHẦN ĐĂNG XUẤT TÀI KHOẢN - END ==================================*/

/*============================== PHẦN HIỂN THỊ DANH SÁCH ĐƠN HÀNG ==================================*/
function showbilllist(){
	//getItem(): lấy giá trị lưu trữ của key 'bill' trong localStorage.
	//nếu giá trị đó rỗng hoàn toàn thì
	if(localStorage.getItem('bill')===null){
		//tạo tiêu đề cho bảng danh sách đơn hàng.
		var s='<tr>'+
					'<th>DATE</th>'+			//NGÀY THÁNG NĂM
					'<th>CUSTOMER</th>'+		//TÊN KHÁCH HÀNG
					'<th>ADDRESS</th>'+			//ĐỊA CHỈ
					'<th>NUMBER PHONE</th>'+	//SỐ ĐIỆN THOẠI
					'<th>PRICE</th>'+			//GIÁ TIỀN
					'<th>STATUS</th>'+			//TRẠNG THÁI ĐƠN HÀNG
			 '</tr>'+
			 '<tr>'+
					//colspan=4 là gộp cột lại.
					'<td colspan=6><h2>YOU DO NOT HAVE BILLING!</h2></td>'+
			 '</tr>';
		document.getElementById('billlist').innerHTML=s;  //hiển thị chuỗi s ra màn hình.
		return false;
	}
	
	//tạo tiêu đề cho bảng danh sách đơn hàng.
	var s='<tr>'+
				'<th>DATE</th>'+			//NGÀY THÁNG NĂM
				'<th>CUSTOMER</th>'+		//TÊN KHÁCH HÀNG
				'<th>ADDRESS</th>'+			//ĐỊA CHỈ
				'<th>NUMBER PHONE</th>'+	//SỐ ĐIỆN THOẠI
				'<th>PRICE</th>'+			//GIÁ TIỀN
				'<th>STATUS</th>'+			//TRẠNG THÁI ĐƠN HÀNG
		 '</tr>';
	
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'bill' trong localStorage.
	var billArray = JSON.parse(localStorage.getItem('bill'));
	for(var i=0;i<billArray.length;i++){
		//nếu trạng thái đơn hàng trong mảng billArray là Unconfimred(chưa xác nhận) thì
		if(billArray[i].status=='Unconfimred'){
			//cộng chuỗi vào tiêu đề (chuỗi cộng thêm là phần dòng hiển thị trong bảng)
			s+='<tr>'+	
						'<td>'+billArray[i].date+'</td>'+	//NGÀY THÁNG NĂM
						'<td>'+billArray[i].customer.fullname+'</td>'+	//TÊN KHÁCH HÀNG
						'<td>'+billArray[i].customer.address+'</td>'+	//ĐỊA CHỈ KHÁCH HÀNG
						'<td>'+billArray[i].customer.phone+'</td>'+		//SỐ ĐIỆN THOẠI KHÁCH HÀNG
						'<td>'+ '$' + currency(billArray[i].totalprice)+'</td>'+	//TỔNG TIỀN
						'<td>'+
							'<div>'+
								//hiển thị tráng thái chưa xác nhận (Unconfimred) màu đỏ
								'<span id="status" style="color:red">'+billArray[i].status+'</span>'+
									'<label>'+
										//tạo nút checkbox
										'<input type="checkbox" onchange="changeStatus(this,'+billArray[i].id+')" onClick="showinfobill('+billArray[i].id+')">'+
									'</label>'+
							'</div>'+
				'</tr>';
		}
		//ngược lại nếu trạng thái trong mảng billArray là Confimred(đã xác nhận) thì
		else {
			//cộng chuỗi vào tiêu đề (chuỗi cộng thêm là phần dòng hiển thị trong bảng)
			s+='<tr>'+
						'<td>'+billArray[i].date+'</td>'+	//NGÀY THÁNG NĂM
						'<td>'+billArray[i].customer.fullname+'</td>'+	//TÊN KHÁCH HÀNG
						'<td>'+billArray[i].customer.address+'</td>'+	//ĐỊA CHỈ
						'<td>'+billArray[i].customer.phone+'</td>'+		//SỐ ĐIỆN THOẠI
						'<td>'+'$'+currency(billArray[i].totalprice)+'</td>'+	//GIÁ TIỀN
						'<td>'+
							'<div>'+
								//hiển thị trạng thái đã xác nhận (Confimred) màu xanh
								'<span id="status" style="color:blue">'+billArray[i].status+'</span>'+
									'<label>'+
										//tạo nút checkbox
										'<input type="checkbox" checked onchange="changeStatus(this,'+billArray[i].id+')">'+
									'</label>'+
							'</div>'+
					'</tr>';
		}
	}
	document.getElementById('billlist').innerHTML=s;  //in chuỗi s ra
}
/*=========================== PHẦN HIỂN THỊ DANH SÁCH ĐƠN HÀNG - END ===============================*/

/*=========================== PHẦN CHI TIẾT ĐƠN HÀNG ===============================*/
	/*=========== HIỂN THỊ CHI TIẾT ============*/
function showinfobill(id){
	//truy xuất đến thuộc tính display của div có id là 'modal1' đổi thuộc tính thành block.
	document.getElementById('modal1').style.display = 'block';
	
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giữ liệu lưu trữ của key 'bill' trong localStorage.
	var billArray = JSON.parse(localStorage.getItem('bill'));
	
	//tạo nút button góc phải trên 'x' để ẩn chi tiết đơn hàng.
	var s='<button class="close" onClick="closeinfobill()">&times;</button>';
	for (var i = 0; i < billArray.length; i++) {
		//nếu id của sản phẩm tại vị trí i trong mảng billArray của localStorage khớp với id truyền vào thì...
		if(billArray[i].id==id){
			//tạo tiêu đề và in ra chi tiết đơn hàng
			s +='<h1>INFOMATION BILL</h1>'+ '<br/>' + '<br/>' +
				'<h3>PRODUCTS NAME: </h3>'+ '<br/>' +
				'<p>'+billArray[i].info+'</p>';
			
			//tạo nút button 'CONFIRM BILL' để xác nhận và đóng chi tiết đơn hàng.
			s+='<button class="closebtn" onClick="closeinfobill();">CONFIRM BILL</button>';
		}
	}
	document.getElementById('info').innerHTML = s; //in chuỗi s ra.
}
	/*=========== HIỂN THỊ CHI TIẾT - END ============*/

	/*=========== ẨN CHI TIẾT ============*/
function closeinfobill(){
	
	document.getElementById('modal1').style.display = 'none';
}
	/*=========== ẨN CHI TIẾT - END ============*/
/*=========================== PHẦN CHI TIẾT ĐƠN HÀNG - END ===============================*/

/*=========================== PHẦN TÌM KIẾM ĐƠN HÀNG ===============================*/
function searchBill(){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'bill' trong localStorage.
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var status =document.getElementById('statussearch').value; //lấy trạng thái ở options search
	var billArrayTemp = []; //tạo mảng phụ
	
	//duyệt mảng chính trong localStorage.
	for (var i = 0; i < billArray.length; i++) {
		//nếu trạng thái trong options search khớp với trạng thái của đơn hàng tại vị trí i thì..
		if(status==billArray[i].status) {
			//push(): thêm vào cuối mảng, trả về chiều dài mới của mảng.
			billArrayTemp.push(billArray[i]); //thêm đơn hàng tại vị trí i đó vào cuối mảng phụ(billArrayTemp).
		}
	}
	
	//tạo tiêu đề cho bảng danh sách đơn hàng.
	var s='<th>DATE</th><th>CUSTOMER</th><th>ADDRESS</th><th>NUMBER PHONE</th><th>PRICE</th><th>STATUS</th>';
	
	//duyệt mảng phụ
	for(var i=0;i<billArrayTemp.length;i++){
		//nếu trạng thái của đơn hàng tại vị trí i bằng Unconfimred thì..
		if(billArrayTemp[i].status=="Unconfimred"){
			//cộng chuỗi vào chuỗi tiêu đề (chuỗi cộng vào là dòng hiển thị trong bảng)
			s+='<tr>'+
						'<td>'+billArray[i].date+'</td>'+	//NGÀY THÁNG NĂM
						'<td>'+billArray[i].customer.fullname+'</td>'+	//TÊN KHÁCH HÀNG
						'<td>'+billArray[i].customer.address+'</td>'+	//ĐỊA CHỈ
						'<td>'+billArray[i].customer.phone+'</td>'+		//SỐ ĐIỆN THOẠI
						'<td>'+ '$' + currency(billArray[i].totalprice)+'</td>'+	//GIÁ TIỀN
						'<td>'+
							'<div>'+
								//hiển thị trạng thái chưa xác nhận (Unconfimred) màu đỏ
								'<span id="status" style="color:red">'+billArray[i].status+'</span>'+
									'<label>'+
										//tạo nút checkbox
										'<input type="checkbox" onchange="changeStatus(this,'+billArray[i].id+')" onClick="showinfobill('+billArray[i].id+')">'+
									'</label>'+
							'</div>'+
				'</tr>';
		}
		//ngược lại nếu trạng thái của đơn hàng tại vị trí i bằng Confimred thì..
		else {
			//cộng chuỗi vào chuỗi tiêu đề (chuỗi cộng vào là dòng hiển thị trong bảng)
			s+='<tr>'+
						'<td>'+billArray[i].date+'</td>'+	//NGÀY THÁNG NĂM
						'<td>'+billArray[i].customer.fullname+'</td>'+ //TÊN KHÁCH HÀNG
						'<td>'+billArray[i].customer.address+'</td>'+	//ĐỊA CHỈ
						'<td>'+billArray[i].customer.phone+'</td>'+		//SỐ ĐIỆN THOẠI
						'<td>'+'$'+currency(billArray[i].totalprice)+'</td>'+	//GIÁ TIỀN
						'<td>'+
							'<div>'+
								//hiển thị trạng thái đã xác nhận (Confimred) màu xanh
								'<span id="status" style="color:blue">'+billArray[i].status+'</span>'+
									'<label>'+
										//tạo nút checkbox
										'<input type="checkbox" checked onchange="changeStatus(this,'+billArray[i].id+')">'+
									'</label>'+
							'</div>'+
					'</tr>';
		}
	}
	document.getElementById('billlist').innerHTML=s; //in chuỗi s ra.
}
/*=========================== PHẦN TÌM KIẾM ĐƠN HÀNG - END ===============================*/

/*=========================== PHẦN CHUYỂN ĐỔI TRẠNG THÁI ĐƠN HÀNG ===============================*/
function changeStatus(checkbox,id){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'bill' trong localStorage.
	var billArray = JSON.parse(localStorage.getItem('bill'));
	
	//nếu nút checkbox được check vào thì
	if (checkbox.checked==true) {
		for (var i = 0; i < billArray.length; i++) {
			//nếu id của đơn hàng tại vị trí i khớp với id truyền vào thì đổi trạng thái đơn hàng
			if(billArray[i].id==id){
				billArray[i].status = 'Confimred'; //gán trạng thái mới.
			}
		}
		document.getElementById('status').innerHTML="Confimred"; //in ra trạng thái mới
		document.getElementById('status').style.color = 'blue';	//truy xuất đến thuộc tính color trong CSS đổi lại thành màu blue.
	}
	
	//ngược lại nếu ko checkbox thì..
	else {
		for (var i = 0; i < billArray.length; i++) {
			//nếu id của đơn hàng tại vị trí i khớp với id truyền vào thì giữ nguyên trạng thái đơn hàng
			if(billArray[i].id==id){
				billArray[i].status = 'Unconfimred';
			}
		}
		document.getElementById('status').innerHTML="Unconfimred"; //in ra trạng thái ban đầu
		document.getElementById('status').style.color = 'red';	////truy xuất đến thuộc tính color trong CSS đổi lại thành màu red.
	}
	
	//setItem(): đặt lại giá trị lưu trữ của key 'bill' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('bill',JSON.stringify(billArray));
	showbilllist();  //gọi hàm showbill().
}
/*=========================== PHẦN CHUYỂN ĐỔI TRẠNG THÁI ĐƠN HÀNG - END ===============================*/


/*=========================== PHẦN DANH SÁCH KHÁCH HÀNG ===============================*/
function showUserList(){
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorage.
	//nếu giá trị đó hoàn toàn rỗng thì return false.
	if(localStorage.getItem('user')===null){
		return false;
	}
	
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorgae.
	var userArray = JSON.parse(localStorage.getItem('user'));
	
	//hiển thị tiêu đề của bảng danh sách khách hàng.
	var tr='<tr>'+
				'<th>STT</th>'+						//SỐ THỨ TỰ
				'<th>FULL NAME CUSTOMER</th>'+		//TÊN KHÁCH HÀNG
				'<th>USERNAME</th>'+				//TÊN ĐĂNG NHẬP
				'<th>DATE SIGNUP</th>'+				//NGÀY TẠO TÀI KHOẢN
				'<th>ACTIVE</th>'+					//TRẠNG THÁI 
		  '</tr>';
	
	//cộng chuỗi thông tin khách hàng vào chuỗi tiêu đề.
	for(var i=1; i<userArray.length;i++){
		tr+='<tr>'+
				 '<td>'+i+'</td>'+    						//SỐ THỨ TỰ
				 '<td>'+userArray[i].fullname+'</td>'+		//TÊN KHÁCH HÀNG
			 	 '<td>'+userArray[i].username+'</td>'+		//TÊN ĐĂNG NHẬP
				 '<td>'+userArray[i].datesignup+'</td>'+	//NGÀY TẠO TÀI KHOẢN
				 '<td>'+
						//tạo nút button xóa tài khoản khách hàng
					  '<button class="delete" onClick="deleteuser(\''+userArray[i].username+'\')">DELETE</button>'+
				 '</td>'+
			'</tr>';
	}
	document.getElementById('userlist').innerHTML=tr;	//in chuỗi s ra.
}
/*=========================== PHẦN DANH SÁCH KHÁCH HÀNG - END ===============================*/


/*=========================== PHẦN XÓA KHÁCH HÀNG ===============================*/
function deleteuser(usernamedelete){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'user' trong localStorage.
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		//nếu username trong mảng userArray của localStorage ở vị trí i khớp với usernamedetele được truyền vào thì
		if(userArray[i].username == usernamedelete){
			//hiển thị bảng cảnh báo lựa chọn xóa hoặc không (Hỏi trước khi xóa)
			if(confirm('DO YOU REALLY WANT TO DELETE THIS ACCOUNT?')){
				//splice(): xóa 1 phần tử trong mảng userArray tại vị trí i. Trả về độ dài mới của mảng
				userArray.splice(i, 1);
			}
		}
	}
	
	//setItem(): đặt lại giá trị cho key 'user' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();		//gọi hàm showUserList();
}
/*=========================== PHẦN XÓA KHÁCH HÀNG - END ===============================*/

/*=========================== PHẦN TÌM KIẾM SẢN PHẨM ===============================*/
function searchproduct(){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	
	//toLowerCase(): dùng chuẩn hóa từ sang chữ thường hết. 
	//toUpperCase(): dùng chuẩn hóa từ sang chữ hoa hết.
	var name = document.getElementById('searchproductname').value.toLowerCase();
	var brand = document.getElementById('searchproductbrand').value.toLowerCase();
	
	//tạo chuỗi tiêu đề bảng danh sách sản phẩm
	var s='<tr>'+
				'<th>PRODUCT ID</th>'+		//ID SẢN PHẨM
				'<th>IMAGE</th>'+			//ẢNH SẢN PHẨM
				'<th>PRODUCTS NAME</th>'+	//TÊN SẢN PHẨM
				'<th>COTEGORY</th>'+		//LOẠI SẢN PHẨM
				'<th>PRICE</th>'+			//GIÁ SẢN PHẨM
				'<th>ACTIVE</th>'+			//HÀNH ĐỘNG
		 '</tr>';
	
		//nếu mã thể loại bằng 'all' thì
		if (brand=='all') {
			//nếu khác tên sản phẩm trong ô search 
			if(!name){
				showProductList(0); //showProductList() ở vị trí 0
			}
			
			//ngược lại nếu trùng thì
			else {
				for(var i = 0; i < productArray.length; i++) {
					//nếu có ít hơn hoặc bằng 0 tên sản phẩm trong mảng productArray khớp với tên sản phẩm trong ô search thì..
					if (productArray[i].name.toLowerCase().search(name) >=0) {
						//cộng chuỗi vào chuỗi tiêu đề.
						s+='<tr>'+
								'<td>'+productArray[i].productId+'</td>'+	//id sản phẩm
								'<td>'+
									'<img src="../'+productArray[i].img+'">'+	//ảnh sản phẩm
								'</td>'+
								'<td>'+productArray[i].name+'</td>'+		//tên sản phẩm
								'<td>'+productArray[i].brand+'</td>'+		//mã thể loại
								'<td>'+'$'+currency(productArray[i].price)+'</td>'+	//giá tiền
								'<td>'+
									//tạo nút button xóa sản phẩm
									'<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')">DELETE</button>'+
									
									//tạo nút button chỉnh sửa thông tin sản phẩm
									'<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')">EDIT</button>'+
								'</td>'+
						  '</tr>';
					}
				}
				document.getElementById('productlist').innerHTML=s;	 //in chuỗi s ra.
			}
		}
		
		//ngược lại, nếu mã thể loại khác 'all' thì
		else{
			for(var i = 0; i < productArray.length; i++) {
						//nếu có nhiều hơn hoặc bằng 0 tên sản phẩm trong mảng productArray khớp với tên sản phẩm trong ô search và mã thể loại của sản phẩm trong mảng productArray khớp với mã sản phẩm trong ô search thì..
						if (productArray[i].name.toLowerCase().search(name)  >=0  && productArray[i].brand==brand) {
							//cộng chuỗi vào chuỗi tiêu đề.
							s+='<tr>'+
									'<td>'+productArray[i].productId+'</td>'+  //id sản phẩm
									'<td><img src="../'+productArray[i].img+'"></td>'+	//link đến ảnh
									'<td>'+productArray[i].name+'</td>'+	//tên sản phẩm
									'<td>'+productArray[i].brand.toUpperCase()+'</td>'+ 	//mã thể loại
									'<td>'+'$'+currency(productArray[i].price)+'</td>'+	//giá tiền
									'<td>'+
										//tạo nút button xóa sản phẩm
										'<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')">DELETE</button>'+
								
										//tạo nút button chỉnh sửa sản phẩm
										'<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')">EDIT</button>'+
									'</td>'+
							  '</tr>';
						}
			}
			document.getElementById('productlist').innerHTML=s; //in chuỗi s ra.
		}
}
/*=========================== PHẦN TÌM KIẾM SẢN PHẨM - END ===============================*/


/*=========================== PHẦN HIỂN THỊ DANH SÁCH SẢN PHẨM ===============================*/
function showProductList(vitri){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	
	//tạo chuỗi tiêu đề của bảng danh sách sản phẩm
	var s='<tr><th>PRODUCT ID</th><th>IMAGE</th><th>PRODUCTS NAME</th><th>COTEGORY</th><th>PRICE</th><th>ACTIVE</th></tr>';
	var dem = 0;
	for(var i=vitri;i<productArray.length;i++){
		s+='<tr>'+
				'<td>'+productArray[i].productId+'</td>'+		//id sản phẩm
				'<td><img src="../'+productArray[i].img+'"></td>'+	//link đến ảnh
				'<td>'+productArray[i].name+'</td>'+		//tên sản phẩm
				'<td>'+productArray[i].brand.toUpperCase()+'</td>'+	//mã thể loại được in hoa
				'<td>'+ '$' +currency(productArray[i].price)+'</td>'+ //giá tiền
				'<td>'+
					//tạo nút button xóa sản phẩm
					'<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')">DELETE</button>'+
			
					//tạo nút button chỉnh sửa sản phẩm
					'<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')">EDIT</button>'+
				'</td>'+
		  '</tr>';
		dem++;
		
		//nếu đếm đủ 10 sản phẩm trong 1 phân trang thì break sang trang khác.
		if(dem==10){
			break;
		}
	}
	document.getElementById('productlist').innerHTML=s; //in chuỗi s ra.
	setPagination();	//gọi hàm setPagination() // hàm phân trang.
}
/*=========================== PHẦN HIỂN THỊ DANH SÁCH SẢN PHẨM - END ===============================*/

/*======================== PHẦN XÓA SẢN PHẨM TRONG DANH SÁCH SẢN PHẨM ============================*/
function deleteproduct(productiddelete){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	var vitri;
	for(var i=0;i<productArray.length;i++){
		//nếu id sản phẩm trong mảng userArray của localStorage ở vị trí i khớp với id được truyền vào thì..
		if(productArray[i].productId == productiddelete){
			if(confirm('DO YOU REALLY WANT TO DELETE THIS PRODUCT?')){
				//splice(): thêm/xóa phẩn từ của mảng, trả về chiều dài mới của mảng
				productArray.splice(i, 1); //xóa 1 phần tử tại vị trí i, trả về chiều dài mới của mảng
			}
		vitri=(Math.floor(i/10)*10); //Phương thức floor() làm tròn một số đến số nguyên gần nhất và trả về kết quả.
		}
	}
	
	//setItem(): đặt lại giá trị cho key 'user' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('product',JSON.stringify(productArray));
	showProductList(vitri);  //gọi hàm showProductList() tại vị trí vitri.
}
/*======================== PHẦN XÓA SẢN PHẨM TRONG DANH SÁCH SẢN PHẨM - END ============================*/

/*======================== PHẦN PHÂN TRANG TRONG DANH SÁCH SẢN PHẨM ============================*/
function setPagination(){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	
	//Phương thức ceil() làm tròn một số đến số nguyên gần nhất và trả về kết quả.
	var sotrang=Math.ceil(productArray.length/10);
		var button='';
		for(var i = 1;i<=sotrang;i++){
			vitri=(i-1)*10;
			
			//tạo nút button số trang
			button += '<button class="pageNumber" onClick="showProductList('+vitri+')">'+i+'</button>';
		}
	document.getElementById('pagination').innerHTML = button; //in chuỗi button ra.
}
/*======================== PHẦN PHÂN TRANG TRONG DANH SÁCH SẢN PHẨM - END ============================*/

/*=================== PHẦN HIỂN THỊ DANH SÁCH SẢN PHẨM SAU KHI THÊM SẢN PHẨM MỚI =====================*/
function showchangeproductbox(productid){
	//truy xuất đến thuộc tính display trong CSS của id 'modal1' đổi thành block.
 	document.getElementById('modal1').style.display = 'block';
	
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		//nếu id sản phẩm trong mảng userArray của localStorage ở vị trí i khớp với id được truyền vào thì..
		if(productArray[i].productId == productid){
			document.getElementById('imgbefore').src="../"+productArray[i].img;		//link dẫn ảnh
			document.getElementById('imgafter').src="Image/product/temp2.png";	//link dẫn ảnh
			document.getElementById('name').value=productArray[i].name;			//tên của sản phẩm mới
			document.getElementById('price').value=productArray[i].price;		//giá của sản phẩm mới
			document.getElementById('save').setAttribute('onClick', 			'changeproduct('+productArray[i].productId+')');  //Phương thức setAttribution() thêm thuộc tính được chỉ định vào một phần tử và cung cấp cho nó giá trị được chỉ định. 
		}
	}
}
/*=============== PHẦN HIỂN THỊ DANH SÁCH SẢN PHẨM SAU KHI THÊM SẢN PHẨM MỚI - END ==================*/

/*======================== PHẦN CHỈNH SỬA SẢN PHẨM TRONG DANH SÁCH SẢN PHẨM =========================*/
	/*=========== PHẦN ĐỔI THÔNG TIN SẢN PHẨM ==========*/
function changeproduct(productid){
	//truy xuất đến thuộc tính display trong CSS của id 'modal1' đổi thành none.
	document.getElementById('modal1').style.display = 'none';
	
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	var vitri;
	for(var i=0;i<productArray.length;i++){
		//nếu id sản phẩm trong mảng userArray của localStorage ở vị trí i khớp với id được truyền vào thì..
		if(productArray[i].productId == productid){
			productArray[i].img=document.getElementById('imgbefore').src; 	//link dẫn ảnh mới
			productArray[i].name=document.getElementById('name').value;		//tên mới của sản phẩm
			productArray[i].price=document.getElementById('price').value;	//giá mới của sản phẩm
			
			//Phương thức floor() làm tròn một số đến số nguyên gần nhất và trả về kết quả.
			vitri = (Math.floor(i/10))*10;
		}
	}
	
	//setItem(): đặt lại giá trị cho key 'user' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('product', JSON.stringify(productArray));
	showProductList(vitri);		//gọi hàm showProductList() tại vị trí vitri.
}
	/*=========== PHẦN ĐỔI THÔNG TIN SẢN PHẨM - END ==========*/

	/*=========== PHẦN ĐỔI ẢNH SẢN PHẨM ==========*/
function changeimg(input){
	
	//khai báo hàm khởi tạo interface FileReader()
    var reader = new FileReader();
	
	//Gọi lại từ <input type = "file" onchange = "onChange (event)">
    reader.onload = function (e) {
        document.getElementById('imgafter').src = e.target.result;
    };
	
	//readAsDataURL(): Kết quả là một chuỗi có dữ liệu: URL đại diện cho dữ liệu của tệp.
    reader.readAsDataURL(input.files[0]);
}
	/*=========== PHẦN ĐỔI ẢNH SẢN PHẨM - END ==========*/

	/*=========== PHẦN ẨN FORM CHỈNH SỬA SẢN PHẨM ==========*/
function closechangebox(){

	document.getElementById('modal1').style.display = 'none';
}
	/*=========== PHẦN ẨN FORM CHỈNH SỬA SẢN PHẨM ==========*/
/*==================== PHẦN CHỈNH SỬA SẢN PHẨM TRONG DANH SÁCH SẢN PHẨM - END =======================*/

/*==================== PHẦN THÊM SẢN PHẨM TRONG DANH SÁCH SẢN PHẨM =======================*/
	/*=========== PHẦN THÊM ẢNH SẢN PHẨM MỚI ==========*/
function changeimgadd(input){
	//khai báo hàm khởi tạo interface FileReader()
    var reader = new FileReader();
	
	//Gọi lại từ <input type = "file" onchange = "onChange (event)">
    reader.onload = function (e) {
        document.getElementById('imgadd').src = e.target.result;
    };
	
	//readAsDataURL(): Kết quả là một chuỗi có dữ liệu: URL đại diện cho dữ liệu của tệp.
    reader.readAsDataURL(input.files[0]);
}
	/*=========== PHẦN THÊM ẢNH SẢN PHẨM MỚI - END ==========*/

	/*=========== PHẦN THÊM THÔNG TIN SẢN PHẨM MỚI ==========*/
function addProduct(){
	//JSON.parse(): nhận chuỗi dữ liệu chuyển nó sang dạng đối tượng JS.
	//getItem(): lấy giá trị lưu trữ của key 'product' trong localStorage.
	var productArray = JSON.parse(localStorage.getItem('product'));
	var productid = productArray[0].productId+1;	//id sản phẩm mới sẽ là id của sản phẩm tại vị trí 0(vị trí đầu mảng) cộng thêm 1.
	var productname = document.getElementById('productname');	//tên sản phẩm mới lấy từ form
	var brand = document.getElementById('brand');				//mã sản phẩm mới lấy từ form
	var price = document.getElementById('productprice');		//giá sản phẩm mới lấy từ form
	
	//nếu mã thể loại hoặc tên sản phẩm hoặc giá tiền không đúng
	if(!brand.value || !productname.value || !price.value){
		alert('PRODUCT INFORMATION IS NOT COMPLETE!');
		return false;
	   }
	
	//isNaN(Number()): là phương thức xác định xem có chính xác là số không
	//nếu hàm này trả về true tức là không phải là số thì hiển thị thông báo lỗi.
	if(isNaN(Number(price.value))){
		alert('THE PRICE IS NOT VALID!');
		return false;
	   }
	var producttemp = {
						productId: productid, 
						brand: brand.value, 
						img:'Images/product/temp.png', 
						name: productname.value, 
						price: price.value
					  };
	
	//unshift(): thêm 1 phần từ vào đầu mảng, trả về độ dài mới của mảng.
	productArray.unshift(producttemp);
	
	//setItem(): đặt lại giá trị cho key 'user' trong localStorage.
	//JSON.stringify(): chuyển đối tượng JS sang dạng chuỗi để lưu trữ. Vì máy chủ server hay localStorage chỉ nhận dữ liệu lưu trữ ở dạng chuỗi.
	localStorage.setItem('product',JSON.stringify(productArray));
	showProductList(0);		//gọi hàm showProductList() ở vị trí 0.
	alert('ADD SUCCESSFUL PRODUCT!','success');
}
	/*=========== PHẦN THÊM THÔNG TIN SẢN PHẨM MỚI - END ==========*/
/*==================== PHẦN THÊM SẢN PHẨM TRONG DANH SÁCH SẢN PHẨM - END =======================*/