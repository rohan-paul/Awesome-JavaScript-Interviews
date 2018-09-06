### From Facebook Group - Smart Interviews Discussions

[https://www.facebook.com/groups/1548396065474189/permalink/2066771143636676/](https://www.facebook.com/groups/1548396065474189/permalink/2066771143636676/)

Sharing my interview experience with SAP Labs [2 years exp]-

### Round 1 (Technical F2F):

The interviewer started by asking about my current project and asked me to explain the architecture. I answered by explaining her the complete architecture on the white board.
Then she asked how much would I rate myself in DS & Algo on a scale of 1-10.
Then she asked the following questions:
1) Reverse a linked list.
2) Cloning a linked list having next and random pointer.
3)Mirror of a Binary tree.

## Questions on Java:

1)Difference between static synchronized block and non static Synchronized block.
2)Why wait() , notify() and notifyAll() methods are in Object class.
3)Why string is Immutable? Is it possible to have a synchronized block that locks on to a String object?

### Question on MongoDB:

1)How to achieve Horizontal scaling in MongoDB.What all servers are required to do the same.

2)There’s a student collection which has multiple documents for different subjects.How to aggregate all records of all students and have a single array field having all marks of a given student.

Round 2 (Technical F2F):
This round was the toughest, not because the questions were tough but it lasted forever(more than 3 hours)

### 1) Problem statement:

There’s a file that contains URL and description of some websites delimited by comma.I need to read that file and write it back to another file in a sorted manner. The input file may have different description for same website.Ex: www.google.com/blogs/career , www.google.com/ home/etc will have different descriptions.
The output file should have only one entry for a particular website but can have many descriptions.
I gave him a solution which he felt was good.
He then altered the problem statement . Now, instead of 1 file there is a directory of files and all needs to be read and written back in a new file in sorted manner.He hinted that he’s looking for a multi threaded solution .
I gave a solution using Thread pool executor and after a long discussion he was happy with the solution.

2) What is Hash code? Difference between HashMap and HashTable ? How HashMap is implemented internally? How linear probing leads to clustering? Can we have null key in a HashMap?

3) He asked me to explain Observer pattern (because I had told him that I used it in one of the projects ) . He asked me to move over to the white board and explain with proper class diagrams.
Why composition is preferred over inheritance was one of the many questions that he asked while I was explaining implementation of observer pattern.

4)What are deadlocks ? When do they occur? How to avoid them? How to avoid them in Java?Write a code that leads to a deadlock.

5)There’s a website that shows online content when there’s internet connection and offline content like downloads when offline.There’s a switch that tells if the website is online or offline.There’s a display() method that displays the appropriate content.How to implement that display method?He was not really looking for any code but the approach . I told him that we’ll have a Screen interface that has a display() method and there would be two concrete implementations : online screen and offline screen of the screen interface where I’ll override the display() method. He was content with solution.

6) Implement a BST which supports insertion , deletion and search.

7) Rotate an array by K times.

8) Given an array find the maximum value of Σarr[i]*i, where i = 0, 1, 2,…., n – 1.( https://www.geeksforgeeks.org/maximize-sum-arrii/)

9) Why to prefer Synchronized block over Synchronized method?

10) Explain Quick sort .

### Round 3 (Technical F2F):

1) When should we go for in memory caching? (because my resume says that I’ve worked on MemcacheD)
2) Explain micro services architecture.(I explained him with an overview of how docker containers work and how we can have container orchestration using Kuberenetes)
3) How Agile way of development is different from the traditional waterfall model?
4) How PAAS is different from IAAS.(Cloud computing)
5) Implement a queue using stack.

### Round 4(Managerial + Technical F2F)

1)How to kick start a springboot application?
2)What are the different scope of Spring beans?
3) Difference between PUT and PATCH requests in REST api.
4)Why do you want to join SAP labs?

Round 5 (Technical -Telephonic):
This was a cross LOB round where a person from a different team interviewed.
1)How to achieve Many2Many mappings in Hibernate.
2)Use of @Qulifier annotation in Spring?
3) How dispatcher servlet works?
4)How a class in loaded into JVM?

Round 6( HR)
The basic HR questions :
Where do you see yourself in 5 years?
Why do you want to quit your cureent job?
Salary negotiation .(Which I regret not doing.)

Finally got the offer !!


