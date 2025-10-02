# Java Ek OOP Kavramları

---

## 1. İç İçe Sınıflar (Inner Classes, Static Nested Classes, Anonymous Classes)

### Nedir?
Bir sınıfın içinde tanımlanan, dış sınıf ile ilişkili veya bağımsız olabilen sınıflardır. Üç çeşidi vardır: inner class, static nested class, anonymous class.

### Ne İşe Yarar?
Kodun daha modüler ve okunabilir olmasını sağlar. Dış sınıfın verilerine erişim veya kısa süreli özel davranışlar için kullanılır.

### Ne İçin Kullanılır?
- Dış sınıfın verilerine erişmek
- Sadece bir yerde kullanılacak yardımcı sınıflar oluşturmak
- Olay dinleyicileri, kısa süreli davranışlar (anonymous class)

### Nasıl Kullanılır?
#### Inner Class (Bağımlı iç sınıf)
```java
public class Outer {
    private String msg = "Merhaba";
    class Inner {
        void printMsg() { System.out.println(msg); }
    }
    void demo() {
        Inner inner = new Inner();
        inner.printMsg();
    }
}
```

---

## Static Nested Class (Bağımsız iç sınıf)
Java'da "static class" ifadesi, bir sınıfın içinde `static` anahtar kelimesiyle tanımlanan iç sınıfı (static nested class) ifade eder.

### Nedir?
- Bir sınıfın içinde, `static` anahtar kelimesiyle tanımlanan iç sınıftır.
- Dış sınıfın nesnesine bağlı değildir; doğrudan dış sınıfın adıyla erişilir.

### Ne İşe Yarar?
- Dış sınıfla ilişkili yardımcı veri yapıları veya mantık gruplamak için kullanılır.
- Dış sınıfın static üyelerine erişebilir, instance üyelerine erişemez.
- Dış sınıfın nesnesi olmadan oluşturulabilir.

### Ne İçin Kullanılır?
- Dış sınıfa ait yardımcı sınıfları gruplamak.
- Dış sınıfın static alanlarına veya metotlarına erişmek.
- Kapsülleme ve kodun düzenini artırmak.


### Nasıl Kullanılır?
```java
public class Outer {
    static int x = 10;

    static class Nested {
        void printX() {
            System.out.println(x); // Dış sınıfın static alanına erişebilir
        }
    }
}

// Kullanım:
Outer.Nested n = new Outer.Nested();
n.printX(); // 10
```

### Özellikleri Nelerdir?
- Dış sınıfın static üyelerine erişebilir, instance üyelerine erişemez.
- Dış sınıfın nesnesi olmadan oluşturulabilir: `Outer.Nested n = new Outer.Nested();`
- Genellikle yardımcı veya gruplandırıcı veri yapıları için kullanılır.
- Inner class’lardan farklı olarak, static nested class’lar dış sınıfın instance’ına bağımlı değildir ve daha az bellek kullanır.


**Not:**  
Sadece iç içe sınıflarda `static` anahtar kelimesi kullanılabilir. Bağımsız (top-level) sınıflar için `static` anahtar kelimesi kullanılamaz.

---

#### Anonymous Class (Anonim sınıf)
```java
Runnable r = new Runnable() {
    public void run() { System.out.println("Anonim sınıf!"); }
};
r.run();
```

### Özellikleri Nelerdir?
- Inner class: Dış sınıfın private üyelerine erişebilir.
- Static nested class: Dış sınıfın static üyelerine erişebilir, nesneye bağlı değildir.
- Anonymous class: İsimsizdir, genellikle interface veya abstract class'ı hızlıca implemente etmek için kullanılır.

---

## 2. final Anahtar Kelimesi

### Nedir?
Java'da bir yapının değiştirilemez olduğunu belirtir. Sınıf, metot veya değişkenlerde kullanılabilir.

### Ne İşe Yarar?
- Sınıfın miras alınmasını engeller.
- Metodun override edilmesini engeller.
- Değişkenin değerinin bir kez atanmasını sağlar.

### Ne İçin Kullanılır?
- Güvenlik ve tutarlılık için (örneğin sabitler, utility class'lar)
- API tasarımında istenmeyen değişiklikleri engellemek için

### Nasıl Kullanılır?
```java
final class SabitClass { } // Miras alınamaz

class A {
    final void foo() { } // Override edilemez
}

class B extends A {
    // void foo() {} // HATA: Override edilemez
}

class C {
    final int sabitSayi = 10;
    void setSayi() {
        // sabitSayi = 20; // HATA: Değeri değiştirilemez
    }
}
```

### Özellikleri Nelerdir?
- final class: Miras alınamaz.
- final method: Override edilemez.
- final variable: Sadece bir kez atanabilir, değiştirilemez.

---

## 3. static Anahtar Kelimesi

### Nedir?
Sınıfa ait olan, nesneye bağlı olmayan alan, metot veya blokları tanımlar.

### Ne İşe Yarar?
- Tüm nesneler arasında ortak veri veya davranış tanımlamak için kullanılır.
- Sınıf yüklenirken bir kez çalışacak kod blokları tanımlamak için kullanılır.

### Ne İçin Kullanılır?
- Utility metotları (Math.abs gibi)
- Sayaç, ortak veri tutmak
- Sınıf yüklenirken bir kez çalışacak kodlar (static block)

### Nasıl Kullanılır?
```java
class StatikOrnek {
    static int sayac = 0;
    static void artir() { sayac++; }
    static { System.out.println("Sınıf yüklenirken çalışır."); }
}
StatikOrnek.artir();
System.out.println(StatikOrnek.sayac); // 1
```

### Özellikleri Nelerdir?
- static field: Sınıfa ait, tüm nesneler arasında ortak.
- static method: Nesne olmadan çağrılabilir.
- static block: Sınıf yüklenirken bir kez çalışır.
- static inner class: Dış sınıfın static üyelerine erişebilir.

---

## 4. Record Sınıflar (Java 14+)

### Nedir?
Kısa ve değişmez veri taşıyıcıları (immutable data carrier) tanımlamak için kullanılan özel bir sınıf türüdür.

### Ne İşe Yarar?
- Sadece veri tutmak için kullanılır.
- Otomatik olarak final, equals, hashCode, toString ve getter metotları oluşturulur.

### Ne İçin Kullanılır?
- DTO (Data Transfer Object)
- Sadece veri taşıyan, davranış içermeyen sınıflar

### Nasıl Kullanılır?
```java
public record Kisi(String ad, int yas) { }
// Kullanım:
Kisi k = new Kisi("Ali", 25);
System.out.println(k.ad()); // "Ali"
System.out.println(k.yas()); // 25
System.out.println(k); // Kisi[ad=Ali, yas=25]
```

### Özellikleri Nelerdir?
- final'dir, miras alınamaz.
- Alanlar otomatik olarak final olur.
- Otomatik olarak constructor, getter, equals, hashCode, toString oluşturulur.
- Sadece veri tutmak için idealdir.
