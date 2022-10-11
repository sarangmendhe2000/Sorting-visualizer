async function bubble_swap(el1,el2){
    el1.classList.remove("bg-warning");el1.classList.add("bg-danger");
    await delay(speed);
    let text1=el1.style.height;let text2=el2.style.height;
    if(parseInt(text1)>parseInt(text2)){
        el1.style.height=text2;
        el2.style.height=text1;
    }
    el1.classList.remove("bg-danger");el1.classList.add("bg-warning");
}

async function bubble(){
    var arr = $(".pillar");
    for(let i=0;i<rng-1;i++){
        for(let j=0;j<rng-i-1;j++){
            await bubble_swap(arr[j],arr[j+1]);
        }
        arr[rng-i-1].classList.remove("bg-warning");arr[rng-i-1].classList.add("bg-success");
    }
    arr[0].classList.remove("bg-warning");arr[0].classList.add("bg-success");
}
