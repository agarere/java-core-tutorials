**Boyut:** 16 bit (2 byte)

**Varsayılan değer:** 0

**Aralık:** -32,768 ile 32,767 (-2^15 ile 2^15 - 1)

**Signed:** Evet

.....

```java
public class ShortExample {
    public static void main(String[] args) {
        short min = -32768;
        short max = 32767;
        System.out.println("Short min: " + min + ", max: " + max);

        short s = (short) 40000;  // Normalde signed short olarak -25536 olur
        int unsignedVal = Short.toUnsignedInt(s);
        System.out.println("Signed short: " + s); // -25536
        System.out.println("Unsigned short: " + unsignedVal); // 40000
    }
}
```