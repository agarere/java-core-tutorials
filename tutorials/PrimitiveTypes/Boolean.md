**Boyut:** Java spesifikasyonunda kesin boyut belirtilmez. JVM iç implementasyona bağlıdır. (Genelde 1 bit yerine 1 byte kullanılır.)

**Varsayılan değer:** false

**Alabileceği değerler:** true veya false

.....

```java
public class BooleanExample {
    public static void main(String[] args) {
        boolean isJavaFun = true;
        boolean isFishTasty = false;
        System.out.println("Java eğlenceli mi? " + isJavaFun);
        System.out.println("Balık lezzetli mi? " + isFishTasty);
    }
}
```