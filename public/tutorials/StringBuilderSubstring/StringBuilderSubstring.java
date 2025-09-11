public class StringBuilderSubstring {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello, World!");
        String substring = sb.substring(7, 12);
        System.out.println(substring); // "World"
    }
}