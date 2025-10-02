# Java Collections Yardımcı Metotları

Bu dosyada, `Collections` sınıfının sık kullanılan yardımcı metotları ve dikkat edilmesi gereken noktalar örneklerle açıklanmıştır.

---

## binarySearch

**Ne işe yarar:**  
Sıralı listede ikili arama yapar, aranan elemanın index’ini döner.

**İmza:**  
```java
Collections.binarySearch(List<? extends Comparable<? super T>> list, T key)
Collections.binarySearch(list, key, comparator)
```

**Dikkat:**  
Liste önceden aynı mantıkla sıralanmış olmalı (aynı comparator/natural order). Değilse sonuç anlamsız olur.

**Dönen negatif değer:**  
Eleman yoksa `-(insertionPoint) - 1` döner.  
`insertionPoint` = elemanın gelmesi gereken indeks.

**Örnek:**
```java
List<String> l = new ArrayList<>(List.of("Armut","Elma","Muz"));
int idx = Collections.binarySearch(l, "Elma"); // 1
int notFound = Collections.binarySearch(l, "Kivi"); // negatif, örn -2 -> eklenirse index 1'de olur
```

---

## min / max

**Ne işe yarar:**  
Listeden en küçük/en büyük elemanı döner (Comparable veya Comparator ile).

**İmzalar:**  
```java
Collections.min(Collection)
Collections.max(Collection)
Collections.min(Collection, Comparator)
Collections.max(Collection, Comparator)
```

**Örnekler:**
```java
List<String> l = List.of("A","BBB","CC");
System.out.println(Collections.min(l)); // "A" (alfabetik)
System.out.println(Collections.max(l, Comparator.comparingInt(String::length))); // "BBB"
```

---

## shuffle

**Ne işe yarar:**  
Listeyi rastgele karıştırır (Fisher–Yates benzeri). Değiştirir (in-place).

**İmza:**  
```java
Collections.shuffle(list)
Collections.shuffle(list, Random r)
```

**Kullanım:**  
Kart karıştırma, rastgele test dizileri vb.

**Örnek:**
```java
List<Integer> nums = new ArrayList<>(List.of(1,2,3,4,5));
Collections.shuffle(nums, new Random(42)); // deterministik shuffle
```

---

## reverse

**Ne işe yarar:**  
Listenin eleman sırasını ters çevirir (in-place).

**Karmaşıklık:** O(n)

**Örnek:**
```java
List<String> l = new ArrayList<>(List.of("A","B","C"));
Collections.reverse(l); // [C,B,A]
```

---

## rotate

**Ne işe yarar:**  
Listeyi sağa (pozitif n) veya sola (negatif n) kaydırır.

**İmza:**  
```java
Collections.rotate(List<?> list, int distance)
```

**Örnek:**
```java
List<Integer> l = new ArrayList<>(List.of(1,2,3,4));
Collections.rotate(l, 1); // [4,1,2,3]
Collections.rotate(l, -2); // [2,3,4,1]
```

**Not:**  
`distance` mod `list.size()` mantığıyla çalışır.

---

## swap

**Ne işe yarar:**  
İki indeksin yerini değiştirir.

**İmza:**  
```java
Collections.swap(List<?> list, int i, int j)
```

**Örnek:**
```java
List<String> l = new ArrayList<>(List.of("A","B","C"));
Collections.swap(l, 0, 2); // [C,B,A]
```

---

## fill

**Ne işe yarar:**  
Tüm elemanları verilen değerle değiştirir (in-place).

**İmza:**  
```java
Collections.fill(List<? super T> list, T obj)
```

**Dikkat:**  
Eğer obj mutable ise tüm elemanlar aynı nesne referansını tutar; birini değiştirmek diğerlerini etkiler.

**Örnek:**
```java
List<String> l = new ArrayList<>(Arrays.asList("a","b","c"));
Collections.fill(l, "X"); // [X, X, X]
```

