### Inheritance Türleri (Java’da)

Java’da bazı dillerdeki (C++, Python) gibi çoklu kalıtım yoktur.

**1. Single Inheritance** → Bir sınıf sadece bir sınıftan miras alır.
```java
class Dog extends Animal {}
```

**2. Multilevel Inheritance** → Bir zincir şeklinde.
```java
class Animal {}
class Mammal extends Animal {}
class Dog extends Mammal {}
```


**3. Hierarchical Inheritance** → Bir parent, birden fazla child.
```java
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
```

**4. Hybrid Inheritance** → Java’da direkt yok (çoklu inheritance desteklenmediği için). Bunun yerine interface kullanılır.