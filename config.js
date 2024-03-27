function isAuthenticated(){
    let data = window.localStorage.getItem("data")
    if(data.id&&data.role)
        return true
    return  false
}
function setCookie(id,role){
    var data={
        role:role,
        id:id
    }
    window.localStorage.setItem( "data",JSON.stringify(data))

}
function getCookie(){
    let data = window.localStorage.getItem("data")
    
    return data;
}
function isAuthenticatedDoctor(){
    let data = window.localStorage.getItem("data")
    if(data.id&&data.role=="doctor")
        return true
    return  false
}
function isAuthenticatedPatient(){
    let data = window.localStorage.getItem("data")
    if(data.id&&data.role=="patient")
        return true
    return  false
}
function isAuthenticatedAdmin(){
    let data = window.localStorage.getItem("data")
    if(data.id&&data.role=="admin")
        return true
    return  false
}
function distroyLogin(){
    window.localStorage.removeItem("data")
}
const server="http://localhost:5000"
// const server="https://medical-assistance-final-project-backend.onrender.com"
module.exports={server,isAuthenticated,isAuthenticatedAdmin,isAuthenticatedDoctor,isAuthenticatedPatient,distroyLogin,getCookie,setCookie}
