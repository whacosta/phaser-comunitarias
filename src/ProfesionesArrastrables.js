var variableglogal;

import monedaRuta from './assets/coin.png';
import barRuta from './assets/hamburguer.png';
import estudiandoMadre from './assets/estudiandoMadre2.png';
import estudiando from './assets/estudiando5.png';
import preguntando from './assets/preguntando5.png';
import buenaNota from './assets/buenaNota2.png';
import graduado from './assets/graduado5.png';
import empresa from './assets/empresa3.png';
import numero1 from './assets/number1xxx.png';
import numero2 from './assets/number2.png';
import numero3 from './assets/number3.svg';
import numero4 from './assets/number4.png';
import numero5 from './assets/number5.png';
import numero6 from './assets/number6.png';

//var imagen1=require('./assets/preguntando5.png');

function comenzarJuegoExterno() {
	var juegoHtml="<div id='mySidenav' class='sidenav'><a href='javascript:void(0)' class='closebtn'>&times;</a><a id='prueba' href='#'>BoyGirl</a><a href='#'>Services</a><a href='#'>Clients</a><a href='#'>Contact</a></div><div id='navBar'><div id='menu'><img></div><div id='siguienteJuego' >	<i class='fas fa-caret-right'></i></div><div id='puntaje' >0</div><div id='moneda'><img></div></div><svg id='misvg' class='contenedorSVG'><rect class='recta' draggable='false' data-imagen="+estudiandoMadre+" transform='matrix(1,0,0,1,0,0)'/><image id='imagenPrueba' class='imagenCaja'  data-ruta-imagen="+numero1+" transform='matrix(1,0,0,1,0,0)'/><rect class='recta' draggable='false' data-imagen="+estudiando+" transform='matrix(1,0,0,1,0,0)'/><image class='imagenCaja' data-ruta-imagen="+numero2+"  transform='matrix(1,0,0,1,0,0)'/><rect class='recta' draggable='false' data-imagen="+preguntando+"  transform='matrix(1,0,0,1,0,0)'/><image class='imagenCaja' data-ruta-imagen="+numero3+"  transform='matrix(1,0,0,1,0,0)'/><rect class='recta' draggable='false' data-imagen="+buenaNota+"  transform='matrix(1,0,0,1,0,0)'/><image class='imagenCaja' data-ruta-imagen="+numero4+"  transform='matrix(1,0,0,1,0,0)'/><rect class='recta' draggable='false' data-imagen="+graduado+"  transform='matrix(1,0,0,1,0,0)'/><image class='imagenCaja' data-ruta-imagen="+numero5+"  transform='matrix(1,0,0,1,0,0)'/><rect class='recta' draggable='false' data-imagen="+empresa+"  transform='matrix(1,0,0,1,0,0)'/><image class='imagenCaja' data-ruta-imagen="+numero6+" transform='matrix(1,0,0,1,0,0)'/><image class='imagenArrastrable'  draggable='true' data-ruta-imagen="+buenaNota+" transform='matrix(1,0,0,1,0,0)' /><image class='imagenArrastrable'  draggable='true'  data-ruta-imagen="+estudiando+"  transform='matrix(1,0,0,1,0,0)' /><image class='imagenArrastrable'  draggable='true'  data-ruta-imagen="+estudiandoMadre+"  transform='matrix(1,0,0,1,0,0)' /><image class='imagenArrastrable'  draggable='true'  data-ruta-imagen="+preguntando+"  transform='matrix(1,0,0,1,0,0)' /><image class='imagenArrastrable'  draggable='true'  data-ruta-imagen="+graduado+"  transform='matrix(1,0,0,1,0,0)' /><image class='imagenArrastrable'  draggable='true'  data-ruta-imagen="+empresa+"  transform='matrix(1,0,0,1,0,0)' /></svg>";

	var juegoStyle="*{margin: 0;padding: 0;}html,body{margin: 0;padding: 0;height: 100%;overflow:hidden;}#navBar{background: rgb(40, 45, 45);height: 10%;}#menu{height: 100%;float: left;cursor: pointer;}#moneda,#puntaje{float: right;height: 100%;}#moneda img{transition:0.5s;}#puntaje{color: white;text-align: center;font-size: 7vh;}#menu i{cursor: pointer;}#menu:hover{opacity: 1;}#siguienteJuego{float: left;width: 20%;height: 100%;background: rgba(0,210,0,1);margin-left:  35%;border-radius: 2px;opacity: 0;text-align: center;display: none;}#siguienteJuego:hover{cursor: pointer;}#siguienteJuego i{color:rgb(237,237,237);font-size: 10vh;}#misvg{background: rgba(20,140,220,0.6);width: 100%;height: 90%;}.grupoCaja{transition: 0.11s;}.grupoCajax{stroke:black;stroke-width:7;stroke-opacity:0.8;fill:red;fill-opacity:0.5;}.caja{stroke:black;stroke-width:7;stroke-opacity:0.8;fill:red;fill-opacity:0.5;transition: 0.3s;}.imagenCaja{opacity: 0.6;transition: 0.2s;}.imagenArrastrable{opacity: 1;}.recta{stroke:black;stroke-width:7;stroke-opacity:0.8;fill:red;fill-opacity:0.5;transition: 0.11s;}.hover{fill-opacity:0.8;fill:rgb(0,240,0);}.imagenCaja{opacity: 1;pointer-events: none;transition: 0.11s;}.rectaOcupada{stroke:black;stroke-width:7;stroke-opacity:0.8;transition: 0.11s;fill:white;fill-opacity:0.7;}.imagenEnlazada{transition: 0.2s;opacity: 1;}.imagenEnArrastre{opacity: 0.5}@keyframes example {0% {transform: scale(1);}30% {transform: scale(1.01);}70% {transform: scale(1.01);}100% {transform: scale(1);}}@keyframes girarMoneda {0% {transform: rotateY(0deg) scale(1);}50% {transform: rotateY(360deg) scale(1.3);}100% {transform: rotateY(0deg) scale(1);}}@keyframes siguienteJuegoAnimacion {0% {opacity: 0.2;}50% {opacity: 1}100% {opacity: 0.2;}}.sidenav {height: 100%;width: 0;position: fixed;z-index: 1;top: 0;left: 0;background-color: #111;overflow-x: hidden;transition: 0.5s;padding-top: 60px;}.sidenav a {padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;transition: 0.3s;}.sidenav a:hover {color: #f1f1f1;}.sidenav .closebtn {position: absolute;top: 0;right: 25px;font-size: 36px;margin-left: 50px;}"
		
	var bubble1Sound;
	var bubble1SoundEnd;
	var isDragging;
	var X;
	var Y;
	var target;
	var backElement=null;
	var listaRectas;

	start();

	function colocarCajas() {
		var rectas=document.getElementsByClassName("recta");
		var imagenes=document.getElementsByClassName("imagenCaja");
		var imagenesArrastrables=document.getElementsByClassName("imagenArrastrable");
		for (var i =0; i < rectas.length; i++) {
			if (i==0) {

				rectas[i].setAttribute("x",(1.5/100)*misvg.getAttribute("width"));
	        	rectas[i].setAttribute("y",(2/100)*(misvg.getAttribute("width")));
	        	rectas[i].setAttribute("width",(14.5/100)*(misvg.getAttribute("width")));
	        	rectas[i].setAttribute("height",(45/100)*(misvg.getAttribute("height")));
	        	rectas[i].setAttribute("indexImg",i);

	        	var margenLeft=(parseFloat(rectas[i].getAttribute("width"))-0.6*parseFloat(rectas[i].getAttribute("width")))/2;
	        	var margenTop=(parseFloat(rectas[i].getAttribute("height"))-0.6*parseFloat(rectas[i].getAttribute("height")))/2;

	        	imagenes[i].setAttribute("x",parseFloat(rectas[i].getAttribute("x"))+margenLeft);
	        	imagenes[i].setAttribute("y",parseFloat(rectas[i].getAttribute("y"))+margenTop);
	        	imagenes[i].setAttribute("width",parseFloat(rectas[i].getAttribute("width"))-margenLeft*2);
	        	imagenes[i].setAttribute("height",parseFloat(rectas[i].getAttribute("height"))-margenTop*2);
	        	imagenes[i].setAttribute("href",imagenes[i].getAttribute("data-ruta-imagen"));

	    		imagenesArrastrables[i].setAttribute("x",parseFloat(rectas[i].getAttribute("x")));
	        	imagenesArrastrables[i].setAttribute("y",parseFloat(rectas[i].getAttribute("y"))+parseFloat(rectas[i].getAttribute("height"))+(15/100)*misvg.getAttribute("height"));
	        	imagenesArrastrables[i].setAttribute("width",parseFloat(rectas[i].getAttribute("width")));
	        	imagenesArrastrables[i].setAttribute("height",(35/100)*(misvg.getAttribute("height")));
	        	imagenesArrastrables[i].setAttribute("href",imagenesArrastrables[i].getAttribute("data-ruta-imagen"));
	        	

	    		
	    
			}
			else{
				rectas[i].setAttribute("x",parseFloat(rectas[i-1].getAttribute("x"))+parseFloat(rectas[i-1].getAttribute("width"))+((2/100)*misvg.getAttribute("width")));
	        	rectas[i].setAttribute("y",rectas[i-1].getAttribute("y"));
	        	rectas[i].setAttribute("width",rectas[i-1].getAttribute("width"));
	        	rectas[i].setAttribute("height",rectas[i-1].getAttribute("height"));
	        	rectas[i].setAttribute("indexImg",i);

	        	imagenes[i].setAttribute("x",parseFloat(rectas[i].getAttribute("x"))+margenLeft);
	        	imagenes[i].setAttribute("y",parseFloat(rectas[i].getAttribute("y"))+margenTop);
	        	imagenes[i].setAttribute("width",parseFloat(rectas[i].getAttribute("width"))-margenLeft*2);
	        	imagenes[i].setAttribute("height",parseFloat(rectas[i].getAttribute("height"))-margenTop*2);
	        	imagenes[i].setAttribute("href",imagenes[i].getAttribute("data-ruta-imagen"));

	    		imagenesArrastrables[i].setAttribute("x",parseFloat(rectas[i].getAttribute("x")));
	        	imagenesArrastrables[i].setAttribute("y",parseFloat(rectas[i].getAttribute("y"))+parseFloat(rectas[i].getAttribute("height"))+(15/100)*misvg.getAttribute("height"));
	        	imagenesArrastrables[i].setAttribute("width",parseFloat(rectas[i].getAttribute("width")));
	        	imagenesArrastrables[i].setAttribute("height",(35/100)*(misvg.getAttribute("height")));
	        	imagenesArrastrables[i].setAttribute("href",imagenesArrastrables[i].getAttribute("data-ruta-imagen"));
			}
		}
	}
	function start() {
		//ADAPTACION////
		var head=document.getElementsByTagName('head')[0];
		var divElementExternoJuego=document.createElement('div');
		divElementExternoJuego.setAttribute('id','contenedorJuego');
		divElementExternoJuego.style.width='100%';
		divElementExternoJuego.style.height='100%';

		divElementExternoJuego.innerHTML=juegoHtml;
		//se esconde al canvas pero no se lo elimina
		document.getElementsByTagName('canvas')[0].style.display='none';
		document.getElementsByTagName('body')[0].appendChild(divElementExternoJuego);
		//se crea el estilo necesario para contener el estilo del juego original y ser agregado al index
		var style = document.createElement('style');
		style.setAttribute('id','estiloJuegoExterno');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = juegoStyle;
		} else {
		  style.appendChild(document.createTextNode(juegoStyle));
		}
		head.appendChild(style);
		////////////
		bubble1Sound = new Audio("./bubble1.mp3");
		bubble1SoundEnd = new Audio("./bubbleEnd1.mp3");
		
		misvg.setAttribute("width",parseInt(misvg.getBoundingClientRect().width));
		misvg.setAttribute("height",parseInt(misvg.getBoundingClientRect().height));

	    colocarCajas();

	    //document.getElementsByClassName('imagenArrastrable')[2].setAttribute('href',imagen1);
	    moneda.style.width=window.getComputedStyle(moneda,null).getPropertyValue('height');
	    moneda.children[0].width=(80/100)*parseFloat(window.getComputedStyle(moneda,null).getPropertyValue('height'));
	    moneda.children[0].height=(80/100)*parseFloat(window.getComputedStyle(moneda,null).getPropertyValue('height'));
	    moneda.children[0].src=monedaRuta;
	    moneda.children[0].style.margin=((10/100)*parseFloat(window.getComputedStyle(moneda,null).getPropertyValue('height')))+"px";

	    menu.style.width=window.getComputedStyle(menu,null).getPropertyValue('height');
	    menu.children[0].width=(80/100)*parseFloat(window.getComputedStyle(menu,null).getPropertyValue('height'));
	    menu.children[0].height=(80/100)*parseFloat(window.getComputedStyle(menu,null).getPropertyValue('height'));
	    menu.children[0].src=barRuta;
	    menu.children[0].style.margin=((10/100)*parseFloat(window.getComputedStyle(menu,null).getPropertyValue('height')))+"px";

	    puntaje.style.width=window.getComputedStyle(puntaje,null).getPropertyValue('height');

	    window.addEventListener('resize',handleResize);
		misvg.addEventListener('mousedown',handleMouseDown,false);
		misvg.addEventListener('mousemove',handleMouseMove,false);
		misvg.addEventListener('mouseup',handleMouseUp,false);
		misvg.addEventListener('mouseover',handleMouseOver,false);

		misvg.addEventListener('touchstart',handleTouchStart,false);
		misvg.addEventListener('touchmove',handleTouchMove,false);
		misvg.addEventListener('touchend',handleTouchEnd,false);
		misvg.addEventListener('touchcancel',handleTouchCancel,false);

		prueba.addEventListener('click',about);
		siguienteJuego.addEventListener('click',siguienteJuegoPhaser);
		menu.addEventListener('click',openNav);
		mySidenav.children[0].addEventListener('click',closeNav);
	}

	function about(argument) {
		document.getElementById('estiloJuegoExterno').parentElement.removeChild(document.getElementById('estiloJuegoExterno'));
		window.removeEventListener('resize',handleResize);
		document.body.removeChild(document.getElementById('contenedorJuego'));
		document.getElementsByTagName('canvas')[0].style.display='block';
		ProfesionesArrastrables.game.state.start('BoyGirl');
		
	}

	function siguienteJuegoPhaser(e) {
		document.getElementById('estiloJuegoExterno').parentElement.removeChild(document.getElementById('estiloJuegoExterno'));
		window.removeEventListener('resize',handleResize);
		document.body.removeChild(document.getElementById('contenedorJuego'));
		document.getElementsByTagName('canvas')[0].style.display='block';
		ProfesionesArrastrables.game.state.start('DefinisteTuSueño');
	}

	///////// TOUCH EVENTS ///////////

	function handleTouchStart(e) {
		e.preventDefault();
		if (e.changedTouches[0].target.nodeName!='svg' && e.changedTouches[0].target.getAttribute('draggable')=='true') {
			X=parseInt(e.changedTouches[0].clientX-misvg.getBoundingClientRect().left);
			Y=parseInt(e.changedTouches[0].clientY-misvg.getBoundingClientRect().top);
			target=misvg.removeChild(e.changedTouches[0].target);
			misvg.appendChild(target);
			isDragging=true;
		}
	}
	function handleTouchMove(e) {
		console.log('TOUCHMOVE');
		e.preventDefault();
		handleMove(e);
	}
	function handleTouchEnd(e) {
		e.preventDefault();
		handleUp(e);
	}
	function handleTouchCancel(e) {
		e.preventDefault();
		isDragging=false;
		target=null;
		backElement=null;
		console.log('CANCEL');
	}
	/////////// MOUSE EVENTS //////////

	function handleMouseDown(e) {
		if (e.target.nodeName!='svg' && e.target.getAttribute('draggable')=='true') {
			X=e.offsetX;
			Y=e.offsetY;
			target=misvg.removeChild(e.target);
			misvg.appendChild(target);
			isDragging=true;
		}
	}
	function handleMouseMove(e) {
		handleMove(e);
	}
	function handleMouseUp(e) {
		handleUp(e);
	}
	function handleMouseOver(e) {
	}

	//////////////////////////////////

	function setMatrixString(a,b,c,d,e,f) {
		return "matrix("+a+","+b+","+c+","+d+","+e+","+f+")"
	}
	function getIndexMatrix(s,index) {
		// body...
		if (s.length>=0) {
			var substring=s.substring(7,s.length-1);
			var res=substring.split(",");
			return parseInt(res[index]);
		}
		return null;
	}

	function getMatrix(s) {
		if (s.length>=0) {
			var substring=s.substring(7,s.length-1);
			var res=substring.split(",");
			return res;
		}
		return null;
	}

	function scaleCenter(element,scale) {
		var matrixArray=getMatrix(element.getAttribute('transform'));
		var newScale=scale;
		var oldScale=parseFloat(matrixArray[0]);
		var transitionX=parseInt(matrixArray[4]);
		var transitionY=parseInt(matrixArray[5]);

		var centerWidth=oldScale*parseInt(element.getAttribute("width"))/2;
		var centerHeight=oldScale*parseInt(element.getAttribute("height"))/2;
		var cx=parseInt(element.getAttribute('x'))+centerWidth+transitionX;
		var cy=parseInt(element.getAttribute('y'))+centerHeight+transitionY;

		var eNew=cx-(newScale*cx);
		var fNew=cy-(newScale*cy);
		element.setAttribute('transform',setMatrixString(newScale,0,0,newScale,eNew,fNew)) ;
	}

	function handleResize(e) {
		console.log("resize");
		moneda.style.width=window.getComputedStyle(moneda,null).getPropertyValue('height');
	    moneda.children[0].width=(80/100)*parseFloat(window.getComputedStyle(moneda,null).getPropertyValue('height'));
	    moneda.children[0].height=(80/100)*parseFloat(window.getComputedStyle(moneda,null).getPropertyValue('height'));
	    moneda.children[0].style.margin=((10/100)*parseFloat(window.getComputedStyle(moneda,null).getPropertyValue('height')))+"px";

	    menu.style.width=window.getComputedStyle(menu,null).getPropertyValue('height');
	    menu.children[0].width=(80/100)*parseFloat(window.getComputedStyle(menu,null).getPropertyValue('height'));
	    menu.children[0].height=(80/100)*parseFloat(window.getComputedStyle(menu,null).getPropertyValue('height'));

	    menu.children[0].style.margin=((10/100)*parseFloat(window.getComputedStyle(menu,null).getPropertyValue('height')))+"px";
	    puntaje.style.width=window.getComputedStyle(puntaje,null).getPropertyValue('height');
		var actualSvgWidth=misvg.getBoundingClientRect().width;
		var actualSvgHeight=misvg.getBoundingClientRect().height;
		var antiguoSvgWidth=parseFloat(misvg.getAttribute("width"));
		var antiguoSvgHeight=parseFloat(misvg.getAttribute("height"));

		misvg.setAttribute("width",actualSvgWidth);
	  	misvg.setAttribute("height",actualSvgHeight);

		var elementosSvg=misvg.children;
		for (var i =  elementosSvg.length- 1; i >= 0; i--) {
			var element=elementosSvg[i];
			var newWidth=(actualSvgWidth*parseFloat(element.getAttribute("width")))/parseFloat(antiguoSvgWidth);

			var newHeight=(actualSvgHeight*parseFloat(element.getAttribute("height")))/parseFloat(antiguoSvgHeight);
			var matrix=getMatrix(element.getAttribute("transform"));
			var newX=(actualSvgWidth*parseFloat(element.getAttribute("x")))/parseFloat(antiguoSvgWidth);
			var newY=(actualSvgHeight*parseFloat(element.getAttribute("y")))/parseFloat(antiguoSvgHeight);

			var newTx=(actualSvgWidth*parseFloat(matrix[4]))/parseFloat(antiguoSvgWidth);
			var newTy=(actualSvgHeight*parseFloat(matrix[5]))/parseFloat(antiguoSvgHeight);

			element.setAttribute("x",newX);
	    	element.setAttribute("y",newY);
	    	element.setAttribute("width",newWidth);
	    	element.setAttribute("height",newHeight);
	    	element.setAttribute("transform",setMatrixString(1,0,0,1,newTx,newTy));
		}

	}

	function handleMove(e) {
		if (isDragging) {
			var offsetX;
			var offsetY;
			var backElements;
			if (e.type=='touchmove') {
				offsetX=parseInt(e.changedTouches[0].clientX-misvg.getBoundingClientRect().left);
				offsetY=parseInt(e.targetTouches[0].clientY-misvg.getBoundingClientRect().top);
				backElements=document.elementsFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
			}
			else{
				offsetX=e.offsetX;
				offsetY=e.offsetY;
				backElements=document.elementsFromPoint(e.clientX,e.clientY);
			}
			if ("recta hover".includes(backElements[1].getAttribute('class')) || "recta hover".includes(backElements[0].getAttribute('class'))) {
				if (backElement==null) {
					backElement=(backElements[0].getAttribute("class").includes("recta") ? backElements[0] : backElements[1]);
					backElement.setAttribute('class','recta hover');
					bubble1Sound.pause();
					bubble1Sound.currentTime = 0;	
					bubble1Sound.play();
					scaleCenter(backElement.nextElementSibling,1.1);
					scaleCenter(backElement,1.1);
					window.navigator.vibrate(20);
				}
				else if ((backElements[1].getAttribute('class').includes('recta')&&backElements[1]!=backElement) || (backElements[0].getAttribute('class').includes('recta')&&backElements[0]!=backElement)){
					backElement.setAttribute('class','recta');

					scaleCenter(backElement.nextElementSibling,1);
					scaleCenter(backElement,1);
					backElement=null;
				}
			}
			
			else if(backElement){
				backElement.setAttribute('class','recta');
				scaleCenter(backElement.nextElementSibling,1);
				scaleCenter(backElement,1);
				backElement=null;
			}

			var dx=offsetX-X;
			var dy=offsetY-Y;
			var dxNuevo=getIndexMatrix(target.getAttribute('transform'),4)+dx;
			var dyNuevo=getIndexMatrix(target.getAttribute('transform'),5)+dy;

			target.setAttribute('transform',setMatrixString(1,0,0,1,dxNuevo,dyNuevo));
			X=offsetX;
			Y=offsetY;
		}
	}

	function handleUp(e) {
		var backElements;
		if (e.type=='touchend') {
			backElements=document.elementsFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
		}else{
			backElements=document.elementsFromPoint(e.clientX,e.clientY);
		}

		if (backElements[0].getAttribute("class")=="imagenArrastrable" && backElements[1].getAttribute("class")=="recta hover") {

			if (backElements[1].getAttribute("data-imagen")==backElements[0].getAttribute("href")) {
				var numberImagen=backElements[1].nextElementSibling;
				var matrixImagen=getMatrix(backElements[0].getAttribute("transform"));
				var matrixRecta=getMatrix(backElements[1].getAttribute("transform"));
				var dx=(parseFloat(backElements[0].getAttribute("x"))+parseFloat(matrixImagen[4]))-parseFloat(backElements[1].getAttribute("x")+parseFloat(matrixRecta[4]));
				var dy=(parseFloat(backElements[0].getAttribute("y"))+parseFloat(matrixImagen[5]))-parseFloat(backElements[1].getAttribute("y")+parseFloat(matrixRecta[5]));
				backElements[0].style.transition="0.2s";
				backElements[1].nextElementSibling.style.opacity="0"
				//backElements[1].style.fill="white"

				backElements[1].setAttribute('class','recta rectaOcupada');
				bubble1SoundEnd.pause();
				bubble1SoundEnd.currentTime = 0;	
				bubble1SoundEnd.play();	
				scaleCenter(backElement.nextElementSibling,1);
				scaleCenter(backElement,1);
				backElement=null;

				var margenLeft=(parseFloat(backElements[1].getAttribute("width"))-parseFloat(backElements[0].getAttribute("width")))/2;
				var margenTop=(parseFloat(backElements[1].getAttribute("height"))-parseFloat(backElements[0].getAttribute("height")))/2;

				backElements[0].setAttribute("transform",setMatrixString(1,0,0,1,parseFloat(matrixImagen[4])-dx+margenLeft,parseFloat(matrixImagen[5])-dy+margenTop));
				backElements[0].setAttribute("draggable","false");	
				moneda.children[0].style.animation="girarMoneda 0.6s 1";
				setTimeout(function(){moneda.children[0].style.animation=""; },400);
				var ocupados=document.getElementsByClassName("recta rectaOcupada");
				var rectas=document.getElementsByClassName("recta");
				puntaje.innerHTML=ocupados.length;
				

				if (rectas.length==ocupados.length) {
						document.getElementById("siguienteJuego").style.display="block";
						document.getElementById("siguienteJuego").style.animation="siguienteJuegoAnimacion 2s infinite";

				}
			}
			else if (target){
				var target2=target;
				var matrix=getMatrix(target.getAttribute('transform'));
				var newMatrix=setMatrixString(matrix[0],matrix[1],matrix[2],matrix[3],0,0);
				target.setAttribute("draggable","false");
				target.style.transition="0.3s";//backElements[0] es lo mismo que target
				target.setAttribute('transform',newMatrix);//backElements[0] es lo mismo que target
				setTimeout(function(){ target2.style.transition="0s"; target2.setAttribute("draggable","true") }, 300);
			}
		}else if (target){
			var target2=target;
			var matrix=getMatrix(target.getAttribute('transform'));
			var newMatrix=setMatrixString(matrix[0],matrix[1],matrix[2],matrix[3],0,0);
			target.setAttribute("draggable","false");
			target.style.transition="0.3s";//backElements[0] es lo mismo que target
			target.setAttribute('transform',newMatrix);//backElements[0] es lo mismo que target
			setTimeout(function(){ target2.style.transition="0s"; target2.setAttribute("draggable","true") }, 300);
		}
		if (backElement) {
			backElement.setAttribute('class','recta');
			scaleCenter(backElement.nextElementSibling,1);
			scaleCenter(backElement,1);
			backElement=null;
		}

		target=null;
		isDragging=false;
	}


	function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	}

	function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	}

}

var ProfesionesArrastrables={
	create: function () {
		// body...
		variableglogal=this.game.world.width;
		comenzarJuegoExterno();

	}
}

export default ProfesionesArrastrables;