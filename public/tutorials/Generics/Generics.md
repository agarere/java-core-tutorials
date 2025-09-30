- Java Generics, sınıf, interface ve metotları farklı tiplerle çalışabilecek şekilde tasarlamamıza olanak tanıyan bir özelliktir.
- “tek bir kod yazıp, birden fazla tip için tekrar kullanmak” amacını güder.
- Tip güvenliği (Type Safety): Yanlış tiplerin koleksiyonlara eklenmesini engellemek.
- Kod tekrarını azaltmak: Aynı mantığı farklı tipler için yeniden yazma gereğini kaldırmak.
- Okunabilirliği artırmak: Kodda cast işlemleri azalır, daha temiz olur.

### ✅ Generics sayesinde:
- Cast yapmaya gerek yok.
- Derleme zamanında tip kontrolü var.
- Kod tekrarını önler.

**Java naming convention** olarak bazı standart harfler tercih edilir:
- T → Type
- E → Element (koleksiyonlarda sık kullanılır: `List<E>`)
- K, V → Key, Value (`Map<K, V>`)
- N → Number
- S, U, V → 2. veya 3. generic parametre olduğunda kullanılır

.....

```java
class Box<T> {   // T burada "Type Parameter"
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        Box<String> strBox = new Box<>();
        strBox.set("Hello");
        String str = strBox.get(); // Cast gerekmez ✅

        Box<Integer> intBox = new Box<>();
        intBox.set(123);
        Integer num = intBox.get(); // Cast gerekmez ✅
    }
}
```