function LaunchGame() { // fonction pour lancer le jeux avec toutes les variables et autres commandes

    // déclarer les variables exemple temps, vie, .....

    let life_count = 3; // 3 vies avant de mourir
    let time = 60; //60 secondes de jeux
    let score = 0;  // score demarre à zero
    let wl_full = 0;  // 
    let loading = 0;  //load le jeu au début

    let canvas = document.getElementById("board");   // 

    if (canvas.getContext) {

        ctx = canvas.getContext('2d');
        setInterval(main_loop, 16);     //mettre la boucle du jeu, l'affiche de la vie, l'affichage de tout 
        window.addEventListener('keydown', whatKey, true);  //fonction de clavier
        loading = loading + 5;

    };

    let frog_sound = new Audio("sounds/frog.waw");  // son grenouille
    let water_sound = new Audio("sound/water.waw"); // son eau
    let hit_sound = new Audio("sound/hit.waw");  // son gagné
    let boing_sound = new Audio("sound/boing.waw"); // son saut
    let bell_sound = new Audio("sound/bell.waw");  // son cloche
    frog_sound.oncanplaythrough = loading = loading + 3;  // load du son
    water_sound.oncanplaythrough = loading = loading + 3;  // load du son
    hit_sound.oncanplaythrough = loading = loading + 3;  // load du son
    boing_sound.oncanplaythrough = loading = loading + 3; // load du son
    bell_sound.oncanplaythrough = loading = loading + 3;    //load du son 

    let imgs = new Array(21); // charger toutes les images en 1 fois

    for (i = 0; i < imgs.length; i++) {
        imgs[i] = new Image();
        imgs[i].onload = function () {
            loading = loading + 3;
        };
        imgs[i].src = "imgs/img_" + i + ".gif"; // charge toutes les images avec une ligne au lieu de faire une ligne par image

    };

    function setTimer() {
        time = 60;
        interval = setInterval(function () {
            if (time == 0) {
                playSound(bell_sound);
                loseLife();
            } // pas de ; quand c'est un if
        }, 1000);
    };

    function playSound() {
        // lance le son
    };

    function loseLife() {
        // perdu

    };

    function writeMessage() {
        // message 

    };

    //voiture
    let line1 = new Line(Math.floor((Math.random() * 3) + 1), -1, 34, 1);
    let line2 = new Line(Math.floor((Math.random() * 3) + 1), 1, 28, 2);
    let line3 = new Line(Math.floor((Math.random() * 3) + 1), -1, 33, 3);
    let line4 = new Line(Math.floor((Math.random() * 3) + 1), 1, 34, 4);
    let line5 = new Line(Math.floor((Math.random() * 3) + 1), -1, 54, 5);
    // calcul laffichage de la vitesse, du déplacement, la taile et le nombre de voiture *3 +1 speed, -1 direction, 34 taille de voiture, 1 c'est la position et le type de la voiture

    //buche
    let line6 = new Line(Math.floor((Math.random() * 3) + 1), 1, 117, 6);
    let line7 = new Line(Math.floor((Math.random() * 3) + 1), -1, 180, 7);
    let line8 = new Line(Math.floor((Math.random() * 3) + 1), -1, 84, 8);
    let line9 = new Line(Math.floor((Math.random() * 3) + 1), -1, 180, 7);
    let line10 = new Line(Math.floor((Math.random() * 3) + 1), -1, 117, 6);

    let enms = new Array;
    enms[0] = new Obj(50, 350, line1);
    enms[1] = new Obj(250, 350, line1);
    enms[2] = new Obj(450, 350, line1);
    enms[3] = new Obj(120, 320, line2);
    enms[4] = new Obj(250, 320, line2);
    enms[5] = new Obj(380, 320, line2);
    enms[6] = new Obj(120, 290, line3);
    enms[7] = new Obj(250, 290, line3);
    enms[8] = new Obj(380, 290, line3);
    enms[9] = new Obj(120, 260, line4);
    enms[10] = new Obj(250, 260, line4);
    enms[11] = new Obj(380, 260, line4);
    enms[12] = new Obj(120, 230, line5);
    enms[13] = new Obj(250, 230, line5);

    let plts = new Array;
    plts[0] = new Obj(50, 170, line6);
    plts[1] = new Obj(450, 170, line6);
    plts[2] = new Obj(850, 170, line6);
    plts[3] = new Obj(120, 140, line7);
    plts[4] = new Obj(450, 140, line7);
    plts[5] = new Obj(750, 170, line7);
    plts[6] = new Obj(320, 110, line8);
    plts[7] = new Obj(720, 110, line8);
    plts[8] = new Obj(900, 110, line8);
    plts[9] = new Obj(120, 80, line9);
    plts[10] = new Obj(420, 80, line9);
    plts[11] = new Obj(720, 80, line9);
    plts[12] = new Obj(120, 50, line10);
    plts[13] = new Obj(420, 50, line10);
    plts[14] = new Obj(720, 50, line10);

    let wls = new Array;
    wls[0] = new WaterLilly(42, 0);
    wls[1] = new WaterLilly(162, 0);
    wls[2] = new WaterLilly(282, 0);
    wls[3] = new WaterLilly(482, 0);
    wls[4] = new WaterLilly(522, 0);

    let frog = new Frog();
    loading = loading + 17;



    function main_loop() {
        //initialiser les touches du claviers fleches et entrer

    };

    function whatKey(evt) {
        // défini les touches du clavier
        switch (evt.keyCode) {
            case 37:
                frog.goLeft();
                playSound(boing_sound);
                anim_time = 8;
                break;
            case 39:
                frog.goRight();
                playSound(boing_sound);
                anim_time = 8;
                break;
            case 40:
                frog.goDown();
                playSound(boing_sound);
                anim_time = 8;
                break;
            case 38:
                frog.goUp();
                playSound(boing_sound);
                anim_time = 8;
                if (frog.y < last_y && frog.state == true) {
                    last_y = frog.y;
                    score = score + 50;
                }
                break;
            case 82:
                if (message_state == 2 || message_state == 3) {
                    life_count = 3;
                    score = 0;
                    last_y = 380;
                    wl_full = 0;
                    for (i = 0; i < wls.length; i++) {
                        wls[i].setUnused();
                    }
                    message_state = 0;
                    frog.initPos();
                    setTimer();
                }
            break;
            case 13:
                if (loading == 100){
                    loading = 0;
                    frog.unBlock();
                    begin = true;
                    setTimer();
                }
            break;       
        }
    }
}