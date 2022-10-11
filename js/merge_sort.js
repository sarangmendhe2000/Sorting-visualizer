const merge_helper = {
    shift_right: async function (start, end) {
        let height_last = $(".pillar")[end].style.height;
        for (let i = end; i > start; i--) {
            $(".pillar")[i].style.height = $(".pillar")[i - 1].style.height;
        }
        $(".pillar")[start].style.height = height_last;
    },
    combine: async function (start, mid, end) {
        let curr1=start,curr2=mid;
            while (curr1 <= curr2 && curr2 <= end) {
                console.log(curr1+" "+curr2);
                $(".pillar")[curr1].classList.add("bg-danger"); $(".pillar")[curr1].classList.remove("bg-warning");
                $(".pillar")[curr2].classList.add("bg-danger"); $(".pillar")[curr2].classList.remove("bg-warning");
                await delay(speed);
                if (parseInt($(".pillar")[curr1].style.height) > parseInt($(".pillar")[curr2].style.height)) {
                    merge_helper.shift_right(curr1, curr2);
                    $(".pillar")[curr1].classList.remove("bg-danger");
                    $(".pillar")[curr2].classList.remove("bg-danger"); $(".pillar")[curr2].classList.add("bg-warning");
                    curr2++;
                    curr1++;
                } else {
                    $(".pillar")[curr1].classList.remove("bg-danger");
                    curr1++;
                }
                $(".pillar")[curr1 - 1].classList.add("bg-info");
            }
            while(curr1<=end){
                $(".pillar")[curr1].classList.remove("bg-danger");
                $(".pillar")[curr1].classList.add("bg-info");
                curr1++;
            }
            while(curr1>start){
                $(".pillar")[curr1-1].classList.remove("bg-info");
                $(".pillar")[curr1-1].classList.add("bg-warning");
                curr1--;
            }
    },
    merge: async function (start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            await merge_helper.merge(start, mid);
            await merge_helper.merge(mid + 1, end);
            await merge_helper.combine(start, mid + 1, end);
        }
    }
}
async function merge_sort() {
    let start = 0;
    let end = rng - 1;
    await merge_helper.merge(start, end);
    $(".pillar").removeClass("bg-warning");$(".pillar").addClass("bg-success");
}