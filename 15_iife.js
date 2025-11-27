// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE) 
/* It is used to deal with the problem of global scope variable ..*/

(function chai(){
    console.log(`DB Connected`)
} )();       // Here we used the syntax () () we wrapped the function in () and it immediately invoked..

// always use ; semi-colon after iife..

( (name)=>{                 // can also add parameter..
    console.log(`DB2 Connected..${name}`);
    
})("Nawazish's DB");            