👉 **Parent referansı**, child nesnesini gösterebilir.

👉 Çalışma zamanında hangi versiyonun çağrılacağı nesnenin **gerçek tipine** göre belirlenir.

.....

```java
Payment p1 = new CreditCardPayment(100);
Payment p2 = new PayPalPayment(200);

p1.processPayment(); // CreditCardPayment versiyonu çalışır
p2.processPayment(); // PayPalPayment versiyonu çalışır
```