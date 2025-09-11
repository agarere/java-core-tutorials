public class StringBuilderChar {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("Java");
        System.out.println(sb.charAt(2)); // 'v'
        sb.setCharAt(2, 'x');
        System.out.println(sb); // "Jaxa"
    }
}