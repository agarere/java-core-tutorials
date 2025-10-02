**Runtime polymorphism** → Method Overriding
- Parent `class`’taki metod child `class`’ta yeniden tanımlanır.
- Karar çalışma zamanında verilir.

.....

```java
public class Payment { // Parent Class
    protected double amount;

    public Payment(double amount) {
        this.amount = amount;
    }

    public void processPayment() {
        System.out.println("Processing generic payment of " + amount);
    }
}

public class PayPalPayment extends Payment { // Child Class
    public PayPalPayment(double amount) {
        super(amount);
    }

    @Override
    public void processPayment() {
        System.out.println("Processing PayPal payment of " + amount);
    }
}

public class CreditCardPayment extends Payment { // Child Class
    public CreditCardPayment(double amount) {
        super(amount);
    }

    @Override
    public void processPayment() {
        System.out.println("Processing credit card payment of " + amount);
    }
}
```

