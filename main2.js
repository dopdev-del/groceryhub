getPersonaData()
getGetLocalStorage()

function getGetLocalStorage(){
    let name   = localStorage.getItem("name")
    let persona = JSON.parse( localStorage.getItem("persona"))
    console.log(name)
    console.log(persona)

}

function getPersonaData(){
    let person = {
        name : "junior",
        age : 31,
        mail : "jrjrjr@gmail.com",
        phone : "8095632562",
        coords : {
            lat: 3,
            lng: -5
        }
    };

    let name = "juan"

    localStorage.setItem("name", name)
    localStorage.setItem("persona", JSON.stringify( person ))

}