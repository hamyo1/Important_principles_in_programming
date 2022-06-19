
import java.util.Stack;

public class StackExample{
	
	public static void main(String[] args) {
		
		// *****************************************************
		
		// stack = LIFO data structure. Last-In First-Out
		//               stores objects into a sort of "vertical tower"
		//		  push() to add objects to the top
		//		  pop() to remove objects from the top
		
		// uses of stacks?
		// 1. undo/redo features in text editors
		// 2. moving back/forward through browser history
		// 3. backtracking algorithms (maze, file directories)
		// 4. calling functions (call stack)
		
		// *****************************************************
		
		Stack<String> stack = new Stack<String>();
		
		//System.out.println(stack.empty());
		
		stack.push("Minecraft");
		stack.push("Skyrim");
		stack.push("DOOM");
		stack.push("Borderlands");
		stack.push("FFVII");
		
		//String myFavGame = stack.pop(); //Do something with the object and remove it from the list
		//System.out.println(stack.peek());	//A peek into the object without removing it
		//System.out.println(stack.search("Fallout76")); // return the Position from the top or -1 if the object not found in the list
		System.out.println(stack);
		
	}
}
