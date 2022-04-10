var button = document.querySelector('#sButton')
var city = document.querySelector('#inCity')
// console.log(subCity)
var subCity = document.getElementById('inCity')
// var modalOne = document.getElementsByClassName('modal')
var list = document.getElementById('cList')
var fromStorage = localStorage.getItem(subCity)

function pageLoad () {
    if (localStorage.length < 1) {
        submitForm()
    }
    else { 
        //var subCity = document.getElementById('inCity').value
        // for (let i = 1; i < fromStorage.length; i++) {
        //  var storage = localStorage.getItem(subCity)
        //  console.log('Storage>>> ' + storage)
        //  console.log("local storage");
        //  for (i = 0; i < localStorage.length; i++)   {
        //      console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
         
         
// }

        // }

        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let keyVal = `${key}`
            // alert(`${key}: ${localStorage.getItem(key)}`);
        //   }
        var elmt = document.createElement('div')
        elmt.textContent = key
        elmt.classList.add('is-size-3','has-background-grey','has-text-white','has-text-centered','is-vcentered','p-3','mb-3')
        elmt.id = key
        list.appendChild(elmt)
        console.log(keyVal)
        }
    }
}


function weathCheck(cityName,St) {
    var apiKey = '{e0130f4883633fe11cda4ea61821cc8e}';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cName + '&appid=' + apiKey)
    .then(function(resp) {
        return resp.json()
    }) 
    .then(function(data) {
        console.log(data)
    })
}

button.addEventListener('click', submitForm)

function submitForm() {
    var subCity = document.getElementById('inCity').value
    console.log('start>>> ' + subCity)
    if (!subCity) {
        window.alert('Please enter a city')
    //     // var modal11 = document.getElementById("modal1");
    //     // modal11.classList.add("is-active");
    //     // $(".modal").addClass("is-active"); 
    //     // modalOne.classList.add('is-active');
    }
    else {
        // localStorage.setItem('Cities', subCity)
        localStorage.setItem(subCity, JSON.stringify(subCity));
    //     // var subCity = document.getElementById('inCity').value
    //     // var respCity = subCity
        console.log(subCity)
        var elmt = document.createElement('div')
        elmt.textContent = subCity
        elmt.classList.add('is-size-3','has-background-grey','has-text-white','has-text-centered','is-vcentered','p-3','mb-3')
        elmt.id = subCity
        list.appendChild(elmt)
    // }
}
}
    $(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
   
  });
pageLoad()