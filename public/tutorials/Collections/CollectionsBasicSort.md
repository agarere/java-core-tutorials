Basic Sort

- Eğer `Collections.sort(list)` çağırırsan, **liste elemanlarının kendi "doğal sıralama düzeni" (natural ordering) kullanılır**.

- “Doğal sıralama” kavramı, sınıfın `Comparable` arayüzünü implement etmesine bağlıdır.

- Java'da bazı sınıflar zaten `Comparable` implement eder:

- `String` → alfabetik sıralama

- `Integer`, `Double`, `Long` → sayısal sıralama

- `Date`, `LocalDate`, `LocalDateTime` → kronolojik sıralama

- Yani sen ayrıca Comparator vermezsen, elemanların **kendi compareTo metotları kullanılır**.

.....

```java
List<String> fruits = new ArrayList<>(Arrays.asList("Elma","Muz","Armut"));
Collections.sort(fruits); // [Armut, Elma, Muz]
```