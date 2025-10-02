# SOLID Prensipleri

---

## SOLID Nedir?

SOLID, nesne yönelimli programlamada daha esnek, anlaşılır, bakımı kolay ve genişletilebilir yazılım tasarımı için önerilen beş temel prensibi ifade eder. Kavramı Robert C. Martin (Uncle Bob) ortaya atmıştır.

---

## 1. Single Responsibility Principle (SRP) - Tek Sorumluluk Prensibi

### Tanım
Bir sınıfın yalnızca bir sorumluluğu olmalı ve bu sorumluluk tamamen o sınıfa ait olmalıdır.

### Ödeme Sistemi Örneği

**Kötü Tasarım:**
```java
public class PaymentService {
    public void processPayment(Order order) { /* ... */ }
    public void sendReceipt(Order order) { /* ... */ } // Farklı sorumluluk!
}
```

**İyi Tasarım:**
```java
public class PaymentService {
    public void processPayment(Order order) { /* ... */ }
}

public class ReceiptService {
    public void sendReceipt(Order order) { /* ... */ }
}
```
Burada `PaymentService` sadece ödeme işlemini, `ReceiptService` ise sadece makbuz gönderimini yönetir.

---

## 2. Open/Closed Principle (OCP) - Açık/Kapalı Prensibi

### Tanım
Sınıflar, genişletilmeye açık, değiştirilmeye kapalı olmalıdır.

### Ödeme Sistemi Örneği

**Kötü Tasarım:**
```java
public class PaymentService {
    public void pay(Order order, String type) {
        if (type.equals("creditcard")) { /* ... */ }
        else if (type.equals("paypal")) { /* ... */ }
        // Yeni ödeme tipi eklemek için kodu değiştirmek gerekir!
    }
}
```

**İyi Tasarım:**
```java
public interface PaymentMethod {
    void pay(Order order);
}

public class CreditCardPayment implements PaymentMethod {
    public void pay(Order order) { /* ... */ }
}

public class PaypalPayment implements PaymentMethod {
    public void pay(Order order) { /* ... */ }
}

public class PaymentService {
    public void pay(Order order, PaymentMethod method) {
        method.pay(order);
    }
}
```
Yeni bir ödeme yöntemi eklemek için sadece yeni bir sınıf yazılır, mevcut kod değişmez.

---

## 3. Liskov Substitution Principle (LSP) - Liskov Yerine Geçme Prensibi

### Tanım
Bir alt sınıf, üst sınıfın yerine kullanılabilmeli ve beklenen davranışı bozmayacak şekilde çalışmalıdır.

### Ödeme Sistemi Örneği

**Kötü Tasarım:**
```java
public class PaymentMethod {
    public void pay(Order order) { /* ... */ }
}

public class CashPayment extends PaymentMethod {
    public void pay(Order order) {
        throw new UnsupportedOperationException("Cash payment not supported online!");
    }
}
```
Burada `CashPayment` alt sınıfı, üst sınıfın beklenen davranışını bozar.

**İyi Tasarım:**
```java
public interface PaymentMethod {
    void pay(Order order);
}

public class CreditCardPayment implements PaymentMethod {
    public void pay(Order order) { /* ... */ }
}

public class CashPayment implements PaymentMethod {
    public void pay(Order order) { /* ... */ }
}
```
Her ödeme yöntemi, kendi uygun davranışını uygular ve sistemde sorunsuzca kullanılabilir.

---

## 4. Interface Segregation Principle (ISP) - Arayüz Ayrımı Prensibi

### Tanım
Bir sınıf, kullanmadığı metotları içeren arayüzleri implemente etmek zorunda kalmamalıdır.

### Ödeme Sistemi Örneği

**Kötü Tasarım:**
```java
interface PaymentMethod {
    void pay(Order order);
    void refund(Order order);
}

public class CashPayment implements PaymentMethod {
    public void pay(Order order) { /* ... */ }
    public void refund(Order order) { /* ... */ } // Cash refund yok!
}
```

**İyi Tasarım:**
```java
interface Payable {
    void pay(Order order);
}

interface Refundable {
    void refund(Order order);
}

public class CreditCardPayment implements Payable, Refundable {
    public void pay(Order order) { /* ... */ }
    public void refund(Order order) { /* ... */ }
}

public class CashPayment implements Payable {
    public void pay(Order order) { /* ... */ }
    // refund metodu zorunlu değil!
}
```
Her ödeme yöntemi sadece ihtiyacı olan arayüzleri uygular.

---

## 5. Dependency Inversion Principle (DIP) - Bağımlılıkların Ters Çevrilmesi Prensibi

### Tanım
Yüksek seviyeli sınıflar, düşük seviyeli sınıflara doğrudan bağımlı olmamalıdır. Her ikisi de soyutlamalara (interface veya abstract class) bağımlı olmalıdır.

### Ödeme Sistemi Örneği

**Kötü Tasarım:**
```java
public class PaymentService {
    private CreditCardPayment payment = new CreditCardPayment();
    public void process(Order order) {
        payment.pay(order);
    }
}
```
Burada `PaymentService` doğrudan `CreditCardPayment`'a bağımlı.

**İyi Tasarım:**
```java
public class PaymentService {
    private PaymentMethod paymentMethod;
    public PaymentService(PaymentMethod paymentMethod) {
        this.paymentMethod = paymentMethod;
    }
    public void process(Order order) {
        paymentMethod.pay(order);
    }
}
```
Artık `PaymentService` herhangi bir ödeme yöntemine bağımlı değil, soyutlamaya (interface) bağımlı.
