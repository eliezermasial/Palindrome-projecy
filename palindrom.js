
function palindrome(){
    const input= document.querySelector('#input')
    const button= document.querySelector('#button')
    const span= document.querySelector('#reponse')


    const inputvalue= input.value
    const reverse= inputvalue.split('').reverse('').join('')
    
 
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        if(inputvalue == reverse){
            
            span.innerHTML= `${"yes"}  ${inputvalue} ${"is"} ${"palindrome"}`
            span.style.textDecoration = "underline"
            span.style.color = 'blue'
            
        } else if(inputvalue !== reverse){

            span.innerHTML= `${"no,"}  ${inputvalue} ${"is"} ${"not"} ${"palindrome"}`
            span.style.textDecoration = "underline"
            span.style.color = 'red'
        }else{
            span.innerHTML= "impossible"
        }
        
    })
    
}

palindrome()
