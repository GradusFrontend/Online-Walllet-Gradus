const signForm = document.forms.signForm
const singInps = signForm.querySelectorAll('input')

let ls = JSON.parse(localStorage.getItem('user'))
singInps[0].value = ls.email

signForm.onsubmit = (e) => {
    e.preventDefault()
    
    if(singInps[singInps.length - 1].value === ls.password) {
        let errors = 0 
        singInps.forEach(inp => {
            if(inp.value.trim() === '') {
                ++errors
            }
        })
        
        if(errors === 0) {
            let fm = new FormData(signForm)
            let user = {}
    
            fm.forEach((value, key) => {
                user[key] = value
            })
        }
        alert('success!')
        
    } else alert('password incorrect!')
}