//620086629
//Rushell McKenzie 

$(document).ready(function(){
        
    var $pa = $('#puzzlearea').children();

//variable declarations

    var topp = 0;
    var leftt = 0;
    var rows = 0;
   
    var x = 0;
    var y = 0;
    
    var emp1 = 0;
    var emp2= 0;
   
    var count = 0;

    var BP=function(pos1,pos2){
        return ('' + pos1 + 'px' + ' ' + pos2 + 'px')
    }
    
   var order = function(){
        $pa.addClass('puzzlepiece');
        
        $pa.each(function(){
            $(this).css({top: topp,left: leftt,backgroundPosition: BP(x,y) });

            if((rows > 14) && (rows <= 17))
            {
                leftt += 100;
                rows++;
                x-= 100;  
            }
            
            if(rows == 18)
                {
                  emp1 = leftt;
                  emp2 = topp;
                }

            if((rows > 9) && (rows <= 13))
            {
                leftt += 100;
                rows++;

                x -= 100;
            }

             if(rows == 14)
            {
                topp += 100;
                rows++;
                y = 100;
                leftt = 0;
                x = 0;
            }


            if((rows > 4) && (rows <= 8))
            {
                leftt += 100;
                rows++;
                x -= 100;
            }


            if(rows == 9)
            {
                topp += 100;
                rows++;
                y = 200;
                leftt = 0;
                x = 0;
            }

            if(rows <= 3){
                leftt += 100;
                rows++;
                x -= 100;
            }

            if(rows == 4)
            {
                topp += 100;
                rows++;
                y = 300;
                leftt = 0;
                x = 0;
                
            }


        });
    }

    var canmove=function(obj){
    
         if(obj.position().top == (emp1 + 100)  || obj.position().top == (emp1 - 100))
         {
             if(obj.position().left == emp2) {
                return true;
                 
             }
         }
        
         if(obj.position().left == (emp2 + 100)  || obj.position().left == (emp2 - 100))
         {
             if(obj.position().top == emp1) {
                return true;
                 
             }
         }
    }
    
    var ifcanmove=function(){
        
       if(canmove($(this))){
             $(this).addClass('movablepiece');
          }
    }

    var movePiece=function()
    {
        var TempX = 0;
        var TempY = 0;

        var moveTop = $(this).position().top;
        var moveLeft = $(this).position().left;
        
        if(canmove($(this))){
            TempX = emp1;
            TempY = emp2;

            emp1 = moveTop;
            emp2 = moveLeft;

            moveTop = TempX;
            moveLeft = TempY;


            $(this).css({top: moveTop,left: moveLeft }); 
        }
    } 
    var RBg=function(){
        var rand = Math.floor(Math.random() * 4);
        var $board = $('#puzzlearea');
    
        switch(rand)
        {
            case 0:
                  $pa.css({'background-image':'background.jpg'});
                break;
	    case 1:
		  $pa.css({'background-image':'background3.jpg'});
		break;
	    case 2:
		  $pa.css({'background-image':'background4.jpg'});
		break;
            default:
                  $pa.css({'background-image':'background2.jpg'});    
        }
    }
    var shuffle=function(){
        var rand = Math.floor(Math.random() * 15);

        var obj = $pa[rand];
        var TempX = 0;
        var TempY = 0;

        var moveTop = $(obj).position().top;
        var moveLeft = $(obj).position().left;
        
        if(canmove($(obj))){
            TempX = emp1;
            TempY = emp2;

            emp1 = moveTop;
            emp2 = moveLeft;

            moveTop = TempX;
            moveLeft = TempY;

            
            $(obj).css({top: moveTop,left: moveLeft });
            
            
            count += 1;
            if(count !== 100){
                shuffle();
            }
            else{
                count = 0;
            }
        }
        else{
            shuffle();
        }
        
    }  

    order();
    
    RBg();
     
    $pa.hover(ifcanmove);
   
    $pa.click(movePiece);

    $('#shufflebutton').click(shuffle);
  
    
});
