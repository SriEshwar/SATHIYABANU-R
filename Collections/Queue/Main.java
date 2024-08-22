package Queue;

import java.util.LinkedList;
import java.util.Queue;

public class Main {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();

        // Adding Students to the queue
        queue.add("Sathiya");
        queue.add("Keerthana");
        queue.add("Prathi");
        queue.add("Sneha");

        // Displaying the queue
        System.out.println("Print queue: " + queue);

        // Retrieves and removes the head of the queue ---> poll()
        String next = queue.poll();
        System.out.println("Student: " + next);

        // Retrieves but does not remove the head of the queue ---> peek()
        String head = queue.peek();
        System.out.println("Student: " + head);

        // Checking the condition
        boolean report = queue.contains("Sneha");
        System.out.println("Sneha is in the queue " + report);

        // Checking the size of the queue
        int queueSize = queue.size();
        System.out.println("Number of students in the queue: " + queueSize);

        // Iterating over the students in the queue
        System.out.println("Students in the queue:");
        for (String students : queue) {
            System.out.println(students);
        }

        // Removing all students from the queue
        queue.clear();
        System.out.println("Students after clearing: " + queue);
        System.out.println("Is the Student List empty? " + queue.isEmpty());
    }
}