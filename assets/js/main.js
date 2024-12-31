function signup(e) {
  event.preventDefault();
  var username = document.getElementsById("username").value;
  var email = document.getElementsById("email").value;
  var password = document.getElementsById("password").value;
  var user = {
    username: username,
    email: email,
    password: password,
  };
  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("đăng ký thành công");
}

function validateLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const validUsernameadmin = "adminHCMUEAT"; 
  const validPasswordadmin = "123456789";
  const validUsernameuser = "userHCMUEAT"; 
  const validPassworduser = "hcmueat";
  if (username === validUsernameadmin && password === validPasswordadmin) {
    alert("Chúc mừng bạn đã đăng nhập trang quản lý thành công.")
    window.location.href = "02_dashboard admin.html"; 
  } else if (username === validUsernameuser && password === validPassworduser) {
    alert("Chúc mừng bạn đã đăng nhập thành công! Hãy thưởng thức những món ăn tuyệt ngon bên chúng tôi nhé!")
    window.location.href = "01_Page HCMUEAT.html";
  } else {
    alert("Tên đăng nhập hoặc mật khẩu bạn nhập không đúng. Hãy kiểm tra lại nhé!")
    document.getElementById("error-message").style.display = "block";
  }
}

function test(){
  alert("Kiểm tra mật khẩu thành công. Tên đăng nhập mới của bạn là: userHCMUEAT. Mật khẩu mới của bạn là: hcmueat");
  window.location.href = "01_login.html";
}
function reGister(){
  alert("Chúc mừng bạn đã đăng ký thành công. Hãy đăng nhập để thưởng thức những món ăn ngon của chúng tôi nhé!");
  window.location.href = "01_login.html";
}



