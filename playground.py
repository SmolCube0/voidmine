import random as rand

lootTable = {
    "wood":100,
    "coal":80,
    "gold":25,
    "ruby":5,
    "diamond":1
}

print(lootTable[1])
loot = [rand.randint(1,100) if lootTable[item] <= ]