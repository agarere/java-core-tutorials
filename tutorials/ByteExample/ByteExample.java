public class ByteExample {
    public static void main(String[] args) {
        byte min = -128;
        byte max = 127;
        System.out.println("Byte min: " + min + ", max: " + max);

        // Unsigned gibi kullanmak (0-255 arası)
        int unsignedVal = Byte.toUnsignedInt((byte) 200);
        System.out.println("Unsigned gibi 200 değeri: " + unsignedVal);
    }
}
