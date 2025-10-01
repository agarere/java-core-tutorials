Lambda ile özel Comparator örneği.

.....

```java
List<String> fruits = new ArrayList<>(List.of("Banana", "Apple", "Mango", "Kiwi"));

fruits.sort((a, b) -> Integer.compare(a.length(), b.length())); // Uzunluğa göre
System.out.println(fruits); // [Kiwi, Apple, Mango, Banana]
```