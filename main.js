students_name=[];
function submit(){
    var display_array=[];
    for(var j=1;j<=10;j++)
    {var name_of_student=document.getElementById("name_of_student_"+j).value
    console.log(name_of_student);
    students_name.push(name_of_student);


}

    console.log(students_name);
    var legth_array=students_name.length;
    console.log(length_array);
    
    for(var k=0;k<length_array;k++)
    {
        display_array.push("<h4>Name-"+students_name[k]+"</h4>");
        console.log(display_array);
    }
    console.log(display_array);
    document.getElementById("display_with_commas").innerHTML=display_array;

    var remove_commas=display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_without_commas").innerHTML=remove_commas;


}
    
    

function sorting(){
    students_name.sort();
    console.log(students_name);
    var display_sorting=[];

    var legth_array=students_name.length;
    console.log(length_array);
    
    for(var k=0;k<length_array;k++)
    {
        display_array.push("<h4>Name-"+students_name[k]+"</h4>");
        console.log(display_array);
    }
    var remove_commas=display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_without_commas").innerHTML=remove_commas;

}
    