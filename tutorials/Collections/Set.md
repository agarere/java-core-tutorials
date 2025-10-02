# Java Set Interface ve Set Class Implementasyonları

Java’da `Set` interface’i, tekrarsız (unique) elemanlardan oluşan bir koleksiyon yapısı sunar. Sıralama garantisi yoktur (bazı class implementasyonlar hariç) ve bir eleman yalnızca bir kez eklenebilir.

---

## Set Interface Özellikleri

- **Tekrarsız Elemanlar:** Aynı eleman birden fazla eklenemez.
- **Null Değer:** Genellikle bir adet null eklenebilir (implementasyona göre değişir).
- **Sıralama:** Sıralama garantisi yoktur; bazı class implementasyonlar sıralama sunar.
- **Generic:** Tip güvenliği sağlar.
- **Hızlı Arama:** Hash tabanlı class implementasyonlarda hızlı arama ve ekleme.

### Temel Set Metotları

```java
Set<String> meyveler = new HashSet<>();
meyveler.add("Elma");
meyveler.add("Armut");
meyveler.add("Elma"); // Tekrar eklenmez
meyveler.contains("Elma"); // true
meyveler.remove("Armut");
meyveler.size(); // Eleman sayısı
meyveler.clear(); // Tüm elemanları siler
```

---

## Set Class Implementasyonları ve Farkları

### 1. HashSet (class)

- **Sıralama:** Yok, elemanlar hash tabanlı olarak saklanır.
- **Hız:** Ekleme, silme ve arama işlemleri genellikle çok hızlıdır (O(1)).
- **Null:** Bir adet null eklenebilir.
- **Tekrarsızlık:** Aynı eleman eklenirse eklenmez.

```java
Set<String> set = new HashSet<>();
set.add("A");
set.add("B");
set.add("A"); // eklenmez
System.out.println(set); // [A, B] (sıra garanti edilmez)
```

---

### 2. LinkedHashSet (class)

- **Sıralama:** Ekleme sırasını korur.
- **Hız:** HashSet’e göre biraz daha yavaştır (dahili bağlı liste tutar).
- **Null:** Bir adet null eklenebilir.

```java
Set<String> set = new LinkedHashSet<>();
set.add("A");
set.add("B");
set.add("C");
System.out.println(set); // [A, B, C]
```

---

### 3. TreeSet (class)

- **Sıralama:** Doğal sıralama (veya Comparator ile) ile tutar.
- **Hız:** Ekleme, silme ve arama işlemleri O(log n) karmaşıklığındadır.
- **Null:** Null eklenemez (NullPointerException).
- **Ekstra:** Sıralı gezinme, alt küme işlemleri mümkündür.

```java
Set<Integer> set = new TreeSet<>();
set.add(3);
set.add(1);
set.add(2);
System.out.println(set); // [1, 2, 3]
```

---

## Set Class Implementasyonları Karşılaştırma Tablosu

| Özellik         | HashSet (class) | LinkedHashSet (class) | TreeSet (class) |
|-----------------|-----------------|-----------------------|-----------------|
| Sıralama        | Yok             | Ekleme sırası         | Doğal/Comparator|
| Hız             | Çok hızlı       | Hızlı                 | Orta (log n)    |
| Null Desteği    | 1 adet          | 1 adet                | Yok             |
| Tekrarsızlık    | Evet            | Evet                  | Evet            |
| Alt Küme        | Yok             | Yok                   | Evet            |

---

## Set Kullanımında Dikkat Edilmesi Gerekenler

- Sıralama önemli değilse ve en hızlı performans isteniyorsa `HashSet` (class) kullanılır.
- Ekleme sırası korunacaksa `LinkedHashSet` (class) tercih edilir.
- Sıralı veri ve alt küme işlemleri gerekiyorsa `TreeSet` (class) kullanılır.
- `TreeSet` (class) ile null eklenemez, dikkat!
- Set’ler (interface), List gibi indeks ile erişim sunmaz.

---

## Özet

- `Set` interface’i, Java’da tekrarsız veri tutmak için kullanılır.
- Farklı class implementasyonlar farklı sıralama ve performans avantajları sunar.
- Uygulamanın ihtiyacına göre uygun Set class’ı seçilmelidir.

---

## Set Elemanlarına Erişim (get Alternatifleri)

### HashSet, LinkedHashSet, TreeSet

Set’lerde doğrudan `get(index)` metodu yoktur. Elemanlara erişmek için iterator veya for-each kullanılır.

**Örnek: Iterator ile erişim**
```java
Set<String> set = new HashSet<>(Set.of("A", "B", "C"));
Iterator<String> it = set.iterator();
while (it.hasNext()) {
    String eleman = it.next();
    System.out.println(eleman);
}
```

**Örnek: For-each ile erişim**
```java
for (String eleman : set) {
    System.out.println(eleman);
}
```

**Örnek: Belirli bir indeksteki elemanı almak (List’e çevirerek)**
```java
Set<String> set = new LinkedHashSet<>(Set.of("A", "B", "C"));
List<String> list = new ArrayList<>(set);
System.out.println(list.get(1)); // "B"
```

**TreeSet’te sıralı erişim**
```java
Set<Integer> set = new TreeSet<>(Set.of(5, 2, 8));
for (Integer eleman : set) {
    System.out.println(eleman); // 2, 5, 8
}
```

**Not:**  
- Set interface’i indeksli erişim sunmaz, bu yüzden doğrudan `get` metodu yoktur.
- Eğer indeksli erişim gerekiyorsa, Set’i List’e dönüştürüp `get(index)` kullanabilirsin.
