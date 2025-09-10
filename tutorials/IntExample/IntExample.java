public class IntExample {
    public static void main(String[] args) {
        int min = -2147483648;
        int max = 2147483647;
        System.out.println("Int min: " + min + ", max: " + max);

        // Unsigned kullanımı
        long unsignedVal = Integer.toUnsignedLong(-1); // 4294967295
        System.out.println("Unsigned -1 değeri: " + unsignedVal);
    }
}
