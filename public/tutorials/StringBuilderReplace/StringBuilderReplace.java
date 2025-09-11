public class StringBuilderReplace {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Hello, World!");
        System.out.println("Original StringBuilder: " + sb);

        sb.replace(7, 12, "Java");
        System.out.println("After replace: " + sb);

        sb.replace(0, 5, "Hi");
        System.out.println("After second replace: " + sb);
    }
}