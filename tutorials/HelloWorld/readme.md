Başlangıç olarak kod örneğinde yazılmış olan `HelloWorld` class'ı bulunuyor.
Java'da `public class` tanımı yapılmadan kodu çalıştıramazsın.
Dosyada en fazla bir tane `public class` olabilir onun da adı dosya ismiyle aynı olmalıdır.
JVM bu dosyayı çalıştıracağı zaman bir **entry point** arar. Bu **entry point** Java Dil Spesifikasyonu (Java Language Specification - JLS) ve Java Virtual Machine Specification (JVMS)’ta tanımlanmış bir kural olarak `public static void main(String[] args)` methodunu arar. Bu methodu çağırarak programı çalıştırır. Methodun bire bir bu şekilde tanımlanmış olması gerekmektedir.
# Run:
`java HelloWorld.java`

.....

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
