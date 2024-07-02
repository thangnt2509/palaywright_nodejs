if(getFirstNumber() != 0 && getSecondNumber() != 0 ){
    console.log("All numbers are not 0");
    //&& ||
    //&&: ben phai sai thi khong check ben phai nua
    //& |
    //&: ben phai sai thi van check ben phai
}

function getFirstNumber(){
    console.log("calling 1st method");
    return 0;
}

function getSecondNumber(){
    console.log("calling 2nd method");
    return 2;
}

let anyArray;
if(anyArray!= undefined && anyArray.length > 0){
    console.log("Say something");
}

//=> Khong su dung & va |, mat thoi gian check