Başlangıç ve bitiş index aralığını siler.

.....

```java
public class StringBuilderDelete {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello, World!");
        
        sb.delete(5, 7); // Removes ", "
        System.out.println(sb.toString()); // Output: HelloWorld!
        
        sb.deleteCharAt(5); // Removes 'W'
        System.out.println(sb.toString()); // Output: Helloorld!
    }
}
```