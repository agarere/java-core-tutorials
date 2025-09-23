👉 `values()` → Tüm enum değerlerini dizi olarak döner.

👉 `valueOf(String name)` → İsme göre enum değeri döner.

👉 `ordinal()` → Enum’un dizideki sıra numarasını döner (0’dan başlar).

👉 `name()` → Enum değerinin String adını döner.

.....

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
public class EnumMethodsExample {
    public static void main(String[] args) {
        for (Day d : Day.values()) {
            System.out.println(d + " ordinal=" + d.ordinal());
        }

        Day d = Day.valueOf("TUESDAY");
        System.out.println(d); // TUESDAY
        System.out.println(d.name()); // TUESDAY
    }
}
```