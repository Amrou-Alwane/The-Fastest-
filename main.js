
//array of words
var words=['football','eat', 'sleep', 'exercise','fawez','barcelona','paris','NewYork','goodMorning','Messi','Manunited','sbouii','D7ifa','downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized','Hafa','mama','wiwi','Eren','Mikassa','WinterIsComming','aryaStark','jessy','stayech','taher']


// utility function to get a random element from an array
var randomElement = function(array){
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }



  //function that check the matching character between two strings
 function GuessFirstLast(str1,str2) {
    if(str1[0]===str2[0] && str1[(str1.length-1)] === str2[(str2.length-1)]){
    return true
    }
    return false
}

var limit =3
var count=0
var word=randomElement(words)


    $('#show').click( function(){
        alert('the word is'+" "+ word)
    })//button to show the word what it should match with the player input



    $('#try').click( function Befast(){
        var x=$('#ipt').val()
        if(count<limit){
            if(GuessFirstLast(word,x)===true){
                console.log(x)
            alert("Congratulations!!!") 
        }
        else alert("try again") 
         count=count+1  
    }    
    else 
    alert('Game Over !!!') 
    })//button to play the game



    $('#retry').click(function(){
        location.reload(true)
    })  //button to restart the game with a new word 






















