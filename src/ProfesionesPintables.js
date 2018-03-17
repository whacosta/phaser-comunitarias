
var ProfesionesPintablesHtml=require("./html/ProfesionesPintables.html");
var floodfill=(function(){function f(p,v,u,l,t,g,B){var k=p.length;var q=[];var o=(v+u*g)*4;var r=o,z=o,s,A,n=g*4;var h=[p[o],p[o+1],p[o+2],p[o+3]];if(!a(o,h,l,p,k,t)){return false}q.push(o);while(q.length){o=q.pop();if(e(o,h,l,p,k,t)){r=o;z=o;A=parseInt(o/n)*n;s=A+n;while(A<z&&A<(z-=4)&&e(z,h,l,p,k,t)){}while(s>r&&s>(r+=4)&&e(r,h,l,p,k,t)){}for(var m=z+4;m<r;m+=4){if(m-n>=0&&a(m-n,h,l,p,k,t)){q.push(m-n)}if(m+n<k&&a(m+n,h,l,p,k,t)){q.push(m+n)}}}}return p}function a(j,l,h,m,k,g){if(j<0||j>=k){return false}if(m[j+3]===0&&h.a>0){return true}if(Math.abs(l[3]-h.a)<=g&&Math.abs(l[0]-h.r)<=g&&Math.abs(l[1]-h.g)<=g&&Math.abs(l[2]-h.b)<=g){return false}if((l[3]===m[j+3])&&(l[0]===m[j])&&(l[1]===m[j+1])&&(l[2]===m[j+2])){return true}if(Math.abs(l[3]-m[j+3])<=(255-g)&&Math.abs(l[0]-m[j])<=g&&Math.abs(l[1]-m[j+1])<=g&&Math.abs(l[2]-m[j+2])<=g){return true}return false}function e(j,l,h,m,k,g){if(a(j,l,h,m,k,g)){m[j]=h.r;m[j+1]=h.g;m[j+2]=h.b;m[j+3]=h.a;return true}return false}function b(j,n,m,i,k,g,o){if(!j instanceof Uint8ClampedArray){throw new Error("data must be an instance of Uint8ClampedArray")}if(isNaN(g)||g<1){throw new Error("argument 'width' must be a positive integer")}if(isNaN(o)||o<1){throw new Error("argument 'height' must be a positive integer")}if(isNaN(n)||n<0){throw new Error("argument 'x' must be a positive integer")}if(isNaN(m)||m<0){throw new Error("argument 'y' must be a positive integer")}if(g*o*4!==j.length){throw new Error("width and height do not fit Uint8ClampedArray dimensions")}var l=Math.floor(n);var h=Math.floor(m);if(l!==n){console.warn("x truncated from",n,"to",l)}if(h!==m){console.warn("y truncated from",m,"to",h)}k=(!isNaN(k))?Math.min(Math.abs(Math.round(k)),254):0;return f(j,l,h,i,k,g,o)}var d=function(l){var h=document.createElement("div");var g={r:0,g:0,b:0,a:0};h.style.color=l;h.style.display="none";document.body.appendChild(h);var i=window.getComputedStyle(h,null).color;document.body.removeChild(h);var k=/([\.\d]+)/g;var j=i.match(k);if(j&&j.length>2){g.r=parseInt(j[0])||0;g.g=parseInt(j[1])||0;g.b=parseInt(j[2])||0;g.a=Math.round((parseFloat(j[3])||1)*255)}return g};function c(p,n,m,i,o,q,g){var s=this;var k=d(this.fillStyle);i=(isNaN(i))?0:i;o=(isNaN(o))?0:o;q=(!isNaN(q)&&q)?Math.min(Math.abs(q),s.canvas.width):s.canvas.width;g=(!isNaN(g)&&g)?Math.min(Math.abs(g),s.canvas.height):s.canvas.height;var j=s.getImageData(i,o,q,g);var l=j.data;var h=j.width;var r=j.height;if(h>0&&r>0){b(l,p,n,k,m,h,r);s.putImageData(j,i,o)}}if(typeof CanvasRenderingContext2D!="undefined"){CanvasRenderingContext2D.prototype.fillFlood=c}return b})();
var regionesPintadas=0;
function comenzarJuegoExterno() {
	var juegoStyle2="#barra,#contenedor,#contenedorCanvas,#micanvas,body,html{margin:0;padding:0}*,.contenedorImagen{box-sizing:border-box}#barra div,#picker{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}body,html{height:100%;overflow:hidden}#contenedor{width:100%;height:90%}#contenedorCanvas{width:70%;height:100%;float:left}#micanvas{width:100%;height:100%}#contenedorPlantillas{width:30%;height:100%;float:left}#plantillas{height:80%;padding:10%;overflow-y:scroll;background:rgba(40,45,45,1)}#herramientas{height:20%;padding:5% 35%;background:#282d2d}#barra{position:relative;height:10%;background:#282d2d}#barra div{font-size:20px;color:#fff}.contenedorImagen{width:46%;height:25%;float:left;border-radius:10%;background:rgba(40,55,55,1);cursor:pointer}#herramientas div,#resultadoColor{float:left;border-radius:50%;position:relative}.contenedorImagen:nth-child(12n+1){background:#ca82ff}.contenedorImagen:nth-child(12n+3){background:#ffbb84}.contenedorImagen:nth-child(12n+5){background:#56a5ff}.contenedorImagen:nth-child(12n+7){background:rgba(147,255,164,.9)}.contenedorImagen:nth-child(12n+9){background:#fbff99}.contenedorImagen:nth-child(12n+11){background:#fc747f}.contenedorImagen img{width:100%;height:100%}.bloqueCol{width:8%;height:25%;float:left}.bloqueRow{width:100%;height:5%;float:left}#herramientas img,#overlay{height:100%;cursor:pointer}#herramientas img{width:70%;transition:transform .4s;float:left}#herramientas div{top:45%;left:10%;width:15%;height:20%}#overlay{position:fixed;display:none;width:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:2}#picker{-ms-transform:translate(-50%,-50%)}#misvg{float:left}#resultadoColor{background:red}.seleccionado{border:5px solid #fff}.seleccionado img{filter:invert(0)}@keyframes seleccionadoAnimate{0%,100%{transform:scale(1);border:5px solid #fff}50%{transform:scale(1.2);border:5px solid #fff}}svg{user-select:none}#micircletool,#micircletoolopacity{pointer-events:none}";
	var juegoStyle="#barra,#contenedor,#contenedorCanvas,#micanvas,body,html{margin:0;padding:0}*,.contenedorImagen{box-sizing:border-box}#barra div,#infoLandscape,#picker,#siguienteJuego,#siguienteJuego i{top:50%;left:50%;transform:translate(-50%,-50%)}body,html{height:100%;overflow:hidden}#contenedor{width:100%;height:90%}#contenedorCanvas{width:70%;height:100%;float:left}#micanvas{width:100%;height:100%}#contenedorPlantillas{width:30%;height:100%;float:left}#plantillas{height:80%;padding:10%;overflow-y:scroll;background:rgba(40,45,45,1)}#herramientas{height:20%;padding:5% 35%;background:#282d2d}#barra{position:relative;height:10%;background:#282d2d}#barra div{position:absolute;font-size:20px;color:#f0f0f0;transition:1s}#siguienteJuego{position:relative;background:#0f0;opacity:0;border-radius:4px;height:100%;width:20%;display:none}#siguienteJuego i{position:relative;font-size:180%;color:#fff}.contenedorImagen{width:46%;height:25%;float:left;border-radius:10%;background:rgba(40,55,55,1);cursor:pointer}#herramientas div,#resultadoColor{float:left;border-radius:50%;position:relative}.contenedorImagen:nth-child(12n+1){background:#ca82ff}.contenedorImagen:nth-child(12n+3){background:#ffbb84}.contenedorImagen:nth-child(12n+5){background:#56a5ff}.contenedorImagen:nth-child(12n+7){background:rgba(147,255,164,.9)}.contenedorImagen:nth-child(12n+9){background:#fbff99}.contenedorImagen:nth-child(12n+11){background:#fc747f}.contenedorImagen img{width:100%;height:100%}.bloqueCol{width:8%;height:25%;float:left}.bloqueRow{width:100%;height:5%;float:left}#herramientas img{width:70%;height:100%;cursor:pointer;transition:transform .4s;float:left}#herramientas div{top:45%;left:10%;width:15%;height:20%}#overlay,#overlayLandscape{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:2;cursor:pointer}#infoLandscape,#picker{position:absolute;-ms-transform:translate(-50%,-50%)}#misvg{float:left}#resultadoColor{background:red}.seleccionado{border:5px solid #fff}.seleccionado img{filter:invert(0)}@keyframes seleccionadoAnimate{0%,100%{transform:scale(1);border:5px solid #fff}50%{transform:scale(1.2);border:5px solid #fff}}@keyframes siguienteJuegoAnimacion{0%,100%{opacity:.1}50%{opacity:1}}svg{user-select:none}#micircletool,#micircletoolopacity{pointer-events:none}";
	var head=document.getElementsByTagName('head')[0];
	document.getElementsByTagName('canvas')[0].style.display='none';
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',ProfesionesPintablesHtml);
	var style = document.createElement('style');
	style.setAttribute('id','estiloJuegoExterno');

	style.type = 'text/css';
	if (style.styleSheet){
	  style.styleSheet.cssText = juegoStyle;
	} else {
	  style.appendChild(document.createTextNode(juegoStyle));
	}
	head.appendChild(style);

	head.insertAdjacentHTML('beforeend',"<link id='fontawesome' href='https://use.fontawesome.com/releases/v5.0.8/css/all.css' rel='stylesheet'>");




	var canvas;
	var ctx;
	var parrafocolor;
	var parrafocolor2;
	var rect;
	var paleta;
	var srcImg1;
	var colorPicker;
	var elSeleccionado;
	var touchStartElement;


	var imgCircleTool;
	var isDragCircleOpacityTool=false;
	var isDragCircleTool=false;
	var canvasRestore;
	var canvasRestoreOpacity;
	var colorSelected=[255,0,0,0];

	start();

	function start() {
		


		colorSeleccionado.style.background='rgb('+colorSelected[0]+','+colorSelected[1]+','+colorSelected[2]+')';
		resultadoColor.style.background='rgb('+colorSelected[0]+','+colorSelected[1]+','+colorSelected[2]+')';
		
		var contenedorImagenList=inicializarPlantillas();
		seleccionar(contenedorImagenList[0]);

		paleta=document.getElementById('paleta');
		canvas=document.getElementById('micanvas');

		canvas.width=canvas.getBoundingClientRect().width;
		canvas.height=canvas.getBoundingClientRect().height;
		ctx=canvas.getContext('2d');

		canvas.addEventListener('click',pintar);
		paleta.addEventListener('click',on);
		overlay.addEventListener('click',off);

		window.addEventListener('resize',onresize2);


		init();
		misvg.addEventListener('click',stopPropagation)
		micircle.addEventListener('mousedown',down);
		micircle.addEventListener('mousemove',move);
		micircle.addEventListener('mouseup',up);
		micircle.addEventListener('mouseout',up);
		micircle.addEventListener('touchstart',down);
		micircle.addEventListener('touchmove',move);
		micircle.addEventListener('touchend',up);
		micircle.addEventListener('touchcancel',up);

		colorOpacity.addEventListener('mousedown',handledownOpacity);
		colorOpacity.addEventListener('mousemove',handlemoveOpacity);
		colorOpacity.addEventListener('mouseup',handleupOpacity);
		colorOpacity.addEventListener('mouseout',handleupOpacity);

		colorOpacity.addEventListener('touchstart',handledownOpacity);
		colorOpacity.addEventListener('touchmove',handlemoveOpacity);
		colorOpacity.addEventListener('touchend',handleupOpacity);
		colorOpacity.addEventListener('touchcancel',handleupOpacity);
		siguienteJuego.addEventListener('click',siguienteJuegoPhaser);


	}
	function siguienteJuegoPhaser(e) {
		document.getElementById('estiloJuegoExterno').parentElement.removeChild(document.getElementById('estiloJuegoExterno'));
		document.getElementById('fontawesome').parentElement.removeChild(document.getElementById('fontawesome'));
		window.removeEventListener('resize',onresize2);
		document.body.removeChild(document.getElementById('contenedorJuego'));
		document.getElementsByTagName('canvas')[0].style.display='block';
		ProfesionesPintables.game.state.start('DefinisteTuSueno');

	}
function inicializarPlantillas() {
	var contenedorImagenList=plantillas.getElementsByClassName("contenedorImagen");
	for (var i =contenedorImagenList.length  - 1; i >= 0; i--) {
		contenedorImagenList[i].setAttribute('data-canvas-url', contenedorImagenList[i].firstElementChild.src);
		contenedorImagenList[i].addEventListener("click",clickContenedorImagen);
		contenedorImagenList[i].addEventListener("touchend",touchEndContenedorImagen);
	}
	return contenedorImagenList;
}

function stopPropagation(e) {
	e.stopPropagation();
}

function onresize2(e) {
	elSeleccionado.style.animation=null;
	elSeleccionado=null;

	canvas.width=canvas.getBoundingClientRect().width;
	canvas.height=canvas.getBoundingClientRect().height;
	start();
}

function pick(e) {
	var rect=canvas.getBoundingClientRect();
	var x=e.clientX-rect.left;
	var y=e.clientY-rect.top;
}

function pintar(e) {
	var color={};
	color.r=colorSelected[0];
	color.g=colorSelected[1];
	color.b=colorSelected[2];
	color.a=255;
	if (color) {
		rect = canvas.getBoundingClientRect();
		var coordx=e.clientX-rect.left;
		var coordy=e.clientY-rect.top;
		var pixel=ctx.getImageData(coordx,coordy,1,1);
		console.log(pixel.data);

		if (pixel.data[0]==0 && pixel.data[1]==0 && pixel.data[2]==0 && pixel.data[3]==0 ) {
			var regionesPintadas=parseInt(elSeleccionado.getAttribute('data-regiones-pintadas'));
			elSeleccionado.setAttribute('data-regiones-pintadas',regionesPintadas+1);
			if (window.getComputedStyle(siguienteJuego, null).getPropertyValue("display")=='none' && regionesPintadas>=5) {
				siguienteJuego.style.display='block';
				siguienteJuego.style.animation='siguienteJuegoAnimacion 1.5s infinite';
				barra.children[0].style.left='75%';
			}

			//regionesPintadas=regionesPintadas+1;
		}
		console.log(elSeleccionado.getAttribute('data-regiones-pintadas'));
		console.log(elSeleccionado);
		var dataPixel=pixel.data;
		dataPixel[0]=color.r;
		dataPixel[1]=color.g;
		dataPixel[2]=color.b;
		dataPixel[3]=color.a;

		var imagedata=ctx.getImageData(0,0,canvas.width,canvas.height);
		var red=imagedata.data[Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4];
		var green=imagedata.data[(Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4)+1];
		var blue=imagedata.data[(Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4)+2];
		var a=imagedata.data[(Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4)+3];
	
		if (!(red==0 && green==0 && blue==0 && a>0)) {
			if (!(red[0]==color.r && green==color.g && blue==color.b)) {
				var result = floodfill(imagedata.data,Math.floor(coordx),Math.floor(coordy),color,45,imagedata.width,imagedata.height);
	            ctx.putImageData(imagedata,0,0);
	            paintBorderLeft(imagedata); 
			}
		}	
	}
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function seleccionar(element) {
	if (elSeleccionado) {
		elSeleccionado.setAttribute('data-canvas-url',canvas.toDataURL());
		elSeleccionado.style.animation=null;
	}
	element.style.animation='seleccionadoAnimate 1s infinite';

	elSeleccionado=element;
	var image=new Image();
	image.onload=function() {
		
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(image,0,0,canvas.width,canvas.height);	
		
	}
	image.src=element.getAttribute('data-canvas-url');
	barra.firstElementChild.innerHTML=element.firstElementChild.id;
}

function clickContenedorImagen(e) {
	seleccionar(e.currentTarget);
}

function touchStartContenedorImagen(e) {
	e.preventDefault();
	touchStartElement=e.currentTarget;
}

function touchEndContenedorImagen(e) {
	e.preventDefault();
	if (document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY)==e.target) {
		seleccionar(e.currentTarget);
	}
}

function paintBorderLeft(imagedata) {
	var red=imagedata.data[1 * 4];
	var green=imagedata.data[(1 * 4)+1];
	var blue=imagedata.data[(1 * 4)+2];
	var a=imagedata.data[(1 * 4)+3];
	for (var i = 0; i < imagedata.height; i++) {
		for (var j = 0; j < 1; j++) {
		imagedata.data[i * (imagedata.width* 4) + j * 4]=red;
		imagedata.data[(i * (imagedata.width* 4) + j * 4)+1]=green;
		imagedata.data[(i * (imagedata.width* 4) + j * 4)+2]=blue;
		imagedata.data[(i * (imagedata.width* 4) + j * 4)+3]=a;
		}
	}
	ctx.putImageData(imagedata,0,0);
}


function thickness() {
	var imagedata=ctx.getImageData(0,0,canvas.width,canvas.height);
	for (var i = 0; i < imagedata.width; i++) {
		for (var j = 0; j < imagedata.height; j++) {
		
		var red=imagedata.data[Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4];
		var green=imagedata.data[(Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4)+1];
		var blue=imagedata.data[(Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4)+2];
		var a=imagedata.data[(Math.floor(coordy) * (imagedata.width* 4) + Math.floor(coordx) * 4)+3];
		}
	}
}

function init() {
		
		var tamanioContenedor=parseInt((window.getComputedStyle(contenedor, null).getPropertyValue("height")).split('px')[0]);
		picker.style.width=((90/100)*tamanioContenedor)+'px';
		picker.style.height=((90/100)*tamanioContenedor)+'px';

		var tamanioPicker=parseInt((window.getComputedStyle(picker, null).getPropertyValue("height")).split('px')[0]);
		
		resultadoColor.style.width=((20/100)*tamanioPicker)+'px';
		resultadoColor.style.height=((20/100)*tamanioPicker)+'px';

		misvg.setAttribute('width',(80/100)*tamanioPicker);
		misvg.setAttribute('height',misvg.getAttribute('width'));
		

		micircle.setAttribute('x',parseInt((10/100)*parseInt(misvg.getAttribute('width'))));
		micircle.setAttribute('y',0);
		micircle.setAttribute('width',parseInt((80/100)*parseInt(misvg.getAttribute('width'))));
		micircle.setAttribute('height',parseInt((80/100)*parseInt(misvg.getAttribute('width'))));

		colorOpacity.setAttribute('x',parseInt(micircle.getAttribute('x')));
		colorOpacity.setAttribute('y',parseInt(micircle.getAttribute('y'))+parseInt(micircle.getAttribute('height'))+parseInt((5/100)*parseInt(misvg.getAttribute('width'))));
		colorOpacity.setAttribute('width',parseInt(micircle.getAttribute('width')));
		colorOpacity.setAttribute('height',2*parseInt(micircletool.getAttribute('r')));

		micircletool.setAttribute('cx',parseInt(micircle.getAttribute('x'))+parseInt(micircle.getAttribute('width'))-parseInt(micircletool.getAttribute('r')));
		micircletool.setAttribute('cy',parseInt(micircle.getAttribute('height'))/2);

		micircletoolopacity.setAttribute('cx',parseInt(colorOpacity.getAttribute('x'))+parseInt(colorOpacity.getAttribute('width'))-parseInt(micircletoolopacity.getAttribute('r')));
		micircletoolopacity.setAttribute('cy',parseInt(colorOpacity.getAttribute('y'))+parseInt(colorOpacity.getAttribute('height'))-parseInt(micircletoolopacity.getAttribute('r')));

		canvasRestore=document.createElement('canvas');
		canvasRestore.width=parseInt(micircle.getAttribute('width'));
		canvasRestore.height=parseInt(micircle.getAttribute('height'));

		resultadoColor.style.transform='translate(0px,'+(parseInt(micircle.getAttribute('height'))/2-((10/100)*tamanioPicker))+'px'+')';
		var img=new Image();
		var dataurl;
		img.onload=function () {
			var ctx=canvasRestore.getContext('2d');
			ctx.drawImage(img,0,0,canvasRestore.width,canvasRestore.height);
		}
		img.src=micircle.getAttribute('href');

			var cloneSvg=misvg.cloneNode(true);
			var toolOpacity=cloneSvg.getElementById('micircletoolopacity');

			cloneSvg.removeChild(toolOpacity);

			var data = new XMLSerializer().serializeToString(cloneSvg);
			var DOMURL = window.URL || window.webkitURL || window;

			var img2 = new Image();
			var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
			var url = DOMURL.createObjectURL(svg);

			canvasRestoreOpacity = document.createElement('canvas');

			canvasRestoreOpacity.width = misvg.getAttribute('width');
			canvasRestoreOpacity.height = misvg.getAttribute('height');
				
			img2.onload = function () {
			  canvasRestoreOpacity.getContext('2d').drawImage(img2, 0, 0, img2.width, img2.height);
			  DOMURL.revokeObjectURL(url);
			  var colorOpacityTool = canvasRestoreOpacity.getContext('2d').getImageData(micircletoolopacity.getAttribute('cx'), micircletoolopacity.getAttribute('cy'), 1, 1).data;
			  var colorString='rgb('+colorOpacityTool[0]+','+colorOpacityTool[1]+','+colorOpacityTool[2]+')';
			  colorSelected=colorOpacityTool;
			  colorSeleccionado.style.background=colorString;
			  resultadoColor.style.background=colorString;
			 
			}
			img2.src = url;
	}

	function handledownOpacity(e) {
		e.preventDefault();
		var x;;
		if (e.type=='touchstart') {
			x=e.touches[0].clientX-misvg.getBoundingClientRect().left;
		}
		else{
			x=e.clientX-misvg.getBoundingClientRect().left;
		}
		if (x<=parseInt(colorOpacity.getAttribute('x'))+parseInt(colorOpacity.getAttribute('width'))-parseInt(micircletoolopacity.getAttribute('r')) && x>=parseInt(colorOpacity.getAttribute('x'))+parseInt(micircletoolopacity.getAttribute('r'))) {
			isDragCircleOpacityTool=true;
			micircletoolopacity.setAttribute('cx',x);
			var colorOpacityTool = canvasRestoreOpacity.getContext('2d').getImageData(micircletoolopacity.getAttribute('cx'), micircletoolopacity.getAttribute('cy'), 1, 1).data;
			var colorString='rgb('+colorOpacityTool[0]+','+colorOpacityTool[1]+','+colorOpacityTool[2]+')';
			colorSelected=colorOpacityTool;
			colorSeleccionado.style.background=colorString;
			resultadoColor.style.background=colorString;
		}
	}
	function handlemoveOpacity(e) {
		e.preventDefault();
		if (isDragCircleOpacityTool) {
			var x;
			if (e.type=='touchmove') {
				x=e.touches[0].clientX-misvg.getBoundingClientRect().left;
			}
			else{
				x=e.clientX-misvg.getBoundingClientRect().left;
			}

			if (x<=parseInt(colorOpacity.getAttribute('x'))+parseInt(colorOpacity.getAttribute('width'))-parseInt(micircletoolopacity.getAttribute('r')) &&  x>=parseInt(colorOpacity.getAttribute('x'))+parseInt(micircletoolopacity.getAttribute('r'))) {
				micircletoolopacity.setAttribute('cx',x);

				var colorOpacityTool = canvasRestoreOpacity.getContext('2d').getImageData(micircletoolopacity.getAttribute('cx'), micircletoolopacity.getAttribute('cy'), 1, 1).data;
				var colorString='rgb('+colorOpacityTool[0]+','+colorOpacityTool[1]+','+colorOpacityTool[2]+')';
				colorSelected=colorOpacityTool;
				colorSeleccionado.style.background=colorString;
				resultadoColor.style.background=colorString;
			}
		}
	}
	function handleupOpacity(e) {
		isDragCircleOpacityTool=false;
	}

	function down(e) {
		e.preventDefault();
		isDragCircleTool=true;
		var x;
		var y;
		var xCircle;
		var yCircle;
		if (e.type=='touchstart') {
			x=e.touches[0].clientX-misvg.getBoundingClientRect().left;
			y=e.touches[0].clientY-misvg.getBoundingClientRect().top;
			xCircle=e.touches[0].clientX-e.target.getBoundingClientRect().left;
			yCircle=e.touches[0].clientY-e.target.getBoundingClientRect().top;
		}
		else{
			x=e.clientX-misvg.getBoundingClientRect().left;
			y=e.clientY-misvg.getBoundingClientRect().top;
			xCircle=e.clientX-e.target.getBoundingClientRect().left;
			yCircle=e.clientY-e.target.getBoundingClientRect().top;
		}
		

		var color = canvasRestore.getContext('2d').getImageData(xCircle, yCircle, 1, 1).data;
		if (color[0]!=0 && color[1]!=0 && color[2]!=0 && color[3]!=0) {
			micircletool.setAttribute('cx',x);
				micircletool.setAttribute('cy',y);
			var colorString='rgb('+color[0]+','+color[1]+','+color[2]+')';
			MyGradient.children[1].setAttribute('stop-color',colorString);

			var cloneSvg=misvg.cloneNode(true);
			var toolOpacity=cloneSvg.getElementById('micircletoolopacity');

			cloneSvg.removeChild(toolOpacity);

			var data = new XMLSerializer().serializeToString(cloneSvg);
			var DOMURL = window.URL || window.webkitURL || window;

			var img = new Image();
			var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
			var url = DOMURL.createObjectURL(svg);

			canvasRestoreOpacity = document.createElement('canvas');

			canvasRestoreOpacity.width = misvg.getAttribute('width');
			canvasRestoreOpacity.height = misvg.getAttribute('height');
				
			img.onload = function () {
			  canvasRestoreOpacity.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
			  DOMURL.revokeObjectURL(url);
			  var colorOpacityTool = canvasRestoreOpacity.getContext('2d').getImageData(micircletoolopacity.getAttribute('cx'), micircletoolopacity.getAttribute('cy'), 1, 1).data;
			  var colorString='rgb('+colorOpacityTool[0]+','+colorOpacityTool[1]+','+colorOpacityTool[2]+')';
			  colorSelected=colorOpacityTool;
			  colorSeleccionado.style.background=colorString;
			  resultadoColor.style.background=colorString;
			}
			img.src = url;
		}
		
	}
	function move(e) {
		e.preventDefault();
		if (isDragCircleTool) {
			var x;
			var y;

			var xCircle;
			var yCircle;
			if (e.type=='touchmove') {	
				x=e.touches[0].clientX-misvg.getBoundingClientRect().left;
				y=e.touches[0].clientY-misvg.getBoundingClientRect().top;
				xCircle=e.touches[0].clientX-e.target.getBoundingClientRect().left;
				yCircle=e.touches[0].clientY-e.target.getBoundingClientRect().top;
			}
			else{
				x=e.clientX-misvg.getBoundingClientRect().left;
				y=e.clientY-misvg.getBoundingClientRect().top;
				xCircle=e.clientX-e.target.getBoundingClientRect().left;
				yCircle=e.clientY-e.target.getBoundingClientRect().top;
			}
			var color = canvasRestore.getContext('2d').getImageData(xCircle, yCircle, 1, 1).data;
			if (color[0]!=0 && color[1]!=0 && color[2]!=0 && color[3]!=0) {
				micircletool.setAttribute('cx',x);
				micircletool.setAttribute('cy',y);
				var colorString='rgb('+color[0]+','+color[1]+','+color[2]+')';
				MyGradient.children[1].setAttribute('stop-color',colorString);
				var cloneSvg=misvg.cloneNode(true);
				var toolOpacity=cloneSvg.getElementById('micircletoolopacity');

				cloneSvg.removeChild(toolOpacity);

				var data = new XMLSerializer().serializeToString(cloneSvg);
				var DOMURL = window.URL || window.webkitURL || window;

				var img = new Image();
				var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
				var url = DOMURL.createObjectURL(svg);

				canvasRestoreOpacity = document.createElement('canvas');

				canvasRestoreOpacity.width = misvg.getAttribute('width');
				canvasRestoreOpacity.height = misvg.getAttribute('height');
					
				img.onload = function () {
				  canvasRestoreOpacity.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
				  DOMURL.revokeObjectURL(url);
				  var colorOpacityTool = canvasRestoreOpacity.getContext('2d').getImageData(micircletoolopacity.getAttribute('cx'), micircletoolopacity.getAttribute('cy'), 1, 1).data;
				  var colorString='rgb('+colorOpacityTool[0]+','+colorOpacityTool[1]+','+colorOpacityTool[2]+')';
				  colorSelected=colorOpacityTool;
				  colorSeleccionado.style.background=colorString;
				  resultadoColor.style.background=colorString;
				}
				img.src = url;
				
			}
		}
	}

	function up(e) {
		isDragCircleTool=false;
	}
}


var ProfesionesPintables={
	create: function () {
		comenzarJuegoExterno();
	}
}


export default ProfesionesPintables;
