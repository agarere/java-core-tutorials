**Boyut:** 16 bit (2 byte)

**Unicode karakter tutar** (\u0000 – \uFFFF)

**Varsayılan değer:** '\u0000' (null character)

**Aralık:** 0 – 65,535

Java’daki tek unsigned primitive tiptir ✅

.....

```java
public class CharExample {
    public static void main(String[] args) {
        char letter = 'A';
        char unicode = '\u03A9'; // Ω (Yunan harfi Omega)
        char max = '\uFFFF';
        System.out.println("Letter: " + letter);
        System.out.println("Unicode: " + unicode);
        System.out.println("Max char: " + (int) max);
    }
}
```