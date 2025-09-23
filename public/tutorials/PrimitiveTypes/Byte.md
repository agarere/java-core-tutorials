**Boyut:** 8 bit (1 byte)

**Varsayılan değer:** 0

**Aralık:** -128 ile 127 (-2^7 ile 2^7 - 1)

**Signed (işaretli):** Evet

**Unsigned desteği:** Yok, ama Byte.toUnsignedInt() ile unsigned gibi kullanılabilir.

.....

```java
public class ByteExample {
    public static void main(String[] args) {
        byte min = -128;
        byte max = 127;
        System.out.println("Byte min: " + min + ", max: " + max);

        // Unsigned gibi kullanmak (0-255 arası)
        int unsignedVal = Byte.toUnsignedInt((byte) 200);
        System.out.println("Unsigned gibi 200 değeri: " + unsignedVal);
    }
}
```