var Produse = {};


$(".preview").click(function () {
    //$parent = parintele pe care ne aflam
    var $parent = $(this).parent().parent();

    //$img_url  = cauta elementul img si selecteaza valoarea de pe atributul src
    var img_url = $parent.find('img').attr('src');
    var title = $parent.find('h5').text();
    var subtitle = $parent.find('p').text();
    var price = $parent.attr('data-price');
    var dataId = $parent.attr('data-id');

    //$modal = salveaza numele id-ului modalului utilizat
    var $modal = $("#pictureModal");
    $modal.show();

    $modal.find('img').first().attr('src', img_url);
    $modal.find('h5').text(title);
    $modal.find('h1').text(subtitle);
    $modal.find('#cumparare').attr("pricebutton", price);
    $modal.find('#cumparare').attr("DataID", dataId);

    //afiseaza modalul
    $modal.modal('show');
});
$("#pictureModal").hide();
/*
var aValue = localStorage.getItem("total");
 $("#suma").text(aValue);
*/
if (isNaN(localStorage.getItem("total"))) {
    localStorage.setItem("total", "0");
}
$("#cumparare").click(function () {
    var suma = parseInt($(this).attr("pricebutton")) + parseInt(localStorage.getItem("total"));
    localStorage.setItem("total", suma);
    $("#suma").text(suma);
    var dataId = $(this).attr("DataID");


    if (Produse.hasOwnProperty(dataId)) {
        Produse[dataId] = Produse[dataId] + 1;
    } else {
        Produse[dataId] = 1;
    }
    console.log(Produse);
});
/*
1. Set item in localstorage
2. Get item from localstorage
3. Convert object to json string
4. Convert string to json object
5.



sdasd
dsad*/
