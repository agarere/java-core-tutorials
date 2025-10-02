# Java Stream API

Java Stream API, Java 8 ile gelen ve koleksiyonlar üzerinde fonksiyonel ve zincirleme (chaining) işlemler yapmayı sağlayan güçlü bir araçtır. Büyük veri kümeleri üzerinde filtreleme, dönüştürme, sıralama, toplama gibi işlemleri daha okunabilir ve kısa kodlarla yapmayı sağlar.

---

## Stream API Nedir?

- **Amaç:**  
  Koleksiyonlar (List, Set, Map, Array vb.) üzerinde fonksiyonel işlemler yapmayı sağlar.
- **Nereden gelir?**  
  `java.util.stream` paketinde bulunur.
- **Ne işe yarar?**  
  Veriyi işlemek için for döngüsü yerine daha kısa, fonksiyonel ve zincirleme kodlar yazmayı sağlar.

---

## Stream API Özellikleri

- **Fonksiyonel programlama desteği:** Lambda ifadeleriyle çalışır.
- **Zincirleme (chaining):** Birden fazla işlemi ardışık olarak bağlayabilirsin.
- **Lazy evaluation:** Ara işlemler (intermediate) hemen çalışmaz, terminal işlem çağrılınca çalışır.
- **Paralel işlem desteği:** `parallelStream()` ile çok çekirdekli işlem yapılabilir.
- **Kolay filtreleme, dönüştürme, toplama, sıralama, gruplama.**

---

## Stream API Kullanımı

### Stream Oluşturma

```java
List<String> isimler = List.of("Ali", "Veli", "Ayşe");
Stream<String> stream = isimler.stream();
```

### Temel Stream İşlemleri

#### 1. filter

Belirli bir koşula uyan elemanları seçer.

```java
List<String> sonuc = isimler.stream()
    .filter(s -> s.startsWith("A"))
    .collect(Collectors.toList()); // ["Ali", "Ayşe"]
```

#### 2. map

Her elemanı dönüştürür.

```java
List<Integer> uzunluklar = isimler.stream()
    .map(String::length)
    .collect(Collectors.toList()); // [3, 4, 4]
```

#### 3. sorted

Elemanları sıralar.

```java
List<String> sirali = isimler.stream()
    .sorted()
    .collect(Collectors.toList()); // ["Ali", "Ayşe", "Veli"]
```

#### 4. distinct

Tekrarlı elemanları çıkarır.

```java
List<Integer> sayilar = List.of(1, 2, 2, 3, 1);
List<Integer> benzersiz = sayilar.stream()
    .distinct()
    .collect(Collectors.toList()); // [1, 2, 3]
```

#### 5. limit / skip

Belirli sayıda eleman alır veya atlar.

```java
List<String> ilkIki = isimler.stream()
    .limit(2)
    .collect(Collectors.toList()); // ["Ali", "Veli"]

List<String> atlaBir = isimler.stream()
    .skip(1)
    .collect(Collectors.toList()); // ["Veli", "Ayşe"]
```

#### 6. forEach

Her eleman için işlem yapar (terminal operation).

```java
isimler.stream().forEach(System.out::println);
```

#### 7. collect

Sonucu bir koleksiyona veya başka bir yapıya toplar.

```java
Set<String> isimSeti = isimler.stream().collect(Collectors.toSet());
```

#### 8. reduce

Tüm elemanları tek bir değere indirger.

```java
int toplam = sayilar.stream().reduce(0, Integer::sum); // 1+2+2+3+1 = 9
```

#### 9. anyMatch / allMatch / noneMatch

Koşula göre boolean döner.

```java
boolean varMi = isimler.stream().anyMatch(s -> s.equals("Ali")); // true
boolean hepsiA = isimler.stream().allMatch(s -> s.startsWith("A")); // false
```

---

## Chaining (Zincirleme) Nedir?

Stream API’de birden fazla işlemi ardışık olarak bağlamaya chaining denir. Her ara işlem bir Stream döndürür, terminal işlemle sonuç alınır.

**Örnek:**
```java
List<String> sonuc = isimler.stream()
    .filter(s -> s.length() > 3)
    .map(String::toUpperCase)
    .sorted()
    .collect(Collectors.toList());
// ["AYŞE", "VELI"]
```

---

## Paralel Stream

Büyük veri kümelerinde işlemleri paralel yapmak için kullanılır.

```java
List<Integer> sayilar = List.of(1,2,3,4,5,6,7,8,9,10);
int toplam = sayilar.parallelStream().reduce(0, Integer::sum);
```

---

## Stream API ile Sık Kullanılan Örnekler

### 1. Filtreleme ve Dönüştürme

```java
List<String> isimler = List.of("Ali", "Veli", "Ayşe", "Ahmet");
List<String> sonuc = isimler.stream()
    .filter(s -> s.startsWith("A"))
    .map(String::toUpperCase)
    .collect(Collectors.toList()); // ["ALI", "AYŞE", "AHMET"]
```

### 2. Gruplama

```java
Map<Integer, List<String>> gruplar = isimler.stream()
    .collect(Collectors.groupingBy(String::length));
// {3=[Ali], 4=[Veli, Ayşe], 5=[Ahmet]}
```

### 3. Sıralama ve Limit

```java
List<String> ilkIki = isimler.stream()
    .sorted()
    .limit(2)
    .collect(Collectors.toList()); // ["Ali", "Ayşe"]
```

### 4. Toplama (reduce)

```java
List<Integer> sayilar = List.of(1,2,3,4,5);
int toplam = sayilar.stream().reduce(0, Integer::sum); // 15
```

---

## Stream API’de Ara ve Terminal İşlemler

- **Ara işlemler (intermediate):** filter, map, sorted, distinct, limit, skip
- **Terminal işlemler:** collect, forEach, reduce, count, anyMatch, allMatch, noneMatch

Ara işlemler zincirlenebilir, terminal işlem çağrılınca stream çalışır.

## Özet

- Stream API, koleksiyonlar üzerinde fonksiyonel ve zincirleme işlemler yapmayı sağlar.
- Kodun daha kısa, okunabilir ve bakımı kolay olur.
- Filtreleme, dönüştürme, sıralama, toplama, gruplama gibi işlemler için idealdir.
