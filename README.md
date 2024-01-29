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

lists
LPUSH orders ryu
LPUSH orders chun-li
RPUSH orders blanka ken
LPUSH orders sagat balrog
LPOP orders 1
RPOP orders 2
LLEN orders
LRANGE orders 0 1
LRANGE orders 0 2
LRANGE orders -2 -1
LINDEX orders 1
LPOS orders ryu

hashes
HSET books:1 title "Name of the Wind"
HSET books:1 author "Patrick Rothfuss"
HSET books:1 rating 9
HSET books:1 rating 10
HSET books:2 title "Adventures of Tom Sawyer" author "Mark Twain" rating 8
HGET books:1 title
HGETALL books:2
HEXISTS books:1 title
HEXISTS books:1 abc
HKEYS books:2
HDEL books:1 author
DEL books:1
HVALS books:2

sorted sets
ZADD books 7 "the name of the wind" 2 "the final empire" 9 "the long earth"
ZADD books 1 "the final empire"
ZADD books NX 5 "the final empire"
ZADD books NX 5 "the final empireS"
ZRANGE books 0 -1
DEL books
```
