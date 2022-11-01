//async await

async function getData(){

    var url = "http://localhost:8000/song/song/"
    let res = await fetch(url,{
        method:"GET"
    })
    
    if(res.status === 200){
    
        let data = await res.json()
        console.log(data)
    }
    

}


async function postData(){


    var user = {
        name:"morpheus",
        job:"leader"
    }

    let res = await fetch("https://reqres.in/api/users",{
        method:"POST",        
        
    },user)

    console.log(res.status)
    let data = await res.json()
    console.log(data)

}

async function deleteData(){


    let res = await fetch("http://localhost:8000/song/song/634669a5a5e3a02d1259cccc",{
        method:"DELETE"
    })
    if(res.status===204){
        alert("deleted")
    }
    
    //console.log("data-->",data)


}

async function getDataById()
{

    var id =2
    let res = await fetch("https://reqres.in/api/users/"+id,{
        method:"GET"
    })
    let data = await res.json()
    console.log(data)

}
getData()
//postData()
//deleteData()
//getDataById()