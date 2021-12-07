function compilar(id){
    var labels = document.querySelectorAll(".accordion-item__label");
	[].forEach.call(labels, function(label) {
		el = label.parentElement;
		if (el.dataset.actabId == id ){
            el = el.childNodes[1].childNodes[0]
            var texto = el.childNodes[0].childNodes[1].value
            console.log(texto)
        } 
	});
}

function traducir(id){
    var labels = document.querySelectorAll(".accordion-item__label");
	[].forEach.call(labels, function(label) {
		el = label.parentElement;
		if (el.dataset.actabId == id ){
            el = el.childNodes[1].childNodes[0]
            var texto = el.childNodes[0].childNodes[1].value
            console.log(texto)
        } 
	});
}

function abrir(e){
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    var id = e.currentTarget.id;
    lector.onload = function(e) {
        var contenido = e.target.result;
        var labels = document.querySelectorAll(".accordion-item__label");
        [].forEach.call(labels, function(label) {
            el = label.parentElement;
            if (el.dataset.actabId == id ){
                el = el.childNodes[1].childNodes[0]
                el.childNodes[0].childNodes[1].value = contenido
            } 
        });
    };
    lector.readAsText(archivo);
}

function guardar(id){
    var labels = document.querySelectorAll(".accordion-item__label");
	[].forEach.call(labels, function(label) {
		el = label.parentElement;
		if (el.dataset.actabId == id ){
            el = el.childNodes[1].childNodes[0]
            var texto = el.childNodes[0].childNodes[1].value
            var textFileAsBlob = new Blob([texto], {type:'text/plain'}); 
            var downloadLink = document.createElement("a");
            downloadLink.download = 'Tab ' + (id + 1);
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
            downloadLink.click();
        } 
	});
}