Bu koleksiyon, **T tipinden veya T’nin alt sınıflarından** oluşur.

Bu liste şunları tutabilir:
- `List<Integer>`
- `List<Double>`
- `List<Float>`

**Kural**: `? extends` → **okumaya izin var**, ekleme yok.
(Buna: **Producer Extends** kuralı denir → PECS: Producer Extends, Consumer Super)

.....

```java
List<? extends Number> numbers;

void printNumbers(List<? extends Number> list) {
    for (Number n : list) {
        System.out.println(n);
    }
}
```