**Mutable örnek dikkat:**
```java
List<StringBuilder> m = new ArrayList<>(Arrays.asList(new StringBuilder(), new StringBuilder()));
Collections.fill(m, new StringBuilder("A"));
// Hem m.get(0) hem m.get(1) aynı StringBuilder referansını tutar.
```

---

## copy

**Ne işe yarar:**  
Kaynak listenin elemanlarını hedef listeye kopyalar (index bazlı).

**İmza:**  
```java
Collections.copy(List<? super T> dest, List<? extends T> src)
```

**Dikkat:**  
`dest`'in boyutu `src.size()` veya daha büyük olmalıdır; değilse `IndexOutOfBoundsException`.

**Doğru örnek:**
```java
List<String> src = List.of("A","B","C");
List<String> dest = new ArrayList<>(Collections.nCopies(src.size(), null)); // [null,null,null]
Collections.copy(dest, src); // dest -> [A,B,C]
```

**Yanlış örnek (hata verir):**
```java
List<String> dest2 = new ArrayList<>(); // size 0
Collections.copy(dest2, src); // IndexOutOfBoundsException
```

---

## frequency

**Ne işe yarar:**  
Bir koleksiyondaki belirli elemanın kaç kere geçtiğini döner.

**İmza:**  
```java
Collections.frequency(Collection<?> c, Object o)
```

**Örnek:**
```java
List<String> l = List.of("A","B","A","C","A");
Collections.frequency(l, "A"); // 3
```

---

## disjoint

**Ne işe yarar:**  
İki koleksiyonun ortak elemanı olup olmadığını kontrol eder. Ortak yoksa true.

**İmza:**  
```java
Collections.disjoint(Collection<?> a, Collection<?> b)
```

**Dikkat:**  
Basit implementasyon büyük koleksiyonlarda pahalı olabilir; büyük veri için set’e çevirip kontrol etmek daha verimli.

**Örnek:**
```java
List<String> a = List.of("X","Y");
List<String> b = List.of("A","B");
Collections.disjoint(a,b); // true
```

**Performans ipucu:**
```java
Set<?> set = new HashSet<>(a);
boolean anyCommon = b.stream().anyMatch(set::contains); // genelde daha hızlı O(n+m)
```

---

## synchronizedList / synchronizedSet / synchronizedMap

**Ne işe yarar:**  
Verilen koleksiyonu synchronized (thread-safe) bir wrapper ile sarar.

**İmza:**  
```java
Collections.synchronizedList(List<T> list)
Collections.synchronizedSet(Set<T> set)
Collections.synchronizedMap(Map<K,V> map)
```

**Dikkat:**  
Dönen koleksiyon thread-safe olsa da, iterator ile dolaşırken manuel senkronize blok kullanmanız gerekir:

```java
List<String> sync = Collections.synchronizedList(new ArrayList<>());
sync.add("A"); // thread-safe

synchronized(sync) {
    for(String s : sync) { // hala gerekli
        // işlem
    }
}
```

**Alternatif:**  
`CopyOnWriteArrayList`, `ConcurrentHashMap` gibi koleksiyonlar farklı amaçlara daha uygun olabilir.

---

## unmodifiableList / unmodifiableSet / unmodifiableMap

**Ne işe yarar:**  
Değiştirilemez görünüm döner; yapılan değişiklik denemelerinde `UnsupportedOperationException`.

**İmza:**  
```java
Collections.unmodifiableList(list)
Collections.unmodifiableSet(set)
Collections.unmodifiableMap(map)
```

**Dikkat:**  
Bu bir view’dır — orijinal liste değişirse (referansı elinizdeyse) unmodifiable görünüm de değişimi görür.

**Gerçekten tam immutable (bağımsız) bir yapı için:**
```java
List.copyOf(original) // Java 10+
Collections.unmodifiableList(new ArrayList<>(original))
```

