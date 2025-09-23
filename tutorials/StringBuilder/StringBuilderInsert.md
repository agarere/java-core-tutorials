Belirtilen index’e metin ekler.

.....

```java
public class StringBuilderInsert {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("HelloWorld");

        sb.insert(5, " ");
        System.out.println(sb); // Output: Hello World

        String str = "JavaProgramming";
        sb.insert(7, str, 4, 15);
        System.out.println(sb); // Output: AHello JavaProgramming World
    }
}
```