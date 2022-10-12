let name = document.getElementById("name")
let firstName = document.getElementById("firstName")
let number = document.getElementById("number")
let password = document.getElementById("password")
let signUp = document.getElementById("signUp")
let href = document.getElementById("href")
let hrefa = document.getElementById("hrefa")
let sign = document.getElementById("sign")
let login = document.getElementById("login")
let nameBlog = document.getElementById("nameBlog")
let firstBlog = document.getElementById("firstBlog")
let numberBlog = document.getElementById("numberBlog")
let passworBlog = document.getElementById("passworBlog")
const data = []

const siginUp = () => {
    if (name.value !== "" && firstName.value !== "" && number.value !== "" && number.value.length > 12  && password.value !== "") {
        let person = {
            name: name.value,
            firstName: firstName.value,
            number: number.value,
            password: password.value,
        }
        let res = localStorage.getItem("data")
        if (res) {
            if (JSON.parse(res).some(p => p.number == person.number)) {
                numberBlog.style.borderBottom = "2px solid red"
            } else {
                data.push(person)
                localStorage.setItem('data', JSON.stringify(data))
                window.open("../index.html")
                name.value = ""
                firstName.value = ""
                number.value = ""
                password.value = ""
            }
        } else {
            data.push(person)
            localStorage.setItem('data', JSON.stringify(data))
            window.open("../index.html")
        }
    } else {
        if (name.value == "") {
            nameBlog.style.borderBottom = "2px solid red"
        } if (firstName.value == "") {
            firstBlog.style.borderBottom = "2px solid red"
        }
        if (number.value == "") {
            numberBlog.style.borderBottom = "2px solid red"

        } if (password.value == "") {
            passworBlog.style.borderBottom = "2px solid red"
        }
    }
}
const loginUp = () => {
    if (name.value !== "" && password.value !== "") {
        let res = localStorage.getItem("data")
        console.log(res);
        if (JSON.parse(res).some(p => p.password == password.value)) {
            window.open("index.html")
        } else {
            nameBlog.style.borderBottom = "2px solid red"
            passworBlog.style.borderBottom = "2px solid red"
        }
    } else {
        if (name.value == "") {
            nameBlog.style.borderBottom = "2px solid red"
        }
        if (password.value == "") {
            passworBlog.style.borderBottom = "2px solid red"
        }
    }
}
const loginR = () => {
    hrefa.style.display = "block"
    href.style.display = "none"
    signUp.innerHTML = "Login Up "
    sign.style.display = "none"
    login.style.display = "block"
    firstBlog.style.display = "none"
    numberBlog.style.display = "none"
}
const siginR = () => {
    href.style.display = "block"
    hrefa.style.display = "none"
    signUp.innerHTML = "Sign Up"
    login.style.display = "none"
    sign.style.display = "block"
    firstBlog.style.display = "block"
    numberBlog.style.display = "block"
}
const validete = () => {
    nameBlog.style.border = "none"
    firstBlog.style.border = "none"
    numberBlog.style.border = "none"
    passworBlog.style.border = "none"
}
let res = localStorage.getItem("data")

var phoneMask =
{
    mask: '+{998}(00)000-00-00',
    lazy: false
} 
let  mask = new IMask(number,phoneMask)
