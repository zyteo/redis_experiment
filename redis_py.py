import redis
from dotenv import dotenv_values

config = dotenv_values(".env")

r = redis.Redis(
    host=config["REDIS_HOST"],
    port=config["REDIS_PORT"],
    password=config["REDIS_PASSWORD"],
)

r.set("foo", "bar")
value = r.get("foo")
print(value)
