var d = new Date("Novamber 20, 2022 16:00:00");
var WCkickoff = d.getDay()

switch (WCkickoff) {
    case 0 :
        day="Sunday"
        break;
        case 1 :
        day="Monday"
        break;
        case 2 :
        day="Tuesday"
        break;
        case 3 :
        day="Wenesday"
        break;
        case 4 :
        day="Thursday"
        break;
        case 5 :
        day="Friday"
        break;
        case 6 :
            day="Saturday"
            break;
    }

    
            // get today date 
    var today = new Date();
    var dd = String(today.getDate());
    var mm = String(today.getMonth() + 1); 
    var yyyy = today.getFullYear();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    today =  dd+ '/' + mm + '/' + yyyy;
            // get world cup date 
    var wcdd = String(d.getDate());
    var wcmm = String(d.getMonth() + 1); 
    var wcyyyy = d.getFullYear();
    var wch=d.getHours();
    var wcm=d.getMinutes();
    var wcs=d.getSeconds();
    var wcd= wcdd + '/' + wcmm + '/' + wcyyyy;

            // differance 
    var dl= dd-wcdd ;
    var mml= wcmm -mm ;
    var yl= wcyyyy -yyyy ;
    var hl= h -wch ;
    var ml= m -wcm ;
    var sl= s -wcs ;

    console.log("today date :", today)
    console.log("World cup kick off at :",day);
    console.log("date of world cup :" ,wcd)
    console.log("days left :", Math.abs(dl),",month left :", Math.abs(mml), ",year left :",Math.abs(yl), "time left :",Math.abs(hl),":",Math.abs(ml),":",Math.abs(sl))