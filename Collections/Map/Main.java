package Map;

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Creating a Map to store student names and their phone numbers
        Map<String, String> studentList = new HashMap<>();

        // Adding contacts to the Map with Tamil Nadu names
        studentList.put("Arun ", "944-1634");
        studentList.put("sathiya", "942-5698");
        studentList.put("Bala", "945-8766");
        studentList.put("Devi", "924-4821");

        // Displaying the student list
        System.out.println("Studuent List: " + studentList);

        // Retrieving a phone number by student name
        String arun = studentList.get("Arun");
        System.out.println("Arun's Phone Number: " + arun);

        // Checking if a student exists
        boolean bala = studentList.containsKey("Bala");
        System.out.println("Is Bala in the student list? " + bala);

        // Checking if a phone number exists
        boolean number = studentList.containsValue("944-1634");
        System.out.println("Is there a student with phone number? " + number);

        // Removing a student
        studentList.remove("Devi");
        System.out.println("Student List after removing Devi: " + studentList);

        // Updating a studnet's phone number
        studentList.put("Sathiya", "944-9999");
        System.out.println("Student List after updating phone number: " + studentList);

        // Getting the size of the student list
        int size = studentList.size();
        System.out.println("Number of students in the list: " + size);

        // Iterating over the students list
        System.out.println("Contacts in the list:");
        for (Map.Entry<String, String> entry : studentList.entrySet()) {
            System.out.println("Name: " + entry.getKey() + ", Phone Number: " + entry.getValue());
        }

        // Clearing all students from the list
        studentList.clear();
        System.out.println("Contact List after clearing: " + studentList);
        System.out.println("Is the contact list empty? " + studentList.isEmpty());
    }
}