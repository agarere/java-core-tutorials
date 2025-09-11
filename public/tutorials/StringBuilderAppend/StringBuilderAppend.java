public class StringBuilderAppend {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("");
        System.out.println(sb.capacity()); // 16
        sb.append("Programlama");
        sb.append("Programlama");
        System.out.println(sb); // "ProgramlamaProgramlama"
        System.out.println(sb.capacity()); // 34

        StringBuilder sb = new StringBuilder("Java");
        System.out.println(sb.capacity()); // 20
    }
}