var grade = 'A';
document.write("Entering switch statement...<br>");
switch(grade){
    case 'A':{
        document.write("Excellent!<br>");
        break;
    }
    case 'B':{
        document.write("Good job!<br>");
        break;
    }
    case 'C':{
        document.write("You passed.<br>");
        break;
    }
    case 'D':{
        document.write("You need to improve.<br>");
        break;
    } 
    case 'F':{
        document.write("You failed.<br>");
        break;
    }
    default:{
        document.write("Invalid grade.<br>");
    }
}
document.write("Exiting switch statement...")