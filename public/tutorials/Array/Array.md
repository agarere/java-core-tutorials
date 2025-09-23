👉 **Array**, aynı tipteki verileri **sabit uzunlukta** saklayan bir veri yapısıdır.

👉 İçinde **primitive tipler** (`int`, `double`, `char` vb.) ya da **referans tipler** (`String`, `Object`, kendi oluşturduğun class’lar) saklanabilir.

👉 Bellekte **ardışık** (contiguous) alanlarda tutulur.

👉 Index (0’dan başlar) ile erişilir.

.....

```java
public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = new int[5];
        int[] arr;     // tavsiye edilen
        int arr2[];    // C tarzı, geçerli ama tercih edilmez
        int[] arr3 = new int[3];   // 3 elemanlı, başlangıçta [0, 0, 0]
        int[] nums = {10, 20, 30};   // boyut otomatik belirlenir
        String[] levels = {"LOW", "MEDIUM", "HIGH"};

        System.out.println(nums[3]);  // ArrayIndexOutOfBoundsException
        System.out.println(nums.length);  // 3

        for (int num : nums) {
            System.out.println(num);
        }

        int[][] matrix = new int[2][3];
        // 2 satır, 3 sütun
        matrix[0][0] = 1;
        matrix[1][2] = 5;

        /*
        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6}
        };
        */
    }
}
```