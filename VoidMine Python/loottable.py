import math
import json
from pathlib import Path

resourceStats = Path("resourcestats.json")
import random as rand
# fix json stuff, merge lootTable with resourceStats

lootTable = {
    "wood":100,
    "coal":80,
    "gold":25,
    "ruby":5,
    "diamond":1
}

lootItems = list(lootTable.keys())
lootChances = list(lootTable.values())
"""drops = rand.choices(lootItems,weights=lootChances,k=len(lootItems))
print(drops)"""
drops = []
for i in range(len(lootItems)):
    roll = rand.uniform(0,100)
    if roll <= lootChances[i]:
        drops.append(lootItems[i])

print(drops)