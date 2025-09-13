import java.util.Calendar;
import java.util.Date;

public class CalendarExample {
    public static void main(String[] args) {
        Calendar calendar = Calendar.getInstance();
        System.out.println("Yıl: " + calendar.get(Calendar.YEAR));
        System.out.println("Ay: " + (calendar.get(Calendar.MONTH) + 1)); // Aylar 0'dan başlar
        System.out.println("Gün: " + calendar.get(Calendar.DAY_OF_MONTH));
        System.out.println(calendar.getTime()); // Date tipinde
        calendar.setTime(new Date("12/12/2012"));
        System.out.println(calendar.getTime());
    }
}