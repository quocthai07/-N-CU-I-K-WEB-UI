
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

menuBtn.addEventListener('click', ()=>{
  sideMenu.style.display = "block";
});
closeBtn.addEventListener('click', ()=>{
  sideMenu.style.display = "none";
});
  
function updateOrderStatus(buttonElement){
  const row = buttonElement.closest('tr');
  const statusSelect = row.querySelector('.status-select');
  const status = statusSelect.value;
  alert("Trạng thái đơn hàng đã được cập nhật: " + status);
}

function logOut(){
  alert('Bạn đã đăng xuất. Hãy đăng nhập để tiếp tục sử dụng chức năng quản lý nhé!');
  window.location.href='01_login.html';
}

const addP = document.querySelector('#add_products');
const show = document.querySelector('#recent_add');

addP.addEventListener('click', ()=>{
  show.style.display = "block";
});





var data=[]
function add(){
    var item_id = document.getElementById('id').value
    var item_name = document.getElementById('name').value
    var item_chitiet = document.getElementById('chitiet').value
    var item_gia = document.getElementById('gia').value


    var item = {
        Id :item_id,
        Name : item_name, 
        Chitiet : item_chitiet, 
        Gia : item_gia
    }

    let index = data.findIndex((c)=> c.Id == item.Id)
    if (index >= 0){
        data.splice(index, 1, item);
    }else{
        data.push(item);
    }

    
    render();
    clear();
}

function render() {
  let table = `<tr>
      <th>Mã sản phẩm</th>
      <th>Tên món ăn</th>
      <th>Chi tiết</th>
      <th>Đơn giá</th>
      <th>Chỉnh sửa</th>                          
  </tr>`;

  
  for (let i = 0; i < data.length; i++) {
      
      if (data[i].Id.trim() === "" || data[i].Chitiet.trim() === "" || data[i].Gia.trim() === "" ) {
          alert('Hãy nhập đủ thông tin để thêm món ăn mới.');
          return;  
      }

      table += `<tr>
          <td>${data[i].Id}</td>
          <td>${data[i].Name}</td>
          <td>${data[i].Chitiet}</td>
          <td>${data[i].Gia}</td>
          <td>
              <button onclick="deleteItem(${data[i].Id})">Xóa</button>
              <button onclick="editItem(${data[i].Id})">Chỉnh sửa</button>
          </td>
      </tr>`;
  }
  document.getElementById("render").innerHTML = table;
}

function clear(){
    document.getElementById('id').value = " ";
    document.getElementById('name').value = " ";
    document.getElementById('chitiet').value = " ";
    document.getElementById('gia').value = " ";

}
function deleteItem(x){
    for (let i = 0; i < data.length; i++){
        if (data[i].Id == x){
            data.splice(i,1);
            render();
        }
    }
}
function editItem(y){
    for (let i = 0; i < data.length; i++){
        if (data[i].Id == y){
            document.getElementById('id').value = data[i].Id;
            document.getElementById('name').value = data[i].Name;
            document.getElementById('chitiet').value = data[i].Chitiet;
            document.getElementById('gia').value = data[i].Gia;           
        }
    }    
}
