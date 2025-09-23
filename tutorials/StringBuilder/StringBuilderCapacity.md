`capacity()` → İçinde tutabileceği maksimum karakter sayısını döner.

`ensureCapacity()` → Belirtilen kapasiteyi garanti eder (daha büyükse genişletir).

`length()` → Mevcut karakter uzunluğu döner.

`setLength()` → String’in uzunluğunu ayarlar (kısaltır veya uzatır).

.....

```java
public class StringBuilderCapacity {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        System.out.println("Initial capacity: " + sb.capacity());

        sb.append("Hello, ");
        System.out.println("Capacity after appending 'Hello, ': " + sb.capacity());

        sb.append("this is a test of StringBuilder capacity.");
        System.out.println("Capacity after appending more text: " + sb.capacity());

        sb.ensureCapacity(100);
        System.out.println("Current length: " + sb.length());
        System.out.println("Capacity after ensuring capacity of 100: " + sb.capacity());

        sb.setLength(10);
        System.out.println("Current length: " + sb.length());
        System.out.println("Capacity after setting length to 10: " + sb.capacity());
        System.out.println("Current content: " + sb);
    }
}
```