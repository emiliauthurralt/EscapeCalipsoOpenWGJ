
var pasaDeEscena = 0;

//////////// OBJETOS /////////////
var tazaAgarrada = new Boolean(false);
var reglaAgarrada = new Boolean(false);
var darCafe = new Boolean(false);
var llaveAgarrada = new Boolean(false);

////////// TEXTO/////////////////
var contText = 0, contText2 = 0, contText3 = 0, contText4 = 0, contText5 = 0, contText6 = 0
var textoIntro1,textoPInt1, textoIntro2, textoPasilloJefe, textoPInt2, textoCompa1, textoPAscensor1
var txtArrayIntro1 = ['Esos momentos en los que me acuerdo de \nesos deseos tontos de adolescente, de\nquerer ser adulta.','[ Ves a tu alrededor y ves como te convertiste \nen un adulto aburrido ]','[ La vida de oficina deprimente te tiene harta ]','Todavía restan 4 hs para irme...','Las reglas no deben romperse, ni deberías, \npero como yo no trabajo en una oficina \naburrida, mejor no opino.','Aunque si quieres… podrías seguir hablando \nconmigo y así cambiar un poco las cosas. ','Estoy tan harta que debo estar escuchando \ncosas...','¿Por qué todos parecen divertirse excepto\n tú? Puedo ayudarte a revertir eso.','( ¿Está realmente tratando de ayudarme? \nDebo salir de esta oficina y tomar aire )']

var txtArrayPInt1 = ['Estoy tan cansada...','Yo sé lo que tú deseas.\nRealmente no deberías escapar, pero...\n¿Y si sales por la puerta de emergencia?','Sigo escuchando esa voz...']

var txtPasilloJefe = ['[ Sorprendida ]','Otra vez paseando por la oficina?','No, estaba buscando agua...','Pues no pareciera. Estás despedida.']

var txtArrayIntro2 = ['Otra vez en la oficina...\nEstoy agotada...','10 años en el mismo cubículo.','Haciendo siempre el mismo trabajo.','Rodeada de las mismas personas.\nOtro año de Calixto Open.','[ No le das importancia ]', 'Bueno, es verdad, quizás sea mejor otros \ndiez años en el mismo lugar.','...','Aaaaaunque no hay nadie en el pasillo','No estaría mal salir un poco...','[ Te diriges hacia la puerta ]']

var txtPInt2 = ['No veo a nadie...\nQuizás...\nPodría...','¿...Salir por esa puerta?\n¿Como una empleada mediocre?','...']

var txtOfCompa1 = ['Ey, ¿A dónde vas? Todavía es temprano','No lo sé, estoy tomando aire','¿Tu compañero? Seguro sabe tu plan.','¿Qué plan?','Perdón, ¿Dijiste algo?','No, nada. Voy al pasillo.']

var txtPAscensor1 = ['[ Cierras los ojos al atravesar la puerta ]','[ Los abres y ves el pasillo ]','Que bueno que no saliste corriendo, \npodría haberte delatado con tu jefe.','De igual forma sabemos que no eres capaz \nde cruzar una puerta sin morir','Ja\nJa\nJa\n','( No entiendo como la vida me dio una \nsegunda oportunidad )','Debería quedarme en donde estoy,\n todo es muy raro','Buena idea, \n¿Qué tal si tomás café?\nTen cuidado, el piso está sucio.','Oh no, tu jefe está en camino, \ndecide rápido, puedes ir por la escalera\ntambién.','...']

var protag,narr,jefe,compa,tecnico


