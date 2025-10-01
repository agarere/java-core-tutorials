- `Comparator<T>` → iki nesneyi karşılaştırmayı sağlayan fonksiyonel arayüzdür.

- Paketi: `java.util.Comparator`.

- Eğer `Collections.sort(list)` çağrısında `Comparator` verirsen, o sıralama kriteri kullanılır.

- Avantajı: Bir sınıfa `Comparable` yazmaya gerek kalmadan, istediğin farklı sıralama mantıklarını uygulayabilirsin.

- Burada hazır Comparator örneği verilmiştir.

.....

```java
List<String> fruits = new ArrayList<>(List.of("Banana", "Apple", "Mango"));

Collections.sort(fruits, Comparator.naturalOrder()); // Doğal sıralama (A-Z)
System.out.println(fruits); // [Apple, Banana, Mango]

Collections.sort(fruits, Comparator.reverseOrder()); // Ters sıralama (Z-A)
System.out.println(fruits); // [Mango, Banana, Apple]
```