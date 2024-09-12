document.addEventListener("DOMContentLoaded", function () {
  console.log("halaman sudah di load");
  getProduct();
})

function getProduct() {

  // dari pertemuan kemarin, untuk membuat sebuah halaman detail, 
  // kita perlu untuk menambahkan parameter id di anchor 
  // yang membungkus button detail

  // jadi kita harus memodifikasi button untuk di bungkus dengan anchor

  fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
          var container = document.querySelector('#productcontainer');
          data.products.forEach(product => {
              product.description = shortText(product.description, 70);
              product.title = shortText(product.title, 20);
              container.insertAdjacentHTML('beforeend',
                  `<div class="isi">
                      <div class="isiimg">
                          <img src="${product.thumbnail}"
                              alt="imgproduct">
                      </div>
                      <section>
                          <header>
                              <p class="heder">${product.title}</p>
                          </header>
                          <p>${product.description}</p>
                          
                          <a href="detail/detail.html?id=${product.id}">
                              <button class="cta3">Detail</button>
                          </a>
                      </section>
                  </div>`
              );
          });
      })
}

// fungsi untuk memperpendek deskripsi produk
function shortText(text, maxLength) {
  if (text.length > maxLength) {
      return text.substring(0, maxLength) + ' ...';
  } else {
      return text;
  }
}