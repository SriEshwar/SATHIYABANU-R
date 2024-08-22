package List.Arraylist;

import java.util.ArrayList;
// import java.util.Iterator;
// import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        ArrayList<String> student = new ArrayList<String>();
        student.add("Sathiya");
        student.add("Sneha");
        student.add("Ram");
        student.add("Raja");
        System.out.println(student);

        // get student at specified index
        System.out.println(student.get(2));

        // Remove an student by index
        // System.out.println(student.remove(2));

        // Remove an student by name
        // System.out.println(student.remove("Ram"));

        // Check if the list contains a specific student
        System.out.println(student.contains("Ram"));
        System.out.println(student.contains("Sathiya"));

        // Size of ArrayList
        System.out.println(student.size());

        // Iterator --> next()---> retrieves the current element of the ArrayList and
        // moves the cursor to the next element.
        // Iterator<String> iterator = student.iterator();
        // while (iterator.hasNext()) {
        // System.out.println(iterator.next());
        // }

        // Set a new value at a specific index and replace the excisting value
        student.set(3, "Babu");
        System.out.println(student);
    }
}
