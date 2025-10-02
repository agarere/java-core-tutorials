# Java Queue Interface ve Queue Implementasyonları

Java’da `Queue` interface’i, elemanların belirli bir sırayla işlendiği (genellikle FIFO: First-In-First-Out) bir koleksiyon yapısı sunar. Kuyruk yapısı, veri işleme ve algoritmalarda sıkça kullanılır.

---

## Queue Interface Nedir?

- **Nereden gelir?**  
  `Queue` interface’i, Java Collections Framework’ün bir parçasıdır ve `java.util` paketinde bulunur.
- **Amaç:**  
  Elemanların eklenme sırasına göre işlenmesini sağlar. Genellikle ilk eklenen ilk çıkar (FIFO).

---

## Queue Interface Özellikleri

- FIFO mantığıyla çalışır (bazı implementasyonlar farklı davranabilir).
- Eleman ekleme (`offer`, `add`), çıkarma (`poll`, `remove`), ve bakma (`peek`, `element`) metotları sunar.
- Null eleman desteği implementasyona göre değişir.

### Temel Queue Metotları

```java
Queue<String> kuyruk = new LinkedList<>();
kuyruk.offer("A");      // Kuyruğa ekler
kuyruk.offer("B");
String ilk = kuyruk.poll(); // İlk elemanı çıkarır ve döndürür ("A")
String bak = kuyruk.peek(); // Sıradaki elemanı gösterir ama çıkarmaz ("B")
```

---

## Queue Implementasyonları ve Farkları

### 1. LinkedList (class)

- Hem `List` hem de `Queue` interface’lerini uygular.
- FIFO mantığıyla çalışır.
- Null eleman eklenebilir.
- Çift yönlü kuyruk (Deque) olarak da kullanılabilir.

```java
Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.offer("B");
System.out.println(queue.poll()); // "A"
```

---

### 2. PriorityQueue (class)

- Elemanlar doğal sıralama veya verilen Comparator’a göre önceliklendirilir.
- FIFO değil, önceliğe göre çıkarılır.
- Null eleman eklenemez.
- Sıralı çıkarma için uygundur.

```java
Queue<Integer> queue = new PriorityQueue<>();
queue.offer(5);
queue.offer(2);
queue.offer(8);
System.out.println(queue.poll()); // 2 (küçükten büyüğe)
```

---

### 3. ArrayDeque (class)

- Hem `Queue` hem de `Deque` interface’lerini uygular.
- FIFO ve LIFO (Stack gibi) olarak kullanılabilir.
- Null eleman eklenemez.
- Daha hızlı ve verimli, sabit boyutlu diziye göre dinamik.

```java
Queue<String> queue = new ArrayDeque<>();
queue.offer("A");
queue.offer("B");
System.out.println(queue.poll()); // "A"
```

---

## Queue Implementasyonları Karşılaştırma Tablosu

| Özellik         | LinkedList (class) | PriorityQueue (class) | ArrayDeque (class) |
|-----------------|-------------------|-----------------------|--------------------|
| FIFO            | Evet              | Hayır (öncelik)       | Evet               |
| LIFO            | Hayır             | Hayır                 | Evet (Deque ile)   |
| Null Desteği    | Evet              | Hayır                 | Hayır              |
| Sıralama        | Ekleme sırası     | Öncelik               | Ekleme sırası      |
| Performans      | Orta              | Hızlı                 | Çok hızlı          |

---

## Queue Kullanımında Dikkat Edilmesi Gerekenler

- FIFO için `LinkedList` veya `ArrayDeque` kullanılır.
- Öncelik gerektiren durumlarda `PriorityQueue` tercih edilir.
- Null eleman eklenip eklenemeyeceği implementasyona göre değişir.
- Kuyrukta eleman yoksa `poll()` null döner, `remove()` ise hata fırlatır.

---

## Özet

- `Queue` interface’i, Java’da sıralı veri işleme için kullanılır.
- Farklı class implementasyonlar farklı sıralama ve performans avantajları sunar.
- Uygulamanın ihtiyacına göre uygun Queue class’ı seçilmelidir.
