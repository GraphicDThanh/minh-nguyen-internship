document.body.style.fontFamily = "Arial, sans-serif";
document.getElementById("nickname").innerHTML = "Minh Nguyen";
document.getElementById("favorites").innerHTML = "22";
document.getElementById("hometown").innerHTML = "Da Nang";
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].className = "listitem";
}

var myPic = document.createElement("img");
myPic.src =
  "https://laodongtre.laodong.vn/phim-anh/giai-ma-suc-hut-thuong-hieu-conan-qua-3-thap-ky-1067083.ldo";
document.body.appendChild(myPic);
