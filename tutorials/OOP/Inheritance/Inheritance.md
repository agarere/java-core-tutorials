### 🧠 Felsefi Arka Plan
- “Inherit” = miras almak.
- Doğada çocuk ebeveyninden özellikler alır.
- Programlamada da alt sınıf, üst sınıfın davranış ve özelliklerini alır.

### ⚙️ Teknik Olarak Java’da
- `extends` anahtar kelimesiyle yapılır.

### ✅ Kullanım Yöntemleri
- Single inheritance: Java’da bir sınıf sadece bir sınıftan türeyebilir.
- Abstract class’tan türeyebilir.
- Interface’lerden çoklu “kalıtım benzeri” davranış elde edilir.

### 🚧 Sınırları
- Çok katmanlı kalıtım (deep inheritance) karmaşıklık yaratır.
- “is-a” ilişkisini yanlış kurarsan tasarım hatalı olur (örn. Square `extends` Rectangle tartışması).
- Java’da çoklu kalıtım yok → elmas problemi çözülmüş olur ama esneklik azalır.



.....

```java
public class Payment {
    protected double amount;

    public Payment(double amount) {
        this.amount = amount;
    }

    public void processPayment() {
        System.out.println("Processing generic payment of " + amount);
    }
}

public class CreditCardPayment extends Payment {
    private String cardNumber;

    public CreditCardPayment(double amount, String cardNumber) {
        super(amount);  // parent constructor çağrılır
        this.cardNumber = cardNumber;
    }

    @Override
    public void processPayment() {
        System.out.println("Processing credit card payment of " + amount + " with card " + cardNumber);
    }
}

public class PayPalPayment extends Payment {
    private String email;

    public PayPalPayment(double amount, String email) {
        super(amount);
        this.email = email;
    }

    @Override
    public void processPayment() {
        System.out.println("Processing PayPal payment of " + amount + " for " + email);
    }
}
```