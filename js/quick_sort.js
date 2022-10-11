const quick_helper={
    split: async function (start,end){
        $(".pillar")[start].classList.add("bg-danger");//$(".pillar")[start].classList.remove("bg-warning");
        $(".pillar")[end].classList.add("bg-danger");//$(".pillar")[end].classList.remove("bg-warning");
        let pivot=start;
        $(".pillar")[pivot].classList.remove("bg-warning");$(".pillar")[pivot].classList.add("bg-primary");
        for(let curr=start+1;curr<=end;curr++){
            $(".pillar")[curr].classList.remove("bg-warning");$(".pillar")[curr].classList.add("bg-info");
            await delay(speed);
            $(".pillar")[curr].classList.remove("bg-info");$(".pillar")[curr].classList.add("bg-warning");
            let text_curr=$(".pillar")[curr].style.height;
            if(parseInt(text_curr)<parseInt($(".pillar")[pivot].style.height)){
                let text_next=$(".pillar")[pivot+1].style.height;
                let text_pivot=$(".pillar")[pivot].style.height;
                $(".pillar")[curr].style.height=text_next;
                $(".pillar")[pivot+1].style.height=text_pivot;
                $(".pillar")[pivot].style.height=text_curr;
                $(".pillar")[pivot].classList.remove("bg-primary");$(".pillar")[pivot].classList.add("bg-warning");
                $(".pillar")[pivot+1].classList.remove("bg-warning");$(".pillar")[pivot+1].classList.add("bg-primary");
                //$(".pillar")[curr].classList.remove("bg-primary");$(".pillar")[curr].classList.add("bg-success");
                pivot=pivot+1;
            } 
        }
        $(".pillar")[start].classList.remove("bg-danger");//$(".pillar")[start].classList.add("bg-warning");
        $(".pillar")[end].classList.remove("bg-danger");//$(".pillar")[end].classList.add("bg-warning");
        $(".pillar")[pivot].classList.remove("bg-primary");$(".pillar")[pivot].classList.add("bg-success");
        return pivot;;
    },
    quick: async function (start,end) {
        if(start<=end){
            var pivot = await quick_helper.split(start,end);
            await quick_helper.quick(start,pivot-1);
            await quick_helper.quick(pivot+1,end);
        }
    }
}
function quick_sort(){
    let start=0;
    let end=rng-1;
    quick_helper.quick(start,end);
}