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