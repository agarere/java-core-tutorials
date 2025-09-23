**Boyut:** 32 bit (4 byte)

**Varsayılan değer:** 0.0f

**IEEE 754 standardı:** Tek duyarlıklı (single precision)

**Yaklaşık değer aralığı:** ±3.40282347E+38F (7 basamak hassasiyet)

.....

```java
public class FloatExample {
    public static void main(String[] args) {
        float pi = 3.1415927f;
        float big = 3.4028235E38f;  // Max value
        System.out.println("Pi: " + pi);
        System.out.println("Max float: " + big);
    }
}
```