///////////////MENU/////////////////
class Menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    preload(){
        this.load.image('menu', '../img/menu.png');
    }
    create(){
        this.add.sprite(0,0, 'menu').setOrigin(0);

        const play = this.add.zone(481, 314, 252, 100);
	    play.setOrigin(0);
	    play.setInteractive();
        play.once('pointerdown', () => this.opcionPulsada('play'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(play);
    }
    opcionPulsada(opcion) {
        if (opcion === 'play') {
            this.scene.start('intro1');
        }
    }
}

///////////////INTRODUCCIÓN 1/////////////////
class Intro1 extends Phaser.Scene{
    constructor(){
        super('intro1');
    }
    preload(){
        this.load.image('fondo1', '../img/bg1.png');
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('narr','../img/narr.png')

    }
    create(){
        this.add.sprite(0,0, 'fondo1').setOrigin(0);
        
        protag = this.add.image(880,462,'protagonista')
        narr = this.add.image(880,462,'narr').setVisible(false)
        textoIntro1 = this
        .add.text(340, 410, txtArrayIntro1[contText], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoIntro1))

        const puertaTrasera = this.add.zone(310, 0, 100, 100);
	    puertaTrasera.setOrigin(0);
	    puertaTrasera.setInteractive();
        puertaTrasera.once('pointerdown', () => this.opcionPulsada('pTrasera'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(puertaTrasera);
    }

    textoCambio(txt){
        contText++
        txt.setText(txtArrayIntro1[contText])
        switch(contText){
        case 4:
            this.txtNarr()
            break;
        case 6:
            this.txtProta()
            break;
        case 7:
            this.txtNarr()
            break;
        case 8:
            this.txtProta()
            break;
        }
    }
    txtProta(){
        narr.setVisible(false)
        protag.setVisible(true)
    }
    txtNarr(){
        narr.setVisible(true)
        protag.setVisible(false)
    }

    opcionPulsada(opcion){
        if(opcion === 'pTrasera'){
            this.scene.start('pasilloIntermedio')
        }
    }
    
}

///////////////PASILLO INTERMEDIO/////////////////
class PasilloIntermedio extends Phaser.Scene{
    constructor(){
        super('pasilloIntermedio')
    }
    preload(){
        this.load.image('fondoPasillo', '../img/bgpasillo1.png');
        this.load.image('flechader','../img/flechader.png')

        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('narr','../img/narr.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoPasillo').setOrigin(0);
        this.add.image(780,160,'flechader').setOrigin(0)

        protag = this.add.image(880,462,'protagonista')
        narr = this.add.image(880,462,'narr').setVisible(false)

        const opcionPE = this.add.zone(400, 20, 140, 270);
	    opcionPE.setOrigin(0);
	    opcionPE.setInteractive();
        opcionPE.once('pointerdown', () => this.opcionPulsada('pe'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPE);

        const opcionPasillo = this.add.zone(780,160, 50, 90);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
	    opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
        
        textoPInt1 = this
        .add.text(340, 410, txtArrayPInt1[contText2], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoPInt1))
    }

    textoCambio(txt){
        contText2++
        txt.setText(txtArrayPInt1[contText2])
        switch(contText2){
        case 1:
            this.txtNarr()
            break;
        case 2:
            this.txtProta()
            break;
        }
    }

    opcionPulsada(opcion) {
        pasaDeEscena++;
        if (opcion === 'pasillo') {
            this.scene.start('pasilloAscensor1');
        }
        else if (opcion === 'pe'){
            this.scene.start('died');
        }
    }
    txtProta(){
        narr.setVisible(false)
        protag.setVisible(true)
    }
    txtNarr(){
        narr.setVisible(true)
        protag.setVisible(false)
    }
}

///////////////PASILLO ASCENSOR 1/////////////////
class PasilloAscensor1 extends Phaser.Scene{
    constructor(){
        super('pasilloAscensor1');
    }
    preload(){
        this.load.image('fondoPasilloAscensor', '../img/pasilloascensor.png');
        
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('jefe','../img/jefe.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoPasilloAscensor').setOrigin(0);;

        protag = this.add.image(880,462,'protagonista')
        jefe = this.add.image(880,462,'jefe').setVisible(false)

        textoPasilloJefe = this
        .add.text(340, 410, txtPasilloJefe[contText4], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoPasilloJefe))

    }
    opcionPulsada(opcion) {
        if (opcion === 'opcionDied') {
            this.scene.start('died');
        }
    }
    textoCambio(txt){
        contText4++
        txt.setText(txtPasilloJefe[contText4])
        switch(contText4){
        case 1:
            this.txtJefe()
            break;
        case 2:
            this.txtProta()
            break;
        case 3:
            this.dead()
            break;}
        }
    txtProta(){
        jefe.setVisible(false)
        protag.setVisible(true)
    }
    txtJefe(){
        jefe.setVisible(true)
        protag.setVisible(false)
    }
    dead(){
        jefe.setVisible(true)
        protag.setVisible(false)
        const opcionDied = this.add.zone(0, 0, 1000, 1000).setOrigin(0);
	    opcionDied.setOrigin(0);
	    opcionDied.setInteractive();
        opcionDied.once('pointerdown', () => this.opcionPulsada('opcionDied'));
    }
}

///////////////PANTALLA MUERTE/////////////////
class Died extends Phaser.Scene{
    constructor(){
        super('died');
    }
    preload(){
        this.load.image('fondoDied', '../img/dead.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoDied').setOrigin(0);;

        const opcionIntro2 = this.add.zone(100, 100, 1000, 1000);
	    opcionIntro2.setOrigin(0);
	    opcionIntro2.setInteractive();
        opcionIntro2.once('pointerdown', () => this.opcionPulsada('NuevaEscena'));
    }
    opcionPulsada(opcion) {
        if (opcion === 'NuevaEscena') {
            switch(pasaDeEscena){
            case 1: this.scene.start('intro2'); break;
            case 2: this.scene.start('intro3');break;
            case 3: this.scene.start('intro4');break;
            }
        }
    }
}

///////////////INTRODUCCIÓN 2/////////////////
class Intro2 extends Phaser.Scene{
    constructor(){
        super('intro2');
    }
    preload(){
        this.load.image('fondoIntro2', '../img/bg2.png');
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('narr','../img/narr.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoIntro2').setOrigin(0);

        protag = this.add.image(880,462,'protagonista')
        narr = this.add.image(880,462,'narr').setVisible(false)
        textoIntro2 = this
        .add.text(340, 410, txtArrayIntro2[contText2], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoIntro2))

        const puertaTrasera = this.add.zone(310, 0, 100, 100);
	    puertaTrasera.setOrigin(0);
	    puertaTrasera.setInteractive();
        puertaTrasera.once('pointerdown', () => this.opcionPulsada('pTrasera'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(puertaTrasera);
    }

    textoCambio(txt){
        contText3++
        txt.setText(txtArrayIntro2[contText3])
        switch(contText3){
        case 1:
            this.txtNarr()
            break;
        case 4:
            this.txtProta()
            break;
        case 5:
            this.txtNarr()
            break;
        case 6:
            this.txtProta()
            break;
        case 7:
            this.txtNarr()
            break;
        case 8:
                this.txtProta()
                break;
        }
    }
    txtProta(){
        narr.setVisible(false)
        protag.setVisible(true)
    }
    txtNarr(){
        narr.setVisible(true)
        protag.setVisible(false)
    }

    opcionPulsada(opcion){
        if(opcion === 'pTrasera'){
            this.scene.start('pasilloIntermedio2')
        }
    }
}

/////////PASILLO INTERMEDIO 2//////
class PasilloIntermedio2 extends Phaser.Scene{
    constructor(){
        super('pasilloIntermedio2')
    }
    preload(){
        this.load.image('fondoPasillo', '../img/bgpasillo1.png');
        this.load.image('flechaizq','../img/flechaizq.png')
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('narr','../img/narr.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoPasillo').setOrigin(0);
        this.add.image(50,160,'flechaizq').setOrigin(0)

        protag = this.add.image(880,462,'protagonista')
        narr = this.add.image(880,462,'narr').setVisible(false)
        textoPInt2 = this
        .add.text(340, 410, txtPInt2[contText5], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoPInt2))

        const opcionPE2 = this.add.zone(400, 20, 140, 270);
	    opcionPE2.setOrigin(0);
	    opcionPE2.setInteractive();
        opcionPE2.once('pointerdown', () => this.opcionPulsada('pe2'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPE2);

        const opcionPasillo = this.add.zone(50,160, 50, 90);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
	    opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
        
    }

    textoCambio(txt){
        contText5++
        txt.setText(txtPInt2[contText5])
        switch(contText5){
        case 1:
            this.txtNarr()
            break;
        case 2:
            this.txtProta()
            break;
    
        }
    }
    txtProta(){
        narr.setVisible(false)
        protag.setVisible(true)
    }
    txtNarr(){
        narr.setVisible(true)
        protag.setVisible(false)
    }

    opcionPulsada(opcion) {
        pasaDeEscena++;
        if (opcion === 'pasillo') {
            this.scene.start('oficinaCompanero');
        }
        else if (opcion === 'pe2'){
            this.scene.start('puertaEmergencia2');
        }
    }
}

///////////////OFICINA DEL COMPANERO/////////////////
class OficinaCompanero extends Phaser.Scene{
    constructor(){
        super('oficinaCompanero');
    }
    preload(){
        this.load.image('fondoOficinaCompanero', '../img/oficinaCompaneroConRegla.png'); 
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('compa','../img/compa.png')
        this.load.image('narr','../img/narr.png')

    }
    create(){
        this.add.sprite(0,0, 'fondoOficinaCompanero').setOrigin(0);

        protag = this.add.image(880,462,'protagonista').setVisible(false)
        compa = this.add.image(880,462,'compa')
        narr = this.add.image(880,462,'narr').setVisible(false)

        textoCompa1 = this
        .add.text(340, 410, txtOfCompa1[contText5], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoCompa1))

        const opcionPasillo = this.add.zone(545, 0, 100, 100);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
        opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
    }

    opcionPulsada(opcion) {
        if (opcion === 'pasillo') {
            this.scene.start('pasilloAscensor2');
        }
    }

    textoCambio(txt){
        contText5++
        txt.setText(txtOfCompa1[contText5])
        switch(contText5){
        case 1:
            this.txtProta()
            break;
        case 2:
            this.txtNarr()
            break;
        case 3:
            this.txtProta()
            break;
        case 4:
            this.txtCompa()
            break;
        case 5:
            this.txtProta()
            break;
        }
    }
        
    txtProta(){
        narr.setVisible(false)
        protag.setVisible(true)
        compa.setVisible(false)
    }
    txtNarr(){
        narr.setVisible(true)
        protag.setVisible(false)
        compa.setVisible(false)
    }
    txtCompa(){
        compa.setVisible(true)
        protag.setVisible(false)
        narr.setVisible(false)
    }
}

class PasilloAscensor2 extends Phaser.Scene{
    constructor(){
        super('pasilloAscensor2');
    }
    preload(){
        this.load.image('fondopasilloAscensor2', '../img/pasilloascensor.png');
        this.load.image('protagonista','../img/protagonista.png')
        this.load.image('narr','../img/narr.png')
    }
    create(){
        this.add.sprite(0,0, 'fondopasilloAscensor2').setOrigin(0);
        
        protag = this.add.image(880,462,'protagonista')
        narr = this.add.image(880,462,'narr').setVisible(false)
    
        textoPAscensor1 = this
        .add.text(340, 410, txtPAscensor1[contText6], { font: "23px Helvetica", fill: "#FFFFFF" })
        .setInteractive()
        .on('pointerdown',() => this.textoCambio(textoPAscensor1))


        const opcionCafetera = this.add.zone(150, 100, 70, 70);
	    opcionCafetera.setOrigin(0);
	    opcionCafetera.setInteractive();
        opcionCafetera.once('pointerdown', () => this.opcionPulsada('cafetera'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionCafetera);

        const opcionPasillo = this.add.zone(317, 30, 112, 120);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
        opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);

        const opcionPiso = this.add.zone(260, 200, 500, 150);
	    opcionPiso.setOrigin(0);
	    opcionPiso.setInteractive();
        opcionPiso.once('pointerdown', () => this.opcionPulsada('piso'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPiso);
    }

    opcionPulsada(opcion) {
        if (opcion === 'cafetera') {
            this.scene.start('died');
        }
        else if (opcion === 'pasillo') {
            this.scene.start('died');
        }
        else if (opcion === 'piso') {
            this.scene.start('died');
        }
    }
    
    textoCambio(txt){
        contText6++
        txt.setText(txtPAscensor1[contText6])
        switch(contText6){
        case 2:
            this.txtNarr()
            break;
        case 5:
            this.txtProta()
            break;
        case 7:
            this.txtNarr()
            break;
        case 9:
            this.txtProta()
            break;
        }
    }
    txtProta(){
        narr.setVisible(false)
        protag.setVisible(true)
    }
    txtNarr(){
        narr.setVisible(true)
        protag.setVisible(false)
    }
}

///////////////PUERTA DE EMERGENCIA 2 - TERRAZA/////////////////
class PuertaEmergencia2 extends Phaser.Scene{
    constructor(){
        super('puertaEmergencia2');
    }
    preload(){
        this.load.image('fondoPuertaEmergencia', '../img/terrazasinescalera.png');
        this.load.image('flechader','../img/flechader.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoPuertaEmergencia').setOrigin(0);
        this.add.image(520,40,'flechader').setOrigin(0)

        const opcionAtras = this.add.zone(20, 0, 200, 380);
	    opcionAtras.setOrigin(0);
	    opcionAtras.setInteractive();
        opcionAtras.once('pointerdown', () => this.opcionPulsada('saltar'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionAtras);

        const opcionSaltar = this.add.zone(520, 40, 50, 90);
	    opcionSaltar.setOrigin(0);
	    opcionSaltar.setInteractive();
	    opcionSaltar.once('pointerdown', () => this.opcionPulsada('atras'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionSaltar);
    }
    opcionPulsada(opcion) {
        if (opcion === 'saltar') {
            this.scene.start('died');
        }
        else if(opcion === 'atras'){
            this.scene.start('died');
        }
    }
}

///////////////INTRODUCCIÓN 3/////////////////
class Intro3 extends Phaser.Scene{
    constructor(){
        super('intro3');
    }
    preload(){
        this.load.image('fondoIntro3', '../img/bg3.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoIntro3').setOrigin(0);

        ///OBJETO TAZA ///////////
        const tazaVerde = this.add.zone(528, 110, 30, 35);
	    tazaVerde.setOrigin(0);
	    tazaVerde.setInteractive();
        tazaVerde.once('pointerdown', () => this.agregarInventario('tazaVerde'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(tazaVerde);
    }
    
    agregarInventario(opcion){
        if(opcion== 'tazaVerde'){
            tazaAgarrada = true;
            this.scene.start('intro3ConTaza')
        }
    }
}


class Intro3TazaAgarrada extends Phaser.Scene{
    constructor(){
        super('intro3ConTaza');
    }
    preload(){
        this.load.image('objTaza','../img/tazaConCafe.png');
        this.load.image('fondoIntro3SinTaza','../img/bg3SinTaza.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoIntro3SinTaza').setOrigin(0);
        this.add.sprite(50,400, 'objTaza').setOrigin(0);

        const puertaTrasera = this.add.zone(310, 0, 100, 100);
	    puertaTrasera.setOrigin(0);
	    puertaTrasera.setInteractive();
        puertaTrasera.once('pointerdown', () => this.opcionPulsada('pTrasera'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(puertaTrasera);
    }

    opcionPulsada(opcion){
        if(opcion === 'pTrasera'){
            this.scene.start('pasilloIntermedio3')
        }
    }
}

///////////////PASILLO INTERMEDIO 3/////////////////
class PasilloIntermedio3 extends Phaser.Scene{
    constructor(){
        super('pasilloIntermedio3');
    }
    preload(){
        this.load.image('fondoPasillo', '../img/bgpasillo1.png');
        this.load.image('flechaizq','../img/flechaizq.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoPasillo').setOrigin(0);
        this.add.image(50,160,'flechaizq').setOrigin(0)

        const opcionPE3 = this.add.zone(400, 20, 140, 270);
	    opcionPE3.setOrigin(0);
	    opcionPE3.setInteractive();
        opcionPE3.once('pointerdown', () => this.opcionPulsada('pe3'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPE3);

        const opcionPasillo = this.add.zone(50,160, 50, 90);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
	    opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
        
    }

    opcionPulsada(opcion) {
        pasaDeEscena++;
        if (opcion === 'pasillo') {
            this.scene.start('oficinaCompanero2');
        }
        else if (opcion === 'pe3'){
            this.scene.start('puertaEmergencia3');
        }
    }
}

///////////////OFICINA DEL COMPANERO 2/////////////////
class OficinaCompanero2 extends Phaser.Scene{
    constructor(){
        super('oficinaCompanero2');
    }
    preload(){
        this.load.image('fondoOficinaCompanero', '../img/oficinaCompaneroConRegla.png');
        this.load.image('reglaRGB', '../img/reglaRGB.png'); 
        this.load.image('tazaSinCafe', '../img/tazaSinCafe.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoOficinaCompanero').setOrigin(0);

        const opciondarCafe = this.add.zone(550, 100, 35, 35);
	    opciondarCafe.setOrigin(0);
	    opciondarCafe.setInteractive();
        opciondarCafe.once('pointerdown', () => this.opcionPulsada('darCafe'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opciondarCafe);

        const opcionAgarrarRegla = this.add.zone(750, 180, 100, 20);
	    opcionAgarrarRegla.setOrigin(0);
	    opcionAgarrarRegla.setInteractive();
        opcionAgarrarRegla.once('pointerdown', () => this.opcionPulsada('agarrarRegla'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionAgarrarRegla);
    }

    opcionPulsada(opcion) {
        if (opcion === 'darCafe') {
            darCafe = true
            this.add.sprite(170,430, 'tazaSinCafe').setOrigin(0);
            if(reglaAgarrada === true)this.scene.start('oficinaCompanero2SinRegla');
        }
        else if(opcion === 'agarrarRegla'){
            reglaAgarrada = true
            this.add.sprite(90,430, 'reglaRGB').setOrigin(0);
            if(darCafe === true) this.scene.start('oficinaCompanero2SinRegla');
        }
    }
}

///////////////OFICINA DEL COMPANERO 2  - DAR TAZA - QUITAR REGLA /////////////////
class OficinaCompanero2SinRegla extends Phaser.Scene{
    constructor(){
        super('oficinaCompanero2SinRegla');
    }
    preload(){
        this.load.image('fondoOficinaCompanero', '../img/oficinacompa.png'); ////// cambiar
        this.load.image('reglaRGB', '../img/reglaRGB.png'); 
        this.load.image('tazaSinCafe', '../img/tazaSinCafe.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoOficinaCompanero').setOrigin(0);
        this.add.sprite(170,430, 'tazaSinCafe').setOrigin(0);
        this.add.sprite(90,430, 'reglaRGB').setOrigin(0);

        const opcionPasillo = this.add.zone(545, 0, 100, 100);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
        opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
    }

    opcionPulsada(opcion) {
        if (opcion === 'pasillo') {
            this.scene.start('pasilloAscensor3');
        }
    }
}

///////////////PASILLO ASCENSOR 3/////////////////
class PasilloAscensor3 extends Phaser.Scene{
    constructor(){
        super('pasilloAscensor3');
    }
    preload(){
        this.load.image('fondopasilloAscensor3', '../img/pasilloascensor.png');
    }
    create(){
        this.add.sprite(0,0, 'fondopasilloAscensor3').setOrigin(0);

        const opcionPasillo = this.add.zone(317, 30, 112, 120);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
        opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
    }

    opcionPulsada(opcion) {
        if (opcion === 'pasillo') {
            this.scene.start('pasilloescaleras1');
        }
    }
}

///////////////PASILLO ESCALERAS 1/////////////////
class PasilloEscaleras1 extends Phaser.Scene{
    constructor(){
        super('pasilloescaleras1');
    }
    preload(){
        this.load.image('fondoPasilloEscaleras', '../img/pasilloescaleras.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoPasilloEscaleras').setOrigin(0);;

        const opcionDied = this.add.zone(100, 100, 1000, 1000);
	    opcionDied.setOrigin(0);
	    opcionDied.setInteractive();
        opcionDied.once('pointerdown', () => this.opcionPulsada('opcionDied'));
    }
    opcionPulsada(opcion) {
        if (opcion === 'opcionDied') {
            this.scene.start('died');
        }
    }
}

///////////////PUERTA DE EMERGENCIA 3 - ESCALERA/////////////////
class PuertaEmergencia3 extends Phaser.Scene{
    constructor(){
        super('puertaEmergencia3');
    }
    preload(){
        this.load.image('fondoPuertaEmergencia', '../img/terrazaconescalera.png'); 
        this.load.image('flechader','../img/flechader.png')
    }
    create(){
        this.add.sprite(0,0, 'fondoPuertaEmergencia').setOrigin(0);
        this.add.image(520,40,'flechader').setOrigin(0)

        const opcionBajar = this.add.zone(520, 40, 50, 90);
	    opcionBajar.setOrigin(0);
	    opcionBajar.setInteractive();
	    opcionBajar.once('pointerdown', () => this.opcionPulsada('bajar'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionBajar);
    }
    opcionPulsada(opcion) {
        if(opcion === 'bajar'){
            this.scene.start('pasilloAscensor4');
        }
    }
}

///////////////PASILLO ASCENSOR 4   /////////////////
class PasilloAscensor4 extends Phaser.Scene{
    constructor(){
        super('pasilloAscensor4');
    }
    preload(){
        this.load.image('fondopasilloAscensor3', '../img/pasilloascensor.png');
    }
    create(){
        this.add.sprite(0,0, 'fondopasilloAscensor3').setOrigin(0);

        const opcionPasillo = this.add.zone(317, 30, 112, 120);
	    opcionPasillo.setOrigin(0);
	    opcionPasillo.setInteractive();
        opcionPasillo.once('pointerdown', () => this.opcionPulsada('pasillo'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionPasillo);
    }

    opcionPulsada(opcion) {
        if (opcion === 'pasillo') {
            this.scene.start('pasilloescaleras2');
        }
    }
}

///////////////PASILLO ESCALERAS 2/////////////////
class PasilloEscaleras2 extends Phaser.Scene{
    constructor(){
        super('pasilloescaleras2');
    }
    preload(){
        this.load.image('fondoPasilloEscaleras', '../img/pasilloescaleras.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoPasilloEscaleras').setOrigin(0);;

        const opcionOficinaTecnico = this.add.zone(800, 0, 150, 300);
	    opcionOficinaTecnico.setOrigin(0);
	    opcionOficinaTecnico.setInteractive();
        opcionOficinaTecnico.once('pointerdown', () => this.opcionPulsada('oficinaTecnico'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionOficinaTecnico);
    }
    opcionPulsada(opcion) {
        if (opcion === 'oficinaTecnico') {
            this.scene.start('oficinaTecnico1');
        }
    }
}

///////////////OFICINA TECNICO 1/////////////////
class OficinaTecnico1 extends Phaser.Scene{
    constructor(){
        super('oficinaTecnico1');
    }
    preload(){
        this.load.image('fondoOficinaTecnico', '../img/oficinatecnico.png'); 
    }
    create(){
        this.add.sprite(0,0, 'fondoOficinaTecnico').setOrigin(0);

        const opcionDied = this.add.zone(100, 100, 1000, 1000);
	    opcionDied.setOrigin(0);
	    opcionDied.setInteractive();
        opcionDied.once('pointerdown', () => this.opcionPulsada('opcionDied'));
    }
    opcionPulsada(opcion) {
        if (opcion === 'opcionDied') {
            this.scene.start('died');
        }
    }
}

///////////////INTRO 4 /////////////////
class Intro4 extends Phaser.Scene{
    constructor(){
        super('intro4');
    }
    preload(){
        this.load.image('fondoIntro4', '../img/bg4.png');
        this.load.image('llaves', '../img/llaves.png');
    }
    create(){
        this.add.sprite(0,0, 'fondoIntro4').setOrigin(0); 
        this.llaves = this.add.sprite(800,280, 'llaves');
        
        const opcionAgarrarLlave = this.add.zone(780, 260, 40, 40);
	    opcionAgarrarLlave.setOrigin(0);
	    opcionAgarrarLlave.setInteractive();
        opcionAgarrarLlave.once('pointerdown', () => this.opcionPulsada('opcionAgarrarLlave'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(opcionAgarrarLlave);

	    const ganar = this.add.zone(310, 0, 100, 100);
	    ganar.setOrigin(0);
	    ganar.setInteractive();
        ganar.on('pointerdown', () => this.opcionPulsada('ganar'));
        //this.add.graphics().lineStyle(2, 0xff0000).strokeRectShape(ganar);

    }

    opcionPulsada(opcion) {
        if (opcion === 'opcionAgarrarLlave') {
            llaveAgarrada = true;
            this.llaves.setPosition(150,450);
        }
        else if(llaveAgarrada === true){
            this.scene.start('ganaste');
        }
    }
}

class Ganaste extends Phaser.Scene{
    constructor(){
        super('ganaste');
    }
    preload(){
        this.load.image('ganaste', '../img/ganaste.jpg');
    }
    create(){
        this.add.sprite(0,0, 'ganaste').setOrigin(0)
        this.add.text(300, 250, "YOU WON", { font: "100px Helvetica", fill: "#FFDB58" }).setInteractive().on('pointerdown',() => this.opcionPulsada('creditos'));
    }
    opcionPulsada(opcion) {
        if (opcion === 'creditos') {
            this.scene.start('creditos');
        }
    }
}

class Creditos extends Phaser.Scene{
    constructor(){
        super('creditos');
    }
    preload(){
        this.load.image('ganaste', '../img/ganaste.jpg');
    }
    create(){
        this.add.sprite(0,0, 'ganaste').setOrigin(0)
        this.add.text(300, 50, "CREDITOS", { font: "100px Helvetica", fill: "#FFDB58" })
        this.add.text(250, 250, "PROGRAMACION - Lucero y Emilia \nNARRATIVA - Makuke \nGAME DESIGN - Galita \nARTE - Dezz y Dan", { font: "40px Helvetica", fill: "#FFDB58" })
    }
}

const config ={
    width: 960,
    height: 540,
    type: Phaser.AUTO,
    scene: [Menu, Intro1, PasilloIntermedio,PasilloAscensor1, Intro2,  PasilloIntermedio2, OficinaCompanero, PasilloAscensor2, Died, PuertaEmergencia2, Intro3, Intro3TazaAgarrada, PasilloIntermedio3, PasilloAscensor3, OficinaCompanero2, OficinaCompanero2SinRegla, PasilloEscaleras1, PuertaEmergencia3, PasilloAscensor4, PasilloEscaleras2, OficinaTecnico1, Intro4, Ganaste,Creditos],
    scale:{
    mode: Phaser.Scale.FIT
    },
}

var game = new Phaser.Game(config);