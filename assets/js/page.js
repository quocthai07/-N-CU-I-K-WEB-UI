document.getElementById("showcart").style.display = "none";

var giohang = new Array();



function themvaogiohang(x) {
    alert("Bạn đã thêm vào giỏ hàng thành công.")
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].src;
    var tensp = boxsp[1].children[0].innerText;
    var gia = parseInt(boxsp[1].children[1].innerText);
    var sp = new Array(hinh, tensp, gia);

    giohang.push(sp);
    
    console.log(giohang);
    showcountsp();

    sessionStorage.setItem("giohang", JSON.stringify(giohang));
} 

function xemthem(x) {
    var boxsp = x.parentElement.children;
    var hinh = boxsp[0].src;
    var tensp = boxsp[1].children[0].innerText;
    var gia = parseInt(boxsp[1].children[1].innerText);
    var sp = new Array(hinh, tensp, gia);

    giohang.push(sp);
    
    console.log(giohang);
    showcountsp();

    sessionStorage.setItem("giohang", JSON.stringify(giohang));
} 



function showcountsp() {
    document.getElementById("cart-count").innerHTML = giohang.length;
}

function showmycart() {
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        tong += giohang[i][2];
        ttgh += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + giohang[i][0] + '" alt="Product image" width="100"></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][2] + ".000đ" + '</td>' +
            '</tr>';
    }
    ttgh += '<tr>' +
        '<th colspan="3">Tổng Đơn Hàng</th>' +
        '<th>' + tong + ".000đ" + '</th>' +
        '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
}

function showcart() {
    var x = document.getElementById("showcart");
    var y = document.getElementById("abc");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "flex";
    }
    showmycart();
}


function showgiohang_tranggiohang() {
    var gh = sessionStorage.getItem("giohang");
    if (!gh) return;
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    var finalTotal = 0;

    
    var discount = 0; 
    var button = document.getElementById("apDung");
    var validVoucher = "thayTrungdeptrainhathcmue".trim(); 
    var discountAmount = 1; 



    for (let i = 0; i < giohang.length; i++) {
        tong += giohang[i][2];

        ttgh += '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td><img src="' + giohang[i][0] + '" alt="Product image" width="100"></td>' +
            '<td>' + giohang[i][1] + '</td>' +
            '<td>' + giohang[i][2] + ".000đ" + '</td>' +
            '<td><button onclick="removeItem(' + i + ')">Xóa</button></td>' +
            '</tr>';
    }

    ttgh += '<tr>' +
        '<th colspan="3">Tổng Đơn Hàng</th>' +
        '<th>' + tong + ".000đ" + '</th>' +
        '</tr>';

  
    document.getElementById("mycart").innerHTML = ttgh;


    button.addEventListener("click", function() {
        var voucherCode = document.getElementById("voucher-code").value.trim();

        console.log("Voucher Code nhập vào: ", voucherCode); 


        if (voucherCode === "") {
            alert("Vui lòng nhập mã voucher!");
        }else if (voucherCode.toLowerCase() === validVoucher.toLowerCase()) {
            alert("Mã voucher bạn nhập hợp lệ! Chúc mừng bạn được giảm 100%.");
            discount = discountAmount;
        } else {
            alert("Mã voucher bạn nhập không hợp lệ! Bạn sẽ không được giảm giá.");
            discount = 0;
        }


        finalTotal = tong - (tong * discount);

        document.getElementById("total-price").innerText = finalTotal + ".000đ";
    });

    document.getElementById("total-price").innerText = tong + ".000đ";
}


    



function removeItem(index) {
    var gh = sessionStorage.getItem("giohang");
    if (!gh) return;
    var giohang = JSON.parse(gh);
    giohang.splice(index, 1); 
    sessionStorage.setItem("giohang", JSON.stringify(giohang));


    showgiohang_tranggiohang();
}


function showcart() {
    var x = document.getElementById("showcart");
    var y = document.getElementById("abc");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        y.style.display = "flex";
    }
    showmycart();
}


function dathang() {
    var ttnh = document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var dienthoai = ttnh[1].children[1].children[0].value;
    var diachi = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;

    if (hoten.trim() === "" || dienthoai.trim() === "" || diachi.trim() === "" || email.trim() === "") {
        alert('Vui lòng nhập đầy đủ thông tin để chúng tôi có thể xử lý đơn hàng.');
    } else {
        var nguoinhan = new Array(hoten, dienthoai, diachi, email);
        console.log(nguoinhan);
        sessionStorage.setItem("nguoinhan", JSON.stringify(nguoinhan));
        window.location.assign("01_thanhcong.html");
    }
}
function showthongtinnguoinhan() {
    var nguoinhan = sessionStorage.getItem("nguoinhan");
    var thongtin = JSON.parse(nguoinhan);

    var tt = '<tr>'+
            '<td>Họ&Tên</td>'+
            '<td>' + thongtin[0] + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>SĐT</td>'+
            '<td>' + thongtin[1] + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Địa Chỉ</td>'+
            '<td>' + thongtin[2] + '</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Ghi chú</td>'+
            '<td>' + thongtin[3] + '</td>'+
        '</tr>';

    document.getElementById("thongtinnhanhang").innerHTML= tt;
 }

 function logOut(){
    alert('Bạn đã đăng xuất. Hãy đăng nhập để tiếp tục thưởng thức nhé!');
}

