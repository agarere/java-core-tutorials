- `String::length` → method reference

- `Comparator.comparing` → hangi özelliğe göre sıralayacağını söylüyorsun.

.....

```java
fruits.sort(Comparator.comparing(String::length)); 
System.out.println(fruits); // [Kiwi, Apple, Mango, Banana]
```