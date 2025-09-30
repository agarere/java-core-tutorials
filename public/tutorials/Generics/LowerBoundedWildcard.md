Bu koleksiyon, **T tipinden veya T’nin üst sınıflarından** oluşur.

Bu liste şunları tutabilir:
- `List<Integer>`
- `List<Number>`
- `List<Object>`

- `Integer` (ve alt tipleri) eklenebilir.
- Ama okurken `Object` döner (çünkü tam tip garanti edilemez).

**Kural**: `? super` → **ekleme serbest**, okuma kısıtlı (Object döner).
(Buna: **Consumer Super** kuralı denir → PECS)

.....

```java
List<? super Integer> integers;

void addNumbers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
    // Integer eklemek güvenli
}

List<Number> numbers = new ArrayList<>();
addNumbers(numbers);
```