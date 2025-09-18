interface Operation {
    double apply(double x, double y);
}

enum BasicOperation implements Operation {
    ADD {
        public double apply(double x, double y) { return x + y; }
    },
    SUBTRACT {
        public double apply(double x, double y) { return x - y; }
    },
    MULTIPLY {
        public double apply(double x, double y) { return x * y; }
    },
    DIVIDE {
        public double apply(double x, double y) { return x / y; }
    };
}

public class EnumInterfaceExample {
    public static void main(String[] args) {
        double a = 10, b = 5;

        for (BasicOperation op : BasicOperation.values()) {
            System.out.println(op + " → " + op.apply(a, b));
        }
    }
}