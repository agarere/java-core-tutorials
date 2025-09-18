interface Describable {
    String getDescription();
}

enum Shape implements Describable {
    CIRCLE {
        @Override
        public double area(double size) { return Math.PI * size * size; }
        @Override
        public String getDescription() { return "Daire"; }
    },
    SQUARE {
        @Override
        public double area(double size) { return size * size; }
        @Override
        public String getDescription() { return "Kare"; }
    };

    // Abstract method → sabitler override etmeli
    public abstract double area(double size);
}

public class EnumInterfaceAbstractExample {
    public static void main(String[] args) {
        double size = 4;

        for (Shape s : Shape.values()) {
            System.out.println(s.getDescription() + " alanı: " + s.area(size));
        }
    }
}