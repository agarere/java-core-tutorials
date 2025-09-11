public class StringBuilder {
    public static void main(String[] args) {
        String s = "Hello";
        s.concat(" World"); // Yeni String oluşturur, s değişmez
        System.out.println(s); // "Hello"

        StringBuilder sb = new StringBuilder("Hello");
        sb.append(" World"); // Aynı nesne üzerinde değişiklik yapar
        System.out.println(sb); // "Hello World"
    }
}
