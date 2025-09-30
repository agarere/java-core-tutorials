Sadece “tipi umursamıyorum” dediğimiz durumlar için.

Örneğin, sadece listenin boyunu yazdırmak istiyoruz:

.....

```java
void printList(List<?> list) {
    for (Object o : list) {
        System.out.println(o);
    }
}
```