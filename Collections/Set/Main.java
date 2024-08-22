package Set;

import java.util.HashSet;
import java.util.Iterator; // Import Iterator explicitly

public class Main {
    public static void main(String[] args) {
        // Creating a HashSet to store participant names
        HashSet<String> students = new HashSet<>();

        // Adding students to the HashSet
        students.add("Sathiya");
        students.add("Arun");
        students.add("Keerthana");
        students.add("Sneha");
        students.add("Arun");

        // Trying to add a duplicate student
        boolean isAdded = students.add("Sathiya");
        System.out.println("Added again? " + isAdded);

        // Checking if a Student is Present
        boolean student = students.contains("Sneha");
        System.out.println("Is Student Present? " + student);

        // Removing a student
        students.remove("Prathi");
        System.out.println("Is Prathi still present? " + students.contains("Prathi"));

        // Checking the number of Student
        int numberOfStudents = students.size();
        System.out.println("Number of Students: " + numberOfStudents);

        // Iterating over the Students
        System.out.println("List of Students:");
        Iterator<String> iterator = students.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // Checking if the set is empty
        System.out.println("Is the student list empty? " + students.isEmpty());

        // Clearing all students from the set
        students.clear();
        System.out.println("Number of students after clearing: " + students.size());
    }
}
