- Generics’i belirli türlerle sınırlandırabiliriz.
- `T extends Number` → sadece Number veya alt sınıfları (`Integer`, `Double`, `Float`...) kullanılabilir.

.....

```java
class Calculator<T extends Number> {
    public double square(T number) {
        return number.doubleValue() * number.doubleValue();
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator<Integer> intCalc = new Calculator<>();
        System.out.println(intCalc.square(5)); // 25.0

        Calculator<Double> dblCalc = new Calculator<>();
        System.out.println(dblCalc.square(2.5)); // 6.25

        // Calculator<String> strCalc = new Calculator<>(); // Derleme hatası ❌
    }
}
```