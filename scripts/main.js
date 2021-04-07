var rhit = rhit || {};


rhit.PageController = class{

    constructor(){
        const button = document.getElementById("pianoButton"); 
        button.onclick = (event) => {
            playKeyboard(); 
        }
    }

}


rhit.main = function () {
	console.log("Ready");
	new rhit.PageController(); 
};

rhit.main();