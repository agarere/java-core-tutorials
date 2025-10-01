# Java Map Interface ve Map Class Implementasyonları

Java’da `Map` interface’i, anahtar-değer (key-value) çiftlerini tutan bir koleksiyon yapısıdır. Her anahtar benzersizdir ve bir anahtara karşılık bir değer saklanır.

---

## Map Interface Nedir?

- **Nereden gelir?**  
  `Map` interface’i, Java Collections Framework’ün bir parçasıdır ve `java.util` paketinde bulunur.
- **Amaç:**  
  Anahtar-değer ilişkisiyle veri saklamak ve hızlı erişim sağlamak.

---

## Map Interface Özellikleri

- Her anahtar (key) benzersizdir.
- Bir anahtara karşılık bir değer (value) saklanır.
- Null anahtar ve/veya null değer desteği implementasyona göre değişir.
- Sıralama garantisi yoktur (bazı class implementasyonlar hariç).
- Generic yapı ile tip güvenliği sağlar.

### Temel Map Metotları

```java
Map<Integer, String> map = new HashMap<>();
map.put(1, "Ali");         // Anahtar-değer ekler
map.put(2, "Veli");
map.put(1, "Ayşe");        // 1 anahtarındaki değeri günceller
String val = map.get(1);   // "Ayşe"
map.remove(2);             // Anahtar 2'yi siler
map.containsKey(1);        // true
map.containsValue("Ayşe"); // true
map.size();                // Eleman sayısı
map.clear();               // Tüm elemanları siler
```

---

## Map Class Implementasyonları ve Farkları

### 1. HashMap (class)

- **Sıralama:** Yok, elemanlar hash tabanlı olarak saklanır.
- **Hız:** Ekleme, silme ve arama işlemleri genellikle çok hızlıdır (O(1)).
- **Null:** Bir adet null anahtar ve birden fazla null değer eklenebilir.
- **Tekrarsız anahtar:** Aynı anahtar eklenirse değeri güncellenir.

```java
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put(null, 3);
System.out.println(map); // {A=1, B=2, null=3}
```

---

### 2. LinkedHashMap (class)

- **Sıralama:** Ekleme sırasını korur.
- **Hız:** HashMap’e göre biraz daha yavaştır (dahili bağlı liste tutar).
- **Null:** Bir adet null anahtar ve birden fazla null değer eklenebilir.

```java
Map<String, Integer> map = new LinkedHashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);
System.out.println(map); // {A=1, B=2, C=3}
```

---

### 3. TreeMap (class)

- **Sıralama:** Anahtarlar doğal sıralama (veya Comparator ile) ile tutulur.
- **Hız:** Ekleme, silme ve arama işlemleri O(log n) karmaşıklığındadır.
- **Null:** Null anahtar eklenemez (NullPointerException), null değer eklenebilir.
- **Ekstra:** Sıralı gezinme, alt harita işlemleri mümkündür.

```java
Map<Integer, String> map = new TreeMap<>();
map.put(3, "C");
map.put(1, "A");
map.put(2, "B");
System.out.println(map); // {1=A, 2=B, 3=C}
```

---

### 4. Hashtable (class)

- **Sıralama:** Yok.
- **Hız:** HashMap’e benzer, ancak thread-safe’dir (tüm metotlar synchronized).
- **Null:** Null anahtar ve null değer eklenemez.
- **Modern Java’da genellikle önerilmez.**

```java
Map<String, Integer> map = new Hashtable<>();
map.put("A", 1);
map.put("B", 2);
// map.put(null, 3); // NullPointerException
```

---

### 5. ConcurrentHashMap (class)

- **Sıralama:** Yok.
- **Hız:** Çoklu thread ortamında yüksek performans.
- **Null:** Null anahtar ve null değer eklenemez.
- **Thread-safe:** Modern çoklu thread uygulamaları için önerilir.

```java
Map<String, Integer> map = new ConcurrentHashMap<>();
map.put("A", 1);
map.put("B", 2);
// map.put(null, 3); // NullPointerException
```

---

## Map Class Implementasyonları Karşılaştırma Tablosu

| Özellik         | HashMap (class) | LinkedHashMap (class) | TreeMap (class) | Hashtable (class) | ConcurrentHashMap (class) |
|-----------------|-----------------|-----------------------|-----------------|-------------------|---------------------------|
| Sıralama        | Yok             | Ekleme sırası         | Doğal/Comparator| Yok               | Yok                      |
| Null Anahtar    | Evet            | Evet                  | Hayır           | Hayır             | Hayır                    |
| Null Değer      | Evet            | Evet                  | Evet            | Hayır             | Hayır                    |
| Thread-Safe     | Hayır           | Hayır                 | Hayır           | Evet              | Evet                     |
| Performans      | Çok hızlı       | Hızlı                 | Orta (log n)    | Yavaş             | Çok hızlı                |

---

## Map Kullanımında Dikkat Edilmesi Gerekenler

- Sıralama önemli değilse ve en hızlı performans isteniyorsa `HashMap` (class) kullanılır.
- Ekleme sırası korunacaksa `LinkedHashMap` (class) tercih edilir.
- Sıralı anahtarlar ve alt harita işlemleri gerekiyorsa `TreeMap` (class) kullanılır.
- Çoklu thread ortamında thread-safe gerekirse `ConcurrentHashMap` (class) veya eski kodlarda `Hashtable` (class) kullanılabilir.
- Null anahtar ve/veya null değer desteği implementasyona göre değişir.


## Özet

- `Map` interface’i, Java’da anahtar-değer ilişkili veri tutmak için kullanılır.
- Farklı class implementasyonlar farklı sıralama, null desteği ve performans avantajları sunar.
- Uygulamanın ihtiyacına göre uygun Map class’ı seçilmelidir.

