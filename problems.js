const problems = [
    // ============================================================
    // LEVEL 0: BEGINNER (Problems 1-5)
    // ============================================================
    {
        id: 1,
        title: "👋 Hello, Python!",
        difficulty: "beginner",
        category: "Basics",
        description: "Write a Python program that prints 'Hello, Python!' to the console. This is your first step into programming!",
        solution: `print("Hello, Python!")`,
        explanation: "The print() function displays output to the console. Strings are enclosed in quotes.",
        hint: "Use the print() function with a string inside quotes."
    },
    {
        id: 2,
        title: "➕ Sum of Two Numbers",
        difficulty: "beginner",
        category: "Arithmetic",
        description: "Write a function that takes two numbers as input and returns their sum. Test it with 5 and 10.",
        solution: `def add_numbers(a, b):
    return a + b

# Test the function
result = add_numbers(5, 10)
print(result)  # Output: 15`,
        explanation: "Functions take parameters, perform operations, and return results. The '+' operator adds numbers.",
        hint: "Create a function with two parameters and use the return statement."
    },
    {
        id: 3,
        title: "🔢 Even or Odd Checker",
        difficulty: "beginner",
        category: "Conditionals",
        description: "Create a program that checks if a given number is even or odd. Print 'Even' or 'Odd' accordingly.",
        solution: `def check_even_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

# Test
print(check_even_odd(7))  # Output: Odd
print(check_even_odd(10)) # Output: Even`,
        explanation: "The modulo operator (%) returns the remainder. If remainder is 0, the number is even.",
        hint: "Use the modulo operator (%) and if-else statements."
    },
    {
        id: 4,
        title: "📏 Find Largest Number",
        difficulty: "beginner",
        category: "Logic",
        description: "Write a function that takes three numbers and returns the largest among them.",
        solution: `def find_largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

# Test
print(find_largest(5, 12, 8))  # Output: 12`,
        explanation: "Compare each number with the others using logical operators (and, or).",
        hint: "Use if-elif-else with comparison operators."
    },
    {
        id: 5,
        title: "🔄 Reverse a String",
        difficulty: "beginner",
        category: "Strings",
        description: "Write a function that takes a string and returns it reversed. Example: 'hello' → 'olleh'.",
        solution: `def reverse_string(text):
    return text[::-1]

# Test
print(reverse_string("hello"))  # Output: olleh`,
        explanation: "Python's slicing [::-1] reverses any sequence. It's the most Pythonic way!",
        hint: "Use string slicing with step -1: text[::-1]"
    },

    // ============================================================
    // LEVEL 1: INTERMEDIATE (Problems 6-10)
    // ============================================================
    {
        id: 6,
        title: "📊 Fibonacci Sequence",
        difficulty: "intermediate",
        category: "Loops",
        description: "Generate the first 10 numbers of the Fibonacci sequence. Each number is the sum of the two preceding ones.",
        solution: `def fibonacci(n):
    a, b = 0, 1
    sequence = []
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

# Test
print(fibonacci(10))  # Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`,
        explanation: "Fibonacci starts with 0,1. Each next number is sum of previous two. Uses tuple unpacking.",
        hint: "Use two variables to track the last two numbers and update them in a loop."
    },
    {
        id: 7,
        title: "🔄 Palindrome Checker",
        difficulty: "intermediate",
        category: "Strings",
        description: "Write a function that checks if a given string is a palindrome (reads same forward and backward).",
        solution: `def is_palindrome(text):
    # Remove spaces and convert to lowercase
    cleaned = text.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

# Test
print(is_palindrome("racecar"))     # Output: True
print(is_palindrome("hello"))       # Output: False
print(is_palindrome("A man a plan a canal Panama"))  # Output: True`,
        explanation: "Clean the string by removing spaces and converting to lowercase. Compare with its reverse.",
        hint: "Clean the string first, then compare with reversed version."
    },
    {
        id: 8,
        title: "🎯 Factorial Calculator",
        difficulty: "intermediate",
        category: "Recursion",
        description: "Write a recursive function to calculate the factorial of a number (n! = n × (n-1) × ... × 1).",
        solution: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Test
print(factorial(5))  # Output: 120 (5×4×3×2×1)`,
        explanation: "Recursion means function calls itself. Base case: factorial of 0 or 1 is 1.",
        hint: "Base case: if n <= 1 return 1. Otherwise: n * factorial(n-1)"
    },
    {
        id: 9,
        title: "📊 Count Vowels in String",
        difficulty: "intermediate",
        category: "Strings",
        description: "Write a function that counts the number of vowels (a, e, i, o, u) in a given string.",
        solution: `def count_vowels(text):
    vowels = "aeiouAEIOU"
    count = 0
    for char in text:
        if char in vowels:
            count += 1
    return count

# Test
print(count_vowels("Hello World"))  # Output: 3 (e, o, o)`,
        explanation: "Iterate through each character and check if it's in the vowels set.",
        hint: "Create a string of vowels and check membership using 'in' operator."
    },
    {
        id: 10,
        title: "🔍 Find Duplicates in List",
        difficulty: "intermediate",
        category: "Data Structures",
        description: "Write a function that finds all duplicate elements in a list and returns them.",
        solution: `def find_duplicates(lst):
    seen = set()
    duplicates = set()
    for item in lst:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)

# Test
print(find_duplicates([1, 2, 3, 2, 4, 5, 3, 6]))  # Output: [2, 3]`,
        explanation: "Use a set to track seen items. If an item is already seen, it's a duplicate.",
        hint: "Use two sets - one for tracking seen items, one for storing duplicates."
    },

    // ============================================================
    // LEVEL 2: ADVANCED (Problems 11-15)
    // ============================================================
    {
        id: 11,
        title: "🔄 Bubble Sort Algorithm",
        difficulty: "advanced",
        category: "Algorithms",
        description: "Implement the bubble sort algorithm to sort a list of numbers in ascending order.",
        solution: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Flag to optimize
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

# Test
print(bubble_sort([64, 34, 25, 12, 22, 11, 90]))  # Output: [11, 12, 22, 25, 34, 64, 90]`,
        explanation: "Repeatedly swap adjacent elements if they're in wrong order. Largest element 'bubbles up' each pass.",
        hint: "Nested loop: outer loop for passes, inner loop for comparisons and swaps."
    },
    {
        id: 12,
        title: "📊 Binary Search Algorithm",
        difficulty: "advanced",
        category: "Algorithms",
        description: "Implement binary search to find an element in a sorted list. Return its index or -1 if not found.",
        solution: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# Test
arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(arr, 7))   # Output: 3
print(binary_search(arr, 10))  # Output: -1`,
        explanation: "Divide and conquer: check middle, eliminate half the search space each time.",
        hint: "Use left and right pointers. Calculate mid. Adjust pointers based on comparison."
    },
    {
        id: 13,
        title: "🏗️ Two Sum Problem",
        difficulty: "advanced",
        category: "Algorithms",
        description: "Given an array of integers, return indices of two numbers that add up to a target sum.",
        solution: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Test
print(two_sum([2, 7, 11, 15], 9))  # Output: [0, 1] (2 + 7 = 9)`,
        explanation: "Use a hashmap to store seen numbers. For each number, check if complement exists.",
        hint: "Use a dictionary to store numbers and their indices. Check for complement."
    },
    {
        id: 14,
        title: "🔄 Merge Sorted Arrays",
        difficulty: "advanced",
        category: "Algorithms",
        description: "Merge two sorted arrays into one sorted array.",
        solution: `def merge_sorted(arr1, arr2):
    i = j = 0
    result = []
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    
    # Add remaining elements
    result.extend(arr1[i:])
    result.extend(arr2[j:])
    return result

# Test
print(merge_sorted([1, 3, 5, 7], [2, 4, 6, 8]))  # Output: [1, 2, 3, 4, 5, 6, 7, 8]`,
        explanation: "Use two pointers to compare elements from both arrays, add smaller one.",
        hint: "Use two pointers. Compare elements and add smaller one. Handle remaining elements."
    },
    {
        id: 15,
        title: "📊 Longest Substring Without Repeating Characters",
        difficulty: "advanced",
        category: "Strings",
        description: "Find the length of the longest substring without repeating characters.",
        solution: `def longest_unique_substring(s):
    char_set = set()
    left = max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Test
print(longest_unique_substring("abcabcbb"))  # Output: 3 ("abc")
print(longest_unique_substring("bbbbb"))     # Output: 1 ("b")`,
        explanation: "Sliding window technique. Use set to track characters in current window.",
        hint: "Use sliding window with two pointers and a set for unique characters."
    },

    // ============================================================
    // LEVEL 3: EXPERT (Problems 16-20)
    // ============================================================
    {
        id: 16,
        title: "🧠 Anagrams Checker",
        difficulty: "expert",
        category: "Strings",
        description: "Check if two strings are anagrams (same letters, different order). Example: 'listen' and 'silent'.",
        solution: `def are_anagrams(str1, str2):
    # Remove spaces and convert to lowercase
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()
    
    # Check if sorted strings are equal
    return sorted(str1) == sorted(str2)

# Test
print(are_anagrams("listen", "silent"))          # Output: True
print(are_anagrams("hello", "world"))            # Output: False
print(are_anagrams("decimal", "medical"))        # Output: True`,
        explanation: "Anagrams have same character frequency. Sorting makes comparison easy.",
        hint: "Sort both strings and compare. Or use character frequency counting."
    },
    {
        id: 17,
        title: "📊 Prime Number Checker",
        difficulty: "expert",
        category: "Mathematics",
        description: "Write an efficient function to check if a number is prime. Optimize for large numbers.",
        solution: `def is_prime(n):
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    
    # Check only up to sqrt(n)
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2  # Skip even numbers
    return True

# Test
print(is_prime(17))   # Output: True
print(is_prime(100))  # Output: False`,
        explanation: "Check divisibility up to sqrt(n). Skip even numbers after checking 2.",
        hint: "Handle edge cases: n<2, n=2, even numbers. Check odd divisors up to sqrt(n)."
    },
    {
        id: 18,
        title: "🔄 Stock Buy and Sell - Max Profit",
        difficulty: "expert",
        category: "Algorithms",
        description: "Given stock prices array, find maximum profit from buying and selling once.",
        solution: `def max_profit(prices):
    if not prices:
        return 0
    
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    
    return max_profit

# Test
print(max_profit([7, 1, 5, 3, 6, 4]))  # Output: 5 (Buy at 1, Sell at 6)`,
        explanation: "Track minimum price so far. Calculate profit for each day and update max.",
        hint: "Track min price and max profit. Update min when lower price found."
    },
    {
        id: 19,
        title: "📝 Word Frequency Counter",
        difficulty: "expert",
        category: "Data Structures",
        description: "Count frequency of each word in a given text. Handle punctuation and case.",
        solution: `def word_frequency(text):
    # Clean text: remove punctuation, convert to lowercase
    import re
    words = re.findall(r'\\b\\w+\\b', text.lower())
    
    freq = {}
    for word in words:
        freq[word] = freq.get(word, 0) + 1
    
    # Sort by frequency (descending)
    return dict(sorted(freq.items(), key=lambda x: x[1], reverse=True))

# Test
text = "Hello world! Hello Python. Python is amazing, Python is powerful."
print(word_frequency(text))
# Output: {'python': 3, 'hello': 2, 'is': 2, 'world': 1, 'amazing': 1, 'powerful': 1}`,
        explanation: "Use regex to extract words. Use dictionary for counting. Sort by frequency.",
        hint: "Clean text with regex. Use dictionary to count. Sort items by value."
    },
    {
        id: 20,
        title: "🧩 Valid Parentheses",
        difficulty: "expert",
        category: "Data Structures",
        description: "Check if a string of parentheses is valid. Must close in correct order.",
        solution: `def is_valid_parentheses(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:  # Closing bracket
            # Pop from stack if not empty, else use dummy
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:  # Opening bracket
            stack.append(char)
    
    return not stack  # Stack should be empty

# Test
print(is_valid_parentheses("()[]{}"))   # Output: True
print(is_valid_parentheses("([)]"))     # Output: False
print(is_valid_parentheses("{[]}"))     # Output: True`,
        explanation: "Use stack to track opening brackets. When closing, match with top of stack.",
        hint: "Use stack for opening brackets. For closing brackets, check if matches top."
    }
];
