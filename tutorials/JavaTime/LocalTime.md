👉 Sadece zaman (saat, dakika, saniye, nanosaniye) bilgisini tutar.

👉 Tarih bilgisi içermez (o iş için LocalDateTime veya LocalDate gerekir).

👉 ISO-8601 standardına uyar: HH:mm:ss.SSS → 20:45:30.123.

👉 Immutable (değişmez) ve thread-safe.

👉 Modern Java 8 Date & Time API’sinin bir parçasıdır.

.....

```java
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.time.format.DateTimeFormatter;

public class LocalTimeExample {
    public static void main(String[] args) {
        LocalTime now = LocalTime.now();
        System.out.println("Şu an saat: " + now);

        LocalTime plusHours = now.plusHours(3);
        LocalTime minusMinutes = now.minusMinutes(15);

        System.out.println("Şimdi: " + now);
        System.out.println("3 saat sonrası: " + plusHours);
        System.out.println("15 dk öncesi: " + minusMinutes);

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formatted = now.format(formatter);
        System.out.println("Formatlı saat: " + formatted);

        LocalTime time = LocalTime.of(14, 30, 45);
        System.out.println("Belirli saat: " + time);
        System.out.println(time.getHour());        // 20
        System.out.println(time.getMinute());      // 45
        System.out.println(time.getSecond());      // 30
        System.out.println(time.getNano());        // 123456789

        LocalTime parsed = LocalTime.parse("23:59:59");
        System.out.println("Parse edilen: " + parsed);

        LocalTime t1 = LocalTime.of(9, 0);
        LocalTime t2 = LocalTime.of(18, 0);

        System.out.println(t1.isBefore(t2)); // true
        System.out.println(t1.isAfter(t2));  // false
        System.out.println(t1.equals(t2));   // false

        System.out.println(LocalTime.MIN); // 00:00
        System.out.println(LocalTime.MAX); // 23:59:59.999999999
        System.out.println(LocalTime.NOON); // 12:00
        System.out.println(LocalTime.MIDNIGHT); // 00:00

        LocalTime start = LocalTime.of(9, 0);
        LocalTime end = LocalTime.of(17, 30);

        long hours = ChronoUnit.HOURS.between(start, end);
        long minutes = ChronoUnit.MINUTES.between(start, end);

        System.out.println("Çalışma süresi: " + hours + " saat (" + minutes + " dakika)");
    }
}
```