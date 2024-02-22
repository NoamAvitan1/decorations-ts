const getDataFetch = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    console.log(data);
}

const getDatasync = () => {
    let info = fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json()).then((data) => data).catch((err)=> err)
    console.log(info);
}

//getDatasync();


// const getDataPromise = new Promise((resolve,reject) => {
//     if(data){
//         resolve(data);
//     }
//     else{
//         reject(err);
//     }
// })

