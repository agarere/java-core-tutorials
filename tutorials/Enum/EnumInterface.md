👉 Java’da `enum` + `interface` ve `enum` + `abstract` method birlikte kullanıldığında çok güçlü desenler ortaya çıkar. Çünkü `enum`, aslında `class` gibi davranır, `interface` implement edebilir, `abstract` method tanımlayıp sabitlere özel davranışlar atayabilir.

✔️ Burada `enum` bir `interface` implement ediyor ve her sabit (constant) kendi davranışını tanımlıyor.

.....

```java
interface Operation {
    double apply(double x, double y);
}

enum BasicOperation implements Operation {
    ADD {
        public double apply(double x, double y) { return x + y; }
    },
    SUBTRACT {
        public double apply(double x, double y) { return x - y; }
    },
    MULTIPLY {
        public double apply(double x, double y) { return x * y; }
    },
    DIVIDE {
        public double apply(double x, double y) { return x / y; }
    };
}

public class EnumInterfaceExample {
    public static void main(String[] args) {
        double a = 10, b = 5;

        for (BasicOperation op : BasicOperation.values()) {
            System.out.println(op + " → " + op.apply(a, b));
        }
    }
}
```