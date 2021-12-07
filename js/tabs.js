var tab_cant = 0;

addNewTab()

function addNewTab(){
	newTab = 	'<button class="accordion-tab" data-actab-group="0" data-actab-id="' + 
				tab_cant + '" onclick="switchLabel(' + tab_cant + ')">Tab ' + (tab_cant + 1) + '</button>'
	contentTab = 	'<article class="accordion-item" data-actab-group="0" data-actab-id="' + tab_cant + '">' +
					'<h4 class="accordion-item__label"></h4>' +
					'<div class="accordion-item__container">' +
					'<div id="wrapper">' +
					'<div id="content">' +
					'<h4 class="title">Entrada</h4>' +
					'<textarea id="textOutput" class="lined"></textarea>' +
					'</div>' +
					'<div id="sidebar">' +
					'<h4 class="title">Salida</h4>' +
					'<textarea id="textOutput" class="lined" readonly></textarea>' +
					'</div>' +
					'</div>' +
					'<button class="slide" onclick="compilar(' + tab_cant + ')">Compilar</button>' +
					'<button class="slide" onclick="traducir(' + tab_cant + ')">Traducir</button>' +
					'<button class="slide" onclick="guardar(' + tab_cant + ')">Guardar</button>' +
					'<input id="file-input-' + tab_cant + '" type="file"/>' +
					'</div>' +
					'</article>'

	let array = []
	var labels = document.querySelectorAll(".accordion-item__label");
	[].forEach.call(labels, function(label) {
		el = label.parentElement.childNodes[1].childNodes[0];
		array.push([el.childNodes[0].childNodes[1].value, el.childNodes[1].childNodes[1].value])
	});

	document.getElementById("accordion-tabs").innerHTML += newTab
	document.getElementById("accordion-content").innerHTML += contentTab;
	document.getElementById('file-input-' + tab_cant).addEventListener('change', abrir, false);
	document.getElementById('file-input-' + tab_cant).id = tab_cant;
	if (tab_cant == 0) switchLabel(0)
	else{
		labels = document.querySelectorAll(".accordion-item__label");
		[].forEach.call(labels, function(label) {
			el = label.parentElement.childNodes[1].childNodes[0];
			if (array.length > 0){
				arr = array.shift()
				el.childNodes[0].childNodes[1].value = arr[0]
				el.childNodes[1].childNodes[1].value = arr[1]
			}
		});
	}
	tab_cant++;
}


function switchLabel(id){
	var elems = document.querySelectorAll(".accordion-tab");
	[].forEach.call(elems, function(el) {
		if (el.dataset.actabId == id ) el.classList.add("accordion-active");
		else el.classList.remove("accordion-active");
	});
	
	var labels = document.querySelectorAll(".accordion-item__label");
	[].forEach.call(labels, function(label) {
		el = label.parentElement;
		if (el.dataset.actabId == id ) el.classList.add("accordion-active");
		else el.classList.remove("accordion-active");
	});
}
