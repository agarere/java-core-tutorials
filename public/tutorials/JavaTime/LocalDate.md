### Modern Tarih/Zaman API’si (Java 8+)
👉 Java 8 ile gelen **java.time** paketi çok daha düzenli ve güvenli.

👉 Tarihi (yıl, ay, gün) temsil eder.

👉 Saat bilgisi yoktur (o iş için LocalTime veya LocalDateTime kullanılır).

👉 Immutable (değişmez) → oluşturulduktan sonra değiştirilemez. Yeni değer üretmek için metodlar kullanılır.

👉 Thread-safe (çoklu thread ortamında güvenli).

👉 ISO-8601 standardına uyar (örnek: 2025-09-12)

.....

```java
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeFormatter;

public class LocalDateExample {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println(today);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
        System.out.println("Formatlı tarih: " + today.format(formatter));
        LocalDate tomorrow = today.plusDays(1);
        LocalDate nextMonth = today.plusMonths(1);
        LocalDate lastWeek = today.minusWeeks(1);

        LocalDate birthday = LocalDate.of(1990, 5, 23);
        System.out.println(birthday);

        LocalDate date = LocalDate.parse("2025-12-31");
        System.out.println(date);
        System.out.println(date.getYear());       // 2025
        System.out.println(date.getMonth());      // SEPTEMBER
        System.out.println(date.getMonthValue()); // 9
        System.out.println(date.getDayOfMonth()); // 12
        System.out.println(date.getDayOfWeek());  // FRIDAY
        System.out.println(date.getDayOfYear());  // 255

        LocalDate d1 = LocalDate.of(2025, 9, 12);
        LocalDate d2 = LocalDate.of(2025, 9, 20);

        System.out.println(d1.isBefore(d2)); // true
        System.out.println(d1.isAfter(d2));  // false
        System.out.println(d1.equals(d2));   // false

        LocalDate start = LocalDate.of(2000, 1, 1);
        LocalDate end = LocalDate.now();

        Period period = Period.between(start, end);
        System.out.println("Geçen süre: " + period.getYears() + " yıl, "
                + period.getMonths() + " ay, "
                + period.getDays() + " gün");
    }
}
```