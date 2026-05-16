def counter1(text):
    letter_counts = {letter: 0 for letter in 'abcdefghijklmnopqrstuvwxyz'}

    for i in text:
        if i in letter_counts: 
            letter_counts[i] += 1

    for letter, count in letter_counts.items():
        print(f"{letter} count: {count}")