public class CharExample {
    public static void main(String[] args) {
        char letter = 'A';
        char unicode = '\u03A9'; // Ω (Yunan harfi Omega)
        char max = '\uFFFF';
        System.out.println("Letter: " + letter);
        System.out.println("Unicode: " + unicode);
        System.out.println("Max char: " + (int) max);
    }
}
