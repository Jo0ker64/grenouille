function Line(speed, dir, width, type) {
    this.speed = speed;
    this.dir = dir;
    this.width = width;
    this.type = type;    
}

function Obj(x, y, line){
    this.x = x;
    this.y = y;
    this.line = line;

    this.inCollision = function(frog){
        if(frog.x + 25 >= this.x && frog.x + 5 <= (this.x + this.line.width)){
            return true;
        }
        else {return false}
    }
    
    this.move = function(){
        if(this.line.dir == 1){
            if(this.x > 650){
                this.x = -(this.line.width*3);
            }
            else{
                this.x = this.x +(this.line.speed*this.line.dir);
            }
        }
        else{
            if(this.x < -this.line.width){
                this.x = 650 +(this.line.width*3);
            }
            else{
                this.x = this.x  +(this.line.speed*this.line.dir);
            }
        }
    }
}

function Frog(){
    this.x = 310;
    this.y = 380;
    this.state = false;
    this.deg = 0;
    this.block = function(){
        this.state = false;
    };
    this.unBlock = function(){
        this.state = true;
    };
    this.isNotBlocked = function(){
        return this.state;
    };
    this.goUp = function(){
        if(this.state == true){
            if(this.y > 20){
                this.y = this.y - 30; 
            }
            this.deg = 0;
        }
    }

    this.goDown = function(){
        if(this.state = true){
            if(this.y = 170){
                if(this.x > 310){
                     while(((this.x - 10)%30)!=0){
                        this.x--;
                     }
                }
                else{
                    while(((this.x -10)%30)!=0){
                        this.x++;
                    }
                }
            }
            if(this.y < 380){
                this.y = this.y+30;
            }
            this.deg=180;
        }
    }
    this.goLeft = function(){
        if (this.state == true){
            if(this.x > 10){
                this.x = this.x - 30;
            }
            this.deg = -90;
        }
    }
    this.goRight = function(){
        if (this.state == true){
            if(this.x < 610){
                this.x = this.x + 30;
            }
            this.deg = 90;
        }
    }
    this.initPos = function(){
        this.unBlock();
        this.x = 310;
        this.y = 380;
        this.deg = 0;
    }
    this.isOut = function(){
        if( this.x <= 0 || this.x >= 620){
            return true;
        }
        else{
            return false;
        }
    }
    this.move = function(speed, dir){
        if(this.state == true){
            this.x = this.x + (speed * dir);
        }
    }
    this.hide = function(){
        this.block();
        this.x = -30;
        this.y = -30;
    }
}

function WaterLily(x, y){
    this.x = x;
    this.y = y;
    this.state = false;
    this.isUsed = function(){
        return this.state;
    }
    this.contains = function(frog){
        // ! = différent(l'inverse de la fonction ou réponse)
        if(frog.x >= this.x && (frog.x + 30) <= (this.x + 86)  && !this.isUsed()){
            return true; 
        }
        else{
            return false;
        }
    }
    this.setUsed = function(){
        this.state = true;
    }
    this.setUnused = function(){
        this.state = false;
    }
}


// class Line {
//     constructor(speed, dir, width, type) {
//       this.speed = speed;
//       this.dir = dir;
//       this.width = width;
//       this.type = type;
//     }
//   }
  
//   class Obj {
//     constructor(x, y, line) {
//       this.x = x;
//       this.y = y;
//       this.line = line;
//     }
  
//     inCollision(frog) {
//       return frog.x + 25 >= this.x && frog.x + 5 <= this.x + this.line.width;
//     }
  
//     move() {
//       const newX =
//         this.line.dir === 1
//           ? this.x > 650
//             ? -(this.line.width * 3)
//             : this.x + this.line.speed * this.line.dir
//           : this.x < -this.line.width
//           ? 650 + this.line.width * 3
//           : this.x + this.line.speed * this.line.dir;
  
//       this.x = newX;
//     }
//   }
  
//   class Frog {
//     constructor() {
//       this.x = 310;
//       this.y = 380;
//       this.state = false;
//       this.deg = 0;
//     }
  
//     block() {
//       this.state = false;
//     }
  
//     unBlock() {
//       this.state = true;
//     }
  
//     isNotBlocked() {
//       return this.state;
//     }
  
//     goUp() {
//       if (this.state && this.y > 20) {
//         this.y -= 30;
//         this.deg = 0;
//       }
//     }
  
//     goDown() {
//       if (this.state) {
//         if (this.y === 170) {
//           this.x = this.x > 310 ? this.x - ((this.x - 10) % 30) : this.x + ((this.x - 10) % 30);
//         }
//         if (this.y < 380) {
//           this.y += 30;
//         }
//         this.deg = 180;
//       }
//     }
  
//     goLeft() {
//       if (this.state && this.x > 10) {
//         this.x -= 30;
//         this.deg = -90;
//       }
//     }
  
//     goRight() {
//       if (this.state && this.x < 610) {
//         this.x += 30;
//         this.deg = 90;
//       }
//     }
  
//     initPos() {
//       this.unBlock();
//       this.x = 310;
//       this.y = 380;
//       this.deg = 0;
//     }
  
//     isOut() {
//       return this.x <= 0 || this.x >= 620;
//     }
  
//     move(speed, dir) {
//       if (this.state) {
//         this.x += speed * dir;
//       }
//     }
  
//     hide() {
//       this.block();
//       this.x = -30;
//       this.y = -30;
//     }
//   }
  
//   class WaterLily {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.state = false;
//     }
  
//     isUsed() {
//       return this.state;
//     }
  
//     contains(frog) {
//       return frog.x >= this.x && frog.x + 30 <= this.x + 86 && !this.isUsed();
//     }
  
//     setUsed() {
//       this.state = true;
//     }
  
//     setUnused() {
//       this.state = false;
//     }
//   }
  