- Birden fazla kriter ile sıralamak için `thenComparing()` methodu kullanılır.

- Burada uzunlukların eşik olduğu durumda `thenComparing()` methodundaki kriter devreye girer.

.....

```java
fruits.sort(
    Comparator.comparing(String::length)              // önce uzunluk
              .thenComparing(Comparator.naturalOrder()) // eşitse alfabetik
);
System.out.println(fruits); // [Kiwi, Apple, Mango, Banana]
```
