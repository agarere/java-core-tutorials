**Compile-time polymorphism** → Method Overloading
- Aynı metod ismi, farklı parametre imzaları.
- Karar derleme zamanında verilir.

.....

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }
}
```