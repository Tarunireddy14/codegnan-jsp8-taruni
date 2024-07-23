let arr=[10,20,7,4,3,5,30];
let n=30;
for (i of arr){
    if (n%i==0){
        console.log(i);
    }

}

let arr2=[109,2,4,7,6,21]; 
for (b of arr2){
    if(b%2==0){
        let c=1
        for(i=1;i<=b;i++){
            c=c*i
        }
        console.log(c)
    }
}

let arr1 = [3,6,2,28];
for(a of arr1){   
    let v=0;
    for(i=1;i<a;i++){
        if(a%i==0){
            v=v+i
    }
    }
    if(v==a){
        console.log(v);
    }
}

