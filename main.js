const regForm = document.forms.regForm
const regInps = regForm.querySelectorAll('input')

regForm.onsubmit = (e) => {
    e.preventDefault()
    
    let errors = 0 
    regInps.forEach(inp => {
        if(inp.value.trim() === '') {
            ++errors
        }
    })
    
    if(errors === 0) {
        let fm = new FormData(regForm)
        let user = {}

        fm.forEach((value, key) => {
            user[key] = value
        })

        localStorage.setItem("user", JSON.stringify(user))

        window.location.href = '/pages/sign/'
    }
}