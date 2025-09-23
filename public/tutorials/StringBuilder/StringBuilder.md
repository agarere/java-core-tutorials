### String

Java’da metinlerle çalışmak için genelde String sınıfı kullanılır.
`String` nesneleri **immutable (değiştirilemez)**’dir. Yeni metin eklemek istediğinde Java **yeni bir String nesnesi** oluşturur, bu da bellek ve performans maliyetine sebep olur.

### StringBuilder

`StringBuilder` nesneleri ise **mutable (değiştirilebilir)**’dir. Çok fazla metin birleştirme / ekleme işlemi yaparken `StringBuilder` **daha hızlı ve verimlidir**.
Performanslı string manipülasyonu (ekleme, silme, değiştirme, ters çevirme vb.)
Özellikle döngüler içinde çok fazla string birleştirmesi yapıldığında tercih edilir.

.....

```java
public class StringBuilder {
    public static void main(String[] args) {
        String s = "Hello";
        s.concat(" World"); // Yeni String oluşturur, s değişmez
        System.out.println(s); // "Hello"

        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World"); // Aynı nesne üzerinde değişiklik yapar
        System.out.println(sb); // "Hello World"
    }
}
```