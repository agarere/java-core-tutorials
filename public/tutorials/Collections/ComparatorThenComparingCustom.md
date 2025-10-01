Custom bir class için Comparator özelleştirilebilir.

.....

```java
class Person {
    String name;
    String surname;
    int age;

    Person(String name, String surname, int age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " " + surname + " (" + age + ")";
    }
}

List<Person> people = new ArrayList<>(List.of(
    new Person("Ali", "Yılmaz", 30),
    new Person("Ayşe", "Demir", 25),
    new Person("Ahmet", "Demir", 25),
    new Person("Mehmet", "Kara", 25),
    new Person("Zeynep", "Yılmaz", 30)
));

people.sort(
    Comparator.comparing(Person::getAge)                 // 1. kriter: yaş
              .thenComparing(Person::getSurname)         // 2. kriter: soyad
              .thenComparing(Person::getName)            // 3. kriter: ad
);

// Eğer yaşa büyükten küçüğe göre sıralamak isteseydik
people.sort(
    Comparator.comparing(Person::getAge).reversed()
              .thenComparing(Person::getSurname)
              .thenComparing(Person::getName)
);

// Eğer soyadı kıyaslamada case-insensitive isteseydik
people.sort(
    Comparator.comparing(Person::getAge)
              .thenComparing(p -> p.surname, String.CASE_INSENSITIVE_ORDER)
              .thenComparing(Person::getName)
);
```