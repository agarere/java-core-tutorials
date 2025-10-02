- `abstract` anahtar kelimesi ile tanımlanır.
- İçinde `abstract` metodlar olabilir → gövdesiz, sadece imza.
- Ayrıca normal metodlar da olabilir → “ortak davranış” sağlamak için.
- Örneklenemez (`new` ile nesnesi oluşturulamaz).
- Sadece `extend` edilebilir.

.....

```java
public abstract class PaymentMethod {
    protected double amount;

    public PaymentMethod(double amount) {
        this.amount = amount;
    }

    // soyut metod → gövdesiz
    public abstract void pay();

    // normal metod → ortak davranış
    public void printAmount() {
        System.out.println("Amount: " + amount);
    }
}
```