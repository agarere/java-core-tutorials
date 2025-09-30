- Java’daki tüm sınıfların atasıdır.
- Yani sen ister kendi sınıfını yaz, ister `String`, `Integer`, `ArrayList` gibi hazır bir sınıf kullan, hepsi eninde sonunda `java.lang.Object` sınıfından **dolaylı veya doğrudan** türemiştir.
- Bir sınıf yazarken extends yazmasan bile aslında otomatik olarak `Object`ten türemiş olur.

### Hiyerarşi:
- Object → String
- Object → ArrayList → List
- Object → Integer → Number

### Object sınıfının önemli metotları:

- `toString()` → Nesnenin string temsili (default olarak `ClassName@hashCode`)

- `equals(Object o)` → İki nesnenin içeriksel eşitliğini kıyaslamada override edilir.

- `hashCode()` → Hash tabanlı koleksiyonlarda (HashMap, HashSet vs.) kullanılan hash değeri.

- `getClass()` → Nesnenin runtime tip bilgisi.

- `clone()` → Nesnenin kopyasını çıkarır (Shallow copy).

- `finalize()` → GC’den hemen önce çağrılır (artık önerilmiyor).

📌 Yani Object = Java evreninin kök sınıfı. Her şey onun üzerine inşa edilmiştir.
Bu yüzden Objecti “temel yapı taşı” olarak görebilirsin.