| Veri Tipi | Boyut       | Varsayılan | Aralık / Değerler    | Unsigned?                                                  |
| --------- | ----------- | ---------- | -------------------- | ---------------------------------------------------------- |
| `byte`    | 8 bit       | 0          | -128 … 127           | ❌ (Java 8’den sonra yardımcı metodlarla taklit edilebilir) |
| `short`   | 16 bit      | 0          | -32,768 … 32,767     | ❌                                                          |
| `int`     | 32 bit      | 0          | -2^31 … 2^31-1       | ❌ (Java 8 sonrası metodlarla ✅)                            |
| `long`    | 64 bit      | 0L         | -2^63 … 2^63-1       | ❌ (Java 8 sonrası metodlarla ✅)                            |
| `float`   | 32 bit      | 0.0f       | \~±3.4E38            | ❌                                                          |
| `double`  | 64 bit      | 0.0d       | \~±1.7E308           | ❌                                                          |
| `char`    | 16 bit      | '\u0000'   | 0 … 65,535 (Unicode) | ✅                                                          |
| `boolean` | JVM’e bağlı | false      | true / false         | ❌                                                          |
