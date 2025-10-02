- **Exception**: Programın normal akışını bozan **beklenmeyen durumları** ifade eder.

- Java’da exception, bir **nesne** olarak temsil edilir ve `Throwable` sınıfından türetilir.

- Örn: Dosya bulunamadığında (`FileNotFoundException`), sıfıra bölme yapıldığında (`ArithmeticException`), null bir nesneye erişildiğinde (`NullPointerException`).

👉 Yani exception = programın çalışması sırasında ortaya çıkan hata durumunun nesne formunda temsil edilmesi.

- **JVM (Java Virtual Machine)**: Çalışma zamanında (runtime) hata oluştuğunda fırlatır.

- **Java kütüphanesi (API)**: Bazı sınıflar/methodlar bilinçli olarak exception atar. (Örn: `FileReader` → dosya yoksa `FileNotFoundException` atar).

- Kendi yazdığımız kod: Biz de `throw new ExceptionType()` diyerek exception fırlatabiliriz.

- JVM bir **Exception nesnesi oluşturur**.

- Exception, **stack trace** üzerinde yukarıya doğru fırlatılır (stack unwinding).

- Uygun bir `catch` bloğu bulunursa exception orada yakalanır.

- Hiç yakalanmazsa, JVM programı sonlandırır ve hata çıktısını ekrana basar.

```java
try {
    int result = 10 / 0;  // ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Sıfıra bölme hatası: " + e.getMessage());
}
```

---

## Exception çeşitleri

Java’daki tüm exception yapısı `Throwable` sınıfından gelir. İki ana kola ayrılır:

```
java.lang.Throwable
 ├── Error  ❌ (kritik, handle etmiyoruz)
 └── Exception  ✅ (işlenebilir hatalar)
       ├── IOException, SQLException ...  → CHECKED
       └── RuntimeException
             ├── NullPointerException, ArithmeticException ... → UNCHECKED
```

### Error
- JVM tarafından üretilen, çoğunlukla sistemsel hatalar.
- Programcı tarafından yakalanmaması önerilir.
- Örn:
  - `OutOfMemoryError`
  - `StackOverflowError`


### Exception
Bunlar **işlenebilir hatalardır**. İki gruba ayrılır:

#### 👉 Checked Exception (Derleme zamanında kontrol edilir)
- Compiler (derleyici) bu hataları zorunlu olarak yakalamamızı ister.
- `try-catch` veya `throws` kullanmadan kod derlenmez.
- Örn:
  - `IOException`
  - `SQLException`
  - `ClassNotFoundException`

```java
try {
    FileReader reader = new FileReader("dosya.txt"); 
} catch (FileNotFoundException e) {  // Yakalamazsak derlenmez
    System.out.println("Dosya bulunamadı!");
}
```

```java
// FileNotFoundException checked exception olduğu için throws ile bildiriyoruz
static void readFile(String filename) throws FileNotFoundException {
    File file = new File(filename);
    Scanner scanner = new Scanner(file);
    while (scanner.hasNextLine()) {
        System.out.println(scanner.nextLine());
    }
    scanner.close();
}
```

#### 👉 Unchecked Exception (Runtime Exception)
- Derleyici kontrol etmez, programcı isterse yakalar.
- Çoğu **mantıksal hata** bu gruptadır.
- Örn:
  - `ArithmeticException`
  - `NullPointerException`
  - `ArrayIndexOutOfBoundsException`

```java
public class UncheckedExample {
    public static void main(String[] args) {
        String text = null;
        System.out.println(text.length()); // NullPointerException
    }
}
```

---

### Checked vs Unchecked farkları
| Özellik        | Checked Exception             | Unchecked Exception                           |
| -------------- | ----------------------------- | --------------------------------------------- |
| Kontrol zamanı | Derleme zamanında             | Çalışma zamanında                             |
| Zorunluluk     | try-catch/throws zorunlu      | Zorunluluk yok                                |
| Kaynak         | Dışsal faktörler (dosya, DB)  | Program hataları (bug)                        |
| Örnek          | `IOException`, `SQLException` | `NullPointerException`, `ArithmeticException` |

---

### Custom Exception sınıfını yazma

İhtiyaç olursa biz de kendi exception’ımızı yazabiliriz:

```java
class AgeException extends Exception {
    public AgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (AgeException e) {
            System.out.println("Hata: " + e.getMessage());
        }
    }

    static void checkAge(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("Yaş 18’den küçük olamaz!");
        }
    }
}
```

---

### 🔹 Checked Exception Olmasının Sebebi

Java’da bir exception’ın **checked mi unchecked mi** olduğunu belirleyen şey, **hangi sınıftan türediğidir**:

- **Checked Exceptions** → `Exception` sınıfından **doğrudan veya dolaylı türeyenler, ama** `RuntimeException`’dan türemeyenler.

- **Unchecked Exceptions** → `RuntimeException` veya onun alt sınıflarından türeyenler.

- Eğer `class AgeException extends Exception { }` şeklinde custom bir exception tanımlarsak, dolayısıyla **Checked Exception** sınıfına giriyor.

- Bu yüzden, bu exception’ı bir method içinde **throw** ettiğimizde, derleyici bizi **zorunlu olarak** `try-catch` ya da `throws` ile **handle etmeye zorlar**.

---

### Exception Genel Hiyerarşi

```
java.lang.Throwable
 ├── Error (geri dönüşü olmayan, kritik hatalar)
 │     ├── OutOfMemoryError
 │     ├── StackOverflowError
 │     ├── VirtualMachineError
 │     └── LinkageError
 │
 └── Exception (işlenebilir hatalar)
       ├── Checked Exceptions (derleyici zorunlu kılar)
       │     ├── IOException
       │     │     ├── FileNotFoundException
       │     │     └── EOFException
       │     ├── SQLException
       │     ├── ClassNotFoundException
       │     ├── InvocationTargetException (Reflection API)
       │     └── ... (daha fazlası var)
       │
       └── Unchecked Exceptions (RuntimeException ve türevleri)
             ├── ArithmeticException
             ├── NullPointerException
             ├── ArrayIndexOutOfBoundsException
             ├── StringIndexOutOfBoundsException
             ├── IllegalArgumentException
             │     └── NumberFormatException
             ├── IllegalStateException
             ├── ClassCastException
             ├── UnsupportedOperationException
             └── ... (daha fazlası var)
```