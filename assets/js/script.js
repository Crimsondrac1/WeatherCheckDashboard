var button = document.querySelector("#sButton");
var city = document.querySelector("#inCity");
var subCity = document.getElementById("inCity").value;
var list = document.getElementById("cList");
var fromStorage = localStorage.getItem(subCity);

function pageLoad() {
  if (localStorage.length < 1) {
    submitForm();
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let keyVal = `${key}`;
      var elmt = document.createElement("div");
      elmt.textContent = key;
      elmt.classList.add(
        "is-size-3",
        "has-background-grey",
        "has-text-white",
        "has-text-centered",
        "is-vcentered",
        "p-3",
        "mb-3"
      );
      elmt.id = key;
      list.appendChild(elmt);
    }
  }
}

function weathCheck(cityName) {
  var subCity = document.getElementById("inCity").value;
  var apiKey = "e0130f4883633fe11cda4ea61821cc8e";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      subCity +
      "&appid=" +
      apiKey +
      "&units=imperial"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      var lon = data.coord.lon;
      var lat = data.coord.lat;
      var cityName = data.name;

      fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          apiKey +
          "&units=imperial"
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data1) {
          var elem = document.createElement("img");
          var weathIcon = document.getElementById("cName");
          var icoCode = data1.current.weather[0].icon;
          elem.setAttribute(
            "src",
            "http://openweathermap.org/img/wn/" + icoCode + "@2x.png"
          );
          document.getElementById("cName").innerHTML =
            cityName + " - " + moment().format("LL");
          weathIcon.appendChild(elem);
          document.getElementById("cTemp").innerHTML =
            "Temp: " + data1.current.temp + " \u00B0F";
          document.getElementById("cWind").innerHTML =
            "Wind: " + data1.current.wind_speed + " MPH";
          document.getElementById("cHumidity").innerHTML =
            "Humidity: " + data1.current.humidity + " %";
          document.getElementById("cUV").innerHTML =
            "UV Index: " + data1.current.uvi;

          var uv = data1.current.uvi;
          if (uv) {
            if (uv === 11) {
              setColor(cUV, "purple");
            } else if (uv > 7) {
              setColor(cUV, "red");
              $(cUV).css("color", "black");
            } else if (uv > 5) {
              setColor(cUV, "orange");
              $(cUV).css("color", "black");
            } else if (uv > 2) {
              setColor(cUV, "yellow");
              $(cUV).css("color", "black");
            } else {
              setColor(cUV, "white");
            }
          }

          function setColor(element, color) {
            element.style.backgroundColor = color;
          }

          fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
              lat +
              "&lon=" +
              lon +
              "&appid=" +
              apiKey +
              "&units=imperial"
          )
            .then(function (resp) {
              return resp.json();
            })
            .then(function (data2) {
              var d1 = document.getElementById("d1");
              var d2 = document.getElementById("d2");
              var d3 = document.getElementById("d3");
              var d4 = document.getElementById("d4");
              var d5 = document.getElementById("d5");
              document.getElementById("d1").innerHTML =
                moment().add(1, "days").format("L") +
                "<br/> Temp: " +
                data2.list[3].main.temp +
                " \u00B0F" +
                "<br/> Wind: " +
                data2.list[3].wind.speed +
                " MPH" +
                "<br/> Humidity: " +
                data2.list[3].main.humidity +
                " \u00B0F";
              var i1 = document.createElement("img");
              var c1 = data2.list[3].weather[0].icon;
              i1.setAttribute(
                "src",
                "http://openweathermap.org/img/wn/" + c1 + "@2x.png"
              );
              d1.appendChild(i1);
              document.getElementById("d2").innerHTML =
                moment().add(2, "days").format("L") +
                "<br/> Temp: " +
                data2.list[11].main.temp +
                " \u00B0F" +
                "<br/> Wind: " +
                data2.list[11].wind.speed +
                " MPH" +
                "<br/> Humidity: " +
                data2.list[11].main.humidity +
                " \u00B0F";
              var i2 = document.createElement("img");
              var c2 = data2.list[11].weather[0].icon;
              i2.setAttribute(
                "src",
                "http://openweathermap.org/img/wn/" + c2 + "@2x.png"
              );
              d2.appendChild(i2);
              document.getElementById("d3").innerHTML =
                moment().add(3, "days").format("L") +
                "<br/> Temp: " +
                data2.list[19].main.temp +
                " \u00B0F" +
                "<br/> Wind: " +
                data2.list[19].wind.speed +
                " MPH" +
                "<br/> Humidity: " +
                data2.list[19].main.humidity +
                " \u00B0F";
              var i3 = document.createElement("img");
              var c3 = data2.list[19].weather[0].icon;
              i3.setAttribute(
                "src",
                "http://openweathermap.org/img/wn/" + c3 + "@2x.png"
              );
              d3.appendChild(i3);
              document.getElementById("d4").innerHTML =
                moment().add(4, "days").format("L") +
                "<br/> Temp: " +
                data2.list[27].main.temp +
                " \u00B0F" +
                "<br/> Wind: " +
                data2.list[27].wind.speed +
                " MPH" +
                "<br/> Humidity: " +
                data2.list[27].main.humidity +
                " \u00B0F";
              var i4 = document.createElement("img");
              var c4 = data2.list[27].weather[0].icon;
              i4.setAttribute(
                "src",
                "http://openweathermap.org/img/wn/" + c4 + "@2x.png"
              );
              d4.appendChild(i4);
              document.getElementById("d5").innerHTML =
                moment().add(5, "days").format("L") +
                "<br/> Temp: " +
                data2.list[35].main.temp +
                " \u00B0F" +
                "<br/> Wind: " +
                data2.list[35].wind.speed +
                " MPH" +
                "<br/> Humidity: " +
                data2.list[35].main.humidity +
                " \u00B0F";
              var i5 = document.createElement("img");
              var c5 = data2.list[35].weather[0].icon;
              i5.setAttribute(
                "src",
                "http://openweathermap.org/img/wn/" + c5 + "@2x.png"
              );
              d5.appendChild(i5);
            });
        });
    });
}

button.addEventListener("click", submitForm);

function submitForm() {
  var subCity = document.getElementById("inCity").value;
  console.log("start>>> " + subCity);
  if (!subCity) {
    window.alert("Please enter a city");
  } else {
    localStorage.setItem(subCity, JSON.stringify(subCity));
    console.log(subCity);
    var elmt = document.createElement("div");
    elmt.textContent = subCity;
    elmt.classList.add(
      "is-size-3",
      "has-background-grey",
      "has-text-white",
      "has-text-centered",
      "is-vcentered",
      "p-3",
      "mb-3"
    );
    elmt.id = subCity;
    elmt.setAttribute("onClick", "weathCheck()");
    list.appendChild(elmt);
    weathCheck();
  }
}
$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

pageLoad();