**Örnek:**
```java
List<String> origin = new ArrayList<>(List.of("A"));
List<String> view = Collections.unmodifiableList(origin);
origin.add("B");
System.out.println(view); // [A, B]  -> view değişimi görür
view.add("C"); // UnsupportedOperationException
```

---

## singletonList / emptyList / nCopies

- **singletonList:** Tek elemanlı, immutable bir liste döner.
- **emptyList:** Immutable boş liste.
- **nCopies:** n tane aynı referanslı eleman içeren immutable liste döner.

**Örnek:**
```java
List<String> single = Collections.singletonList("A");
List<String> empty = Collections.emptyList();
List<String> many = Collections.nCopies(3, "X"); // ["X","X","X"]
```

---

## checkedList / checkedSet / checkedMap

**Ne işe yarar:**  
Runtime tipi denetimi sağlar; örneğin bir raw tipten yanlış tipli eleman eklendiğinde `ClassCastException` ekleme anında atılır.

**Kullanışlı:**  
API'ler arası yanlış tip gönderimini erken yakalamak için.

**Örnek:**
```java
List raw = new ArrayList();
List<String> checked = Collections.checkedList(raw, String.class);
raw.add(1); // hata şimdi değil
checked.add((String)"X");
raw.add(2); // artık checked üzerinden eklenirse ClassCastException fırlatılır
```

**Not:**  
Wrapper kullanırken tipi garanti etmek için wrapper referansı kullanılmalı.

---

## replaceAll (Collections.replaceAll) ve List.replaceAll (Java 8+)

- **Collections.replaceAll(list, oldVal, newVal):** Belirli değeri yeniyle değiştirir (tekrar edenleri).
- **List.replaceAll(UnaryOperator<T> op):** Her elemente op uygulanır (in-place).

**Örnek:**
```java
List<String> l = new ArrayList<>(List.of("A","B","A"));
Collections.replaceAll(l, "A", "X"); // [X,B,X]

l.replaceAll(s -> s.toLowerCase()); // tüm elemanları küçük harfe çevir
```

---

## indexOfSubList / lastIndexOfSubList

**Ne işe yarar:**  
Bir listenin içindeki alt listenin ilk/son başlangıç indeksini bulur.

**İmza:**  
```java
Collections.indexOfSubList(List<?> source, List<?> target)
Collections.lastIndexOfSubList(List<?> source, List<?> target)
```

**Örnek:**
```java
List<Integer> source = List.of(1,2,3,1,2,3);
List<Integer> sub = List.of(1,2);
Collections.indexOfSubList(source, sub); // 0
Collections.lastIndexOfSubList(source, sub); // 3
```

---

## list(Enumeration)

**Ne işe yarar:**  
Eskiden kalan Enumeration'ı Liste çevirir. Ör: Vector veya eski API ile çalışırken.

**İmza:**  
```java
Collections.list(Enumeration e)
```

**Örnek:**
```java
Vector<String> v = new Vector<>(List.of("A","B"));
Enumeration<String> en = v.elements();
List<String> asList = Collections.list(en); // ["A","B"]
```

---

## Pratik İpuçları / Tuzaklar

- Birçok Collections metodu in-place değişiklik yapar — orijinali korumak istiyorsanız önce kopyalayın.
- `Collections.copy` için hedefin uygun boyutta olması mecburidir.
- `unmodifiableXxx` bir görünüm (view) olduğu için orijinal değişirse bunu görür; gerçekten izole immutable istiyorsanız yeni bir kopya alın.
- `shuffle` için testlerde deterministik sonuç istiyorsanız `new Random(seed)` kullanın.
- `binarySearch` kullanmadan önce aynı kıstasla sıralandığından emin olun.
- Çok thread’li erişim gerekiyorsa `Collections.synchronizedList` kullanabilirsiniz ama iterasyonlarda manual sync gerektirir; alternatiflere bakın (`CopyOnWriteArrayList`, `ConcurrentHashMap`).
- `fill` ve `nCopies` aynı referansı koyar — mutable nesnelerle dikkatli olun.
