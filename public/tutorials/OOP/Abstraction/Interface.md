- “Interface” → iki tarafın karşılaştığı, iletişim kurduğu yüzey.

- Priz örneği: cihaz → fiş, duvar → priz. Standart sağlanır, içerde nasıl üretildiğini bilmezsin.

- Farklı sınıfların ortak davranışları garanti etmesini sağlar. Çoklu kalıtıma alternatif olarak esneklik sağlar.

- Interface’de field’lar `public static final`’dır → değiştirilemez.

- `interface` anahtar kelimesi ile tanımlanır.

- İçinde sadece method imzaları olur (Java 8’den itibaren default ve static metodlar da olabilir).

- Bir sınıf birden fazla `interface` implement edebilir.

.....

```java
public interface Payment {
    void pay(double amount);
}

public class CreditCardPaymentMethod implements Payment {
    // ...
    @Override
    public void pay(double amount) {
        System.out.println("Paying " + amount + " with card " + cardNumber);
    }
}
```
