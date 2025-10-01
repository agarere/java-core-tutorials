# Java Collections - List Nedir?

## 1. List Nedir?
- **List**, Java Collections Framework içerisinde bulunan bir **interface**'dir.
- **Sıralı (ordered)** bir koleksiyon yapısı sağlar.
- Aynı eleman birden fazla kez eklenebilir (**duplicate** değerleri destekler).
- Elemanlar **index** üzerinden erişilebilir (0 tabanlıdır).
- **Generic** yapıda tanımlanabilir: `List<String>`, `List<Integer>` gibi.
- Birden fazla veriyi tek bir yapı içinde depolamak.
- Elemanlara hızlıca **indeks** üzerinden erişmek.
- Veri ekleme, silme ve arama işlemlerini kolaylaştırmak.
- Özellikle **sıralama (ordering)** ve **tekrarlı veri (duplicates)** gereken durumlarda kullanılır.
- **Koleksiyon (Collection)** arayüzünden türetilmiştir.
- Elemanların eklenme sırası korunur (**insertion order preserved**).
- `null` değerleri saklayabilir.
- Elemanlara **index ile erişim** imkanı verir.
- **Alt implementasyonları** vardır:
  - `ArrayList`
  - `LinkedList`
  - `Vector` (daha eski, pek tercih edilmez)

---

## 2. List Kullanım Örnekleri

### 2.1 ArrayList
- **Dinamik dizi** mantığı ile çalışır.
- Kapasite dolunca **kendini otomatik olarak büyütür** (varsayılan 1.5 kat).
- Elemanlara **index ile erişim** çok hızlıdır (**O(1)**).
- Ortadan eleman silmek veya eklemek yavaştır (**O(n)**).
- Thread-safe değildir (sadece tek thread kullanımlarında önerilir).
- Bellekte **ardışık** (contiguous) şekilde saklanır.

```java
import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();

        // Eleman ekleme
        fruits.add("Elma");
        fruits.add("Muz");
        fruits.add("Çilek");
        fruits.add("Muz"); // Duplicate eklenebilir

        // Listeyi yazdırma
        System.out.println(fruits); // [Elma, Muz, Çilek, Muz]

        // Index ile erişim
        System.out.println(fruits.get(2)); // Çilek

        // Eleman silme
        fruits.remove("Muz"); // İlk bulduğu Muz'u siler
        System.out.println(fruits); // [Elma, Çilek, Muz]

        // İçeriyor mu?
        System.out.println(fruits.contains("Elma")); // true

        // Eleman sayısı
        System.out.println(fruits.size()); // 3
    }
}
```

### 2.2 LinkedList
- **Çift yönlü bağlı liste (doubly linked list)** yapısını kullanır.
- Her eleman (Node) kendisinden önceki ve sonraki elemana referans tutar.
- Ortadan **ekleme/silme çok hızlıdır (O(1))**, çünkü sadece referanslar değiştirilir.
- Ancak **index ile erişim yavaştır (O(n))**, çünkü baştan veya sondan gezilmesi gerekir.
- Fazladan referans tuttuğu için **daha fazla bellek tüketir**.
- Queue (kuyruk) veya Deque (çift yönlü kuyruk) gibi davranabilme avantajı vardır.

```java
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
    public static void main(String[] args) {
        List<Integer> numbers = new LinkedList<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        System.out.println(numbers); // [10, 20, 30]

        numbers.add(1, 15); // index 1'e 15 ekle
        System.out.println(numbers); // [10, 15, 20, 30]

        numbers.remove(2); // index 2'yi sil (20)
        System.out.println(numbers); // [10, 15, 30]
    }
}
```

## 3. ArrayList vs LinkedList
| Özellik               | ArrayList                  | LinkedList                        | Vector                         |
| --------------------- | -------------------------- | --------------------------------- | ------------------------------ |
| Yapı                  | Dinamik dizi               | Çift yönlü bağlı liste            | Dinamik dizi                   |
| Erişim (get, set)     | Çok hızlı (**O(1)**)       | Yavaş (**O(n)**)                  | Çok hızlı (**O(1)**)           |
| Ekleme/Silme (ortada) | Yavaş (**O(n)**)           | Hızlı (**O(1)**)                  | Yavaş (**O(n)**)               |
| Bellek Kullanımı      | Daha az                    | Daha fazla (node referansları)    | Daha az                        |
| Thread Güvenliği      | Hayır                      | Hayır                             | **Evet (synchronized)**        |
| Kullanım Durumu       | Okuma ağırlıklı senaryolar | Ekleme/silme ağırlıklı senaryolar | Çok thread’li eski uygulamalar |


## 4. Ne Zaman Kullanılır?
- **ArrayList**: Daha çok okuma ve index ile erişim işlemleri ağırlıklı ise.
- **LinkedList**: Daha çok ekleme ve silme işlemleri ağırlıklı ise.
- **Vector**: Thread-safe ama performans düşük → günümüzde pek kullanılmaz.

## 5. Özet
- List, sıralı ve tekrar eden verileri saklamak için kullanılır.
- En sık kullanılan implementasyonlar: ArrayList ve LinkedList.
- Index ile erişim sağlanabilir.
- Koleksiyonlar arasında en yaygın kullanılan yapılardan biridir.
