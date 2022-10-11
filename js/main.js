/*          #range_input
            #range_display
            #new_array
            #col_wrapper
            .pillar          */
var pre_rng = 90;
var rng=90;
var speed=11;   

function delay(delayInms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2); 
      }, delayInms);
    });
}
function make_array(){
    $("#col_wrapper").empty();
    for(let i=0;i<rng;i++){
        $("#col_wrapper").append("<div class='bg-warning border border-dark mx-auto pillar'></div>");
    }
     let wght = 90/rng;
    for(let i=0;i<rng;i++){
        let hgt=(Math.floor(Math.random()*100))+1;
        $(".pillar")[i].style.height= hgt+"%";
        $(".pillar")[i].style.width= wght+"%";
    }
}
function check4change(){
    rng=$("#range_input")[0].value;
    if(rng!=pre_rng){
        $("#range_display")[0].innerHTML = rng;
        make_array();
    }
    pre_rng=rng;
}
function speed_change(){
    speed=100-$("#speed_input")[0].value+1;
    $("#speed_display")[0].innerHTML = 100-speed+1;
}
function loaded() {
     $("#range_display")[0].innerHTML = rng;
     $("#speed_display")[0].innerHTML = 100-speed+1;
    make_array();
    setInterval(check4change, 10);
    setInterval(speed_change, 10);
    $("#new_array").click(make_array);
    $("#Bubble").click(bubble);
    $("#Insertion").click(insertion);
    $("#Selection").click(selection);
    $("#Merge").click(merge_sort);
    $("#Quick").click(quick_sort);
}

loaded();
