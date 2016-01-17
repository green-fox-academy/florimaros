def tornyok(n, honnan, hova, tartalek):
    if n == 1:
        print(str(honnan) + '. rúdról átmozgatjuk a ', str(hova) + '. rúdra')
    else:
        tornyok(n-1, honnan, tartalek, hova)
        tornyok(1, honnan, hova, tartalek)
        tornyok(n-1, tartalek, hova, honnan)
