function get_para_1(){
    var inputs = [];
    for(var i =1 ; i <=6 ; i++){
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    inputs.join(". ")
    document.getElementById("show_para1").innerHTML = inputs.join(". ")
}function get_para_2(){
    var input = [];
    for(var x =1 ; x <=6 ; x++){
        input.push(document.getElementById("para2_input_box_" + x).value);
    }
    input.join(". ")
    document.getElementById("show_para2").innerHTML = input.join(". ")
}