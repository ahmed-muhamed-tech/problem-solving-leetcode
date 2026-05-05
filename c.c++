#include <iostream>
using namespace std;

class Node
{
public:
    int val;
    Node *next;
    Node(int _val = 0, Node *_next = NULL)
    {
        val = _val;
        next = _next;
    }
};

class LinkedList
{
public:
    Node *head;
    int size;
    LinkedList()
    {
        head = NULL;
        size = 0;
    }

    void addFirst(int value)
    {
        Node *newNode = new Node(value);
        newNode->next = head;
        head = newNode;
    }

    void printList()
    {

        Node *current = head;
        while (current)
        {
            cout << current->val;
            if (current->next)
            {
                cout << "->";
            }
            current = current->next;
        }
    }
};

int main()
{
    LinkedList *l = new LinkedList();
    l->addFirst(10);
    l->addFirst(20);
    l->printList();
    return 0;
}