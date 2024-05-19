let result                             = document.querySelector('.result')
let opponent                           = document.querySelector('.opponent')
let begin                              = document.querySelector('.begin')
let main_page                          = document.querySelector('#main_page')
let main_btn                           = document.querySelector('.main_btn')
let player_intro                       = document.querySelector('#player_intro')      
let player_one_intro                   = document.querySelector('.player_one_intro')
let player_two_intro                   = document.querySelector('.player_two_intro')      
let begin_button                       = document.querySelector('.begin_button')
let player_input                       = document.querySelector('.player_input')
let player_one_card                    = document.querySelector('.player_one_card')         
let show                               = document.querySelector('.show')  
let error                              = document.querySelector('.error')  
let player_one                         = document.querySelector('.player_one')  
let player_one_input                   = document.querySelector('.player_one_input')    
let player_one_button                  = document.querySelector('.player_one_button')
let player_two                         = document.querySelector('.player_two')  
let player_two_input                   = document.querySelector('.player_two_input')    
let player_two_button                  = document.querySelector('.player_two_button') 
let win                                = document.querySelector('.win')
let show_win                           = document.querySelector('.show_win')
let chance_main                        = document.querySelector(".chance-main")
let chance                             = document.querySelector(".chance")
let restart                            = document.querySelector(".restart")
let colors                             = ["hotpink", "skyblue", "yellow", "white"] 
let i                                  = 5   



// main page part
main_btn.addEventListener('click' , ()=>{
  main_page.style    = "display:none;"
  player_intro.style = "visibility:visible;"

   // player introduction part
    result.addEventListener('click' , ()=>{
      player_one_intro.style = "display:none;"
      player_two_intro.style = "display:block;"
    })

    // game begin part
    opponent.addEventListener('click' , ()=>{
      player_two_intro.style = "display:none;"
      begin.style            = "display:block;"
    })

    begin_button.addEventListener('click', ()=>{
      begin.style                   = "display:none;"
      player_input.style            = "display:block;"
      
      // player one input
      player_one_button.addEventListener('click' , ()=>{
        if(player_one_input.value == ''){
          error.innerHTML        = "please enter a value"
          player_one_input.value = ''

        }else {
          if(player_one_input.value > 10){
            error.innerHTML        = "Please enter a value between 1-10"
            player_one_input.value = ''

          }else {
            error.innerHTML   = ''
            show.innerHTML    = "Player Two"
            player_one.style  = "display:none;"
            player_two.style  = "display:block;"
          }
        }
      })
      // player two input 
      player_two_button.addEventListener('click' , ()=>{
        if(player_two_input.value == ''){
          error.innerHTML        = "please enter a value"
          player_two_input.value = ''
      
        }else {
          if(player_two_input.value > 10){
            error.innerHTML        = "Please enter a value between 1-10"
            player_two_input.value = ''

          } else {
            if (player_two_input.value == player_one_input.value){
              player_input.style = ''
              win.style          = "display:block;"
              show_win.innerHTML = "Congratulations, You are winner"
              restart.style      = "display:block;"

            }else {
              if ( i !== 1){
                i--;
                chance.innerHTML       = i; 
                chance.style.color     = colors[i - 1]
                player_two_input.value = ''
                error.innerHTML        = ''

              }else {
                player_input.style = ''
                win.style          = "display:block;"
                show_win.innerHTML = "Opps! Player one winner"
                show_win.style     = "margin-left:60px;"
                restart.style      = "display:block;"
              }
            }
          }
        }
      })
      
    })
})
    // Restart part
    restart.addEventListener("click" , ()=>{
    location.reload()
    })