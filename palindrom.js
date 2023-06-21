
function palindrome(){

    const input= document.querySelector('#input')
    const button= document.querySelector('#button')
    const span= document.querySelector('#answer')

    const inputvalue= input.value
    const reverse= inputvalue.split('').reverse('').join('')
    
    button.addEventListener('click',(e)=>{

        e.preventDefault()
        e.stopPropagation()
        
        if(inputvalue !== reverse){
            
            console.log(inputvalue.length)
            span.innerHTML= `no, ${inputvalue} is not palindrome`
            span.style.color = 'var(--bg-body)'
            
        } else{
            span.innerHTML= `yes  ${inputvalue} is palindrome`
            span.style.color = 'var(--bg-body)'
        }
        if(inputvalue.length < 1){

            span.innerHTML= `unable to perform palindrome operation.`
            span.style.color = 'var(--bg-body)'
        }
    })
    
}

palindrome()
