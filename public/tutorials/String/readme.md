Java’daki String sınıfı **primitive değildir**, ama en sık kullanılan sınıflardan biridir.

java.lang.String sınıfı **immutable (değiştirilemez)** bir yapıya sahiptir.
Yani bir String üzerinde işlem yaptığında aslında yeni bir String nesnesi oluşur.

`String` sınıfında **40+ metod** var:

---

### 1. length()

Karakter sayısını döner.

```java
String s = "Merhaba";
System.out.println(s.length()); // 7
```

---

### 2. charAt(int index)

Belirtilen index’teki karakteri döner.

```java
System.out.println("Java".charAt(2)); // 'v'
```

---

### 3. substring(int beginIndex)

Başlangıç indexinden sona kadar döner.

```java
System.out.println("Merhaba".substring(3)); // "haba"
```

---

### 4. substring(int beginIndex, int endIndex)

Başlangıç dahil, bitiş hariç alt string döner.

```java
System.out.println("Merhaba".substring(0, 3)); // "Mer"
```

---

### 5. contains(CharSequence s)

Alt string içeriyor mu?

```java
System.out.println("Merhaba".contains("ha")); // true
```

---

### 6. startsWith(String prefix)

Belirtilen değerle başlıyor mu?

```java
System.out.println("Java".startsWith("Ja")); // true
```

---

### 7. startsWith(String prefix, int offset)

Belirtilen index’ten itibaren başlıyor mu?

```java
System.out.println("Java".startsWith("va", 2)); // true
```

---

### 8. endsWith(String suffix)

Belirtilen değerle bitiyor mu?

```java
System.out.println("Merhaba".endsWith("ba")); // true
```

---

### 9. indexOf(String str)

İlk geçen index’i döner, yoksa -1.

```java
System.out.println("Merhaba".indexOf("ha")); // 3
```

---

### 10. indexOf(String str, int fromIndex)

Aramaya belli index’ten başlar.

```java
System.out.println("Merhaba".indexOf("a", 4)); // 6
```

---

### 11. lastIndexOf(String str)

Son geçen index’i döner.

```java
System.out.println("Merhaba".lastIndexOf("a")); // 6
```

---

### 12. equals(Object another)

İçerik karşılaştırır.

```java
System.out.println("Java".equals("Java")); // true
```

---

### 13. equalsIgnoreCase(String another)

Büyük/küçük harfe duyarsız karşılaştırır.

```java
System.out.println("java".equalsIgnoreCase("JAVA")); // true
```

---

### 14. compareTo(String another)

Leksikografik (sözlük sırası) karşılaştırma yapar.
String’deki her karakterin bir **Unicode değeri** vardır. (char aslında sayıdır).
compareTo metodu, karakterleri **soldan sağa** tek tek karşılaştırır.
İlk farklı karakter bulunduğunda, onların **Unicode farkını** döner.
Eğer tüm karakterler aynıysa → **0 döner.**

```java
System.out.println("abc".compareTo("abd")); // -1
```

---

### 15. compareToIgnoreCase(String another)

Karşılaştırmayı harf duyarsız yapar.

```java
System.out.println("java".compareToIgnoreCase("JAVA")); // 0
```

---

### 16. isEmpty()

Uzunluk sıfır mı?

```java
System.out.println("".isEmpty()); // true
```

---

### 17. isBlank() (Java 11+)

Sadece whitespace içeriyor mu?

```java
System.out.println("   ".isBlank()); // true
```

---

### 18. toUpperCase()

Bütün karakterleri büyük harfe çevirir.

```java
System.out.println("java".toUpperCase()); // "JAVA"
```

---

### 19. toLowerCase()

Bütün karakterleri küçük harfe çevirir.

```java
System.out.println("JAVA".toLowerCase()); // "java"
```

---

### 20. trim()

Başta ve sondaki boşlukları siler.

```java
System.out.println("   Merhaba   ".trim()); // "Merhaba"
```

---

### 21. strip() (Java 11+)

Unicode aware trim (daha güvenilir).

```java
System.out.println("   Merhaba   ".strip()); // "Merhaba"
```

---

### 22. stripLeading() (Java 11+)

Sadece baştaki boşlukları siler.

```java
System.out.println("   Java".stripLeading()); // "Java"
```

---

### 23. stripTrailing() (Java 11+)

Sadece sondaki boşlukları siler.

```java
System.out.println("Java   ".stripTrailing()); // "Java"
```

---

### 24. repeat(int count) (Java 11+)

String’i tekrarlar.

```java
System.out.println("Ha".repeat(3)); // "HaHaHa"
```

---

### 25. replace(char oldChar, char newChar)

Karakterleri değiştirir.

```java
System.out.println("Java".replace('a', 'o')); // "Jovo"
```

---

