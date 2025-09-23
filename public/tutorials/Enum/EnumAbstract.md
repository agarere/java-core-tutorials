✔️ Burada `interface` yok, ama `enum` içinde `abstract` method tanımladık.

✔️ Tüm sabitler bu metodu **override etmek zorunda**.

.....

```java
enum AdvancedOperation {
    ADD {
        @Override
        public double apply(double x, double y) { return x + y; }
    },
    POWER {
        @Override
        public double apply(double x, double y) { return Math.pow(x, y); }
    };

    // Her enum sabitinin implement etmek zorunda olduğu abstract method
    public abstract double apply(double x, double y);
}

public class EnumAbstractExample {
    public static void main(String[] args) {
        double a = 2, b = 3;

        for (AdvancedOperation op : AdvancedOperation.values()) {
            System.out.println(op + " → " + op.apply(a, b));
        }
    }
}
```