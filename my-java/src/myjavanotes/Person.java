/*
     * This is my notes on github
     * contains my learning of java
 */
package myjavanotes;        // this is the package name, will be lower case

// https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html
/**
 *
 * @author manoharreddyporeddy
 */
class Person {

    String name;
    String gender;
    int age;

    Person() {

    }

    Person(String name, int age, String gender) {
        this.setName(name);
        this.setAge(age);
        this.setGender(gender);
    }

    public final void setName(String name) {
        this.name = name;
    }

    public String getName(String name) {
        return name;
    }

    public final void setAge(int age) {
        this.age = age;
    }

    public int getAge(int age) {
        return age;
    }

    public final void setGender(String gender) {
        this.gender = gender;
    }

    public String getGender(String gender) {
        return gender;
    }

    @Override
    public String toString() {
        return ""
                + "\n\t" + name
                + "\n\t" + gender
                + "\n\t" + age;
    }
}
