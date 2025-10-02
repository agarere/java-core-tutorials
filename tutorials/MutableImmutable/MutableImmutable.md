# Java'da Mutable ve Immutable Kavramları

---

## Nedir?

- **Mutable (Değiştirilebilir):**  
  Bir nesnenin oluşturulduktan sonra iç durumu (verisi) değiştirilebiliyorsa o nesne "mutable"dır.

- **Immutable (Değiştirilemez):**  
  Bir nesnenin oluşturulduktan sonra iç durumu değiştirilemiyorsa o nesne "immutable"dır.

---

## Aralarındaki Farklar

| Özellik            | Mutable                        | Immutable                      |
|--------------------|-------------------------------|--------------------------------|
| İç veri değişir mi | Evet                          | Hayır                          |
| Thread-safe        | Genellikle hayır              | Genellikle evet                |
| Performans         | Sık değişim için uygundur      | Sık paylaşım için uygundur     |
| Kullanım           | Array, List, Map, StringBuilder| String, Integer, LocalDate     |

---

## Java'da Immutable Tipler

- **String**
- **Wrapper Sınıflar:** Integer, Double, Boolean, Character, vb.
- **Enum**
- **LocalDate, LocalTime, LocalDateTime (java.time)**
- **Record (Java 14+)**
- **Collections.unmodifiableList, List.of, Set.of, Map.of ile oluşturulan koleksiyonlar**

### Örnek: String (Immutable)
```java
String s = "Ali";
s.concat(" Veli"); // s değişmez, yeni bir String döner
System.out.println(s); // "Ali"
String yeni = s.concat(" Veli");
System.out.println(yeni); // "Ali Veli"
```

### Örnek: Integer (Immutable)
```java
Integer x = 5;
x = x + 1; // x'in değeri değişmez, yeni bir Integer nesnesi oluşur
```

### Örnek: LocalDate (Immutable)
```java
LocalDate d = LocalDate.of(2023, 1, 1);
LocalDate yeni = d.plusDays(5); // d değişmez, yeni bir LocalDate döner
```

---

## Java'da Mutable Tipler

- **Array**
- **List, Set, Map (varsayılan implementasyonlar)**
- **StringBuilder, StringBuffer**
- **Custom (kendi yazdığın) mutable class'lar**

### Örnek: Array (Mutable)
```java
int[] arr = {1, 2, 3};
arr[0] = 10; // arr değişti
System.out.println(Arrays.toString(arr)); // [10, 2, 3]
```

### Örnek: ArrayList (Mutable)
```java
List<String> l = new ArrayList<>(List.of("A", "B"));
l.add("C"); // l değişti
System.out.println(l); // [A, B, C]
```

### Örnek: StringBuilder (Mutable)
```java
StringBuilder sb = new StringBuilder("Ali");
sb.append(" Veli"); // sb değişti
System.out.println(sb); // "Ali Veli"
```

---

## Immutable Sınıf Nasıl Yazılır?

- Tüm alanlar `final` olmalı.
- Alanlar private olmalı.
- Setter metodu olmamalı.
- Değiştirilebilen alanlar varsa, kopyası döndürülmeli.

**Örnek: Kendi immutable class'ın**
```java
public final class Kisi {
    private final String ad;
    private final int yas;

    public Kisi(String ad, int yas) {
        this.ad = ad;
        this.yas = yas;
    }

    public String getAd() { return ad; }
    public int getYas() { return yas; }
}
```

---

## Mutable ve Immutable Koleksiyonlar

- **Mutable:** Varsayılan ArrayList, HashSet, HashMap
- **Immutable:**  
  - `List.of("A", "B")` (Java 9+)
  - `Collections.unmodifiableList(list)`
  - `Set.of(...)`, `Map.of(...)`

**Örnek: Immutable List**
```java
List<String> l = List.of("A", "B");
// l.add("C"); // UnsupportedOperationException
```

**Örnek: Mutable List**
```java
List<String> l = new ArrayList<>(List.of("A", "B"));
l.add("C"); // [A, B, C]
```

---

## Neden Immutable Kullanılır?

- Thread-safe: Aynı anda birden fazla thread tarafından güvenle kullanılabilir.
- Yan etkisiz (side-effect free) kod yazmak için.
- Kolay test edilebilir ve hata ayıklanabilir.
- Güvenlik ve tutarlılık sağlar.

---

## Özet

- Mutable nesneler değiştirilebilir, immutable nesneler değiştirilemez.
- String, wrapper sınıflar, LocalDate gibi tipler immutable’dır.
- Array, List, Map, StringBuilder gibi tipler mutable’dır.
- Immutable nesneler thread-safe ve yan etkisizdir, mutable nesneler ise esneklik ve performans için uygundur.
