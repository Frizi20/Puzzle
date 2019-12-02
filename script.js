var colours,
    currentBox;
var rezultat = [];
var check = [];

colours = [
    'crimson',
    'blue',
    'red',
    'purple',
    'green',
    'gold',
    'pink',
    'grey',
    'crimson',
    'blue',
    'red',
    'purple',
    'green',
    'gold',
    'pink',
    'grey'
];


$('.b').addClass('black');

shuffle(colours);
for (var i = 0; i < 16; i++) {
    var list = document
        .querySelector('#b' + i)
        .classList;
    list.replace(list[1], colours[i]);
}

$('.b').on('click',function (event) {
    

    
    currentBox = this.classList[1];
    check.push(currentBox);


    $(this).removeClass('black');
     console.log(this.classList[2])
    
    

    if (check[check.length - 1] === check[check.length - 2]) {

        $('.'+ check[check.length - 1]).addClass('invi');
        console.log('correct');
        check.length = 0;
       
         

    } else if (check.length > 1 && check[check.length - 1] !== check[check.length - 2]) {

        setTimeout(() => {
          console.log('gresit');
        
        $('.'+ check[check.length - 1]).addClass('black');
        $('.'+ check[check.length - 2]).addClass('black');

                  
            // $('.'+ check[check.length - 1]).addClass('black');
            // $('.'+ check[check.length - 2]).addClass('black');
        check.length = 0;  
        }, 400);
        
       
    }
    
   if($('.invi').length=== 16){
       $('h1').text('Bravo papuse!');
       $('h1').css("color","red");
       $('h1').css("font-size", "64px");
   }
    
});


// function shuffleBoxes(ar){
//  var rand,currEl,i;
//  for(i=ar.lenght -1; i >0 ;i--){
//   rand= Math.floor(Math.random()*(i+1));
//   currEl=ar[i];
//   ar[i]=ar[rand];
//   ar[rand]=currEl;
//  }
// return(ar);
// }



// shuffleBoxes(colours);
// console.log(colours);

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;
}
var ten = 10;
while (0 !== ten) {

    ten -= 1;
}

console.log(document.querySelector('#b2').getAttribute('class'))