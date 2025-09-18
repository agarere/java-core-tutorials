enum Color {
    RED, GREEN, BLUE
}

public class EnumBasicExample {
    public static void main(String[] args) {
        Color c = Color.RED;
        System.out.println(c); // RED
        System.out.println(Color.GREEN.toString()); // GREEN
        System.out.println(Color.BLUE); // BLUE
    }
}