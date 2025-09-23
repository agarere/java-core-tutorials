**Boyut:** 64 bit (8 byte)

**Varsayılan değer:** 0L

**Aralık:** -9,223,372,036,854,775,808 ile 9,223,372,036,854,775,807 (-2^63 ile 2^63 - 1)

**Signed:** Evet

**Unsigned desteği:** Java 8’de Long.toUnsignedString() ve Long.parseUnsignedLong() ile var. (0 – 2^64 - 1)

.....

```java
public class LongExample {
    public static void main(String[] args) {
        long min = -9223372036854775808L;
        long max = 9223372036854775807L;
        System.out.println("Long min: " + min + ", max: " + max);

        // Unsigned gibi
        String unsignedStr = Long.toUnsignedString(-1L);
        System.out.println("Unsigned -1 değeri: " + unsignedStr); // 18446744073709551615
    }
}
```