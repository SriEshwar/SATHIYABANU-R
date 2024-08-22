package List.Linkedlist;

import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {

        LinkedList<String> student = new LinkedList<String>();
        student.add("Sathiya");
        student.add("Sneha");
        student.add("Ram");
        student.add("Raja");
        System.out.println(student);

        // Accessing the elements
        System.out.println("First student: " + student.getFirst());
        System.out.println("Last student: " + student.getLast());
        System.out.println("Student at index 2: " + student.get(2));

        // Removing the elements
        student.remove("Sathiya");
        student.removeFirst();
        student.removeLast();
        System.out.println("Students after removal: " + student);
    }
}