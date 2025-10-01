- Eğer kendi yazdığın bir sınıf varsa (Person gibi) ve `Collections.sort(list)` kullanmak istiyorsan:

- O sınıf `Comparable<T>` implement etmelidir.

- Aksi halde `ClassCastException` fırlatılır, çünkü Java neye göre sıralayacağını bilemez.

.....

```java
class Person implements Comparable<Person> {
    String name;
    int age;

    Person(String name, int age){ this.name = name; this.age = age; }

    @Override
    public int compareTo(Person o) {
        return Integer.compare(this.age, o.age); // yaşa göre sıralama
    }

    @Override
    public String toString(){ return name + ":" + age; }
}
```

```java
List<Person> people = new ArrayList<>(List.of(
    new Person("Ali", 30),
    new Person("Ayşe", 25),
    new Person("Mehmet", 40)
));
Collections.sort(people);
System.out.println(people);
```