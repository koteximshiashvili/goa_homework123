board = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "X", "O", "", ""],
    ["", "", "X", "X", "X", "", ""],
    ["", "", "O", "O", "X", "O", ""],
    ["", "X", "X", "O", "X", "O", ""],
    ["X", "O", "X", "O", "X", "O", ""]
]

rows = len(board)
cols = len(board[0])

winner = None

for r in range(rows):
    for c in range(cols - 3):
        if board[r][c] == board[r][c + 1] == board[r][c + 2] == board[r][c + 3] and board[r][c] != "":
            winner = board[r][c]
            break
    if winner:
        break

if not winner:
    for c in range(cols):
        for r in range(rows - 3):
            if board[r][c] == board[r + 1][c] == board[r + 2][c] == board[r + 3][c] and board[r][c] != "":
                winner = board[r][c]
                break
        if winner:
            break

print(winner)
