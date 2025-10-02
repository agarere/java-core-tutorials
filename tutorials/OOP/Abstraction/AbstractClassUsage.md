- Ortak özellik + bazı ortak davranışlar var, ama alt sınıflar kendi detaylarını yazacaksa.
- “is-a” ilişkisi barizse.

### 🚫 Yanlış Kullanım
- Sırf “abstract cool görünüyor” diye sınıfı abstract yapmak.
- Hiç abstract method yoksa → normal class olabilir.
- Birden fazla farklı konsepti zorla miras ettirmek. (Java’da çoklu kalıtım yok → tasarımda sıkışabilirsin.)

..... 

```java
public class CreditCardPayment extends PaymentMethod {
    private String cardNumber;

    public CreditCardPayment(double amount, String cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    @Override
    public void pay() {
        System.out.println("Paying " + amount + " with card " + cardNumber);
    }
}

```