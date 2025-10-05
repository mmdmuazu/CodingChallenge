# question : create a program that when parentases is open it must be closed properly
# eg : '{}' = valid, {]} = invalid, {([])} = valid

def is_valid_parentheses(s:str) -> bool:
    stack= []
    mapping = {')':'(', '}':'{', ']':'['}
    # print('}' in mapping)
    for char in s:
        if char in mapping.values():
            stack.append(char)
        elif char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            return True
            
    return not stack    
print(is_valid_parentheses("{([])a"))  # True
 