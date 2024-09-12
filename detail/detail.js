document.addEventListener('DOMContentLoaded', function() {
    // kita tangkap parameter id menggunakan fungsi getParmeter
    var id = getParameter('id');
    // kemudian di render meggunakan DOM di fungsi renderProduct
    renderProduct(id);
})

function getParameter(name) {
    // ini merupakan kode untuk mengambil parameter dari url
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function renderProduct(id){
    // ini merupakan cara lama mendapatkan data dari api selain menggunakan fetch
    // fungsi di bawah ini dikenal dengan ajax
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/products/'+id);
    xhr.onload = () => {
        if (xhr.status === 200) {
            var result = JSON.parse(xhr.responseText);

            // disini kita memanggil element menggunakan id
            // jadi pastikan id telah di sematkan di tag yang dituju
            document.getElementById('title').innerHTML = result.title;
            document.getElementById('description').innerHTML = result.description;
            document.getElementById('prod_img').src = result.thumbnail;
            document.getElementById('price').innerHTML=result.price
            // perbedaan innerHTML dan insertAdjacentHTML terletak pada
            // fungsinya.
            // - innerHTML akan mengubah seluruh elemen yang terkandung
            // - insertAdjacentHTML akan menambah elemen baru di dalam elemen yang di tuju

        } else {
            console.error('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}
