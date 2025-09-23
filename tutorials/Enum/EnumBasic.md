👉 `enum` aslında class gibidir ama özel bir sınıf türüdür.

👉 `public`, `private` ya da `default` erişim belirleyicisiyle tanımlanabilir.

👉 Varsayılan olarak `final` ve `static` kabul edilirler.

👉 Sabitler **public static final** constant’lar gibidir.

👉 `switch-case` yapılarında doğrudan kullanılabilir.

.....

```java
enum Color {
    RED, GREEN, BLUE
}

public class EnumBasicExample {
    public static void main(String[] args) {
        Color c = Color.RED;
        System.out.println(c); // RED
        System.out.println(Color.GREEN.toString()); // GREEN
        System.out.println(Color.BLUE); // BLUE
    }
}
```