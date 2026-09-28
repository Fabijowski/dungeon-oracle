/* 
1. Create your data
Create arrays containing at least 5 items each for:
character classes
dungeons
enemies
weapons
possible outcomes
rewards
For example, your character classes could contain: Warrior, Mage, Rogue, Ranger, Cleric

*/

const character_classes = ["warrior", "mage", "rogue", "ranger", "cleric"];
const dungeons = ["Forgotten Castle", "Ancient Crypt", "Dark Forest", "Volcanic Caverns", "Frozen Ruins"];
const enemies = ["Goblin", "Skeleton", "Orc", "Giant Spider","Dark Mage"];
const weapons = ["Swords","axes","wands","spellbooks","short swords","daggers","spears","maces","holy symbols"];
const possible_outcomes = ["Victory","Defeat","Escape","Barely survive","Become cursed"];
const rewards = ["Powerful weapons","armor","shields","magical staffs","enchanted items","gold","lockpicks","traps","hunting equipment"];

const player_name = "Alex";

const random_select_adventure = () => {
    const random_character_class = Math.floor(Math.random() * character_classes.length );
    console.log(character_classes[random_character_class]);

        const random_dungeons = Math.floor(Math.random() * dungeons.length );
    console.log(dungeons[random_dungeons]);

        const random_enemies = Math.floor(Math.random() * enemies.length );
    console.log(enemies[random_enemies]);

        const random_weapons = Math.floor(Math.random() * weapons.length );
    console.log(weapons[random_weapons]);

        const random_possible_outcomes = Math.floor(Math.random() * possible_outcomes.length );
    console.log(possible_outcomes[random_possible_outcomes]);

    const random_rewards = Math.floor(Math.random() * rewards.length );
    console.log(rewards[random_rewards]);
};

random_select_adventure();

console.log(
    "================================" + ".\n"
    + " THE DUNGEON ORACLE " + ".\n"
    + "================================" + ".\n"
    + "Welcome, " + player_name + "!\n"
    + "You are" + random_character_class + ".\n"
    + "Your adventure beings in the " + random_dungeons + ".\n"
    + "You encounter a " + random_enemies + ".\n"
    + "Luckily, you are carrying the " + random_weapons + ".\n"
    + "You defeat the " + random_enemies + ".\n"
    + "Your reward is " + random_rewards + ".\n"
);
