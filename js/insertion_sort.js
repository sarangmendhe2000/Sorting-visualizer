async function insertion_swap(el1,el2){
    el1.classList.remove("bg-primary");el1.classList.add ("bg-danger");
    await delay(speed);
    let text1=el1.style.height;let text2=el2.style.height;
    if(parseInt(text1)<parseInt(text2)){
        el1.style.height=text2;
        el2.style.height=text1;
        el1.classList.remove("bg-danger");el1.classList.add("bg-primary");
        return false;
    }else{
        el1.classList.remove("bg-danger");el1.classList.add("bg-primary");
        return true;
    }

}

async function insertion(){
    var arr = $(".pillar");
    arr[0].classList.remove("bg-warning");arr[0].classList.add("bg-primary");
    for(let i=1;i<rng;i++){
        arr[i].classList.remove("bg-warning");arr[i].classList.add("bg-primary");
        for(let j=i;j>0;j--){
            if(await insertion_swap(arr[j],arr[j-1])){
                break;
            }
        }
        arr[i].classList.remove("bg-warning");arr[i].classList.add("bg-primary");
    }
    
     for(let j=rng-1;j>=0;j--){
        await delay(Math.floor(speed/10)+1);
        arr[j].classList.remove("bg-primary");arr[j].classList.add("bg-success");
     }
}
