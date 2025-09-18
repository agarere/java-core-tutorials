enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
public class EnumMethodsExample {
    public static void main(String[] args) {
        for (Day d : Day.values()) {
            System.out.println(d + " ordinal=" + d.ordinal());
        }

        Day d = Day.valueOf("TUESDAY");
        System.out.println(d); // TUESDAY
        System.out.println(d.name()); // TUESDAY
    }
}