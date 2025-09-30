# Java Optional Sınıfı

Java 8 ile gelen `Optional` sınıfı, null değerlerle çalışırken oluşabilecek hataları önlemek ve daha güvenli kod yazmak için kullanılır. Özellikle null pointer exception riskini azaltır ve fonksiyonel programlama ile uyumlu çalışır.

## Optional Nedir?

`Optional`, bir değerin var olup olmadığını ifade eden bir kapsayıcı (container) sınıftır. Bir değişkenin null olma ihtimali varsa, doğrudan null kontrolü yapmak yerine `Optional` kullanmak daha güvenlidir.

## Optional Nasıl Oluşturulur?

```java
Optional<String> optional = Optional.of("Merhaba");
Optional<String> bosOptional = Optional.empty();
Optional<String> nullOlabilecek = Optional.ofNullable(null);
```

**Açıklama:**
- `Optional.of(value)`: Null olmayan bir değerle oluşturur. Eğer değer null ise `NullPointerException` fırlatır. Bu yüzden değerin kesinlikle null olmadığından emin olmalısınız.
- `Optional.empty()`: Boş bir Optional oluşturur. İçinde hiçbir değer barındırmaz.
- `Optional.ofNullable(value)`: Değer null ise boş Optional, değilse değerli Optional oluşturur. Genellikle dışarıdan gelen ve null olma ihtimali olan veriler için kullanılır.

## Optional Kullanımı

### Değerin Var Olup Olmadığını Kontrol Etmek

```java
Optional<String> optional = Optional.of("Java");

if (optional.isPresent()) {
    System.out.println(optional.get()); // "Java"
}
```

**Açıklama:**
- `isPresent()`: Optional içinde bir değer olup olmadığını kontrol eder. Eğer değer varsa `true`, yoksa `false` döner.
- `get()`: Optional içindeki değeri döndürür. Eğer değer yoksa `NoSuchElementException` fırlatır. Bu yüzden önce `isPresent()` ile kontrol etmek önemlidir.

### Değer Yoksa Varsayılan Değer Atamak

```java
Optional<String> optional = Optional.empty();

String sonuc = optional.orElse("Varsayılan Değer");
System.out.println(sonuc); // "Varsayılan Değer"
```

**Açıklama:**
- `orElse(value)`: Optional içinde değer varsa onu döndürür, yoksa parametre olarak verilen değeri döndürür. Null kontrolüyle uğraşmadan güvenli bir şekilde varsayılan değer atamanızı sağlar.

### Değer Yoksa Lambda ile Hesaplamak

```java
Optional<String> optional = Optional.empty();

String sonuc = optional.orElseGet(() -> "Hesaplanan Değer");
System.out.println(sonuc); // "Hesaplanan Değer"
```

**Açıklama:**
- `orElseGet(Supplier)`: Optional içinde değer varsa onu döndürür, yoksa lambda ile verilen fonksiyonu çalıştırıp sonucunu döndürür. Özellikle maliyetli işlemler için, sadece değer yoksa çalışmasını istediğiniz durumlarda kullanılır.

### Değer Yoksa Hata Fırlatmak

```java
Optional<String> optional = Optional.empty();

String sonuc = optional.orElseThrow(() -> new RuntimeException("Değer yok!"));
```

**Açıklama:**
- `orElseThrow(Supplier)`: Optional içinde değer varsa onu döndürür, yoksa lambda ile verilen exception'ı fırlatır. Kritik durumlarda, değer yoksa hata vermek istediğinizde kullanılır.

### Değeri Dönüştürmek (map)

```java
Optional<String> optional = Optional.of("java");

Optional<String> buyukHarf = optional.map(String::toUpperCase);
System.out.println(buyukHarf.get()); // "JAVA"
```

**Açıklama:**
- `map(Function)`: Optional içindeki değeri verilen fonksiyonla dönüştürür ve yeni bir Optional döndürür. Eğer değer yoksa boş Optional döner. Fonksiyonel programlama ile uyumlu, zincirleme işlemler için idealdir.

### Değeri Filtrelemek

```java
Optional<String> optional = Optional.of("java");

optional = optional.filter(s -> s.length() > 3);
System.out.println(optional.isPresent()); // true
```

**Açıklama:**
- `filter(Predicate)`: Optional içindeki değeri verilen koşula göre filtreler. Koşul sağlanıyorsa aynı Optional döner, sağlanmıyorsa boş Optional döner. Özellikle belirli şartlara uyan değerlerle çalışmak için kullanılır.

## Optional ile NullPointerException Önleme

```java
public String getAd(User user) {
    return Optional.ofNullable(user)
                   .map(User::getAd)
                   .orElse("Bilinmiyor");
}
```

**Açıklama:**
- Burada önce `user` nesnesi null mı diye kontrol etmek yerine, `Optional.ofNullable(user)` ile kapsayıcıya alıyoruz.
- `map(User::getAd)` ile user null değilse adını alıyoruz, null ise işlem yapılmıyor.
- Son olarak, değer yoksa `"Bilinmiyor"` döndürülüyor. Böylece null pointer hatası riski ortadan kalkıyor.

## Sık Kullanılan Yöntemler

- `isPresent()`: Değer var mı?
- `ifPresent(Consumer)`: Değer varsa işle.
- `get()`: Değeri al (varsa).
- `orElse(value)`: Değer yoksa varsayılanı döndür.
- `orElseGet(Supplier)`: Değer yoksa lambda ile üret.
- `orElseThrow(Supplier)`: Değer yoksa hata fırlat.
- `map(Function)`: Değeri dönüştür.
- `filter(Predicate)`: Değeri filtrele.

## Kötü Kullanım: get() ile Null Kontrolü

`get()` metodu doğrudan kullanılmamalıdır, çünkü değer yoksa hata fırlatır. Bunun yerine `orElse`, `orElseGet` veya `ifPresent` tercih edilmelidir.

## Özet

`Optional`, null güvenliğini artırır ve daha fonksiyonel, okunabilir kod yazmayı sağlar. Özellikle veri tabanından veya dış kaynaklardan gelen verilerde null kontrolü için idealdir.
