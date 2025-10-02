- Bir `List`i sıralar. Elemanlar ya `Comparable` olmalı (doğal sıralama) ya da bir `Comparator` verilmelidir.
- İmzalar: `Collections.sort(List<T> list)` ve `Collections.sort(List<T> list, Comparator<? super T> c)` ; Java 8+ ayrıca `list.sort(Comparator...)`.
- Karmaşıklık: Tipik olarak O(n log n).
- Dikkat: Liste `null` içeriyorsa ve doğal sıralama kullanılıyorsa `NullPointerException` alırsınız; karşılaştırıcı kontrolü yapılmalı.

.....

```java
List<String> fruits = new ArrayList<>(Arrays.asList("Elma","Muz","Armut"));
Collections.sort(fruits); // [Armut, Elma, Muz]
```

```java
class Person implements Comparable<Person> {
    String name; int age;
    
    @Override
    public int compareTo(Person o){ return Integer.compare(this.age, o.age); }
    
    @Override
    public String toString(){ return name+":"+age; }
}
// ...
List<Person> p = new ArrayList<>(List.of(new Person("A",30), new Person("B",20)));
Collections.sort(p); // yaşa göre
```

```java
Collections.sort(fruits, Collections.reverseOrder());
fruits.sort(Comparator.comparing(String::length).thenComparing(Comparator.naturalOrder()));
```