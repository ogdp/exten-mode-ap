function auto_mode_theme() {
  const row_le = document.getElementsByClassName("odd");
  const row_chan = document.getElementsByClassName("even");
  const arr_row_le = [...row_le];
  const arr_row_chan = [...row_chan];
  for (let i = 0; i < arr_row_le.length; i++) {
    let lichhoc = arr_row_le[i].childNodes[16].innerHTML;
    if (lichhoc < 7) {
      let timkiemThu = arr_row_le[i].childNodes[2].innerHTML;
      if (timkiemThu.indexOf("thứ hai") != -1) {
        // console.log('đã thấy thứ hai');
        arr_row_le[i].style.backgroundColor = "rgb(84, 195, 39,0.3)";
      } else if (timkiemThu.indexOf("thứ ba") != -1) {
        // console.log('đã thấy thứ ba');
        arr_row_le[i].style.backgroundColor = "rgb(121, 54, 180,0.3)";
      } else if (timkiemThu.indexOf("thứ tư") != -1) {
        // console.log('đã thấy thứ tư');
        arr_row_le[i].style.backgroundColor = "rgb(255 ,133 ,21 , 0.2)";
      } else if (timkiemThu.indexOf("thứ năm") != -1) {
        // console.log('đã thấy thứ nam');
        arr_row_le[i].style.backgroundColor = "rgb(143, 29, 33,0.3)";
      } else if (timkiemThu.indexOf("thứ sáu") != -1) {
        // console.log('đã thấy thứ sáu');
        arr_row_le[i].style.backgroundColor = "rgb(255, 255, 102, 0.3)";
      } else if (timkiemThu.indexOf("thứ bảy") != -1) {
        // console.log('đã thấy thứ bảy');
        arr_row_le[i].style.backgroundColor = "rgb(200, 34, 76,0.3)";
      } else if (timkiemThu.indexOf("chủ nhật") != -1) {
        // console.log('đã thấy chủ nhật');
        arr_row_le[i].style.backgroundColor = " rgb(166, 214, 8, 0.3)";
      }
      // Hiển thị một màu
      // arr_row_le[i].style.backgroundColor = "rgb(255 ,133 ,21 , 0.1)";
    }
  }
  for (let i = 0; i < arr_row_chan.length; i++) {
    let lichhoc = arr_row_chan[i].childNodes[16].innerHTML;
    if (lichhoc < 7) {
      let timkiemThu = arr_row_chan[i].childNodes[2].innerHTML;
      if (timkiemThu.indexOf("thứ hai") != -1) {
        // console.log('đã thấy thứ hai');
        arr_row_chan[i].style.backgroundColor = "rgb(84, 195, 39,0.3)";
      } else if (timkiemThu.indexOf("thứ ba") != -1) {
        // console.log('đã thấy thứ ba');
        arr_row_chan[i].style.backgroundColor = "rgb(121, 54, 180,0.3)";
      } else if (timkiemThu.indexOf("thứ tư") != -1) {
        // console.log('đã thấy thứ tư');
        arr_row_chan[i].style.backgroundColor = "rgb(255 ,133 ,21 , 0.2)";
      } else if (timkiemThu.indexOf("thứ năm") != -1) {
        // console.log('đã thấy thứ nam');
        arr_row_chan[i].style.backgroundColor = "rgb(143, 29, 33,0.3)";
      } else if (timkiemThu.indexOf("thứ sáu") != -1) {
        // console.log('đã thấy thứ sáu');
        arr_row_chan[i].style.backgroundColor = "rgb(255, 255, 102, 0.3)";
      } else if (timkiemThu.indexOf("thứ bảy") != -1) {
        // console.log('đã thấy thứ bảy');
        arr_row_chan[i].style.backgroundColor = "rgb(200, 34, 76,0.3)";
      } else if (timkiemThu.indexOf("chủ nhật") != -1) {
        // console.log('đã thấy chủ nhật');
        arr_row_chan[i].style.backgroundColor = " rgb(166, 214, 8, 0.3)";
      }
    }
  }
}
// auto_mode_theme();
setInterval(auto_mode_theme, 500);
