👉 `Calendar` soyut (abstract) bir sınıftır.

👉 Tarih ve saat bileşenlerini (yıl, ay, gün, saat, dakika, saniye) ayrı ayrı manipüle etmeye yarar.

👉 `Date` sınıfının eksikliklerini gidermek için Java 1.1’de eklenmiştir.

👉 Modern Java’da (`java.time.*` - Java 8 ile gelen API) yerine kullanılmaması önerilir ama eski projelerde sıkça bulunur.

👉 **Soyut sınıftır**, doğrudan `new` ile oluşturulamaz.

👉 `Calendar cal = Calendar.getInstance();` Bu, varsayılan olarak sistemin **Locale** ve **TimeZone** ayarlarına göre bir GregorianCalendar nesnesi döner.

👉 **Alan bazlıdır**
`YEAR`, `MONTH`, `DAY_OF_MONTH`, `HOUR`, `MINUTE`, `SECOND` gibi sabitler üzerinden işlem yapılır.

👉 Set / Get metodları vardır `int year = cal.get(Calendar.YEAR);` `cal.set(Calendar.YEAR, 2025);`

👉 Tarih üzerinde aritmetik yapabilir
```java
cal.add(Calendar.DAY_OF_MONTH, 7); // 7 gün ekle
cal.add(Calendar.MONTH, -1);      // 1 ay geri git
```

👉 Aylar 0’dan başlar. (Ocak = 0, Aralık = 11).

👉 Thread-safe değildir. Çoklu thread ortamında dikkatli kullanılmalı.

👉 Java 8’den itibaren `java.time.LocalDate`, `LocalDateTime`, `ZonedDateTime` gibi sınıflar tercih edilir.