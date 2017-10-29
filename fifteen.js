$(document).ready(function()){
	var $pa = $('#puzzlearea').children();

	var $controls = $('#controls').children();

	var topp = 0;
	var leftt = 0;
	var rows = 0;

	//background variables
	var x = 0;
	var y = 0;

	var count = 0;
    
    //empty square variables
	var emp1 = 0;
	var emp2 = 0;


	function bP(pos1,pos2)
	{
		return(' ' + pos1 + 'px' + ' ' + pos2 + 'px')
	}

	function order(){
		$pa.addClass('tile');
		$pa.each(function(){
			$(this).css({top: topp, left:leftt,backgroundPosition:bP(x,y)});

			if((rows>14)&&(rows<=17))
			{
				leftt += 100;
				rows++;

				x -=100;
			}
			if(rows == 18)
			{
				emp1 = leftt;
				emp2 = topp;
			}
			if((rows > 9)&&(rows<=13)){
				leftt += 100;
				rows++;

				x-=100;
			}
			if(rows == 14){
				topp += 100;
				rows++;

				y = 100;
				leftt = 0;
				x = 0; 
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
				x -= 100;
			}
			if(rows == 4){
				topp += 100;
				rows ++;
				y = 300;
				leftt = 0;
				x = 0;
			}

		});

	}

function canmove(obj)
{
	if(obj.position().top == (emp1 +100)|| obj.position().top==(emp1 - 100))
	{
		if(obj.position().top == emp1){
			return true;
		}
	}
}
function ifcanmove()
{
	if(canmove($(this)))
	{
		$(this).addClass('canmovepiece');
	}
}
function movepiece()
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
function shuffle()
{
	var rand = Math.floor(Math.random() * 15);
	var piece = $pa[rand];

	var TempX = 0;
	var TempY = 0;

	var moveTop = $(obj).position().top;
	var moveLeft = $(obj).position().left;

	if(canmove($(obj))){
		TempX = emp1;
		TempY = emp2;

		emp1 = moveTop;
		emp2 = moveLeft;

		$(obj).css({top: moveTop, left: moveLeft});

		counter += 1;

		if(counter !== 100)
		{
			shuffle();
		}
		else{
			counter = 0;
		}

	}
	else{
		shuffle();
	}
}
function background()
{
	
}

}