### 26. replace(CharSequence target, CharSequence replacement)

Alt string’i değiştirir.

```java
System.out.println("Merhaba".replace("ha", "he")); // "Merheba"
```

---

### 27. replaceAll(String regex, String replacement)

Regex ile eşleşenleri değiştirir.

```java
System.out.println("123abc456".replaceAll("\\d", "*")); // "***abc***"
```

---

### 28. replaceFirst(String regex, String replacement)

Regex ile ilk eşleşeni değiştirir.

```java
System.out.println("123abc456".replaceFirst("\\d", "*")); // "*23abc456"
```

---

### 29. split(String regex)

Regex’e göre parçalar.

```java
String[] parts = "a,b,c".split(",");
System.out.println(parts[1]); // "b"
```

---

### 30. split(String regex, int limit)

Belirli sayıda parçalama yapar.

```java
String[] parts = "a-b-c-d".split("-", 2);
System.out.println(parts[1]); // "b-c-d"
```

---

### 31. matches(String regex)

String regex ile tamamen eşleşiyor mu?

```java
System.out.println("abc123".matches("\\w+")); // true
```

---

### 32. join(CharSequence delimiter, CharSequence... elements)

Elemanları araya ayraç koyarak birleştirir.

```java
String s = String.join("-", "2025", "09", "10");
System.out.println(s); // "2025-09-10"
```

---

### 33. concat(String str)

Stringleri birleştirir.

```java
System.out.println("Merhaba".concat(" Dünya")); // "Merhaba Dünya"
```

---

### 34. toCharArray()

String’i karakter dizisine çevirir.

```java
char[] chars = "Java".toCharArray();
System.out.println(chars[1]); // 'a'
```

---

### 35. getBytes()

Byte dizisine çevirir (UTF-8, platform encoding).

```java
byte[] bytes = "ABC".getBytes();
System.out.println(bytes[0]); // 65
```

---

### 36. intern()

String’i String Pool’a ekler veya oradan döner.
Java’da String immutable (değiştirilemez).

JVM, bellek kullanımını optimize etmek için String Pool denen özel bir alan tutar.

Pool’da aynı string birden fazla kez oluşturulmaz. Yani "Merhaba" gibi bir sabit yazarsan JVM sadece tek kopyasını tutar.

Eğer new String("Merhaba") yazarsan Heap’te yeni bir String nesnesi oluşturulur.

intern() çağırıldığı string’in pool’da bir kopyası varsa → o kopyanın referansını döner.

Yoksa → bu string’i pool’a ekler ve referansını döner.

```java
String a = "Merhaba";             // Pool'da
String b = new String("Merhaba"); // Heap'te yeni obje

String c = b.intern();            // Pool'daki "Merhaba" referansı

System.out.println(a == b); // false
System.out.println(a == c); // true
```

---


### 37. format(String format, Object... args)

Formatlı string üretir (C’deki printf gibi).

```java
String s = String.format("Sayı: %d", 42);
System.out.println(s); // "Sayı: 42"
```

---

### 38. valueOf(…) (static method)

**Herhangi bir tipi** String’e çevirir.

```java
System.out.println(String.valueOf(123)); // "123"
```

---

### 39. copyValueOf(char[] data)

Karakter dizisini String’e çevirir.

```java
char[] c = {'J','a','v','a'};
System.out.println(String.copyValueOf(c)); // "Java"
```

---

### 40. regionMatches(...)

İki string’in belli bir bölümünü karşılaştırır.

```java
System.out.println("Merhaba".regionMatches(0, "Merkez", 0, 3)); // true
```

```java
boolean regionMatches(int toffset, String other, int ooffset, int len)
boolean regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len)
```
`toffset` → birinci string içinde başlangıç indexi

`other` → karşılaştırılacak string

`ooffset` → ikinci string içinde başlangıç indexi

`len` → karşılaştırılacak karakter sayısı

`ignoreCase` → büyük/küçük harf duyarsız karşılaştırma (opsiyonel)

---

### 41. subSequence(int begin, int end)

Belirtilen aralıktaki karakterleri döner (CharSequence olarak).

```java
CharSequence cs = "Merhaba".subSequence(0, 3);
System.out.println(cs); // "Mer"
```

---

### 42. indent(int n) (Java 12+)

Satır başına boşluk ekler veya çıkarır.

```java
System.out.println("Java".indent(4));
```

---

### 43. transform(Function f) (Java 12+)

String üzerinde fonksiyon çalıştırır.

```java
String s = "java".transform(str -> str.toUpperCase());
System.out.println(s); // "JAVA"
```

---

### 44. translateEscapes() (Java 15+)

Kaçış karakterlerini işler.

```java
System.out.println("Merhaba\\nDünya".translateEscapes());
// Merhaba
// Dünya
```

---