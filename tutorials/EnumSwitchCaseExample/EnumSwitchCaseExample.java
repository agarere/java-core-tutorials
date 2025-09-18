enum Level {
    LOW, MEDIUM, HIGH
}
public class EnumSwitchCaseExample {
    public static void main(String[] args) {
        Level l = Level.HIGH;

        switch (l) {
            case LOW -> System.out.println("Düşük seviye");
            case MEDIUM -> System.out.println("Orta seviye");
            case HIGH -> System.out.println("Yüksek seviye");
        }
    }
}