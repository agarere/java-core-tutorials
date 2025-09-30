`?` → **bilinmeyen tip** anlamına gelir.

Bir generic sınıf veya metodda, parametre tipini tam olarak bilmediğimiz ama yine de kullanmak istediğimiz durumlarda kullanırız.

Bu list’in içinde **ne olduğunu bilmiyoruz**.

Sadece `Object` gibi davranabiliriz, yani **okuyabiliriz ama yazamayız** (çünkü tip güvenliği bozulur).

.....

```java
List<?> list = new ArrayList<String>();
```