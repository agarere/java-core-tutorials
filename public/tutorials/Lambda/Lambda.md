- **Lambda Expression** fonksiyonel programlamayı destekleyen, kısa ve **anonim bir fonksiyon** yazma yoludur.
- Lambda’lar Java 8 ile geldi ve özellikle `Collections API`, `Streams API` ve `functional interface`’lerle birlikte kullanılır.
- Lambda sayesinde klasik anonim sınıflar yerine daha okunaklı ve kısa kod yazabilirsiniz.
- `(parameters) -> expression`
- `(parameters) -> { statements; }`

.....

```java
// Function: String'i büyük harfe çevir
Function<String, String> toUpperCase = s -> s.toUpperCase();
System.out.println(toUpperCase.apply("hello")); // HELLO

// BiFunction: İki sayıyı toplar
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(5, 3)); // 8

List<String> names = Arrays.asList("Ali", "Veli", "Ayşe");
// Her ismi büyük harfe çevirip yazdır
names.forEach(name -> System.out.println(name.toUpperCase()));
```