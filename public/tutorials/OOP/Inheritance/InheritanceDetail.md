### Inheritance Avantajları
✅ Code reuse → Ortak kodu tekrar tekrar yazmazsın.

✅ Hiyerarşi kurma → Gerçek dünyayı modellemek kolaylaşır.

✅ Polymorphism ile birleşir → Parent referansı ile child nesnesini kullanabilirsin.

### Inheritance Dezavantajları
⚠️ Fazla kalıtım = karmaşık hiyerarşi → bakım zorlaşır.

⚠️ Sıkı bağ (tight coupling) → Parent değişirse child’lar da etkilenir.

⚠️ Yanlış kullanım → Bazen inheritance yerine composition (has-a) daha doğru olur.

### Ne Zaman Kullanılır?
- Eğer “is-a” ilişkisi varsa → inheritance uygundur.
  - Dog is an Animal → ✔️
  - Car is a Vehicle → ✔️
- Eğer “has-a” ilişkisi varsa → composition uygundur.
  - Car has an Engine → ❌ inheritance, ✔️ composition