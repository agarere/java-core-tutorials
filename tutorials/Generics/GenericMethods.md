- Sadece sınıflar değil, metotlar da generic olabilir.
- Eğer T class’ın tepesinde tanımlandıysa → doğrudan kullanılır.
- Eğer T sadece metotta tanımlanacaksa → metodun başına <T> yazılır.
- Bu metot herhangi bir generic sınıf içinde değil.
- Dolayısıyla metodun içinde kullanacağımız T’yi kendimiz tanımlamamız gerekiyor.
- Bunu da metodun dönüş tipinden önce <T> yazarak yapıyoruz.
- Yani burada T metoda bağlı bir generic parametre.

.....

```java
class Util {
  public static <T> void printArray(T[] array) {
      for (T item : array) {
          System.out.println(item);
      }
  }
}
```