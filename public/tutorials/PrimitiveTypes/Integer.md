**Boyut:** 32 bit (4 byte)

**Varsayılan değer:** 0

**Aralık:** -2,147,483,648 ile 2,147,483,647 (-2^31 ile 2^31 - 1)

**Signed:** Evet

**Java 8’den sonra:** Integer.toUnsignedLong() ve Integer.toUnsignedString() ile unsigned gibi kullanılabilir (0 – 2^32 - 1).

.....

```java
public class IntExample {
    public static void main(String[] args) {
        int min = -2147483648;
        int max = 2147483647;
        System.out.println("Int min: " + min + ", max: " + max);

        // Unsigned kullanımı
        long unsignedVal = Integer.toUnsignedLong(-1); // 4294967295
        System.out.println("Unsigned -1 değeri: " + unsignedVal);
    }
}
```