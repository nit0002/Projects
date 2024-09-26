function add(a,b,cb){
    let result = a+b ;
    cb(result);
    return cb(); 
} 

add(2,3,()=> {});
