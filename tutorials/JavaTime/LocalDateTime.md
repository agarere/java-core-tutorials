👉 **Tarih (yıl, ay, gün) + saat (saat, dakika, saniye, nanosaniye)** bilgisini tutar.

👉 ISO-8601 standardına uyar: `2025-09-12T20:45:30.123456789`.

👉 **Zaman dilimi içermez** (o iş için `ZonedDateTime` veya `OffsetDateTime` kullanılır).

👉 Immutable (değişmez) ve thread-safe.

👉 `LocalDate` + `LocalTime` birleşimidir.

.....

```java
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class LocalDateTimeExample {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        System.out.println("Şu an: " + now);

        LocalDateTime plusDays = now.plusDays(5);
        LocalDateTime minusHours = now.minusHours(3);
        LocalDateTime nextMonth = now.plusMonths(1);
        System.out.println("Şimdi: " + now);
        System.out.println("5 gün sonrası: " + plusDays);
        System.out.println("3 saat öncesi: " + minusHours);
        System.out.println("1 ay sonrası: " + nextMonth);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        String formatted = now.format(formatter);
        System.out.println("Formatlı tarih-saat: " + formatted);

        LocalDateTime parsed = LocalDateTime.parse("12.09.2025 20:45:30", formatter);
        System.out.println("Parse edilen: " + parsed);

        LocalDateTime dateTime = LocalDateTime.of(2025, 9, 12, 14, 30, 45);
        System.out.println("Özel tarih ve saat: " + dateTime);

        LocalDateTime parsedVal = LocalDateTime.parse("2025-12-31T23:59:59");
        System.out.println("Parse edilen: " + parsedVal);

        LocalDateTime dt = LocalDateTime.of(2025, 9, 12, 20, 45, 30);
        System.out.println(dt.getYear());       // 2025
        System.out.println(dt.getMonth());      // SEPTEMBER
        System.out.println(dt.getMonthValue()); // 9
        System.out.println(dt.getDayOfMonth()); // 12
        System.out.println(dt.getHour());       // 20
        System.out.println(dt.getMinute());     // 45
        System.out.println(dt.getSecond());     // 30

        LocalDateTime d1 = LocalDateTime.of(2025, 9, 12, 10, 0);
        LocalDateTime d2 = LocalDateTime.of(2025, 9, 12, 15, 0);
        System.out.println(d1.isBefore(d2)); // true
        System.out.println(d1.isAfter(d2));  // false
        System.out.println(d1.equals(d2));   // false

        LocalDate date = LocalDate.of(2025, 9, 12);
        LocalTime time = LocalTime.of(21, 45);

        LocalDateTime dateTimeVal = LocalDateTime.of(date, time);
        System.out.println("Birleştirilmiş: " + dateTimeVal);
        System.out.println("Sadece tarih: " + dateTimeVal.toLocalDate());
        System.out.println("Sadece saat: " + dateTimeVal.toLocalTime());
    }
}
```