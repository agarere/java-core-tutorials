Sonuna metin ekler. 

👉​ `new StringBuilder("")` ile yeni bir `StringBuilder` oluşturduğumuzda kapasite default olarak **16byte** yer açar. `append()` ile ekleme yapıldığında boyutu aştığında **mevcut boyutu 2'ye katlar ve 2 ekler**. Örneğin 16'yı aştığın zaman 16(mevcut) + 16(yeni) + 2(yeni) = 34 byte kapasite oluşturur.

👉​ `new StringBuilder("Java")` ile yeni bir `StringBuilder` oluşturduğumuzda kapasite **16 + oluşturulan string uzunluğu** kadar kapasite açar.

.....

```java
public class StringBuilderAppend {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("");
        System.out.println(sb.capacity()); // 16
        sb.append("Programlama");
        sb.append("Programlama");
        System.out.println(sb); // "ProgramlamaProgramlama"
        System.out.println(sb.capacity()); // 34

        StringBuilder sb = new StringBuilder("Java");
        System.out.println(sb.capacity()); // 20
    }
}
```