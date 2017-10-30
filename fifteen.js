$(document).ready(function(){
    
    
            //Global Variables
    
    //Store divs as variables
    var $pieces = $('#puzzlearea').children();
    
    //Create variables to manage coordinates
    var row = 0;
    var topCoord = 0;
    var leftCoord = 0;
    
    //Create variables to manage background position
    var xPos = 0;
    var yPos = 0;
    
    //Initialize empty square
    var emptyX = 0;
    var emptyY = 0;
   
    //Counter for shuffle function
    var counter = 0;
    
    
            //Helper Functions
    
    //Calculate background position
    function BackPos(pos1,pos2){
        return ('' + pos1 + 'px' + ' ' + pos2 + 'px')
    }
    
    
    
    
    //Set the puzzle in order
    function setPuzzle(){
        //Add class to divs to create puzzle pieces
        $pieces.addClass('puzzlepiece');
        

        //align pieces
        $pieces.each(function(){
            $(this).css({top: topCoord,left: leftCoord,backgroundPosition: BackPos(xPos,yPos) });

            //Skip if statements for each row until conditions are true
            //Hence if statements will be triggered from the bottom up to allow leftCoord to be reset and used before being incremented in the new line

             //Row Four
            if((row > 14) && (row <= 17))
            {
                leftCoord += 100;
                row++;
                
                //Move along image
                xPos -= 100;
                
            }
            
            if(row == 18)
                {
                  emptyX = leftCoord;
                  emptyY = topCoord;
                }

            //Row Three
            if((row > 9) && (row <= 13))
            {
                leftCoord += 100;
                row++;
                
                //Move along image
                xPos -= 100;
            }

             if(row == 14)
            {
                //Move to next row
                topCoord += 100;
                row++;


                //Set vertical image position
                yPos = 100;

                //Reset left coordinate
                leftCoord = 0;
                
                //Reset horizontal position for image
                xPos = 0;
            }


            //Row Two
            if((row > 4) && (row <= 8))
            {
                leftCoord += 100;
                row++;
                
                //Move along image
                xPos -= 100;
            }


            if(row == 9)
            {
                //Move to next row
                topCoord += 100;
                row++;
                
                //Set vertical image position
                yPos = 200;

                //Reset left coordinate
                leftCoord = 0;
                
                //Reset horizontal position for image
                xPos = 0;
            }


            //Row One
            if(row <= 3){
                leftCoord += 100;
                row++;
                
                //Move along image
                xPos -= 100;
            }

            //Move to next row
            if(row == 4)
            {
                topCoord += 100;
                row++;
                
                //Set vertical image position
                yPos = 300;

                //Reset left coordinate
                leftCoord = 0;
                
                //Reset horizontal position for image
                xPos = 0;
                
            }


        });
    }
    
    
    //Determine whether or not a function is movable
    function isMovable(obj){
        
        //Empty space is in row above or below the square
         if(obj.position().top == (emptyX + 100)  || obj.position().top == (emptyX - 100))
         {
             //Space is in same row therefore directly above or below
             if(obj.position().left == emptyY) {
                return true;
                 
             }
         }
        
        //Empty space is in row beside the square
         if(obj.position().left == (emptyY + 100)  || obj.position().left == (emptyY - 100))
         {
             //Space is in the same column therefore directly beside the square
             if(obj.position().top == emptyX) {
                return true;
                 
             }
         }
    }
    
     //Indicate a movable piece with a color change
    function indicateMovable(){
        
       if(isMovable($(this))){
             $(this).addClass('movablepiece');
          }
    }
    
    //Move pieces
    function movePiece()
    {
        
          //Temporary variables for switching
        var TempX = 0;
        var TempY = 0;
    
        //Position of the variable to be moved
        var moveTop = $(this).position().top;
        var moveLeft = $(this).position().left;
        
        if(isMovable($(this))){
            //Perform switch
            TempX = emptyX;
            TempY = emptyY;

            emptyX = moveTop;
            emptyY = moveLeft;

            moveTop = TempX;
            moveLeft = TempY;


            $(this).css({top: moveTop,left: moveLeft }); 
        }
    }
    
    //Random 
    function shuffle(){
        var randNum = Math.floor(Math.random() * 15);
        
         //Randomly choose object
        var obj = $pieces[randNum];
        
         //Temporary variables for switching
        var TempX = 0;
        var TempY = 0;
        
       
       
        //Position of the variable to be moved
        var moveTop = $(obj).position().top;
        var moveLeft = $(obj).position().left;
        
        if(isMovable($(obj))){
            //Perform switch
            TempX = emptyX;
            TempY = emptyY;

            emptyX = moveTop;
            emptyY = moveLeft;

            moveTop = TempX;
            moveLeft = TempY;

            
            $(obj).css({top: moveTop,left: moveLeft });
            
            
            counter += 1;
            
            //Recursively call function until puzzle is shuffled
            if(counter !== 100){
                shuffle();
            }
            else{
                counter = 0;
            }
        }
        //Recursively call function movable item is selected
        else{
            shuffle();
        }
        
    }
    
    
   
    function RandomBG(){
        
        //Generate random number
        var randNum = Math.floor(Math.random() * 8);
        
        //Store puzzle board
        var $board = $('#puzzlearea');
    
        switch(randNum)
        {
            case 0:
                  $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/background.jpg?raw=true)'});
                break;
            case 1:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Barcelona.jpg?raw=true)'});
                break;
            case 2:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Eiffel%20Tower.jpg?raw=true)'});
                break;
            case 3:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Paris%20Walk.jpg?raw=true)'});
                 
                break;
            case 4:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Spider%20Wallpaper%202.jpg?raw=true)'});
                break;
            case 5:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Tokyo%20Ghoul.jpg?raw=true)'});
                break;
            case 6:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Valencia.jpg?raw=true)'});
                break;
            case 7:
                 $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Drawing%20Hands.jpg?raw=true)'});
                break;
            default:
                $pieces.css({'background-image':'url(https://github.com/CodeKingClarke/info2180-project2/blob/gh-pages/Paris%20Walk.jpg?raw=true)'});    
        }
    }
    
 
    
            // Main Game
    
    
    //Begin Game
    setPuzzle();
    
    //Choose random background
    RandomBG();
     
    //Indicate a movable piece
    $pieces.hover(indicateMovable);
   
    //Move pieces
    $pieces.click(movePiece);
     
    //Shuffle the board on clicking the shuffle button
    $('#shufflebutton').click(shuffle);
  
    
});
