async function selection_swap(curr,mx){
    curr.classList.remove("bg-warning");curr.classList.add("bg-danger");
    await delay(speed);
    let text_curr=curr.style.height;let text_mx=mx.style.height;
    if(parseInt(text_curr)<parseInt(text_mx)){
        curr.classList.remove("bg-danger");curr.classList.add("bg-primary");
        mx.classList.remove("bg-primary");mx.classList.add("bg-warning");
        return curr;
    }
    curr.classList.remove("bg-danger");curr.classList.add("bg-warning");
    return mx;
}

async function selection(){
    var arr = $(".pillar");
    for(let i=0;i<rng-1;i++){
        let mx=arr[i];
        mx.classList.remove("bg-warning");mx.classList.add("bg-primary");
        for(let j=i+1;j<rng;j++){
            mx=await selection_swap(arr[j],mx);
        }
        if(mx!=arr[i]){
            arr[i].classList.remove("bg-warning");arr[i].classList.add("bg-success");
            mx.classList.remove("bg-primary");mx.classList.add("bg-warning");
            let text_curr = arr[i].style.height;let text_mx = mx.style.height;
            arr[i].style.height = text_mx;
            mx.style.height = text_curr;
        }
        mx.classList.remove("bg-primary");mx.classList.add("bg-success");
    }
    arr[rng-1].classList.remove("bg-warning");arr[rng-1].classList.add("bg-success");
}