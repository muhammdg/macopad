setInterval(function () {
    fetch("http://https://macopad.herokuapp.com/dashboard.html/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("suhu").innerHTML = res.Suhu;
        document.getElementById("kipas").innerHTML = res.Kipas;

        
      });
  }, 1000);

  //set interval untuk refresh otomatis dengan delay 1 detik
  //
