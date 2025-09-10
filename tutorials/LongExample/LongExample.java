public class LongExample {
    public static void main(String[] args) {
        long min = -9223372036854775808L;
        long max = 9223372036854775807L;
        System.out.println("Long min: " + min + ", max: " + max);

        // Unsigned gibi
        String unsignedStr = Long.toUnsignedString(-1L);
        System.out.println("Unsigned -1 değeri: " + unsignedStr); // 18446744073709551615
    }
}
