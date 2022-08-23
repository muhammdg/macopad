setInterval(function () {
    fetch("http://localhost:8080/api")
      .then((hasil) => hasil.json())
      .then((res) => {
        console.log(res);
        document.getElementById("temp").innerHTML = res.Suhu;
        document.getElementById("fan").innerHTML = res.Kipas;

        
      });
  }, 1000);

  //set interval untuk refresh otomatis dengan delay 1 detik
  //