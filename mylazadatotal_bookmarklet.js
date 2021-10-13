if (window.location.href.includes("my.lazada.com.my/customer/order/index/")) {

	var gg = document.getElementById("mylazadatotal");

if (gg != null) {
	gg.remove();
}


var x = document.createElement("div");
x.style.background = "white";
x.style.textDecoration.fontcolor = "black";
x.style.padding = "20px";
x.id = "mylazadatotal";

var k = document.getElementsByClassName("lzd-playground-right")[0];
k.insertBefore(x, k.firstElementChild.nextSibling);

var m = document.getElementById("mylazadatotal");

var title = document.createElement("h2");
title.innerText = "My Lazada Grand Total";
title.style.marginBottom = "20px";

m.appendChild(title);


document.querySelector("input[name=select-faker]").click();
document.querySelector("li[value='6']").click();

try {
	document.getElementsByClassName("next-pagination-list")[0].firstChild.click();
} catch(err){}

setTimeout(function(){

	var totalItem = parseInt(document.getElementsByClassName("next-pagination-display")[0].innerText.split("/")[1]);
	var itemHeader = document.querySelectorAll(".shop-header");
	var grandTotal = 0;
	var loopCount = 0;

	function countTotal(){

	    for(var i = 0; i < itemHeader.length; i++){

	        if(itemHeader[i].innerHTML.includes("Delivered")){

	            var getSibling = itemHeader[i].nextElementSibling;

	            var itemTitle = getSibling.querySelector(".item-title").innerHTML;
	            var itemPricePerUnit = parseFloat(getSibling.querySelector(".item-price").innerHTML.replace("RM","").replace(",",""));
	            var quantity = parseInt(getSibling.querySelector(".item-quantity > span > span").nextSibling.innerText);

	            var total = itemPricePerUnit * quantity;
	            grandTotal += total;
	            var output = "[ RM " + total + " ] -- " + itemTitle + " (" + quantity + ")";
	            console.log(output);

	            var item = document.createElement("p");
	            item.innerText = output;

				m.appendChild(item);
	        }
	    } 

	    try{
	    	document.getElementsByClassName("next-pagination-list")[0].querySelector(".current").nextElementSibling.click(); 
	    } catch(err){}	


	    setTimeout(function(){

		    if(loopCount < totalItem){
		        countTotal();
		    } else { 
		    	var gTotal = "Grand Total : RM " + Math.round(grandTotal * 100) / 100;
		        console.log(gTotal);

		        var item = document.createElement("p");
	            item.innerText = gTotal;
	            item.style.marginTop = "20px";

				m.appendChild(item);
		    }

 		}, 3000);

	    loopCount++;

	}

countTotal();
	
}, 2000);

} else {

	window.location.href = "https://my.lazada.com.my/customer/order/index/";

}