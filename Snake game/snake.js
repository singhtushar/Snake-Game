

function init(){
	canvas = document.getElementById("mycanvas");
	W = canvas.width = 1000;
	H = canvas.height = 1000;
	pen = canvas.getContext('2d');
	cell_size = 66;
	game_over = false;

	food_img = new Image();
	food_img.src = "Assets/apple.png";

	trophy_img = new Image();
	trophy_img.src = "Assets/trophy.png";

	fruit = getRandomFood();
	score = 0;
	// JSON snake object
	snake = {
		init_len: 5,
		color: "blue",
		cells: [],
		direction: "right",
		createSnake: function(){
			for (var i = this.init_len - 1; i >= 0; i--) {
				this.cells.push({x:i, y:0});
			}
		},

		drawSnake: function(){
			for (var i = 0; i < this.init_len; i++) {
				pen.fillStyle = this.color;
				pen.fillRect(this.cells[i].x*cell_size, this.cells[i].y*cell_size, cell_size-2, cell_size-2);
			}
		},

		updateSnake:function(){
			//console.log("updating snake according to the direction property");
			//check if the snake has eaten food, increase the length of the snake and 
			//generate new food object
			var headX = this.cells[0].x;
			var headY = this.cells[0].y;

			if(headX==fruit.x && headY==fruit.y){
				console.log("Food eaten");
				fruit = getRandomFood();
				score++;

			}
			else
			{
				this.cells.pop();
			}

			
			var nextX, nextY;

			if(this.direction == "right"){
				nextX = headX + 1;
				nextY = headY;
			}
			else if(this.direction == "left"){
				nextX = headX - 1;
				nextY = headY;
			}
			else if(this.direction == "down"){
				nextX = headX;
				nextY = headY + 1;
			}
			else{
				nextX = headX;
				nextY = headY - 1;
			}

			this.cells.unshift({x: nextX, y: nextY});

			/*Logic that prevents snake from going out*/
			var last_x = Math.round(W/cell_size);
			var last_y = Math.round(H/cell_size);

			if(this.cells[0].y<0 || this.cells[0].x < 0 || this.cells[0].x > last_x || this.cells[0].y > last_y){
				game_over = true;
			}
			// console.log(score);

		}
	};

	snake.createSnake();

	function KeyPressed(e){
		if(e.key == "ArrowRight"){
			snake.direction = "right";
		}
		else if(e.key == "ArrowLeft"){
			snake.direction = "left";
		}
		else if(e.key == "ArrowDown"){
			snake.direction = "down";
		}
		else{
			snake.direction = "up";
		}
		console.log(snake.direction);
	}

	document.addEventListener('keydown', KeyPressed);

}

function draw(){
	pen.clearRect(0, 0, W, H);
	snake.drawSnake();
	food.drawFood();
	pen.drawImage(trophy_img, 20, 30);
	pen.font = "30px Roboto";
	pen.fillText(score, 55, 60);
}

function update(){
	snake.updateSnake();
}

function getRandomFood(){
	var foodX = Math.round(Math.random() * ((W-cell_size)/cell_size));
	var foodY = Math.round(Math.random() * ((H-cell_size)/cell_size));
	food = {
		x: foodX,
		y: foodY,
		color: "red",
		drawFood: function(){
			pen.drawImage(food_img, this.x*cell_size, this.y*cell_size, cell_size, cell_size);
		}
	};
	return food;
}

function gameloop(){
	if(game_over==true){
		clearInterval(f);
		alert("Game Over!!");
		return;
	}
	draw();
	update();
}

init();

var f = setInterval(gameloop,150);
