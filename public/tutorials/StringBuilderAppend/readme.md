Sonuna metin ekler. 

👉​ `new StringBuilder("")` ile yeni bir `StringBuilder` oluşturduğumuzda kapasite default olarak **16byte** yer açar. `append()` ile ekleme yapıldığında boyutu aştığında **mevcut boyutu 2'ye katlar ve 2 ekler**. Örneğin 16'yı aştığın zaman 16(mevcut) + 16(yeni) + 2(yeni) = 34 byte kapasite oluşturur.

👉​ `new StringBuilder("Java")` ile yeni bir `StringBuilder` oluşturduğumuzda kapasite **16 + oluşturulan string uzunluğu** kadar kapasite açar.