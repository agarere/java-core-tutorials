- Abstract class → ortak alan ve bazı ortak davranışlar
- Interface → ek özellikler / yetenekler

### ✅ Doğru Kullanım
- `PaymentMethod` → soyut sınıf, çünkü tüm ödemeler ortak özellik taşıyor (amount).
- `Refundable` → interface, çünkü bazı ödeme yöntemleri iade destekler, bazıları desteklemez.

### 🚫 Yanlış Kullanım
- Her şeyi interface yapmak → state tutamaz, zorunlu ortak alan kaybolur.
- Her şeyi abstract class yapmak → çoklu kalıtım yapamayacağın için esneklik kaybolur.


👉 **Java’da abstract class bir interface’i implement edebilir.**
- Bir `abstract class`, normal bir `class` gibi davranır ama örneklenemez.
- Bir `class`, `interface` implement edebilir. Dolayısıyla `abstract class` da aynı kurala tabidir.
- Fakat `abstract class` içinde `interface`’in tüm metodlarını `override` etme zorunluluğu yoktur (çünkü kendisi de soyut olduğu için eksik kalabilir).
- Eğer `override `etmezse → o metodu alt sınıflar yazmak zorunda kalır.

.....

```java
public interface Refundable {
    void refund(double amount);
}

public abstract class PaymentMethod {
    protected double amount;
    public PaymentMethod(double amount) { this.amount = amount; }
    public abstract void pay();
}

public class CreditCardPayment extends PaymentMethod implements Refundable {
    private String cardNumber;

    public CreditCardPayment(double amount, String cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    @Override
    public void pay() {
        System.out.println("Paying " + amount + " with credit card " + cardNumber);
    }

    @Override
    public void refund(double amount) {
        System.out.println("Refunding " + amount + " to credit card " + cardNumber);
    }
}
```