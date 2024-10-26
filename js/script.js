const addCartBtn = document.getElementsByClassName("addCartBtn")
const addCartSuccess = document.getElementById('addCartSuccess')

for (var i = 0; i < addCartBtn.length; i++) {

  if (addCartBtn[i]) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(addCartSuccess)
    addCartBtn[i].addEventListener('click', () => {
      toastBootstrap.show()
    })
  }

}
