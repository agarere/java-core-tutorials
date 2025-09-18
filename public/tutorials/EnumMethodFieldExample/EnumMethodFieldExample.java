enum Status {
    SUCCESS(200, "İşlem başarılı"),
    ERROR(500, "Sunucu hatası"),
    NOT_FOUND(404, "Bulunamadı");

    private final int code;
    private final String message;

    Status(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() { return code; }
    public String getMessage() { return message; }
}
public class EnumMethodFieldExample {
    public static void main(String[] args) {
        Status s = Status.ERROR;
        System.out.println(s.getCode());    // 500
        System.out.println(s.getMessage()); // Sunucu hatası
    }
}