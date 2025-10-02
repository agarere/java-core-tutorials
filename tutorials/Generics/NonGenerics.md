### Generic olmayan bir sınıf yazarsak:
❌ Burada casting (tip dönüşümü) yapmak zorundayız. Yanlış tipte cast yaparsak ClassCastException alırız.

.....

```java
class Box {
    private Object value;

    public void set(Object value) {
        this.value = value;
    }

    public Object get() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        Box box = new Box();
        box.set("Hello");   // içine String koyduk
        String str = (String) box.get(); // cast yapmak zorundayız

        box.set(123); // içine Integer da koyabiliyoruz
        Integer num = (Integer) box.get(); // yine cast gerekiyor
    }
}
```