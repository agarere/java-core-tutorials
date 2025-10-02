### 🧠 Felsefi Arka Plan
- Encapsulation = **“bir şeyi dışarıdan saklamak, sadece doğru yollarla erişilmesini sağlamak”.**
- **Nesnenin iç detaylarını (alanlar, işleyiş, algoritma)** gizli tutarız.
Dışarıya sadece **kontrollü erişim noktaları (methodlar) açarız.**
- Bu, iki şey sağlar:
  - **Veri güvenliği** (kimse doğrudan iç veriyi bozamaz)
  - **Esneklik** (içeride istediğin değişikliği yapabilirsin, dışarıdaki kod etkilenmez)

### ⚙️ Teknik Olarak Java’da
- Field’ları `private` yaparız.
- Erişim için `getter/setter` metodları kullanırız.

### 🛑 Field ne zaman private?
- Alanın tamamen saklanması gerektiğinde.
- Getter/Setter üzerinden kontrollü erişim istiyorsan.

### 🟡 Field ne zaman protected?
- Alt sınıfların görmesi ama dış dünyanın görmemesi gerektiğinde.
- (Örn: `amount` alanı).

.....

```java
public class Payment {
    private double amount;  // dışarıdan erişilemez

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Tutar 0'dan büyük olmalı");
        }
        this.amount = amount;
    }
}
```