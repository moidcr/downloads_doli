
document.addEventListener("DOMContentLoaded", function(event) {
	const lnkg = "https://github.com/moidcr/downloads_doli/raw/";
	const foldg = "8323fdd3bc30be75b4439ccf59012f9998a78f6b/";
	const fls = {"p001":["module_customerdisplay-1.0.zip","2022/07/thanks-for-your-purchase.html"], "p002":["module_customerdisplay-1.0.zip","2022/07/gracias-por-su-compra.html"], "p003":["module_monitorcomandas-2.1.zip","2022/07/gracias-por-su-compra.html"], "p004":["module_monitorcomandas-2.1.zip","2022/07/thanks-for-your-purchase.html"]};
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const product = urlParams.get('fgdfgdfe');
	if(product != "" && product != null)
	{
		console.log("Por==="+product);
		localStorage.setItem('producto', 'p'+product);
		localStorage.setItem('paypal', 'YES');
		localStorage.setItem('downs', 0);
		window.location.href = fls['p'+product][1];
	}
	
	var payed = localStorage.getItem('paypal');
	var lnj = document.getElementsByClassName('linkclass');
	if(payed=="YES")
	{
		
		if(lnj[0])
		{
			lnj[0].style.display="";
		}
		var prod = localStorage.getItem('producto');
		var downs = parseInt(localStorage.getItem('downs'));
		console.log("downs=========="+downs);
		if(downs==10)
		{
			localStorage.removeItem('paypal');
		}
		else
		{
			localStorage.setItem('downs', downs+1);
		}
	}
	else
	{
		if(lnj[0]){lnj[0].remove();}
	}
	
	if(lnj[0])
	{
		lnj[0].addEventListener('click', function () {
		  downloadURI(lnkg+foldg, fls[prod][0]);
		});
	}
	function downloadURI(uri, name) 
	{
	    var link = document.createElement("a");
	    // If you don't know the name or want to use
	    // the webserver default set name = ''
	    link.setAttribute('download', name);
	    link.href = uri+name;
	    document.body.appendChild(link);
	    link.click();
	    link.remove();
	}
});
