// how to create promise 
//  a promise created using promise() consturctor ,which takes two paramters resolve and reject

let myPromise = new Promise((resolve,reject)=>{
    if(success){
        resolve('success!')
    }
    else{
        reject('failure')
    }
})