var button = document.querySelector('#sButton')
var city = document.querySelector('#inCity')
// console.log(subCity)
var subCity = document.getElementById('inCity')
// var modalOne = document.getElementsByClassName('modal')
var list = document.getElementById('cList')
var fromStorage = localStorage.getItem('Cities')

function pageLoad () {
    if (!fromStorage) {
        submitForm()
    }
    else { 
        // for (let i = 1; i < fromStorage.length; i++) {
        var storage = localStorage.getItem('Cities')
        console.log('Storage>>> ' + storage)

        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            // let keyVal = key[i]
            // alert(`${key}: ${localStorage.getItem(key)}`);
        //   }
        var elmt = document.createElement('div')
        elmt.textContent = key
        elmt.classList.add('is-size-3','has-background-grey','has-text-white','has-text-centered','is-vcentered','p-3','mb-3')
        elmt.id = key
        list.appendChild(elmt)
        console.log(fromStorage)
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
//     $("#lanuchModal").click(function() {
//     $(".modal").addClass("is-active"); 
   
//   });
   
   
   
   
    $(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
   
  });

// window.onload = function() {
//     weathCheck(Houston,Tx)
// }

// document.addEventListener('DOMContentLoaded', () => {
//     // Functions to open and close a modal
//     function openModal(modalOne) {
//         modalOne.classList.add('is-active');
//     }
  
//     function closeModal(modalOne) {
//         modalOne.classList.remove('is-active');
//     }
  
//     function closeAllModals() {
//       (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//         closeModal($modal);
//       });
//     }
  
//     // Add a click event on buttons to open a specific modal
//     // (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
//     //   const modal = $trigger.dataset.target;
//     //   const $target = document.getElementById(modal);
//     //   console.log($target);
  
//     //   $trigger.addEventListener('click', () => {
//     //     openModal($target);
//     //   });
//     // });
  
//     // Add a click event on various child elements to close the parent modal
//     (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//       const $target = $close.closest('.modal');
  
//       $close.addEventListener('click', () => {
//         closeModal($target);
//       });
//     });
  
//     // Add a keyboard event to close all modals
//     document.addEventListener('keydown', (event) => {
//       const e = event || window.event;
  
//       if (e.keyCode === 27) { // Escape key
//         closeAllModals();
//       }
//     });
//   });
pageLoad()