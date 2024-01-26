### Redis

```
SET name yoshi
GET name
SET name2 "Chun Li"
DEL name2
MSET name mario rating 10 colour red
MGET name rating colour
GETRANGE name 0 3
GETRANGE name -3 -1
SETRANGE name 2 zy
INCR rating
DECR rating
INCRBY rating 10
DECRBY rating 10

SET name yoshi EX 10
SET name yoshi XX
SET name yoshi NX
SET name peach GET

sets
SADD names mario
SADD names peach yoshi
SREM names yoshi
SADD moreNames link zelda
SUNION names moreNames
SISMEMBER names link
SMEMBERS names peach
```