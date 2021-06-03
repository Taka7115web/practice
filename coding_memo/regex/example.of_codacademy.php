①character sets
con[sc]en[sc]us
→consensus
→concensus
→consencus
→concencus

②wildcards (any charactor)
I ate . bananas
→I ate 3 bananas
→I ate a bananas

③grouping
I love (baboons|gorillas).
→I love baboons.
→I love gorillas.

④ranges
I (adopted|was bit by|collected) [2-9] [b-h]ats
→I adopted 5 cats
→I was bitten by 2 bats
→I collected 4 hats

⑤\w    [A-Za-z0-9_]
→It matches a single uppercase character, lowercase character, digit or underscore.

⑥\d    [0-9]

⑦\s    [ \t\r\n\f\v]
→It matchs a single space, tab, carriage return, line break, form feed, or vertical tab.

⑧Fixed quantifiers

・\w{3}   (This match exactly 3 word characters)
→cat
→car
→cut

・\w{5,10}  (This match at minimum 5 word characters and at maximum 10 word characters)

⑨?  (Optional quantifiers)
"?" indicate a character in a regex is optional, or can appear either 0 times or 1 time. 

・humou?r
→humor
→humour

・The monkey ate a (rotten )?banana.
→The monkey ate a rotten banana.
→The monkey ate a banana.

⑩*  (Kleene star)
"*" is a quantifier and matches the preceding character 0 or more times.

meo*w
→mew
→meooow
→meoooooooooooow

⑪+  (Kleene plus)
"+"  matches the preceding character 1 or more times.

meo+w
→meow
→meooow
→meoooooooooooow
※"mew" is NG.

⑫^  (anchors hat)
This match text at the start of a string.

⑬$  (anchors dollar sign)
This match text at the end of a string.

・^Monkeys is my mortal enemy.
→Monkeys is my mortal enemy.
→Monkeys is my mortal enemy. I hate them.

・Monkeys is my mortal enemy.$
→Monkeys is my mortal enemy.
→By the way, Monkeys is my mortal enemy.

・^Monkeys is my mortal enemy.$
→Monkeys is my mortal enemy.

