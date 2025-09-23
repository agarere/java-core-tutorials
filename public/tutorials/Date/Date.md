### Eski Tarih API’si (Java 7 ve öncesi)
Date sınıfı saat bilgisini de tutar.
Ama çok kısıtlıdır, mesela doğrudan "sadece tarihi" almak zordur.

.....

```java
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateExample {
    public static void main(String[] args) {
        Date currentDate = new Date();
        System.out.println(currentDate); // şu anki tarih ve saat
        DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        System.out.println(formatter.format(currentDate)); // sadece tarih
        System.out.println(currentDate.getTime()); // Epoch time, Unix Timestamp
    }
}
```