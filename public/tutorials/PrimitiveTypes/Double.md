**Boyut:** 64 bit (8 byte)

**Varsayılan değer:** 0.0d

**IEEE 754 standardı:** Çift duyarlıklı (double precision)

**Yaklaşık değer aralığı:** ±1.7976931348623157E+308 (15-16 basamak hassasiyet)

.....

```java
public class DoubleExample {
    public static void main(String[] args) {
        double pi = 3.141592653589793;
        double big = 1.7976931348623157E308; // Max value
        System.out.println("Pi: " + pi);
        System.out.println("Max double: " + big);
    }
}
```