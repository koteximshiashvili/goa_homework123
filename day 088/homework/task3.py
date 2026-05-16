def sep_str(st): 
    if not st: 
        return []

    z = st.split()
    
    x = 0
    for y in z:
        if len(y) > x:
            x = len(y)
    
    a = []
    for b in range(x): 
        c = []  
        for d in range(len(z)):
            c.append('')
        a.append(c)
    
    for e in range(len(z)):
        for f in range(len(z[e])):
            a[f][e] = z[e][f]
    
    return a